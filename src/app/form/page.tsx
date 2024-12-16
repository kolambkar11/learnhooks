import React from "react";
import { Form, Input, Select } from "antd";

const Myform = () => {
  const [formData] = Form.useForm();
  const name: string = Form.useWatch("myName", formData);
  const expertise: string = Form.useWatch("expert", formData);
  return (
    <div className="p-10">
      <h1>Welcome back {name}</h1>
      <Form form={formData}>
        <Form.Item label="Name" name={"myName"}>
          <Input placeholder="Enter Name" />
        </Form.Item>
        <Form.Item label="Expertise" name={"expert"}>
          <Select
            options={[
              {
                label: "JavaScript",
                value: "javascript",
              },
              {
                label: "React Js",
                value: "reactjs",
              },
              {
                label: "Next Js",
                value: "nextjs",
              },
              {
                label: "Others",
                value: "others",
              },
            ]}
          />
        </Form.Item>
        {expertise === "others" ? (
          <Form.Item label="Others">
            <Input placeholder="Please specify " />
          </Form.Item>
        ) : (
          ""
        )}
      </Form>
    </div>
  );
};

export default Myform;
