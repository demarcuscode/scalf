import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function JoinNewsletter() {
  return (
    <section className="p-8 bg-blue-400 my-14 h-[20vh] flex items-center md:max-w-[80%] md:mx-auto justify-center rounded-lg p-4">
      <div className="w-full flex items-center justify-center gap-4">
        <Input
          className="w-full bg-white p-4"
          placeholder="example@gmail.com"
        />
        <Button className="text-lg text-blue-400 bg-white p-4">search</Button>
      </div>
    </section>
  );
}
