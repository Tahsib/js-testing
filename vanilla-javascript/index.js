document.getElementById("phone").oninput = function() {format_number()};

function format_number(){
    const phone = document.getElementById("phone");

    phone.value = phone.value.replace(/[()-]/g, '');

    let formattedInput = phone.value
    formattedInput = formattedInput.split("")

    if (formattedInput.length > 3) {
        formattedInput = ['(', ...formattedInput.slice(0,3), ')', ...formattedInput.slice(3)]
    }
    
    if (formattedInput.length > 8) {
        formattedInput = [...formattedInput.slice(0,8), '-', ...formattedInput.slice(8)]
    }
    phone.value = formattedInput.join("")
}

