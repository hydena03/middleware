import {useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

//1. 전체상품페이지, 로그인페이지, 상세페이지
//1-1. 네브바 만들기
//2. 전체상품페이지-전체상품
//3. 로그인페이지클릭-로그인페이지
//3. 상품디테일(로그아웃상태)-로그인페이지
//4. 로그인 돼 있을시, 상품디테일 확인가능
//5. 로그아웃 버튼 누르면 로그아웃 됨
//6. 로그아웃 상태에서는 상품디테일 확인 불가
//7. 로그인/로그아웃시 우측상단 텍스트 바뀜
//8. 상품 검색 가능
function App() {
  const[authenticate, setAuthenticate]=useState(false)
useEffect(() => {
  console.log("Aaaa", authenticate);
},[authenticate])


  return (
    <div>
      <Navbar />
<Routes>
<Route path="/" element={<ProductAll/>}/>
<Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
<Route path="Product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
</Routes>
    </div>
  )
}

export default App;
