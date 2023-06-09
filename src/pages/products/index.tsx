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
  const [sort, setSort] = useState<string>("asc");
  const [search, setSearch] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (sort === "asc") {
      const sortProducts = [...products].sort((a, b) => {
        return a.price - b.price;
      });
      setProducts(sortProducts);
    } else if (sort === "desc") {
      const sortProducts = [...products].sort((a, b) => {
        return b.price - a.price;
      });
      setProducts(sortProducts);
    }
  }, [sort]);
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
        </Row>
        <Row>
          <Col lg={1}>
            <select
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option disabled>Choose sort</option>
              <option value="asc">Sort ASC</option>
              <option value="desc">Sort DESC</option>
            </select>
          </Col>
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
