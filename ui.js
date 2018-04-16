
function _ui_solve_numbers(trickshot) {
    var numbers = [];

    for (var i = 1; i <= 6; i++) {
        var x = parseInt(document.getElementById('num'+i).value, 10);

        if (!isNaN(x))
            numbers.push(x);
    }

    var target = parseInt(document.getElementById('target').value, 10);

    document.getElementById('numbers-answer').innerHTML = solve_numbers(numbers, target, trickshot);
}

function ui_solve_numbers() {
    _ui_solve_numbers(false);
}




