"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

export default function CustomTimepicker() {
  const [value, setValue] = React.useState("default");

  const handleChange = (value: string) => {
    setValue(value);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
  ];
  return (
    <div className="space-y-3 max-sm:hidden">
      <p className="text-xl font-semibold max-sm:text-center px-4">
        Pick a time
      </p>

      <ScrollArea
        className="h-[340px] max-md:px-20 lg:px-4 mx-auto"
        type="always"
      >
        <form onSubmit={submit} className="">
          <RadioGroup
            onValueChange={handleChange}
            className="grid-cols-2 mx-auto md:grid-cols-3 justify-between lg:gap-8"
          >
            {timeSlots.map((timeSlot) => (
              <div
                key={timeSlot}
                className={cn(
                  `flex items-center justify-center w-[100px] h-[40px] text-base cursor-pointer bg-white text-black rounded-lg ${
                    timeSlot === value && "bg-[#1936BA] text-white"
                  }`
                )}
              >
                <RadioGroupItem value={timeSlot} id={timeSlot} />
                <Label className="cursor-pointer" htmlFor={timeSlot}>
                  {timeSlot}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </form>
      </ScrollArea>
    </div>
  );
}
