import React from "react";

const About = () => {
  return (
    <>
      <div className=" p-6 py-20 bg-zinc-100 md:px-[200px]">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">About</h1>
          <h2 className="text-xl text-zinc-600">Dnyanankur Welfare Foundation</h2>
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-2/3 pr-6">
            <h3 className="text-2xl font-semibold mb-4">
              Developing With a Passion While Exploring The World.
            </h3>
            <p className="mb-4">
              At Dyanankur Prakashan, we believe that education paves the way
              for success. We advocate for every individual to engage in
              high-quality learning to unleash their full potential. Education
              has the transformative power to significantly impact the future of
              our nation. Our mission is to elevate education standards to new
              heights, enhancing critical thinking, skills, performance, and
              problem-solving abilities. This prepares individuals to
              continually grow and become responsible global citizens.
            </p>
            <p className="mb-4">
              Our vision is to create a world where everyone has access to
              education and can achieve their dreams. In today’s world, superior
              education is crucial. With enthusiasm, spirit, competitiveness,
              ambition, and determination for the next generation, we aim to
              build a resilient and innovative society.
            </p>
            <p className="mb-4">
              At our organization, we meticulously craft examination papers for
              students of every grade, ensuring they are of the highest quality
              with accurate, comprehensive content across diverse subjects. We
              provide educators with support and resources to effectively use
              our materials for student assessment and learning. We are
              dedicated to continuously improving and advancing our examination
              practices, designed to be accessible to students of varied
              learning abilities and backgrounds.
            </p>
            <p className="mb-4">
              We are committed to fostering an inclusive learning environment
              that respects diverse cultures. At Dyanankur Prakashan, we take
              pride in our work and are devoted to creating environments where
              students can learn, progress, and achieve their utmost potential.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-lg mt-4">
              Contact Us
            </button>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="bg-yellow-500 p-4 rounded-lg">
              <img
                className="rounded-lg"
                src="/about.jpg"
                alt="Students in classroom"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
