onEvent("submit", "click", function(event) {
  #TODO: clear text label if one already exists
  
  var name = getText("in_name");
  
  console.log(name); 
  if (name === "") {
    name = "World";
  }
  console.log("submit clicked!");
  textLabel("id", "Hello " + name + "!");
  console.log(getText("id"));
  
  #TODO: clear input text
  
});

onEvent("clear", "click", function(event) {
  clearLabel("id");
});
