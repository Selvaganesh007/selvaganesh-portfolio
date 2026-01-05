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
            I am a Senior Software Engineer with 4+ years of experience in building scalable, high-performance web applications. Currently working at Nagarro, I specialize in modern front-end technologies including ReactJS, Redux, JavaScript, TypeScript, HTML, CSS, and SASS. I have strong expertise in developing responsive and user-friendly interfaces with a focus on performance and accessibility. I have hands-on experience with Next.js, leveraging server-side rendering and optimization techniques for fast and SEO-friendly applications. I have also built and maintained scalable low-code solutions using Mendix. As a Senior Engineer, I contribute to architecture decisions, code reviews, and best practices. I actively support mentoring junior developers and improving team productivity. I enjoy solving complex technical problems and delivering impactful digital solutions. I continuously stay updated with emerging technologies. I am always open to collaboration and exciting engineering challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
