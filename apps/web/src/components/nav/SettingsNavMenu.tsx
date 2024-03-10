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
import { NavMenu } from './NavMenu';
import { NavMenuLinkButton, NavMenuToggleButton } from './NavMenuButton';
import { NavMenuSection } from './NavMenuSection';

export const SettingsNavMenu: React.FC = () => {
  return (
    <NavMenu variant="nested" title="Settings">
      <NavMenuSection title="Account">
        <NavMenuLinkButton
          label="User profile"
          isVisible
          icon={<IconManageAccounts />}
          link={'/workflows'}
          testId="side-nav-settings-user-profile"
        ></NavMenuLinkButton>
      </NavMenuSection>
      <NavMenuSection title="Organization <ORG NAME>">
        <NavMenuLinkButton
          label="Organization profile"
          isVisible
          icon={<IconRoomPreferences />}
          link={'/todo'}
          testId="side-nav-settings-translations-link"
        ></NavMenuLinkButton>
        <NavMenuLinkButton
          label="Access security"
          isVisible
          icon={<IconAdminPanelSettings />}
          link={'/todo'}
          testId="side-nav-settings-translations-link"
        ></NavMenuLinkButton>
        <NavMenuLinkButton
          label="Team members"
          isVisible
          icon={<IconGroup />}
          link={'/todo'}
          testId="side-nav-settings-translations-link"
        ></NavMenuLinkButton>
        <NavMenuLinkButton
          label="Branding"
          isVisible
          icon={<IconWorkspacePremium />}
          link={'/todo'}
          testId="side-nav-settings-translations-link"
        ></NavMenuLinkButton>
        <NavMenuLinkButton
          label="Billing plans"
          isVisible
          icon={<IconCreditCard />}
          link={'/todo'}
          testId="side-nav-settings-translations-link"
        ></NavMenuLinkButton>
      </NavMenuSection>
      <NavMenuSection title="Environments <ORG NAME>">
        <NavMenuToggleButton icon={<IconConstruction />} label={'Development'} testId="side-nav-settings-development">
          <NavMenuLinkButton
            label="API keys"
            isVisible
            icon={<IconKey />}
            link={'/todo'}
            testId="side-nav-settings-development-api-keys"
          ></NavMenuLinkButton>
          <NavMenuLinkButton
            label="Inbound webhook"
            isVisible
            icon={<IconWebhook />}
            link={'/todo'}
            testId="side-nav-settings-development-inbound-webhook"
          ></NavMenuLinkButton>
        </NavMenuToggleButton>
        <NavMenuToggleButton icon={<IconRocketLaunch />} label={'Production'} testId="side-nav-settings-production">
          <NavMenuLinkButton
            label="API keys"
            isVisible
            icon={<IconKey />}
            link={'/todo'}
            testId="side-nav-settings-production-api-keys"
          ></NavMenuLinkButton>
          <NavMenuLinkButton
            label="Inbound webhook"
            isVisible
            icon={<IconWebhook />}
            link={'/todo'}
            testId="side-nav-settings-production-inbound-webhook"
          ></NavMenuLinkButton>
        </NavMenuToggleButton>
      </NavMenuSection>
    </NavMenu>
  );
};
