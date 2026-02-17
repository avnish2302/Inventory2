import { useState } from "react";

export default function Collection() {
  const [form, setForm] = useState({
    shop: "",
    invoice: "",
    remarks: "",
    paymentMode: "Cash",
    amount: "",
    image: null,
  });


  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleImage = (e) =>
    setForm({ ...form, image: e.target.files[0] });
  

  const handleSave = (data)=>{
    console.log(data)
  }
  /*
  const handleSave = async () => {
    let imageUrl = null;

    if (form.image) {
      const { data } = await supabase.storage
        .from("collection-images")
        .upload(`img-${Date.now()}`, form.image);

      imageUrl = data?.path;
    }

    const { error } = await supabase
      .from("checkin_collection")
      .insert([{ ...form, image: imageUrl }]);

    if (error) alert(error.message);
    else alert("Saved!");
  };
*/
  return (
    <div className="bg-zinc-900 p-6 rounded-lg w-[420px] space-y-3 border border-zinc-700">
      <h3 className="text-lg font-semibold text-amber-600">
        Collection
      </h3>

      <Input label="Invoice #" name="invoice" onChange={handleChange}/>
      <Input label="Remarks" name="remarks" onChange={handleChange}/>

      <div className="flex justify-between items-center">
        <label>Payment Mode</label>
        <select
          name="paymentMode"
          onChange={handleChange}
          className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded"
        >
          <option>Cash</option>
          <option>UPI</option>
          <option>Card</option>
        </select>
      </div>

      <Input label="Amount" name="amount" type="number" onChange={handleChange}/>

      <div className="flex justify-between items-center">
        <label>Image</label>
        <input type="file" onChange={handleImage}/>
      </div>

      <button
        onClick={handleSave}
        className="bg-amber-800 px-4 py-2 rounded text-white w-full"
      >
        Save
      </button>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="flex justify-between items-center gap-3">
      <label className="w-32">{label}</label>
      <input
        {...props}
        className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded w-full"
      />
    </div>
  );
}
