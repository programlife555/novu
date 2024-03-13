describe('MainNav', () => {
  beforeEach(function () {
    cy.initializeSession().as('session');
    cy.visit('/');
  });

  it('should render all navigation links', () => {
    // Check if all expected navigation links are present
    cy.getByTestId('side-nav-quickstart-link').should('exist');
    cy.getByTestId('side-nav-integrations-link').should('exist');
    cy.getByTestId('side-nav-settings-link').should('exist');
    cy.getByTestId('side-nav-templates-link').should('exist');
    cy.getByTestId('side-nav-activities-link').should('exist');
    cy.getByTestId('side-nav-changes-link').should('exist');
    cy.getByTestId('side-nav-subscribers-link').should('exist');
    cy.getByTestId('side-nav-tenants-link').should('exist');
    cy.getByTestId('side-nav-translations-link').should('exist');
  });

  it('should navigate to correct routes when clicking links', () => {
    // Check if clicking on a navigation link navigates to the correct route
    cy.getByTestId('side-nav-quickstart-link').click();
    cy.url().should('include', '/get-started');

    cy.getByTestId('side-nav-integrations-link').click();
    cy.url().should('include', '/integrations');

    cy.getByTestId('side-nav-settings-link').click();
    cy.url().should('include', '/settings');
  });

  it('should display settings menu when navigating to settings page', () => {
    // Navigate to the settings page
    cy.getByTestId('side-nav-settings-link').click();

    // Check if the settings menu is displayed
    cy.getByTestId('side-nav-settings-user-profile').should('exist');
    cy.getByTestId('side-nav-settings-organization-link').should('exist');
    cy.getByTestId('side-nav-settings-security-link').should('exist');
    cy.getByTestId('side-nav-settings-team-link').should('exist');
    cy.getByTestId('side-nav-settings-branding-link').should('exist');
    cy.getByTestId('side-nav-settings-billing-link').should('exist');
    cy.getByTestId('side-nav-settings-toggle-development').should('exist');
    cy.getByTestId('side-nav-settings-toggle-production').should('exist');
  });

  it('should display correct environment settings when toggling development/production', () => {
    // Navigate to the settings page
    cy.getByTestId('side-nav-settings-link').click();

    // Toggle development environment
    cy.getByTestId('side-nav-settings-toggle-development').click();
    cy.getByTestId('side-nav-settings-api-keys-development').should('exist');
    cy.getByTestId('side-nav-settings-inbound-webhook-development').should('exist');

    // Toggle production environment
    cy.getByTestId('side-nav-settings-toggle-production').click();
    cy.getByTestId('side-nav-settings-api-keys-production').should('exist');
    cy.getByTestId('side-nav-settings-inbound-webhook-production').should('exist');
  });
});
