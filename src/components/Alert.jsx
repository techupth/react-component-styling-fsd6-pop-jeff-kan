// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FlownSign from '../../public/MyImage/frown.svg';
import AlertCircle from '../../public/MyImage/alert-circle.svg';
import AlertTriangle from '../../public/MyImage/alert-triangle.svg';
import CheckCircle from '../../public/MyImage/check-circle.svg';

export function Alert(props) {
  if (props.status === "error") {
    return (
      <div css={css`
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      align-items: center;
      width: 50vw;
      height: fit-content;
      color: black;
      border-radius: 8px;
      padding: 5px;
      margin: 0.5rem;
      gap: 1rem;
      background-color: #F9C8C8;
      `}>
        <img css={css`margin-left: 1rem;`}
          src={FlownSign}
          alt="frown"
        />
        <div>
          <h3>This is error alert box</h3>
        </div>
      </div>
    )
  } else if (props.status === "warning") {
    return (
      <div css={css`
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      align-items: center;
      width: 50vw;
      height: fit-content;
      color: black;
      border-radius: 8px;
      padding: 5px;
      margin: 0.5rem;
      gap: 1rem;
      background-color: #F9D9C8;
      `}>
        <img css={css`margin-left: 1rem;`}
          src={AlertTriangle}
          alt="alert-triangle"
        />
        <div>
          <h3>This is warning alert box</h3>
        </div>
      </div>
    )
  } else if (props.status === "info") {
    return (
      <div css={css`
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      align-items: center;
      width: 50vw;
      height: fit-content;
      color: black;
      border-radius: 8px;
      padding: 5px;
      margin: 0.5rem;
      gap: 1rem;
      background-color: #F9EBC8;
      `}>
        <img css={css`margin-left: 1rem;`}
          src={AlertCircle}
          alt="alert-circle"
        />
        <div>
          <h3>This is info alert box</h3>
        </div>
      </div>
    )
  } else if (props.status === "success") {
    return (
      <div css={css`
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      align-items: center;
      width: 50vw;
      height: fit-content;
      color: black;
      border-radius: 8px;
      padding: 5px;
      margin: 0.5rem;
      gap: 1rem;
      background-color: #CEF7CD;
      `}>
        <img css={css`margin-left: 1rem;`}
          src={CheckCircle}
          alt="check-circle"
        />
        <div>
          <h3>This is success alert box</h3>
        </div>
      </div>
    )
  }
} 
