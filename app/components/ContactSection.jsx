"use client";
import Link from "next/link";
import { Linkedin, Github, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="text-center py-8">
      <h2 className="text-4xl font-bold text-white m-8">Contact</h2>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <p className="md:text-4xl text-2xl mb-8 font-bold block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Feel free to reach out me any questions and opportunities!
      </p>
      <p className="text-[#ADB7BE] m-8 md:text-3xl text-lg hidden">
        I&apos;m currently looking for new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <p className="md:text-4xl text-xl">
        If you wanna get in touch, talk to me about a project or just say hi,
        send me an email at{" "}
        <span className="font-bold text-pink-400">selvakvpvmk@gmail.com</span>{" "}
        or click the button below ;)
      </p>
      <Link
        href="mailto:selvakvpvmk@gmail.com"
        className="p-1 inline-block w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-8"
        target="_blank"
      >
        <span className="block md:text-2xl text-xl text-black bg-purple-500 hover:bg-slate-800 hover:text-white rounded-full md:px-16 px-8 py-3">
          Send Email
        </span>
      </Link>
      <p className="md:my-12 my-8 md:text-2xl text-xl font-bold">
        Let's connect social!
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
        <Link href="https://www.instagram.com/selva_voc/" target="_blank">
          <Instagram size={40} />
        </Link>
        <Link href="https://www.facebook.com/ganesh.suresh.545/" target="_blank">
          <Facebook size={40} />
        </Link>
      </div>
      <div></div>
    </section>
  );
};

export default ContactSection;
