import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

const certificatesList = [
  {
    name: "Mendix 9.6: Building an eCommerce Application [Advanced]",
    date: "Jan, 2026",
    organization: "Udemy",
    credentialID:
      "UC-f5541427-c932-48ee-9490-6cf140a12234",
    credentialLink:
      "https://www.udemy.com/certificate/UC-f5541427-c932-48ee-9490-6cf140a12234/",
  },
  {
    name: "React: Cloud-Powered Apps with Firebase",
    date: "Dec, 2025",
    organization: "LinkedIn Learning",
    credentialID:
      "83fc31aed5325b79c71559818940da8dabb3aa3b25743be333399fc7ce16dd05",
    credentialLink:
      "https://www.linkedin.com/learning/certificates/83fc31aed5325b79c71559818940da8dabb3aa3b25743be333399fc7ce16dd05?trk=share_certificate",
  },
  {
    name: "Learning TypeScript",
    date: "June, 2025",
    organization: "LinkedIn Learning",
    credentialID:
      "eb53b741dfcbd941be1f0e88016255063fb056853debd91c724136d640c3eb29",
    credentialLink:
      "https://www.linkedin.com/learning/certificates/eb53b741dfcbd941be1f0e88016255063fb056853debd91c724136d640c3eb29",
  },
  {
    name: "Learning Next.js",
    date: "May, 2025",
    organization: "LinkedIn Learning",
    credentialID:
      "9cc9eb2f4180e6aeef6f91b641cc569dde7355526007d520e59e24917d8199a9",
    credentialLink:
      "https://www.linkedin.com/learning/certificates/9cc9eb2f4180e6aeef6f91b641cc569dde7355526007d520e59e24917d8199a9",
  },
  {
    name: "Mendix Rapid Developer",
    date: "July, 2024",
    organization: "Mendix",
    credentialID: "78713",
    credentialLink:
      "https://drive.google.com/file/d/1TNSNjMcTJDOEONh1XONeTaHh_Eou0MUe/view?usp=drive_link",
  },
  {
    name: "Full Stack Web Developer",
    date: "Mar, 2022",
    organization: "Crampete learning center, Chennai, Tamilnadu.",
    credentialID: "CRFS2021029",
    credentialLink:
      "https://drive.google.com/file/d/16rW35gVzV6Tg2GGwmGvuCzAZteMeWeLd/view?usp=drive_link",
  },
  {
    name: "Full Stack Developer",
    date: "May, 2021",
    organization: "GUVI Geek Networks, IITM Research Park, Chennai, Tamilnadu.",
    credentialID: "r189hF64ECUv6610u8",
    credentialLink:
      "https://www.guvi.in/verify-certificate?id=r189hF64ECUv6610u8&course=fsd1o1english",
  },
  {
    name: "Javascript",
    date: "May, 2021",
    organization: "GUVI Geek Networks, IITM Research Park, Chennai, Tamilnadu.",
    credentialID: "ub6o11ewc041U6k220",
    credentialLink:
      "https://www.guvi.in/verify-certificate?id=ub6o11ewc041U6k220",
  },
  {
    name: "Backend Web Dev with NodeJS",
    date: "June, 2021",
    organization: "Google Developer Group, Ranchi, Jharkhand.",
    credentialID: "ZVihY0",
    credentialLink: "https://www.cert.devtown.in/verify/ZVihY0",
  },
  {
    name: "Javascript and ReactJS Bootcamp",
    date: "May, 2021",
    organization: "DevTown.",
    credentialID: "ZO81xq",
    credentialLink: "https://www.cert.devtown.in/verify/ZO81xq",
  },
];

const CertificationSection = () => {
  return (
    <section id="certifications" className="text-center py-8">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
        Certifications
      </h2>
      <div className="flex text-xl md:text-3xl flex-wrap gap-10">
        <div className="flex text-lg md:text-2xl flex-wrap gap-10 justify-around w-full">
          {certificatesList.map((data, id) => {
            return (
              <div
                className="bg-gray-800 md:p-10 p-4 rounded-2xl text-left shadow-[0px_0px_12px_-5px_#9C27B0] lg:w-2/5 w-full"
                key={id}
              >
                <div className="font-bold pb-3">{data.name}</div>
                <div>Issued on {data.date}</div>
                <div>
                  Issuing organization:{" "}
                  <span className="font-semibold text-purple-500">
                    {data.organization}
                  </span>
                </div>
                <div className="my-2">
                  Credential ID:{" "}
                  <span className="font-bold text-purple-500 max-w-[280px] inline-block truncate">
                    {data.credentialID}
                  </span>
                </div>
                <div>
                  <Link
                    href={data.credentialLink}
                    className="inline-block w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
                    target="_blank"
                  >
                    <div className="md:text-lg text-black bg-purple-500 hover:bg-slate-800 hover:text-white rounded-full px-5 py-2 w-60 flex justify-around">
                      <div>Show credential</div>
                      <div>
                        <SquareArrowOutUpRight />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
