import React from "react";
import { SCG } from "../styled/GlobalComponents";
import { SCSkills as SC } from "./Skills.styled";
const Skills = () => (
  <SC.Container>
    <SCG.Title>Skills</SCG.Title>
    <SC.Paragraph>
      <SC.InlineTitle>frontend</SC.InlineTitle>
      <SC.InlineText>
        React, Javascript, Typescript, NextJS, GraphQL, Websockets, GatsbyJS,
        VueJS, HTML, CSS
      </SC.InlineText>

      <SC.InlineTitle>backend</SC.InlineTitle>
      <SC.InlineText>
        NodeJS, NestJS, Express, Laravel, Django, MySQL, MongoDB, ElasticSearch,
        GraphQL, Websockets
      </SC.InlineText>

      <SC.InlineTitle>devops</SC.InlineTitle>
      <SC.InlineText>
        Docker, CircleCI, AWS S3, AWS EC2, AWS RDS, AWS Polly, Google Cloud
        Translate and Google Cloud Text to speech
      </SC.InlineText>

      <SC.InlineTitle>test</SC.InlineTitle>
      <SC.InlineText>Jest, React Testing Library</SC.InlineText>

      <SC.InlineTitle>tools</SC.InlineTitle>
      <SC.InlineText>
        Webpack, Visual Studio Code, JetBrains, ESLint/TSLint, Prettier, Figma,
        Trello, Jira, Github, GitLab, SourceTree, Postman, Slack
      </SC.InlineText>

      <SC.InlineTitle>mobile</SC.InlineTitle>
      <SC.InlineText>Swift</SC.InlineText>
    </SC.Paragraph>
  </SC.Container>
);
export default Skills;
