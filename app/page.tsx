import Footer from "@/components/marketing/Footer";
import Hero from "@/components/marketing/Hero";
import Navigation from "@/components/marketing/Navigation";
import NavigationMobile from "@/components/marketing/NavigationMobile";
import QuestionAnswerSec from "@/components/marketing/QuestionAnswerSec";
import LenisProvider from "@/components/provider/LenisProv";
import SectionTrans from "@/components/provider/SectionTrans";

export default function Home() {
  return (
    <LenisProvider>
      <div>
        <div className=" md:block hidden">
          <SectionTrans
            sectionOne={<Hero />}
            sectionTwo={<QuestionAnswerSec />}
          />
        </div>
        <div className=" block md:hidden">
          <Hero />
          <QuestionAnswerSec />
        </div>
        {/* <div className=" h-[300vh]" /> */}
      </div>
    </LenisProvider>
  );
}
