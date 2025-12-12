import SearchBtn from "@/components/general/searchbtn";
import Hostelcard from "@/components/hostel/hostecard";
import { ratedhostels } from "@/lib/constant";

export default function page() {
  return (
    <section className="max-w-full ">
      {/* searchbar , hostel listing  */}
      <div className="mt-20 p-4 flex flex-col gap-4  w-full">
        <h2 className="text-xl text-left max-w-[90%] mx-auto  my-5 uppercase font-extrabold tracking-wide ">
          <SearchBtn className="w-full p-4" />
          Stop treking in want for a place. start searching{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 p-8">
        {ratedhostels.map((item, index) => {
          return <Hostelcard key={index + item.label} {...item} />;
        })}
      </div>
    </section>
  );
}
