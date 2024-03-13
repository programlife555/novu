import { FC } from 'react';
import { RootNavMenu } from './RootNavMenu';
import { SidebarNav } from './SidebarNav';

export const MainNav: FC = () => {
  return <SidebarNav root={<RootNavMenu />} />;
};
