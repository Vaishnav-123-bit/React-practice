import { useEffect, useState } from "react";
import "./styles.css"
export default function LoadmoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const[disable,setdisable]=useState(false)



  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await res.json();
      console.log(data);

      if (data && data.products && data.products.length) {
        setProducts((prevData)=>[...prevData,...data.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  },[count]);

  useEffect(()=>{
    if(products && products.length===100){
        setdisable(true)
    }
  })

  if (loading) {
    return <div>Loading data ! </div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length > 0
          ? products.map((item) => (
              <div key={item.id} className="product">
                <img src={item.thumbnail} alt={item.name} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disable} onClick={()=>setCount(count+1)}>Load more Products</button>
        {
            disable ?<p>Yo have reached ur limit</p>:null
        }
      </div>
    </div>
  );
}


// import { useEffect } from "react";
// import { useState } from "react";
// import "./styles.css";

// export default function LoadMoreData() {
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [count, setCount] = useState(0);
//   const [disableButton, setDisableButton] = useState(false);

//   async function fetchProducts() {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `https://dummyjson.com/products?limit=20&skip=${
//           count === 0 ? 0 : count * 20
//         }`
//       );

//       const result = await response.json();

//       if (result && result.products && result.products.length) {
//         setProducts((prevData) => [...prevData, ...result.products]);
//         setLoading(false);
//       }

//       console.log(result);
//     } catch (e) {
//       console.log(e);
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchProducts();
//   }, [count]);

//   useEffect(() => {
//     if (products && products.length === 100) setDisableButton(true);
//   }, [products]);

//   if (loading) {
//     return <div>Loading data ! Please wait.</div>;
//   }

//   return (
//     <div className="load-more-container">
//       <div className="product-container">
//         {products && products.length
//           ? products.map((item) => (
//               <div className="product" key={item.id}>
//                 <img src={item.thumbnail} alt={item.title} />
//                 <p>{item.title}</p>
//               </div>
//             ))
//           : null}
//       </div>
//       <div className="button-container">
//         <button disabled={disableButton} onClick={() => setCount(count + 1)}>
//           Load More Products
//         </button>
//         {disableButton ? <p>You have reached to 100 products</p> : null}
//       </div>
//     </div>
//   );
// }