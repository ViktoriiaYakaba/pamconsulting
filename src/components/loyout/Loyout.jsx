import { Suspense } from "react";
import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";
import css from './Loyout.module.css';

export const Loyout = ({children}) => {
  return (
    <div className={css.container}>
      <Header />
          <Suspense fallback={<div>Loading...</div>}>
              {children}
        <Outlet />
      </Suspense>
    </div>
  );
};



