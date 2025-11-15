function increaseFavCount(){
    let favCounter = document.getElementById("favCounter"); // element
    let count = parseInt(favCounter.innerText); // value

    count++;

    favCounter.innerText = count;
}

function decreaseFavCount(){
    let favCounter = document.getElementById("favCounter"); // element
    let count = parseInt(favCounter.innerText); // value

    count--;

    favCounter.innerText = count;
}









// after click function when unclicked
const favButtons = document.querySelectorAll(".favBtn");

favButtons.forEach(btn => {
    btn.addEventListener("click", function () {

        const card = btn.closest(".activeBodyCard");
        const favBtn = card.querySelector(".favBtn");

        // check current state
        const isActive = favBtn.classList.contains("fa-solid");

        if (isActive) {
            // unfav korbo if fav
            favBtn.classList.remove("text-red-700");
            favBtn.classList.remove("fa-solid");
            favBtn.classList.add("fa-regular");
            favBtn.classList.add("text-gray-500");
            decreaseFavCount();
        } else {
            // fav korbo if unfav
            favBtn.classList.remove("text-gray-500");
            favBtn.classList.remove("fa-regular");
            favBtn.classList.add("fa-solid");
            favBtn.classList.add("text-red-700");
            increaseFavCount();
        }
    });
});