import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageDoctor = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null)
    const {
        data: doctors,
        isLoading,
        refetch,
      } = useQuery("doctors", () =>
        fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((res) =>{  
        if (res.status === 401 || res.status === 403) {
            return toast.error('Something went wrong!')
          }
          return res.json()})
      );
      if(isLoading){
          return <Loading></Loading>
      }
    return (
        <div>
            <h1 className="font-bold text-xl my-3 text-accent">Manage Doctors</h1>
            <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                <tr>
                    <th>
                    <label>
                        <p className='text-xl'>#</p>
                    </label>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Speciality</th>
                    <th>Manage</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {
                        doctors.map((doctor,i) => {
                           return <DoctorRow key={doctor._id} i={i} doctor={doctor} refetch={refetch} setDeleteDoctor={setDeleteDoctor}></DoctorRow>
                        })
                    }
                </tbody>
            </table>
            </div>
            {deleteDoctor && <DeleteConfirmModal refetch={refetch} deleteDoctor={deleteDoctor} setDeleteDoctor={setDeleteDoctor}></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctor;