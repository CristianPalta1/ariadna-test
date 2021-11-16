import React, { useState } from "react";

//Components
import Carousel from "../../components/carousel/Carousel";
import ListMovies from "../../components/list-movies/ListMovies";

//Data
import { categoryBarList} from "../../assets/constants/Data";

import "./styles/styles.scss";


function Home() {
  const [categoryActive, setCategoryActive] = useState("1");
  

  const handleCategoryPress = (id) => {
    setCategoryActive(id);
  };
  return (
    <>
      <Carousel />
      <div className="moviesContainer">
        <div className="catgoriesBar">
          <ul>
            {categoryBarList.map((cat) => (
              <li
                className={categoryActive === cat.id ? "active" : ''}
                onClick={() => handleCategoryPress(cat.id)}
                key={cat.name}
              >
                {cat.title}
                <div
                  key={cat.name}
                  className={categoryActive === cat.id ?"active" : ''}
                ></div>
              </li>
            ))}
          </ul>
        </div>
        <ListMovies id = {categoryActive}/>
      </div>
    </>
  );
}

export default Home;
