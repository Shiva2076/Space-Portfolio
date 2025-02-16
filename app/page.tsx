import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Contact } from "@/components/main/contact";
import { Experience } from "@/components/main/experience"
import { Footer } from "@/components/main/footer"
import Approach from "@/components/main/Approach";

// import {Terminal} from "@/components/main/Terminal"
// import {Testimonial} from "@/components/main/Testimonial"


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        {/* <Encryption /> */}
        <Projects />
        <Experience/>
        <Approach/>
        {/* <Terminal/> */}
        {/* <Testimonial/> */}
        <Contact />
        {/* <Footer/> */}
      </div>
    </main>
  );
}
