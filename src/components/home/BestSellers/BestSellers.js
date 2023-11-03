import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img="https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg"
          productName="The Alchemist"
          price="35.00"
          color="Paulo Coelho"
          badge={true}
          des="The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets mentors, falls in love, and most importantly, learns the true importance of who he is and how to improve himself ."
        />
        <Product
          _id="1012"
          img="https://m.media-amazon.com/images/I/71Chcpw13lL._AC_UF1000,1000_QL80_.jpg"
          productName="It ends with us"
          price="180.00"
          color="Colleen Hoover"
          badge={false}
          des="It Ends With Us screams out loud that it's not okay, that it's not normal, and that this cycle of abuse must end for good. It is the author's brave attempt to present the true picture of abuser, victim, and survivor."
        />
        <Product
          _id="1013"
          img="https://m.media-amazon.com/images/I/B1F+WB+FOZS._AC_UF1000,1000_QL80_.jpg"
          productName="The Secret Garden"
          price="25.00"
          color="Frances Hodgson Burnett"
          badge={true}
          des="The gardens surrounding the large property are Mary's only escape. Then, Mary discovers a secret garden, surrounded by walls and locked with a missing key. With the help of two unexpected companions, Mary discovers a way in—and becomes determined to bring the garden back to life."
        />
        <Product
          _id="1014"
          img="https://m.media-amazon.com/images/I/71dNsRuYL7L._AC_UF894,1000_QL80_.jpg"
          productName="You live only once"
          price="220.00"
          color="Stuti Changle"
          badge={false}
          des="The story is about Alara searching for Elisha and in the process meeting Aarav and Ricky among others in Goa, but at the end, each of them realize they are searching for something more than a missing person. And that is exactly what the title translates into — You live only once.."
        />
      </div>
    </div>
  );
};

export default BestSellers;
