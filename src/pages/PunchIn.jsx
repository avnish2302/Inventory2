import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

export default function PunchIn() {
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const ownVehicle = watch("ownVehicle");

  const onSubmit = (data) => {
    console.log("Punch In Data:", data);
    console.log("Selected File:", selectedFile);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-700 mb-4">Punch In</h2>
      <div className="flex justify-center">
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
            <label className="text-sm text-zinc-400">
              Odometer Reading (KM)
            </label>

            <input
              type="number"
              {...register("odometer", { required: true })}
              className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
            />
          </div>

          {/* Upload Image (UI Only — No Validation) */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">Upload image</label>

            {!selectedFile ? (
              <label className="cursor-pointer bg-zinc-700 px-3 py-2 rounded text-sm w-fit hover:bg-zinc-600">
                Choose File
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              </label>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-400 break-all">
                  {selectedFile.name}
                </span>

                <label className="cursor-pointer text-amber-600 text-xs hover:underline">
                  Change
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                  />
                </label>

                <button
                  type="button"
                  onClick={() => setSelectedFile(null)}
                  className="text-red-500 text-xs hover:underline"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Submit */}
          <Button type="submit" variant="primary" size="md" disabled={!isValid}>
            Punch In
          </Button>
        </form>
      </div>
    </div>
  );
}
