class InventoryPage {

    elements = {
    itemAddToCart:() => cy.get('#add-to-cart-sauce-labs-backpack'),
    deleteItem:() => cy.get('#remove-sauce-labs-backpack'),
    menuItem:() => cy.get('#react-burger-menu-btn'),
    logout:() => cy.get('#logout_sidebar_link')
    }

    clickItemAddToCart() {
    this.elements.itemAddToCart().click();
    }

    checkItemIsAdded() {
    return cy.get('#item_4_title_link');
    }

    deleteAddedItem() {
    this.elements.deleteItem().click();
    }

    checkItemIsDeleted(){
    return cy.get('#item_4_title_link');
    }

    clickLogOut() {
    this.elements.menuItem().click();
    this.elements.logout().click();
    }
}

module.exports = new InventoryPage();
