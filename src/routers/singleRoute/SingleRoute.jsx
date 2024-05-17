import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailProductsQuery } from "../../context/productApi";

const SingleRoute = () => {
  let { id } = useParams();
  let { data, isLoading } = useGetDetailProductsQuery(id);
  console.log(data);
  // const cardd = data?.map((el) => (
  //   <div key={el.id}>
  //     <img src={el.images[0]} alt="" />
  //   </div>
  // ));

  return (
    <section className="single">
      <div className="container">
        <div className="cards">
          <div className="card">
            <img src={data?.images[0]} alt={data?.title} />
          </div>
          <div className="card">
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
            <b>$ {data?.price}</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRoute;
