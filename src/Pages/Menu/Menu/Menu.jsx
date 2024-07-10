import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuIgm from "../../../assets/menu/banner3.jpg";
import dessertIgm from "../../../assets/menu/dessert.jpg";
import pizzaIgm from "../../../assets/menu/pizza.jpg";
import saladIgm from "../../../assets/menu/salad.jpg";
import soupIgm from "../../../assets/menu/soup.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuIgm} title={"Our Menu"}></Cover>
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items  */}
      <MenuCategory
        items={dessert}
        coverImg={dessertIgm}
        title={"dessert"}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        coverImg={pizzaIgm}
        title={"pizza"}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        coverImg={saladIgm}
        title={"salad"}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        coverImg={soupIgm}
        title={"soup"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
