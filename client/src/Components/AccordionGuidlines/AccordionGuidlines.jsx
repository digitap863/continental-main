import React from "react";
import { accordionData, containerStyle } from "../../Constants/Constants";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import accoImage from "../../assets/HomePage/acco-guid-Img-min.png";
import "./AccordionGuidlines.css";
import "react-accessible-accordion/dist/fancy-example.css";

const AccordionGuidlines = () => {
  return (
    <section className="AccordionGuidlines  testBorder">
      <div className="accord-guid-wrap testBorder">
        <div className="accordion-g">
          <h1>Our Service Process Guidelines</h1>
          <Accordion preExpanded={[0]}>
            {accordionData.map(({ title, content }, idx) => (
              <AccordionItem key={idx} uuid={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <p className="acco-headi">{title}</p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="acco-para" style={containerStyle}>{content}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="acco-image">
          <img src={accoImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AccordionGuidlines;
