
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const fitnessContent = [
  {
    title: 'Unlock Your Potential: A Personalized Journey in Fitness Mastery',
    description:
      'Embark on a fitness journey tailored uniquely to you. Our personalized training adapts to your individual needs, setting the stage for unparalleled growth and progress. At FitX, your goals meet our dedicated support, creating a harmonious path to fitness mastery.',
  },
  {
    title: 'Tailored Training: Your Path to Fitness Excellence',
    description:
      'Experience a fitness program customized to your unique needs, laying the foundation for remarkable progress and development. At FitX, we are committed to helping you achieve your goals, providing unwavering support and guidance every step of the way.',
  },
  {
    title: 'Customized Coaching: Your Blueprint for Success',
    description:
      'Discover a personalized fitness regimen designed specifically for you, fostering extraordinary growth and achievement. At FitX, your aspirations are met with our dedicated coaching, ensuring a seamless journey towards reaching your fitness potential.',
  },
  {
    title: 'Real-Time Feedback & Support',
    description:
      'Immerse yourself in an interactive training experience where feedback is immediate, just like real-time adjustments in a collaborative project. This approach enhances your understanding and mastery of fitness techniques and performance strategies.',
  },
  {
    title: 'Cutting-Edge Workouts',
    description:
      'Our workout routines are continuously updated to incorporate the latest fitness trends and methodologies, ensuring you are always training with the most current and effective techniques. Say goodbye to outdated routines and welcome workouts that evolve with the industry.',
  },
  {
    title: 'Endless Training Options',
    description:
      'With our diverse workout programs and dynamic class offerings, you will never find yourself without something new to try. Our platform provides continuous opportunities for progress, ensuring your fitness journey is always advancing.',
  },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={fitnessContent} />
    </div>
  )
}

export default WhyChooseUs