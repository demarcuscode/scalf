import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function JoinNewsletter() {
  return (
    <section className="p-8  max-w-[95%] mx-auto bg-misecondary">
      <div className="w-full flex items-center justify-center gap-4 ">
        <Input
          className="w-full bg-white p-4"
          placeholder="example@gmail.com"
        />
        <Button className="text-lg text-card bg-miaccent capitalize font-bold p-4">
          search
        </Button>
      </div>
    </section>
  );
}
