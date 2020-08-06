const EventsPage = {
    selectEventsOption(category) {
        cy.get('#filter-location > option')
            .contains(new RegExp(`^${category}$`, "g"))
            .parent()
            .select(category);
    },
    sport() {
        return cy.findAllByText('Sport:').next();
    },
    hasResults() {
        return cy.get('column > .tab-listing').then(($body) => {
            return $body.find('.listing-map').length > 0;
        })
    },
    listings() {
        return cy.get('.listing-header');
    },
    eventListingTimes() {
        return cy.get('.listing-header > span');
    }
};
export default EventsPage;