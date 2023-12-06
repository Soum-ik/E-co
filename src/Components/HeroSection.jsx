import React from "react";
import styles from "../Styles/style";

function HeroSection({ title, details, btn, img }) {
  return (
    <div className={`${styles.marginX} ${styles.flexCenter} my-10 text-white`}>
      <div className={` grid grid-cols-1 sm:grid-cols-2 place-content-center`}>
        <div className="max-w-[500px] text-center space-y-6 ">
          <h1 className=" font-Lato font-semibold  text-[25px]">{title}</h1>
          <p className="text-[19px] text-center text-dimWhite">{details}</p>
          <button className=" rounded-lg px-1 bg-slate-50 text-black font-semibold">
            {btn}
          </button>
        </div>
        <div className=" flex items-center justify-center">
          <img className=" w-full" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
