import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  FileTextIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { GitHubCommitStreak } from "@/components/github-calendar";
import InfiniteSkillMarquee from "@/components/skill-marquee";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Profile Card */}
        <Card className="col-span-3 md:col-span-1 aspect-square p-6 flex flex-col items-center text-center">
          <Image
            src="/image.png"
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">John Doe</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Full Stack Developer
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Next.js</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Passionate developer with 5+ years of experience in building web
            applications.
          </p>
          <div className="flex space-x-2">
            <Button size="icon" variant="outline">
              <GithubIcon className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline">
              <LinkedinIcon className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline">
              <MailIcon className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        {/* Projects Card */}
        <Card className="col-span-3 md:col-span-2 p-6 order-2 md:order-none">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">E-commerce Platform</h3>
              <p className="text-sm text-muted-foreground">
                A full-stack e-commerce solution built with React and Node.js.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Task Management App</h3>
              <p className="text-sm text-muted-foreground">
                A productivity app created using Vue.js and Firebase.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">
                Weather Forecast Dashboard
              </h3>
              <p className="text-sm text-muted-foreground">
                A responsive weather app using React and OpenWeatherMap API.
              </p>
            </div>
          </div>
        </Card>

        {/* Skills Card */}
        <Card className="p-6 col-span-3 order-1 md:order-none">
          <InfiniteSkillMarquee />
        </Card>

        {/* Recent Blog Posts Card */}
        <Card className="col-span-3 md:col-span-2 p-6 order-4 md:order-none">
          <h2 className="text-2xl font-semibold mb-4">Recent Blog Posts</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Mastering React Hooks</h3>
              <p className="text-sm text-muted-foreground mb-2">
                A deep dive into React's useState and useEffect hooks.
              </p>
              <Button variant="link" className="p-0">
                Read More <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div>
              <h3 className="text-lg font-medium">
                Building Scalable Node.js Applications
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Best practices for creating large-scale Node.js projects.
              </p>
              <Button variant="link" className="p-0">
                Read More <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div>
              <h3 className="text-lg font-medium">
                Introduction to TypeScript
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Why TypeScript is a game-changer for JavaScript developers.
              </p>
              <Button variant="link" className="p-0">
                Read More <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Experience Card */}
        <Card className="col-span-3 md:col-span-1 p-6 order-3 md:order-none">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-4 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-border">
            <div className="relative pl-8">
              <div className="absolute left-0 top-[9px] w-4 h-4 bg-background border-2 border-primary rounded-full"></div>
              <h3 className="text-lg font-medium">Senior Developer</h3>
              <p className="text-sm text-muted-foreground">
                TechCorp Inc. | 2020 - Present
              </p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-[9px] w-4 h-4 bg-background border-2 border-primary rounded-full"></div>
              <h3 className="text-lg font-medium">Full Stack Developer</h3>
              <p className="text-sm text-muted-foreground">
                WebSolutions Ltd. | 2018 - 2020
              </p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-[9px] w-4 h-4 bg-background border-2 border-primary rounded-full"></div>
              <h3 className="text-lg font-medium">Junior Developer</h3>
              <p className="text-sm text-muted-foreground">
                StartupXYZ | 2016 - 2018
              </p>
            </div>
          </div>
        </Card>

        {/* GitHub Streak Card */}
        <Card className="col-span-3 md:col-span-2 p-6 order-5 md:order-none">
          <h2 className="text-2xl font-semibold mb-4">GitHub Contributions</h2>
          <GitHubCommitStreak username="paranoia8972" />
        </Card>

        {/* Contact Card */}
        <Card className="col-span-3 md:col-span-1 p-6 order-6 md:order-none">
          <h2 className="text-2xl font-semibold mb-4">Let's Connect!</h2>
          <p className="text-muted-foreground mb-4">
            I'm always open to new opportunities and collaborations.
          </p>
          <Button className="w-full">
            <FileTextIcon className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </Card>
      </div>
    </main>
  );
}
