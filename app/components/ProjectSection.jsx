"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "Travel Agency Website",
    description: "Expertly crafted travel experiences for unforgettable adventures.",
    image: "/images/projects/p1.png",
    tag: ["All", "Static"],
    gitUrl: "https://github.com/Selvaganesh007/Tour_agency_website01",
    previewUrl: "https://selvaganesh007.github.io/Tour_agency_website01/home",
  },
  {
    id: 2,
    title: "Business Consulting Website",
    description: "ransforming business challenges into opportunities with tailored consulting solutions.",
    image: "/images/projects/p2.png",
    tag: ["All", "Static"],
    gitUrl: "https://github.com/Selvaganesh007/business_consulting_website01",
    previewUrl: "https://selvaganesh007.github.io/business_consulting_website01/",
  },
  {
    id: 3,
    title: "Business Solution Website",
    description: "Empowering your business with innovative and effective solutions.",
    image: "/images/projects/p3.png",
    tag: ["All", "Static"],
    gitUrl: "https://github.com/Selvaganesh007/Elegant_Solutions_In_Business01",
    previewUrl: "https://selvaganesh007.github.io/Elegant_Solutions_In_Business01/",
  },
  {
    id: 4,
    title: "Bike Showroom Management Web Application",
    description: "Streamline your dealership with our comprehensive bike management web application.",
    image: "/images/projects/p4.png",
    tag: ["All", "Dynamic"],
    gitUrl: "https://github.com/Selvaganesh007/bike_showroom_admin_dashboard",
    previewUrl: "https://selvaganesh007.github.io/bike_showroom_admin_dashboard/",
  },
  {
    id: 5,
    title: "IT Solution Website",
    description: "Crafting dynamic online presences effortlessly with our intuitive website builder.",
    image: "/images/projects/p5.png",
    tag: ["All", "Static"],
    gitUrl: "https://github.com/Selvaganesh007/Web-builder-02",
    previewUrl: "https://selvaganesh007.github.io/Web-builder-02/",
  },
  {
    id: 6,
    title: "Gym Equipment Website",
    description: "Elevate your fitness journey with premium gym equipment designed for optimal performance",
    image: "/images/projects/p6.png",
    tag: ["All", "Static"],
    gitUrl: "https://github.com/Selvaganesh007/gym_Equipment_website01",
    previewUrl: "https://selvaganesh007.github.io/gym_Equipment_website01/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleChange = (newTag) => {
    setTag(newTag);
  };

  const filteredData = projectData.filter(
    (project) => project.tag.includes(tag) && project
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleChange}
          name="Static"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleChange}
          name="Dynamic"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
