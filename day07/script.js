const movie = {
  id: 550,
  title: "Fight Club",
  vote_average: 8.4,
  vote_count: 0,
  detail: {
    runtime: 139,
  },
};

const genres = ["Drama", "Thriller", "Crime"];

// 객체 구조 분해 할당하기
const { title, vote_average } = movie;
console.log(`제목: ${title}`);
console.log(`평점: ${vote_average}`);

// movie 객체의 속성을 새로운 변수로 할당하기
const { title: movieTitle } = movie;
console.log(movieTitle);

// genres 배열 구조 분해 할당하기
const [firstGenre, secondGenre] = genres;
console.log(firstGenre);
console.log(secondGenre);

// 존재하지 않는 속성 안전하게 가져오기
const director = movie.detail?.diractor;
console.log(director);
