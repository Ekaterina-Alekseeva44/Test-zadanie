//Открыть и закрыть первое окно//

document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.js-open-modal');
  const modal = document.querySelector(openButton.dataset.target);

  openButton.addEventListener('click', () => {
    modal.style.display = "block";
  });
  const closeButton = document.getElementById('close-button');
  closeButton.onclick = function () {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  };
});

//Открыть и закрыть второе окно//

document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.js-open-modal2');
  const modal2 = document.querySelector(openButton.dataset.target);
  openButton.addEventListener('click', () => {
    modal2.style.display = "block";
  });

  const closeButton = document.getElementById('close-button2');
  closeButton.onclick = function () {
    const modal = document.getElementById('modal2');
    modal2.style.display = 'none';
  };
});

//Открыть и закрыть третье окно//

document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.js-open-modal3');
  const modal3 = document.querySelector(openButton.dataset.target);
  openButton.addEventListener('click', () => {
    modal3.style.display = "block";
  });
  const closeButton = document.getElementById('close-button3');
  closeButton.onclick = function () {
    const modal = document.getElementById('modal3');
    modal3.style.display = 'none';
  };
});

//Открыть и закрыть четвертое окно//

document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.js-open-modal4');
  const modal4 = document.querySelector(openButton.dataset.target);
  openButton.addEventListener('click', () => {
    modal4.style.display = "block";
  });
  const closeButton = document.getElementById('close-button4');
  closeButton.onclick = function () {
    const modal = document.getElementById('modal4');
    modal4.style.display = 'none';
  };
});

//1-й счетчик//

let counter = 1;
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const cartCountSpan = document.querySelector('.cart-count');
function updateCount() {
  incrementBtn.innerText = "+";
  cartCountSpan.innerText = counter;
}
incrementBtn.addEventListener('click', () => {
  if (counter < 99) {
    counter++;
    localStorage.setItem('counter', counter);
    counterValue.innerHTML = counter;
    updateCount();
  }
});
decrementBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    localStorage.setItem('counter', counter);
    counterValue.innerHTML = counter;
    updateCount();
  }
});

function reset() {
  counter = localStorage.getItem('counter') || 1;
  localStorage.setItem('counter', counter);
  counterValue.innerHTML = counter;
  updateCount();
}
reset();

//2-й счетчик/

let counter2 = 1;
const counterValue2 = document.getElementById('counter-value2');
const incrementBtn2 = document.getElementById('increment-btn2');
const decrementBtn2 = document.getElementById('decrement-btn2');
const cartCountSpan2 = document.getElementById('cart-count2');

function updateCount2() {
  incrementBtn2.innerText = "+";
  cartCountSpan2.innerText = counter2;
}
incrementBtn2.addEventListener('click', () => {
  if (counter2 < 99) {
    counter2++;
    localStorage.setItem('counter2', counter2);
    counterValue2.innerHTML = counter2;
    updateCount2();
  }
});
decrementBtn2.addEventListener('click', () => {
  if (counter2 > 0) {
    counter2--;
    localStorage.setItem('counter2', counter2);
    counterValue2.innerHTML = counter2;
    updateCount2();
  }
});

function reset2() {
  counter2 = localStorage.getItem('counter2') || 1;
  localStorage.setItem('counter2', counter2);
  counterValue2.innerHTML = counter2;
  updateCount2();
}
reset2();

//3-й счетчик//

let counter3 = 1;
const counterValue3 = document.getElementById('counter-value3');
const incrementBtn3 = document.getElementById('increment-btn3');
const decrementBtn3 = document.getElementById('decrement-btn3');
const cartCountSpan3 = document.getElementById('cart-count3');
function updateCount3() {
  incrementBtn3.innerText = "+";
  cartCountSpan3.innerText = counter3;
}
incrementBtn3.addEventListener('click', () => {
  if (counter3 < 99) {
    counter3++;
    localStorage.setItem('counter3', counter3);
    counterValue3.innerHTML = counter3;
    updateCount3();
  }
});
decrementBtn3.addEventListener('click', () => {
  if (counter3 > 0) {
    counter3--;
    localStorage.setItem('counter3', counter3);
    counterValue3.innerHTML = counter3;
    updateCount3();
  }
});

function reset3() {
  counter3 = localStorage.getItem('counter3') || 1;
  localStorage.setItem('counter3', counter3);
  counterValue3.innerHTML = counter3;
  updateCount3();
}
reset3();

//4-й счетчик//

let counter4 = 1;
const counterValue4 = document.getElementById('counter-value4');
const incrementBtn4 = document.getElementById('increment-btn4');
const decrementBtn4 = document.getElementById('decrement-btn4');
const cartCountSpan4 = document.getElementById('cart-count4');
function updateCount4() {
  incrementBtn4.innerText = "+";
  cartCountSpan4.innerText = counter4;
}
incrementBtn4.addEventListener('click', () => {
  if (counter4 < 99) {
    counter4++;
    localStorage.setItem('counter4', counter4);
    counterValue4.innerHTML = counter4;
    updateCount4();
  }
});
decrementBtn4.addEventListener('click', () => {
  if (counter4 > 0) {
    counter4--;
    localStorage.setItem('counter4', counter4);
    counterValue4.innerHTML = counter4;
    updateCount4();
  }
});
function reset4() {
  counter4 = localStorage.getItem('counter4') || 1;
  localStorage.setItem('counter4', counter4);
  counterValue4.innerHTML = counter4;
  updateCount4();
}
reset4();

document.getElementById('add-to-card').addEventListener('click', function () {
  let span = document.querySelector('.button-text');
  span.innerText = 'Добавлен в корзину';
  setTimeout(function () {
    span.innerText = 'В корзину';
  }, 2000);
})

//Меняется название при нажатие на все корзины на "Товар добавлен"//

document.querySelectorAll('.btn-purchase').forEach(function (button) {
  button.addEventListener('click', function () {
    let span = button.querySelector('.button-text');
    span.innerText = 'Добавлен в корзину';
    setTimeout(function () {
      span.innerText = 'В корзину';
    }, 2000);
  });
});

































