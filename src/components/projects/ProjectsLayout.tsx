import React, { FC, useEffect, useState } from "react";
import { SCProjectsLayout as SC } from "./ProjectsLayout.styled";

const ProjectsLayout: FC<{ content: any }> = ({ content }) => {
  const [imageSrc, setImageSrc] = useState();
  useEffect(() => {
    // need a known path to enable dynamic import: ../../static/img/
    if (content.image) {
      import(`../../static/img/${content.image}`).then(src => {
        setImageSrc(src.default);
      });
    }
  }, [content]);

  return (
    <SC.Container>
      <div>
        <SC.Title>{content.title}</SC.Title>
        <SC.Paragraph>{content.text}</SC.Paragraph>
        <div>{content.icons}</div>
      </div>
      <SC.Image src={imageSrc} alt=""></SC.Image>
    </SC.Container>
  );
};

export default ProjectsLayout;
