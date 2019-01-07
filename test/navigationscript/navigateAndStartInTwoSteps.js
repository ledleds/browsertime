module.exports = async function(context) {
  await context.navigate('https://www.sitespeed.io');
  // we fetch the selenium webdriver from context
  const webdriver = context.selenium.webdriver;
  const driver = context.selenium.driver;
  // and get hold of some goodies we want to use
  const until = webdriver.until;
  const By = webdriver.By;

  const docLink = driver.findElement(By.linkText('Documentation'));
  // before you start, make your username and password
  await context.measure.start('https://www.sitespeed.io');
  // Before we click on the link, start the measurement
  docLink.click();
  await driver.wait(until.elementLocated(By.linkText('Chrome-HAR')), 6000);
  return context.measure.stop();
};
