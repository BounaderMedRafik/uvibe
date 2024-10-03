import Hero from "@/components/marketing/Hero";
import Navigation from "@/components/marketing/Navigation";
import NavigationMobile from "@/components/marketing/NavigationMobile";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <div className=" md:block hidden">
          <Navigation />
        </div>
        <div className=" md:hidden block">
          <NavigationMobile />
        </div>
      </div>
      <Hero />
    </div>
  );
}
