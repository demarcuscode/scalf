import SiteFooter from "@/components/general/foot";
import SearchBtn from "@/components/general/searchbtn";
import LastImage from "@/components/hero/actionheroinfoimg";
import FAQ from "@/components/hero/faq";
import Hero from "@/components/hero/hero";
import HeroInfo from "@/components/hero/info";
import JoinNewsletter from "@/components/hero/joinnewsletter";
import Map from "@/components/hero/map";
import Rated from "@/components/hero/rated";
import TestimonialsSection from "@/components/hero/testdiv";
import Image from "next/image";

export default function Home() {
  return (
    <section className=" w-full h-full p-4">
      <div className="relative">
        <Hero />
        <SearchBtn />
      </div>
      <Rated />
      <HeroInfo />
      <FAQ />
      <TestimonialsSection />
      <Map />
      <JoinNewsletter />
      <LastImage />
      <SiteFooter />
    </section>
  );
}
