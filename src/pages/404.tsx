import * as React from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface Props {
  data: {
    file: {
      childImageSharp: {
        fluid: {
          aspectRatio: number;
          base64: string;
          sizes: string;
          src: string;
          srcSet: string;
          srcSetWebp: string;
          srcWebp: string;
        };
      };
    };
  };
}

export const FOUR_OH_FOUR_IMAGE = graphql`
  query FOUR_OH_FOUR_IMAGE {
    file(relativePath: { regex: "/ghost.png/" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const seo = {
  title: 'A-J Roos | 404 - Page not found',
  description:
    "Oops! Something went wrong. Either the page you tried to access doesn't exist or something mysterious happened.",
};

const FourOhFour: React.FunctionComponent<Props> = ({ data }): React.ReactElement => (
  <>
    <SEO {...seo} />
    <Layout>
      <section className="fourohfour">
        <Img className="fourohfour__image" fluid={data.file.childImageSharp.fluid} alt="" />
        <h1 className="fourohfour__heading" data-testid="404-heading">
          This page is a Ghost
        </h1>
        <p className="fourohfour__text">
          Once alive and now dead, this ghost appears to have some unfinished business. Could it be
          with you? Or the treasure hidden under the floorboards of the old mansion in the hills
          that may never reach its rightful owner, a compassionate school teacher in Brooklyn.
        </p>
        <Link to="/" className="fourohfour__link" data-testid="404-link">
          Go Home
        </Link>
      </section>
    </Layout>
  </>
);

export default FourOhFour;
