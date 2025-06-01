
const quizData = [
  { question: "플라스틱 병은 버리기 전에 어떤 처리를 해야 하나요?", answer: "라벨제거" },
  { question: "비닐봉지가 재활용되기 위한 조건은?", answer: "깨끗함" },
  { question: "유리병의 뚜껑은 어떻게 처리해야 하나요?", answer: "분리" },
  { question: "스티로폼은 어떤 경우에만 재활용이 되나요?", answer: "깨끗할때" },
  { question: "종이컵은 어떤 쓰레기로 분류되나요?", answer: "일반쓰레기" },
  { question: "투명 페트병은 어떻게 배출해야 하나요?", answer: "별도분리" },
  { question: "치킨박스에 기름이 묻었다면 어디에 버려야 하나요?", answer: "일반쓰레기" },
  { question: "알루미늄 캔을 버리기 전 해야 할 일은?", answer: "헹구기" },
  { question: "종이팩(우유팩)은 어디에 버려야 하나요?", answer: "팩전용함" },
  { question: "재활용이 어려운 종이류는 어떤 경우인가요?", answer: "코팅" }
];

let currentIndex = 0;

window.onload = function () {
  document.getElementById("total").textContent = quizData.length;
  showQuestion();
};

function normalize(text) {
  return text.replace(/\s+/g, "").replace(/[^ㄱ-ㅎ가-힣a-z0-9]/gi, "").toLowerCase();
}

function showQuestion() {
  const q = quizData[currentIndex];
  document.getElementById("question").textContent = `Q${currentIndex + 1}. ${q.question}`;
  document.getElementById("answer-input").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("current").textContent = currentIndex + 1;
}

function submitAnswer() {
  const userInput = normalize(document.getElementById("answer-input").value);
  const correctAnswer = normalize(quizData[currentIndex].answer);

  if (userInput === "") {
    document.getElementById("feedback").textContent = "정답을 입력해주세요!";
    return;
  }

  if (userInput.includes(correctAnswer) || correctAnswer.includes(userInput)) {
    document.getElementById("feedback").textContent = "✅ 정답입니다!";
  } else {
    document.getElementById("feedback").textContent = `❌ 오답입니다. 정답: ${quizData[currentIndex].answer}`;
  }

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % quizData.length;
    showQuestion();
  }, 3000);
}
