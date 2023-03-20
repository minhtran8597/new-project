import { Form, Input, InputNumber, Modal } from "antd";
import { useEffect } from "react";

const ModalFormStudent = (props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!props.open) {
      form.resetFields();
    }
  }, [props.open]);

  useEffect(() => {
    if (props.open && props.formData.id) {
      // open = true và formData có id
      form.setFieldsValue(props.formData);
    }
  }, [props.open, props.formData]);

  const onSubmit = async () => {
    const values = await form.validateFields(); //validate để kiểm tra dữ liệu có đúng hay không
    props.onSubmit(props.formData.id, values); // props.onSubmit ({data: values, id: props.formData.id})
  };

  const onCancel = () => {
    props.setOpen(false);
  };

  return (
    <Modal open={props.open} onOk={onSubmit} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Tên họ"
          rules={[{ required: true, message: "Họ tên là bắt buộc." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Email là bắt buộc." },
            { type: "email", message: "Email format không đúng." },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="score"
          label="Điểm số"
          rules={[
            { required: true, message: "Điểm số là bắt buộc." },
            { type: "number", message: "Chỉ được nhập số." },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="className"
          label="Lớp"
          rules={[{ required: true, message: "Họ tên là bắt buộc." }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalFormStudent;

// SearchBox : component hay class
// handleClick : function (động từ)
