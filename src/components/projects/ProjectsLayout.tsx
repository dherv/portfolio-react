import React, { FC, useEffect, useState } from "react";
import { SCProjectsLayout as SC } from "./ProjectsLayout.styled";
import {
  IconNode,
  IconReact,
  IconExpress,
  IconGraphQL,
  IconMongoDB
} from "../icons/DevIcons";

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

  const mapStringToIcon = (icon: string) => {
    const map = new Map([
      ["Node", <IconNode />],
      ["React", <IconReact />],
      ["Express", <IconExpress />],
      ["GraphQL", <IconGraphQL />],
      ["MongoDB", <IconMongoDB />]
    ]);

    return map.get(icon);
  };
  return (
    <SC.Container>
      <div>
        <SC.Title>{content.title}</SC.Title>
        <SC.Paragraph
          style={{
            width: "60%"
          }}
        >
          {content.text}
        </SC.Paragraph>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          {content.icons.map((i: string) => (
            <div style={{}}>{mapStringToIcon(i)}</div>
          ))}
        </div>
      </div>
      <SC.Image src={imageSrc} alt=""></SC.Image>
    </SC.Container>
  );
};

export default ProjectsLayout;
