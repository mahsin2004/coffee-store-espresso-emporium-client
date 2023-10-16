import { NavLink, useLoaderData } from "react-router-dom";

const Details = () => {

  const dataLoaded = useLoaderData()
  const {name, chef, photo, supplier, taste, category, details} = dataLoaded;
  
  return (
    <div className="max-w-[991px] mx-auto px-4 py-11 lg:py-28">
      <div className=" pb-8">
        <NavLink to="/">
          <p className="border w-28 text-center py-2 px-4 text-white bg-[#D2B48C] rounded-sm">
            Back to Home
          </p>
        </NavLink>
      </div>
      <div className=" py-[72px] rounded-[10px] bg-base-200">
        <div className="flex items-center justify-center gap-10">
          <div className="">
            <img
              className="hover:scale-110 w-[250px]  hover:drop-shadow-xl"
              src={photo}
              alt=""
            />
          </div>
          <div className="space-y-3">
            <p className="text-4xl font-semibold">Niceties</p>
            <p className="text-xl font-semibold">
              Name: <span className="text-sm">{name}</span>
            </p>
            <p className="text-xl font-semibold">
              Chef: <span className="text-sm">{chef}</span>
            </p>
            <p className="text-xl font-semibold">
              Supplier: <span className="text-sm">{supplier}</span>
            </p>
            <p className="text-xl font-semibold">
              Taste: <span className="text-sm">{taste}</span>
            </p>
            <p className="text-xl font-semibold">
              Category: <span className="text-sm">{category}</span>
            </p>
            <p className="text-xl font-semibold">
              Details: <span className="text-sm">{details}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Details;
