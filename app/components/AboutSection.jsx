"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex gap-24">
        <div className="list-disc pl-2">
          <div>HTML</div>
          <div>Css</div>
          <div>Scss</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Redux</div>
          <div>Mendix</div>
          <div>Redux-thunk</div>
          <div>TypeScript</div>
          <div>Ant Design</div>
        </div>
        <div className="list-disc pl-2">
          <div>Next.js</div>
          <div>Node.js</div>
          <div>Express</div>
          <div>MongoDB</div>
          <div>Rest API</div>
          <div>Git</div>
          <div>Gitlab</div>
          <div>Bitbucket</div>
          <div>Github</div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MCA, Madurai Kamaraj University.</li>
        <li>B.Sc (CS), Sri Ramasamy Naidu Memorial College.</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>FULL STACK WEB DEVELOPMENT, Crampete Learning, Centre, Chennai.</li>
        <li>The Complete 2022 Web Development Bootcamp, Udemy.</li>
        <li>Backend Web Dev with NodeJS, Google Developer Group, Ranchi.</li>
        <li>Javascript and React js, Developer Student Clubs, Birla Institute of Technology, Mesra.</li>
        <li>Mendix Rapid Developer, Mendix.</li>
        <li>Learning Next.js, LinkedIn learning.</li>
        <li>Learning TypeScript, LinkedIn learning.</li>
        <li>Full Stack Development, Guvi.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          width={500}
          height={500}
          alt="developer"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate Web Developer with 3+ years of experience in
            building dynamic and responsive web applications. Currently working
            at Nagarro, I specialize in front-end technologies including
            ReactJS, Redux, JavaScript, HTML, CSS, SASS, and TypeScript. I have
            a strong foundation in using Next.js for server-side rendering and
            creating high-performance web applications. I am always eager to
            learn new technologies and take on new challenges, contributing to
            impactful projects and driving successful outcomes. Feel free to
            connect with me to discuss web development, front-end technologies,
            or potential collaboration opportunities!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
