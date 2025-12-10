"use client";
import React from "react";
import { CalendarIcon, MapPin, BedDouble } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export default function SearchBtn() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="w-full max-w-3xl md:max-w-[80%] relative z-20 -top-10   mx-auto p-5 bg-white rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* -------- City Select -------- */}
      <div>
        <label className="text-sm font-medium mb-1 block">City</label>
        <Select>
          <SelectTrigger className="w-full">
            <MapPin className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Select city" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="accra">Accra</SelectItem>
            <SelectItem value="kumasi">Kumasi</SelectItem>
            <SelectItem value="takoradi">Takoradi</SelectItem>
            <SelectItem value="cape-coast">Cape Coast</SelectItem>
            <SelectItem value="tamale">Tamale</SelectItem>
            <SelectItem value="ho">Ho</SelectItem>
            <SelectItem value="koforidua">Koforidua</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* -------- Date Picker -------- */}
      <div>
        <label className="text-sm font-medium mb-1 block">Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? date.toDateString() : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>
      </div>

      {/* -------- Room Type Select -------- */}
      <div>
        <label className="text-sm font-medium mb-1 block">Room Type</label>
        <Select>
          <SelectTrigger className="w-full">
            <BedDouble className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 in room</SelectItem>
            <SelectItem value="2">2 in room</SelectItem>
            <SelectItem value="3">3 in room</SelectItem>
            <SelectItem value="4">4 in room</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* -------- Search Button -------- */}
      <div className="flex items-end">
        <Button className="w-full h-11 text-white bg-blue-400 font-semibold text-md">
          Book a Room
        </Button>
      </div>
    </div>
  );
}
