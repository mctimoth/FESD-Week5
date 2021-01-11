//index.js for FESD Javascript Week5

// Create a menu app as seen in this week’s video. What you create
// is up to you as long as it meets the following requirements.
//      Use at least one array.
//      Use at least two classes.
//      Your menu should have the options to create, view, and delete elements.

//SORRY - I couldn't get this to paly out perfectly.

class Cart{
    constructor(name) {
        this.name = name
        this.items = [];
    }
}

class Menu{
    constructor(){
        this.carts = [];
        this.selectedItem = null;
    }

    begin(){
        let userChoice = this.mainMenu();
        while(userChoice != 0){
            switch(userChoice){
                case "1":
                    this.createNewCart();
                    break;
                case "2":
                    this.listCart();
                    break;
                case "3":
                    this.addToCart();
                    break;
                case "4":
                    this.deleteFromCart();
                    break;
                default:
                    userChoice = 0
            }
            userChoice = this.mainMenu();
        }
        alert("GOOD BYE :-)");

    }

    mainMenu(){
        return prompt(`
        MAIN MENU
        0) EXIT
        1) CREATE CART
        2) SHOW CART
        3) ADD TO CART
        4) DELETE FROM CART
        ___________________
        `);
    }

    createNewCart() {
        let cartName = prompt("Name your cart:")
         this.carts.push(new Cart(cartName));
    }
    
    listCart() {
        let cartString = " ";
        for(let i = 0;i < this.carts[0].items.length; i++) {
            cartString += i + ") " + this.carts[i].items + "\n";
        }
        let newItem = prompt(`
        ${cartString}
        What would you like to add to your cart?
        `)

        this.carts[0].items.push(newItem)
    }

    addToCart() {
        let item = prompt("What would you like to add to the cart?")
        this.carts[0].items.push(new Item(item));
    }

    deleteFromCart() {
        let index = prompt("Which item would you like to delete from the cart?")
        this.carts[0].items.splice(index, 1);
    }



    // listCarts(){
    //     let cartsString = " ";
    //     for (let i = 0;i < this.carts.length; i++) {
    //         cartsString += i + ") " + this.carts[i].name + "\n"
    //     }
    //     let selection = prompt(`
    //     ${cartsString}
    //     Which cart do you want to change?
    //     `)
    // //alert(cartsString);
    //     switch (selection) {
    //         case "0":
    //             this.listCart(selection)
    //     }
    // }

}

let menu = new Menu;
menu.begin();