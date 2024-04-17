import { Builder, Browser, By, Key, until } from 'selenium-webdriver'
import fs from 'fs';

export const AboutAdmin = async () => {

  let driver = await new Builder().forBrowser(Browser.CHROME).build()

  try {
    await driver.get('https://oxbabel.netlify.app/');

    await driver.wait(until.elementLocated(By.css('i.mobile-nav-toggle.mobile-nav-show.bi.bi-list')), 50000)

    const menu = await driver.findElement(By.css('i.mobile-nav-toggle.mobile-nav-show.bi.bi-list'));

    menu.click();

    await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/aboutAdmin/Success paso 1.png', data, 'base64');
      });

      await driver.sleep(5000);

    await driver.wait(until.elementLocated(By.css('a[href="/quien-soy"')), 50000)

    const aboutAdmin = await driver.findElement(By.css('a[href="/quien-soy"'));
    
    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/aboutAdmin/Success paso 2.png', data, 'base64');
    });
    await aboutAdmin.click()

    await driver.sleep(5000);


    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/aboutAdmin/Success paso 3.png', data, 'base64');
    });

    await driver.wait(until.elementLocated(By.css('a.btn-get-started[href="/contactame"]')), 10000);
    const contact = driver.findElement(By.css('a.btn-get-started[href="/contactame"]'));
    await contact.click();
    // Localiza el componente que contiene los divs a recorrer
    await driver.sleep(5000);

    await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/aboutAdmin/Success paso 4.png', data, 'base64');
      });
      await driver.sleep(5000);

    return true;
  }finally{

    setTimeout(() => driver.quit());


  }
}
