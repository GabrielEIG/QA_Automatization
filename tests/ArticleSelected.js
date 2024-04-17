import { Builder, Browser, By, Key, until } from 'selenium-webdriver'
import fs from 'fs';

export const ArticleSelected = async () => {

  let driver = await new Builder().forBrowser(Browser.CHROME).build()

  try {
    await driver.get('https://oxbabel.netlify.app/');

    await driver.wait(until.elementLocated(By.id('hero')), 10000);
    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/articleSelected/Success paso 1.png', data, 'base64');
    });
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");

    await driver.sleep(5000);
    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/articleSelected/Success paso 2.png', data, 'base64');
    });
    // Localiza el componente que contiene los divs a recorrer
    const container = await driver.findElement(By.css('div.row.gy-4.justify-content-center'));
    // Encuentra todos los divs dentro del contenedor especificado
    

    // Recorrer cada div y realizar alguna acción, por ejemplo, obtener el texto
    for (let i = 0; i< 3; i++) {


      await driver.wait(until.elementLocated(By.css(`a.details-link`)), 50000);
      const div = await container.findElements(By.css(`a.details-link`));
      const item = await container.findElements(By.css(`a.details-link`));

      await item[i].click();

      await driver.sleep(3000);
      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/articleSelected/Success paso 3.png', data, 'base64');
      });
      const modalBody = await driver.findElement(By.id(`modalFom${i+1}`)); 

      await driver.executeScript("arguments[0].scrollTop = arguments[0].scrollHeight", modalBody);
      
      await driver.sleep(3000);
      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/articleSelected/Success paso 4.png', data, 'base64');
      });
      const button = await driver.findElement(By.id(`modalFom${i+1}`)); 
      const closeButton = await button.findElement(By.css('button[data-bs-dismiss="modal"]'));
      await closeButton.click();


      await driver.sleep(3000);


    }

    return true;
  }finally{

    setTimeout(() => driver.quit());


  }
}

