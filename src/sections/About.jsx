import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Strong hands-on experience with React, Tailwind CSS, JavaScript, and modern UI patterns.",
  },
  {
    icon: Rocket,
    title: "Performance & UX",
    description:
      "Focused on building fast, responsive, and user-friendly interfaces with clean component architecture.",
  },
  {
    icon: Users,
    title: "Team Experience",
    description:
      "Worked in a real-time team environment during internship, collaborating with seniors and following best practices.",
  },
  {
    icon: Lightbulb,
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
                  I'm a final-year engineering student and frontend-focused software developer
                  with hands-on internship experience working on real-world web applications.
                  My journey into development started with curiosity about how websites work,
                  and quickly grew into a strong passion for building clean and interactive
                  user interfaces.
              </p>

              <p>
                  I specialize in React, JavaScript, and Tailwind CSS, and have worked on
                  features like protected routes, form handling with Formik & Yup, API
                  integration, Redux state management, and responsive UI development. I enjoy
                  turning designs into pixel-perfect, scalable components.
              </p>

              <p>
                Alongside frontend development, I’m actively strengthening my backend
                knowledge and data structures & algorithms to prepare for software
                engineering roles. I believe in writing clean, maintainable code and
                constantly improving through hands-on practice and learning.
              </p>
            </div>


            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I aim to grow as a software engineer by building meaningful products,
                writing clean code, and continuously improving my skills through real-world
                problem solving."

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