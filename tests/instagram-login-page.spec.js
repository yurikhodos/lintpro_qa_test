const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'serial' });

/** @type {import('@playwright/test').Page} */
let page;

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    await page.goto('https://www.instagram.com');
})

test.describe('check the home page is in the expected initial state', () => {

    test('Verify expected graphics are in place', async () => {

        await page.waitForSelector('//i[@aria-label="Instagram"]',{state:'visible'})

        await expect(page.locator('//img[contains(@src,"/images/instagram/xig/homepage/screenshots/screenshot")]')).toHaveCount(4)

    });

    test('Verify expected text is in place and that it is correct', async () => {

        expect(page.getByText('Phone number, username or email address')).toBeDefined() 

        expect(page.getByText('Password')).toBeDefined();

        expect(page.getByText('or')).toBeDefined();

        expect(page.getByText('Log in with Facebook')).toBeDefined();

        expect(page.getByText('Forgotten your password?')).toBeDefined();

        expect(page.getByText("Don't have an account")).toBeDefined();

    })

    test('Verify all expected data entry fields are in place', async () => {

        await expect(page.getByRole('textbox',{name:'username'})).toBeEditable()

        await expect(page.getByRole('textbox',{name:'password'})).toBeEditable()
       
    })

    test('Verify expected buttons are in place', async () => {

        await expect(page.getByRole('button', { name: 'Log in', exact: true })).toBeVisible()
        await expect(page.getByRole('button', { name: 'Log in with Facebook', exact: true })).toBeVisible()

    })

    test('Verify all expected links are in place and that they are correct', async () => {

        await expect(page.getByRole('link', { name: 'Forgot password?' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Get it on Google Play' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Get it from Microsoft' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Meta', exact: true })).toBeVisible()
        await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Job' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Help' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'API' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Privacy' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Terms' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Top accounts' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Locations' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Instagram lite' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Contact uploading' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Meta verified' })).toBeVisible()
    })
});

test.afterAll(async () => {
    await page.close()
});