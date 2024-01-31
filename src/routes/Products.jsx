import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../store/productSlice";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  console.log("Products: ", products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
