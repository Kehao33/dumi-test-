import React, { useState } from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
//  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { FormItemConfig, RenderType, useFormModal, Button, message } from 'art-antd-react';


const Demo1 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => {

          setVisible(true);
        }}
      >
        编辑信息
      </Button>
      <Modal visible={visible}>
        <Form>
          <Form.Item name="name">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Demo1;
