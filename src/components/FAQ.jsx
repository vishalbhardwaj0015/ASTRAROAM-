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
          className={`border rounded-xl overflow-hidden transition-all duration-300 ${
            openIndex === i ? 'border-primary shadow-sm' : 'border-gray-100'
          }`}
        >
          <button
            className="w-full flex items-center justify-between py-4 px-6 bg-transparent border-none cursor-pointer font-heading font-semibold text-sm text-navy text-left gap-4 transition-colors hover:text-primary"
            onClick={() => toggle(i)}
          >
            <span>{faq.q}</span>
            <FiChevronDown
              className={`text-lg shrink-0 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180 text-primary' : 'text-gray'
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-[300px]' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-4">
              <p className="text-gray text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
