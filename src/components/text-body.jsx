import React from "react";

function Textbody({ display }) {
  const renderDisplay = display.map((article) => (
    <>
      {article.header}
      {article.content}
    </>
  ));
  return !display ? null : <div>{renderDisplay}</div>;
}

export default Textbody;
