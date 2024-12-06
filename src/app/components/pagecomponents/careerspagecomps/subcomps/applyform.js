"use client";

import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

const ApplyForm = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Submitted Values: ", values);
  };

  return (
    <div
      style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
      className="form-background-settings"
    >
      <h2 className="career-font-title font-robo-sarif">Apply Now</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        autoComplete="off"
      >
        {/* Full Name */}
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please enter your full name!" }]}
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>

        {/* Email and Phone in a Row */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number!" },
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>
          </Col>
        </Row>

        {/* Position */}
        <Form.Item
          label="Position Applied For"
          name="position"
          rules={[
            {
              required: true,
              message: "Please specify the position you are applying for!",
            },
          ]}
        >
          <Input placeholder="Enter the position" />
        </Form.Item>

        {/* Address */}
        <Form.Item
          label="Address"
          name="address"
          rules={[
            { required: true, message: "Please enter your current address!" },
          ]}
        >
          <Input placeholder="Enter your address" />
        </Form.Item>

        {/* Full Name */}
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please enter your full name!" }]}
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>

        {/* Email and Phone in a Row */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number!" },
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>
          </Col>
        </Row>

        {/* Message */}
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please include a message!" }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Write your message or cover letter"
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="site-pallete"
            block
          >
            Submit Application
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ApplyForm;
