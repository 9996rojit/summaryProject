import React from "react";
import { Row, Col, Checkbox } from "antd";
import { PurposeOfAcc } from "../../summaryPageContent/Accountkyc.json";
import FullName from "../FullName/FullName";
import { Title } from "../../../ReuseAble/index";

function PuropseOfAccount() {
  return (
    <>
      <Row>
        <Col span={24} style={{ display: "flex", padding: "5px 5px" }}>
          <span style={{ paddingRight: "10px" }}>Purpose of Account</span>
          {PurposeOfAcc.map((x, i) => (
            <Col span={2}>
              <Checkbox>{x.name}</Checkbox>
            </Col>
          ))}
          <Col> ,Please Specify: ____________________________</Col>
        </Col>
        <Col span={24} className={"Full-line"}></Col>
      </Row>
    </>
  );
}

export default PuropseOfAccount;
