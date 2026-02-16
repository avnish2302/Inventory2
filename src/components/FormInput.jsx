export default function FormInput({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">{label}</label>
      <input
        {...props}
        className="border p-2 rounded outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
