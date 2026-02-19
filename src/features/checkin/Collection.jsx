import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import ShopName from "../../components/ShopName";


export default function Collection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {
     reset();

    reset();
  };

  return (
    <div>
      <ShopName />
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl space-y-5 border border-zinc-700"
        >
          <h3 className="text-lg font-semibold text-amber-600 mb-2">
            Collection
          </h3>

          {/* Invoice */}
          <div className="grid grid-cols-[150px_1fr] items-center gap-4">
            <label className="text-zinc-300">Invoice #</label>
            <input
              {...register("invoice", { required: true })}
              className="bg-zinc-800 border border-zinc-700 px-3 py-2 rounded w-full"
            />
          </div>

          {/* Remarks */}
          <div className="grid grid-cols-[150px_1fr] items-center gap-4">
            <label className="text-zinc-300">Remarks</label>
            <input
              {...register("remarks", { required: true })}
              className="bg-zinc-800 border border-zinc-700 px-3 py-2 rounded w-full"
            />
          </div>

          {/* Payment Mode */}
          <div className="grid grid-cols-[150px_1fr] items-center gap-4">
            <label className="text-zinc-300">Payment Mode</label>
            <select
              {...register("paymentMode", { required: true })}
              className="bg-zinc-800 border border-zinc-700 px-3 py-2 rounded w-full"
            >
              <option>Cash</option>
            </select>
          </div>

          {/* Amount */}
          <div className="grid grid-cols-[150px_1fr] items-center gap-4">
            <label className="text-zinc-300">Amount</label>
            <input
              type="number"
              {...register("amount", { required: true })}
              className="bg-zinc-800 border border-zinc-700 px-3 py-2 rounded w-full"
            />
          </div>

          {/* Image */}
          <div className="grid grid-cols-[150px_1fr] items-center gap-4">
            <label className="text-zinc-300">Image</label>

            {!selectedFile ? (
              <label className="cursor-pointer bg-zinc-800 px-4 py-2 rounded text-sm hover:bg-zinc-700 w-fit">
                Choose File
                <input
                  type="file"
                  className="hidden"
                  {...register("image")}
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              </label>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-sm text-zinc-400 break-all max-w-md">
                  {selectedFile.name}
                </span>

                <label className="cursor-pointer text-amber-600 text-sm hover:underline">
                  Choose Another
                  <input
                    type="file"
                    className="hidden"
                    {...register("image")}
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                  />
                </label>
              </div>
            )}
          </div>

          {/* Save Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={!isValid}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
