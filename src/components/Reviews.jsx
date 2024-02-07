function Reviews({ reviewsData }) {
  return (
    <div
      id="reference"
      className="reviews my-32 container mx-auto flex justify-center flex-col">
      <h2 className="font-bold text-5xl mb-10">
        Co o náš říkají naši klienti?
      </h2>

      <div className="flex justify-center">
        {reviewsData.map((review, index) => (
          <div
            className="card border rounded-3xl mx-8 p-8 shadow-md"
            key={index}>
            <div className="flex mb-6">
              <img
                src={review.img}
                className="w-24 h-24 object-cover rounded-3xl"
                alt=""
              />
              <div className="ml-4">
                <h2 className="text-3xl font-medium">{review.name}</h2>
                <p className="text-main">{review.job}</p>
              </div>
            </div>
            <p className="text block">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
