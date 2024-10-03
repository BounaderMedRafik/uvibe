import Hero from "@/components/marketing/Hero";
import Navigation from "@/components/marketing/Navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
    </div>
  );
}
