export default function WorkExperience() {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Nagarro",
      period: "Jan 2026 – Present",
      points: [
        "Frontend specialist with expertise in React and modern web technologies.",
        "Developing enterprise applications using Mendix low-code platform.",
        "Building custom Mendix widgets using React.",
        "Integrating REST APIs and optimizing frontend performance.",
        "Contributing to architecture discussions and code reviews."
      ],
    },
    {
      role: "Software Engineer",
      company: "Nagarro",
      period: "Feb 2024 – Dec 2025",
      points: [
        "Worked as a frontend engineer specializing in React and TypeScript.",
        "Delivered business solutions using Mendix with focus on UI quality.",
        "Built reusable UI widgets using React.",
        "Integrated backend services through REST APIs.",
        "Developed modular and scalable frontend components."
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "Tekion Corp",
      period: "Sep 2022 – Sep 2023",
      points: [
        "Built and enhanced a CRM platform improving system reliability.",
        "Implemented real-time notifications using Pusher.js.",
        "Introduced unit testing with Jest and React Testing Library.",
        "Participated in code reviews and engineering best practices."
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Tekion Corp",
      period: "Mar 2022 – Sep 2022",
      points: [
        "Developed new CRM features and fixed performance issues.",
        "Implemented Redux for state management.",
        "Built UI components using React Hooks and Ant Design."
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Brainvalley Software Pvt. Ltd",
      period: "Jul 2021 – Jan 2022",
      points: [
        "Built responsive websites using HTML, CSS and Bootstrap.",
        "Developed full-stack CRUD app using Node, Express and MongoDB.",
        "Worked on REST APIs and backend integration."
      ],
    },
  ];

  return (
    <section className="py-20" id="workexperience">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-slate-400 mt-3">
            My professional journey and engineering contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-700 pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Dot */}
              <span className="absolute -left-[52px] top-6 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></span>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/40">
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-400">
                      {exp.role}
                    </h3>
                    <p className="text-slate-300 mt-1">{exp.company}</p>
                  </div>
                  <span className="mt-2 md:mt-0 inline-block px-4 py-1 rounded-full text-sm bg-purple-500/10 text-purple-300 border border-purple-500/30">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mt-4 text-slate-300">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 text-purple-400">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
