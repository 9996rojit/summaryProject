import React from "react";
import Header from "../SummaryHeader/header";
import Footer from "../SummaryFooter/footer";
import { header } from "../summaryPageContent/kyc.json";
function Layout({ children }) {
  return (
    <>
      <Header props={header} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
