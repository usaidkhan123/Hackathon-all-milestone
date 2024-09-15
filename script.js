var togglebutton = document.getElementById("toggle-skills");
var skills = document.getElementById("Skills");
togglebutton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
// const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
// const skills = document.getElementById("skills") as HTMLElement;
// toggleButton.addEventListener("click", () => {
//   if (skills.style.display === "none" || skills.style.display === "") {
//     skills.style.display = "block";
//   } else {
//     skills.style.display = "none";
//   }
// });
