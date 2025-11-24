import clsx from 'clsx'

import { Button } from '@/components/Button'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'

function Plan({
  name,
  description,
  price,
  features,
  href,
  featured = false,
}: {
  name: string
  description: string
  price: string
  features: Array<string>
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
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900',
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    'h-8 w-8 flex-none',
                    featured ? 'fill-white' : 'fill-slate-600',
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          href={href}
          color={featured ? 'white' : 'slate'}
          className="mt-8"
          aria-label={`Buy the ${name} edition for ₹${price}`}
        >
          खरीदें
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
            name="Hardcover"
            description="भौतिक पुस्तक"
            price="120"
            href="upi://pay?pa=8800108844@paytm&pn=Sanatan%20Das&am=120&cu=INR&tn=Bhagavad%20Gita%20Book%20Purchase"
            features={[
              'हार्डकवर पुस्तक',
              'सभी 18 अध्याय',
              'सरल हिंदी अनुवाद',
              'उच्च गुणवत्ता प्रिंट',
              'टिकाऊ बाइंडिंग',
            ]}
          />
          <div className="relative px-4 py-16 sm:px-10 md:py-12 lg:px-12">
            <div className="relative flex flex-col">
              <h3 className="mt-7 text-lg font-semibold tracking-tight text-slate-900">
                कैसे खरीदें
              </h3>
              <div className="mt-6 space-y-6 text-base tracking-tight text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">1. भुगतान करें</p>
                  <p className="mt-2">
                    "खरीदें" बटन पर क्लिक करें या ₹120 भेजें इस UPI ID पर:
                  </p>
                  <p className="mt-1 font-mono text-lg font-semibold text-amber-600">
                    8800108844@paytm
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">2. पता भेजें</p>
                  <p className="mt-2">
                    इस नंबर पर WhatsApp करें और अपना पूरा पता भेजें:
                  </p>
                  <p className="mt-1 font-mono text-lg font-semibold text-amber-600">
                    8800108844
                  </p>
                  <ul className="mt-2 ml-4 list-disc space-y-1 text-slate-700">
                    <li>नाम</li>
                    <li>पूरा पता</li>
                    <li>शहर और पिन कोड</li>
                    <li>फोन नंबर</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    3. पुस्तक प्राप्त करें
                  </p>
                  <p className="mt-2">
                    हम आपकी पुस्तक जल्द से जल्द आपके पते पर भेज देंगे।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
