import React from "react";
import Image from "next/image";
//redux
import { useDispatch } from "react-redux";
import { addProduct, removeOneProduct } from "@/store/features/cart";
//styles
import s from "./index.module.scss";

const Product = (props: any) => {
  const { product } = props;
  const { title, price, image } = product;
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.products__card}>
        <div className={s.products__card_img}>
          <Image src={image} alt="product" width={200} height={200} />
        </div>
        <div className={s.products__card_title}>
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </div>
        <div className={s.products__card_price}>{price}</div>
        <div
          onClick={() => {
            dispatch(addProduct(product));
          }}
          className="btn btn-primary"
        >
          Add to cart
        </div>
        <button
          onClick={() => {
            dispatch(removeOneProduct(product.id));
          }}
          className="btn btn-danger"
        >
          Remove from cart
        </button>
      </div>
    </>
  );
};

export default Product;
