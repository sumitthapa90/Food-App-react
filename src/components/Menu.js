import React from "react";

function Menu({ menuData }) {
  return (
    <div className="fullMenu">
      <div className="menu-sec">
        {menuData.map((food) => {
          const { id, desc, price, img, category, title } = food;

          return (
            <article key={id} className="article-sec">
              <div className="img-div">
                <img src={img} />
              </div>

              <div className="item-info">
                <header>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </header>

                <p>{price}</p>
                <p>{category}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
