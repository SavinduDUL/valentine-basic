

document.addEventListener('DOMContentLoaded', function () {
 

    document.getElementById("showLetterBtn").onclick = function () {
        // hide button
        this.style.display = "none";
        
        // show the letter section
        const letter = document.getElementById("letterSection");
        letter.style.display = "block";
        letter.classList.add("show");
        
    };
    document.getElementById("prevpage").onclick = function ()
        {
            // hide button
        this.style.display = "none";
        const letter = document.getElementById("letterSection");
        letter.style.display = "none";
        }
        const prev = document.getElementById("showLetterBtn");
        prev.style.display = "block";
        prev.classList.add("show");
});
