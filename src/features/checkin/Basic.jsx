import { useForm } from "react-hook-form";

export default function Basic() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const notListed = watch("notListed");

  const onSubmit = (data) => {
    console.log("Basic Saved:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-zinc-900 p-6 rounded border border-zinc-800 w-[420px] space-y-4"
    >
      {/* Shop */}
      <div>
        <label className="text-sm text-zinc-400">
          Select Shop
        </label>

        <select
          {...register("shop", { required: true })}
          className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
        >
          <option value="">Select shop</option>
          <option>Shop A</option>
          <option>Shop B</option>
        </select>
      </div>

      {/* Not Listed */}
      <div className="flex items-center gap-2">
        <label className="text-sm text-zinc-400">
          Not listed above
        </label>

        <input type="checkbox" {...register("notListed")} />
      </div>

      {/* Conditional Fields */}
      {notListed && (
        <>
          {/* License Type */}
          <select
            {...register("licenseType", { required: true })}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
          >
            <option value="">License Type</option>
            <option>Outlet</option>
            <option>Wholesale (L1)</option>
            <option>Bond</option>
            <option>Other</option>
          </select>

          {/* Channel */}
          <select
            {...register("channel", { required: true })}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
          >
            <option value="">Channel</option>
            <option>On-Trade</option>
            <option>Off-Trade</option>
            <option>Others</option>
          </select>

          {/* Area */}
          <select
            {...register("area", { required: true })}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
          >
            <option value="">Area</option>
            <option>North</option>
            <option>District</option>
            <option>Cluster</option>
          </select>

          {/* Licensee Name */}
          <input
            placeholder="Licensee Name"
            {...register("licenseeName", {
              required: true,
              pattern: /^[A-Za-z\s]+$/,
            })}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
          />
        </>
      )}

      {/* Save Button */}
      <button
        type="submit"
        disabled={!isValid}
        className="
          bg-amber-800
          hover:bg-amber-700
          disabled:bg-amber-800
          disabled:opacity-100
          disabled:cursor-not-allowed
          px-4 py-2 rounded text-white w-full
        "
      >
        Save
      </button>
    </form>
  );
}
