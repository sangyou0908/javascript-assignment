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
  const data = await response.json();
  console.log(data);

  // Response의 데이터 사용 > 첫 번째 영화 가져오기
  const firstMovie = data.results[0];
  console.log(firstMovie.title);

  // 첫 번째 영화 데이터의 특정 속성을 가져와서 출력
  const { title, vote_average } = firstMovie;
  console.log(`제목: ${title}`);
  console.log(`평점: ${vote_average}`);
}

getPopularMovies();
