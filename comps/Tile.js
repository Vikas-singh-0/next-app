import React, {useEffect, useState} from "react";
// import '@/styles/Tile.module.css'
import style from "../styles/Tile.module.css";
export default function Tile() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log('l', data);
    const fetchApi = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const json = await res.json();
        console.log('oo',data);
        setData((prev)=>[...prev, json])
      } catch (e) {
          alert(e.message);
      }
    }
    fetchApi();
  }, [count]);
  // return (
  //   <div className={style.div}>
  //     {data && 
  //     <div className="test">
  //       {data.map((data1) => {
  //         <h2>{data1.title}</h2>
  //       })}
  //     </div>}
  //     <button onClick={() => {console.log('k');return setCount((prev)=> prev+1)}}>Fetch</button>
  //     <style jsx>{`
  //       .test {
  //         color: red;
  //       }
  //     `}</style>
  //   </div>
  // );
  return (
    <>
      {
        data.length >0 && 
          <h1>{JSON.stringify(data)}</h1>
      }
      {
        data.length >0 && 
          <div>
            {data.map(d => 
            <div>
              <p>{d.title}</p>
              <p>{d.id}</p>
            </div>)}
          </div>
      }
      <button onClick={() => setCount((prev)=> prev+1)}>Fetch</button>
    </>
  );
}
