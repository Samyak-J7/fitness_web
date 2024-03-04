'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const fitnessTestimonials = [
  {
    "quote": "Joining FitX completely changed my approach to fitness and helped me achieve results I never thought possible. The trainers are incredibly knowledgeable and supportive!",
    "name": "Jessica Smith",
    "title": "FitX Member"
  },
  {
    "quote": "The sense of community at FitX is what sets it apart. I've not only transformed my body but also gained lifelong friends who motivate me to push my limits every day.",
    "name": "Ryan Johnson",
    "title": "FitX Member"
  },
  {
    "quote": "FitX gave me the tools and guidance I needed to break through plateaus and reach new heights in my fitness journey. The personalized attention from the trainers has been invaluable.",
    "name": "Emily Chen",
    "title": "FitX Member"
  },
  {
    "quote": "As someone who struggled with consistency, FitX provided the structure and accountability I needed to stay on track. I've never felt stronger or more confident in myself.",
    "name": "David Thompson",
    "title": "FitX Member"
  },
  {
    "quote": "The variety of classes and workouts offered at FitX keeps me motivated and engaged. It's not just about the physical transformation, but also the mental strength I've gained.",
    "name": "Sophia Rodriguez",
    "title": "FitX Member"
  }
]


function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={fitnessTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards