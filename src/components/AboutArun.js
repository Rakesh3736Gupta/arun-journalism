import React from 'react';

function AboutArun() {
    return (
        <>

            <div className='h-full w-full bg-[#0F172A]'>
                <div className="about-arun py-6 md:py-12 px-4 md:px-8 bg-[#0F172A] text-white">
                    <h2 className='text-[#06b6d4] text-2xl md:text-3xl font-bold'>About Mr. Arun</h2>
                    <p className="text-lg md:text-xl mb-4 md:mb-6 md:w-2/3 lg:w-[70%] xl:w-[60%] ml-4 md:ml-10">Arun is a seasoned journalist with over 20 years of experience covering major stories. With a career spanning over 20 years in investigative journalism, Mr. Arun has been a beacon of truth and integrity in the ever-evolving landscape of media. From breaking news stories that shook the nation to in-depth investigative reports that sparked change, his contributions to journalism are nothing short of legendary.

                        Retiring recently from his illustrious career, Mr. Arun is now dedicated to sharing his wealth of knowledge and expertise with the next generation of journalists. His passion for storytelling and commitment to ethical journalism make him the perfect mentor for those eager to make their mark in the industry.</p>
                    <ul className="achievements list-disc space-y-2 text-[#06b6d4] ml-4 md:ml-10">
                        <li>Award-winning journalist for...</li>
                        <li>Featured in publications like...</li>
                        <li>Known for his expertise in...</li>
                    </ul>

                    {/* about the course */}
                    <div className="bg-hero min-h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center bg-[#0F172A]" style={{ backgroundImage: "url('./images/hero-banner.jpg')" }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-8">Empower Your Voice. Become a Journalist.</h2>
                        <p className="text-lg md:text-xl text-white text-center mb-6 md:mb-10">Learn from a renowned journalist. Practical online course for aspiring journalists.</p>
                        <h2 className="text-xl md:text-2xl">The 2-Week Online Course</h2>
                        <p className="text-lg md:text-xl mb-4 md:mb-6">This comprehensive course will equip you with the practical skills...</p>
                        <ul className="course-modules list-disc space-y-2">
                            <li>Module 1: Introduction to Journalism</li>
                            <li>Module 2: Research and Interview Techniques</li>
                            <li>Module 3: Writing for Different Media</li>
                            <li>Module 4: Ethics and Fact-Checking</li>
                            <li>Module 5: Building Your Portfolio and Career Launch</li>
                        </ul>
                        <ul className="course-benefits list-disc space-y-2 mt-4 md:mt-6">
                            <li>Learn from a renowned journalist</li>
                            <li>Gain practical skills and insights</li>
                            <li>Flexible learning schedule</li>
                            <li>Supportive online community</li>
                        </ul>
                        <a href=" " className="px-4 py-2 mt-6 md:mt-8 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">Enroll Now</a>
                    </div>
                </div>

                {/* about the course details */}
                <div className="course-details py-6 md:py-12 px-4 md:px-8 text-white bg-[#0F172A]">
                    {/* Add your course details here */}
                </div>
            </div>

        </>
    );
}

export default AboutArun;
