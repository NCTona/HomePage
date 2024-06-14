

function Validator(options) {
    var formElement = document.querySelector(options.form);


    if (formElement) {

        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.alert');
            var input = inputElement.parentElement.querySelector('.form-input');

            if (inputElement) {
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "border: 2px solid rgb(195, 89, 89);")
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "border: 2px solid #fffd8d;")
                    }
                }
                inputElement.oninput = function () {
                    errorElement.innerText = " ";
                    input.setAttribute("style", "border: 2px solid #b3ff3a;")
                }
            }
        })

    };
}




Validator.isUsername = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Vui lòng nhập username";
        }
    }
}

Validator.isPassword = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Vui lòng nhập password";
        }
    }
}

Validator({
    form: "#form",
    rules: [
        Validator.isUsername("#username"),
        Validator.isPassword("#password"),
    ],
});



