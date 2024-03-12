import {
  IconManageAccounts,
  IconRoomPreferences,
  IconAdminPanelSettings,
  IconGroup,
  IconWorkspacePremium,
  IconCreditCard,
  IconConstruction,
  IconKey,
  IconWebhook,
  IconRocketLaunch,
} from '@novu/design-system';
import { ROUTES, useAuthContext } from '@novu/shared-web';
import { NavMenu } from './NavMenu';
import { NavMenuLinkButton, NavMenuToggleButton } from './NavMenuButton';
import { NavMenuSection } from './NavMenuSection';

const getSettingsRoute = (route?: ROUTES) => `${ROUTES.SETTINGS}${route ?? ''}`;

export const SettingsNavMenu: React.FC = () => {
  const { currentOrganization } = useAuthContext();

  // TODO: Parentheses were not part of designs, but I believe it's much clearer this way
  const getOrgScopedTitle = (title: string) => `${title} ${`(${currentOrganization?.name})` ?? ''}`;

  return (
    <NavMenu variant="nested" title="Settings">
      <NavMenuSection title="Account">
        <NavMenuLinkButton
          label="User profile"
          isVisible
          icon={<IconManageAccounts />}
          // TODO: add new route for profile
          link={ROUTES.SETTINGS}
          testId="side-nav-settings-user-profile"
        ></NavMenuLinkButton>
      </NavMenuSection>
      <NavMenuSection title={getOrgScopedTitle('Organization')}>
        <NavMenuLinkButton
          label="Organization profile"
          isVisible
          icon={<IconRoomPreferences />}
          // TODO: new route for Organization
          link={getSettingsRoute(ROUTES.SETTINGS)}
          testId="side-nav-settings-translations-link"
        ></NavMenuLinkButton>
        <NavMenuLinkButton
          label="Access security"
          isVisible
          icon={<IconAdminPanelSettings />}
          // TODO: add new route for Security
          link={getSettingsRoute(ROUTES.SETTINGS)}
          testId="side-nav-settings-translations-link"
        ></NavMenuLinkButton>
        <NavMenuLinkButton
          label="Team members"
          isVisible
          icon={<IconGroup />}
          link={getSettingsRoute(ROUTES.TEAM)}
          testId="side-nav-settings-translations-link"
        ></NavMenuLinkButton>
        <NavMenuLinkButton
          label="Branding"
          isVisible
          icon={<IconWorkspacePremium />}
          link={getSettingsRoute(ROUTES.BRAND)}
          testId="side-nav-settings-translations-link"
        ></NavMenuLinkButton>
        <NavMenuLinkButton
          label="Billing plans"
          isVisible
          icon={<IconCreditCard />}
          // TODO: add new route for Billing
          link={getSettingsRoute(ROUTES.SETTINGS)}
          testId="side-nav-settings-translations-link"
        ></NavMenuLinkButton>
      </NavMenuSection>
      <NavMenuSection title={getOrgScopedTitle('Environments')}>
        <NavMenuToggleButton icon={<IconConstruction />} label={'Development'} testId="side-nav-settings-development">
          <NavMenuLinkButton
            label="API keys"
            isVisible
            icon={<IconKey />}
            // TODO: add new route for development/keys
            link={getSettingsRoute(ROUTES.SETTINGS)}
            testId="side-nav-settings-development-api-keys"
          ></NavMenuLinkButton>
          <NavMenuLinkButton
            label="Inbound webhook"
            isVisible
            icon={<IconWebhook />}
            // TODO: add new route for development/webhook
            link={getSettingsRoute(ROUTES.SETTINGS)}
            testId="side-nav-settings-development-inbound-webhook"
          ></NavMenuLinkButton>
        </NavMenuToggleButton>
        <NavMenuToggleButton icon={<IconRocketLaunch />} label={'Production'} testId="side-nav-settings-production">
          <NavMenuLinkButton
            label="API keys"
            isVisible
            icon={<IconKey />}
            // TODO: add new route for development/keys
            link={getSettingsRoute(ROUTES.SETTINGS)}
            testId="side-nav-settings-production-api-keys"
          ></NavMenuLinkButton>
          <NavMenuLinkButton
            label="Inbound webhook"
            isVisible
            icon={<IconWebhook />}
            // TODO: add new route for prod/webhook
            link={getSettingsRoute(ROUTES.SETTINGS)}
            testId="side-nav-settings-production-inbound-webhook"
          ></NavMenuLinkButton>
        </NavMenuToggleButton>
      </NavMenuSection>
    </NavMenu>
  );
};
