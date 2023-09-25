'use client'
 import { toast } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";

   const notifySuccess = (msg) => {
 
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER
    });
  };
  const notifyError = (msg) => {
 
    toast.error(msg, {
      position: toast.POSITION.TOP_LEFT
    });
  };
 
 export   {notifySuccess ,notifyError};