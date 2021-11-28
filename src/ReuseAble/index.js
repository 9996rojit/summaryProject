import React from "react";
import { Row, Col, Checkbox } from "antd";
import { PurposeOfAcc } from "../components/summaryPageContent/Accountkyc.json";
export const Title = ({ title, subtitle }) => {
  return (
    <Row>
      {subtitle ? (
        <Col className={"Title"} md={24}>
          {title}
          <div className={"subTitle"}>{subtitle}</div>
        </Col>
      ) : (
        <Col className={"Title"} span={24}>
          {title}
        </Col>
      )}
    </Row>
  );
};

export const DateContainer = ({ AdOrBs, name }) => {
  return (
    <>
      <Col  className={"margin_padding"} style={{ display: "flex" }}>
        {name}
        {[1, 2].map((x) => (
          <div className={"box"}>{x}</div>
        ))}
        -
        {[1, 2].map((x) => (
          <div className={"box"}>{x}</div>
        ))}
        -
        {[1, 2, 3, 4].map((x) => (
          <div className={"box"}>{x}</div>
        ))}
        <span style={{ paddingLeft: "5px" }}>{AdOrBs}</span>
      </Col>
    </>
  );
};

export const GenerateCheckBox = () => {
  return (
    <Row>
      <Col span={12}>
        {PurposeOfAcc.map((x, i) => (
          <Col span={3}>
            <Checkbox>{x.name}</Checkbox>
          </Col>
        ))}
      </Col>
    </Row>
  );
};

export const Number =({name}) => {
  return (
    <>
      {name}
      {[1,2,3,4,5,6,7,8,9,10].map(number=>(
        <div className={'box'} >{number}</div>
      ))}
    </ >
  )
}
