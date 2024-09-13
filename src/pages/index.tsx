import { Avatar } from "@nextui-org/react";

import {
  CPlusPlusIcon,
  CSharpIcon,
  GitIcon,
  JavaScriptIcon,
  LaravelIcon,
  MongoDbIcon,
  MySqlIcon,
  NestJsIcon,
  NextJsIcon,
  TypeScriptIcon,
} from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import CustomCarousel from "@/components/Carousel";

export default function Home() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center py-10">
        {/* Avatar and Profile Section */}
        <Avatar className="w-40 h-40 mb-6" />
        <div className="text-center text-foreground max-w-2xl">
          <p className="text-lg">
            I'm Ruben Freire Andrade, a software developer passionate about
            building secure and scalable web applications. I specialize in
            React, Node.js, and cloud technologies, creating impactful solutions
            across different platforms.
          </p>
        </div>

        {/* Skills & Technologies Section */}
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-2xl font-medium text-center mb-4">
            Skills & Technologies
          </h2>
          <hr className="border-foreground mb-8" />

          <div className="flex justify-center gap-6">
            <TypeScriptIcon size={50} />
            <JavaScriptIcon size={50} />
            <NextJsIcon size={50} />
            <NestJsIcon size={50} />
            <LaravelIcon size={50} />
            <CPlusPlusIcon size={50} />
            <CSharpIcon size={50} />
            <MySqlIcon size={50} />
            <MongoDbIcon size={50} />
            <GitIcon size={50} />
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="mt-16 w-full max-w-4xl">
          <h2 className="text-2xl font-medium text-center mb-4">
            Featured Projects
          </h2>
          <hr className="w-40 border-foreground my-4 mx-auto" />

          <div className="flex justify-center">
            <CustomCarousel />
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Swipe through to see my latest work
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
