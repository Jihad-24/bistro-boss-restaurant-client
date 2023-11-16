
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center pt-5 pb-10 w-3/5 md:w-4/12 lg:w-5/12 mx-auto">
            <p className="text-[#D99904] italic font-medium pb-2">{subHeading}</p>
            {/* <hr className=""/> */}
            <h3 className=" text-4xl uppercase font-medium border-y-4 py-4">{heading}</h3>
            {/* <hr /> */}
        </div>
    );
};

export default SectionTitle;