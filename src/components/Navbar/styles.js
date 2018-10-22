import styled from 'styled-components';
import Link from '../Link';
import { media } from '../../utils/media';

export const Navigation = styled.nav`
  background: ${props => props.theme.black};
  border-top: ${props => props.theme.goldBorderXL};
  border-bottom: ${props => props.theme.goldBorderXL};
  height: 100vh;
  display: grid;
`;

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.offWhite};
  font-size: ${props => props.theme.fontL};
  line-height: ${props => props.theme.fontL};
  border-top: ${props => props.theme.lightGreyBorderMd};
  border-bottom: ${props => props.theme.lightGreyBorderMd};
  cursor: pointer;
  letter-spacing: 0.03rem;
  padding: 20px 0;
  text-align: center;
  text-decoration: none;
  width: 100%;

  &:hover {
    color: ${props => props.theme.gold};
  }

  &:focus {
    color: ${props => props.theme.gold};
    border: ${props => props.theme.goldBorderMd};
  }
`;
