import { IIconProps, IconConstruction, IconRocketLaunch } from '@novu/design-system';
import { useEnvController, ROUTES } from '@novu/shared-web';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
