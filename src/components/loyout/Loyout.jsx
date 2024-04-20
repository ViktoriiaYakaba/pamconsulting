import { Suspense } from "react";
import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";

export const Loyout = ({children}) => {
  return (
    <div>
      <Header />
          <Suspense fallback={<div>Loading...</div>}>
              {children}
        <Outlet />
      </Suspense>
    </div>
  );
};



