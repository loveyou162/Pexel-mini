import React from "react";
// import styled from "styled-components";
import styles from "./Button.module.css";
// const Button = styled.button`
//   width: 100%;
//   margin: 8px 0;
//   padding: 0.5rem 1.5rem;
//   background-color: #8a005d;
//   color: #fff;
//   border: none;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }
//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
