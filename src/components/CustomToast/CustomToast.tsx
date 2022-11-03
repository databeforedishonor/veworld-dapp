import React, { FC } from "react"
import { ToastContainer, Zoom } from "react-toastify"

const CustomToast: FC = () => {
  return (
    <ToastContainer
      autoClose={5000}
      hideProgressBar={false}
      limit={1}
      newestOnTop={true}
      closeButton={false}
      closeOnClick={true}
      transition={Zoom}
      position={"bottom-right"}
      toastClassName={"toast-container"}
      rtl={false}
      pauseOnHover
    />
  )
}

export default CustomToast
