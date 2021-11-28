import React from "react";
import { Row, Col, Checkbox } from "antd";
import {gender,MaritalStatus,EducationQuification } from '../../summaryPageContent/Personalinfo.json'
import { DateContainer, Number } from "../../../ReuseAble/index";

function PersonalInfo() {
  return (
    <>
    <Row>
      <Col span={9}>
      <DateContainer  name={"Date of Birth"} AdOrBs={"B.S."} />
      </Col>
      <Col span={9}>
        <DateContainer AdOrBs={"A.D."} />
      </Col>
      <Col span={6} className={"margin_padding"}>
        Nationality__________________
      </Col>
    </Row>
    <Row className={'margin_padding'}>
      <Col span={10}>
      Gender: 
      {gender.map(x=>(
        <Checkbox>{x.name}</Checkbox>
      ))}
      </Col>
      <Col span={14} style={{display:'flex'}}>
      {
        MaritalStatus.map(x=>(
          <Checkbox>{x.name}</Checkbox>
        ))
      }
      <div>
        ,Please specify: _______________
      </div>
      </Col>
    </Row>
    <Row className={'margin_padding'}>
      <Col span={24} style={{display:"flex"}}>
        Education Qualification
        {
          EducationQuification.map(x=>(
            <Checkbox>{x.name}</Checkbox>
          ))
        }
        <div style={{marginTop:'5px',height:"18px", width:"180px",border:"1px solid black"}}>
        </div>
      </Col>
    </Row>
    <Row className={'margin_padding'}>
      <Col span={8}>
      Contact Details: Landline: _______________
      </Col>
      <Col span={8} style={{display:'flex'}}>
        <Number name={'Mobile :'}/>
      </Col>
      <Col span={8}>
      Email:_________________________
      </Col>


    </Row>
    </>
  );
}

export default PersonalInfo;
