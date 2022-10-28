import { styled } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { defaultStyles } from "./constants";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Accolades from "./pages/Accolades";
import Events from "./pages/Events";
import React, { useEffect } from "react";

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
    path: "/Events",
    element: <Events />,
  },
  {
    path: "/accolades",
    element: <Accolades />,
  },
]);

function App() {
  useEffect(() => {
    const flyers = document.getElementsByClassName("flyer");
    Array.prototype.forEach.call(flyers, (element) => {
      element.style.animationDuration = "1s";
    });
    const loadingElement = document.getElementById("loading");
    loadingElement.style.animation = "fade 2s forwards";
    loadingElement.style.animationDelay = "2s";
    setTimeout(() => {
      const loader = document.getElementById("loading");
      loader.remove();
    }, 4000);
    // flyers.forEach(element => {
    // });
  }, []);

  return (
    <>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </>
  );
}

export default App;
