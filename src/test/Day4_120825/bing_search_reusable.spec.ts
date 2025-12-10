import { Page, test } from '@playwright/test';
import { getText, type } from '../Reusable_Actions';

let page: Page; //initialize page variable for browser since we are calling multiple tests

test.beforeAll( async ({ browser }) => {
    page = await browser.newPage();
});

test('search for playwright keyword on bing', async ({}) => {
    await page.goto('https://www.bing.com');
    await page.waitForTimeout(3000); //wait for few seconds
    await type(page, '[name="q"]', 'playwright', 'search box');
    await page.keyboard.press('Enter'); //hitting enter key after typing
});

test('capture the search number on bing for playwright keyword', async ({}) => {
    let searchResult = await getText(page, '[class="sb_count"]', 'search result text');
    console.log("Search result is: " + searchResult);
    let searchNumber = searchResult.split(' ');
    console.log("Search number is: " + searchNumber[1]);
});