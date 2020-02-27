import React, { FC, useEffect, useState } from "react";
import { SCProjectsLayout as SC } from "./ProjectsLayout.styled";
import {
  IconNode,
  IconReact,
  IconTypescript,
  IconExpress,
  IconMongoDB,
  IconGraphQL,
  IconDocker,
  IconNextJS,
  IconNestJS,
  IconAWS,
  IconGoogleCloud,
  IconMySQL
} from "../icons/IconsPlain";

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
    const color = "#484848";
    const map = new Map([
      ["Node", <IconNode color={color} />],
      ["React", <IconReact color={color} />],
      ["Typescript", <IconTypescript color={color} />],
      ["Express", <IconExpress color={color} />],
      ["MongoDB", <IconMongoDB color={color} />],
      ["GraphQL", <IconGraphQL color={color} />],
      ["NextJS", <IconNextJS color={color} />],
      ["NestJS", <IconNestJS color={color} />],
      ["MySQL", <IconMySQL color={color} />],
      ["GoogleCloud", <IconGoogleCloud color={color} />],
      ["AWS", <IconAWS color={color} />],
      ["Docker", <IconDocker color={color} />]
    ]);

    return map.get(icon);
  };
  return (
    <>
      <SC.Container>
        <div>
          <SC.Title>{content.title}</SC.Title>
          <SC.Paragraph>{content.text}</SC.Paragraph>
        </div>
        <SC.Image src={imageSrc} alt=""></SC.Image>
      </SC.Container>
      <SC.FlexContainer>
        <SC.Icons>
          {content.icons.map((i: string) => (
            <SC.IconItem>{mapStringToIcon(i)}</SC.IconItem>
          ))}
        </SC.Icons>
        {/* <SC.ButtonVisit>visit</SC.ButtonVisit> */}
      </SC.FlexContainer>
    </>
  );
};

export default ProjectsLayout;
