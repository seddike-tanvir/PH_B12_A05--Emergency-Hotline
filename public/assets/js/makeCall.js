function makeCall(callToName,callToNumber) {
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
            backdrop: `
                  rgba(0, 0, 0, .6)
                `
        }).then((result) => {
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
                });            }
        });
}










// Call buttons select
const callButtons = document.querySelectorAll(".callBtn");

callButtons.forEach(btn => {
    btn.addEventListener("click", function () {

        

        const card = btn.closest(".activeBodyCard");

        const name = card.querySelector(".title").innerText.trim();
        const number = card.querySelector(".caller_id").innerText.trim();

        makeCall(name, number);
    });
});