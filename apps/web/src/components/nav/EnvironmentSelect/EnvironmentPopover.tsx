import { Popover } from '@mantine/core';
import { IconClose } from '@novu/design-system';
import { MouseEventHandler, PropsWithChildren } from 'react';
import { css } from '../../../styled-system/css';

const popoverDropdownStyle = css({
  py: '75',
  pl: '100',
  pr: '125',
  backgroundColor: 'surface.popover',
  position: 'absolute',
  color: 'typography.text.main',
  border: 'none',
  shadow: 'medium !important',
});

const popoverArrowStyle = css({
  backgroundColor: 'typography.text.main',
  height: '50',
  border: 'none',
  margin: '0',
});

const linkStyles = css({
  fontWeight: 'bold',
  textDecoration: 'underline',

  '&:hover': {
    cursor: 'pointer',
  },
});

const closeButtonStyles = css({
  position: 'absolute',
  cursor: 'pointer',
  top: '7px',
  zIndex: '2',
  right: '10px',
  '& svg': {
    fill: 'typography.text.main',
  },
});

interface IEnvironmentPopoverProps {
  handlePopoverLinkClick: MouseEventHandler;
  isPopoverOpened: boolean;
  setIsPopoverOpened: (newVal: boolean) => void;
}

export const EnvironmentPopover: React.FC<PropsWithChildren<IEnvironmentPopoverProps>> = ({
  children,
  isPopoverOpened,
  setIsPopoverOpened,
  handlePopoverLinkClick,
}) => {
  return (
    <Popover
      classNames={{
        arrow: popoverArrowStyle,
        dropdown: popoverDropdownStyle,
      }}
      withArrow
      opened={isPopoverOpened}
      onClose={() => setIsPopoverOpened(false)}
      withinPortal={true}
      transition="rotate-left"
      transitionDuration={250}
      position="right"
      radius="md"
    >
      <Popover.Target>{children}</Popover.Target>
      <Popover.Dropdown>
        <div style={{ maxWidth: '220px', paddingRight: '10px' }}>
          <button className={closeButtonStyles} onClick={() => setIsPopoverOpened(false)} aria-label="Close popover">
            <IconClose />
          </button>
          {'To make changes you’ll need to visit '}
          <a className={linkStyles} onClick={handlePopoverLinkClick}>
            development changes
          </a>{' '}
          {' and promote the changes from there'}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
