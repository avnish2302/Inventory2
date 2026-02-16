export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center bg-zinc-950">
      <div className="bg-zinc-900 p-8 rounded-lg shadow w-80 space-y-4 border border-zinc-800">
        <h2 className="text-xl font-bold text-amber-700">Login</h2>

        <input
          placeholder="Email"
          className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
        />

        <button className="bg-amber-800 hover:bg-amber-700 w-full py-2 rounded text-white">
          Login
        </button>
      </div>
    </div>
  );
}
