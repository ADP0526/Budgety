//Budget Controller
var budgetController = (function() {
    
    //Some code
    
})();

// UI Controller
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };
    
    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrlr) {

    var setUpEventListeners = function() {
        var DOM = UICtrlr.getDOMstrings();
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event) {
        
            if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
            }
        });
    };
        
    var ctrlAddItem = function(){
        
        //1. Get the field input data
        var input = UICtrlr.getinput();
        
        //2. Add the itme to the budget controller
        
        //3. Add the item to the UI
        
        //4. Calulate the budget
        
        //5. Display the budget on the UI
        
    }
    
    return {
        init: function() {
            console.log('Application has started.');
            setUpEventListeners();
        }
    };
    
})(budgetController, UIController);

controller.init()
