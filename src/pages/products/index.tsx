import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  const { prod } = props;
  // Client side rendering
  const [products, setProducts] = useState(prod);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <div className={s.products}>Products</div>
          </Col>
        </Row>
        <Row>
          {!loading && products ? (
            <>
              {products.map((product) => {
                return (
                  <Col lg={4} key={product.id}>
                    <Product product={product} />
                  </Col>
                );
              })}
            </>
          ) : (
            <Spinner animation="grow" />
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
