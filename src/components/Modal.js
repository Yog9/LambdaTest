import React from "react";
import Switch from "./Switch";
import { useState } from "react";
import Header from "./Header";
import ItemList from "./ItemList";
import SelectOptions from "./SelectOptions";
import PropTypes from "prop-types";

const Modal = ({ peopleData, setPeopleData }) => {
  const roleOptions = [
    { id: "1", value: "Admin", label: "Admin" },
    { id: "2", value: "User", label: "User" },
    { id: "3", value: "Guest", label: "Guest" },
  ];
  const groupOptions = [
    { value: "Pascal", label: "Pascal" },
    { value: "Main", label: "Main" },
    { value: "Iron", label: "Iron" },
  ];
  const [showModal, setShowModal] = React.useState(false);
  const [toggle, setToggle] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selectedRoleOption, setSelectedRoleOption] = useState(
    roleOptions[0].value
  );

  const [selectedGroupOption, setSelectedGroupOption] = useState(
    groupOptions[0].value
  );

  /**
   * Sets the option value for roles and updates people data for a role
   * @param {string} selectedRole
   */
  const setSelectedRoleOptionValue = (selectedRole) => {
    setSelectedRoleOption(selectedRole);
    updatePeopleData("role", selectedRole);
  };

  /**
   * Sets the option value for group
   * @param {string} selectedGroup
   */
  const setSelectedGroupOptionValue = (selectedGroup) => {
    setSelectedGroupOption(selectedGroup);
    updatePeopleData("group", selectedGroup);
  };

  /**
   * updates the toggle value
   * @constructor
   * @param {boolean} value -  Toggle value.
   */
  const updateToggle = (value) => {
    setToggle(value);
    updatePeopleData("role", selectedRoleOption);
    updatePeopleData("group", selectedGroupOption);
  };

  /**
   * updates the one person's data for a particular key
   * @param {string} key
   * @param {object} value
   */
  const updatePeopleData = (key, value) => {
    const newPeopleData = [...peopleData];
    newPeopleData.map((data) => {
      data[key] = value;
    });
    setPeopleData(newPeopleData);
  };

  /**
   * Updates person's data for a particular role
   * @param {string} key
   * @param {string} role
   */
  const setSelectedRoleOptionForKey = (key, role) => {
    const newPeopleData = [...peopleData];
    // Find index at which this key exists and change that data
    newPeopleData[key - 1] = { ...newPeopleData[key - 1], role };
    setPeopleData(newPeopleData);
  };

  /**
   * Updates person's data for a particular group
   * @param {string} key
   * @param {string} group
   */
  const setSelectedGroupOptionForKey = (key, group) => {
    const newPeopleData = [...peopleData];
    // Find index at which this key exists and change that data
    newPeopleData[key - 1] = { ...newPeopleData[key - 1], group };
    setPeopleData(newPeopleData);
  };

  /**
   * Updates the state of the next button wrt the list of emails
   * @param {string} id
   * @param {string} emailId
   */
  const setUpdatedEmailId = (id, emailId) => {
    const newPeopleData = [...peopleData];
    newPeopleData[id - 1] = { ...newPeopleData[id - 1], email: emailId };
    if (!emailId) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    for (let i = 0; i < peopleData.length; i++) {
      if (i !== id - 1 && peopleData[i].email.length == 0) {
        setDisabled(true);
      }
    }
    setPeopleData(newPeopleData);
  };

  return (
    <>
      <div className="flex justify-center items-center h-64">
        <button
          className="bg-emerald-400 text-white active:bg-emerald-600 font-light uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open modal
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none overflow-x-hidden">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl font-light">Select Role</h3>
                  <button onClick={() => setShowModal(false)}>x</button>
                </div>
                <div className="relative pt-0 pl-6 pr-6 pb-0 flex-auto">
                  <div className="flex justify-between">
                    <div className="flex">
                      <Switch toggle={toggle} setToggle={updateToggle} />
                    </div>
                    {!toggle ? (
                      <div>
                        <SelectOptions
                          options={roleOptions}
                          selectedOption={selectedRoleOption}
                          setSelectedOption={setSelectedRoleOptionValue}
                        />
                        <SelectOptions
                          options={groupOptions}
                          selectedOption={selectedGroupOption}
                          setSelectedOption={setSelectedGroupOptionValue}
                        />
                      </div>
                    ) : null}
                  </div>
                  <Header />
                  <ItemList
                    peopleData={peopleData}
                    toggle={toggle}
                    roleOptions={roleOptions}
                    selectedRoleOption={selectedRoleOption}
                    selectedGroupOption={selectedGroupOption}
                    setSelectedGroupOptionForKey={setSelectedGroupOptionForKey}
                    setSelectedRoleOptionForKey={setSelectedRoleOptionForKey}
                    setUpdatedEmailId={setUpdatedEmailId}
                    selectedGroupOption={selectedGroupOption}
                    groupOptions={groupOptions}
                  />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className={
                      "bg-emerald-400 text-white active:bg-emerald-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                      (disabled ? " bg-slate-300" : "")
                    }
                    type="button"
                    disabled={disabled}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
    </>
  );
};
export default Modal;

Modal.propTypes = {
  peopleData: PropTypes.array,
  setPeopleData: PropTypes.func,
};
