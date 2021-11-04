import React from "react";
import { StarOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";

export default function GithubStarButton() {
  return (
    <Button
      style={{
        color: "rgb(63, 61, 86)",
        fontWeight: "bold",
        border: "1px solid rgb(108, 99, 255)",
        fontSize: "0.9rem",
        marginLeft: "5px"
      }}
      href="https://github.com/wwwshayronen/scrm>"
    >
      <div>
        Star{" "}
        <StarOutlined
          style={{ color: "rgb(63, 61, 86)", fontWeight: "bold" }}
        />
      </div>
    </Button>
  );
}
