import React, { useState, useEffect } from "react";
import Documents from "../../Components/Documents/Documents";
import { HomeAddress } from "../../Components/HomeAddress/HomeAddress";
import { Login } from "../../Components/Login/Login";
import { OtpVerification } from "../../Components/OtpVerification/OtpVerification";
import PersonalDetails from "../../Components/PersonalDetails/PersonalDetails";
import HomeServices from "../../Components/HomeServices/HomeServices";

export const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Load the saved step from local storage when the component mounts
  useEffect(() => {
    const savedStep = localStorage.getItem('currentStep');
    if (savedStep) {
      setCurrentStep(Number(savedStep));
    }
  }, []);

  // Save the current step to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('currentStep', currentStep);
  }, [currentStep]);

  const handleSubmit = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <HomeServices onSubmit={handleSubmit} />;
      case 1:
        return <Documents onSubmit={handleSubmit} />;
      case 2:
        return <PersonalDetails onSubmit={handleSubmit} />;
      case 3:
        return <HomeAddress onSubmit={handleSubmit} />;
      case 4:
        return <Login onSubmit={handleSubmit} />;
      case 5:
        return <OtpVerification onSubmit={handleSubmit} />;
      default:
        return <HomeServices onSubmit={handleSubmit} />;
    }
  };

  return (
    <>
      {renderStep()}
    </>
  );
};
