import { Avatar, Divider } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
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
  const slides = [
    "src/assets/SDLDEMO_500w.gif",
    "src/assets/SecureShare_500w.gif",
    "src/assets/UEDEMO_500w.gif",
  ];

  return (
    <DefaultLayout>
      <section>
        <Avatar className="w-40 h-40" />
        <div className="text-foreground">{siteConfig.profile}</div>
        <div>
          TOOLS & TECHNOLOGIES:
          <Divider className="bg-foreground" />
        </div>
        <div className="flex gap-4">
          <MySqlIcon size={50} />
          <MongoDbIcon size={50} />
          <TypeScriptIcon size={50} />
          <JavaScriptIcon size={50} />
          <CPlusPlusIcon size={50} />
          <CSharpIcon size={50} />
          <NextJsIcon size={50} />
          <NestJsIcon size={50} />
          <LaravelIcon size={50} />
          <GitIcon size={50} />
        </div>

        <div className="flex place-items-center">
          <CustomCarousel slides={slides} />
        </div>
      </section>
    </DefaultLayout>
  );
}
