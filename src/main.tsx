import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./routes/index";
import About from "./routes/about";
import Services from "./routes/services";
import Schedule from "./routes/schedule";
import Contact from "./routes/contact";
import Offers from "./routes/offers";
import Partners from "./routes/partners";
import Achievements from "./routes/achievements";
import Events from "./routes/events";
import Fitness from "./routes/fitness";
import NotFound from "./routes/not-found";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "schedule", element: <Schedule /> },
      { path: "offers", element: <Offers /> },
      { path: "partners", element: <Partners /> },
      { path: "achievements", element: <Achievements /> },
      { path: "events", element: <Events /> },
      { path: "fitness", element: <Fitness /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
