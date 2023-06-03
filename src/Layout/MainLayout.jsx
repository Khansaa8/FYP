import styles from "../style";
import { Navbar, Footer } from "../components";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
