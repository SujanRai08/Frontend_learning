import ReviewCard from "../Components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-palanquin text-center font-bold">What Our<span className="text-coral-red "> Customer</span> Says?</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center ">Hear guiene stories from our customers about there experiences their expections with us.</p>
      <div className="mt-24 justify-evenly flex flex-1 items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>(
          <ReviewCard 
          key={review.customerName}
          imgURL={review.imgURL}
          customerName = {review.customerName}
          rating={review.rating}
          feedback={review.feedback} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews