"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-3 bg-white text-black text-lg border-none w-[360px] sm:w-[270px] lg:w-[520px] min-[1245px]:w-[750px] max-h-[368px] h-full ",
        className
      )}
      classNames={{
        months:
          "flex flex-col sm:flex-row space-y-4  sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-lg font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] p-0 text-white border-none opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table:
          "w-full border-collapse space-y-1 w-[340px] sm:w-[250px] lg:w-[500px] min-[1245px]:w-[720px]",
        head_row: "flex justify-between",
        head_cell:
          "text-neutral-500 rounded-md w-8 font-normal text-[0.8rem] dark:text-neutral-400",
        row: "flex w-full mt-2 justify-between",
        cell: cn(
          "relative p-0 text-center text-lg focus-within:relative  focus-within:z-20 [&:has([aria-selected])]:text-white [&:has([aria-selected])]:bg-neutral-200 [&:has([aria-selected].day-outside)]:bg-neutral-100/50 [&:has([aria-selected].day-range-end)]:rounded-r-md dark:[&:has([aria-selected])]:bg-neutral-800 dark:[&:has([aria-selected].day-outside)]:bg-neutral-800/50",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-10 h-10 md:h-8 md:w-8 font-normal aria-selected:opacity-100 "
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] text-white hover:bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] hover:text-neutral-50 focus:bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] focus:text-white dark:bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] dark:text-white dark:hover:bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] dark:hover:text-white dark:focus:bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] dark:focus:text-white",
        day_today: "bg-[#1936BA] text-white dark:bg-[#1936BA] dark:white",
        day_outside:
          "day-outside text-neutral-500 opacity-50  aria-selected:bg-neutral-100/50 aria-selected:text-neutral-500 aria-selected:opacity-30 dark:text-neutral-400 dark:aria-selected:bg-neutral-800/50 dark:aria-selected:text-neutral-400",
        day_disabled: "text-neutral-500 opacity-50 dark:text-neutral-400",
        day_range_middle:
          "aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
