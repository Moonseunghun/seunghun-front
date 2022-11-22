import React from "react";
import "../Login/Login.scss";

// import { Link } from 'react-router-dom';

// function Header() {
//   return <h1>wecode!</h1>;
// }

function Login() {
  const handleClick = (event) => {
    alert('hi')
  }
  return (
    <div>
      <div className="login">
        <h1 className="title"> westargram </h1>
        <div className="body">
          <form action="main.html">
            <div className="loginbox">
              {/* <!-- <div className="loginSection"> --> */}
              <input
                className="id"
                type="text"
                placeholder="전화번호,사용자 이름 또는 이메일"
              />
              <input className="pw" type="password" placeholder="비밀번호" />
              <button type="button" onClick={handleClick}> 
                로그인
              </button>
              {/* <!-- </div> --> */}
            </div>
          </form>
        </div>
      </div>
      <p className="font">비밀번호를 잊으셨나요?</p>
      {/* <Link to='/main'>메인으로 이동 </Link> */}
    </div>
  );
};

export default Login;
