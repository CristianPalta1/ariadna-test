import React, { useState, useEffect } from "react";

import ImgagePrueba from "../../assets/images/thumbnails/deadpool.png";

//Components
import Carousel from "../../components/carousel/Carousel";
import { categoryBarList, allMovieList } from "../../assets/constants/Data";

import "./styles/styles.scss";

function Home() {
  const [categoryActive, setCategoryActive] = useState("1");

  const handleCategoryPress = (id) => {
    setCategoryActive(id);
  };
  return (
    <div class="moviesContainer">
      <div class="catgoriesBar">
        <ul>
          {categoryBarList.map((cat) => (
            <li
              className={categoryActive === cat.id && "active"}
              onClick={() => handleCategoryPress(cat.id)}
              key={cat.name}
            >
              {cat.title}
            </li>
          ))}
        </ul>
      </div>
      <div class="post-list">
        {allMovieList.map((movie) => {
          return (
            <a href="" class="post" key={movie.id}>
              <div class="postInfoContainer">
                <h3>{movie.title.toUpperCase()}</h3>
              </div>
              <figure class="post-image">
                <img src={movie.urlImage} />
              </figure>
              {/* <span class="post-overlay">
                <p>
                  <span class="post-likes">150</span>
                  <span class="post-comments">10</span>
                </p>
              </span> */}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
