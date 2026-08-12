import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Can I visit my horse anytime?',
    answer: 'Yes. Boarders are welcome to visit and ride during daylight hours. We ask that you let us know if you plan to arrive early or stay late so we can coordinate.',
  },
  {
    question: 'What happens in an emergency?',
    answer: 'Our live-on-site manager is here around the clock. We have relationships with local equine veterinarians and will contact you immediately if anything comes up. Your emergency contacts and vet preferences are kept on file.',
  },
  {
    question: 'Can my trainer come to the farm?',
    answer: 'Absolutely. Outside trainers, farriers, and veterinarians are welcome. Ring fees apply for arena use ($30 per session for boarders, capped at $120/month).',
  },
  {
    question: 'What kind of hay and grain do you use?',
    answer: "We offer high quality first or second cut hay and grain. Each horse's nutrition is customized to their individual needs. If your horse has specific dietary requirements, we'll work with you to get it right.",
  },
  {
    question: 'Do you provide blanketing and turnout sheets?',
    answer: "We can manage blanketing changes as part of your horse's daily care routine. Just provide the blankets and let us know your preferences.",
  },
  {
    question: 'Is the property preserved? Will it ever be developed?',
    answer: 'The development rights were purchased by Suffolk County in 1979. This land is permanently protected and will remain a working equestrian farm. It can never be developed.',
  },
  {
    question: 'How do I set up a tour?',
    answer: "Call (631) 680-9904 or use the contact form on this site. We're happy to walk you through the barns, arenas, paddocks, and fields so you can see the place for yourself.",
  },
];

export function BoardingFaq() {
  const [openQuestion, setOpenQuestion] = useState(faqs[0].question);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#d8c9b6] bg-[#FAF7F2] shadow-[0_24px_50px_rgba(17,21,23,0.08)]">
      <div className="border-b border-[#e4d7c8] px-6 py-8 md:px-8">
        <p className="text-xs uppercase tracking-[0.36em] text-[#9a7a56]">Common questions</p>
        <h2 className="mt-4 text-3xl text-[#242323] md:text-4xl">Things people ask before they board here.</h2>
      </div>
      <div className="px-6 py-4 md:px-8 md:py-6">
        {faqs.map((faq) => {
          const isOpen = openQuestion === faq.question;
          return (
            <div key={faq.question} className="border-b border-[#e4d7c8] last:border-b-0">
              <button type="button" onClick={() => setOpenQuestion(isOpen ? '' : faq.question)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                <span className={`text-lg leading-8 transition-colors ${isOpen ? 'text-[#9a7a56]' : 'text-[#242323]'}`}>{faq.question}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#9a7a56]' : 'text-[#595959]'}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden"><p className="max-w-4xl pb-6 pr-10 text-base leading-8 text-[#595959]">{faq.answer}</p></motion.div> : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
