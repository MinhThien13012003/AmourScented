function validateForm() {
            
    var firstName = Name.value.trim();    
    var num = Phone.value.trim();
    var email = Email.value.trim();
    


    var isValid = true;

    if (firstName === '') {
        nameErrorMessage.textContent = 'Vui lòng nhập tên của bạn.';
        isValid = false;
    } else {
        nameErrorMessage.textContent = '';
        Name.value='';
    }


    if (num === '') {
        phoneErrorMessage.textContent = 'Vui lòng nhập số điện thoại của bạn.';
        isValid = false;
    } else {
        phoneErrorMessage.textContent = '';
        Phone.value='';
    }

    if (!validateEmail(Email.value)) {
        emailErrorMessage.textContent = 'Vui lòng nhập một địa chỉ email hợp lệ.';
        isValid = false;
    } else {
        emailErrorMessage.textContent = '';
        Email.value='';
    }
    
    if (isValid) {
        alert('Amour sẽ liên hệ bạn sớm nhất nhé.');
    }

}

function validateEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

