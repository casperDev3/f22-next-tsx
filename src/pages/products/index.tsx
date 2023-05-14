import React, { useState, useEffect } from "react";
import Image from "next/image";
// react
import { useDispatch } from "react-redux";
import { clearCart } from "@/store/features/cart";
// styles
import s from "./Products.module.scss";
// boostrap
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
// utils
import { getProducts } from "@/utils/Fetch";
// components
import Product from "@/components/cards/product";

// Server side rendering
export const getServerSideProps = async () => {
  const prod = await getProducts("https://fakestoreapi.com", "/products").then(
    (res) => {
      return res;
    }
  );
  return {
    props: {
      prod,
    },
  };
};

const Products = (props: any) => {
  const dispatch = useDispatch();
  const { prod } = props;
  // Client side rendering
  const [products, setProducts] = useState(prod);
  const [search, setSearch] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (search) {
      const filterProducts = [...prod].filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });
      setProducts(filterProducts);
    } else {
      setProducts(prod);
    }
  }, [search]);
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <div className={s.products}>Products</div>
          </Col>
          <Col lg={6}>
            <button
              onClick={() => {
                dispatch(clearCart());
              }}
              className="btn btn-warning"
            >
              Clear Cart
            </button>
          </Col>
        </Row>
        <Row>
          <Col lg={1}>
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              placeholder="Search products..."
            />
          </Col>
        </Row>
        <Row>
          {products.length > 0 ? (
            <>
              {products.map((product: any) => {
                return (
                  <Col lg={4} key={product.id}>
                    <Product product={product} />
                  </Col>
                );
              })}
            </>
          ) : (
            <>
              <p>Товарів не знайдено</p>
            </>
          )}

          {/* <Col lg={4}>
            <Product />
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Products;
