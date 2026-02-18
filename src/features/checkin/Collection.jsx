import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";

export default function Collection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("FORM DATA:", data);

    // data.image will be FileList
    console.log("Image file:", data.image?.[0]);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-zinc-900 p-6 rounded-lg w-[420px] space-y-3 border border-zinc-700"
    >
      <h3 className="text-lg font-semibold text-amber-600">Collection</h3>

      <Input label="Invoice #" {...register("invoice", { required: true })} />
      <Input label="Remarks" {...register("remarks", { required: true })} />

      <div className="flex justify-between items-center">
        <label>Payment Mode</label>
        <select
          {...register("paymentMode", { required: true })}
          className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded"
        >
          <option>Cash</option>
        </select>
      </div>

      <Input label="Amount" type="number" {...register("amount", { required: true })} />

      <div className="flex justify-between items-center">
        <label>Image</label>
        <input type="file" {...register("image")} />
      </div>
<div className="flex justify-center">
      <Button type="submit" variant="primary" size="md" disabled={!isValid}>
        Save
      </Button>
</div>
    </form>
  );
}
