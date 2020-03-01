import React, { FC } from "react";
import { SCProjectsLayout as SC } from "./ProjectsLayout.styled";
import { SCG } from "../../styled/GlobalComponents";

const WorkLayout: FC<{ content: any }> = ({ content }) => {
  return (
    <>
      <SC.Container>
        <div>
          <SCG.Title>{content.title}</SCG.Title>
          <SCG.Paragraph>{content.skills.join(", ")}</SCG.Paragraph>
          <SCG.Paragraph style={{ whiteSpace: "pre-wrap" }}>
            {content.text}
          </SCG.Paragraph>
        </div>
      </SC.Container>
    </>
  );
};

export default WorkLayout;
