import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../components/Banner";

function Home() {
  const [dataPlace, setDataPlace] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setDataPlace(response.data);
      })
      .catch((error) => {
        setDataPlace([
          {
            id: "0",
            title: "No Post Found!",
            body: "Fail to load.",
          },
        ]);
        console.log(error);
      });
  }, []);
  return (
    <main>
      <Banner />
      <div className="grid grid-cols-5 gap-4 w-full justify-between">
        {dataPlace.map((post) => {
          return (
            <div
              key={post.id}
              className="bg-[#f1f1f1] my-2 flex flex-col justify-center p-3 w-[80%]"
            >
              <div className="border-b-2 border-b-gray-300 pb-2">
                {post.title}
              </div>
              <div className="">{post.body}</div>
            </div>
          );
        })}
      </div>
      <div></div>
    </main>
  );
}

export default Home;
