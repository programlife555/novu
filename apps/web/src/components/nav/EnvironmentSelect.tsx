import { IconRocketLaunch, Select } from '@novu/design-system';
import { css } from '../../styled-system/css';
import { useOrganizationSelect } from '../layout/components/OrganizationSelect';

export const EnvironmentSelect = () => {
  const selectProps = useOrganizationSelect();

  return (
    <Select
      data-test-id="environment-select-select"
      className={css({ '& input': { bg: 'transparent', border: 'none !important' } })}
      creatable
      searchable
      getCreateLabel={(newOrganization) => <div>+ Add "{newOrganization}"</div>}
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
          <IconRocketLaunch />
        </span>
      }
      {...selectProps}
    />
  );
};
