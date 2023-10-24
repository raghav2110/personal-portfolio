import "./App.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import deved from "./assets/dev-ed-wave.png";
import { useState } from "react";
import web1 from "./assets/web1.png";
import web2 from "./assets/web2.png";
import web3 from "./assets/web3.png";
import blog1 from "./assets/blog1.avif";
import blog2 from "./assets/blog2.avif";
import blog3 from "./assets/blog3.jpeg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="pt-10 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbyrh</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1lckSxYkSEa1j7InlzkdrpQ-6VaXZCkL3/view?usp=drive_link" target="_blank" rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Raghav Heda
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Curious Full Stack Engineer Designing And Developing Cross Platform Web Applications
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/raghav_heda">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/raghav-heda-96a981167/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/raghav2110">
                <AiFillGithub />
              </a>
            </div>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mb-10 md:h-80 md:w-80">
            <div className="flex justify-center">
              <img className="mt-5" src={deved} layout="fill" alt="profile" />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As an early developer, I've build multiple 
              <span className="text-teal-500"> project </span>
              worked with a unicorn startup <span className="text-teal-500">ElasticRun </span>
              and collaborated with talanted people to create various web applications.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-xl hover:cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt="project1"
                onClick={()=>window.open("https://sneak-tube-react.vercel.app/", "_blank")}
              />
            </div>
            <div className="basis-1/3 flex-1 dark:text-white lg:mt-2">
              <h1 className="font-burtons text-2xl px-10 py-3">Youtube Clone</h1>
              <p className="font-burtons text-l px-10 pb-4">Youtube Clone web app made using React, Redux, Tailwind</p>
              <p className="font-burtons text-m font-bold px-10">Key Functionality Includes :</p>
              <ol className="font-burtons text-s px-16 list-decimal">
                <li> Fetching RealTime Data Using Google APi's</li>
                <li> Implementation Of React Routing</li>
                <li> SideBar Toggle Using Redux</li>
                <li> Implementation Of Debouncing In SearchBar</li>
              </ol>
              <div className=" md:align-middle lg:px-10 pt-5">
                <button className="border-solid border-2 border-black-600 p-2 rounded-lg mx-2" onClick={()=> window.open("https://github.com/raghav2110/sneak-tube-react/tree/main/sneak-tube", "_blank")}>Source Code</button>
                <button className="border-solid border-2 border-black-600 p-2 rounded-lg mx-2" onClick={()=> window.open("https://sneak-tube-react.vercel.app/", "_blank")}>Live Demo</button>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-xl hover:cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="project2"
                onClick={()=>window.open("https://sneaker-street-app.vercel.app/", "_blank")}
              />
            </div>
            <div className="basis-1/3 flex-1 dark:text-white lg:mt-2">
              <h1 className="font-burtons text-2xl px-10 py-3">Sneaker Street</h1>
              <p className="font-burtons text-l px-10 pb-4 ">E-commerce web application made using React</p>
              <p className="font-burtons text-m font-bold px-10">Key Functionality Includes :</p>
              <ol className="font-burtons text-s px-16 list-decimal">
                <li> Product Listing Page</li>
                <li> Add To Cart</li>
                <li> Add To Wishlist</li>
                <li> Filter Based On User Input</li>
              </ol>
              <div className=" md:align-middle lg:px-10 pt-5">
                <button className="border-solid border-2 border-black-600 p-2 rounded-lg mx-2" onClick={()=> window.open("https://github.com/raghav2110/sneaker-street-app", "_blank")}>Source Code</button>
                <button className="border-solid border-2 border-black-600 p-2 rounded-lg mx-2" onClick={()=> window.open("https://sneaker-street-app.vercel.app/", "_blank")}>Live Demo</button>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-xl hover:cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="project3"
                onClick={()=>window.open("https://splash-ui.vercel.app/", "_blank")}
              />
            </div>
            <div className="basis-1/3 flex-1 dark:text-white lg:mt-2">
              <h1 className="font-burtons text-2xl px-10 py-3">Splash UI</h1>
              <p className="font-burtons text-l px-10 pb-4">A Component Library made using HTML, CSS , Vanilla JS</p>
              <p className="font-burtons text-m font-bold px-10">Key Functionality Includes :</p>
              <ol className="font-burtons text-s px-16 list-decimal">
                <li> Basic Component Like Avatar, Badge, Buttons</li>
                <li> Complex Component Like Modal, SnackBar, Cards</li>
                <li> Can Be Easliy Included In Your Project With Just One Line Of Code</li>
              </ol>
              <div className=" md:align-middle lg:px-10 pt-5">
                <button className="border-solid border-2 border-black-600 p-2 rounded-lg mx-2" onClick={()=> window.open("https://github.com/raghav2110/splash-ui", "_blank")}>Source Code</button>
                <button className="border-solid border-2 border-black-600 p-2 rounded-lg mx-2" onClick={()=> window.open("https://splash-ui.vercel.app/", "_blank")}>Live Demo</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">My Blogs</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As I delved into the vast realm of web application development, I eagerly explored numerous fascinating concepts.
              Along this journey, I took the opportunity to share my newly acquired knowledge by writing insightful blogs focused on <span className="text-teal-500">Javascript </span>.
              
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Feel free to peruse a selection of my blog posts below:
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className="flex justify-center">
                <img src={blog1} width={250} height={250} alt="blog1" />
              </div>

              <h3 className="text-lg font-medium pt-8 pb-5  ">
              Advanced JavaScript ES6 — Let vs Var And Temporal Dead Zone
              </h3>
              <button className="border-solid border-2 border-black-600 p-2 rounded-lg mx-2" onClick={()=> window.open("https://raghavblog.hashnode.dev/advanced-javascript-es6-let-vs-var-and-temporal-dead-zone", "_blank")}>Visit Blog</button>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className="flex justify-center">
                <img src={blog2} width={210} height={200} alt="blog2" />
              </div>

              <h3 className="text-lg font-medium pt-8 pb-5  ">
                Advanced JavaScript ES6 — Let vs Var And Temporal Dead Zone
              </h3>
              <button className="border-solid border-2 border-black-600 p-2 rounded-lg mx-2" onClick={()=> window.open("https://raghavblog.hashnode.dev/execution-context-in-javascript", "_blank")}>Visit Blog</button>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className="flex justify-center">
                <img src={blog3} width={210} height={200} alt="blog3" />
              </div>

              <h3 className="text-lg font-medium pt-8 pb-5  ">
              HTTP Status Code Definitions(Client Error 4xx)
              </h3>
              <button className="border-solid border-2 border-black-600 p-2 rounded-lg mx-2 mt-3" onClick={()=> window.open("https://raghavblog.hashnode.dev/http-status-code-definitionsclient-error-4xx", "_blank")}>Visit Blog</button>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default App;
