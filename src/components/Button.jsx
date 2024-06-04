// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  // const PrimaryColor = "#074EE8"; // used with inlineCSS
  // const SecondaryColor = "#07A4E8"; // used with inlineCSS
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
        margin: 3rem;
      `}
    >
      <button
        css={css`
          display: flex;
          background-color: ${props.color === "primary"
            ? "#074EE8"
            : props.color === "secondary"
            ? "#07A4E8"
            : props.color === "error"
            ? "#DE5753"
            : props.color === "success"
            ? "#26B795"
            : null};
          text-align: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          width: 150px;
          padding: 15px;
        `}
      >
        button
      </button>
    </div>
  );
}
