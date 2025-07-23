"use client";

import { FaStar } from "react-icons/fa";

type Props = {
rating: number;
onRate: (value: number) => void;
};

const RatingStars = ({ rating, onRate }: Props) => {
    return (
    <div className="flex space-x-1 justify-center items-center">
    {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
        key={star}
        onClick={() => onRate(star)}
        className={`cursor-pointer text-2xl ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        />
    ))}
    </div>
    );
};

export default RatingStars;
