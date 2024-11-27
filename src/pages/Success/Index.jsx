import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

const Index = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    // Configura el temporizador
    const timer = setTimeout(() => {
      navigate("/profile");
    }, 3000); 

    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="mt-40 flex items-center h-[500px] justify-center w-full">
      <div className="max-w-[300px]">
        <i className="fa-solid text-center text-[300px] relative text-blue-600 fa-certificate">
          <i className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-[200px] text-white fa-solid fa-check"></i>
        </i>
        <h1 className="text-2xl mt-10 text-center text-blue-500 font-medium">
          Action completed successfully
        </h1>
        <p className="text-center mt-4 text-gray-500">
          Redirecting to your profile in 3 seconds...
        </p>
      </div>
    </section>
  );
};

export default Index;
