import toast from "react-hot-toast";

// validate Username
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
}
// validate Password
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

// validate Password
export async function resetPasswordValidate(values) {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Password not Match...!");
  }
  return errors;
}

export async function profileValidation(values) {
  const errors = emailVerify({}, values);
  return errors;
}

// *******************************************************************
// verify username
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }
  return error;
}

// verify password
function passwordVerify(error = {}, values) {
  if (!values.password) {
    error.password = toast.error("password required...!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Invalid password...!");
  } else if (values.password.length < 4) {
    error.password = toast.error("Invalid password...!");
  }
  return error;
}

function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email required...!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Invalid email address!");
  }
  return error;
}
