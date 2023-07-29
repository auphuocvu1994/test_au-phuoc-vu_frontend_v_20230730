import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MyRecord from "./pages/Record/MyRecord";
import TopMyPage from "./pages/Home/TopMyPage";
import Login from "./pages/Auth/Login/Login";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Column from "./pages/Column/Column";

// Utility function to check isLogin status
const isUserLoggedIn = () => {
  // Replace "your_isLogin_key" with the key you are using to store the login status in localStorage
  const isLogin = localStorage.getItem("isLogin");
  return isLogin === "true"; // Assuming you are storing "true" as a string in localStorage
};

const routers = [
  {
    name: "TopMyPage",
    exact: true,
    path: "/home",
    element: TopMyPage,
    layout: MainLayout,
  },
  {
    name: "MyRecord",
    exact: true,
    path: "/myRecord",
    element: MyRecord,
    layout: MainLayout,
  },
  {
    name: "Column",
    exact: true,
    path: "/column",
    element: Column,
    layout: MainLayout,
  },
  {
    name: "Login",
    exact: true,
    path: "/login",
    element: Login,
    layout: AuthLayout,
  },
];

// Wrapper component for redirecting from the root URL based on isLogin status
const RootRedirect = () => {
  return isUserLoggedIn() ? <Navigate to="/home" replace={true} /> : <Navigate to="/login" replace={true} />;
};

export const Router = () => {
  return (
    <Routes>
      {/* Render the wrapper component for root URL */}
      <Route path="/" element={<RootRedirect />} />

      {routers.map((item) => {
        const { layout: Layout, element: Element, path } = item;
        let element = <Element />;

        // Check if the route requires authentication (MainLayout)
        if (Layout === MainLayout) {
          // If the user is not logged in, redirect them to the login page
          if (!isUserLoggedIn() && item.path !== "/column") {
            element = <Navigate to="/login" replace={true} />;
          }
        }

        if (Layout) {
          element = (
            <Layout>
              {element}
            </Layout>
          );
        }
        return (
          <Route
            key={item.name}
            exact={item.exact}
            element={element}
            path={path}
          />
        );
      })}
    </Routes>
  );
};
