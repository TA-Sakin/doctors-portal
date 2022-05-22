import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
      const imgStorageKey = "85af4a16326eb6123558d198cba862d3"
      const {data:services,isLoading} = useQuery('services',()=> fetch('https://desolate-earth-06461.herokuapp.com/service').then(res=>res.json()))
      if(isLoading){
          return <Loading></Loading>
      }
      const onSubmit = async (data) => {
          const image = data.image[0]
          const formData = new FormData()
          formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url,{
            method: 'POST',
            body: formData
        }).then(res=>res.json()).then(result=>{
                if(result.success){
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }
                    fetch('http://localhost:5000/doctors',{
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                        body: JSON.stringify(doctor)
                    }).then(res=>res.json()).then(inserted=>{
                        if(inserted.insertedId){
                            toast.success('Doctor added successfully')
                            reset()
                        }else{
                            toast.error('Failed to add a doctor')
                        }
                    })
                }
            })
      };
    return (
        <div>
            <h3 className="font-bold text-xl my-3 text-accent">Add doctor</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Speciality</span>
                </label>
                <select {...register('speciality')}
              className="select select-bordered mb-5 w-full max-w-xs lg:max-w-sm"
            >
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name} 
                </option>
              ))}
            </select>
            <label className="label">
                  <span className="label-text">Photo</span>
                </label>
            <input
                  type="file"
                  alt="Your image"
                  className="input-bordered mb-5 max-w-xs"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image is required",
                    },
                  })}
                />
              </div>
              <input
                className="btn btn-accent w-full max-w-xs"
                value="Add"
                type="submit"
              />
            </form>
        </div>
    );
};

export default AddDoctor;