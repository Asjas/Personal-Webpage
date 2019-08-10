import styled from '../../utils/themed-styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export const Card = styled.article`
  border-radius: 2px;
  width: 100%;
  max-width: 700px;
  box-shadow: ${props => props.theme.color.card};
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 0;
  background-color: black;
  padding-bottom: 56.25%;
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 2px 2px 0 0;
`;

export const Heading = styled.h2`
  font-size: ${props => props.theme.fontSize.heading2};
  font-weight: normal;
  padding: 8px 0 0 16px;
`;

export const Paragraph = styled.p`
  padding: 0 16px 8px 16px;
`;

export const Button = styled(OutboundLink)`
  border-radius: 2px;
  border-width: 0;
  width: 80px;
  height: 35px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  margin: 0 16px 10px 16px;
  display: inline-block;
  outline: none;
  overflow: hidden;
  padding: 0;
  position: relative;
  transition: background-color 0.3s;
  text-decoration: none;

  &:focus {
    outline: 3px solid ${props => props.theme.color.outline};
  }

  span {
    display: block;
    font-size: ${props => props.theme.fontSize.xLarge};
    font-family: ${props => props.theme.font.retro};
    text-align: center;
    color: ${props => props.theme.color.white};
    text-transform: uppercase;
  }

  &.github {
    background-color: #333;
  }

  &.website {
    background-color: #4078c0;
  }

  &.github:hover,
  &.github:focus {
    background-color: #333;
  }

  &.website:hover,
  &.website:focus {
    background-color: #4078c0;
  }

  &:before {
    background-color: rgba(236, 240, 241, 0.3);
    border-radius: 100%;
    content: '';
    display: block;
    left: 50%;
    padding-top: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
  }

  &:active:before {
    padding-top: 120%;
    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
    width: 120%;
  }
`;
