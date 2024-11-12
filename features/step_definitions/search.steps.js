const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const {
  putText,
  getText,
  clickElement,
  buttonDisabled,
} = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("User is on {string} page", async function (string) {
  return await this.page.goto(`https://qamid.tmweb.ru${string}`, {
    setTimeout: 20000,
  });
});

When("The user chooses the day {string}", async function (string) {
  return await clickElement(this.page, string), { setTimeout: 20000 };
});
When("The user chooses the time {string}", async function (string) {
  return await clickElement(this.page, string), { setTimeout: 20000 };
});
When("The user chooses a location {string}", async function (string) {
  return await clickElement(this.page, string), { setTimeout: 20000 };
});
When(
  "The user confirms the choice of location {string}",
  async function (string) {
    return await clickElement(this.page, string), { setTimeout: 20000 };
  }
);

Then(
  "The place is already occupied, the button is not clickable",
  async function (string) {
    return await buttonDisabled(this.page, string), { setTimeout: 20000 };
  }
);

Then(
  "The user sees the ticket receipt button {string}",
  async function (string) {
    const actual = await getText(this.page, string);
    expect(actual).contain("Получить код бронирования");
  }
);
