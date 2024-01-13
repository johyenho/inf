import React from 'react';
// import './App.css';

import Myfooter from './Myfooter';
import Myheader from './Myheader';
import Conference from './Conference';

function App() {

  let name = "조현호";
  let tel = "010-8631-0259"

  //인라인 스타일방식
  const style = {
    // App: {
    //   backgroundColor: "black",
    // },
    // h2: {
    //   color: "red",
    // },
    // bold_text: {
    //   color: "green",
    // }
  };

  const number = 5;

  return (
    <div>
      <Myheader />
      <Conference />
      <div />
      {/* 실프 닫혀진 테그 */}
      <Myfooter />
    </div>
  );
}

export default App;
// 새로운 ex형식으로 내보낸다. @import로 받을수있다.import './App.css';
