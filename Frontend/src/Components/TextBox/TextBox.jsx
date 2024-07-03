import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export const TextBox = (props) => {
  return (
    <div className="mb-3 flex flex-col sm:align-middle justify-center ">
      <p className="flex mb-2 text-md max-sm:flex max-sm:w-[80vw]">
        {props.label}
      </p>
      <div className="flex items-center">
        <input
          list="ice"
          placeholder={props.placeholder}
          className={
            props.invalid
              ? "h-10 rounded-md w-[30rem] pl-3 focus:ring-0 border-2 border-red-500 focus:outline-red-500 mb-1 placeholder:text-red-500 placeholder:focus:text-gray-600 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 text-sm max-sm:flex max-sm:flex-col max-sm:self-center max-sm:align-middle max-sm:w-[80vw] "
              : "h-10 rounded-md w-[30rem] pl-3 focus:ring-0 border-2 border-gray-200 focus:outline-gray-200 mb-2 placeholder:text-gray-400 placeholder:focus:text-gray-600 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 text-sm max-sm:flex max-sm:w-[80vw] max-sm:flex-col max-sm:self-center max-sm:align-middle"
          }
          type={
            (props.type === "password") & props.visible ? "true" : props.type
          }
          required={props.required}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
        />
        {props.type === "password" && (
          <div
            className="m-1 mb-3 cursor-pointer"
            onClick={(e) => {
              props.setVisible(!props.visible);
            }}
          >
            {props.visible ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        )}
      </div>
      <p
        className={
          props.invalid ? "flex  text-red-500  text-xs ml-2 " : " hidden"
        }
      >
        *Please enter valid {props.label}
      </p>
    </div>
  );
};
