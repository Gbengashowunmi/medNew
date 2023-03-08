import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { IoIosFlash } from "react-icons/io";
import { BsCart4, BsForwardFill, BsGiftFill, BsSearch } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import "./shop.scss";
import HeadFoot from "../../component/HeadFoot";
import ItemCard from "../../component/ItemCard/ItemCard";
import ShortMessage from "../../component/shortMessage/ShortMessage";
import SimpleSlider from "../../component/SimpleSlider";
import CenterSlider from "../../component/CenterSlider";
import { MdOutlineHome } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import Consumeables from "../../component/consumeables/Consumeables";
import data from "../../component/Data";
import { ThreeCircles } from "react-loader-spinner";

export default function Shop() {
  // set states
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    setProducts(data);
  }, []);

  // handleInput function
  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchResult = data.filter((searched) =>
      searched.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setProducts(searchResult);
    setSearchInput("");
  };

  return (
    <HeadFoot
      pageTitle="Online store"
      description="Online store/shop page of medpau international Limited">
      <div className="about-head">
        <div className="image">
          <div className="overlay"></div>
          <source type="image/webp" srcSet="image.webp" />
          <img src="/images/breadcrumb-image-1.jpg" alt="about-us" />
          <div
            className="texts"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
            <h2>Shop here</h2>
            <p>
              <MdOutlineHome />
              <NavLink to="/">
                <span>HOME</span>
              </NavLink>{" "}
              <FaChevronRight />
              <span className="active">Shop</span>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="top">
        <div className="cat_dropdown">
          <button>
            <BiCategory className="icon" />
            CATEGORIES
          </button>


        </div>
        <form className="search" type="submit" onSubmit={handleSubmit}>
          <BsSearch className="search-icon" />
          <input placeholder="Type and hit enter" onChange={handleInput} />
        </form>
        <div className="cart_contact">
          <Link to="/view-cart">
            {" "}
            <div className="icon-container">
              <BsCart4 className="icon" />
            </div>
          </Link>
          <div className="icon-container">
            <RiAccountPinCircleFill className="icon" />
          </div>
        </div>
      </div> */}

      <main className="shop-main">
        {loading ? (
          <div className="loading">
            <ThreeCircles
              height="100"
              width="100"
              color="#2843f5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </div>
        ) : (
          <>
            <div className="flash" id="Hemodialysis">
              <div className="header">
                <h3>
                  <IoIosFlash className="icon" />
                  HEMODIALYSIS MACHINES
                </h3>
                <NavLink to="/shop/Hemodialysis">
                  <button>
                    <p>
                      View all <BsForwardFill className="icon" />
                    </p>
                  </button>
                </NavLink>
              </div>
              <div className="products-container">
                <SimpleSlider />
              </div>
              <div className="header">
                <h3>
                  <IoIosFlash className="icon" />
                  Hemodialysis Consumables
                </h3>
              </div>
              <div className="consumeables-container">
                {products
                  .filter(
                    (filtered) =>
                      filtered.category === "hemodialysis consumeables"
                  )
                  .map((product) => {
                    return (
                      <div key={product.id}>
                        <Consumeables
                          id={product.id}
                          image={product.image}
                          productName={product.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="flash" id="ICU">
              <div className="header">
                <h3>
                  <BiCategory className="icon" />
                  ICU EQUIPMENTS
                </h3>
                <NavLink to="/shop/ICU Equipment">
                  <button>
                    <p>
                      View all <BsForwardFill className="icon" />
                    </p>
                  </button>
                </NavLink>
              </div>
              <div className="products-container">
                <CenterSlider />
              </div>
              <div className="header">
                <h3>
                  <IoIosFlash className="icon" />
                  ICU Consumables
                </h3>
              </div>
              <div className="consumeables-container">
                {products
                  .filter(
                    (filtered) => filtered.category === "ICU consumeables"
                  )
                  .map((product) => {
                    return (
                      <div key={product.id}>
                        <Consumeables
                          id={product.id}
                          image={product.image}
                          productName={product.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="sales-banner">
              <div className="banner1"></div>
              <div className="banner2">
                <div className="image">
                  <source type="image/webp" srcSet="image.webp" />
                  <img src="/images/sales.png" alt="banner2" />
                </div>
              </div>
            </div>

            <div className="flash" id="Diagnostic_Imaging_Equipment">
              <div className="header">
                <h3>
                  <BsGiftFill className="icon" />
                  Diagnostic Imaging Equipment
                </h3>
                <NavLink to="/shop/Diagnostic Imaging Equipment">
                  <button>
                    <p>
                      View all <BsForwardFill className="icon" />
                    </p>
                  </button>
                </NavLink>
              </div>
              <div className="item-cards">
                {products
                  .filter(
                    (filtered) =>
                      filtered.category === "Diagnostic Imaging Equipment"
                  )
                  .map((product) => {
                    return (
                      <div className="item" key={product.id}>
                        <ItemCard
                          id={product.id}
                          image={product.image}
                          productName={product.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="flash" id="Operating_Theatre_Equipment">
              <div className="header">
                <h3>
                  <BsGiftFill className="icon" />
                  Operating Theatre Equipment
                </h3>
                <NavLink to="/shop/Operating Theatre Equipment">
                  <button>
                    <p>
                      View all <BsForwardFill className="icon" />
                    </p>
                  </button>
                </NavLink>
              </div>
              <div className="item-cards">
                {products
                  .filter(
                    (filtered) =>
                      filtered.category === "Operating Theatre Equipment"
                  )
                  .map((product) => {
                    return (
                      <div className="item" key={product.id}>
                        <ItemCard
                          id={product.id}
                          image={product.image}
                          productName={product.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* <div className="flash">
              <div className="header">
                <h3>
                  <BiCategory className="icon" />
                  Medical Consumables
                </h3>
                <button>
                  <p>
                    View all <BsForwardFill className="icon" />
                  </p>
                </button>
              </div>
              <div className="consumeables-container">
                {products
                  .filter(
                    (filtered) => filtered.category === "Medical Consumeables"
                  )
                  .map((product) => {
                    return (
                      <div key={product.id}>
                        <Consumeables
                          id={product.id}
                          image={product.image}
                          productName={product.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div> */}
            <section
              className="short-message-wrapper"
              data-aos="zoom-in-right"
              data-aos-offset="50"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true">
              <ShortMessage
                header="Worldwide Delivery
"
                description="
                Swift delivery within Nigeria and across other African countries within estimated delivery date with equipment in great condition.
"
              />
              <ShortMessage
                header="Safe Payment
"
                description="Our financial platforms are very reliable and designed to ensure that all your financial transactions are secure."
              />
              <ShortMessage
                header="Shop With Confidence
"
                description="We offer competitive prices on our 100 plus products and guarantee you great value for your money."
              />
              <ShortMessage
                header="24/7 Support
"
                description="Our lines are available 24/7 to attend to your complaints and ensure you are happy and satisfied"
              />
            </section>
          </>
        )}
      </main>
    </HeadFoot>
  );
}
