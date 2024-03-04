'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Understanding Fitness Fundamentals',
      description:
        'Dive deep into the fundamentals of fitness and enhance your understanding of key principles.',
      slug: 'understanding-fitness-fundamentals',
      isFeatured: true,
    },
    {
      title: 'The Art of Meal Prep',
      description:
        'Master the craft of meal preparation and learn how to fuel your body for optimal performance.',
      slug: 'the-art-of-meal-prep',
      isFeatured: true,
    },
    {
      title: 'Advanced Workout Techniques',
      description:
        'Unlock advanced workout techniques to take your fitness journey to the next level.',
      slug: 'advanced-workout-techniques',
      isFeatured: true,
    },
    {
      title: 'Nutrition for Athletes',
      description:
        'Get insights into proper nutrition strategies tailored specifically for athletes and active individuals.',
      slug: 'nutrition-for-athletes',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Injury Prevention and Recovery',
      description:
        'Learn essential techniques to prevent injuries and accelerate recovery to keep you performing at your best.',
      slug: 'injury-prevention-and-recovery',
      isFeatured: true,
    },
    {
      title: 'Mindfulness for Fitness',
      description:
        'Discover the power of mindfulness in enhancing your fitness journey and overall well-being.',
      slug: 'mindfulness-for-fitness',
      isFeatured: true,
    },
  ];


  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your FITNESS Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
        <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    View All Webinars
                    </Button>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars