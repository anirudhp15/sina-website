import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css"; // Ensure you have the appropriate styles

const SHOPIFY_STORE_URL =
  "https://your-shopify-store.myshopify.com/api/2023-04/graphql.json";
const SHOPIFY_ACCESS_TOKEN = "your-shopify-storefront-access-token";

const fetchProducts = async () => {
  const query = `
  {
    products(first: 6) {
      edges {
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                src
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                price
                compareAtPrice
              }
            }
          }
        }
      }
    }
  }
  `;

  try {
    const response = await axios.post(
      SHOPIFY_STORE_URL,
      { query },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": SHOPIFY_ACCESS_TOKEN,
        },
      }
    );
    return response.data.data.products.edges;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const Merch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setLoading(false);
    };

    getProducts();
  }, []);

  if (loading) {
    return <div className="p-8 text-white bg-black">Loading...</div>;
  }

  return (
    <div className="p-8 text-white bg-black">
      <h2 className="text-4xl font-bold">Merch</h2>
      {products.length === 0 ? (
        <div className="mt-6 text-lg">
          No products available at the moment. Please check back later.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="overflow-hidden text-black bg-white rounded-lg shadow-lg"
            >
              <img
                src={product.node.images.edges[0].node.src}
                alt={product.node.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold">{product.node.title}</h3>
                <p className="mt-2 text-sm">{product.node.description}</p>
                <p className="mt-2 text-lg font-bold">
                  ${product.node.variants.edges[0].node.price}
                </p>
                {product.node.variants.edges[0].node.compareAtPrice && (
                  <p className="mt-1 text-sm line-through">
                    ${product.node.variants.edges[0].node.compareAtPrice}
                  </p>
                )}
                <a
                  href={`https://your-shopify-store.myshopify.com/products/${product.node.id}`}
                  className="inline-block px-6 py-2 mt-4 font-semibold text-white bg-red-600 rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Merch;
