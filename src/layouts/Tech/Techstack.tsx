// src/layouts/Tech/Techstack.tsx
"use client";

import Image from "next/image";
import { images } from '../../refs';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { BsTools } from "react-icons/bs";
import { FaCode, FaCog, FaServer } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { PiCircuitryFill } from "react-icons/pi";
import {
  SiExpress,
  SiShadcnui,
  SiVercel
} from "react-icons/si";
import techList from "./techList";

const iconMap: { [key: string]: JSX.Element } = {
  JavaScript: <Image src={images.javascript} alt="JavaScript" width={24} height={24} />,
  TypeScript: <Image src={images.typescript} alt="TypeScript" width={24} height={24} />,
  Python: <Image src={images.python} alt="Python" width={24} height={24} />,
  HTML5: <Image src={images.html} alt="HTML5" width={24} height={24} />,
  CSS3: <Image src={images.css} alt="CSS3" width={24} height={24} />,


  "C#": <Image src={images.cs} alt="C#" width={24} height={24} />,

  GCP: <Image src={images.gcp} alt="GCP" width={24} height={24} />,
  AWS: <Image src={images.aws} alt="AWS" width={24} height={24} />,
  Azure: <Image src={images.azure} alt="Azure" width={24} height={24} />,
  Nginx: <Image src={images.nginx} alt="Nginx" width={24} height={24} />,

  React: <Image src={images.react} alt="React" width={24} height={24} />,
  "Next.js": <Image src={images.nextjs} alt="Next.js" width={24} height={24} />,
  TailwindCSS: <Image src={images.tailwind} alt="TailwindCSS" width={24} height={24} />,
  "Framer Motion": <Image src={images.framer} alt="Framer Motion" width={24} height={24} />,
  Shadcn: <SiShadcnui className="h-4 w-4" />,

  PostgreSQL: <Image src={images.postgresql} alt="PostgreSQL" width={24} height={24} />,
  MongoDB: <Image src={images.mongodb} alt="MongoDB" width={24} height={24} />,
  "Prisma-ORM": <Image src={images.prisma} alt="Prisma-ORM" width={24} height={24} />,
  "Next-Auth": <Image src={images.authjs} alt="Prisma-ORM" width={24} height={24} />,
  "JWT/OAUTH": <Image src={images.auth0} alt="Prisma-ORM" width={22} height={22} />,
  "Node.js": <Image src={images.node} alt="Node.js" width={24} height={24} />,
  Express: <SiExpress className="h-4 w-4" />,

  Linux: <Image src={images.linux} alt="Linux" width={24} height={24} />,
  "VS Code": <Image src={images.vs_code} alt="VS Code" width={24} height={24} />,
  "Visual Studio": <Image src={images.visual_studio} alt="Visual Studio" width={24} height={24} />,
  Vercel: <SiVercel className="h-4 w-4" />,
  
  Git: <Image src={images.git} alt="Github" width={24} height={24} />,
  GitHub: <Image src={images.github} alt="Git" width={24} height={24} />,
  Bash: <Image src={images.bash} alt="Bash" width={24} height={24} />,
  Figma: <Image src={images.figma} alt="Figma" width={24} height={24} />,
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
                  <span className="text-2xl">{skillSet.type}</span>
                </CardTitle>
                <Separator className="mt-2.5 mb-2" />
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
                        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-lg font-medium hover:bg-secondary/80 cursor-pointer"
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