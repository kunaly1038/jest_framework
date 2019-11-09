
const timeout = 500000

describe('/ (Home Page)', () => {
  let page
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto('https://developer.db.com/')
  }, timeout)

  afterAll(async () => {
    await page.close()
  })

  test('should load without error', async () => {
    page.waitForSelector('.no-underline cursor', { visible: true, timeout: 10000 })
    
  })
}, timeout)
