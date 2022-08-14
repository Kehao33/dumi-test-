import { ColProps, Form, FormInstance, Input, Modal, ModalProps, RowProps } from 'antd';
import React from 'react';

export interface FormModalConfig<Value = any, Res = any> extends Omit<ModalProps, 'onError' | 'onOk'> {
  form?: FormInstance;
  // 公共的 col 布局， 和 antd 的 Col API 相同
  colProps?: ColProps;
  // 公共的 rowProps 布局， 和 antd 的 Row API 相同
  rowProps?: RowProps;
  // Form.Item 和 其 children 的配置，和 FormItemsBuilder 的配置一样
  formItemsConfig?: any[];
  serviceFn?: any;
  formatSubmitValue?: (formValue: Value) => unknown;
  onSuccess?: (data?: Res) => void;
  onError?: (e?: Error) => void;
  onCancel?: () => void;
}

export const useModal = <Value = any, Res = any>({
  form,
  colProps,
  rowProps,
  formItemsConfig,
  serviceFn,
  formatSubmitValue,
  onSuccess,
  onError,
  onCancel,
  ...restModalProps
}: FormModalConfig<Value, Res>) => {
  const [formInstance] = Form.useForm(form);



  // const onFinish = (formValues: any) => {
  //   lazyService(formatSubmitValue ? formatSubmitValue(formValues) : formValues);
  // };

  // const handleCancel = () => {
  //   onCancel?.();
  // };

  // const formModal = useMemo(() => {
  //   console.log("formInstance>", formInstance)
  //   return (
  //     <Modal
  //       onCancel={handleCancel}
  //       onOk={() => formInstance.submit()}
  //       confirmLoading={loading}
  //       {...restModalProps}
  //     >
  //     </Modal>
  //   );
  // }, [formInstance, colProps, rowProps, formItemsConfig]);
  console.log("restModalProps", restModalProps)
  return {
    formModal: <Modal {...restModalProps}>
      <Form>
        <Form.Item name="name">
          <Input />
        </Form.Item>
      </Form>
    </Modal>,
    formInstance: {},
  };
};
