import React from "react";

function Tags({ filterItems, categories, activeIndex }) {
  return (
    <>
      <div className="tags">
        {categories.map((cat, index) => {
          return (
            <button
              className={`${activeIndex === cat ? "active" : ""}`}
              key={index}
              onClick={() => filterItems(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Tags;
