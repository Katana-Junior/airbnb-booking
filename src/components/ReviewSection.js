import React from "react";
import { FiStar } from "react-icons/fi";

export default function ReviewSection({ reviews }) {
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : 0;

  return (
    <div className="py-8 border-t border-airbnb-lightGray">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <FiStar
            size={24}
            className="fill-airbnb-darkGray text-airbnb-darkGray"
          />
          <span className="text-2xl font-bold text-airbnb-darkGray">
            {averageRating}
          </span>
        </div>
        <div>
          <p className="text-lg font-semibold text-airbnb-darkGray">
            {reviews.length} reviews
          </p>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="pb-6 border-b border-airbnb-lightGray last:border-b-0"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-semibold text-airbnb-darkGray">
                  {review.author}
                </h4>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      size={14}
                      className={
                        i < review.rating
                          ? "fill-airbnb-darkGray text-airbnb-darkGray"
                          : "text-airbnb-lightGray"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
