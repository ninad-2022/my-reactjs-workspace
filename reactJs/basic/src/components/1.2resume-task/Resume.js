import React, { Component } from "react";
import CareerSummery from "./CareerSummmery";
import Header from "./Header";
import Heading from "./Heading";
class Resume extends React.Component {
  render() {
    return (
      <div>
        <Header>Resume</Header>
        <Heading>Carrer Summery</Heading>
        <CareerSummery />
        <Heading>Academics</Heading>
        <CareerSummery />
        <Heading>Professional Details</Heading>
        <CareerSummery />

        <Heading>Portfolio</Heading>
        <CareerSummery />
        <Heading>Personal Details</Heading>
        <CareerSummery />
      </div>
    );
  }
}
export default Resume;
