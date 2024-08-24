import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UseParams() {
  const { id } = useParams(); // late
  const [productDetails, setProductDetails] = useState({});

  //   useEffect(()=>{
  //     if(id){
  //         // call to backend with id to fetch product detaile
  //    setProductDetails(data)
  //     }
  //   },[id])

  return (
    <div>
      <h1>UseParams - {id}</h1>
    </div>
  );
}

export default UseParams;
