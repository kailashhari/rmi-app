import { styled } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { colors, defaultStyles } from "./constants";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Accolades from "./pages/Accolades";
import Events from "./pages/Events";
import { useEffect, useState } from "react";

const AppLayout = styled('div')({
  ...defaultStyles,
  width: '100vw',
  height: 'fit-content',
  minHeight: '100vh',
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/team',
    element: <Team />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/Events',
    element: <Events />,
  },
  {
    path: '/accolades',
    element: <Accolades />,
  }
])

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return <>
    {loading ? <div className="lds-roller" >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> : (
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>)}
    </>
  ;
}

export default App;
