import React, { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const submit = () => {
    setEmail("");
    alert("You will be notified when it's ready");
  };
  return (
    <div className="flex items-center justify-evenly flex-col uppercase h-[80vh]">
      <h1 className="md:text-[80px] text-[40px] tracking-widest text-white">
        Coming Soon
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h3 className="md:text-2xl text-l">Get notified when it's ready</h3>
        <div className="flex items-center justify-center bg-[#444] md:w-[450px] w-[300px] md:h-[42px] h-[32px] rounded-[50px] mt-[10px]">
          <input
            className="md:w-[300px] w-[220px] mx-6 border-none outline-none bg-[#444] text-white md:text-[15px] text-[11px]"
            type="email"
            placeholder="ENTER YOUR EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="md:w-[150px] w-[130px] uppercase bg-black text-white h-full rounded-[50px] md:text-[15px] text-[11px]"
            onClick={submit}
          >
            Notify me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
