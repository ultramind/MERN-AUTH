import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/validate";

import styles from "../styles/Username.module.css";
import extend from "../styles/Extend.module.css";

export default function Profile() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "admin@gmail.com",
      address: "",
    },
    validate: profileValidation,
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
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              You can Update your profile here
            </span>
          </div>

          {/* form */}
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <div className="flex w-3/4 gap-10">
                <input
                  type="text"
                  className={styles.textbox}
                  placeholder="Firstname"
                  {...formik.getFieldProps("firstname")}
                />
                <input
                  type="text"
                  className={styles.textbox}
                  placeholder="Lastname"
                  {...formik.getFieldProps("lastname")}
                />
              </div>
              <div className="flex w-3/4 gap-10">
                <input
                  type="email"
                  className={styles.textbox}
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                <input
                  type="text"
                  className={styles.textbox}
                  placeholder="Mobile"
                  {...formik.getFieldProps("mobile")}
                />
              </div>
              <input
                type="text"
                className={styles.textbox}
                placeholder="Address"
                {...formik.getFieldProps("address")}
              />
              <button className={`bg-indigo-500 ${styles.btn}`} type="submit">
                Update
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Come back later?
                <Link to="/" className="text-red-400">
                  Logout
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
