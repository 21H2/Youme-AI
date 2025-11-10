"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const faqs = [
  {
    question: "How does Youme AI generate content?",
    answer: "Youme AI uses advanced AI models to analyze your video content and generate optimized titles, descriptions, and thumbnails based on proven engagement patterns and SEO best practices.",
  },
  {
    question: "Can I customize the AI-generated content?",
    answer: "Absolutely! All AI-generated content is fully editable. You can use it as-is or customize it to match your brand voice and style.",
  },
  {
    question: "What video formats are supported?",
    answer: "We support all major video formats including MP4, MOV, AVI, and more. You can also paste YouTube URLs directly for quick processing.",
  },
  {
    question: "Is my content secure?",
    answer: "Yes! We use enterprise-grade encryption and never share your content with third parties. Your videos and data are completely secure.",
  },
  {
    question: "How many videos can I process?",
    answer: "Our plans range from 10 videos per month on the free tier to unlimited processing on enterprise plans. Check our pricing for details.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! You can start with our free plan that includes 10 video processing credits per month. No credit card required.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about Youme AI
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 cursor-target"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
