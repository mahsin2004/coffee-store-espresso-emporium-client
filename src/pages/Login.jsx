import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Social from "../component/Social";
import useAuth from "../hook/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password}
    console.log(user)

    loginUser(email, password)
      .then((res) => {
        const user = res.user
        console.log(user.email)
        toast.success("login successfully")
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  }


  return (
    <div className="flex items-center justify-between py-16 bg-[#F8F8F8]">
      <div className="card flex-shrink-0 mx-auto w-5/6 lg:w-1/3 drop-shadow-md bg-base-100 glass">
        <NavLink to="/">
          <p className="border py-2 px-4 text-white text-center bg-[#E3B577] rounded-t-2xl">
            Back to Home
          </p>
        </NavLink>
        <div>
          <p className="text-3xl font-medium text-center pt-9 text-gray-500">
            Login
          </p>
        </div>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mx-auto w-2/4 mt-5">
            <button type="submit" className="py-3 hover:bg-slate-900 bg-sky-400 text-white font-medium px-5 rounded-md">
              Login
            </button>
          </div>
        </form>
        <h1 className="text-center text-gray-500 -mt-3 mb-2">or</h1>
        <Social></Social>
        <div className="text-center pt-5 pb-8">
          <p>
            Create Account{" "}
            <span className="text-sky-500 underline">
              <Link to="/register">RegisterNow?</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
