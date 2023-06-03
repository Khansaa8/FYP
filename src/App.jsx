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


const App = () =>  (

      <MainLayout>
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Home />
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Stats />
              <Features />
              <Product />
              <About />
              <Testimonials />
              <Contact />
            </div>
          </div>
      </MainLayout>

  );

export default App;
