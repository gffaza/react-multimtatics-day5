import React from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const onSubmit = (data) => {};

  return (
    <>
      <br />
      <br />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-6 bg-white rounded shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Form Registrasi</h2>

        {/* Nama */}
        <div className="mb-4">
          <label className="block mb-1 font-medium md:text-left">Nama</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            {...register("nama", { required: "Nama harus diisi." })}
          />
          {errors.nama && (
            <p className="text-red-500 text-sm mt-1 md:text-left">
              {errors.nama.message}
            </p>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block mb-1 font-medium md:text-left">Nama</label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded"
            {...register("nama", { required: "Nama harus diisi." })}
          />
          {errors.nama && (
            <p className="text-red-500 text-sm mt-1 md:text-left">
              {errors.nama.message}
            </p>
          )}
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block mb-1 font-medium md:text-left">
            Username
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            {...register("username", { required: "Username harus diisi." })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1 md:text-left">
              {errors.username.message}
            </p>
          )}
        </div>
        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium md:text-left">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            {...register("password", { required: "Password harus diisi." })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1 md:text-left">
              {errors.password.message}
            </p>
          )}
        </div>
        {/* Ulangi Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium md:text-left">
            Ulangi Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            {...register("ulangiPassword", {
              required: "Ulangi password harus diisi.",
              validate: (value) => value === password || "Password tidak cocok",
            })}
          />
          {errors.ulangiPassword && (
            <p className="text-red-500 text-sm mt-1 md:text-left">
              {errors.ulangiPassword.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium md:text-left">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.ulangiPassword && (
            <p className="text-red-500 text-sm mt-1 md:text-left">
              {errors.ulangiPassword.message}
            </p>
          )}
        </div>

        {/* Ulangi Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium md:text-left">Telepon</label>
          <input
            type="tel"
            className="w-full px-3 py-2 border rounded"
            {...register("telp", {
              required: "Telepon is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Telepon Harus berupa angka",
              },
              minLength: {
                value: 10,
                message: "Telepon harus minimal 10 digit",
              },
              maxLength: {
                value: 12,
                message: "Telepon harus maksimal 12 digit",
              },
            })}
          />
          {errors.telp && (
            <p className="text-red-500 text-sm mt-1 md:text-left">
              {errors.telp.message}
            </p>
          )}
        </div>

        {/* Foto */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Foto</label>
          <input
            type="file"
            {...register("foto", {
              required: "Foto harus diisi.",
            })}
            className="w-full px-3 py-2 border rounded"
            accept=".jpg, .jpeg, .png, .gif"
          />
          {errors.foto && (
            <p className="text-red-500 text-sm mt-1">{errors.foto.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded"
        >
          Daftar
        </button>
      </form>
    </>
  );
}
