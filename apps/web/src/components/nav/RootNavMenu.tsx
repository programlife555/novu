import {
  // cspell:disable-next-line
  IconAutorenew,
  IconCellTower,
  IconDomain,
  IconGroup,
  IconOutlineMonitorHeart,
  IconRoute,
  IconSettings,
  IconTaskAlt,
  IconTranslate,
  IconViewQuilt,
} from '@novu/design-system';
import { UTM_CAMPAIGN_QUERY_PARAM } from '@novu/shared';
import { ROUTES } from '@novu/shared-web';
import { HStack } from '../../styled-system/jsx';
import { EnvironmentSelect } from './EnvironmentSelect';
import { NavMenu } from './NavMenu';
import { NavMenuLinkButton } from './NavMenuButton';
import { NavMenuSection } from './NavMenuSection';
import { OrganizationSelect } from './OrganizationSelect/v2/OrganizationSelect';

export const RootNavMenu: React.FC = () => {
  return (
    <NavMenu variant="root">
      <NavMenuSection>
        <OrganizationSelect />
        <NavMenuLinkButton
          label="Get started"
          isVisible={true}
          icon={<IconTaskAlt />}
          link={ROUTES.GET_STARTED}
          // rightSide: { component: <VisibilityOff onClick={handleHideOnboardingClick} /> displayOnHover: true }} />}
          testId="side-nav-quickstart-link"
          // tooltipLabel: 'Hide this page from menu',
        />
        <NavMenuLinkButton
          icon={<IconCellTower />}
          link={ROUTES.INTEGRATIONS}
          label="Integrations"
          testId="side-nav-integrations-link"
        />
        <NavMenuLinkButton
          label="Settings"
          icon={<IconSettings />}
          link={ROUTES.SETTINGS}
          testId="side-nav-settings-link"
        />
      </NavMenuSection>
      <NavMenuSection>
        <EnvironmentSelect />
        <NavMenuLinkButton
          label="Workflows"
          icon={<IconRoute />}
          link={ROUTES.WORKFLOWS}
          testId="side-nav-templates-link"
        />
        <NavMenuLinkButton
          icon={<IconOutlineMonitorHeart />}
          link={ROUTES.ACTIVITIES}
          label="Activity Feed"
          testId="side-nav-activities-link"
        />
        <NavMenuLinkButton
          label="Change history"
          icon={<IconAutorenew />}
          link={ROUTES.CHANGES}
          testId={'side-nav-changes-link'}
          // rightSide: <ChangesCountBadge />}
          isVisible={true}
        />
        <NavMenuLinkButton
          label="Subscribers"
          icon={<IconGroup />}
          link={ROUTES.SUBSCRIBERS}
          testId="side-nav-subscribers-link"
        />
        <NavMenuLinkButton
          label="Tenants"
          isVisible={true}
          icon={<IconDomain />}
          link={ROUTES.TENANTS}
          testId="side-nav-tenants-link"
        />
        <NavMenuLinkButton label="Layouts" icon={<IconViewQuilt />} link={'/todo'} testId="side-nav-settings-link" />
        <NavMenuLinkButton
          label="Translations"
          isVisible={true}
          icon={<IconTranslate width={20} height={20} />}
          link={ROUTES.TRANSLATIONS}
          testId="side-nav-translations-link"
        />
      </NavMenuSection>
      <RootNavMenuFooter />
    </NavMenu>
  );
};

function RootNavMenuFooter() {
  return (
    <HStack
      textStyle={'text.secondary'}
      color="typography.text.secondary"
      data-test-id="side-nav-root-footer"
      position="fixed"
      bottom={'100'}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://discord.novu.co"
        data-test-id="side-nav-bottom-link-support"
      >
        Support
      </a>
      <p>
        <b>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</b>
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://docs.novu.co${UTM_CAMPAIGN_QUERY_PARAM}`}
        data-test-id="side-nav-bottom-link-documentation"
      >
        Docs
      </a>
      <p>
        <b>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</b>
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/novuhq/novu/issues/new/choose"
        data-test-id="side-nav-bottom-link-share-feedback"
      >
        Share Feedback
      </a>
    </HStack>
  );
}
