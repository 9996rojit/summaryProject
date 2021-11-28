import React from "react";
import { Row, Col } from "antd";
import ToplabelAccount from "../TopLabelAccount/ToplabelAccount";

function TopComponent(props) {
  const { label, AccountNumber } = props.props;

  return (
    <>
      <Row>
        <Col
          span={8}
          offset={14}
          sm={24}
          md={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Row>
            <Col span={24} style={{ display: "flex" }}>
              {label + ":"}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((x) => (
                <div className="box">x</div>
              ))}
            </Col>
          </Row>
        </Col>
        {/* col form Account Number */}
        <Col
          span={13}
          offset={11}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Row>
            <Col span={24} style={{ display: "flex" }}>
              {AccountNumber + ":"}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (x) => (
                  <div className="box">x</div>
                )
              )}
            </Col>
          </Row>
        </Col>
      </Row>
      {/* For branch and date */}
      <div style={{ paddingTop: "15px" }}>
        <Row style={{}} align={"middle"}>
          <Col span={15}> ________________________ Branch </Col>
          <Col
            span={9}
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
            {[1, 2, 3, 4].map((x) => (
              <div className={"box"}></div>
            ))}
            -
            {[1, 2].map((x) => (
              <div className={"box"}></div>
            ))}
            -{" "}
            {[1, 2].map((x) => (
              <div className={"box"}></div>
            ))}
            Date :{" "}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TopComponent;
