const webdriver = require('selenium-webdriver');

// Input capabilities
const capabilities = {
  browserName: 'Chrome',
  browser_version: '62.0',
  os: 'Windows',
  os_version: '10',
  resolution: '1920x1080',
  'browserstack.user': 'ajroos2',
  'browserstack.key': 'yCn1QyZcCPFE91bzz7pn',
  project: 'Personal Website',
};

const driver = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(capabilities)
  .build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
driver.findElement(webdriver.By.name('btnG')).click();

driver.getTitle().then(title => {
  console.log(title);
});

driver.quit();
