import React from "react";
import { Link } from "react-router-dom";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/shop">
          <Image className="h-full w-full object-cover" imgSrc="https://5.imimg.com/data5/SELLER/Default/2023/3/HF/HV/YR/147952517/the-midnight-library-by-matt-haig.jpeg" />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc="https://s26162.pcdn.co/wp-content/uploads/2021/02/the-four-winds-audiobook.jpg" />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc="https://assets3.ignitermedia.com/6fcba62c8755c467d30d1447fa61afc4.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
