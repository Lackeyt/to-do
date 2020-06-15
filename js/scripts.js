
//Business Logic for Todo List
function Todo(){
    listItem = []
    itemID  = 0
}

Todo.prototype.addItem = function(item) {
    item.itemID = this.assignId();
    this.ListItem.push(item)
}

Todo.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

//Business Logic for Items
function ListItem(item) {
    this.item = item
}



$(document).ready(function(){
    $("#inputForm").submit(function(){
        event.preventDefault()

        let listItem = $("#item").val()
        $("#output").append("<p>" + listItem + "</p><br>")
        //populate values
    })
});