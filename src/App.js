import { styled } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { defaultStyles } from "./constants";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Accolades from "./pages/Accolades";
import Events from "./pages/Events";
import Project from "./pages/Project";
import React, { useEffect, useState } from "react";
import { AppContext } from "./store/context";

const AppLayout = styled("div")({
  ...defaultStyles,
  width: "100vw",
  height: "fit-content",
  minHeight: "100vh",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/accolades",
    element: <Accolades />,
  },
  {
    path: "/project/:projectid",
    element: <Project />,
  },
]);

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    fetch("https://kailash2point0.github.io/data/data.json")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        setData(responseData);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(data);
  //   const flyers = document.getElementsByClassName("flyer");
  //   Array.prototype.forEach.call(flyers, (element) => {
  //     element.style.animationDuration = "1s";
  //   });
  //   const loadingElement = document.getElementById("loading");
  //   loadingElement.style.animation = "fade 2s forwards";
  //   loadingElement.style.animationDelay = "2s";
  //   setTimeout(() => {
  //     const loader = document.getElementById("loading");
  //     if (loader) {
  //       loader.remove();
  //     }
  //   }, 4000);
  //   // flyers.forEach(element => {
  //   // });
  // }, [data !== null]);

  return (
    <>
      {data !== null && (
        <AppContext.Provider value={data}>
          <AppLayout>
            <RouterProvider router={router} />
          </AppLayout>
        </AppContext.Provider>
      )}
    </>
  );
}

export default App;
