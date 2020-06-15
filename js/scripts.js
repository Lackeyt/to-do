
//Business Logic for Todo List
function Todo(){
    this.itemList = []
    this.itemId  = 0
}

Todo.prototype.addItem = function(item) {
    item.itemId = this.assignId();
    this.itemList.push(item);
}

Todo.prototype.assignId = function() {
    this.itemId += 1;
    return this.itemId;
}

//Business Logic for Items
function ListItem(item) {
    this.item = item
}

function output(string){
    return "<div class='form-control well'><label for='" + string.replace(/\s+/g, '') + "'>" + string + "</label> <input type='checkbox' id='" + string.replace(/\s+/g, '') + "'></input></div>"
}



$(document).ready(function(){
    
    let newList = new Todo()


    $("#inputForm").submit(function(){
        event.preventDefault()

        
        newItem = new ListItem($("#item").val())
        newList.addItem(newItem)

        console.log(newList.itemList)
        console.log(newItem.itemId)
        

        //$("#output").append(output(newItem))
        //populate values
    })
});