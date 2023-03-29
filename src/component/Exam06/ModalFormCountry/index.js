import { Form, Input, Modal, Image } from "antd";
import { useEffect } from "react";
import { PageNumber } from "./styles";

const ModalFormCountry = ({ open, loading, formData, setOpen, onSubmit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  useEffect(() => {
    if (open && formData.id) {
      // open = true và formData có id
      form.setFieldsValue(formData);
    }
  }, [open, formData]);

  const onOk = async () => {
    const values = await form.validateFields(); //validate để kiểm tra dữ liệu có đúng hay không
    onSubmit(formData.id, values); // props.onSubmit ({data: values, id: props.formData.id})
  };

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} submitLoading={loading} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: "Bắt buộc nhập." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="country"
          label="Quốc gia"
          rules={[{ required: true, message: "Bắt buộc nhập." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="coutryCode"
          label="CountryCode"
          rules={[{ required: true, message: "Bắt buộc nhập." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="population"
          label="Dân số"
          rules={[{ required: true, message: "Bắt buộc nhập." }]}
        >
          <PageNumber />
        </Form.Item>

        <Form.Item name="countryFlag" label="Country Flag">
          <Image />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalFormCountry;
