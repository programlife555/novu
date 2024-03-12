import { IconArrowDropDown, IconArrowDropUp, IIconProps } from '@novu/design-system';
import { LocalizedMessage } from '@novu/shared-web';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from '../../styled-system/css';
import { Flex, HStack, styled } from '../../styled-system/jsx';
import { text } from '../../styled-system/recipes';

interface INavMenuButtonProps {
  icon: React.ReactElement<IIconProps>;
  label: LocalizedMessage;
  rightSide?: ReactNode;
  isVisible?: boolean;
  tooltipLabel?: LocalizedMessage;
  testId?: string;
}

const Text = styled('span', text);

interface INavMenuLinkButtonProps extends INavMenuButtonProps {
  link: string;
}

const rawButtonBaseStyles = css.raw({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  position: 'relative',
  py: '100',
  px: '125',
  background: 'transparent',
  // TODO: design system values when available
  borderRadius: '7px',
  color: 'typography.text.secondary !important',
  '& svg': {
    fill: 'typography.text.secondary',
  },
  fontWeight: 'strong',
  fontFamily: 'system',

  // &.active is necessary to work with the react-router-dom className they generate
  '& _active, &.active': {
    position: 'relative',
    background: 'surface.page !important',
    // TODO: design system values when available
    boxShadow: 'medium',
    backgroundClip: 'padding-box',
    color: 'typography.text.main !important',
    '& svg': {
      fill: 'typography.text.main',
    },
  },

  _hover: {
    background: 'surface.page !important',
    color: 'typography.text.main !important',
    '& svg': {
      fill: 'typography.text.main',
    },
    boxShadow: 'medium',
  },
});

const rawLinkButtonStyles = css.raw({
  '& _active, &.active': {
    _before: {
      content: '""',
      position: 'absolute',
      width: '50',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: '7px 0px 0px 7px',
      bgGradient: 'vertical',
    },
  },
});

export const NavMenuLinkButton: FC<PropsWithChildren<INavMenuLinkButtonProps>> = ({
  rightSide,
  testId,
  icon,
  link,
  label,
  isVisible = true,
}) => {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return isVisible ? (
    <NavLink
      className={css(rawButtonBaseStyles, rawLinkButtonStyles)}
      to={link}
      data-test-id={testId}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <HStack gap="75">
        {icon}
        <Text variant={'strong'} color="typography.text.secondary">
          {label}
        </Text>
      </HStack>
      {rightSide ? rightSide : null}
    </NavLink>
  ) : null;
};

type INavMenuToggleButtonProps = Omit<INavMenuButtonProps, 'rightSide'>;

export const NavMenuToggleButton: FC<PropsWithChildren<INavMenuToggleButtonProps>> = ({
  testId,
  icon,
  label,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <button className={css(rawButtonBaseStyles)} data-test-id={testId} onClick={handleClick}>
        <HStack justifyContent={'space-between'} w="inherit">
          <HStack gap="75">
            {icon}
            <Text variant={'strong'} color="typography.text.secondary">
              {label}
            </Text>
          </HStack>
          {isOpen ? <IconArrowDropUp /> : <IconArrowDropDown />}
        </HStack>
      </button>
      <Flex direction={'column'} pl="150">
        {!isOpen ? null : children}
      </Flex>
    </>
  );
};
