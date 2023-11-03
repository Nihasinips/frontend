import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";


const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img="https://cdn01.sapnaonline.com/product_media/9781542094085/md_9781542094085_061020211023776.jpg"
          productName="400 days"
          price="35.00"
          color="Chetan Bhagat"
          badge={true}
          des="'400 Days' is the story of Alia, a mother who is determined to find her missing son while grappling with a failing marriage and individuality."
        />
        <Product
          _id="1102"
          img="https://images-eu.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL210_SR210,210_.jpg"
          productName="It starts with us"
          price="180.00"
          color="Colleen Hoover"
          badge={true}
          des="It Starts With Us” instead focuses on recovery and starting a new life of healthy love. It's a story about feeling loved for the first time and giving the love you believe others deserve from you."
        />
        <Product
          _id="1103"
          img="https://m.media-amazon.com/images/I/61ZRWLIH8oL._AC_UF894,1000_QL80_.jpg"
          productName="A touch of Eternity"
          price="25.00"
          color="Durjoy Datta"
          badge={true}
          des="An extraordinary story of a couple Anvesha and Druvan, who were to be perfect soulmates for each other since the time they were born. Born on the same day, at the same time, and are inseparable. But as the blurb says, when the time comes, can one stay true to their soulmate?"
        />
        <Product
          _id="1104"
          img="https://m.media-amazon.com/images/I/610FSHxrCxL._UC256,256_CACC,256,256_.jpg"
          productName="Midnight Freeway"
          price="220.00"
          color="Vivaan Shah"
          badge={true}
          des="Midnight Freeway is a murder mystery where a builder Yogesh Moolchandani dies one dreadful night in an accident. Police grabs Pranav Paleja for enquiry and that's how the story, the twists, the secrets come into play."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
