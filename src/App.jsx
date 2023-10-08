// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./Pages/Solar System/Explore";
import Home from "./Pages/Home/Home";
import Layout from "./components/Layout";
import Mercury from "./components/Planets/Mercury";
import FirstForm from "./Pages/Forms/FirstForm";
import Venus from "./components/Planets/Venus";
import MarsTripPlan from "./Pages/Forms/MarsTripPlan";
import MoonTripPlan from "./Pages/Forms/MoonTripPlan";
import Confirm from "./Pages/Forms/confirm";
import SolarSystemTrip from "./Pages/Forms/SolarSystemTrip";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/mercury",
        element: <Mercury />,
      },
      {
        path: "/venus",
        element: <Venus />,
      },
      {
        path: "/booking",
        element: <FirstForm />,
      },
      {
        path: "/visitmars",
        element: <MarsTripPlan />,
      },
      {
        path: "/visitmoon",
        element: <MoonTripPlan />,
      },
      {
        path: "/visitsolarsystem",
        element: <SolarSystemTrip />,
      },
      {
        path: "/ticket",
        element: <Confirm />,
      },
      ,
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
