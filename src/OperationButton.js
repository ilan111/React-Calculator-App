import React from "react";
import { ACTIONS } from "./App";

function operationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
      {digit}
    </button>
  );
}

export default operationButton;
