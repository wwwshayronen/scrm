import React, { useState } from "react";
import { Modal, Button } from "antd";
import Item from "antd/lib/list/Item";
import Customer from "./Customer";

const ModalForCopy = ({ list }) => {
  const [visible, setVisible] = useState(false);

  const keys = list.map((item) => Object.keys(item));
  const values = list.map((item) => Object.values(item));

  if (list.length)
    return (
      <>
        <Button type="primary" onClick={() => setVisible(true)}>
          פתח מודל
        </Button>
        <Modal
          title="Modal 1000px width"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={1000}
        >
          <ul
            style={{
              listStyle: "none",
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {list.map((item) => (
              <li>
                <Customer id={item.id} details={item} />
              </li>
            ))}
          </ul>
        </Modal>
      </>
    );
};

export default ModalForCopy;
