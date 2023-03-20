import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidate } from "../helper/validate";

import styles from "../styles/Username.module.css";

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "admin@1234",
      confirm_pwd: "admin@1234",
    },
    validate: resetPasswordValidate,
    validateOnBlur: false,
    validateOnMount: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "50%" }}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new Password
            </span>
          </div>

          {/* form */}
          <form className="py-20" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                type="text"
                className={styles.textbox}
                placeholder="New Password"
                {...formik.getFieldProps("password")}
              />
              <input
                type="text"
                className={styles.textbox}
                placeholder="Repeat Password"
                {...formik.getFieldProps("confirm_pwd")}
              />
              <button className={`bg-indigo-500 ${styles.btn}`} type="submit">
                Reset
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a member{" "}
                <Link to="/recovery" className="text-red-400">
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
