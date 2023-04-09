const resultEl = document.querySelector(".result");
let task = "<h1> HomeWork #12 </h1>\n";

// Корявое, зато свое :(
// Решение на лекции подсмотрел в записи, уже после своего. Так интереснее
function _pow(num, degree, current) {
  current *= num;
  if (degree > 1) {
    return _pow(num, degree - 1, current);
  } else {
    return current;
  }
}

function pow(num, degree) {
  if (!num) return 0;
  if (degree === 1) return num;
  if (degree > 0) return _pow(num, degree, 1);
  else return 1 / _pow(num, -degree, 1);
}

task += `<p>pow(0, 3) = ${pow(0, 3)}</p>`;
task += `<p>pow(1, 3) = ${pow(1, 3)}</p>`;
task += `<p>pow(2, 3) = ${pow(2, 3)}</p>`;
task += `<p>pow(3, 3) = ${pow(3, 3)}</p>`;

resultEl.insertAdjacentHTML("beforeend", task);
