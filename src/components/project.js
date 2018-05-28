import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { media } from '../utils/media';

const Content = styled.div`
  width: 550px;
  margin: 30px auto 0;
`;

const Card = styled.div`
  color: rgba(0, 0, 0, 0.87);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  background: #fff;
  border-radius: 2px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 2.4rem;
  letter-spacing: 0.03rem;
  padding: 1.6rem 0 0 1.6rem;
`;

const Description = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0.02rem;
  padding: 1.6rem 0 0 1.6rem;
`;

const StyledImg = styled(Img)`
  height: auto;
  width: 540px;
  margin: 0 auto;

  ${media.medium`
    width: 400px;
    height: auto;
  `};

  ${media.small`
    width: 768px;
    height: auto;
  `};
`;

const LinkDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.6rem;
  letter-spacing: 0.02rem;
  padding: 0 0 1.6rem 1.6rem;
`;

const StyledLink = styled.a`
  color: #000;
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1.6rem;
  position: relative;
  text-decoration: none;
  padding-left: 5px;

  &:hover {
    color: lightcoral;
  }

  &:focus {
    outline: 1px solid black;
  }
`;

const Project = ({ projectQuery }) => (
  <Content>
    <Card>
      <Title>{projectQuery.data.title.text}</Title>
      <StyledImg
        title={projectQuery.data.title.text}
        alt={projectQuery.data.image.alt}
        sizes={projectQuery.data.image.localFile.childImageSharp.sizes}
      />
      <Description>{projectQuery.data.description.text}</Description>
      <LinkDescription>
        Link to the project:
        <StyledLink href={projectQuery.data.link.url} target="_blank">
          {projectQuery.data.link.url}
        </StyledLink>
      </LinkDescription>
    </Card>
  </Content>
);

export default Project;
