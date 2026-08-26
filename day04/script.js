// 버튼 요소 선택하기
const button = document.querySelector("#recommend-button");
const recommendResult = document.querySelector("#recommend-result");

// 버튼 클릭 이벤트
button.addEventListener("click", (event) => {
  recommendResult.textContent = "오늘의 추천 영화는 인셉션입니다.";
});

// form 관련 요소 선택하기
const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

// form 제출 시 이벤트
form.addEventListener("submit", (event) => {
  // 새로고침 막기
  event.preventDefault();

  // 입력값 가져오기
  const keyword = input.value.trim();

  // 빈 값 입력 시 조건 추가
  if (keyword === "") {
    return;
  }

  // 새 요소 생성 및 입력값 노출
  const resultMessage = document.createElement("p");
  resultMessage.textContent = `검색한 영화: ${keyword}`;
  searchResult.append(resultMessage);

  // submit 후 input에 입력값 제거
  input.value = "";
});

// movies 배열 추가
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
];

// forEach()로 영화 목록 출력
movies.forEach((movie) => {
  // movie의 title과 voteAverage 사용
  console.log(`${movie.title}의 평점은 ${movie.voteAverage}입니다.`);
});

// 영화 목록 요소 선택하기
const movieList = document.querySelector("#movie-list");

// 화면에 영화 목록 노출
movies.forEach((movie) => {
  // 영화 목록 li 추가하기
  const movieListItem = document.createElement("li");

  // 영화 목록 노출
  movieListItem.textContent = `${movie.title}`;
  movieList.append(movieListItem);
});
