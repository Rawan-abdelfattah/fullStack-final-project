"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Changepassword from "../../../Components/Changepassword/Changepassword";
import './login.css'
export default function login() {
  function handleLogin(values) {
    console.log(values);
    formik.resetForm();
  }
  let userSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is Required  !!"),
    password: Yup.string().required("Password is Required  !!"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: handleLogin,
  });
  return (
    <>

    <div className="login-bg h-screen ">


    <div className="flex justify-center items-center   ">
      <div className="w-full max-w-xs ">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20 "
          onSubmit={formik.handleSubmit}
        >
          <h1 class="text-2xl font-bold text-center">Login</h1>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            {formik.touched.email && formik.errors.email ? (
              <><div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
               
              <span class="block sm:inline">{formik.errors.email}</span>
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              </span>
            </div></>
             ) : null}
            <input
              className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            {formik.touched.password && formik.errors.password ? (
              <><div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
               
              <span class="block sm:inline">{formik.errors.password}</span>
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              </span>
            </div></>
            ) : null}
            <input
              className="mt-4 shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              <Changepassword />
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          ©2020 Rawan Blogs Corp. All rights reserved.
        </p>
      </div>
    </div>    </div>
     </>
  );
}
