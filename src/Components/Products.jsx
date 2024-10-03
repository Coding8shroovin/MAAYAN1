import { prods } from "../Constants/Data";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="relative border-b border-neutral-800 bg-gradient-to-b from-[#dad7cd] to-[#ffffff] min-h-[800px]">
      {/* Header Section */}
      <div className="text-center pt-20 text-[#3a5a40] font-unbounded">
        <span className="text-3xl font-medium px-2 py-1 uppercase">
          Products
        </span>
        <h2 className="text-3xl sm:text-2xl lg:text-3xl tracking-wide mt-2">
          From Our Inventory To Your Market.
        </h2>
      </div>

      {/* Feature blocks section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 font-unbounded container mx-auto px-4 justify-items-center">
        {prods.map((prod, index) => (
          <div
            key={index}
            className="w-full sm:w-[280px] lg:w-[300px] bg-[#A1B189] rounded-md shadow-xl mt-[20px] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={prod.img}
              className="h-[250px] rounded-t-md w-full object-cover"
              alt={prod.text}
            />
            <div className="p-4 space-y-[10px]">
              {/* Icon with Product Title */}
              <div className="flex items-center space-x-2">
                <span className="p-2 w-10 h-10 bg-neutral-900 text-[#3A5A40] flex justify-center items-center rounded-full">
                  {/* Placeholder for product icon */}
                  {prod.icon}
                </span>
                <h1 className="text-[#3a5a40] text-xl font-bold">{prod.text}</h1>
              </div>

              {/* Product description */}
              <p className="text-neutral-600 text-sm sm:text-base mt-2">
                {prod.description}
              </p>

              {/* Button */}
              <div className="flex justify-center mt-6">
                <Link to={`/Products/${prod.id}`}>
                  <button className="rounded-md px-4 py-2 bg-gradient-to-r from-[#3a5a40] to-[#1b1b1b] text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#3a5a40] hover:scale-110">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <h2 className="text-3xl sm:text-5xl lg:text-3xl font-unbounded text-center mt-12 text-[#3a5a40]">
        Got any questions or ready to embark on your{" "}
        <h2 className="text-3xl sm:text-5xl lg:text-3xl font-unbounded text-center text-[#3a5a40]">
          voyage with us?
        </h2>
        Drop us a Message!
      </h2>

      <Contact />
    </div>
  );
};

export default Products;
