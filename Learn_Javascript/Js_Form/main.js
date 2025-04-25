// đối tượng Validator
function Validator(options){
    function getParent(element, selector) {
        while (element.parentElement) {
           if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    var selectorRules = {};
    // hàm thực hiện validate
    function validate(inputElement, rule){
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMesssage;
        // lấy ra các rule của selector
        var rules = selectorRules[rule.selector];
        // lặp qua từng rule và kiểm tra
        // nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; ++i){
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMesssage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMesssage = rules[i](inputElement.value);
            }
            if (errorMesssage) break;
        }

        if (errorMesssage) {
            errorElement.innerText = errorMesssage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        }else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMesssage; // trả về true nếu không có lỗi
    }

    // lấy ra form element trong DOM
    var formElement = document.querySelector(options.form);
    if(formElement){
        // khi submit form
        formElement.onsubmit = function(e){
            var isFormValid = true;
            e.preventDefault(); // ngăn chặn hành vi submit mặc định của form
            // lặp lại từng rule và validate
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                var isValid=validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });
            
            if (isFormValid) {
                if (typeof options.onsubmit === 'function'){
                    // trường hợp submit với js
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        switch (input.type){
                            case 'radio':
                                if (input.matches(':checked')) {
                                    values[input.parentElement] = formElement.querySelector('input[name="'+ input.name+'"]:checked').value;
                                } 

                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) return values

                                if (!Array.isArray(values[input.name])){
                                    values[input.name] = [];
                                }
                                
                                values[input.name].push(input.value)
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value
                        }
                        return values;
                    }, {});

                    options.onsubmit(formValues);                        
                } 

                // else {
                //     // trường hợp submit với hành vi mặc định
                //     formElement.submit();
                // }
            }
        }

        options.rules.forEach(function(rule){

            // lưu lại các rule cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            // lặp qua từng input và xử lý (lắng nghe sự kiện blur, input,...)
            Array.from(inputElements).forEach(function (inputElement) {
             // xử lý trường hợp blur ra ngoài
                inputElement.onblur = function(){
                    validate(inputElement, rule);
                }

                // xử lý trường hợp người dùng nhập vào ô input
                inputElement.oninput = function(){
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            });

            
        })


    }
}

// định nghĩa rule
Validator.isRequired = function(selector){
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        }
    }
}

Validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function(value) {
            var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        }
    }
}

Validator.minLength = function(selector,min){
    return {
        selector: selector,
        test: function(value) {
            return value.length >=min ? undefined : `bạn cần nhập tối thiểu ${min} ký tự`;
        }
    }
}

Validator.isConfirmed = function(selector,getConfirmValue, message){
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}