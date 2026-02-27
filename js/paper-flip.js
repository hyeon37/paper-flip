// 초기 세팅 선언
const settings = {
  paperClipWidth: '3rem',
  paperClipHeight: '1rem',
  paperFlipWidth: '10rem',
  paperFlipHeight: '5rem',
  unit: 'rem',
};

// 초기 화면 설정
const initPaperFlip = (uSettings = {}, target = null) => {
  // let backs = document.querySelectorAll(".back");
  console.log("uSettings", uSettings);
  uSettings = {...settings, ...uSettings};
  console.log("uSettings2", uSettings);
  let paper = document.querySelector(".paper.on .back");
  console.log("paper", paper);
  paper.addEventListener("click", (event) => {
    console.log("paper", event.target);
    const target = event.target;
    target.parentNode.classList.toggle("flip");
    // let count = 0;
    // const itv = setInterval(function() {
    //   const clipPath = window.getComputedStyle(target).clipPath;
    //   console.log("clip-path polygon", clipPath);
    //   if (clipPath.includes('polygon')) {
    //     // polygon(...) 안의 내용만 추출
    //     const points = clipPath.match(/polygon\((.*)\)/)[1];
    //     console.log("좌표:", points); // "50% 0%, 100% 100%, 0% 100%"
    //   }
    //   count++;
    //   if (count > 2) {
    //     clearInterval(itv);
    //   }
    // }, 500);
  });

  paper.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'clip-path') {
      // transition 끝나면 다음 페이지 back 나오도록 처리
      console.log('Transition 완료', event);
    }
  });
  paper.addEventListener('transitionstart', (event) => {
    if (event.propertyName === 'clip-path') {
      console.log('Transition 시작', event);
    }
  });
  paper.addEventListener('transitionrun', (event) => {
    if (event.propertyName === 'clip-path') {
      console.log('Transition 실행', event);
    }
  });
  paper.addEventListener('transitioncancel', (event) => {
    if (event.propertyName === 'clip-path') {
      console.log('Transition 취소', event);
    }
  });
};

// 1. 현재 루트 폰트 사이즈 가져오기 (보통 16px)
const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

// 2. px -> rem 변환 함수
const pxToRem = (px) => `${px / rootFontSize}rem`;

// 3. rem -> px 변환 함수
const remToPx = (rem) => `${rem * rootFontSize}px`;

console.log(pxToRem(32)); // "2rem" (16px 기준)
console.log(remToPx(1.5)); // "24px" (16px 기준)

initPaperFlip({
  paperClipWidth: '60rem',
});
