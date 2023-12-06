import React, { useRef, useState } from "react";
import styles from "../Styles/style";
import { FaCartFlatbed, FaRocket } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  Md12Mp,
  MdLogin,
  MdProductionQuantityLimits,
  MdShoppingCartCheckout,
} from "react-icons/md";
import NavMenu from "./NavMenu";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handelChange = (e) => {
    setSearch(e.target.value);
  };
  const ref = useRef(0);
  function handleSearch() {
    ref.current.focus();
  }

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={`${styles.flexBewteen} mt-5`}>
        <div className={`${styles.flexCenter} gap-5`}>
          <h1 className=" text-2xl">Cart list</h1>
          <form
            action=""
            className=" hidden md:block"
            onChange={(e) => e.preventDefault}
          >
            <input
              value={search}
              onChange={(e) => handelChange(e)}
              className="  placeholder-opacity-30  border  text-[17px] px-2 py-1 rounded-md"
              type="text"
              name=""
              id=""
              ref={ref}
            />
            <button
              onClick={handleSearch}
              type="button"
              className=" ml-2 bg-blue-700 text-white px-1 poty rounded-sm"
            >
              Search
            </button>
          </form>
        </div>
        <div className=" hidden sm:block">
          <ul
            className={`${styles.flexCenter} xs:gap-1 sm:gap-5 cursor-pointer`}
          >
            <NavMenu item={"Home"} icon={<FaRocket />} />
            <NavMenu item={"Products"} icon={<MdProductionQuantityLimits />} />
            <NavMenu item={"My Order"} icon={<Md12Mp />} />
            <NavMenu item={"Cart"} icon={<FaCartFlatbed />} />
            <NavMenu item={"Logout"} icon={<MdShoppingCartCheckout />} />
            <NavMenu item={"Login"} icon={<MdLogin />} />
          </ul>
        </div>
        <a className=" sm:hidden">
          {isOpen ? (
            <IoMdMenu size={40} onClick={onClick} />
          ) : (
            <IoCloseCircleOutline size={40} onClick={onClick} />
          )}
        </a>
      </div>
      {/* moblie part */}
      <div
        className={` drop-shadow-2xl bg-black/5 m-10 p-10 rounded-md flex flex-col sm:block   ${
          isOpen ? `hidden` : ` sm:hidden`
        }`}
      >
        <ul
          className={` ${
            isOpen ? `hidden` : ` sm:hidden`
          } space-y-10 xs:gap-1 sm:gap-5 cursor-pointer`}
        >
          <NavMenu item={"Home"} icon={<FaRocket />} />
          <NavMenu item={"Products"} icon={<MdProductionQuantityLimits />} />
          <NavMenu item={"My Order"} icon={<Md12Mp />} />
          <NavMenu item={"Cart"} icon={<FaCartFlatbed />} />
          <NavMenu item={"Logout"} icon={<MdShoppingCartCheckout />} />
          <NavMenu item={"Login"} icon={<MdLogin />} />
        </ul>
      </div>
    </>
  );
}

export default Navbar;
