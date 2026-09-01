// 실습 3) 진짜 응답의 구조 탐색하기
const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

// async function getNowPlaying() {}

// getNowPlaying();

// fetch()로 서버에 Request 보내기
async function getPopularMovies() {
  const response = await fetch(URL, options);
  console.log(response); // Promise { <pending> }
}
