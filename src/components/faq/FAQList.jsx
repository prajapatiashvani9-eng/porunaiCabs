import FAQItem from "./FAQItem";
import { faqs } from "./faqData";

function FAQList({ openIndex, setOpenIndex }) {
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto mt-14 max-w-4xl space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
}

export default FAQList;