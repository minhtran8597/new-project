import { Button, Form, Input } from "antd";

//Tạo một form login với email và password
//Co validate đầy đủ
const Exam03 = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
    // DO SOMETHINGS
  };
  return (
    <Form form={form}>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Email là bắt buộc" },
          { type: "email", message: "Email format không đúng." },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Password là bắt buộc" }]}
      >
        <Input.Password />
      </Form.Item>

      <Button type="primary" onClick={onSubmit}>
        Log In
      </Button>
    </Form>
  );
};

export default Exam03;
