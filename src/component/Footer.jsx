import { BsFacebook, BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t-4">
      <div
        className=""
        style={{
          backgroundImage: "url(https://i.ibb.co/kKKJpcS/13.jpg)",
        }}
      >
        <footer className="py-28  flex lg:gap-8  text-base-content max-w-[1340px] px-5 mx-auto">
          <div className="flex flex-col justify-center items-center mx-auto  space-y-4 lg:block">
            <img
              className="w-[75px]"
              src="https://i.postimg.cc/3NpqhCSs/logo1.png"
              alt="Logo"
            />
            <h1 className="text-[45px] text-[#331A15]">Espresso Emporium</h1>
            <p className="text-center">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="grid grid-cols-4 w-1/2">
              <BsFacebook className="text-[40px]"></BsFacebook>
              <FaTwitter className="text-[40px]"></FaTwitter>
              <FaInstagram className="text-[40px]"></FaInstagram>
              <FaLinkedin className="text-[40px]"></FaLinkedin>
            </div>
            <h2 className="text-[45px] text-[#331A15]">Get in Touch</h2>
            <div className=" space-y-1">
              <div className="flex items-center gap-1">
                <span>
                  <BsTelephoneFill></BsTelephoneFill>
                </span>
                <p>+88 01533 333 333</p>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <MdEmail></MdEmail>
                </span>
                <p>info@gmail.com</p>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <MdLocationOn></MdLocationOn>
                </span>
                <p>72, Wall street, King Road, Dhaka</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <div>
              <h1 className="text-4xl mb-8">Connect with Us</h1>
              <form className="space-y-4">
                <input
                  className="w-full px-4 py-2 rounded-sm"
                  type="text"
                  name="name"
                  placeholder="Name"
                  
                />
                <br />
                <input
                  className="w-full px-4 py-2 rounded-sm"
                  type="email"
                  name="email"
                  placeholder="Email"
                  
                />
                <br />
                <textarea
                  className="w-full px-4 pt-2 rounded-sm"
                  name="massage"
                  placeholder="Write massage"
                
                  cols="30"
                  rows="10"
                ></textarea>
                <br />
                <button
                  type="submit"
                  className="px-[18px] py-[6px] rounded-full border-2 hover:border-[#E3B577] text-xl text-[#242222] hover:bg-[#E3B577]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-[#372727]">
        <div className=" text-center py-3">
          <div className="flex items-center justify-center">
            <p className="text-lg text-white">
              Copyright Espresso Emporium ! All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
