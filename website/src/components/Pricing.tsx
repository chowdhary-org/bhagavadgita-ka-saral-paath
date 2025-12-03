import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'

function Plan({
  name,
  description,
  price,
  buttonLabel,
  href,
  featured = false,
}: {
  name: string
  description: string
  price: string
  buttonLabel: string
  href: string
  featured?: boolean
}) {
  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-amber-600 sm:shadow-lg',
      )}
    >
      {featured && (
        <div className="absolute inset-0 mask-[linear-gradient(white,transparent)] text-white/10">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900',
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600',
          )}
        >
          {description}
        </p>
        <p className="order-first flex font-display font-bold">
          <span
            className={clsx(
              'text-[1.75rem]/9',
              featured ? 'text-amber-200' : 'text-slate-500',
            )}
          >
            ₹
          </span>
          <span
            className={clsx(
              'mt-1 ml-1 text-7xl tracking-tight',
              featured ? 'text-white' : 'text-slate-900',
            )}
          >
            {price}
          </span>
        </p>
        <Button
          href={href}
          color={featured ? 'white' : 'slate'}
          className="mt-8"
          aria-label={`${buttonLabel} - Buy the ${name} edition for ₹${price}`}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="purchase"
      aria-labelledby="purchase-title"
      className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
    >
      <Container>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          पुस्तक खरीदें
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          "भगवद्गीता का सरल पाठ" अभी उपलब्ध है। आप इसे विभिन्न प्लेटफॉर्म से
          खरीद सकते हैं।
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:gap-8 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            featured
            name="Home Delivery / होम डिलीवरी"
            description="Get the book delivered to your doorstep / पुस्तक आपके घर पर पहुंचाई जाएगी"
            price="120"
            buttonLabel="Buy with Home Delivery / होम डिलीवरी के लिए खरीदें"
            href="https://rzp.io/rzp/VNHuvyc"
          />
          <Plan
            name="In-Person Pickup / व्यक्तिगत रूप से"
            description="Pay online and collect in person / ऑनलाइन भुगतान करें और व्यक्तिगत रूप से लें"
            price="120"
            buttonLabel="Buy for In-Person Pickup / व्यक्तिगत रूप से लेने के लिए खरीदें"
            href="https://rzp.io/rzp/Jj1cLIC"
          />
        </div>
      </div>
    </section>
  )
}
