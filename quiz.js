
const quizData = [
  { question: "플라스틱 병은 버리기 전에 어떤 처리를 해야 하나요?", answer: "라벨제거" },
  { question: "비닐봉지가 재활용되기 위한 조건은?", answer: "깨끗함" },
  { question: "유리병의 뚜껑은 어떻게 처리해야 하나요?", answer: "분리" },
  { question: "스티로폼은 어떤 경우에만 재활용이 되나요?", answer: "깨끗할때" },
  { question: "종이컵은 어떤 쓰레기로 분류되나요?", answer: "일반쓰레기" },
  { question: "투명 페트병은 어떻게 배출해야 하나요?", answer: "별도분리" },
  { question: "치킨박스에 기름이 묻었다면 어디에 버려야 하나요?", answer: "일반쓰레기" },
  { question: "알루미늄 캔을 버리기 전 해야 할 일은?", answer: "헹구기" },
  { question: "종이팩은 어디에 버려야 하나요?", answer: "팩전용함" },
  { question: "재활용이 어려운 종이류는 어떤 경우인가요?", answer: "코팅" },
  { question: "깨진 유리컵은 어떤 쓰레기인가요?", answer: "일반쓰레기" },
  { question: "음식물이 묻은 비닐은 어떤 쓰레기로 처리하나요?", answer: "일반쓰레기" },
  { question: "기름 묻은 피자박스는 재활용이 가능한가요?", answer: "불가능" },
  { question: "음료수 캔을 버리기 전 어떤 처리를 해야 하나요?", answer: "헹굼" },
  { question: "플라스틱 뚜껑과 병은 어떻게 배출해야 하나요?", answer: "분리" },
  { question: "라벨이 붙은 플라스틱 용기는 어떻게 해야 하나요?", answer: "라벨제거" },
  { question: "젖은 종이는 어떤 쓰레기로 분류되나요?", answer: "일반쓰레기" },
  { question: "우유팩은 종이처럼 재활용되나요?", answer: "아니오" },
  { question: "폐건전지는 어디에 버려야 하나요?", answer: "전용수거함" },
  { question: "투명 페트병과 유색 페트병은 어떻게 배출하나요?", answer: "분리" },
  { question: "깨끗한 종이컵은 어떤 쓰레기인가요?", answer: "일반쓰레기" },
  { question: "일회용 나무젓가락은 재활용이 되나요?", answer: "안됨" },
  { question: "플라스틱 빨대는 어떤 쓰레기인가요?", answer: "일반쓰레기" },
  { question: "헌 옷은 어떻게 처리해야 하나요?", answer: "의류수거함" },
  { question: "라벨 제거는 왜 중요한가요?", answer: "재활용품질향상" },
  { question: "음식물이 남은 종이는 재활용 가능한가요?", answer: "불가능" },
  { question: "스프레이 캔은 어떻게 배출하나요?", answer: "전용수거" },
  { question: "유리병의 라벨은 꼭 제거해야 하나요?", answer: "가능하면제거" },
  { question: "택배 박스는 어떤 쓰레기로 분류되나요?", answer: "종이류" },
  { question: "테이프가 붙은 상자는 어떻게 처리하나요?", answer: "테이프제거" },
  { question: "CD나 DVD는 어떤 쓰레기인가요?", answer: "일반쓰레기" },
  { question: "재활용이 안 되는 종이의 예는?", answer: "영수증" },
  { question: "배달용 플라스틱 용기는 어떻게 처리하나요?", answer: "헹구고재활용" },
  { question: "치약 튜브는 어떤 쓰레기인가요?", answer: "일반쓰레기" },
  { question: "플라스틱 병 스티커는 어떻게 해야 하나요?", answer: "제거" },
  { question: "종이호일은 어떤 쓰레기인가요?", answer: "일반쓰레기" },
  { question: "신문지는 어떤 재활용 품목인가요?", answer: "종이류" },
  { question: "유리창은 재활용 가능한가요?", answer: "불가능" },
  { question: "계란판은 어떤 경우에 재활용되나요?", answer: "깨끗할때" },
  { question: "플라스틱 뚜껑은 어디에 버리나요?", answer: "플라스틱류" },
  { question: "비닐봉지는 어디에 버려야 하나요?", answer: "비닐류" },
  { question: "우산은 어떤 쓰레기인가요?", answer: "일반쓰레기" },
  { question: "일회용 종이접시는 재활용되나요?", answer: "안됨" },
  { question: "우유팩은 어떤 쓰레기인가요?", answer: "팩류" },
  { question: "재활용 쓰레기는 어떤 봉투에 담아야 하나요?", answer: "투명봉투" },
  { question: "분리배출 시 세척이 필요한가요?", answer: "예" },
  { question: "기름 묻은 종이는 어떻게 처리하나요?", answer: "일반쓰레기" },
  { question: "깨진 거울은 어떻게 처리하나요?", answer: "일반쓰레기" },
  { question: "텀블러는 어떤 쓰레기인가요?", answer: "재사용가능" }
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
