import CoverSection from "../../Shared/Cover/CoverSection";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,title,coverImg,subTitle}) => {
    return (
        <div className="mb-12">
            {title && <CoverSection
                bgImg={coverImg}
                title={title}
                subTitle={subTitle}
            >
            </CoverSection>}
             <div className="grid md:grid-cols-2 gap-8 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
            <div className=" mt-10 flex pb-6 justify-center">
                <button className=" btn btn-outline btn-ghost border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;