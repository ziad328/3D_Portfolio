import { clientReviews } from '../constants/index';

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
  <div key={`review-${id}`} className="client-review">
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
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from My Clients</h3>

      <div className="client-container">
        {clientReviews.map((review: ClientReview) => (
          <ReviewCard key={`review-${review.id}`} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
