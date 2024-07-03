import React, { useState } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import { TextBox } from "../TextBox/TextBox";

export const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [showUsernameError, setShowUsernameError] = useState(false);
  const [password, setPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (username === "") {
      setShowUsernameError(true);
      return;
    }
    setShowUsernameError(false);
    if (password === "") {
      setShowPasswordError(true);
      return;
    }
    setShowPasswordError(false);
    onSubmit();
  };

  return (
    <>
      <div className="flex align-middle justify-center ">
        <div className="p-24 pt-40 z-10 max-sm:p-10 max-sm:flex max-sm:w-screen max-md:w-screen max-sm:flex-col max-sm:justify-center sm:align-middle items-center bg-white shadow-md rounded-md h-screen flex-col w-[48rem]">
          <div className="mt-10">
            <div className="flex flex-row place-items-center font-bold mb-10">
              <div className="h-6 align-middle px-1 justify-center items-center bg-blue-800 text-white flex flex-row rounded-md">
                <RiLoginCircleFill size={15} />
              </div>
              <div className="pl-3 text-3xl">Login</div>
            </div>
            <TextBox
              placeholder={"Enter your username"}
              title={""}
              type={"text"}
              required={true}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              invalid={showUsernameError}
              label="Username"
              name="username"
            />
            <TextBox
              placeholder={"Enter your password"}
              title={""}
              type={"password"}
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              invalid={showPasswordError}
              label="password"
              name="password"
              visible={passwordVisible}
              setVisible={setPasswordVisible}
            />
            <button
              className="bg-blue-800 hover:bg-blue-700 h-10 w-[10rem] max-sm:w-[7rem] max-sm:h-8 rounded-md font-semibold text-white mt-8 shadow-md"
              onClick={handleLogin}
            >
              <p>Submit</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
