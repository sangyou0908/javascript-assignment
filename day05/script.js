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

// 평점 8.5점 이상인 영화 배열 노출
const highRatedMovies = movies.filter((movie) => movie.voteAverage >= 8.5);
console.log(highRatedMovies);

// 영화 배열에서 title만 가져온 배열 노출
const movieTitles = movies.map((movie) => movie.title);
console.log(movieTitles);

// 검색어 가공 후 검색결과 노출

// 변수 저장
const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

// form 함수
form.addEventListener("submit", (event) => {
  // 기본 새로고침 동작 막기
  event.preventDefault();

  // input에 입력된 값 가져오기 및 앞뒤 공백 제거
  const value = input.value.trim();

  // 빈값 검증 -> 가공 -> 검색결과 출력
  if (value !== "") {
    value.textContent = value;
    const lowerTitle = value.toLowerCase();
    searchResult.append(lowerTitle);
  }
});
