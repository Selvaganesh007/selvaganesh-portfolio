import Image from "next/image";

const AboutSection = () => { 
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          width={600}
          height={600}
          alt="developer"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate Web Developer with 3+ years of experience in building dynamic and responsive web applications. Currently working at Nagarro, I specialize in front-end technologies including ReactJS, Redux, JavaScript, HTML, CSS, SASS, and TypeScript. I also have experience building scalable low-code applications using Mendix. I have a strong foundation in using Next.js for server-side rendering and creating high-performance web applications. I am always eager to learn new technologies and take on new challenges, contributing to impactful projects and driving successful outcomes. Feel free to connect with me to discuss web development, front-end technologies, or potential collaboration opportunities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
