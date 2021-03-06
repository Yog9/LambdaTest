import React from "react";
import SelectOptions from "./SelectOptions";
import PropTypes from "prop-types";

/**
 * Component that renders a Item
 * @returns JSX Element
 */
const Item = ({
  toggle,
  data,
  roleOptions,
  groupOptions,
  setSelectedRoleOptionForKey,
  setSelectedGroupOptionForKey,
  setUpdatedEmailId,
}) => {
  const [email, setEmail] = React.useState(data.email);

  /**
   * Sets the option value for roles
   * @param {string} role
   */
  const setSelectedRoleOption = (role) => {
    setSelectedRoleOptionForKey(data.id, role);
  };

  /**
   * Sets the option value for group
   * @param {string} group
   */
  const setSelectedGroupOption = (group) => {
    setSelectedGroupOptionForKey(data.id, group);
  };

  /**
   * Sets the email of a person
   * @param {string} emailId
   */
  const setEmailValue = (emailId) => {
    setEmail(emailId);
    setUpdatedEmailId(data.id, emailId);
  };

  return (
    <>
      <div className="grid-container grid grid-cols-4 gap-1">
        <input
          className="cursor-pointer pl-2 col-span-2 mb-1 appearance-none py-2 text-gray-700 leading-tight active:bg-slate-300 hover:bg-slate-300 focus:bg-slate-300 focus-within:bg-slate-300"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        {toggle ? (
          <>
            <SelectOptions
              options={roleOptions}
              selectedOption={data.role}
              setSelectedOption={setSelectedRoleOption}
            />
            <SelectOptions
              options={groupOptions}
              selectedOption={data.group}
              setSelectedOption={setSelectedGroupOption}
            />
          </>
        ) : (
          <>
            <div>{data.role}</div>
            <div>{data.group}</div>
          </>
        )}
      </div>
    </>
  );
};

Item.propTypes = {
  toggle: PropTypes.bool,
  data: PropTypes.object,
  roleOptions: PropTypes.array,
  groupOptions: PropTypes.array,
  setSelectedRoleOptionForKey: PropTypes.func,
  setSelectedGroupOptionForKey: PropTypes.func,
  setUpdatedEmailId: PropTypes.func,
};

export default Item;
