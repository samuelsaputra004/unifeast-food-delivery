import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";

import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
// import { StoreContext } from "../../context/StoreContext";

const Home = () => {
  const [category] = useState("All");
  // const { token } = useContext(StoreContext);
  // console.log(token);

  return (
    <div>
      <Header />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
