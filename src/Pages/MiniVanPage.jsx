import React from "react";
import Minivan from "../Pages/Minivan";
import MiniPage from "../Components/MiniPage";
import BookBusant from "./BusHirePages/BookBusant";

const MiniVanPage = () => {
  return (
    <div>
      <MiniPage />
      <Minivan />
      <BookBusant />
    </div>
  );
};

export default MiniVanPage;
