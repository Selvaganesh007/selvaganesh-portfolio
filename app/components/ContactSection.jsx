"use client";
import Link from "next/link";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="text-center py-8">
      <h2 className="text-4xl font-bold text-white m-8">
        Contact me
      </h2>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <p className="md:text-4xl text-2xl font-bold block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Feel free to reach out me any questions and opportunities!
      </p>
      <p className="text-[#ADB7BE] m-4 md:text-2xl text-sm">
        I&apos;m currently looking for new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <div className="socials flex justify-center gap-x-8 flex-row gap-2">
        <Link href="https://github.com/Selvaganesh007" target="_blank">
          <Github size={40} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/selva-ganesh-fed"
          target="_blank"
        >
          <Linkedin size={40} />
        </Link>
        <Link href="mailto:selvakvpvmk@gmail.com" target="_blank">
          <Mail size={40} />
        </Link>
        <Link href="https://www.instagram.com/selva_voc/" target="_blank">
          <Instagram size={40} />
        </Link>
      </div>
      <div></div>
    </section>
  );
};

export default ContactSection;
