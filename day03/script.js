const getMovieMessage = (title, voteAverage) => {
  console.log(`${title}의 평점은 ${voteAverage}점입니다.`);
};

getMovieMessage("인셉션", 8.4);

const title = document.querySelector(".title");
console.log(title.textContent);
title.textContent = "오늘의 추천 영화";
console.log(title.textContent);

const description = document.querySelector(".description");
description.classList.add("text-primary", "fw-bold");
