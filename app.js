console.log("welcome..");
showNotes();
let addBtn = document.getElementById("addbtn");
var noteobj;
addBtn.addEventListener("click" , function (e){
    let addText = document.getElementById("addtext");
    let  notes = localStorage.getItem("notes");
    if (notes == null)
    {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
     noteobj.push(addText.value);
     localStorage.setItem("notes",JSON.stringify(noteobj));
        addText = "";
        console.log(noteobj);
        showNotes();

})

function showNotes (){
    let notes = localStorage.getItem("notes");
    if ( notes == null)
    {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    } 
    let html = "";
    noteobj.forEach(function(element,index){
html += ` 
 <div class=" noteCard card shadow mx-2" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">NOTE : ${index + 1}</h5>
  <p class="card-text">${element}</p>
  <button id = "${index}" onclick = "deleten(this.id)" class="btn btn-primary">Delete</button>
</div>
</div>`;
    });
    let notesElm = document.getElementById("notes");
  if (noteobj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }

}
        
    
    function deleten(index)
    {  console.log("I am deleting", index);
        let notes = localStorage.getItem("notes");
        if (notes == null) {
          noteobj = [];
        } else {
          noteobj = JSON.parse(notes);
        }
        noteobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteobj));
  showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

