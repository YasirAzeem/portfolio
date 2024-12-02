import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export default function FaqAccordion() {
  const FAQs = [
    {
      question:
        "Q1: What exactly does ProgrammX offer to businesses struggling with software development? ",
      answer:
        "ProgrammX provides custom applications, websites, mobile apps, and blockchain projects like dApps, NFTs, and DeFi platforms. We help businesses innovate and maintain a competitive edge.",
    },
    {
      question: `Q2: How does ProgrammX ensure that the software development team aligns with a client's existing company culture and workflow? `,
      answer:
        "We understand your company’s culture and workflow through consultations and onboarding. We handpick developers to fit your organizational culture, ensuring smooth collaboration.",
    },
    {
      question:
        "Q3: What makes ProgrammX different from other software development outsourcing services?",
      answer:
        "Our commitment to customization, flexibility, and performance. We build dedicated teams tailored to your needs, offer various levels of involvement, and guarantee tangible results within the first 30 days, or we continue working for free.",
    },
    {
      question:
        "Q4: Can ProgrammX handle rapid scaling of operations for a business experiencing fast growth?",
      answer:
        "Yes, we can. Our network of skilled developers and robust infrastructure allows us to quickly scale operations to meet your demands.",
    },
    {
      question:
        "Q5: What kind of performance guarantees does ProgrammX offer to ensure client satisfaction?",
      answer:
        "We guarantee a new feature or improvement within 30 days. If we fail, we continue working for free until we succeed.",
    },
  ];

  return (
    <div className="">
      <Accordion type="single" collapsible className="space-y-4">
        {FAQs?.map((faq, index) => (
          <AccordionItem value={index.toString() + "item"} key={index + "uh"}>
            <div className="bg-[linear-gradient(126.95deg,rgba(59,90,255,0.44)_-49.52%,_rgba(71,28,245,0)71.47%)] p-[1px] rounded-[10px]">
              <AccordionTrigger className="border rounded-[8px] text-left p-4 max-md:text-sm text-base flex items-center h-full ">
                {faq.question}
              </AccordionTrigger>
            </div>
            <AccordionContent className="p-4 text-base text-[#BCB9B4]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
