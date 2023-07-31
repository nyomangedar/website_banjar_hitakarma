import React, { useState, ReactNode } from "react";

interface ReadMoreProps {
  children: ReactNode;
}

const ReadMore = ({ children }: ReadMoreProps) => {
  const text = children as string;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="mt-5">
      {isReadMore ? text.slice(0, 300) : text}
      <span onClick={toggleReadMore} className="cursor-pointer text-blue-500">
        {isReadMore ? "... Baca Lebih Lanjut" : " Maca Kurang"}
      </span>
    </p>
  );
};

export default ReadMore;
