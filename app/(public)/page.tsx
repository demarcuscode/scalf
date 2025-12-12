import SiteFooter from "@/components/general/foot";
import SearchBtn from "@/components/general/searchbtn";
import LastImage from "@/components/hero/actionheroinfoimg";
import FAQ from "@/components/hero/faq";
import ArtisticCounter from "@/components/hero/figures";
import Hero from "@/components/hero/hero";
import HeroInfo from "@/components/hero/info";
import JoinNewsletter from "@/components/hero/joinnewsletter";
import Map from "@/components/hero/map";
import Rated from "@/components/hero/rated";
import TestimonialsSection from "@/components/hero/testdiv";

export default function Home() {
  return (
    <section className=" w-full h-full mt-15 ">
      <div className="  p-4">
        <Hero />
        <SearchBtn />
      </div>
      <div className="max-w-[90%] mx-auto">
        <ArtisticCounter title="Hostels" number={500} />
        <ArtisticCounter title="Users" number={5000} />
        <ArtisticCounter title="Engagements" number={15000} />
      </div>
      <Rated />
      <HeroInfo />
      <FAQ />
      <TestimonialsSection />
      <Map />
      <LastImage />
      <JoinNewsletter />
      <SiteFooter />
    </section>
  );
}
