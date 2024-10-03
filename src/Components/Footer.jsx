import React from "react"
const Footer = () => {
  return (
    <div className="text-[#3a5a40] bg-gradient-to-b from-[#ffffff] to-[#dad7cd] text-lg font-semibold py-[80px] max-sm:py-[50px]">
        <footer className=" flex justify-around ">
            <div>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Contact</h1>
                <div className="mt-[50px] max-sm:hidden">
                    <h1>© mayanexim 2024</h1>
                </div>
            </div>
            <div>
                <h1>Legal</h1>
                <h1>Services</h1>
                <h1>Products</h1>
            </div>
            
            <div>
                <h1>Linked In</h1>                
                <h1>Whatsapp</h1>
                <h1>E-mail</h1>
            </div>
            
        </footer>
            <h1 className="text-center pt-[30px] md:hidden">© mayanexim 2024</h1>
        </div>
      );
};

export default Footer;
