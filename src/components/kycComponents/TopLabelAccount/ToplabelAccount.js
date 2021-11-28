import React from "react";
import { Row, Col, Checkbox } from "antd";
import {
  Account_type,
  Account_for,
  Currency,
} from "../../summaryPageContent/Accountkyc.json";

function ToplabelAccount() {
  return (
    <>
      <Row style={{ paddingTop: "10px", fontWeight: 600 }}>
        Please open an account in your Bank with following details.
        <Col span={24} className={"Full-line"}></Col>
      </Row>
      <Row style={{ borderBottom: "1px solid black" }}>
        <Col
          span={16}
          style={{
            borderRight: "1px solid black",
            padding: "10px 7px 10px 7px",
          }}
        >
          <Row>
            {Account_for.map((x) => (
              <Col span={6}>
                <Checkbox>{x.name}</Checkbox>
              </Col>
            ))}
          </Row>
          <Row className={'margin_padding'}>
            {Account_type.map((x) => (
              <>
              <Col span={5}>
                <Checkbox>{x.name}</Checkbox>
              </Col>
              </>
            ))}
              <Col>
              <div className={'specifyBox'}>
              </div>
              </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row style={{ padding: "10px 0px 0px 10px" }}>
            Currency :
            <Row span={8}>
              {Currency.map((x) => (
                <Col span={12}>
                  <Checkbox>{x.name}</Checkbox>
                </Col>
              ))}
            </Row>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default ToplabelAccount;
