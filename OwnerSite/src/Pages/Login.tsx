const Login = () => {
  return (
    <div className="w-full flex h-full items-center justify-center">
      <div className="p-5 w-100 bg-slate-400/20 flex flex-col gap-4 rounded-md">
        <div>
          <h1 className="font-bold">Username</h1>
          <input
            type="text"
            className="bg-slate-400/40 w-full rounded-md h-10 px-2"
          />
        </div>
        <div>
          <h1 className="font-bold">Password</h1>
          <input
            type="password"
            className="bg-slate-400/40 w-full rounded-md h-10 px-2"
          />
        </div>
        <button className="bg-black text-white font-bold rounded-md w-fit px-5 py-2 mx-auto">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
