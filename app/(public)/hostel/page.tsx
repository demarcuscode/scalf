import { ratedhostels } from "@/lib/constant";
import Hostelcard from "./upload/hostelidcard";
import HostelSearch from "./hostelsearctbar";

const hostels = [
  { id: "1", name: "Sunrise Hostel", type: "Hostel", price: 1200, roomKind: 1 },
  {
    id: "2",
    name: "Palm Apartments",
    type: "Apartment",
    price: 2500,
    roomKind: 2,
  },
  {
    id: "3",
    name: "Ocean View Hostel",
    type: "Hostel",
    price: 1500,
    roomKind: 3,
  },
  {
    id: "4",
    name: "City Center Rooms",
    type: "Hostel",
    price: 1000,
    roomKind: 4,
  },
];

export default function page() {
  return (
    <section className="w-full">
      <div className="max-w-[93%] mx-auto">
        <div className="pt-10">
          <h2 className="text-4xl text-left   pt-10 capitalize  text-misecondary font-extrabold tracking-wide ">
            search for all hostels , homstels and apartments listing on your
            campus here.
          </h2>
          <HostelSearch hostels={hostels} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-10  p-0 ">
          {ratedhostels.map((item, index) => {
            return <Hostelcard key={index + item.label} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}
