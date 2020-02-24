import React, { FC } from "react";
const ProjectsLayout: FC<{ content: any }> = ({ content }) => (
  <div>
    <div>
      <h1>{content.title}</h1>
      <p>{content.text}</p>
      <div>{content.icons}</div>
    </div>
    <img src={content.image} alt=""></img>
  </div>
);

export default ProjectsLayout;
