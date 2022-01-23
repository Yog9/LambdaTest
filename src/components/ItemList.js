import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

/**
 * Component that renders a list of People Data
 * @returns JSX Element
 */
const ItemList = ({
  peopleData,
  toggle,
  setSelectedRoleOptionForKey,
  setSelectedGroupOptionForKey,
  setUpdatedEmailId,
  roleOptions,
  groupOptions,
}) => {
  // Map through the items
  const itemNode =
    peopleData &&
    peopleData.map((data) => {
      return (
        <Item
          key={data.id}
          data={data}
          roleOptions={roleOptions}
          toggle={toggle}
          setSelectedRoleOptionForKey={setSelectedRoleOptionForKey}
          setSelectedGroupOptionForKey={setSelectedGroupOptionForKey}
          setUpdatedEmailId={setUpdatedEmailId}
          groupOptions={groupOptions}
        />
      );
    });
  return (
    <ul className="pb-5 overscroll-auto overflow-auto h-64">{itemNode}</ul>
  );
};

ItemList.propTypes = {
  peopleData: PropTypes.array,
  toggle: PropTypes.bool,
  setSelectedRoleOptionForKey: PropTypes.func,
  setSelectedGroupOptionForKey: PropTypes.func,
  setUpdatedEmailId: PropTypes.func,
  roleOptions: PropTypes.array,
  groupOptions: PropTypes.array,
};

export default ItemList;
