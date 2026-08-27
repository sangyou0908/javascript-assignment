const movies = [
  {
    title: "인셉션",
    voteAverage: 8.4,
  },
  {
    title: "인터스텔라",
    voteAverage: 8.7,
  },
  {
    title: "다크 나이트",
    voteAverage: 9.0,
  },
  {
    title: "테넷",
    voteAverage: 7.3,
  },
];

// 영화 데이터를 찾아서 console창에 출력
const foundMovie = movies.find((movie) => movie.title === "인터스텔라");
console.log(foundMovie);
