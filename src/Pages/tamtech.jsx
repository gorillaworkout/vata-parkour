import React, { useState, useEffect } from "react";
import "../Style/Tamtech.scss";
import Axios from "axios";

export default function Tamtech() {
  const [data, setData] = useState([]);
  // const [fontSize,setFontSize]=useState(24)
  // const increment=()=>{
  //     setTotal(total+1)
  //     setFontSize(fontSize+1)
  // }
  const fetching = () => {
    Axios.get(`https://dummyjson.com/products`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetching();
  }, []);

  const render = () => {
    return data.map((val, index) => {
      return (
        <div className="card">
          <img src={val.thumbnail} alt="" />
          <p>{val.title}</p>
          <p>{val.description}</p>
          <p>{val.price}</p>
          <p>{val.rating}</p>
        </div>
      );
    });
  };
  return (
    <>
      <div className="container-tamtech">
        {/* <div className="result">
                <p style={{fontSize:fontSize}}>{total}</p>
            </div>
            <button  className="btn-inc" onClick={increment}>
                inc
            </button> */}
            {render()}
      </div>
    </>
  );
}
