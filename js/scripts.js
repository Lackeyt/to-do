
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

Todo.prototype.deleteItem = function(id) {
    for (let i=0; i< this.itemList.length; i++) {
      if (this.itemList[i].itemId == id) {
        this.itemList.splice(this.itemList[i],1);
        return true;
      }
    };
    return false;
  }

//Business Logic for Items
function ListItem(item) {
    this.item = item
}

function output(string){
    return "<div class='form-control well'><label for='" + newItem.itemId + "'>" + string + "</label> <input name='updates' type='checkbox' value='" + newItem.itemId + "'></input></div>"
}


    



$(document).ready(function(){
    
    let newList = new Todo()


    $("#inputForm").submit(function(){
        event.preventDefault()
        input = $("#item").val()
        
        newItem = new ListItem(input)
        newList.addItem(newItem)

        $("#output").append(output(input))
        //populate values
    })

    $('button#update').click(function() {
        let checked = []
        $("input[name='updates']:checked").each(function(){
            checked.push(parseInt($(this).val()))
        })

        for (let i=0; i<checked.length; i++){
            newList.deleteItem(checked[i])
        }
console.log(newList.itemList)

    })
});