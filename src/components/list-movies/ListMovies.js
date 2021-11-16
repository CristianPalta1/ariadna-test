import React, { useState } from "react";

//Data
import {
  allMovieList,
  newReleaseMovieList,
  myFavoriteMovieList,
  mostPopularMovieList,
  trendMovieList,
} from "../../assets/constants/Data";

const LIST_BTN = [
  {
    id: "0",
    text: "WATCH NOW",
  },
  {
    id: "1",
    text: "MORE INFO",
  },
];

export default function ListMovies({ id }) {
  const [buttonActive, setButtonActive] = useState("0");
  switch (id) {
    case "1":
      return (
        <div className="post-list">
          {allMovieList.map((movie) => {
            return (
              <div href="" className="post" key={movie.id}>
                <div className="postInfoContainer">
                  <div className="title-post">
                    <h3>{movie.title.toUpperCase()}</h3>
                  </div>
                  <div className="btn-container">
                    {LIST_BTN.map((info) => (
                      <button
                        key={info.id}
                        className={buttonActive === info.id ? "active2" : ""}
                        onClick={() => {
                          setButtonActive(info.id);
                        }}
                      >
                        {info.text}
                      </button>
                    ))}
                  </div>
                </div>
                <figure className="post-image">
                  <img src={movie.urlImage} alt={movie.title} />
                </figure>
              </div>
            );
          })}
        </div>
      );
    case "2":
      return (
        <div className="post-list">
          {newReleaseMovieList.map((movie) => {
            return (
              <div href="" className="post" key={movie.id}>
                <div className="postInfoContainer">
                  <div className="title-post">
                    <h3>{movie.title.toUpperCase()}</h3>
                  </div>
                  <div className="btn-container">
                    {LIST_BTN.map((info) => (
                      <button
                        key={info.id}
                        className={buttonActive === info.id ? "active2" : ""}
                        onClick={() => {
                          setButtonActive(info.id);
                        }}
                      >
                        {info.text}
                      </button>
                    ))}
                  </div>
                </div>
                <figure className="post-image">
                  <img src={movie.urlImage} alt={movie.title} />
                </figure>
              </div>
            );
          })}
        </div>
      );
    case "3":
      return (
        <div className="post-list">
          {mostPopularMovieList.map((movie) => {
            return (
              <div href="" className="post" key={movie.id}>
                <div className="postInfoContainer">
                  <div className="title-post">
                    <h3>{movie.title.toUpperCase()}</h3>
                  </div>
                  <div className="btn-container">
                    {LIST_BTN.map((info) => (
                      <button
                        key={info.id}
                        className={buttonActive === info.id ? "active2" : ""}
                        onClick={() => {
                          setButtonActive(info.id);
                        }}
                      >
                        {info.text}
                      </button>
                    ))}
                  </div>
                </div>
                <figure className="post-image">
                  <img src={movie.urlImage} alt={movie.title} />
                </figure>
              </div>
            );
          })}
        </div>
      );
    case "4":
      return (
        <div className="post-list">
          {trendMovieList.map((movie) => {
            return (
              <div href="" className="post" key={movie.id}>
                <div className="postInfoContainer">
                  <div className="title-post">
                    <h3>{movie.title.toUpperCase()}</h3>
                  </div>
                  <div className="btn-container">
                    {LIST_BTN.map((info) => (
                      <button
                        key={info.id}
                        className={buttonActive === info.id ? "active2" : ""}
                        onClick={() => {
                          setButtonActive(info.id);
                        }}
                      >
                        {info.text}
                      </button>
                    ))}
                  </div>
                </div>
                <figure className="post-image">
                  <img src={movie.urlImage} alt={movie.title} />
                </figure>
              </div>
            );
          })}
        </div>
      );
    case "5":
      return (
        <div className="post-list">
          {myFavoriteMovieList.map((movie) => {
            return (
              <div href="" className="post" key={movie.id}>
                <div className="postInfoContainer">
                  <div className="title-post">
                    <h3>{movie.title.toUpperCase()}</h3>
                  </div>
                  <div className="btn-container">
                    {LIST_BTN.map((info) => (
                      <button
                        key={info.id}
                        className={buttonActive === info.id ? "active2" : ""}
                        onClick={() => {
                          setButtonActive(info.id);
                        }}
                      >
                        {info.text}
                      </button>
                    ))}
                  </div>
                </div>
                <figure className="post-image">
                  <img src={movie.urlImage} alt={movie.title} />
                </figure>
              </div>
            );
          })}
        </div>
      );
    case "6":
      return (
        <div className="post-list">
          <p>There are no recommendations yet</p>
        </div>
      );

    default:
      return <div></div>;
  }
}
