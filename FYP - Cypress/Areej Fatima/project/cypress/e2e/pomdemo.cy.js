import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login Tests', function () {

    it('Login Test 1', () => {


        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        loginPage.enterUsername()
        loginPage.enterPassword()
        loginPage.clickLogin()

        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // cy.get('.oxd-button').click()

    })


    it('Login Test 2', () => {


        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        loginPage.enterUsername()
        loginPage.enterPassword()
        loginPage.clickLogin()

        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // cy.get('.oxd-button').click()

    })

})

