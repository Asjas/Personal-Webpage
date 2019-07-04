import * as React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface Props {
  data: {
    file: {
      childImageSharp: {
        fixed: {
          width: number;
          height: number;
          src: string;
          srcSet: string;
        };
      };
    };
  };
}

export const HOME_PAGE_IMAGE = graphql`
  query HOME_PAGE_IMAGE {
    file(relativePath: { regex: "/messy-desk.jpg/" }) {
      childImageSharp {
        fixed(height: 400, quality: 95) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

const IndexPage: React.FunctionComponent<Props> = ({ data }): React.ReactElement => (
  <>
    <SEO />
    <Layout>
      <section className="homepage">
        <p className="homepage__quote">
          "There are only two hard things in Computer Science: cache invalidation and naming things"
          - Phil Karlton
        </p>
        <Img className="homepage__image" fixed={data.file.childImageSharp.fixed} alt="" />
      </section>
    </Layout>
  </>
);

export default IndexPage;
