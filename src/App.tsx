import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
//Components
import Header from "./components/headerComponent/header";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
        {/* <Button variant="contained">MUIボタン使用テスト</Button>
        <p>マテリアルICON表示テスト</p>
        <div className='wrap'>
          <div className='icon_area'>
            <TwitterIcon className='icon' />
            <span className='icon_text'>Twitter</span>
          </div>
          <hr />
          <div className='icon_area'>
            <InstagramIcon className='icon' />
            <span className='icon_text'>Instagram</span>
          </div>
          <hr />
          <div className='icon_area'>
            <EmailIcon className='icon' />
            <span className='icon_text'>メールアドレス</span>
          </div>
          <hr />
        </div> */}
      {/* routing先 */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<ResultList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes> */}
    </div>
    </BrowserRouter>

    //Reactデフォルト記述
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
