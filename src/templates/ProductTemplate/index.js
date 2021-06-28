/* eslint-disable jsx-a11y/no-onchange */

import React from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery } from 'components';
import { Grid, SelectWrapper, Price } from './styles';
import CartContext from 'context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      shopifyId
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default function ProductTemplate(props) {
  const { getProductById } = React.useContext(CartContext);
  const [product, setProduct] = React.useState(null);
  const [selectedColorway, setSelectedColorway] = React.useState(null);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;

  React.useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      setProduct(result);
      setSelectedColorway(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
  }, [
    getProductById,
    setProduct,
    props.data.shopifyProduct.shopifyId,
    variantId,
  ]);

  const handleColorwayChange = e => {
    const newColorway = product?.variants.find(v => v.id === e.target.value);
    setSelectedColorway(newColorway);
    navigate(`${origin}${pathname}?variant=${encodeURI(newColorway.id)}`, {
      replace: true,
    });
  };

  return (
    <Layout>
      <Grid>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>{props.data.shopifyProduct.description}</p>
          {product?.availableForSale && !!selectedColorway && (
            <>
              {product?.variants.length > 1 && (
                <SelectWrapper>
                  <strong>Colorway</strong>
                  <select
                    value={selectedColorway.id}
                    onChange={handleColorwayChange}
                  >
                    {product?.variants.map(v => (
                      <option key={v.id} value={v.id}>
                        {v.title}
                      </option>
                    ))}
                  </select>
                </SelectWrapper>
              )}
              {!!selectedColorway && <Price>${selectedColorway.price}</Price>}
            </>
          )}
        </div>
        <div>
          <ImageGallery
            selectedColorwayImageId={selectedColorway?.image.id}
            images={props.data.shopifyProduct.images}
          />
        </div>
      </Grid>
    </Layout>
  );
}
