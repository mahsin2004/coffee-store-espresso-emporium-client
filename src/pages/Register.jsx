import { Link, NavLink, useNavigate } from "react-router-dom";
import Social from "../component/Social";
import useAuth from "../hook/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Register = () => {

  const { createUser, profileUpdate } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password}

    if (password.length < 6) {
      toast.error("is less than 6 characters");
      return;
    }
    
    if (!/[A-Z]/.test(password)) {
      toast.error("don't have a capital letter");
      return;
    }
    
    // Check for at least one special character (non-alphanumeric)
    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(password)) {
      toast.error("don't have a special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result)
        profileUpdate(name).then(() => {
          toast.success("user create successfully");
          fetch('http://localhost:5000/users', {
            method: "POST",
            headers:{
              "content-type": "application/json"
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.insertedId)
            {
              Swal.fire({
                title: 'Successfully',
                text: 'User Added on database',
                icon: 'success',
                confirmButtonText: 'oky'
              })
            }
          })
          navigate("/");
        });
      })
      .catch((error) => {
        toast.error(error.code);
      });
  }

  return (
    <div>
      <div className="flex items-center justify-between py-12 bg-[#F8F8F8]">
        <div className="card flex-shrink-0 mx-auto w-5/6 lg:w-1/3 drop-shadow-md bg-base-100 glass">
          <NavLink to="/">
            <p className="border py-2 px-4 text-white text-center bg-[#E3B577] rounded-t-2xl">
              Back to Home
            </p>
          </NavLink>
          <div>
            <p className="text-3xl font-medium text-center pt-9 text-gray-500">
              Register
            </p>
          </div>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
              <button
                type="submit"
                className="py-3 hover:bg-slate-900 bg-green-400 text-white font-medium px-5 rounded-md"
              >
                Register
              </button>
            </div>
          </form>
          <h1 className="text-center text-gray-500 -mt-3 mb-2">or</h1>
          <Social></Social>
          <div className="text-center pt-5 pb-8">
            <p>
              Account Log in{" "}
              <span className="text-green-500 underline">
                <Link to="/login">Log In?</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
