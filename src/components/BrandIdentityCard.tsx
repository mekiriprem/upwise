/* BrandIdentityCard.tsx
   A compact, responsive card that details your Brand Identity
   Development service (3–4 weeks, ₹75 000) with iconography. */

import React from 'react';
import {
  Flag,
  Image as ImageIcon,
  Palette,
  MessageSquare,
} from 'lucide-react';

interface Item {
  icon: React.ReactNode;
  text: string;
}

const items: Item[] = [
  {
    icon: <Flag className="w-5 h-5 text-deep-navy-700" />,
    text: 'Vision, mission, and positioning statements',
  },
  {
    icon: <ImageIcon className="w-5 h-5 text-deep-navy-700" />,
    text: 'Logo design and visual system',
  },
  {
    icon: <Palette className="w-5 h-5 text-deep-navy-700" />,
    text: 'Color palette, typography, and brand moodboard',
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-deep-navy-700" />,
    text: 'Tone of voice and communication style',
  },
];

const BrandIdentityCard: React.FC = () => {
  return (
    <article className="max-w-sm rounded-2xl border border-soft-grey-200 bg-white p-8 shadow-xl transition-all hover:shadow-2xl">
      {/* Header */}
      <header className="space-y-1">
        <h3 className="text-2xl font-bold text-deep-navy-900">
          Brand Identity Development
        </h3>
        <p className="text-sm font-medium text-soft-grey-600">(3–4 Weeks)</p>
      </header>

      {/* Divider */}
      <hr className="my-6 border-soft-grey-200" />

      {/* Feature list */}
      <ul className="space-y-6">
        {items.map(({ icon, text }, idx) => (
          <li key={idx} className="flex items-start gap-4">
            {/* Colored circle behind each icon */}
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full
              ${
                idx === 0
                  ? 'bg-blue-100'
                  : idx === 1
                  ? 'bg-peach-100'
                  : idx === 2
                  ? 'bg-green-100'
                  : 'bg-rose-100'
              }`}
            >
              {icon}
            </span>
            <p className="text-sm leading-5 text-deep-navy-700">{text}</p>
          </li>
        ))}
      </ul>

      {/* Price */}
      <footer className="mt-8 border-t border-soft-grey-200 pt-6">
        <p className="text-3xl font-bold text-deep-navy-900">₹75,000</p>
      </footer>
    </article>
  );
};

export default BrandIdentityCard;
