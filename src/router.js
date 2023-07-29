import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import MyRecord from "./pages/Record/MyRecord";
import TopMyPage from "./pages/Home/TopMyPage";
import Login from "./pages/Auth/Login/Login";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Column from "./pages/Column/Column";

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

export const Router = () => {
  return (
    <Routes>
      {routers.map((item) => {
        const { layout: Layout, element: Element } = item;
        let element = <Element />
        if (Layout) {
          element = (
            <Layout>
              <Element />
            </Layout>
          );
        }
        return (
          <Route
            key={item.name}
            exact={item.exact}
            element={element}
            path={item.path}
          />
        );
      })}
      <Route path="/" element={<Navigate to="/login" replace={true} />} />
    </Routes>
  );
};
