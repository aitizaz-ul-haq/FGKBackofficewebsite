"use client";

import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

const ContactUsForm = () => {
  const onFinish = (values) => {
    console.log("Form Values: ", values);
  };

  return (
    <div style={{ maxWidth: "90%", margin: "0 auto", padding: "20px" }}>
      <h2
        style={{ textAlign: "center", marginBottom: "2rem", marginTop: "2rem" }}
        className="font-roboto-sarif text-light"
      >
        Contact Us
      </h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          name: "",
          email: "",
          phone: "",
          subject: "",
          company: "",
          message: "",
        }}
      >
        <Row gutter={[16, 16]}>
          {/* Name Field */}
          <Col xs={24} sm={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>
          </Col>

          {/* Email Field */}
          <Col xs={24} sm={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>
          </Col>

          {/* Phone Number Field */}
          <Col xs={24} sm={12}>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input placeholder="Your Phone Number" />
            </Form.Item>
          </Col>

          {/* Subject Field */}
          <Col xs={24} sm={12}>
            <Form.Item
              label="Subject"
              name="subject"
              rules={[{ required: true, message: "Please enter the subject" }]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
          </Col>

          {/* Company Field */}
          <Col xs={24}>
            <Form.Item
              label="Company"
              name="company"
              rules={[
                { required: true, message: "Please enter your company name" },
              ]}
            >
              <Input placeholder="Company Name" />
            </Form.Item>
          </Col>

          {/* Message Field */}
          <Col xs={24}>
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} placeholder="Your Message" />
            </Form.Item>
          </Col>

          {/* Submit Button */}
          <Col xs={24} style={{ textAlign: "center" }}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="contact-form-button"
                style={{ width: "200px" }} // Set custom width
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ContactUsForm;
