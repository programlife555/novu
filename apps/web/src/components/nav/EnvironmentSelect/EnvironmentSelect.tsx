import { Select } from '@novu/design-system';
import { css } from '../../../styled-system/css';
import { EnvironmentPopover } from './EnvironmentPopover';
import { useEnvironmentSelect } from './useEnvironmentSelect';

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
