
//Business Logic for Todo List
function Todo(){
    itemList = []
    itemID  = 0
}

Todo.prototype.addItem = function(item) {
    item.itemID = this.assignId();
    this.itemList.push(item);
}

Todo.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}



//Business Logic for Items
function ListItem(item) {
    this.item = item
}

function output(string){
    return "<div class='form-control well'><label for='" + string.replace(/\s+/g, '') + "'>" + string + "</label> <input type='checkbox' id='" + string.replace(/\s+/g, '') + "'></input></div>"
}



$(document).ready(function(){
    $("#inputForm").submit(function(){
        event.preventDefault()

        let newList = new Todo()
        newItem = new ListItem($("#item").val())
        newList.addItem(newItem)

        $("#output").append(output(listItem))
        //populate values
    })
});