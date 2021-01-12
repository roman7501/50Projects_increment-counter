const allCountEl = document.querySelectorAll(".count");

allCountEl.forEach((countEl) => {
  let count = 0;
  const countFinal = countEl.innerText;
  console.log(countFinal);
  countEl.innerText = "";
  const interval = setInterval(() => {
    count = count + 10;
    countEl.innerText = count;
    if (count >= countFinal) {
      clearInterval(interval);
    }
  }, 0.001);
});
