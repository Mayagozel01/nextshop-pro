// src/components/ProductList/ProductList.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { setProducts, removeProduct } from "../../redux/actions/productActions";
import { mockProducts } from "../../mocks/products"; // или реальный API
import type { Product } from "../../redux/types";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.productState.products);

  useEffect(() => {
    // подставляем мок-данные (или fetch)
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
      {products.map((p: Product) => (
        <div key={p.id} style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
          <img src={p.image} alt={p.title} style={{ width: "100%", height: 160, objectFit: "cover" }} />
          <h3>{p.title}</h3>
          <p>{p.price} ₽</p>
          <button onClick={() => dispatch(removeProduct(p.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
