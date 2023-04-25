const validateEmail = (email) => {
  const re =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return re.test(email);
};
const ContainsNumber = (str) => {
  const re = /[0-9]/;
  return re.test(str);
};
const phonenumber = (inputtxt) => {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (inputtxt.value.match(phoneno)) {
    return true;
  } else {
    return false;
  }
};

export function typeError(data) {
  if (data.type) {
    return true;
  } else {
    return false;
  }
}
export function titleError(data) {
  if (
    data.title &&
    data.first_name &&
    data.last_name &&
    data.father_name &&
    !ContainsNumber(data.first_name) &&
    !ContainsNumber(data.first_name) &&
    !ContainsNumber(data.last_name) &&
    !ContainsNumber(data.father_name)
  ) {
    return true;
  } else {
    return false;
  }
}
export function genderError(data) {
  if (
    data.gender &&
    data.dob &&
    data.pod &&
    data.telephone &&
    data.email &&
    !ContainsNumber(data.pod) &&
    ContainsNumber(data.telephone) &&
    validateEmail(data.email)
  ) {
    return true;
  } else {
    return false;
  }
}
export function nationalityError(data) {
  if (
    data.nationality &&
    data.hasSpecialNeeds &&
    !ContainsNumber(data.nationality)
  ) {
    return true;
  } else {
    return false;
  }
}
export function AddressError(data) {
  if (
    data.district &&
    data.city &&
    data.street &&
    data.building &&
    !ContainsNumber(data.city)
  ) {
    return true;
  } else {
    return false;
  }
}
export function FirmError(data) {
  if (
    data.firm_id &&
    data.firm_address &&
    data.position_held &&
    !ContainsNumber(data.position_held) &&
    !ContainsNumber(data.firm_address)
  ) {
    return true;
  } else {
    return false;
  }
}
export function QualificationError(data) {
  if (data.qualification_id.length > 0) {
    return true;
  } else {
    return false;
  }
}
export function errorE(data) {
  let error = {};
  if (!data.type) {
    error.type = "this field is required";
  }
  return error;
}
export function errorP(data) {
  let error = {};
  if (!data.title) {
    error.title = "this field is required";
  }

  if (!data.first_name) {
    error.first_name = "this field is required";
  }
  if (data.first_name && ContainsNumber(data.first_name)) {
    error.first_name = "not letter";
  }
  if (!data.last_name) {
    error.last_name = "this field is required";
  }
  if (data.last_name && ContainsNumber(data.last_name)) {
    error.last_name = "not letter";
  }
  if (!data.father_name) {
    error.father_name = "field is required";
  }
  if (data.father_name && ContainsNumber(data.father_name)) {
    error.father_name = "not letter";
  }
  return error;
}
export function errorP1(data) {
  let error = {};
  if (!data.gender) {
    error.gender = "field is required";
  }
  if (!data.dob) {
    error.dob = "field is required";
  }
  if (!data.pod) {
    error.pod = "field is required";
  }
  if (data.pod && ContainsNumber(data.pod)) {
    error.pod = "not letter";
  }
  if (!data.telephone) {
    error.telephone = "field is required";
  }
  if (
    data.telephone &&
    !ContainsNumber(data.telephone) &&
    phonenumber(data.telephone)
  ) {
    error.telephone = "not letter";
  }
  if (!data.email) {
    error.email = "field is required";
  }
  if (data.email && !validateEmail(data.email)) {
    error.email = "invalid email format!";
  }

  return error;
}
export function errorP2(data) {
  let error = {};
  if (!data.nationality) {
    error.nationality = "this field is required";
  }
  if (data.nationality && ContainsNumber(data.nationality)) {
    error.nationality = "not letter";
  }
  if (data.hasSpecialNeeds !== 0 && data.hasSpecialNeeds !== 1) {
    error.hasSpecialNeeds = "this field is required";
  }
  return error;
}
export function errorAddress(data) {
  let error = {};
  if (!data.district) {
    error.district = "this field is required";
  }
  if (!data.city) {
    error.city = "this field is required";
  }
  if (data.city && ContainsNumber(data.city)) {
    error.city = "not letter";
  }
  if (!data.street) {
    error.street = "this field is required";
  }
  if (!data.building) {
    error.building = "this field is required";
  }
  return error;
}
export function errorFirm(data) {
  let error = {};
  if (!data.firm_id) {
    error.firm_id = "this field is required";
  }
  if (!data.firm_address) {
    error.firm_address = "this field is required";
  }
  if (data.firm_address && ContainsNumber(data.firm_address)) {
    error.firm_address = "not letter";
  }
  if (!data.position_held) {
    error.position_held = "this field is required";
  }
  if (data.position_held && ContainsNumber(data.position_held)) {
    error.position_held = "not letter";
  }
  return error;
}
export function errorQualification(data) {
  let error = {};
  if (data.qualification_id.length < 1) {
    error.qualification_id = "this page is required";
  }
  return error;
}
