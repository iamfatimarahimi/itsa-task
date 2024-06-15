
import React, { useState } from "react";

export default function Accordion({
  setAccordionOpened,
  accordionOpened,
  title,
  body,
}) {
   const isOpened = title === accordionOpened; 
  return (
    <div className="accordion">
      <div className="container">
      <div
        onClick={() => setAccordionOpened(title)}
        className="accordion-header"
      >
        <h2>{title}</h2>
        <div className="accordion-indicator">{isOpened ? <i class='bx bx-chevron-up' ></i> : <i class='bx bx-chevron-down'></i>}</div>
      </div>
      {isOpened && <div className="accordion-body">{body}</div>}
      </div>
    </div>
  );
}
