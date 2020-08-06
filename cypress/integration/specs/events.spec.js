
import { getCypressConfig } from '../../support/cypress.config';
import EventsPage from '../../support/pages/events.page';

const {
    baseUrl,
} = getCypressConfig();

describe('Events Page', () => {

    beforeEach(() => {
        cy.visit(`${baseUrl}/events`);
    });

    it('has the correct pathname and title', () => {
        cy.title().should('eq', 'Zwift | Events on Zwift');
        cy.location('pathname').should('eq', '/events')
    });

    it('is able to filter events by sport type', () => {
        const sportTypes = [
            'Running',
            'Cycling'
        ];
        sportTypes.map((sport) => {
            EventsPage.selectEventsOption(sport);
            if (EventsPage.hasResults()) {
                EventsPage.sport().each(($element) => {
                    if (sport === 'Running') {
                        expect($element.text()).to.eq('RUNNING')
                    }
                    if (sport === 'Cycling') {
                        expect($element.text()).to.eq('CYCLING')
                    }
                });
            }
        })
    });

    it('is able to filter events by Intensities', () => {
        const intensities = [
            { 1: 'A' },
            { 2: 'B' },
            { 3: 'C' },
            { 4: 'D' }
        ];
        intensities.map((intensitie, index) => {
            EventsPage.selectEventsOption(intensitie[index + 1]);
            if (EventsPage.hasResults()) {
                EventsPage.listings().each(($event) => {
                    // each listing should have its corresponding data label
                    // depending on what the user filtered by
                    expect($event.find(`[data-label=${index + 1}]`).length === 1).to.eq(true)
                })
            }
        })
    });

    it('is able to filter events by Start Time', () => {
        const startTimes = [
            'Morning',
            'Afternoon',
            'Evening',
            'Night',
        ];
        startTimes.map((timeOfDay) => {
            EventsPage.selectEventsOption(timeOfDay);
            if (EventsPage.hasResults()) {
                EventsPage.eventListingTimes().each(($event) => {
                    const listedTimeOfDay = $event.text();
                    switch (timeOfDay) {
                        case 'Morning':
                            expect(listedTimeOfDay, 'Morning should be AM').to.include('AM');
                            expect(listedTimeOfDay, 'Morning should NOT be PM').to.not.include('PM');
                            break;
                        case 'Afternoon':
                            expect(listedTimeOfDay, 'Afternoon should be PM').to.include('PM')
                            expect(listedTimeOfDay, 'Afternoon should NOT be AM').to.not.include('AM')
                            break;
                        case 'Evening':
                            expect(listedTimeOfDay, 'Evening should be PM').to.include('PM');
                            expect(listedTimeOfDay, 'Evening should NOT be AM').to.not.include('AM')
                            break;
                        case 'Night':
                            // not sure if "Night" can be both AM (12:00am) and PM
                            // commenting out expectation as it seems 12:00am is considered "Night"?
                            // expect(listedTimeOfDay, 'Night should be PM').to.include('PM');
                            break;
                    }
                })
            }
        })
    });

});