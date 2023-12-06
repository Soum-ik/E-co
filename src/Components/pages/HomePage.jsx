import React from "react";
import Navbar from "../Navbar";
import styles from "../../Styles/style";
import HeroSection from "../HeroSection";
import { img } from "../../JsonData";

function HomePage() {
  return (
    <>
      <div className={`${styles.marginX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexCenter}  mt-5 bg-black`}>
        <HeroSection
          title={`Buy iphone 14 pro`}
          details={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore reiciendis voluptatum ex repellat pariatur temporibus.`}
          img={img}
          btn={"Buy One"}
        />
      </div>
    </>
  );
}

export default HomePage;
