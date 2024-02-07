

function Reviews({reviewsData}) {
    return (
        <div className="reviews my-20 container mx-auto flex justify-center">
        {reviewsData.map((review, index) => (
          <div className="card border rounded-3xl mx-8 p-8 shadow-md" key={index}>
            <div className="flex mb-6">
            <img src={review.img} className="w-32 rounded-3xl" alt="" />
            <div className="ml-4">
            <h2 className="text-3xl font-medium">{review.name}</h2>
            {/* Add other review details as needed, e.g., review.rating, review.comment, etc. */}
            <p className="text-main">{review.job}</p>
            </div>
            </div>
            <p className="text block">{review.text}</p>
            {/* Add additional details based on your review data structure */}
          </div>
        ))}
      </div>
    )
}

export default Reviews;