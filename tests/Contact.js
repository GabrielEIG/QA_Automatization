import { Builder, Browser, By, Key, until } from 'selenium-webdriver'
import fs from 'fs';

export const Contact = async () => {

    let driver = await new Builder().forBrowser(Browser.CHROME).build();
  
    try {
      
        await driver.get('https://oxbabel.netlify.app/');

        await driver.wait(until.elementLocated(By.css('i.mobile-nav-toggle.mobile-nav-show.bi.bi-list')), 50000)
    
        const menu = await driver.findElement(By.css('i.mobile-nav-toggle.mobile-nav-show.bi.bi-list'));
    
        menu.click();
    
        await driver.takeScreenshot().then((data) => {
            fs.writeFileSync('./results/contact/Success paso 1.png', data, 'base64');
          });
    
          await driver.sleep(5000);
    
        await driver.wait(until.elementLocated(By.css('a[href="/contactame"')), 50000)
    
        const contact = await driver.findElement(By.css('a[href="/contactame"'));
        
        await driver.takeScreenshot().then((data) => {
          fs.writeFileSync('./results/contact/Success paso 2.png', data, 'base64');
        });
        await contact.click()
    
        await driver.sleep(5000);
    
        await driver.wait(until.elementLocated(By.id('name')), 10000);
  
        await driver.findElement(By.id('name')).sendKeys('Pedro');
        await driver.takeScreenshot().then((data) => {
            fs.writeFileSync('./results/contact/Success paso 3.png', data, 'base64');
          });
        await driver.sleep(2000);

        await driver.wait(until.elementLocated(By.id('email')), 10000);
  
        await driver.findElement(By.id('email')).sendKeys('Pedro0714@gmail.com');
        await driver.takeScreenshot().then((data) => {
            fs.writeFileSync('./results/contact/Success paso 4.png', data, 'base64');
          });
        await driver.sleep(2000);

        await driver.wait(until.elementLocated(By.id('subject')), 10000);
  
        await driver.findElement(By.id('subject')).sendKeys('Nuevos juegos para la prxima semana?');
        await driver.takeScreenshot().then((data) => {
            fs.writeFileSync('./results/contact/Success paso 5.png', data, 'base64');
          });
        await driver.sleep(2000);

        await driver.wait(until.elementLocated(By.name('message')), 10000);
  
        await driver.findElement(By.name('message')).sendKeys('Hola quiero saber si habran nuevos juegos, esencialmente si tendran X2 para las monedas', Key.RETURN);
        await driver.takeScreenshot().then((data) => {
            fs.writeFileSync('./results/contact/Success paso 6.png', data, 'base64');
          });
        await driver.sleep(2000);

        await driver.wait(until.elementLocated(By.xpath('//*[@id="contact"]/div/div[2]/div/form/div[4]/button')), 10000);

        const buttonSubmit = await driver.findElement(By.xpath('//*[@id="contact"]/div/div[2]/div/form/div[4]/button'))

        await buttonSubmit.click()

        await driver.sleep(2000);
        await driver.takeScreenshot().then((data) => {
            fs.writeFileSync('./results/contact/Success paso 7.png', data, 'base64');
          });
        await driver.sleep(2000);

      return true;
  
    } catch {
  
      console.log("Problemas en la ejecucion");
  
  
    }finally{
  
      setTimeout(() => driver.quit());
  
    }
  
  }
  