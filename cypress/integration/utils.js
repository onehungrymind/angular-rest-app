export const getApp = () =>
  cy.get('app-root');

export const getHeader = () =>
  getApp().find('md-toolbar');
