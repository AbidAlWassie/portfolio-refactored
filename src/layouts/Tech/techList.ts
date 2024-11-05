// src/layouts/Tech/techList.ts

interface SkillType {
  type: string;
  tech: string[];
}

const techList: SkillType[] = [
  {
    type: "Frontend Technologies",
    tech: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Shadcn",
      "Framer Motion",
    ]
  },
  {
    type: "Backend Technologies",
    tech: [
      "Next-Auth",
      "JWT/OAUTH",
      "Prisma-ORM",
      "PostgreSQL",
      "MongoDB",
      "Node.js",
      "Express",
    ]
  },
  {
    type: "Tools & IDEs",
    tech: [
      "VS Code",
      "Visual Studio",
      "Bash",
      "Linux",
      "Figma",
    ]
  },
  {
    type: "DevOps & Cloud",
    tech: [
      "GCP",
      "AWS",
      "Azure",
      "Nginx",
      "Vercel",
    ]
  },
  {
    type: "Languages",
    tech: [
      "JavaScript",
      "TypeScript",
      "C#",
      "Python",
      "HTML5",
      "CSS3",
    ]
  },
  {
    type: "Version Control & CI/CD",
    tech: [
      "Git",
      "GitHub",
      "Bash"
    ]
  }
];

export default techList;
