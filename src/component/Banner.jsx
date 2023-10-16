const Banner = () => {
  return (
    <div
      className="hero md:h-screen lg:h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/cgDbHH7/3.png)",
      }}
    >
      <div className="hero-content text-neutral-content text-center lg:text-left lg:pl-[580px]">
        <div className="">
          <h1 className="mb-4 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
          <p className="mb-8 text-xl lg:max-w-[724px]">
          It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="text-white rounded-xl border-2 hover:border-[#E3B577] py-[7px] px-[20px]  text-xl hover:text-[#242222] hover:bg-[#E3B577]">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
             