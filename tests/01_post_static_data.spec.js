// @ts-check
const { faker } = require('@faker-js/faker');
const { test, expect } = require('@playwright/test');

//test case 1
test('should be able to create a booking', async ({ request }) => {
    const response = await request.post(`/booking`, {
        data: {
            "id": faker.string.numeric(4),
            "firstname": "Haider",
            "lastname": "Malik",
            "totalprice": 1113,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2024-06-01",
                "checkout": "2024-06-15"
            },
            "additionalneeds": "Lunch"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.booking).toHaveProperty("firstname", "Haider");
    expect(responseBody.booking).toHaveProperty("lastname", "Malik");
    expect(responseBody.booking).toHaveProperty("totalprice", 1113);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
    expect(responseBody.booking).toHaveProperty('additionalneeds', "Lunch")
});