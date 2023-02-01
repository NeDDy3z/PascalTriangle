const tri = document.getElementsByClassName("triangle")[0];
tri.innerHTML = "";

let rows = [];



document.getElementById("rows").focus();
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    }
});
document.getElementById("rows").addEventListener('change' && 'input', (event) => {
    submit();
});



function submit() {
    triangle(document.getElementById("rows").value);
    print();
}

function triangle(rowcount) {
    for (let i = 0; i < rowcount; i++) {
        rows[i] = [1];
        
        for (let j = 1; j < i; j++) {
            rows[i].push(rows[i-1][j-1] + rows[i-1][j]);
        }
        
        if (i > 0) rows[i].push(1);
    }
}



function print() {
    if (tri.getElementsByTagName("p").length >= 1) {
        tri.innerHTML = "";
        rows = [];
        triangle(document.getElementById("rows").value);
    } 

    rows.forEach(element => {
        console.log(element);

        let temp = document.createElement("p");
        tri.appendChild(temp);
        temp.innerText += "\t";

        element.forEach(ele => {
            temp.innerText += ele+"\t"; 
        })
    });

}
