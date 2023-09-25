"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./register.css";
import Api from "../../config/api.js";
import {
  notifySuccess,
  notifyError,
} from "../../../Components/Notify/Notify.jsx";
import { useRouter } from "next/navigation";
export default function register() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  let userSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required  !!"),
    lastName: Yup.string().required("Last Name is Required  !!"),
    email: Yup.string().email().required("Email is Required  !!"),
    age: Yup.string().required("age is Required  !!"),
    password: Yup.string().required("Password is Required  !!"),
    rePassword: Yup.string().required("rePassword is Required  !!"),
  });
  async function handleRegister(values) {
    if(values.password!= values.rePassword) return notifyError("Password must be the same")
        delete values.rePassword
      delete values.age

 setLoading(true);
    Api.post("/auth/signup", values)
      .then(() => {
   
        notifySuccess("Account has been created successfully !!");
        router.push("/login");
        setLoading(false);
        formik.resetForm();
      }).catch((error) => {
        console.log(error);
        console.log(error);
        setLoading(false);
        let errorMessage = error?.response?.data?.message || error?.response?.data?.error;
        console.log(
           "🚀 ~ file: page.js:27 ~ handleRegister ~ errorMessage:",
           errorMessage
         );

        notifyError(errorMessage);
      });

    
  }
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      password: "",
      rePassword: "",
    },
    validationSchema: userSchema,
    onSubmit: handleRegister,
  });
  return (
    <div className="register-bg">
      <div className="flex items-center h-screen justify-center ">
        <form
          className="px-8 pt-6 pb-8 mb-4 bg-white shadow-lg rounded "
          onSubmit={formik.handleSubmit}
        >
          <h1 class="text-2xl font-bold text-center ">Register</h1>
          {formik.errors.firstName && formik.touched.firstName ? (
            <div className="text-red-500  ">{formik.errors.firstName}</div>
          ) : null}

          <div className="relative z-0 w-80 mb-6 group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mb-4 block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="firstName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          {formik.errors.lastName && formik.touched.lastName ? (
            <div className="text-red-500  ">{formik.errors.lastName}</div>
          ) : null}

          <div className="relative z-0 w-80 mb-6 group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="lastName"
              className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-500  ">{formik.errors.email}</div>
          ) : null}

          <div className="relative z-0 w-80 mb-6 mt-4 group">
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          {formik.errors.age && formik.touched.age ? (
            <div className="text-red-500  ">{formik.errors.age}</div>
          ) : null}

          <div className="relative z-0 w-80 mb-6 group">
            <input
              type="number"
              name="age"
              id="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="age"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Age
            </label>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <div className="text-red-500  ">{formik.errors.password}</div>
          ) : null}

          <div className="relative z-0 w-80 mb-6 group">
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="text-red-500  ">{formik.errors.rePassword}</div>
          ) : null}

          <div className="relative z-0 w-80 mb-6 group">
            <input
              type="password"
              name="rePassword"
              id="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="rePassword"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-80 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
