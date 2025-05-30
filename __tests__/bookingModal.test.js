// __tests__/bookingModal.test.js
const { chromium } = require('playwright');

let browser;
let page;

const APP_URL = process.env.APP_URL || 'http://localhost:3000';

describe('Booking Modal', () => {
  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  it('should open booking modal when main page "Book Your Facial Today!" button is clicked', async () => {
    await page.goto(APP_URL);

    // Click the "Book Your Facial Today!" button
    await page.click('#open-booking-dialog');

    // Check if the booking modal is visible
    const modal = await page.locator('#booking-modal');
    const displayStyle = await modal.evaluate(node => getComputedStyle(node).display);
    expect(displayStyle).toBe('flex');
  }, 30000); // Increased timeout to 30 seconds

  it('should open booking modal when mobile menu "Book Now" button is clicked', async () => {
    await page.goto(APP_URL);

    // Click the mobile menu icon to open the menu
    await page.click('.menu-icon');

    // Wait for menu animation (if any) and for the button to be available
    await page.waitForSelector('#menu-open-booking-dialog', { state: 'visible' });

    // Click the "Book Now" button in the mobile menu
    await page.click('#menu-open-booking-dialog');

    // Check if the booking modal is visible
    const bookingModal = await page.locator('#booking-modal');
    let bookingModalDisplayStyle = await bookingModal.evaluate(node => getComputedStyle(node).display);
    expect(bookingModalDisplayStyle).toBe('flex');

    // Check if the mobile menu is closed
    const menuContainer = await page.locator('.menu-items-container');
    const menuIsActive = await menuContainer.evaluate(node => node.classList.contains('active'));
    expect(menuIsActive).toBe(false);
  }, 30000); // Adding timeout similar to the previous test

  // New test suite for service pages
  describe('Booking Modal on Service Pages', () => {
    const serviceSlugs = [
      'microneedling',
      'skinbetter-peel',
      'anti-age-peptide-peel',
      'rose-glow-dermaplaning',
      'hydrafacial',
      'customized-facial'
    ];

    serviceSlugs.forEach(slug => {
      it(`should open booking modal on /services/${slug} page`, async () => {
        await page.goto(`${APP_URL}/services/${slug}`);

        const bookNowButton = await page.locator('button#open-booking-dialog');
        // Ensure the button is visible and stable before clicking
        await bookNowButton.waitFor({ state: 'visible', timeout: 10000 });
        await bookNowButton.scrollIntoViewIfNeeded();

        // Adding a small delay or ensuring the button is truly clickable if issues persist
        await page.waitForTimeout(500); // Small delay if needed for sticky elements or animations

        await bookNowButton.click();

        const modal = await page.locator('#booking-modal');
        const displayStyle = await modal.evaluate(node => getComputedStyle(node).display);
        expect(displayStyle).toBe('flex');
      }, 30000); // Timeout for each service page test
    });
  });
});
