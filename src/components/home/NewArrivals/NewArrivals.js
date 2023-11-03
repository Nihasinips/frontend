import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wnIx0RqUTa3Ax-Bi4VgPGxmRxCps2RNIfA&usqp=CAU"
            productName="Witch King"
            price="44.00"
            color=" Martha Wells"
            badge={true}
            des="A fugitive witch from an oppressive fae kingdom plots to free himself from his past when his unwanted fiance, heir to the throne, forces him to return home under the threat of a life-or-death blood contract."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img="https://m.media-amazon.com/images/I/51o4gDSE07L.jpg"
            productName="The last tale of the Flower Bride"
            price="250.00"
            color="Roshani Chokshi"
            badge={true}
            des="In the book, a man and his mysterious wife, Indigo, return to her childhood home. There, he is forced to reckon with details he never knew about Indigo's past, particularly about her childhood best friend Azure who disappeared years before."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img="https://m.media-amazon.com/images/I/51H+upoqo+L.jpg"
            productName="Divine Rivals"
            price="80.00"
            color="Rebecca Ross"
            badge={true}
            des="When two young rival journalists find love through a magical connection, they must face the depths of hell, in a war among gods, to seal their fate forever. After centuries of sleep, the gods are warring again. But eighteen-year-old Iris Winnow just wants to hold her family together."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img="https://m.media-amazon.com/images/I/A1m1hAOgeEL._AC_UF894,1000_QL80_.jpg"
            productName="Immortal Longings"
            price="60.00"
            color="Chloe Gong"
            badge={false}
            des="Immortal Longings is a fiery collision of power plays, spilled blood, and romance amidst a set of deadly games."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img="https://m.media-amazon.com/images/I/51o4gDSE07L.jpg"
            productName="The last tale of the Flower Bride"
            price="60.00"
            color="Roshani Chokshi"
            badge={false}
            des="In the book, a man and his mysterious wife, Indigo, return to her childhood home. There, he is forced to reckon with details he never knew about Indigo's past, particularly about her childhood best friend Azure who disappeared years before."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
