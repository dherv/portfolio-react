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
    <>
      <SC.Container>
        <div>
          <SC.Title>{content.title}</SC.Title>
          <SC.Paragraph>{content.text}</SC.Paragraph>
          <SC.Icons>
            {content.icons.map((i: string) => (
              <div>{mapStringToIcon(i)}</div>
            ))}
          </SC.Icons>
        </div>
        <SC.Image src={imageSrc} alt=""></SC.Image>
      </SC.Container>
      <SC.FlexContainer>
        <SC.ButtonVisit>visit</SC.ButtonVisit>
      </SC.FlexContainer>
    </>
  );
};

export default ProjectsLayout;
