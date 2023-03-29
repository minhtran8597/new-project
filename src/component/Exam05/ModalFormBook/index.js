import { Form, Input, Modal, Select } from "antd";
import { useEffect } from "react";
import { PageNumber } from "./styles";

const ModalFormBooks = (props) => {
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
    <Modal
      open={props.open}
      submitLoading={props.loading}
      onOk={onSubmit}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Tên sách"
          rules={[{ required: true, message: "Tên sách là bắt buộc." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="author"
          label="Tác giả"
          rules={[{ required: true, message: "Tác giả là bắt buộc." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Mô tả"
          rules={[
            { required: true, message: "Hãy thêm mô tả." },
            { max: 100, message: "Mô tả không vượt quá 100 ký tự" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="type"
          label="Thể loại"
          rules={[{ required: true, message: "Thể loại là bắt buộc." }]}
        >
          <Select
            options={[
              { value: "KD", label: "Kinh dị" },
              { value: "TT1", label: "Trinh thám" },
              { value: "TT2", label: "Tiểu thuyết" },
              { value: "Viễn tưởng", label: "Viễn tưởng" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="page"
          label="Số trang"
          rules={[{ required: true, message: "Số trang là bắt buộc." }]}
        >
          <PageNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalFormBooks;
