const { expect } = require("chai");
const {
  clickElement,
  putText,
  getText,
  buttonDisabled,
} = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");
const { Cli } = require("cucumber");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Booking tickets test", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://qamid.tmweb.ru/client/index.php");
  });

  test("The first happy test", async () => {
    await clickElement(
      page,
      "body nav[class='page-nav'] a:nth-child(6) span:nth-child(1)"
    );
    await clickElement(
      page,
      ".movie-seances__time[href='#'][data-seance-id='217']"
    );
    await clickElement(page, "div:nth-child(5) span:nth-child(8)");
    await clickElement(page, ".acceptin-button");
    const actual = await getText(page, ".acceptin-button");
    expect(actual).contain("Получить код бронирования");
  });

  test("The second happy test", async () => {
    await clickElement(page, "a:nth-child(2)");
    await clickElement(
      page,
      ".movie-seances__time[href='#'][data-seance-id='199']"
    );
    await clickElement(
      page,
      "div[class='buying-scheme__wrapper'] div:nth-child(1) span:nth-child(10)"
    );
    await clickElement(page, ".acceptin-button");
    const actual = await getText(page, ".acceptin-button");
    expect(actual).contain("Получить код бронирования");
  });

  test.only("The sad test", async () => {
    await clickElement(page, "nav[class='page-nav'] a:nth-child(1)");
    await clickElement(
      page,
      ".movie-seances__time[href='#'][data-seance-id='217']"
    );
    const actual = await buttonDisabled(page, ".acceptin-button");
    expect(actual).equal(true);
  });
});
