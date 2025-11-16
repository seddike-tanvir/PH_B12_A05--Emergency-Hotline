function getCurrentTime() {
    return new Date().toLocaleTimeString();
}



function updateCallHistory(callToName,callToNumber){

    const historyCardWrapper = document.getElementById("historyBodyWrapper");
    
    const historyCardEach = `
    <div class="historyCard flex flex-row justify-between items-center bg-green-50 px-[.5rem] py[1rem] my-[1rem] rounded-md border border-green-200">
                            <div class="historyCard_callerInfo my-[.5rem]">
                                <p class="title font-NatoSerifBengali text-[.95rem] font-bold">${callToName}</p>
                                <p class="title text-[.9rem] text-gray-500 font-normal">${callToNumber}</p>
                                </div>
                            <p class="historyCard_timeInfo text-[.9rem] text-gray-700 font-normal">${getCurrentTime()}</p>
                        </div>  
    `

    historyCardWrapper.innerHTML += historyCardEach;
}


function emptyCallHistory(){
    const historyCardWrapper = document.getElementById("historyBodyWrapper");

    historyCardWrapper.innerHTML="";

}







// clear btn er click event -->
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function(){
    emptyCallHistory();
})














