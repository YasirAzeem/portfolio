"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export default function CustomCalender() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="space-y-3">
      <p className="text-xl font-semibold max-sm:text-center">Choose a date</p>

      <div className="w-fit mx-auto p-[1.5px] rounded-md">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-full "
        />
      </div>
    </div>
  );
}
