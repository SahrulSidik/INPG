function insert(num) {
    document.forms[0].elements.textview.value = document.forms[0].elements.textview.value + num;
}

// The eval() function evaluates JavaScript code represented as a string.
function equal() {
    var expression = document.forms[0].elements.textview.value;
    if (expression) {
        expression = eval(document.forms[0].elements.textview.value);
        document.forms[0].elements.textview.value = expression;
    }
}

function clean() {
    document.forms[0].elements.textview.value = "";
}

function back() {
    var expression = document.forms[0].elements.textview.value;
    document.forms[0].elements.textview.value = expression.substring(0, expression.length - 1);
}
