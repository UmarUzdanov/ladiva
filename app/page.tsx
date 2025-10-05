import Hero from '@/components/home/Hero'
import ProcessSteps from '@/components/home/ProcessSteps'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import WhyWorkWithMe from '@/components/home/WhyWorkWithMe'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProcessSteps />
      <FeaturedProjects />
      <WhyWorkWithMe />
    </main>
  )
}
