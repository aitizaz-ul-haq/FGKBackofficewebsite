"use client";
import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ApplyForm = () => {
  return (
    <Container className="form-background-settings">
      <h2 className="text-center font-roboto-sarif career-font-title">
        Apply for a Job
      </h2>
      <Form>
        <Form.Group controlId="fullName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="fullName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group controlId="fullName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="fullName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group controlId="fullName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group controlId="message" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write your message or cover letter"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-100 site-pallete font-inter"
        >
          Submit Application
        </Button>
      </Form>
    </Container>
  );
};

export default ApplyForm;
