import styled from 'styled-components';
import CustomLink from '../Link';
import { media } from '../../utils/media';

export const Navigation = styled.nav`
  background: ${props => props.theme.black};
  border-bottom: ${props => props.theme.goldBorderXL};
  border-top: ${props => props.theme.goldBorderXL};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const PageSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(CustomLink)`
  border-bottom: ${props => props.theme.lightGreyBorderMd};
  border-top: ${props => props.theme.lightGreyBorderMd};
  color: ${props => props.theme.offWhite};
  cursor: pointer;
  font-family: Contender;
  font-size: ${props => props.theme.fontXL};
  letter-spacing: 0.04rem;
  line-height: ${props => props.theme.fontXL};
  padding: 20px 0;
  text-align: center;
  text-decoration: none;
  width: 100%;

  &:hover {
    color: ${props => props.theme.gold};
  }

  &:focus {
    border: ${props => props.theme.goldBorderMd};
    color: ${props => props.theme.gold};
    outline: none;
  }
`;
