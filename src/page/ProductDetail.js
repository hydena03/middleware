import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetail = async () => {
      let url = `https://my-json-server.typicode.com/hydena03/noona-shop/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      setProduct(data);
    };
  
    getProductDetail();
  }, [id]);
  

  return (
    <Container className="product-detail-container"> {/* 부모 요소에 클래스 추가 */}
      <Row>
        <Col ClassName="product-img">
          <img src={product?.img} alt={product?.title} />
        </Col>
        <Col>
          <h2>{product?.title}</h2>
          <h4>₩{product?.price}</h4>
          <div>{product?.choice === true ? "Conscious choice" : " "}</div>
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              Size
            </Dropdown.Toggle>
  
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">L</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">S</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div>
            <button className="detail-button">주문하기</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
  
};

export default ProductDetail;
