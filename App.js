

// BUDGET CONTROLLER
let budgetController = (function() {

    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    let data = {
        allItem: {
        exp: [],
        inc: []
        },

        total: {
            exp: 0,
            inc: 0
        }
    };

    return{
        addItem: function(type, des, val) {
            let newItem, ID;

            // Create a new id

            if (data.allItem[type].length > 0) {
            ID = data.allItem[type][data.allItem[type].length - 1].id + 1
            }else{
                ID = 0;
            }

            // Create new item beased on 'inc' or 'exp' type
            if (type === 'exp') {
           newItem = new Expense(ID, des, val);
            }else if (type === 'inc') {
           newItem = new Income(ID, des, val);
            }

            // push it into our data structure
            data.allItem[type].push(newItem);

            // Return the new element
            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    };

})();

// UI CONTROLLER
let UIController = (function() {

    let DOMstrins = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue:'.add__value',
        inputBtn: '.add__btn'
    }

 return{
     getinput: function() {
        return{
         type:document.querySelector(DOMstrins.inputType).value,
         description:document.querySelector(DOMstrins.inputDescription).value,
         value:document.querySelector(DOMstrins.inputValue).value
        };
     },

     getDOMstring: function() {
         return DOMstrins;
     }
 };

})();


// GLOBAL APP CONTROLLER
let controller = (function(budgetctrl, UIctrl) {

    let DOM = UIctrl.getDOMstring();

    let ctrlAddItem = function() {
        let input, newItem;
 // 1. Get the filed input data
  input = UIctrl.getinput();

 // 2. Add the item to the budget controller
  newitem = budgetctrl.addItem(input.type, input.description, input.value);

 // 3. Add the item to the ui

 // 4. Calculate the budget

 // 5. Display the budget on the ui

    }

document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)


document.addEventListener('keypress', function(event) {

    if (event.keycode === 13 || event.which === 13) {
        ctrlAddItem();
    }
});

})(budgetController, UIController);