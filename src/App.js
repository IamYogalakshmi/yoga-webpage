import React from "react";
import './App.scss';
import Header from './Header';
import Banner from './Banner';
import Exp from './Experience';
import Whatido from './Whatido';
import MobileApp from './MobileApp'
import WebApp from "./WebApp";
import MotionGraphic from "./MotionGraphic";
import DigitalArt from "./DigitalArt";
import Photography from "./Photography";
import Footer from './Footer';

const App = () => (
    <div className="App">
      <Header />
      <Banner />
      <Exp />
      <Whatido />
      <MobileApp />
      <WebApp />
      <MotionGraphic />
      <DigitalArt />
      <Photography />
      <Footer />
    </div>
);

export default App;

// .nd-blog {
//   padding-top: 40px;
//   .nd-b-posts {
//     margin-top: 100px;
//     padding: 50px 0;
//   }
// }

// @media only screen and (min-width: 370px) and (max-width: 500px) {
//   .nd-blog {
//     padding-top: 50px;
//     .nd-b-posts {
//       margin-top: 50px;
//       padding: 5px 0;
//     }
//   }
// }