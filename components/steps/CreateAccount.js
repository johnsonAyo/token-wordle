import { useStepperContext } from "../../contexts/StepperContext";

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="w-[70%] mx-auto mt-0">
    <h1 className="text-center font-medium text-5xl">Create your account</h1>
    <p className="w-[60%] text-center mx-auto mt-4">
    Please note that your email is only required for signup. Your mail will only be used to verify your identity for security purposes
    </p>
    <div className="flex flex-col w-[60%] mx-auto mt-8">
      <div className="mx-2 w-full flex-1">
        <div className="my-2 flex rounded border-2 border-black">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Email Address"
            className="w-full p-1 px-2 form-input 
            block leading-none focus:outline-none placeholder-black/50 
            [ transition-colors duration-200 ] 
            [ py-3 md:py-4 md:pr-4 lg:py-4] 
            [ bg-white/20 focus:bg-b/25 ] 
            [ text-[#333] focus:text-white text-xl ]"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="my-2 flex rounded border-2 border-black">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="Password"
            type="password"
            className="w-full p-1 px-2 form-input 
            block leading-none focus:outline-none placeholder-black/50 
            [ transition-colors duration-200 ] 
            [ py-3 md:py-4 md:pr-4 lg:py-4] 
            [ bg-white/20 focus:bg-b/25 ] 
            [ text-[#333] focus:text-white text-xl ]"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="my-2 flex rounded border-2 border-black">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="Confirm Password"
            type="password"
            className="w-full p-1 px-2 form-input 
            block leading-none focus:outline-none placeholder-black/50 
            [ transition-colors duration-200 ] 
            [ py-3 md:py-4 md:pr-4 lg:py-4] 
            [ bg-white/20 focus:bg-b/25 ] 
            [ text-[#333] focus:text-white text-xl ]"
          />
        </div>
      </div>
    </div>
    </div>
  );
}
