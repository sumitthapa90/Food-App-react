import React, { useState } from "react";
import Header from "./Header";
import Tags from "./Tags";
import Menu from "./Menu";
import data from "../data.json";

const allCategory = ["all", ...new Set(data.map((elm) => elm.category))];
console.log(allCategory);

function App() {
  const [menudata, setMenuData] = useState(data);
  const [categories, setcategories] = useState(allCategory);
  const [activeIndex, setActiveIndex] = useState("");

  const filterItems = (category) => {
    setActiveIndex(category);

    if (category === "all") {
      setMenuData(data);
      return;
    }

    let newItem = data.filter((elm) => elm.category === category);
    setMenuData(newItem);
  };

  return (
    <>
      <Header />
      <Tags
        filterItems={filterItems}
        categories={categories}
        activeIndex={activeIndex}
      />

      <Menu menuData={menudata} />
    </>
  );
}

export default App;
