const getMovieMessage = (title, voteAverage) => {
  return `${title}의 평점은 ${voteAverage}점입니다.`;
};

const title = document.querySelector(".title");
console.log(title.textContent);
title.textContent = "오늘의 추천 영화";
console.log(title.textContent);

const description = document.querySelector(".description");
description.classList.add("text-primary", "fw-bold");

const movieList = document.querySelector("#movie-list");

const movieMessageCard = document.createElement("div");
movieMessageCard.textContent = getMovieMessage("인셉션", 8.4);
movieMessageCard.classList.add("border", "rounded", "p-3", "mb-2");
movieList.append(movieMessageCard);

const movieMessageCard2 = document.createElement("div");
movieMessageCard2.textContent = getMovieMessage("인터스텔라", 8.7);
movieMessageCard2.classList.add("border", "rounded", "p-3", "mb-2");
movieList.append(movieMessageCard2);

// movieMessageCard2.remove();
