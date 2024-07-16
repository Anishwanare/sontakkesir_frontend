import React from "react";
import Dropdown from "./Dropdown";

const Features = () => {
  return (
    <>
      {/* features */}
      <div className="bg-white pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-zinc-800">Features</h2>
          <p className="text-zinc-600 mt-2">
            main features of <span className="font-bold">Dnyanankur</span>
          </p>
          <div className="mt-8 border-t-2 border-yellow-500 w-16 mx-auto"></div>
        </div>
      </div>
      <Dropdown
        title={"Develop critical thinking skills​"}
        desc={
          "At Dyanankur Prakashan, we believe that critical thinking skills are developed through analysis, problem-solving, creative thinking, breaking down complex information for better understanding, exploring various options, and teaching students to deeply comprehend the meaning of given information. Our examination papers incorporate all these elements to cultivate the critical thinking abilities of students."
        }
      />
      <Dropdown
        title={"Develop critical thinking skills​"}
        desc={
          "At Dyanankur Prakashan, we create examination papers based on real-world scenarios to help students engage more confidently. Our approach encourages students to reflect on their own thinking processes. Our exams are designed to develop students' planning skills for future scenarios."
        }
      />
      <Dropdown
        title={"Develop critical thinking skills​"}
        desc={
          "At Dyanankur Prakashan, we foster a mindset that values creative and innovative problem-solving. We prioritize accuracy in all aspects of our teaching. We assist students in identifying patterns within what may initially appear chaotic. Our commitment lies in developing the critical thinking skills of every student, enabling them to tackle complex challenges and thrive in their academic, personal, and professional endeavors."
        }
      />
    </>
  );
};

export default Features;
