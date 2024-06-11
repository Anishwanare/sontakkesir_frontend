import React from "react";

const About = () => {
  return (
    <>
      <div className=" p-6 py-20 bg-zinc-100 md:px-[200px]">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">About</h1>
          <h2 className="text-xl text-zinc-600">Manthan Welfare Foundation</h2>
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-2/3 pr-6">
            <h3 className="text-2xl font-semibold mb-4">
              Developing With a Passion While Exploring The World.
            </h3>
            <p className="mb-4">
              At Manthan Welfare Foundation, we believe that education is the
              key to unlocking the potential of every individual and empowering
              them to create a better future for themselves and their
              communities. Our mission is to provide opportunities for students
              to develop their knowledge, skills, and character, and to inspire
              them to become lifelong learners and responsible citizens.
            </p>
            <p className="mb-4">
              Our vision is to create a world where every student has access to
              high-quality education and the resources they need to succeed,
              regardless of their background or circumstances. We believe that
              education is a powerful tool for social change, and that by
              investing in the next generation, we can build a more equitable
              and just society for all.
            </p>
            <p className="mb-4">
              At the heart of our organization are our core values: excellence,
              integrity, compassion, and diversity. We strive for excellence in
              everything we do, from the design and delivery of our exams to the
              support and resources we provide to students and educators. We
              believe in acting with integrity and treating everyone with
              respect and fairness. We are committed to fostering a culture of
              compassion and empathy, and to creating an inclusive and diverse
              community where everyone can thrive.
            </p>
            <p className="mb-4">
              We are proud of the work we do at Manthan Welfare Foundation, and
              we are dedicated to continuing to provide opportunities for
              students to learn, grow, and achieve their full potential.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4">
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
