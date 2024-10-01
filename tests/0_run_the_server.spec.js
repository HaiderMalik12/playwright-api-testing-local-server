const {test, expect} = require('@playwright/test');


test('A server should be running', async({request}) => {
    const response =await request.get('/');
    const responseBody = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(responseBody.msg).toBe('Hello World')
})