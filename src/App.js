import './App.css';
import MenuItem from './components/MenuItem';


import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"></link>

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: `${process.env.PUBLIC_URL}/images/gyoza.png`,
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: `${process.env.PUBLIC_URL}/images/sushi.png`,
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: `${process.env.PUBLIC_URL}/images/ramen.png`,
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: `${process.env.PUBLIC_URL}/images/matcha-cake.png`,
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: `${process.env.PUBLIC_URL}/images/mochi.png`,
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: `${process.env.PUBLIC_URL}/images/yakitori.png`,
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: `${process.env.PUBLIC_URL}/images/takoyaki.png`,
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: `${process.env.PUBLIC_URL}/images/sashimi.png`,
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: `${process.env.PUBLIC_URL}/images/okonomiyaki.png`,
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: `${process.env.PUBLIC_URL}/images/katsu-curry.png`,
    price: 9.99,
  }
];



function App() {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/houselogo.png`} className="houseLogo" alt="House Logo" />


      <h1>Authentic Japanese Cuisine</h1>
      <h2>Opened and Established in Texas</h2>

      <h2 class = "title">Menu</h2>
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        {/* <MenuItem title={menuItems[0].title} />  */}
        {menuItems.map((title) => (<MenuItem title={title.title} imageName={title.imageName} 
          menuDesc={title.description} itemPrice={title.price}/>))}
      </div>
    </div>
  );
}

export default App;