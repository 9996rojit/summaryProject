import React from "react";
import { Row, Col } from "antd";

function FullName() {
  return (
    <Row style={{ padding: "10px 0px 0px 5px" }}>
      <Col span={24} sm={24} md={24}>
        <span style={{ fontWeight: 600 }}>Full Name</span>{" "}
        <sub>(in BLOCK letters)</sub>
        __________________________________________________________________________________
      </Col>
    </Row>
  );
}

export default FullName;
