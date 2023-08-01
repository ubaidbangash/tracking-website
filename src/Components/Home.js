//  import Anim2 from  './Anim2.json';
import Anim3 from "../Anim3.json";
// import Fast from  './Fast.json';
import Lottie from "lottie-react";
import MyNavbar from "./MyNavbar";
import Main from "./Main";
import Content from "./Content";
import TestSlider from "./TestSlider";
import Circle from "./Circle";
import Test from "./Test";
import Footer from "./Footer";
import { Row, Col } from "antd";
import Animation3 from "../Anim3.json";
import ProgressBar from "./progressBar/ProgressBar";




const Home = () => {
  return (
    <div>
      <div style={{ height: "100px" }}>
        <Lottie style={{ height: "auto" }} animationData={Animation3} />
      </div>
      <MyNavbar />
      <Main />
      <Content />
     
      <TestSlider />
      <ProgressBar/>
      <Test />
      <Footer />
    
      
      
      
    </div>
  );
};
export default Home;
