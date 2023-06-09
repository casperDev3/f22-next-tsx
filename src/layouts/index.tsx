import React from "react";
//components
import Header from "./header";
import Footer from "./footer";

const Layouts = (props: any) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
