import * as React from 'react';
import { render } from '@testing-library/react';
import Fourohfour from '../../pages/404';

describe('Fourohfour page', () => {
  const data = {
    file: {
      childImageSharp: {
        fluid: {
          base64:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABBnAAAQZwGu0OuYAAAE40lEQVQ4y32VeVBTVxTGA7RM60z/0GnpVBmNMLUsShVwtHUZ7VDc2JE1MTEIIdJKgJBQqiitErAipWxh38qORUikwNiyVFlEAQUNKiBbqqSySEVwkvfu6c0LYaB2embevJPknd9893znvNBoy4IjyqXuh5nf6S3//oHitVPEJelEWkWPhPY/sfFTR23CDs+mLk0cYZ2nYHYeIjOageX6v+YJs0JZz+vAqFJI+LkTjgaI21cZWTPwI/q0t4wNP7Z1M8IgS7qVwztLZNYiDEP1Nfeg6PIP2eFZkxu3usyU1bY+OxNfBY5sMeERcImMuHgVnDhxsMsheMxkq3P/+s2Hp0ytXQFDpzB03RJUo9DiMx8q948siLX3iQar3d7QPTgN1S1jZGppG4RcqEC/NA4hQVz1KCMkfeFEZBHsdRHC2k/s6jDwnMlWJ6MlhWyBViVLkJXLO1cBDsfjQBRbTIxMA/lHrxKqmh6juOwb6ifTAFebB0ONbQM/4p0t8TwWmtGA21S0opkYolP5Nr6qjgtz2hmhGRM51b1wf+wV2Tc6C/W3FCCp7FWPzwF0Db4o0dX6ReTJOBH5YGsXsHoFVKdQF0JxtknNjbGnXYOzMDxFkC29M6iwdoDsHCTg7sjCsPcpSazzibgRj5OJKjdufNCiIL1FmFahLz+Ndi75VwNNDgAGPcPkk/FZgMcTKrKtfx5daVJAUd0Aqu14Dl5fpQA2ZMFwtcWGZWOjt8KUmwpY+qyYmaXXdShVozMAfWMLqOPRPNR2TKKU0i7AYCLg20LYcTCI3Laf07jdPrCAbnVk04oeHgvLpHJeVJHlbteo7dKm255l10fhBQnQ+XASaYxp7n2JkkruoIrGcRD9IG1mhmVOfR0jBXfu5XljiwP0penGG0JJdQ+8TOeI8tROnFiw2OH+yvvkJRSdUAx7jnDRJls3EImLMbBLdaXlGWDlIV8yxN7YlFLe2VILahk8I6k5prn4X9TDPaNy7pkSCVuYC9Zf+KN15vbI1MYDeQb9hIdZDMf5iRCf36bOlfbDDAl5y03c7y7S9s/eJ2qpkcbmBxxNtjln4C1AHGEm8ovIRczQDDgv+R21PlBCbbsSJZd2ETGZTTA8DXWamqiEAoPg78spZdzTxVoQX1yzBlvfYPk5AzZscQT6lgPoyvU+lCsbgJa7o6iqUQ7t/TNQ3/kcUst6CP6FSugbJ+8kNQAF6h4BylTdPNOYIel7eWfLYZ9bOGlscVBltcsLmnqUKLv6ITx9SaKaFjlquvsc1XVOIknlPYItzIZW+dwInvF3NfW3BhBt+bjoLzqdzMVvFDfuj8TJyBSytu1PVNIwAvLxKVRW300235uC37r/hqyq+8AMy4JrbUo8ULDqDaAm8Mi4YqcVR3kJyGynr/rU6SR1zQ0Fkt6cQM9eqqDwWg+09r9S35Sr5tLKu5UsQQ7kyx4KKQ8YMXpvALG6Y2xhzhwrPAds7LhgvtMbDvueJva5hECgIFYel1kvjEmrCy6/PrRDcLHmfXwqG11tScMQ7d87TLnsG5z6HlZZwInIe8TgS9q9T6WCLz8dNu9mEx+Y7ptYZ34I1tD3+OnqehWgJ2tV0v7zyCxBpr4ux8c21P4d5MX4RxYqvIISB0y3Od82tXZJtNrDXKv57RAz2gCvIPX8N/GyFax/APXotflewH9XAAAAAElFTkSuQmCC',
          aspectRatio: 1,
          src: '/static/2447f57edaa030a2ef2c627aa9e93b72/0adb0/ghost.png',
          srcSet:
            '/static/2447f57edaa030a2ef2c627aa9e93b72/3b612/ghost.png 175w,\n/static/2447f57edaa030a2ef2c627aa9e93b72/3d8f6/ghost.png 350w,\n/static/2447f57edaa030a2ef2c627aa9e93b72/0adb0/ghost.png 700w,\n/static/2447f57edaa030a2ef2c627aa9e93b72/7e126/ghost.png 1050w,\n/static/2447f57edaa030a2ef2c627aa9e93b72/7f6e2/ghost.png 1400w,\n/static/2447f57edaa030a2ef2c627aa9e93b72/d1264/ghost.png 1600w',
          srcWebp: '/static/2447f57edaa030a2ef2c627aa9e93b72/899cb/ghost.webp',
          srcSetWebp:
            '/static/2447f57edaa030a2ef2c627aa9e93b72/12321/ghost.webp 175w,\n/static/2447f57edaa030a2ef2c627aa9e93b72/019d6/ghost.webp 350w,\n/static/2447f57edaa030a2ef2c627aa9e93b72/899cb/ghost.webp 700w,\n/static/2447f57edaa030a2ef2c627aa9e93b72/fa771/ghost.webp 1050w,\n/static/2447f57edaa030a2ef2c627aa9e93b72/63dc0/ghost.webp 1400w,\n/static/2447f57edaa030a2ef2c627aa9e93b72/add76/ghost.webp 1600w',
          sizes: '(max-width: 700px) 100vw, 700px',
        },
      },
    },
  };

  it('renders correctly and matches snapshot', () => {
    const { container } = render(<Fourohfour data={data} />);

    expect(container).toMatchSnapshot();
  });

  it('has a heading that says `page not found`', () => {
    const headingText = 'PAGE NOT FOUND';
    const { getByTestId } = render(<Fourohfour data={data} />);

    expect(getByTestId('404-heading')).toHaveTextContent(headingText);
  });

  it('has a link back to the main website', () => {
    const url = 'http://localhost';
    const { getByTestId } = render(<Fourohfour data={data} />);

    expect(getByTestId('404-link').getAttribute('href')).toMatch(url);
  });
});
