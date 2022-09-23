import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    private get mainmenu() {
        return $("(//span[text()='Solutions'])[1]");
    }

    private get qualityAssurance() {
         return $('span=Quality Assurance') 
        }

    private get testAutomation() {
         return $('span=Test Automation')
         }

    private get performanceTesting() { 
        return $('span=Performance Testing') 
    }

    private get cyberSecurity() {
         return $('span=Cyber Security')
         }

    private get digitalTransormation() {
         return $('span=Digital Transformation')
         }

    public get toggleSlidingBar() {
        return $(".fusion-main-menu-icon.fusion-icon-sliding-bar");
    }

    public get inputName() {
        return $('#name');
    }

    public get inputEmail() {
        return $('#email_address');
    }

    public get inputPhone() {
        return $('#phone');
    }

    public get inputWebsite() {
        return $('#website');
    }

    public get inputMessage() {
        return $('#message');
    }

    public get btnSendMessage() {
        return $('//button[@type="submit"]');
    }

    //Open application method
    public open() {
        return super.open();
    }

    /**
     * Methods for clicking on sub menus
     */

     public async clickSubMenus(qA:string, tA:string,pT:string,cS:string,dT:string){
    
        //Maximize the browser
        browser.maximizeWindow();

        //click on Quality Assurance
        await this.mainmenu.click();
        await this.qualityAssurance.click();
        expect(await (await this.qualityAssurance).getUrl()).toEqual(qA);

        //click on Test Automation
        await this.mainmenu.click();
        await this.testAutomation.click();
        expect(await (await this.testAutomation).getUrl()).toEqual(tA);

        //click on Performance testing
        await this.mainmenu.click();
        await this.performanceTesting.click();
        expect(await (await this.performanceTesting).getUrl()).toEqual(pT);

        //click on Cyber Security
        await this.mainmenu.click();
        await this.cyberSecurity.click();
        expect(await (await this.cyberSecurity).getUrl()).toEqual(cS);

        //click on Digital Transormation
        await this.mainmenu.click();
        await this.digitalTransormation.click();
        expect(await (await this.digitalTransormation).getUrl()).toEqual(dT);
     }


    //Click on togglebar button
    public async clickToggleBar() {
        
        await (await this.toggleSlidingBar).click();

    }

    //Open the form and enter the details
    public async enterDetails(name: string, email: string, phone: string, website: string, message: string) {

        await this.toggleSlidingBar.click();
        await this.inputName.setValue(name);
        await this.inputEmail.setValue(email);
        await this.inputPhone.setValue(phone);
        await this.inputWebsite.setValue(website);
        await this.inputMessage.setValue(message);
        await this.btnSendMessage.scrollIntoView();
        await this.btnSendMessage.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
   
}

export default new HomePage();
