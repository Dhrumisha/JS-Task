let closeModal = document.querySelector(".close-modal");
let openModal = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
const dynModal1 = document.querySelector("#modal-1");
const dynModal2 = document.querySelector("#modal-2");
const dynCloseModal = document.querySelector("#close-modal-1");
const dynCloseModa2 = document.querySelector("#close-modal-2");

// const overCloseModal = function(){
//     overlay.classList.add("hidden");
//     modal.classList.add("hidden");
// }

// const overOpenModal = ()=>{
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
// }

// for (let i = 0; i < openModal.length; i++) {
//     openModal[i].addEventListener("click",overOpenModal);
//     overlay.addEventListener("click",overCloseModal);
//     closeModal.addEventListener("click",overCloseModal);

//     document.addEventListener("keydown",function (e){
//         if(e.key === "Escape" && !modal.classList.contains("hidden")){
//                 overCloseModal();
//         }
//     })
// }

// dynamically open different modal on button

for (let i = 0; i < openModal.length; i++) {
  function dynCloseFun() {
    document.querySelector(`#modal-${i + 1}`).classList.add("hidden");
    overlay.classList.add("hidden");
  }

  openModal[i].addEventListener("click", function () {
    document.querySelector(`#modal-${i + 1}`).classList.remove("hidden");
    overlay.classList.remove("hidden");

    document
      .querySelector(`#close-modal-${i + 1}`)
      .addEventListener("click", () => {
        dynCloseFun();
      });
  });

  overlay.addEventListener("click", function () {
    dynCloseFun();
  });

  document.addEventListener("keydown", function (e) {
    // console.log("hyyy", dynModal1, dynModal2);
    if (e.key === "Escape" /* && !modal.classList.contains("hidden") */ ) {
      // overCloseModal();
      dynCloseFun();
    }
  });
}
