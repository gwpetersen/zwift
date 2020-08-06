
import { getCypressConfig } from '../../support/cypress.config';
import NavBar from '../../support/nav/navbar';

const {
    baseUrl,
} = getCypressConfig();

describe('Home Page', () => {

    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it('has the correct pathname and title', () => {
       cy.title().should('eq', 'The at Home Cycling & Running Virtual Training App')
       cy.location('pathname').should('eq', '/')
       cy.findByText('Welcome To Zwift');
    });

    it('redirects to /events', () => {
        cy.viewport(1280, 650)
        NavBar.events().click();
        cy.location('pathname').should('eq', '/events');
        cy.title().should('eq', 'Zwift | Events on Zwift');
     });

     it('Mobile View redirects to /events', () => {
        cy.viewport('iphone-x');
        cy.get('#znv-header-open-burger').click();
        NavBar.events().click({force: true});
        cy.location('pathname').should('eq', '/events');
        cy.title().should('eq', 'Zwift | Events on Zwift');
     });


});