import { useRef } from "react";
import { useForm } from "react-hook-form";

export default function PunchIn() {
  const fileRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const ownVehicle = watch("ownVehicle");

  const onSubmit = (data) => {
    console.log("Punch In Data:", data);
  };

  const handleUploadClick = () => {
    fileRef.current.click();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-700 mb-4">Punch In</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-zinc-900 p-6 rounded border border-zinc-800 w-96 space-y-4"
      >
        {/* Own Vehicle */}
        <div>
          <label className="text-sm text-zinc-400">Own Vehicle</label>

          <select
            {...register("ownVehicle", { required: true })}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
          >
            <option value="">Select</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* Vehicle Type */}
        {ownVehicle === "yes" && (
          <div>
            <label className="text-sm text-zinc-400">Vehicle Type</label>

            <select
              {...register("vehicleType", { required: true })}
              className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
            >
              <option value="">Select</option>
              <option>Bike</option>
              <option>Car</option>
            </select>
          </div>
        )}

        {/* Odometer */}
        <div>
          <label className="text-sm text-zinc-400">Odometer Reading (KM)</label>

          <input
            type="number"
            {...register("odometer", { required: true })}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
          />
        </div>

        {/* Upload Image */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-zinc-400">To upload image</label>

          <input
            type="file"
            className="hidden"
            ref={fileRef}
            onChange={(e) =>
              setValue("image", e.target.files[0], {
                shouldValidate: true,
              })
            }
          />

          <button
            type="button"
            onClick={handleUploadClick}
            className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded hover:bg-zinc-700 w-fit"
          >
            Click here
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid}
          className="
               bg-amber-800 hover:bg-amber-700
               disabled:bg-amber-800
               disabled:text-white
               disabled:opacity-100
               disabled:cursor-not-allowed
             px-4 py-2 rounded text-white w-full
            "
        >
          Punch In
        </button>
      </form>
    </div>
  );
}
