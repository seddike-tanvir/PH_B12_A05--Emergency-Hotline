function checkCallEligibility(){
    let coinCounter = document.getElementById("coinCounter"); // element
    let count = parseInt(coinCounter.innerText); // value

    if (count >= 20) {
        return 1;        
    } else {
        return 0;
    }
}



function cuttCoin(){
    let coinCounter = document.getElementById("coinCounter"); // element
    let count = parseInt(coinCounter.innerText); // value

    count = count - 20;

    coinCounter.innerText = count;
}



function makeCall(callToName,callToNumber) {
    
    let ringTone = new Audio("./assets/files/call_outgoing_ring.mp3");
    ringTone.loop = true;
    ringTone.currentTime = 0;
    ringTone.play();

    Swal.fire({
            title: "📞 Call Outgoing...",
            html: `
                <div class="text-lg mt-[2rem] mb-[1rem]">
                    <p class="text-[1.5rem] font-NatoSerifBengali font-bold">${callToName}</p>
                    <p class="text-[1.1rem] text-gray-500 font-normal">${callToNumber}</p>
                </div>
                    <br>
                <div style="font-size:14px; margin-top:10px; color:gray;">
                Connecting...
                </div>
            `,
            confirmButtonText: "End Call",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            allowOutsideClick: false,
            showConfirmButton: true,
            backdrop: ` rgba(0, 0, 0, .6) `

        }).then((result) => {

            ringTone.pause();
            ringTone.currentTime = 0;

            if (result.isConfirmed) {
                Swal.fire({
                    title: "Call Ended",
                    icon: "error",
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false
                });
            } else {
                Swal.fire({
                    title: "Call Cancelled",
                    icon: "error",
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false
                });
            }
        });
}










// Call buttons select
const callButtons = document.querySelectorAll(".callBtn");

callButtons.forEach(btn => {
    btn.addEventListener("click", function () {

        let eligibleForCall = checkCallEligibility();

        if (eligibleForCall == 1){
            const card = btn.closest(".activeBodyCard");
    
            const name = card.querySelector(".title").innerText.trim();
            const number = card.querySelector(".caller_id").innerText.trim();
            
            cuttCoin();
            makeCall(name, number);
            updateCallHistory(name, number);
        
        } else {
                Swal.fire({
                    title: "You've not sufficient coin to make a call.",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
        }

    });
});