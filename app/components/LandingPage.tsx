import { useState, useEffect } from "react";

const LandingPage = () => {
  const titles = ["Full-stack Software Engineer", "Backend Engineer"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000); // Change title every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h6 className="text-4xl font-bold mb-4">Your Name</h6>
      <h2 className="text-xl text-indigo-400">{titles[currentTitle]}</h2>
    </div>
  );
};

export default LandingPage;