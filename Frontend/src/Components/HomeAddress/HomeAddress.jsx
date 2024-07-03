import React, { useEffect, useState } from "react";
import { TextBox } from "../TextBox/TextBox";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import AddressImage from "./image-address.jpg";

export const HomeAddress = ({ onSubmit }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");
  const [address, setAddress] = useState("");
  const [showAddressError, setShowAddressError] = useState(false);
  const [showDialogBox, setShowDialogBox] = useState(false);
  const [houseNumber, setHouseNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [subBuilding, setSubBuilding] = useState("");
  const [BuildingName, setBuildingName] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [houseNumberError, setHouseNumberError] = useState(false);
  const [streetNameError, setStreetNameError] = useState(false);
  const [subBuildingError, setSubBuildingError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [pincodeError, setPincodeError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  const demoData = [
    { id: 1, address: "123 Main St, Springfield" },
    { id: 2, address: "456 Elm St, Shelbyville" },
    { id: 3, address: "789 Oak St, Capital City" },
    { id: 4, address: "101 Maple St, Ogdenville" },
    { id: 5, address: "202 Pine St, North Haverbrook" },
  ];

  useEffect(() => {
    const fetchSuggestions = () => {
      if (query.length >= 1) {
        const filteredSuggestions = demoData.filter((item) =>
          item.address.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleSuggestionClick = (address) => {
    setSelectedAddress(address);
    setAddress(address);
    setSuggestions([]);
    setQuery("");
  };

  const handleClick = () => {
    if (address === "") {
      setShowAddressError(true);
    } else {
      setShowAddressError(false);
      onSubmit();
    }
  };

  const handleAddressDelete = () => {
    setAddress("");
    setShowAddressError(false);
    setSelectedAddress("");
    setHouseNumber("");
    setBuildingName("");
    setCity("");
    setCountry("");
    setPincode("");
    setState("");
    setSubBuilding("");
    setStreetName("");
  };

  const handleRemoveAddress = () => {
    setHouseNumber("");
    setBuildingName("");
    setCity("");
    setCountry("");
    setPincode("");
    setState("");
    setSubBuilding("");
    setStreetName("");
  };

  const handleManualAddress = async () => {
    let flag = true;
    if (houseNumber === "") setHouseNumberError(true), (flag = false);
    if (subBuilding === "") setSubBuildingError(true), (flag = false);
    if (streetName === "") setStreetNameError(true), (flag = false);
    if (city === "") setCityError(true), (flag = false);
    if (pincode === "") setPincodeError(true), (flag = false);
    if (state === "") setStateError(true), (flag = false);
    if (country === "") setCountryError(true), (flag = false);

    if (flag) {
      setHouseNumberError(false);
      setSubBuildingError(false);
      setStreetNameError(false);
      setCityError(false);
      setPincodeError(false);
      setStateError(false);
      setCountryError(false);
      const addr = `${houseNumber}${
        BuildingName ? `, ${BuildingName}` : ""
      }, ${subBuilding}, ${streetName}, ${city}, ${pincode} ${country}`;
      setAddress(addr);
      setSelectedAddress(addr);
      setShowDialogBox(false);
    }

    // const response = await fetch(`http://localhost:3000/users/register`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     houseno: houseNumber,
    //     buildingno: BuildingName,
    //     subbuilding: subBuilding,
    //     street: streetName,
    //     city: city,
    //     postalcode: pincode,
    //     state: state,
    //     country: country,
    //   }),
    // });
    // console.log(response);
  };

  return (
    <div className="flex align-middle justify-center ">
      <div className="p-24 pt-40 z-10 max-sm:p-10 max-sm:flex max-sm:flex-col max-sm:justify-center sm:align-middle items-center bg-white shadow-md rounded-md h-screen flex-col w-[48rem]">
        <div className="mt-10">
          <div className="flex flex-row place-items-center font-bold mb-10">
            <div className="h-6 align-middle px-1  bg-blue-800 text-white flex flex-row rounded-md">
              02
            </div>
            <div className="pl-3 text-3xl">Home address</div>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="disabled">
          <TextBox
            placeholder={"Enter your address"}
            title={""}
            type={"text"}
            required={true}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            invalid={showAddressError}
            disabled={selectedAddress === "" ? false : true}
            label="Enter your current home address"
            name="address"
          />
          {suggestions.length > 0 && (
            <div className="absolute bg-blue-100 w-[30rem] border-2 border-blue-300 rounded-md px-4 py-2 overflow-y-scroll no-scrollbar max-sm:w-[80vw]">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className="cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion.address)}
                >
                  {suggestion.address}
                </div>
              ))}
            </div>
          )}
          {selectedAddress && (
            <div className="">
              <p>Your address</p>
              <div className="h-20 w-[30rem] max-sm:w-[80vw] max-sm:text-sm max-sm:h-16 bg-gray-200 rounded-md flex flex-row justify-between p-3">
                <p className="text-gray-500 select-none w-[20rem]">
                  {selectedAddress}
                </p>
                <div>
                  <MdDeleteOutline
                    color="#1e40af"
                    size={20}
                    onClick={handleAddressDelete}
                  />
                </div>
              </div>
            </div>
          )}
        </form>

        <p
          className="text-blue-400 flex cursor-pointer "
          onClick={() => setShowDialogBox(!showDialogBox)}
        >
          {selectedAddress
            ? "Change your address manually"
            : "Enter your address manually"}
        </p>
        <button
          className="bg-blue-800 h-10 w-[10rem] rounded-md mt-10 font-semibold text-white"
          onClick={handleClick}
        >
          <p>Submit</p>
        </button>
        {showDialogBox && (
          <>
            <div className="bg-black w-screen h-screen absolute transform -translate-x-1/2 -translate-y-1/2 border top-1/2 left-1/2 opacity-40 max-sm:invisible"></div>
            <div className="bg-white absolute p-4 text-center h-[35rem] max-sm:h-screen max-sm:w-screen w-[35rem] transform -translate-x-1/2 -translate-y-1/2 border top-1/2 left-1/2 z-20 opacity-100 rounded-md px-10 overflow-y-scroll no-scrollbar">
              <div className="flex justify-between py-6 mb-5">
                <p className="flex font-bold text-xl">
                  {address ? "Change Address" : "Enter Address"}
                </p>
                <button>
                  <MdOutlineClose
                    size={25}
                    onClick={() => setShowDialogBox(!showDialogBox)}
                  />
                </button>
              </div>
              <div className="flex flex-col align-middle justify-center">
                <TextBox
                  placeholder={"Enter your house number"}
                  title={""}
                  type={"text"}
                  required={true}
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                  invalid={houseNumberError}
                  disabled={!showDialogBox}
                  label="House/Flat number"
                />
                <TextBox
                  placeholder={"Enter your building name"}
                  title={""}
                  type={"text"}
                  required={true}
                  value={BuildingName}
                  onChange={(e) => setBuildingName(e.target.value)}
                  invalid={false}
                  disabled={!showDialogBox}
                  label="Building name (optional)"
                />
                <TextBox
                  placeholder={"Enter your sub building name"}
                  title={""}
                  type={"text"}
                  required={true}
                  value={subBuilding}
                  onChange={(e) => setSubBuilding(e.target.value)}
                  invalid={subBuildingError}
                  disabled={!showDialogBox}
                  label="Sub building"
                />
                <TextBox
                  placeholder={"Enter your street name"}
                  title={""}
                  type={"text"}
                  required={true}
                  value={streetName}
                  onChange={(e) => setStreetName(e.target.value)}
                  invalid={streetNameError}
                  disabled={!showDialogBox}
                  label="Street Name"
                />
                <TextBox
                  placeholder={"Enter your city"}
                  title={""}
                  type={"text"}
                  required={true}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  invalid={cityError}
                  disabled={!showDialogBox}
                  label="Town/City"
                />
                <TextBox
                  placeholder={"Enter your postal code"}
                  title={""}
                  type={"text"}
                  required={true}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  invalid={pincodeError}
                  disabled={!showDialogBox}
                  label="Postal code"
                />
                <TextBox
                  placeholder={"Enter your state"}
                  title={""}
                  type={"text"}
                  required={true}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  invalid={stateError}
                  disabled={!showDialogBox}
                  label="State"
                />
                <TextBox
                  placeholder={"Enter your country"}
                  title={""}
                  type={"text"}
                  required={true}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  invalid={countryError}
                  disabled={!showDialogBox}
                  label="Country"
                />
              </div>
              <div className="flex flex-row justify-between mt-7">
                <p
                  className="text-blue-400 cursor-pointer max-sm:text-sm"
                  onClick={handleRemoveAddress}
                >
                  Remove address
                </p>
                <button
                  className="bg-blue-800  hover:bg-blue-700 h-10 w-[10rem] max-sm:w-[7rem] max-sm:h-8 rounded-md font-semibold text-white"
                  onClick={handleManualAddress}
                >
                  <p>Submit</p>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {/* <div className="flex justify-center align-middle h-screen w-screen items-center">
        <img src={AddressImage} alt="Address Image" className="h-[30rem] w-[40rem] max-xl:invisible" />
      </div> */}
    </div>
  );
};
