document.getElementById("phone").addEventListener("input", (e) => {
    let [v , p] = format_number(e.target);
    e.target.value = v
    e.target.setSelectionRange(p,p)
  });

function format_number(input){
    let value = input.value
    let pos = input.selectionStart;
    console.log(pos);

    value = value.replace(/[()-]/g, '');
    
    let formattedInput = value
    formattedInput = formattedInput.split("")

    if (formattedInput.length > 3) {
        formattedInput = ['(', ...formattedInput.slice(0,3), ')', ...formattedInput.slice(3)]
    }
    
    if (formattedInput.length > 8) {
        formattedInput = [...formattedInput.slice(0,8), '-', ...formattedInput.slice(8)]
    }
    value = formattedInput.join("")
    input = input.setSelectionRange(pos, pos)
    return [value, pos]
}

