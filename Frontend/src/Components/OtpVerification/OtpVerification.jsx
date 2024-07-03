import React, { useState, useRef } from "react";
import { GiConfirmed } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

export const OtpVerification = () => {
  const [selected, setSelected] = useState("");
  const [selectedError, setSelectedError] = useState(false);
  const [otpChoice, setOtpChoice] = useState(true);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState(false);
  const inputRefs = useRef([]);
  let mobile = "9815992941";
  let email = "vkapoor2_be21@thapar.edu";

  function maskMobileNumber(number) {
    let lastThreeDigits = number.slice(-3);
    let maskedNumber = "*******" + lastThreeDigits;
    return maskedNumber;
  }

  function maskEmail(email) {
    let atIndex = email.indexOf("@");

    let localPart = email.slice(0, atIndex);

    let visiblePart = localPart.slice(-3);

    let domainPart = email.slice(atIndex);

    let maskedEmail = "*********" + visiblePart + domainPart;
    return maskedEmail;
  }

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus next input
      if (value === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      } else if (index < 5 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData
      .getData("text")
      .slice(0, 6)
      .replace(/[^0-9]/g, "");
    if (pasteData.length === 6) {
      setOtp(pasteData.split(""));
    }
  };

  const handleOtp = () => {
    if (otp.includes("")) {
      setOtpError(true);
    } else {
      setOtpError(false);
    }
  };

  // Masked credentials
  let maskedMobile = maskMobileNumber(mobile);
  let maskedEmail = maskEmail(email);
  return (
    <>
      <div className="flex align-middle justify-center ">
        <div className="p-24 pt-40 z-10 max-sm:p-10 max-sm:flex max-sm:w-screen max-md:w-screen max-sm:flex-col max-sm:justify-center sm:align-middle items-center bg-white shadow-md rounded-md h-screen flex-col w-[48rem]">
          <div className="mt-10">
            <div className="flex flex-row place-items-center font-bold mb-4 items-center">
              <div className="h-6 align-middle px-1 justify-center items-center bg-blue-800 text-white flex flex-row rounded-md">
                <GiConfirmed size={15} />
              </div>
              <div className="pl-3 text-3xl">One-time password</div>
            </div>
          </div>
          {otpChoice ? (
            <>
              <div className="text-md">
                Please select how you'd like to receive your verification code
              </div>
              {selectedError && (
                <div className="text-red-400  flex justify-center mt-4">
                  * You must choose one of the listed methods.
                </div>
              )}
              <div className="mt-8 flex justify-around flex-wrap">
                {selected === "email" ? (
                  <div className="w-56 flex flex-col bg-blue-600 justify-center items-center rounded-md shadow-lg drop-shadow-md text-white m-4 p-2">
                    <p className="flex  items-center">
                      <MdEmail /> Email
                    </p>
                    <p>{maskedEmail}</p>
                  </div>
                ) : (
                  <div
                    className="w-56 flex flex-col bg-white   justify-center items-center rounded-md shadow-lg text-gray-400 drop-shadow-md m-4 p-2 cursor-pointer"
                    onClick={() => {
                      setSelected("email");
                    }}
                  >
                    <p className="flex  items-center">
                      <MdEmail /> Email
                    </p>
                    <p>{maskedEmail}</p>
                  </div>
                )}
                {selected === "phone" ? (
                  <div className="w-56 flex flex-col bg-blue-600 justify-center items-center rounded-md shadow-lg text-white m-4 p-2 ">
                    <p className="flex  items-center">
                      <MdLocalPhone /> Phone
                    </p>
                    <p>{maskedMobile}</p>
                  </div>
                ) : (
                  <div
                    className="w-56 flex flex-col bg-white    justify-center items-center rounded-md shadow-lg text-gray-400 drop-shadow-md m-4 p-2 cursor-pointer "
                    onClick={() => {
                      setSelected("phone");
                    }}
                  >
                    <p className="flex  items-center cursor-pointer">
                      <MdLocalPhone /> Phone
                    </p>
                    <p>{maskedMobile}</p>
                  </div>
                )}
              </div>

              <button
                className="bg-blue-800 hover:bg-blue-700 h-10 w-[10rem] max-sm:w-[7rem] max-sm:h-8 rounded-md font-semibold text-white  shadow-md mt-16"
                onClick={() => {
                  if (selected !== "") {
                    setOtpChoice(false);
                  } else {
                    setSelectedError(true);
                  }
                }}
              >
                <p>Continue</p>
              </button>
            </>
          ) : (
            <>
              <div className="text-md">
                A code has been sent to {selected} linked to your account
              </div>

              <div onPaste={handlePaste} className="flex mt-8">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="flex w-14 h-14  flex-row text-xl text-center outline-blue-700 border-blue-200 border-2 rounded-md mx-2"
                  />
                ))}
              </div>
              {otpError && (
                <div className="text-red-400  flex ml-3 mt-4">
                  The entered OTP is invalid.
                </div>
              )}
              <div className="flex justify-between mt-16">
                <p
                  className=" cursor-pointer text-blue-700 text-md"
                  onClick={() => {
                    setOtpChoice(true);
                    setOtp(Array(6).fill(""));
                  }}
                >
                  go back
                </p>
                <button
                  className="bg-blue-800 hover:bg-blue-700 h-10 w-[10rem] max-sm:w-[7rem] max-sm:h-8 rounded-md font-semibold text-white  shadow-md"
                  onClick={handleOtp}
                >
                  <p>Continue</p>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
