import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "My First Description",
  },
  {
    id: "p2",
    price: 6,
    title: "My Second Book",
    description: "My Second Description",
  },
  {
    id: "p3",
    price: 6,
    title: "My third Book",
    description: "My third Description",
  },
  {
    id: "p4",
    price: 6,
    title: "My Fourth Book",
    description: "My Fourth Description",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
