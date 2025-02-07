import React from 'react';



// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.



const MenuItem = ({ title, imageName, menuDesc, itemPrice}) => {

    console.log("Image path:", imageName);
    return (
        <div class="itemrow">
            <img src={imageName} alt= "Corresponding Picture" class="menuImg"/>
            <div class="details">
                <h3 class="itemName">{title}</h3>
                <p>{menuDesc}</p>
                <div class="priceandbutton">
                    <p class="price">{itemPrice}</p>
                    <button class="addbutton">Add</button>
                </div>
            </div>
        </div>
    );
};



export default MenuItem;