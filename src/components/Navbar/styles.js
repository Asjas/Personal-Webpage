import styled from 'styled-components';
import Link from '../Link';
import { media } from '../../utils/media';

export const Navigation = styled.nav`
  background: ${props => props.theme.black};
  border-top: ${props => props.theme.goldBorderMd};
  border-bottom: ${props => props.theme.goldBorderMd};
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  ${media.medium``};
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.offWhite};
  font-size: ${props => props.theme.fontL};
  line-height: ${props => props.theme.fontL};
  border-top: ${props => props.theme.lightGreyBorder};
  border-bottom: ${props => props.theme.lightGreyBorder};
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
    border: ${props => props.theme.goldBorderSm};
  }
`;
