import { test, expect } from '@playwright/test';

test('Login Portal', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Login-Portal/index.html');
  await page.getByPlaceholder("Username").isDisabled();
  await page.getByPlaceholder("Username").fill("LoremIpsum");
  await page.getByPlaceholder("Password").fill("dolorsitamet");
  await page.locator("#login-button").click();
  page.on('dialog', dialog => dialog.accept());
});

test('To Do List - Add New ToDo', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/To-Do-List/index.html');
  await expect(page.getByPlaceholder("Add new todo")).toBeVisible();
  const todoListBefore = await page.locator("//*[@id=\"container\"]/ul/li").all();
  console.log("Before adding item = "+todoListBefore.length);
  await page.getByPlaceholder("Add new todo").fill("Lorem Ipsum");
  await page.keyboard.press("Enter");
  const todoListAfter = await page.locator("//*[@id=\"container\"]/ul/li").all();
  console.log("After adding item = "+todoListAfter.length);
  let assert = require('assert');
  assert.notEqual(todoListBefore,todoListAfter);
});

test('To Do List - Remove ToDo Item', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/To-Do-List/index.html');
  await expect(page.getByPlaceholder("Add new todo")).toBeVisible();
  const todoListBefore = await page.locator("//*[@id=\"container\"]/ul/li").all();
  console.log("Before adding item = "+todoListBefore.length);
  await page.locator("//*[@id=\"container\"]/ul/li[1]").hover();
  await page.locator("//*[@id=\"container\"]/ul/li[1]/span/i").isDisabled();
  await page.locator("//*[@id=\"container\"]/ul/li[1]/span/i").click();
  await page.waitForTimeout(5000);
  const todoListAfter = await page.locator("//*[@id=\"container\"]/ul/li").all();
  console.log("After adding item = "+todoListAfter.length);
  let assert = require('assert');
  assert.notEqual(todoListBefore,todoListAfter);
});