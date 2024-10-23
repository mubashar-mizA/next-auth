'use client';  // agar ap Next.js app router use kar rahay hain
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';  // Next.js ka Image component import karein
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';  // Autoplay CSS import karen

// Modules ko import karna
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const MySwiper = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}  // Autoplay ko modules mein include karen
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}  // Autoplay settings
        >
            {/* Swiper slides with images */}
            <SwiperSlide>
                <Image
                    src="/images/image1.jpg"  // Image ka source (public folder ke andar hona chahiye)
                    alt="Image 1"
                    width={500}
                    height={200}
                    layout="responsive"  // Image ko responsive banane ke liye
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/images/image2.jpg"
                    alt="Image 2"
                    width={500}
                    height={200}
                    layout="responsive"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/images/image3.jpg"
                    alt="Image 3"
                    width={500}
                    height={200}
                    layout="responsive"
                />
            </SwiperSlide>
            <SwiperSlide>

                <Image
                    src="/images/image4.jpg"
                    alt="Image 4"
                    width={500}
                    height={200}
                    layout="responsive"
                />

            </SwiperSlide>
        </Swiper>
    );
}

export default MySwiper;
