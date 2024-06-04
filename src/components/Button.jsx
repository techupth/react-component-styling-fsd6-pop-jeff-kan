// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
      `}
    >
      <p>{props.type}</p>
      {props.type === "primary" ? (
        <button
          css={css`
            padding: 10px 30px;
            background-color: #074ee8;
          `}
        >
          Button
        </button>
      ) : props.type === "secondary" ? (
        <button
          css={css`
            padding: 10px 30px;
            background-color: #07a4e8;
          `}
        >
          Button
        </button>
      ) : props.type === "error" ? (
        <button
          css={css`
            padding: 10px 30px;
            background-color: #de5753;
          `}
        >
          Button
        </button>
      ) : props.type === "success" ? (
        <button
          css={css`
            padding: 10px 30px;
            background-color: #26b795;
          `}
        >
          Button
        </button>
      ) : null}
    </div>
  );
}
