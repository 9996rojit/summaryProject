import React from "react";
import { Row, Col } from "antd";

function AddressComponent({ permanent }) {
  return (
    <Col md={24} lg={24} className={"margin-padding"}>
      <Row>
        District:__________________________ Metro P./Sub Metro P./Muni./R.
        Municipality:_____________________________________
      </Row>
      <Row>
        Ward No:________Tole/Street:_________________________House No:________
        Province______________Country___________
      </Row>
      {permanent ? (
        <Row md={24}>
          In case of Tenant, Name of House Owner
          _______________________________________ Contact No. _______________
        </Row>
      ) : (
        ""
      )}
    </Col>
  );
}

export default AddressComponent;
