// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Alert(props) {
  return (
    <div
      css={css`
        margin: 10px; 0px;
        display: flex;
        width: 300px;
        padding: 5px 20px;
        gap: 10px;
        font-weight: 800;
        border-radius: 15px;
        color: grey;
        background-color: ${
          props.type === "error"
            ? "#F9C8C8"
            : props.type === "warning"
            ? "#F9D9C8"
            : props.type === "info"
            ? "#F9EBC8"
            : props.type === "success"
            ? "#CEF7CD"
            : "white"
        };
      `}
    >
      <p>😘</p>
      <p>This is {props.type} alert box</p>
    </div>
  );
}
