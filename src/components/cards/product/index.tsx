import React from "react";
import Image from "next/image";
//styles
import s from "./index.module.scss";

const Product = (props: any) => {
  const { product } = props;
  const { title, price, image } = product;
  return (
    <>
      <div className={s.products__card}>
        <div className={s.products__card_img}>
          {/* <Image src={image} alt="product" width={200} height={200} /> */}
        </div>
        <div className={s.products__card_title}>
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </div>
        <div className={s.products__card_price}>{price}</div>
        <div className={s.products__card_button}>Add to cart</div>
      </div>
    </>
  );
};

export default Product;
