import { ROUTES } from '@novu/shared-web';
import { FC } from 'react';
import { useMatch, useRoutes } from 'react-router-dom';
import { css } from '../../styled-system/css';
import { RootNavMenu } from './RootNavMenu';
import { SettingsNavMenu } from './SettingsNavMenu';

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

interface ISidebarNavProps {
  root: JSX.Element;
  routeMenus?: Record<Partial<ROUTES>, JSX.Element>;
}

export const SidebarNav: FC<ISidebarNavProps> = () => {
  const settingsPageMatch = useMatch(`${ROUTES.SETTINGS}/*`);

  return <aside className={sidebarStyle}>{settingsPageMatch ? <SettingsNavMenu /> : <RootNavMenu />}</aside>;
};

export const MainNav: FC<IMainNavProps> = () => {
  return <SidebarNav root={<RootNavMenu />} />;
};
