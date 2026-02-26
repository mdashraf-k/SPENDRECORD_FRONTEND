import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateUserDetail } from "../services/apiUser";
import { LuCheckCheck } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

function EditableField({ label, name, defaultValue }) {
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { [name]: defaultValue },
  });

  const mutation = useMutation({
    mutationFn: UpdateUserDetail,
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
      setIsEditing(false);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex justify-between items-center py-2.5 sm:py-3 border-b border-gray-200 dark:border-gray-700">
      <div className="flex-1">
        <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400">{label}</p>

        {isEditing ? (
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 items-center">
            <input
              {...register(name)}
              className="text-base sm:text-lg md:text-xl px-2 sm:px-3 py-1 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-primary rounded-lg text-gray-900 dark:text-white"
            />
            <button type="submit" className="text-green-600 pr-1 sm:pr-2 shrink-0">
              <LuCheckCheck className="text-xl sm:text-2xl md:text-3xl" />
            </button>
            <button
              type="button"
              onClick={() => {
                reset();
                setIsEditing(false);
              }}
              className="text-red-500 shrink-0"
            >
              <MdOutlineCancel className="text-xl sm:text-2xl md:text-3xl" />
            </button>
          </form>
        ) : (
          <div className="flex justify-between items-center">
            <p className="text-base sm:text-lg md:text-xl px-2 sm:px-3 text-gray-900 dark:text-white">{defaultValue}</p>
            <button onClick={() => setIsEditing(true)} className="shrink-0 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
              <CiEdit className="text-xl sm:text-2xl md:text-3xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditableField;
