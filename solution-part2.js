onEvent("submit", "click", function(event) {
  if (getProperty("id", "text") !== ""){
    clearLabel("id");
  }
  
  var name = getText("in_name");
  
  console.log(name); 
  if (name === "") {
    name = "World";
  }
  console.log("submit clicked!");
  textLabel("id", "Hello " + name + "!");
  console.log(getText("id"));
  clearInputText("in_name");
  
});

onEvent("clear", "click", function(event) {
  clearLabel("id");
});

function clearLabel(in_id){
  deleteElement(in_id);
  console.log("Text label was deleted.");
}

function clearInputText(in_id){
  setProperty(in_id, "text", "");
}
