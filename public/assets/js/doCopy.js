function increaseCopyCount() {
    let copyCounter = document.getElementById("copyCounter"); // element
    let count = parseInt(copyCounter.innerText); // value

    count++;

    copyCounter.innerText = count;
}




// doing copy
const copyButtons = document.querySelectorAll(".copyBtn");

copyButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        const card = btn.closest(".activeBodyCard");

        const number = card.querySelector(".caller_id").innerText.trim();

        navigator.clipboard.writeText(number)
            .then(() => {
                alertNotify(`Copied: "${number}"`, 'success', 3000);
            })
            .catch(err => {
                console.error("Copy failed:", err);
                alertNotify('Failed to copy!', 'error', 3000);
            });
        
        increaseCopyCount();
    });
});
