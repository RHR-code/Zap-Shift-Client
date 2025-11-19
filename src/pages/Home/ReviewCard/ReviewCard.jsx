import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { review: testimonial, userName, user_photoURL, user_email } = review;
  return (
    <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <FaQuoteLeft className="text-teal-300 text-2xl mb-3" />

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {testimonial}
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-dashed border-gray-300">
        <div className="w-8 h-8 bg-teal-800 rounded-full">
          <img className="rounded-full" src={user_photoURL} alt="" />
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold text-sm">{userName}</h4>
          <p className="text-gray-500 text-xs">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
