/* eslint-disable no-restricted-globals */
import React, { useState } from "react";

const AdminDeleteForm = () => {
  const [formData, setFormData] = useState({ admin_id: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    let adminUrl = `http://localhost:3002/admin_delete/${formData.name}`;
    fetch(adminUrl);
  };

  return (
    <div className="flex justify-center items-center pb-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Delete Admin
          </h2>
          <form onSubmit={handleDelete}>
            <div className="pb-7">
              <label htmlFor="name">Admin ID:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input input-bordered w-full max-w-xs"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <button
              className="btn btn-accent w-full max-w-xs btn-outline font-semibold text-blue-200"
              type="submit"
            >
              DELETE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDeleteForm;