import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/productCard";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/productSlice";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(fetchProducts(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, []); // 빈 의존성 배열을 전달하여 의존성 문제를 해결합니다.

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} key={menu.id}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;