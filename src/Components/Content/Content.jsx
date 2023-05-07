import React from "react";
import RowCards from "../RowCards/RowCards";

function Content() {
  return (
    <div className="rowCardsDiv" style={{ margin: "2rem" }}>
      <RowCards />
      <RowCards />
    </div>
  );
}

export default Content;
