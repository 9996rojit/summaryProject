import React from "react";
import banklogo from "../../images/globalime-logo.jpeg";
import { Row, Col } from "antd";
function header({ props }) {
  const { title } = props;
  return (
    <>
      {" "}
      <div>
        <Row>
          <Col span={8} md={8} style={{ paddingTop: "15px" }}>
            <img className={"Logo-image"} src={banklogo} />
          </Col>
          <Col sm={24} md={12}>
            <h2
              style={{ paddingTop: "40px", color: "#961B1B", fontWeight: 900 }}
            >
              {title}
            </h2>
          </Col>
        </Row>
      </div>
    </>
  );
}

// export function SummaryHeaderKYC() {

// }
// export function SummaryHeaderAccount() {
//   return (
//     <>
//       {" "}
//       <div className={"sum-header"}>
//         <span className={"sum-logo"}>
//           <img src={banklogo} />
//         </span>
//         <h1>Account Open Form</h1>
//       </div>
//       <div className={"full-w"}>
//         <p>Please add your Account with following details</p>
//       </div>
//     </>
//   );
// }

export default header;
