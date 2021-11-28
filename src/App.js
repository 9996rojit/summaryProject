import React from "react";
import { Button } from "antd";
import { jsPDF } from "jspdf";
import Layout from "./components/Layout/Layout";
import TopComponent from "./components/kycComponents/TopComponent/TopComponent";
import ToplabelAccount from "./components/kycComponents/TopLabelAccount/ToplabelAccount";
import PuropseOfAccount from "./components/kycComponents/puropseOfAccount/PuropseOfAccount";
import { header } from "./components/summaryPageContent/header.json";
import { Title } from "./ReuseAble";
import FullName from "./components/kycComponents/FullName/FullName";
import Minor from "./components/kycComponents/minor/Minor";
import PersonalInfo from "./components/kycComponents/personalInformationDob/PersonalInfo";
import AddressComponent from "./components/kycComponents/addressComponent/AddressComponent";
import IdentityInfo from "./components/kycComponents/identityInfo";
// const generatePDF = () => {
//   var Doc = new jsPDF("l", "mm", [900, 1000]);
//   Doc.html(document.querySelector("#mainPage"), {
//     callback: function (pdf) {
//       pdf.save("SecondPdf.pdf");
//     },
//   });
// };
const App = () => {
  return (
    <>
      <div id="mainPage">
        <Layout>
          <TopComponent props={header} />
          <ToplabelAccount />
          <PuropseOfAccount />
          <Title title={"ACCOUNT NAME"} />
          <FullName />
          <Title title={"MINOR/LEGAL GUARDIAN INFORMATION"} />
          <Minor />
          <Title
            title={"PERSONAL INFORMATION"}
            subtitle={
              "(Please attach separate KYC form for joint account and/or guardian of account)"
            }
          />
          <FullName />
          <PersonalInfo />
          <Title title={"PERMANENT ADDRESS INFORMATION"} />
          <AddressComponent />
          <Title title={"CURRENT ADDRESS INFORMATION"} />
          <AddressComponent permanent />
          <Title title={"IDENTIFICATION DETAILS"} />
          <IdentityInfo />
          <Title title={"FAMILY DETAILS"} />
        </Layout>
      </div>
      {/* <Button type="primary" onClick={generatePDF}>
        generatePDF
      </Button> */}
    </>
  );
};

export default App;
