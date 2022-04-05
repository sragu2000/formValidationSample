function formValidation() {
  var uid = document.frm.userid;
  var password = document.frm.password;
  var Name = document.frm.Name;
  var address = document.frm.address;
  var country = document.frm.country;
  var ZipCode = document.frm.ZipCode;
  var email = document.frm.email;
  var male = document.frm.male;
  var female = document.frm.female;
  if (userid_validation(uid, 5, 12)) {
    if (password_validation(password, 7, 12)) {
      if (allLetter(Name)) {
        if (alphanumeric(address)) {
          if (countryselect(country)) {
            if (allnumeric(ZipCode)) {
              if (ValidateEmail(email)) {
                if (validsex(male, female)) {
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}
function userid_validation(uid, mx, my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert(
      "User Id should not be empty / length be between " + mx + " to " + my
    );
    uid.focus();
    return false;
  }
  return true;
}
function password_validation(password, mx, my) {
  var password_len = password.value.length;
  if (password_len == 0 || password_len >= my || password_len < mx) {
    alert(
      "Password should not be empty / length be between " + mx + " to " + my
    );
    password.focus();
    return false;
  }
  return true;
}
function allLetter(Name) {
  var letters = /^[A-Za-z]+$/;
  if (Name.value.match(letters)) {
    return true;
  } else {
    alert("Username must have alphabet characters only");
    Name.focus();
    return false;
  }
}
function alphanumeric(address) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (address.value.match(letters)) {
    return true;
  } else {
    alert("User address must have alphanumeric characters only");
    address.focus();
    return false;
  }
}
function countryselect(country) {
  if (country.value == "Default") {
    alert("Select your country from the list");
    country.focus();
    return false;
  } else {
    return true;
  }
}
function allnumeric(ZipCode) {
  var numbers = /^[0-9]+$/;
  if (ZipCode.value.match(numbers)) {
    return true;
  } else {
    alert("ZIP code must have numeric characters only");
    ZipCode.focus();
    return false;
  }
}
function ValidateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    email.focus();
    return false;
  }
}
function validsex(male, female) {
  x = 0;

  if (male.checked) {
    x++;
  }
  if (female.checked) {
    x++;
  }
  if (x == 0) {
    alert("Select Male/Female");
    male.focus();
    return false;
  } else {
    alert("Form Succesfully Submitted");
    window.location.reload();
    return true;
  }
}
