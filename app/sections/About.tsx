import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"ABOUT US"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="BabellabsAI is a groundbreaking AI dubbing tool that reimagines video translation and content authentication. With a core focus on content authentication using Solana technology, our platform ensures the utmost security and accuracy. It empowers content creators to connect with a global audience by translating their videos into multiple languages, preserving quality and speed." />

                        <AnimatedBody
                            delay={0.1}
                            text="Powered by advanced AI, BabellabsAI provides flawless translations, maintaining the natural flow and nuances of the content. Our Solana-based content signing and user registration processes enhance trustworthiness, making it tamper-proof and verifiable. This powerful combination of perfect translation and content authentication with Solana technology ensures your content reaches a global audience faster and with unmatched security                            ."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="BabellabsAI is the ultimate solution for content creators looking to transcend language barriers and ensure content authenticity. Experience the future of video translation and content authentication, where perfection, speed, and trust are paramount."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
