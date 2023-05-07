import React from "react";
//components
import Header from "./header";
import Footer from "./footer";
// redux
import { useDispatch } from "react-redux";
import { updateFromLS } from "@/store/features/cart";
import { useEffect } from "react";

const Layouts = (props: any) => {
  const { children } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateFromLS());
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
