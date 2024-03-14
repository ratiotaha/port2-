"use client";
import React, { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <h1 className="text-[grey] mt-10 lg:text-4xl sm:text-4xl text-4xl font-extrabold">
        About Me
      </h1>
      <div className="flex flex-row mt-8">
        {/* Tab buttons */}
        <span
          className={`hover:text-[red] cursor-pointer ${
            activeTab === "skills" ? "font-bold" : ""
          }`}
          onClick={() => handleTabClick("skills")}
        >
          Skills
        </span>
        <span
          className={`hover:text-[red] px-3 cursor-pointer ${
            activeTab === "experience" ? "font-bold" : ""
          }`}
          onClick={() => handleTabClick("experience")}
        >
          Experience
        </span>
        <span
          className={`hover:text-[red] cursor-pointer ${
            activeTab === "education" ? "font-bold" : ""
          }`}
          onClick={() => handleTabClick("education")}
        >
          Education
        </span>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-6">
        {/* Content for each tab */}
        {activeTab === "skills" && (
          <div>
            <ul className="list-disc">
              <li>Proficient in HTML, CSS, and Tailwind</li>
              <li>Javascript</li>
              <li>Uses Next.js</li>
              <li>Have command over Ms-word and Ms-excel</li>
              <li>Adobe after-effects</li>
              <li>da vinci-resolve</li>
              <li>Key word researching</li>
              <li>Blog writing </li>
              <li>Prompt generator</li>
              <li>Wordpress developer</li>
            </ul>
          </div>
        )}
        {activeTab === "experience" && (
          <div>
            <p>
              <ul className="list-disc">
                <h2>
                  <li>
                    {" "}
                    Front-end developer Intern October 2023 to January 2024 (1
                    years, 1 months)
                  </li>
                </h2>{" "}
                <span>coded components of Topic mojo using Tailwind</span>
                <h2>
                  {" "}
                  <li>Marketing Intern </li>
                </h2>{" "}
                <span>
                  Keyword researched for blog topics of Thanos.ai blog posting
                  of Thanos.ai
                </span>{" "}
              </ul>
            </p>
          </div>
        )}
        {activeTab === "education" && (
          <div>
            <p>
              <ul className="list-disc">
                <li>
                  O-levels in pre medical Intermediate in pre medical The City
                  School North Nazimabad Boys Campus
                </li>{" "}
                <span>
                  {" "}
                  <li>
                    Intermediate from Sultan Muhammad Aga Khan Higher secondary
                    School
                  </li>
                </span>
              </ul>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
