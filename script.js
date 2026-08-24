const movie = {
  id: 1,
  title: "인셉션",
  voteAverage: 8.4,
  voteCount: 35000,
  releaseDate: "2010-07-15",
  isFavorite: false,
};

console.log(movie.title);
console.log(movie.voteAverage);
console.log(movie.isFavorite);

if (movie.voteAverage >= 8) {
  console.log("추천 영화");
} else {
  console.log("일반 영화");
}

if (movie.voteAverage >= 8 && movie.voteCount >= 30000) {
  console.log("인기 추천 영화");
} else {
  console.log("일반 영화");
}

const favoriteButtonText = movie.isFavorite ? "찜 해제" : "찜하기";
console.log(favoriteButtonText);
