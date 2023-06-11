import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import styles from "./style";
import {
  Product,
  Features,
  Contact,
  Stats,
  Testimonials,
  Home,
  About,
} from "./components";
import MainLayout from "./Layout/MainLayout";


const App = () =>  { 
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      scroll.scrollTo(element.offsetTop, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -100,
      });
    }
  }, [location]);
  return(

      <MainLayout>
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Home />
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Stats />
              <div id="features"><Features /></div>
              <Product />
              <About />
              <Testimonials />
              <Contact />
            </div>
          </div>
      </MainLayout>


  );}

export default App;
