function count() {
  const start = document.querySelector("#start");
  const end = document.querySelector("#end");
  const steps = document.querySelector("#steps");
  const result = document.querySelector("#result");

  try {
    if (
      start.value.length === 0 ||
      end.value.length === 0 ||
      steps.value.length === 0
    ) {
      throw new Error(`Impossível contar. Preencha todos os campos!`);
    }
    result.innerHTML = `Contando:`;
    let s = Number(start.value);
    let e = Number(end.value);
    let stp = Number(steps.value);
    if (s < e) {
      for (let i = s; i <= e; i += stp) {
        result.innerHTML += `${i} \u{1F449}`;
      }
    } else {
      for (let i = s; i >= e; i -= stp) {
        result.innerHTML += `${i} \u{1F449}`;
      }
    }
    result.innerHTML += `\u{1F3C1}`;
  } catch (error) {
    result.innerHTML = error.message;
  }

  //   if (
  //     start.value.length === 0 ||
  //     end.value.length === 0 ||
  //     steps.value.length === 0
  //   ) {
  //     result.innerHTML = `Impossível contar. Preencha todos os campos!`;
  //   } else {
  //     result.innerHTML = `Contando:`;
  //     let s = Number(start.value);
  //     let e = Number(end.value);
  //     let stp = Number(steps.value);
  //     if (s < e) {
  //       for (let i = s; i <= e; i += stp) {
  //         result.innerHTML += `${i} \u{1F449}`;
  //       }
  //     } else {
  //       for (let i = s; i >= e; i -= stp) {
  //         result.innerHTML += `${i} \u{1F449}`;
  //       }
  //     }
  //     result.innerHTML += `\u{1F3C1}`;
  //   }
}

const countButton = document.querySelector("#countButton");
countButton.addEventListener("click", (event) => {
  event.preventDefault();
  count();
});
