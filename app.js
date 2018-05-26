//Budget Controller
var budgetController = (function() {
    
    //Some code
    
})();


// UI Controller
var UIController = (function() {
    
    //some code
    
})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrlr) {

    var ctrlAddItem = function(){
        
        // 1. Get the field input data
        
        // 2. Add the itme to the budget controller
        
        //3. Add the item to the UI
        
        //4. Calulate the budget
        
        //5. Display the budget on the UI
        
        console.log('It works')
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
        
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        
    });
    
})(budgetController, UIController);

