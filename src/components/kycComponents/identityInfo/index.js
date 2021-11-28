import React from "react";
import { Row, Col, Checkbox } from "antd";
import { identityType } from "../../summaryPageContent/identificationDetails.json";
import { DateContainer, Number } from "../../../ReuseAble";

function index() {
  return (
    <Col md={24}>
      <Row>
        {identityType.map((x) => (
          <Checkbox span={3}>{x.name}</Checkbox>
        ))}
      </Row>
      <Row span={24} className={"margin_padding"}>
        <Col span={8}> ID Number __________________</Col>
        <Col span={8} style={{width:"100%"}}>
            <DateContainer name={'Issue Date:'} />
          </Col>
          <Col span={8} style={{width:"100%"}}>
            <DateContainer name={'Expiry Date:'} />
          </Col>
      </Row>
      <Row className={"margin_padding"}>
        <Col span={24}>Issuing Authority:__________________________________________Place of Issue:______________________________</Col>
      </Row>
      <Row className={"margin_padding"}>
        <Col span={8} >Visa Details:</Col>
        <Col span={8} style={{width:"100%"}}>
            <DateContainer name={' Visa issue date:'} />
          </Col>
          <Col span={8} style={{width:"100%"}}>
            <DateContainer name={'Visa validity: '} />
          </Col>
      </Row>
      <Row>
        <Col  style={{fontSize:'10px'}}>(For Foreign Nationals only)</Col>
      </Row>
      <Row className={'margin_padding'}>
        <Col span={12} style={{display:'flex'}} >
          <Number name={'PAN : '}/>
        </Col>
          <Col span={12}>
            <Checkbox>PAN not available</Checkbox>
          </Col>
      </Row>
    </Col>
  );
}

export default index;
