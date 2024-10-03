import { servicesData } from "../Constants/Data";
import Contact from "./Contact";

const Services = () => {
  return (
    <div className="relative border-b bg-gradient-to-b from-[#dad7cd] to-[#ffffff] border-neutral-800 min-h-[800px]">
      <div className="text-center pt-[20px] font-unbounded">
        <span className="text-[#3a5a40] text-3xl font-medium px-2 py-1 uppercase">
          Services
        </span>
        <h2 className="text-3xl max-sm:text-2xl lg:text-3xl text-[#3a5a40] font-thin tracking-wide">
          Navigate your global trade with us
        </h2>
      </div>

      {/* Feature blocks section */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 font-unbounded mt-[20px] container mx-auto justify-items-center gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-[300px] bg-[#A1B189] rounded-md shadow-xl mt-[20px] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={service.img}
              className="h-[250px] rounded-t-md w-full object-cover"
            />
            <div className="p-4 space-y-[10px]">
              {/* Icon with Product Title */}
              <div className="flex items-center space-x-2">
                <span className="p-2 w-10 h-10 bg-neutral-900 text-[#3A5A40] flex justify-center items-center rounded-full">
                  {/* Placeholder for uct icon */}
                  {service.icon}
                </span>
                <h1 className="text-[#3a5a40] text-xl font-bold">{service.text}</h1>
              </div>

              {/* Product description */}
              <p className="text-neutral-600 text-sm sm:text-base mt-2">
                {service.description}
              </p>
          </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <h2 className="text-2xl sm:text-5xl max-sm:px-[5px] font-unbounded lg:text-3xl text-center mt-12 text-[#3a5a40]">
        Got any questions or ready to embark on your{" "}
        <h2 className="text-2xl sm:text-5xl max-sm:px-[5px] font-unbounded lg:text-3xl text-center text-[#3a5a40]">
          voyage with us?
        </h2>
        Drop us a Message!
      </h2>

      <Contact />
    </div>
  );
};

export default Services;
