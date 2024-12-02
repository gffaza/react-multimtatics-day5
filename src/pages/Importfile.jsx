import { button } from "@material-tailwind/react";
import React from "react";
import Spinner from "../components/Spinner"
import { useForm } from "react-hook-form";

export default function Importfile() {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { error },
  } = useForm();

  const onSubmit = async (data) => {
    
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded shadow-md"
        >
            <h2 className="">
                Import Data
            </h2>
            <div>
                <label className="block mb-1 font-medium md:text-left">
                    File
                </label>
                <input
                    type="file"
                    {...registe("file", {                  
                        required : "File Harus Dipilih",
                    })}
                    className="w-full px-3 py-2 border rounded"
                    accept=".xlsx"
                    
                />
                {errors.file && (
                    <p className="text-red-500 text-sm mt-1">{errors.file.message}</p>
                )}
            </div>
            {isLoading ? (
                <Spinner/>
            ) : (
                <button type="submit" className="btn"
            >
            Import
            </button>
            
                )}

        </form>
    )

    }

  return <div>Importfile</div>;
}
