import './App.css';
import MenuItem from './components/MenuItem';
import TopInfo from './components/TopInfo';


// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
// {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"></link> */}

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

const allHeadingInfo = [
    {
      
      houseLogo: `${process.env.PUBLIC_URL}/images/houselogo.png`,
      details: 'Opened and Established in Texas',
      restaurant: 'Sushi House: Authentic Japanese Cuisine',
      title: 'Menu',

    }
];



function App() {
  return (
    <div>

      {allHeadingInfo.map((info) => (<TopInfo houseLogo = {info.houseLogo} details={info.details} 
        restaurant={info.restaurant} title={info.title}/>))}
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