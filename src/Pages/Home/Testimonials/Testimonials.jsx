import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"---What Our Clients Say---"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>
            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews?.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className="flex flex-col justify-center items-center text-center m-24">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <p className="py-8">{review.details}</p>
                                    <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;