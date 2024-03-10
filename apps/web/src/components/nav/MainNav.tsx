import { FC } from 'react';
import { css } from '../../styled-system/css';
import { RootNavMenu } from './RootNavMenu';

interface IMainNavProps {
  _temp?: string;
}

const sidebarStyle = css({
  position: 'sticky',
  top: 0,
  zIndex: 'auto',
  backgroundColor: 'transparent',
  borderRight: 'none',
  width: '272px',
  minHeight: '100vh',
  p: '100',
  bg: 'surface.panel',
});

export const MainNav: FC<IMainNavProps> = () => {
  return (
    <aside className={sidebarStyle}>
      {/* <SettingsNavMenu /> */}
      <RootNavMenu />
    </aside>
  );
};
