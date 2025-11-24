import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          "भगवद्गीता का सरल पाठ" एक सरल और सुलभ हिंदी संकलन है जो भगवद्गीता के
          गूढ़ रहस्यों को समझने में सहायता करता है।
        </p>
        <p className="mt-4">
          भगवद्गीता आध्यात्मिक ज्ञान का अमूल्य भंडार है। यह पुस्तक भगवद्गीता के
          श्लोकों को सरल हिंदी में प्रस्तुत करती है, जिससे प्रत्येक व्यक्ति इसके
          गहन अर्थों को समझ सके।
        </p>
        <p className="mt-4">
          सनातन दास जी ने भगवद्गीता के दिव्य रहस्यों को सरल भाषा में प्रस्तुत
          किया है।
        </p>
        <p className="mt-4">
          "भगवद्गीता का सरल पाठ" में आप सीखेंगे कि कैसे भगवान कृष्ण ने अर्जुन को
          जीवन के महत्वपूर्ण प्रश्नों के उत्तर दिए।
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'सरल हिंदी में भगवद्गीता के श्लोकों का अनुवाद',
            'प्रत्येक अध्याय की विस्तृत व्याख्या',
            'आध्यात्मिक ज्ञान और जीवन में उसका उपयोग',
            'कर्म, भक्ति, और ज्ञान योग का सार',
            'दैनिक जीवन में भगवद्गीता के सिद्धांतों को लागू करना',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-amber-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          इस पुस्तक को पढ़ने के बाद, आपको भगवद्गीता के गहन अर्थों को समझने और
          अपने जीवन में लागू करने का आत्मविश्वास प्राप्त होगा।
        </p>
      </Container>
    </section>
  )
}
