import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const [dataPlace, setDataPlace] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataPlace(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {/* <Header /> */}
      <main>
        {dataPlace.map((post) => {
          return (
            <div className="flex flex-row justify-center">
              <div key={post.id} className="bg-[#f1f1f1] my-2 flex flex-col justify-center p-3 w-[80%]">
                <div className="border-b-2 border-b-gray-300 pb-2">{post.title}</div>
                <div className="">{post.body}</div>
            </div>
            </div>
          );
        })}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
