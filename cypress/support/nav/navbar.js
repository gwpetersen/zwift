const NavBar = {
    getStarted() {
        return cy.findAllByText('Get Started').first();
    },
    training() {
        return cy.findAllByText('Training').first();
    },
    run() {
        return cy.findAllByText('Run').first();
    },
    offRoad() {
        return cy.findAllByText('Off-Road').first();
    },
    shop() {
        return cy.findAllByText('Shop').first();
    },
    events() {
        return cy.findAllByText('Events').first();
    },
    support() {
        return cy.findAllByText('Support').first();
    }
};
export default NavBar;