import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems =data.filter(item=> item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])

    return (
        <section className="mb-12">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 it">
                {
                    menu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className=" mt-10 flex justify-center">
            <button className=" btn btn-outline btn-ghost border-0 border-b-4">View Full  Menu</button>
           </div>
        </section>
    );
};

export default PopularMenu;