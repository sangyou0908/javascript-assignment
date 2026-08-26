// 버튼 요소 선택하기
const button = document.querySelector("#recommend-button");
const result = document.querySelector("#recommend-result");

// 버튼 클릭 이벤트
button.addEventListener("click", (event) => {
  result.textContent = "오늘의 추천 영화는 인셉션입니다.";
});
