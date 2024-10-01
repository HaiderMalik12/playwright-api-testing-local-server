const { test, expect, } = require('@playwright/test');

test('should delete the booking', async ({ request }) => {
    const response = await request.delete('/booking/1');
    const responseBody = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
})