import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Strong hands-on experience with React, Tailwind CSS, JavaScript, and modern UI patterns.",
  },
  {
    icon: Lightbulb,
    title: "299+ DSA problems",
    description:
      "Focused on problem solving using Data Structures and algorithms ( C++ )",
  },
  {
    icon: Users,
    title: "Team Experience",
    description:
      "Worked in a real-time team environment during internship, collaborating with seniors and following best practices.",
  },
  {
    icon:  Rocket,
    title: "Continuous Learning",
    description:
      "Actively improving backend skills, DSA, and system fundamentals for long-term growth as a full-stack developer.",
  },
];


export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                   I'm a <strong className="text-foreground">Software Engineer</strong> with
                    hands-on frontend internship experience building responsive, user-focused web
                    applications. I enjoy creating clean, scalable interfaces and solving
                    real-world problems through modern web technologies.
              </p>

              <p>
                I specialize in <strong className="text-foreground">React.js</strong>,{" "}
                <strong className="text-foreground">JavaScript</strong>,{" "}
                <strong className="text-foreground">Tailwind CSS</strong>, and have hands-on
                experience with{" "}
                <strong className="text-foreground">Redux Toolkit</strong>,{" "}
                <strong className="text-foreground">REST APIs</strong>,{" "}
                <strong className="text-foreground">Formik & Yup</strong>,{" "}
                <strong className="text-foreground">Git/GitHub</strong>, and reusable
                component architecture to build scalable, production-ready frontend
                applications.
              </p>

              <p>
                Alongside frontend development, I’m actively strengthening my backend
                knowledge and data structures & algorithms to prepare for software
                engineering roles. I believe in writing clean, maintainable code and
                constantly improving through hands-on practice and learning.
              </p>
            </div>


            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Looking For
              </h3>

              <p className="text-muted-foreground">
                Seeking opportunities as a
                <strong> Frontend Developer</strong> or
                <strong> Software Engineer</strong>
                where I can contribute, learn, and build impactful products.
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};