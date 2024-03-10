import { IconConstruction, IconRocketLaunch, IIconProps, Select } from '@novu/design-system';
import { ROUTES, useEnvController } from '@novu/shared-web';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '../../styled-system/css';
import { EnvironmentPopover } from './EnvironmentPopover';

const ENVIRONMENTS = ['Development', 'Production'] as const;
type EnvironmentOption = (typeof ENVIRONMENTS)[number];

const ENVIRONMENT_ICON_LOOKUP: Record<EnvironmentOption, React.ReactElement<IIconProps>> = {
  Development: <IconConstruction />,
  Production: <IconRocketLaunch />,
};

export const useEnvironmentSelect = () => {
  const navigate = useNavigate();
  const [isPopoverOpened, setIsPopoverOpened] = useState<boolean>(false);

  const { setEnvironment, isLoading, environment, readonly } = useEnvController({
    onSuccess: (newEnvironment) => {
      setIsPopoverOpened(!!newEnvironment?._parentId);
    },
  });

  async function handlePopoverLinkClick(e) {
    e.preventDefault();

    await setEnvironment('Development');
    navigate(ROUTES.CHANGES);
  }

  return {
    loading: isLoading,
    data: ENVIRONMENTS.map((value) => ({
      label: value,
      value,
    })),
    defaultValue: environment?.name,
    value: environment?.name,
    onChange: async (value) => {
      await setEnvironment(value);
    },
    readonly,
    icon: environment?.name ? ENVIRONMENT_ICON_LOOKUP[environment.name] : null,
    isPopoverOpened,
    setIsPopoverOpened,
    handlePopoverLinkClick,
  };
};

export const EnvironmentSelectRenderer: React.FC<ReturnType<typeof useEnvironmentSelect>> = ({
  icon,
  isPopoverOpened,
  setIsPopoverOpened,
  handlePopoverLinkClick,
  ...selectProps
}) => {
  return (
    <EnvironmentPopover
      isPopoverOpened={isPopoverOpened}
      setIsPopoverOpened={setIsPopoverOpened}
      handlePopoverLinkClick={handlePopoverLinkClick}
    >
      <Select
        className={css({ '& input': { bg: 'transparent', border: 'none !important' } })}
        allowDeselect={false}
        icon={
          <span
            className={css({
              p: '50',
              mr: '100',
              // TODO: use design system values when available
              borderRadius: '8px',
              bg: 'surface.page',
              '& svg': {
                fill: 'typography.text.main',
              },
            })}
          >
            {icon}
          </span>
        }
        {...selectProps}
      />
    </EnvironmentPopover>
  );
};

export const EnvironmentSelect = () => {
  const props = useEnvironmentSelect();

  return <EnvironmentSelectRenderer {...props} />;
};
