new Vue({
    el: "#instrument-list",
    data: {
        instruments:[
            {
                name:'Drums',
                type:'Percussion',
                price:'$195.99',
                brand:'Maton'
            },
            {
                name:'Flute',
                type:'Woodwind',
                price:'$69.99',
                brand:'Yamaha'
            },
            {
                name:'Piano',
                type:'Uhhh..',
                price:'$499.99',
                brand:'Yamaha'
            },
            {
                name:'Guitar',
                type:'Strings',
                price:'$129.99',
                brand:'Fender'
            },
            {
                name:'Trumpet',
                type:'Brass',
                price:'$95.99',
                brand:'Yamaha'
            },
            {
                name:'Violin',
                type:'Strings',
                price:'$49.99',
                brand:'Maton'
            }
            ,
            {
                name:'',
                type:'',
                price:'',
                brand:''
            }
        ]
    }

})


//drum floot piano guitar trumpet violin





// There should be a list of 6 instruments having data points of at least Name, Instrument Type, Price, and Brand.
//     There can only be three different brands: Fender, Yamaha, and Maton, and there should be two instruments of each Brand.
//     Display the image of each instrument in your HTML page with its name underneath.
//     When I click on an Instrument, it should display its Name, Price, and Brand in a div that covers the content on the page.
//     When I hover over an Instrument, its background color should change to what brand it is and the font color should change to white. Once I hover off, it should go back to normal.
//     Fender = Red
// Yamaha = Green
// Maton = Blue
// An Add to Cart button should be under the instrument's information in both the pop-up and normal divs. When I click on that button, it should add that instrument to my cart array and remove it from the store array.  The total items in the Cart array should be displayed in the top right-hand corner of the page. This removal of the item should be visible on the page (so the div containing that item should disappear).
// If all items from the store get removed, a message should appear saying "Store is Empty".
//     Clicking on the cart should add all the items back to your store, and empty the cart.
//     Another button next to my cart button should be for adding items to the store through a form. This should appear as a pop-up.
//     The Store item just needs to have a name that the user creates.
//     The user should be able to type out the name of the new instrument, select what brand it is and the type of instrument it is, then submit it, adding it to the store.
//     This should be visually represented in the store and have the correct interactivity when hovering over and clicking on the item.
//     Since the product doesn't have an image, make it so the image just says "no-image" rather than a broken image tag.