'use client'
import React, { useEffect } from "react";
import Footer from "../../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/redux/reducers/blog";
import domain from "@/config/domain";
import { Button } from "@mui/material";
import Updateblog from "../../../Components/Updateblog/Updateblog";
import { fetchUserData } from "@/redux/reducers/user";
import Api from "@/config/api";
import { notifyError, notifySuccess } from "../../../Components/Notify/Notify";

export default function AllBlogs() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.data);
  const user = useSelector((state) => state.user.data);

  const handleDelete = (_id) => {
    Api.delete(`/blog/${_id}`)
      .then(() => {
        notifySuccess("Blog deleted");
        dispatch(fetchBlogs());
      })
      .catch((error) => {
        let errorMessage =
          error?.response?.data?.message || error?.response?.data?.error;

        notifyError(errorMessage);
      });
  };

  useEffect(() => {
    dispatch(fetchBlogs());
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="m-5 p-5">
          <h1 className="text-bold text-3xl mb-6 text-center">All Blogs</h1>

          {blogs.map((blog, index) => (
            <div key={index} className="mt-4">
              <a
                href="#"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={domain + blog.image}
                  alt="blog image"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {blog.content}
                  </p>
                  <Updateblog />
                  <Button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => handleDelete(blog._id)}  // Pass the _id here
                  >
                    Delete Blog
                  </Button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
