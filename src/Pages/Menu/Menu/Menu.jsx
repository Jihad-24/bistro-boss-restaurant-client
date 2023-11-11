import { Helmet } from 'react-helmet-async';
import CoverSection from '../../Shared/Cover/CoverSection';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <CoverSection
                bgImg={menuImg}
                title={"our menu"}
                subTitle={"Would you like to try a dish?"}
            >
            </CoverSection>
            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            {/* offerd menu items */}
            <MenuCategory
            items={offered}
            ></MenuCategory>
            {/* desset menu items */}
            <MenuCategory
                items={desserts}
                title={"DESSERTS"}
                coverImg={dessertImg}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
                items={pizza}
                title={"PIZZA"}
                coverImg={pizzaImg}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            {/* SALADS menu items */}
            <MenuCategory
                items={salad}
                title={"SALADS"}
                coverImg={saladImg}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            {/* SOUPS menu items */}
            <MenuCategory
                items={soup}
                title={"SOUPS"}
                coverImg={soupImg}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            
        </div>
    );
};

export default Menu;