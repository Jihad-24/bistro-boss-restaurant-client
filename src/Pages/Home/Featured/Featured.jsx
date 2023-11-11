import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <section className="featured-item bg-fixed text-white pt-3 my-20">
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36 md:gap-12">
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="space-y-8">
                    <div>
                        <h3>March 20, 2023</h3>
                        <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    </div>
                    <button className="btn btn-outline btn-ghost border-0 border-b-4">order now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;