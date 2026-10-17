import { test, expect } from '@playwright/test'

test.describe('ProductList Pages', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load', async ({ page }) => {
    await expect(page.locator('#nav > .nav-home')).toHaveText('Home')

    // Compare a full-page screenshot with the baseline (created on first run)
    await expect(page).toHaveScreenshot('should-load.png', { fullPage: true })
  })

  test('click product2 and snapshot', async ({ page }) => {
    await page.click('.hello > .products-wrapper > .product-block:nth-child(2) > .product-image > img')
    await expect(page.locator('#product-title')).toBeVisible()

    await expect(page).toHaveScreenshot('click-product-2.png', { fullPage: true })
  })
})
