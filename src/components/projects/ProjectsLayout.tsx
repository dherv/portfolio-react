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
import { SCG } from "../../styled/GlobalComponents";

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
    const color = "#000";

    const map = new Map([
      ["Node", <IconNode color={color} size={3} />],
      ["React", <IconReact color={color} size={1} />],
      ["Typescript", <IconTypescript color={color} size={0} />],
      ["Express", <IconExpress color={color} size={3} />],
      ["MongoDB", <IconMongoDB color={color} size={1} />],
      ["GraphQL", <IconGraphQL color={color} />],
      ["NextJS", <IconNextJS color={color} />],
      ["NestJS", <IconNestJS color={color} />],
      ["MySQL", <IconMySQL color={color} size={3} />],
      ["GoogleCloud", <IconGoogleCloud color={color} />],
      ["AWS", <IconAWS color={color} size={3} />],
      ["Docker", <IconDocker color={color} size={1} />]
    ]);

    return map.get(icon);
  };
  return (
    <>
      <SC.Container>
        <div>
          <SCG.Title>{content.title}</SCG.Title>
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
        {/* <SCG.ButtonVisit>visit</SCG.ButtonVisit> */}
      </SC.FlexContainer>
    </>
  );
};

export default ProjectsLayout;
