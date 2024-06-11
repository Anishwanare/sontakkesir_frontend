import React from "react";
import Dropdown from "./Dropdown";

const Features = () => {
  return (
    <>
      {/* features */}
      <div className="bg-white pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-zinc-800">Features</h2>
          <p className="text-zinc-600 mt-2">main features of the exam</p>
          <div className="mt-8 border-t-2 border-yellow-500 w-16 mx-auto"></div>
        </div>
      </div>
      <Dropdown
        title={"Develop critical thinking skills​"}
        desc={
          "At Manthan Welfare Foundation, we believe that critical thinking skills are essential for success in today’s complex and rapidly changing world. That’s why our state-level general knowledge exams are designed to challenge students to think analytically and creatively, and to apply their knowledge to solve complex problems. By participating in our exams, students can develop important critical thinking skills that will serve them well in their academic and personal lives, and help them become more effective problem solvers and decision makers."
        }
      />
      <Dropdown
        title={"Develop critical thinking skills​"}
        desc={
          "At Manthan Welfare Foundation, we believe that critical thinking skills are essential for success in today’s complex and rapidly changing world. That’s why our state-level general knowledge exams are designed to challenge students to think analytically and creatively, and to apply their knowledge to solve complex problems. By participating in our exams, students can develop important critical thinking skills that will serve them well in their academic and personal lives, and help them become more effective problem solvers and decision makers."
        }
      />
      <Dropdown
        title={"Develop critical thinking skills​"}
        desc={
          "At Manthan Welfare Foundation, we believe that critical thinking skills are essential for success in today’s complex and rapidly changing world. That’s why our state-level general knowledge exams are designed to challenge students to think analytically and creatively, and to apply their knowledge to solve complex problems. By participating in our exams, students can develop important critical thinking skills that will serve them well in their academic and personal lives, and help them become more effective problem solvers and decision makers."
        }
      />
    </>
  );
};

export default Features;
