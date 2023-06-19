import React from "react";
import MainLayout from "../Layout/MainLayout";
import styles, { layout } from "../style";

const HIW = () => {
  return (
    <MainLayout>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`${styles.paddingY} ${styles.flexCenter}`}>
            <div className={styles.flexStart}>
              <h1 className={styles.heading2}>Privacy Policy</h1>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default HIW;
