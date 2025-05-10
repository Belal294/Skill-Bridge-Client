import React from 'react';
import img1 from '../../assets/Template/assets/images/services-01.jpg';
import img2 from '../../assets/Template/assets/images/services-02.jpg';
import img3 from '../../assets/Template/assets/images/services-03.jpg';
import img4 from '../../assets/Template/assets/images/services-04.jpg';
import img5 from '../../assets/Template/assets/images/faqs-image.jpg';
import { motion } from "framer-motion";

const SectionTwo = () => {
    return (
        <div className="flex flex-col md:flex-row items-stretch gap-6 p-6">
            {/* Left Side - Accordion with images */}
            <div className="w-full md:w-1/2 space-y-4">
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title font-semibold">
                        How can I start freelancing?
                    </div>
                    <div className="collapse-content text-sm">
                        <img src={img1} alt="Freelancing Start" className="mb-2 rounded" />
                        To start freelancing, begin by learning a specific skill and then create a profile on a popular marketplace.
                    </div>
                </div>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">
                        What skills are in high demand in freelancing?
                    </div>
                    <div className="collapse-content text-sm">
                        <img src={img2} alt="In-demand Skills" className="mb-2 rounded" />
                        Web Development, Graphic Design, SEO, Content Writing, and Digital Marketing are highly demanded skills in freelancing.
                    </div>
                </div>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">
                        How should I communicate with clients?
                    </div>
                    <div className="collapse-content text-sm">
                        <img src={img3} alt="Client Communication" className="mb-2 rounded" />
                        Always communicate professionally and offer solutions based on the client’s needs.
                    </div>
                </div>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">
                        How can I withdraw my freelancing earnings?
                    </div>
                    <div className="collapse-content text-sm">
                        <img src={img4} alt="Withdraw Earnings" className="mb-2 rounded" />
                        You can withdraw your earnings using Payoneer, Skrill, or direct bank transfer, depending on the platform.
                    </div>
                </div>
            </div>


            <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.img
                src={img5}
                alt="FAQ Illustration"
                className="rounded-lg shadow-lg w-full max-w-md md:max-w-[430px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            />
            </div>

        </div>
    );
};

export default SectionTwo;
