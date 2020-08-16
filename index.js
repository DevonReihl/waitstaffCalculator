
//HTML template
function calculatorTemplate (){
  return `<h1>Waitstaff Calculator</h1>
  <section>
    <div class="container">
      <div class="container-item">
        <h2>Enter Meal Details</h2>
        <div>
          <form id="meal-cost">
            <label for="meal-price">Base Meal Price: $</label>
            <input id="meal-price" type="number" min="1" step="0.01" required><br>
            <label for="tax-rate">Tax Rate: %</label>
            <input id="tax-rate" type="number" min="1" required><br>
            <label for="tip-percentage">Tip Percentage: %</label>
            <input id="tip-percentage" type="number" min="1" required><br>

            <button id="start-button" type="submit">Submit</button>
            <button id="cancel-button" type="cancel">Cancel</button>
          </form>
        </div>
        
      </div>
      <div id="charges" class="container-item">
          
  <div class="container-item2">
    <h2>Customer Charges</h2>
    <form id="total-cost">
      <label for="subtotal">Subtotal:</label>
      <input id="subtotal" type="text" placeholder="0.00"><br>
      <label for="tip">Tip</label>
      <input id="tip" type="text" placeholder="0.00"><br>
      <label for="total">Total</label>
      <input id="total" type="text" placeholder="0.00"><br>

    </form>
  </div>
  <div class="container-item3">
    <h2>My Earning Info</h2>
    <form id="total-earning">
      <label for="tip-total">Tip Total</label>
      <input id="tip-total" type="text" placeholder="0.00"><br>
      <label for="meal-count">Meal Count</label>
      <input id="meal-count" type="text" placeholder="0"><br>
      <label for="avg-tip-per-meal">Average Tip Per Meal</label>
      <input id="avg-tip-per-meal" type="text" placeholder="0.00"><br>
    </form>
  </div>
  
</div>
      
    </div>
    <div class="reset">
      <button id="reset-button" type="reset">Reset</button>
    </div>  
  </section>`;
}


//render
function renderPage(){
  $('main').html(calculatorTemplate());
}
function handleSubmit(){
  $('#meal-cost').submit(function(event){
    event.preventDefault();
    const price = $('#meal-price').val();
    console.log(price);
    // const tax = ($('#tax-rate').val()/100 +1);
    // const tip = ($('#tip-percentage').val()/100 +1);
   

  });
}

//function for call backs
function calculator(){
  handleSubmit(),
  renderPage();

}

//call function
$(calculator);