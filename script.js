// step2 - span요소 자체를 우리가 원하는 요소명으로 인수 전달 처리
function splitText(elem, tag) {
    const el = document.querySelector(elem);
    const el_text = el.innerText;
    // 아래와 같이 DOM.style.fontSize='문자값속성'은
    // 실제 html 태그상에 <h1 style='font-size:0px'></h1>
    // 와 같이 인라인 스타일 형태로 적용
    el.style.fontSize = '0px';
    let resultText = "";

    for (let letter of el_text) {
        // 동적으로 생성되는 문자열 자체적으로 style=' '형식으로 스타일 값 연결가능
        resultText += `<${tag} style='display:inline-block'>${letter}</${tag}>`;
    }

    el.innerHTML = resultText;
}

splitText("h1", "span");











// step3 - 인터벌 시간값을 3번째 인수로 전달하면 delay값이 설정됨
// step4 - 세번째 인수 값이 전달되지 않으면 무조건 delay값을 디폴트로 0처리

// 