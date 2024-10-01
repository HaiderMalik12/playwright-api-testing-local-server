const { test, expect, } = require('@playwright/test');

test('should update the booking', async ({ request }) => {
    const response = await request.put('/booking/1', {
        data: {
            firstname: "Jane",
            lastName: "Doe",
            totalprice: 1123,
            depositpaid: true,
            bookingdates: {
                checkin: "2024-08-09",
                checkout: "2024-09-09"
            }
        }
    });
    const responseBody = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(responseBody.booking).toHaveProperty('firstname', 'Jane')

    // expect(responseBody.booking).toHaveProperty('firstname', 'Jane')
})