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
    <div className="flex justify-between items-center py-3 border-b">
      <div className="flex-1">
        <p className="text-lg text-gray-500">{label}</p>

        {isEditing ? (
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
            <input
              {...register(name)}
              className="text-xl px-3 py-1 w-full"
            />
            <button type="submit" className="text-green-600 pr-2">
              <LuCheckCheck size={30}/>
            </button>
            <button
              type="button"
              onClick={() => {
                reset();
                setIsEditing(false);
              }}
              className="text-red-500"
            >
              <MdOutlineCancel size={30}/>
            </button>
          </form>
        ) : (
          <div className="flex justify-between  items-center">
            <p className="text-xl px-3">{defaultValue}</p>
            <button onClick={() => setIsEditing(true)}><CiEdit size={30}/></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditableField;
