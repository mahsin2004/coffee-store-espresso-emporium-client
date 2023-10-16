import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";

const Services = () => {
  const { user, logOutUser } = useAuth();

  const handleLogOut = () => {
    logOutUser()
      .then((res) => {
        console.log(res);
          Swal.fire({
            title: "Successfully",
            text: "Log Out",
            icon: "success",
            confirmButtonText: "oky",
          });
        }
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-[#ECEAE3]">
      <div className="max-w-[1340px] mx-auto px-5">
        <div className="flex justify-center pt-12">
          <div className="text-center lg:flex lg:items-center lg:gap-4">
            {user ? (
              <>
                <h1 className=" font-sans text-2xl text-center lg:text-4xl mb-2">
                  Welcome! {user?.displayName}
                </h1>
                <NavLink to="/">
                  <button
                    onClick={handleLogOut}
                    className="border font-sans py-2 px-4 text-white w-28 text-center  bg-[#E3B577] rounded-md"
                  >
                    log out
                  </button>
                </NavLink>
              </>
            ) : (
              <>
                <h1 className="font-sans text-2xl lg:text-4xl mb-2">Login Now!</h1>
                <NavLink to="/login">
                  <p className="border font-sans py-2 px-4 text-white w-28 text-center  bg-[#E3B577] rounded-md">
                    Log In
                  </p>
                </NavLink>
              </>
            )}
          </div>
        </div>

        <div className="py-[55px] mx-auto gap-10 grid justify-center md:grid-cols-2 md:justify-between lg:flex lg:justify-between">
          <div className="">
            <img src="https://i.postimg.cc/gkzymHT3/1.png" alt="" />
            <h1 className="text-[35px]">Awesome Aroma</h1>
            <p className="max-w-[250px] text-[#1B1A1A]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div>
            <img src="https://i.postimg.cc/ZKXrpzqx/2.png" alt="" />
            <h1 className="text-[35px]">High Quality</h1>
            <p className="max-w-[250px] text-[#1B1A1A]">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div>
            <img src="https://i.postimg.cc/wBQJCtQw/3.png" alt="" />
            <h1 className="text-[35px]">Pure Grades</h1>
            <p className="max-w-[250px] text-[#1B1A1A]">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div>
            <img src="https://i.postimg.cc/zGnRhL6q/4.png" alt="" />
            <h1 className="text-[35px]">Proper Roasting</h1>
            <p className="max-w-[250px] text-[#1B1A1A]">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
