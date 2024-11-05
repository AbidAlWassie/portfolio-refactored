// src/layouts/Tech/Techstack.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { BsTools } from "react-icons/bs";
import { FaCode, FaCog, FaServer, FaShieldAlt } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { PiCircuitryFill } from "react-icons/pi";
import {
  SiAmazonwebservices,
  SiAuth0,
  SiCsharp,
  SiCss3,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMicrosoftazure,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudio,
  SiVisualstudiocode,
} from "react-icons/si";
import techList from "./techList";

const iconMap: { [key: string]: JSX.Element } = {
  JavaScript: <SiJavascript className="h-4 w-4" />,
  "Node.js": <SiNodedotjs className="h-4 w-4" />,
  Express: <SiExpress className="h-4 w-4" />,
  GCP: <SiGooglecloud className="h-4 w-4" />,
  AWS: <SiAmazonwebservices className="h-4 w-4" />,
  Azure: <SiMicrosoftazure className="h-4 w-4" />,
  Nginx: <SiNginx className="h-4 w-4" />,
  React: <SiReact className="h-4 w-4" />,
  "Next.js": <SiNextdotjs className="h-4 w-4" />,
  TailwindCSS: <SiTailwindcss className="h-4 w-4" />,
  "Framer Motion": <SiFramer className="h-4 w-4" />,
  Python: <SiPython className="h-4 w-4" />,
  Shadcn: <SiShadcnui className="h-4 w-4" />,
  PostgreSQL: <SiPostgresql className="h-4 w-4" />,
  MongoDB: <SiMongodb className="h-4 w-4" />,
  "Prisma-ORM": <SiPrisma className="h-4 w-4" />,
  "Next-Auth": <FaShieldAlt className="h-4 w-4" />,
  "JWT/OAUTH": <SiAuth0 className="h-4 w-4" />,
  Git: <SiGit className="h-4 w-4" />,
  GitHub: <SiGithub className="h-4 w-4" />,
  Linux: <SiLinux className="h-4 w-4" />,
  "VS Code": <SiVisualstudiocode className="h-4 w-4" />,
  "Visual Studio": <SiVisualstudio className="h-4 w-4" />,
  Bash: <SiGnubash className="h-4 w-4" />,
  Vercel: <SiVercel className="h-4 w-4" />,
  Figma: <SiFigma className="h-4 w-4" />,
  TypeScript: <SiTypescript className="h-4 w-4" />,
  "C#": <SiCsharp className="h-4 w-4" />,
  HTML5: <SiHtml5 className="h-4 w-4" />,
  CSS3: <SiCss3 className="h-4 w-4" />,
}

const techIconMap: { [key: string]: JSX.Element } = {
  "Frontend Technologies": <MdOutlineWeb className="h-4 w-4" />,
  "Backend Technologies": <FaServer className="h-4 w-4" />,
  "Tools & IDEs": <BsTools className="h-4 w-4" />,
  "Version Control & CI/CD": <PiCircuitryFill className="h-4 w-4" />,
  "Languages": <FaCode className="h-4 w-4" />,
  "DevOps & Cloud": <FaCog className="h-4 w-4" />,
}

export default function Techstack() {
  return (
    <section className="container mx-auto space-y-8 py-24 cursor-default">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight">Techstack</h2>
          <p className="mt-2 text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {techList.map((skillSet, index) => (
          <motion.div
            key={skillSet.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden border-none bg-gradient-to-br from-card/50 to-card shadow-xl">
              <CardHeader className="pb-4 TechTypeCard">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="text-primary">{techIconMap[`${skillSet.type}`]}</span>
                  {skillSet.type}
                </CardTitle>
                <Separator className="mt-2.5" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillSet.tech.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="custom"
                        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium hover:bg-secondary/80"
                      >
                        {iconMap[skill]}
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}