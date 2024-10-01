// @ts-check
const { test, expect } = require('@playwright/test');

test('should be able to get subset of booking details using query parameters', async ({ request }) => {
    const response = await request.get(`/getBooking?firstname=Jim`);
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});