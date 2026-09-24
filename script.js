// Save checklist
const checkboxes = document.querySelectorAll("input[type=checkbox]");

checkboxes.forEach((box,index)=>{

    const saved = localStorage.getItem("day1-check-"+index);

    if(saved==="true") box.checked = true;

    box.addEventListener("change",()=>{

        localStorage.setItem("day1-check-"+index,box.checked);

    });

});