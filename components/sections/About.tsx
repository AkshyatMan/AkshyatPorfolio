"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const skills = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies.",
  },
  {
    icon: <Terminal className="h-8 w-8" />,
    title: "Backend Development",
    description: "Creating robust server-side applications and APIs.",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with expertise in full-stack development.
            I love creating beautiful and functional applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    {skill.icon}
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}