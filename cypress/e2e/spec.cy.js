import HomePage from '../pages/homepage'
import InventoryPage from '../pages/inventorypage'

describe ("Swag Labs" , () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });

    it("log in to inventory page", () => {
        HomePage.typeUsername('standard_user');
        HomePage.typePassword('secret_sauce');
        HomePage.clickLogin();
        InventoryPage.clickItemAddToCart();
        InventoryPage.checkItemIsAdded().should('exist');
        InventoryPage.deleteAddedItem();
        InventoryPage.checkItemIsDeleted().should('not.exist');
        InventoryPage.clickLogOut();

    });

});

