import SearchBtn from "@/components/general/searchbtn";
import Hostelcard from "@/components/hostel/hostecard";
import { ratedhostels } from "@/lib/constant";

export default function page() {
  return (
    <section className=" ">
      {/* searchbar , hostel listing  */}
      <div className="mt-20 p-8 flex flex-col gap-10 text-center">
        <h2 className="text-4xl text-centr my-10 uppercase font-extrabold tracking-wide ">
          Stop treking in want for a place. start searching{" "}
        </h2>
        <SearchBtn />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
        {ratedhostels.map((item, index) => {
          return <Hostelcard key={index + item.label} {...item} />;
        })}
      </div>
    </section>
  );
}
