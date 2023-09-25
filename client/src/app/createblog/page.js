"use client";
import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../../../Components/Footer/Footer";
import "./createblog.css";
import defualt from "../../../assets/default.png";

import Api from "../../config/api.js";
import {
  notifySuccess,
  notifyError,
} from "../../../Components/Notify/Notify.jsx";


export default function createblog() {
  const [selectedImage, setSelectedImage] = useState(null);

  const imgField = useRef();

  const uploadImg = () => {
    imgField.current.click();
  };

  const fileUpload = (e) => {
    let image = e.target.files[0];
    setSelectedImage(URL.createObjectURL(image));
    formik.setFieldValue("image", image);
  
     
    };
  async function handleBolg(values) {
    try {
      await Api.post('/blog',values ,{
        headers:{
          'Content-Type':'multipart/form-data' 
        }
      })
      notifySuccess('blog successfully created')
      formik.resetForm();

    } catch (error) {
      setLoading(false);
      let errorMessage =error?.response?.data?.message || error?.response?.data?.error;
        
      notifyError(errorMessage);
      
    }
    console.log(values);
    
  }
  let userSchema = Yup.object().shape({
    title: Yup.string().required("Title is Required  !!"),
    content: Yup.string().required("Content is Required  !!"),
    image: Yup.string().required("image is Required  !!"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      image: null,
    },
    validationSchema: userSchema,
    onSubmit: handleBolg,
  });
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="  m-5 p-5">
          <h1 className="text-bold text-3xl mb-4 text-center">
            Create Your Own Blog Now{" "}
          </h1>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
          >
            <h1 class="text-2xl font-bold text-center">Create Blog</h1>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-500">{formik.errors.title}</div>
              ) : null}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Title"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="content"
              >
                Content
              </label>
              {formik.touched.content && formik.errors.content ? (
                <div className="text-red-500">{formik.errors.content}</div>
              ) : null}
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="content"
                type="text"
                name="content"
                value={formik.values.content}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Content"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Image
              </label>
              {formik.touched.image && formik.errors.image ? (
                <div className="text-red-500">{formik.errors.image}</div>
              ) : null}
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="file"
                style={{ display: "none" }}
                ref={imgField}
                name="image"
                onChange={fileUpload}
                onBlur={formik.handleBlur}
                placeholder="image"
              />
              {/* {selectedImage && <img src={selectedImage} alt="Image" />} */}
              <img src={selectedImage || defualt.src} alt="image" />
            </div>
            <div className="flex items-center  justify-center">
              <button
                className="btn mb-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={uploadImg}
              >
                Upload Image
              </button>
            </div>
            <div className="flex items-center  justify-center">
              <button
                className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create Blog
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
