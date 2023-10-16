import Swal from 'sweetalert2'
import { NavLink } from "react-router-dom";

const AddProduct = () => {

  const addProduct = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffee = { name, chef, supplier, taste, category, details, photo}
    console.log(coffee)

    fetch('https://coffee-store-espresso-emporium-l50u3ok3n-mahsin2004s-projects.vercel.app/coffees', {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(coffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId)
      {
        Swal.fire({
          title: 'Successfully',
          text: 'Coffee Item Adding',
          icon: 'success',
          confirmButtonText: 'oky'
        })
        form.reset()
      }
    })
  }

  return (
    <div className="max-w-[991px] mx-auto my-24 px-5">
      <NavLink to="/">
        <p className="border w-28 text-center py-2 px-4 text-white bg-[#D2B48C] rounded-sm">
          Back to Home
        </p>
      </NavLink>
      <div className="bg-[#F4F3F0] mt-6 px-10 lg:px-20 py-12">
        <div className="mx-auto text-center max-w-[600px]">
          <h1 className="text-[45px]">Add New Coffee</h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={addProduct} className="lg:card-body">
          <div className=" grid lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:col-span-2">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:col-span-2 ">
              <button type="submit" className="py-3 border-2 border-gray-600 hover:text-white hover:bg-slate-900 bg-[#D2B48C] text-[#374151] font-medium px-5 rounded-md">
                Add Coffee
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
