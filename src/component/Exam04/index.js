import { Form, Input, Button, Select } from "antd";

//tạo một form đăng ký với email, password, confirm password, phone number, country
//validate toàn bộ dữ liệu
const Exam04 = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
    // DO SOMETHINGS
  };
  return (
    <Form form={form} layout="vertical">
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

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Xác nhận lại password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve(); // true
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(value)) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Phone number format is wrong"));
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="country" label="Country" rules={[{ required: true }]}>
        <Select
          options={[
            { value: "VN", label: "Vietnam" },
            { value: "US", label: "United State" },
          ]}
        />
      </Form.Item>

      <Button type="primary" onClick={onSubmit}>
        Sign Up
      </Button>
    </Form>
  );
};

export default Exam04;

// SearchBox : component hay class
// handleClick : function (động từ)
