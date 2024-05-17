import React from "react";
import { Link, useParams } from "react-router-dom";
import Wishlist from "../../routers/wishlist/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { toggleHeart } from "../../context/wishlistSlice";

const Cart = ({ data }) => {
  let wishlist = useSelector((state) => state.wishlist.value);

  const dispatch = useDispatch();

  let card = data?.map((el) => (
    <div className="card" key={el.id}>
      <div className="content">
        <Link to={`/product/${el.id}`}>
          <img src={el.images[0]} alt={el.title} />
        </Link>
        {/* <img src={el.images[0]} alt={el.title} /> */}
        <div className="btns">
          <button onClick={() => dispatch(toggleHeart(el))}>
            {wishlist?.some((item) => item.id === el.id) ? (
              <FaHeart style={{ color: "red" }} />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <button>
            <MdAddShoppingCart />
          </button>
          <button>
            <CiSearch />
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <section className="products">
        <div className="cards">{card}</div>
      </section>
    </>
  );
};

export default Cart;
