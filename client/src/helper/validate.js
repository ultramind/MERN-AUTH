import toast from "react-hot-toast";

// validate Username
export async function usernameValidate(values){
  const errors = usernameVerify({}, values);
  return errors;
};

// verify username
function usernameVerify(error = {}, values){
  if (!values.username) {
    error.username = toast.error("Username required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }
  return error;
};
