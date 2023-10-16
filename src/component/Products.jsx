import { Link, NavLink } from "react-router-dom";
import { BiSolidShow } from "react-icons/bi";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Products = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("https://coffee-store-espresso-emporium-l50u3ok3n-mahsin2004s-projects.vercel.app/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);

  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-espresso-emporium-l50u3ok3n-mahsin2004s-projects.vercel.app/coffees/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = coffees.filter((coffee) => coffee._id !== id);
              setCoffees(remaining);
              Swal.fire({
                title: "Successfully",
                text: "Coffee Item Deleted",
                icon: "success",
                confirmButtonText: "oky",
              });
            }
          });
      }
    });
  };

  return (
    <div className="max-w-[1340px] mx-auto px-5 pt-28">
      <p className="text-xl text-center">--- Sip & Savor ---</p>
      <h1 className="text-5xl text-[#331A15] text-center pt-2 pb-4 ">
        Our Popular Products
      </h1>
      <div className="">
        <NavLink to="/addProduct">
          <div className="flex gap-4 border-2 mx-auto border-[#331A15] py-2 px-4 text-white w-[160px] bg-[#E3B577] rounded-md">
            <p className="text-2xl">Add Coffee</p>
            <img
              className="w-5 h-6"
              src="https://i.postimg.cc/gkzymHT3/1.png"
              alt=""
            />
          </div>
        </NavLink>
        <div className=" mt-12">
          <div className="grid md:grid-cols-2 gap-6">
            {coffees.map((coffee) => (
              <div
                key={coffee._id}
                className="py-7 pl-7 pr-[70px] rounded-[10px] bg-base-200"
              >
                <div className="grid grid-cols-5 items-center w-full">
                  <div className="w-[100px] lg:w-[351px] col-span-2">
                    <img
                      className="hover:scale-110  hover:drop-shadow-xl"
                      src={coffee.photo}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center col-span-2">
                    <div className="space-y-1">
                      <p className="text-xl  font-semibold">
                        Name: <span className="text-sm ">{coffee.name}</span>
                      </p>
                      <p className="text-xl font-semibold">
                        Chef: <span className="text-sm ">{coffee.chef}</span>
                      </p>
                      <p className="text-xl font-semibold">
                        Price: <span className="text-sm">180 Taka</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className=" flex flex-col gap-3 ">
                      <Link to={`/details/${coffee._id}`}>
                        <p className="bg-[#D2B48C] p-[10px] rounded">
                          <BiSolidShow className="text-white"></BiSolidShow>
                        </p>
                      </Link>
                      <Link to={`/update/${coffee._id}`}>
                        <p className="bg-[#3C393B] p-[10px] rounded">
                          <MdModeEdit className="text-white"></MdModeEdit>
                        </p>
                      </Link>
                      <Link>
                        <button
                          onClick={() => deleteItem(coffee._id)}
                          className="bg-[#EA4744] p-[10px] rounded"
                        >
                          <MdDelete className="text-white"></MdDelete>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
