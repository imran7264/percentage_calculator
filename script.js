document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
});


function calculateDiscout() {


    let totalPrice = parseFloat(document.querySelector('#total-price').value);
    let discount = parseFloat(document.querySelector('#discount').value);
    let priceAfterDiscount = document.querySelector('#price-after-discount');
    let discountedPrice = document.querySelector('#discounted-price');

    if( !totalPrice || ! discount) {
        showToast('salmon', 'please enter valid number');
        return
    } 
    else if(discount > totalPrice) {
        showToast('orange', 'Discount price should be less than totalPrice')
        return
    }


    let calculation = (totalPrice * discount) / 100;
    discountedPrice.value = calculation.toFixed(2);

    let calculateDiscout = totalPrice - calculation;

    priceAfterDiscount.value = calculateDiscout.toFixed(2);
}

function resetForm() {
    let form = document.querySelector('#form')
    form.reset();
}

  function showToast(color, message) {
    const toastEl = document.getElementById('toast');
    const toastBody = document.getElementById('toast-body');
  
    toastBody.innerHTML = message;
    toastEl.style.backgroundColor = color;
  
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }

