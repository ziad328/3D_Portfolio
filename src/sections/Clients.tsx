import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { clientReviews } from '../constants/index';

gsap.registerPlugin(ScrollTrigger);

interface ClientReview {
  id: number;
  name: string;
  position: string;
  img: string;
  review: string;
}

const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex self-end items-center gap-2">
    {Array.from({ length: count }, (_, i) => (
      <img key={i} src="/assets/star.png" alt={`Star ${i + 1}`} className="w-5 h-5" />
    ))}
  </div>
);

const ReviewCard = ({ id, name, position, img, review }: ClientReview) => (
  <div key={`review-${id}`} className="client-review review-card">
    <p className="text-white-800 font-light">{review}</p>
    <div className="client-content">
      <div className="flex gap-3 items-center">
        <img src={img} alt={`${name}'s avatar`} className="w-12 h-12 rounded-full object-cover" />
        <div className="flex flex-col">
          <p className="font-semibold text-white-800">{name}</p>
          <p className="text-white-500 md:text-base text-sm font-light">{position}</p>
        </div>
      </div>
      <StarRating />
    </div>
  </div>
);

const Clients = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.clients-title',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none none',
        },
      },
    );

    gsap.fromTo(
      '.review-card',
      { y: 50, opacity: 0, scale: 0.97 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 55%',
          toggleActions: 'play none none none',
        },
      },
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="c-space my-20">
      <h3 className="head-text clients-title">Hear from My Clients</h3>

      <div className="client-container">
        {clientReviews.map((review: ClientReview) => (
          <ReviewCard key={`review-${review.id}`} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
