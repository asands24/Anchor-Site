import React from 'react';
import { CONTACT_EMAIL } from '../lib/offer';

const FAQS = [
  {
    q: 'Do I need to be technical?',
    a: "No. We do the setup. If you can send an email, you can get Anchor running. Installing it is pasting one line into your site's settings, and we'll do that too if you'd like.",
  },
  {
    q: 'What if it gives a wrong answer?',
    a: "It only answers from the content you give us, and says \"I don't know\" rather than guessing. If you spot something wrong, email us and we fix it, usually the same day.",
  },
  {
    q: 'Is my data used to train AI?',
    a: "No. Your content and your customers' conversations are never used to train AI models. Each business's content is stored separately, and we delete it whenever you ask.",
  },
  {
    q: 'What happens if I go over my conversation limit?',
    a: "Nothing breaks. We'll let you know and talk about whether Growth makes sense. No surprise charges.",
  },
  {
    q: 'Can I cancel?',
    a: 'Yes, any time. No contract. We remove the assistant and delete your content.',
  },
  {
    q: 'Who is behind Anchor?',
    a: `Anchor is built and run by Alex at S&S Technologies. When you email ${CONTACT_EMAIL}, the person who built it answers.`,
  },
];

export const FAQ: React.FC = () => (
  <section id="faq" className="py-24 border-t border-anchor-slate/10">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Questions</h2>
      <div className="divide-y divide-anchor-slate/10">
        {FAQS.map(item => (
          <details key={item.q} className="group py-5">
            <summary className="cursor-pointer list-none flex justify-between items-center text-lg font-semibold text-white">
              {item.q}
              <span className="text-anchor-blue-500 group-open:rotate-45 transition-transform text-2xl leading-none" aria-hidden="true">+</span>
            </summary>
            <p className="text-anchor-slate leading-relaxed mt-3">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
