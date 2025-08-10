import products from "../assets/data/products.json";

// console.log(products);

export const getAllProducts = () => {
  return products;
};

export const getAllProductsByTitle = (title) => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(title.toLowerCase())
  );
};

export const getAllProductsByCategory = (category) => {
  return products.filter(
    (product) => product.category?.toLowerCase() === category.toLowerCase()
  );
};

export const getTopProductsByFootprint = (limit) => {
  return products
    .slice()
    .sort((a, b) => b.totalFootprint - a.totalFootprint)
    .slice(0, limit);
};

export const getLowestProductsByFootprint = (limit) => {
  return products
    .slice()
    .sort((a, b) => a.totalFootprint - b.totalFootprint)
    .slice(0, limit);
};

export const getPopularProducts = (limit) => {
  return products
    .slice()
    .sort((a, b) => b.avgIndianConsumption - a.avgIndianConsumption)
    .slice(0, limit);
};


