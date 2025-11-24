import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { Pricing } from '@/components/Pricing'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Pricing />
      <Author />
      <Footer />
    </>
  )
}
