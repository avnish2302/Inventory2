import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Promotions() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Saved:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-zinc-900 p-6 rounded-lg w-[420px] space-y-3 border border-zinc-700"
    >
      <h3 className="text-lg font-semibold text-amber-600">
        Promotions
      </h3>

      <Input
        label="From Date"
        type="date"
        {...register("fromDate", { required: true })}
      />

      <Input
        label="To Date"
        type="date"
        {...register("toDate", { required: true })}
      />

      <Input
        label="Party"
        {...register("party", { required: true })}
      />

      {/* CATEGORY */}
      <div className="flex gap-3 items-center">
        <label className="text-sm w-32">Category</label>
        <select
          {...register("category", { required: true })}
          className="bg-zinc-800 border border-zinc-700 px-3 py-2 rounded w-full"
        >
          <option value="">Select Category</option>
          <option>Beer</option>
          <option>Vodka</option>
          <option>Rum[DD]</option>
        </select>
      </div>

      <Input label="Brand(s)" {...register("brands")} />

      {/* SKU */}
      <div className="flex gap-3 items-center">
        <label className="text-sm w-32">SKU</label>
        <select
          {...register("sku", { required: true })}
          className="bg-zinc-800 border border-zinc-700 px-3 py-2 rounded w-full"
        >
          <option value="">Select SKU</option>
          <option>Q</option>
          <option>P</option>
          <option>N</option>
          <option>All</option>
          <option>500</option>
        </select>
      </div>

      <Input
        label="Scheme / Promotion"
        textarea
        {...register("scheme", {required: true})}
      />

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
  );
}
