import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "../../components/Button";
import ShopName from "../../components/ShopName";

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

  const onSubmit = () => {
    console.log("saved");
  };

  return (
    <div>
      <ShopName/>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-zinc-900 p-6 rounded border border-zinc-800 w-[420px] space-y-4"
        >
          {/* ---------------- NOT LISTED ---------------- */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-zinc-400">
              Not listed above
            </label>

            <input type="checkbox" {...register("notListed")} />
          </div>

          {/* ---------------- CONDITIONAL FIELDS ---------------- */}
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
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Only letters allowed",
                  },
                })}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                }}
                className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
              />
            </>
          )}

          {/* ---------------- SAVE BUTTON ---------------- */}
          <div className="flex justify-center">
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
