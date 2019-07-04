import * as React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { format, formatDistance } from 'date-fns';
import { useSpring, animated } from 'react-spring';

interface Props {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      date: string;
      updated_at: string;
      tags: string[];
      featured_image: {
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
  };
}

const calc = (x: number, y: number): number[] => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 40,
  1.1,
];
const trans = (x: number, y: number, s: number): string =>
  `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const BlogEntryCard: React.FunctionComponent<Props> = ({ node }): React.ReactElement => {
  const [{ xys }, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.section
      className="blogpost__section"
      key={node.id}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: xys.interpolate(trans) }}
    >
      <Img
        className="blogpost__image"
        fluid={node.frontmatter.featured_image.childImageSharp.fluid}
        alt=""
      />
      <Link className="blogpost__link" to={`/blog${node.fields.slug}`}>
        <h2 className="blogpost__heading">{node.frontmatter.title}</h2>
      </Link>
      <span className="blogpost__date">
        Published:{' '}
        <time dateTime={format(new Date(node.frontmatter.date), 'yyyy-MM-dd')}>
          {formatDistance(new Date(node.frontmatter.date), new Date(), {
            addSuffix: true,
          })}
        </time>
      </span>
      <span className="blogpost__date">
        Last Updated:{' '}
        <time dateTime={format(new Date(node.frontmatter.updated_at), 'yyyy-MM-dd')}>
          {formatDistance(new Date(node.frontmatter.updated_at), new Date(), {
            addSuffix: true,
          })}
        </time>
      </span>
      <ul className="blogpost__tags">
        {node.frontmatter.tags.map(tag => (
          <Link key={tag} className="blogpost__tag" to={`/tags/${tag}`}>
            {`#${tag}`}
          </Link>
        ))}
      </ul>
    </animated.section>
  );
};

export default BlogEntryCard;
