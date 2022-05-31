const flipBtn = document.querySelector("#flip-button");

const coin = document.querySelector("#coin");

flipBtn.addEventListener('click', flip);

// server side flip function

async function flip() {
  const res = await fetch("/flip");
  const result = await res.json();
  coin.style.animation = "none";
  if (result === "heads") {
    console.log(result);
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
  } else {
    console.log(result);
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
  }
  disableButton();
}

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3000);
}

// client side equivalent flip function shown contrast

// function flip() {
//   let i = Math.floor(Math.random() * 2);
//   coin.style.animation = "none";
//   if(i){
//       console.log(i)
//       setTimeout(function(){
//           coin.style.animation = "spin-heads 3s forwards";
//       }, 100);
//   }
//   else {
//       console.log(i)
//       setTimeout(function(){
//           coin.style.animation = "spin-tails 3s forwards";
//       }, 100);
//   }
//   disableButton();
// }
