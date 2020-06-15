$(document).ready(function(){

});

//Business Logic for Todo List
function Todo(){
  listItem = []
  itemID  = 0
}

Todo.prototype.addItem = function(item) {
  item.itemID = this.assignId();
  this.listItem.push(item)
}

Todo.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//Business Logic for Items
function ListItem(item) {
  this.item = item
}

