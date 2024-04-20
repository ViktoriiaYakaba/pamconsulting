import { Suspense } from "react";
import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";

export const Loyout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};



