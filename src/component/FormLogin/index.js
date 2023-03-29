import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";

//Tạo một form login với email và password
//Co validate đầy đủ
const FormLogin = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);

    if (values.email === "admin@gmail.com" && values.password === "admin123") {
      localStorage.setItem("token", `${values.email}${values.password}`);
      navigate("/dashboard");
    } else {
      message.error("Thông tin đăng nhập không đúng");
    }

    // apiLogin(values).then((res) => {
    //   if(res.token) {
    //     navigate('.dashboard')
    //   }
    //   else {
    //     message.error("Thông tin đăng nhập không đúng");
    //   }
    // })
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

export default FormLogin;
