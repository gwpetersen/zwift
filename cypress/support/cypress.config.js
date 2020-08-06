/**
 * You can specify all env variable based config here
 * 
 */
export const getCypressConfig = () => {
    const config={
        "baseUrl": Cypress.env('BASE_URL') || 'https://zwift.com',
    }
    return config;
}