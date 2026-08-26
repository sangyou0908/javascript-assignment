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
  const value = input.value;

  // 새 요소 생성 및 입력값 노출
  const resultMessage = document.createElement("p");
  resultMessage.textContent = `검색한 영화: ${value}`;
  searchResult.append(resultMessage);
});
