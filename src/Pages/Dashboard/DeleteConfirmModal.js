import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
  const { name, email } = deleteDoctor;
  const deleteDoctorfn = () => {
    fetch(`https://desolate-earth-06461.herokuapp.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Dr. ${name} is deleted`);
          setDeleteDoctor(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete {name}
          </h3>
          <div className="modal-action">
            <button
              onClick={() => deleteDoctorfn()}
              className="btn btn-error btn-sm"
            >
              Delete
            </button>
            <label for="delete-confirm-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
