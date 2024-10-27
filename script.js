const item=document.getElementById("item");
const addBtn=document.getElementById("addBtn");
const list=document.getElementById("list");

function add(){
    const li=document.createElement("li");
    const checkBox=document.createElement("input");
    checkBox.type="checkbox";
    const Del=document.createElement("delete");
    li.textContent=item.value;
    list.appendChild(li);
    item.value="";
    li.addEventListener("click",remove);
    
}

addBtn.addEventListener("click",add);