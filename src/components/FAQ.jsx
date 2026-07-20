import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  if (!faqs || faqs.length === 0) return null

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-lg overflow-hidden transition-all duration-300 dark:bg-gray-800/80 ${
            openIndex === i ? 'bg-white shadow-premium border border-accent/15 dark:border-accent/20' : 'bg-white dark:bg-gray-800/80 border border-gray-100/80 dark:border-gray-700/50'
          }`}
        >
          <button
            className="w-full flex items-center justify-between py-5 px-6 bg-transparent border-none cursor-pointer font-body font-medium text-sm text-navy dark:text-gray-100 text-left gap-4 transition-colors hover:text-accent"
            onClick={() => toggle(i)}
          >
            <span>{faq.q}</span>
            <FiChevronDown
              className={`text-lg shrink-0 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180 text-accent' : 'text-gray-400'
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-400 ${
              openIndex === i ? 'max-h-[300px]' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-5">
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed font-light">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
