// 실습 3) 진짜 응답의 구조 탐색하기
const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const url = "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR";

async function getNowPlaying() {}

getNowPlaying();
