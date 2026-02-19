import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ShopName from "../../components/ShopName";

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
    <div><ShopName/>
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-zinc-900 p-10 rounded-lg w-full max-w-2xl
 space-y-3 border border-zinc-700"
      >
        <h3 className="text-lg font-semibold text-amber-600">Promotions</h3>

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

        <Input label="Party" {...register("party", { required: true })} />

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
            <option>Rum</option>
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
          {...register("scheme", { required: true })}
        />

        <div className="flex justify-center mt-4">
          <Button type="submit" variant="primary" size="md" disabled={!isValid}>
            Save
          </Button>
        </div>
      </form>
    </div>
    </div>
  );
}
