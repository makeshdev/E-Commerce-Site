import { FaceBookIcon, GitIcon, GoogleIcon, HeadsetIcon, Logo, NewsletterIcon, TwitterIcon } from "../../assets/Svg"

const Footer = () => {
  return (
      <>
        <div className="bg-primary py-5">
            <div className="container mx-auto flex justify-between items-center text-white"> 
              <div className="flex justify-between items-center w-[573px]">
                  <NewsletterIcon/>
                  <h3 className="text-[20px] font-semibold text-white">Sign up to Newsletter </h3>
                  <p className="text-white">...and receive $20 coupon for first shopping.</p>
              </div>
              <div>
                <div className="relative">
                    <input
                    type="search"
                    placeholder="Email Address"
                    className="border border-1 border-oliveGreen-400 px-3.5 py-[10px] w-[500px] rounded shadow"
                    />
                    <button className="absolute right-0 p-2 bg-primary w-[89px] h-[36px] m-[5px] flex justify-center top-0 items-center rounded">
                    Sign Up
                    </button>
                </div>
              </div>
            </div>
        </div>
        <div className="bg-oliveGreen-100">
            <div className="container mx-auto flex justify-between text-white py-[44px]"> 
                  <div>
                      <Logo/>
                    <div className="flex gap-[21px] items-center mt-[44px]">
                        <HeadsetIcon />
                        <div className="">
                            <span className="text-oliveGreen-200 text-[13px]">Got Questions? Call us 24/7! </span>
                            <p className="text-[20px]">(800) 8001-8588, (0600) 874 548</p>
                          </div>
                      </div>

                      <div className="mt-[44px]">
                          <p className="text-[20px] font-bold pb-[5px]">Contact Info</p>
                          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                      </div>
                      <div className="flex gap-[35px] items-center mt-[42px] pl-[30px]">
                        <FaceBookIcon/>
                        <GoogleIcon />
                        <TwitterIcon />
                        <GitIcon />
                    </div>
                  </div>
                  <div>
                    <p className="text-[20px] font-bold pb-[23px]">Find it Fast</p>
                      <ul>
                          <li className="text-black text-[16px] pb-[15px]">Laptops & Computers</li>
                          <li className="text-black text-[16px] pb-[15px]">Cameras & Photography</li>
                          <li className="text-black text-[16px] pb-[15px]">Smart Phones & Tablets</li>
                          <li className="text-black text-[16px] pb-[15px]">Video Games & Consoles</li>
                          <li className="text-black text-[16px] pb-[15px]">TV & Audio</li>
                          <li className="text-black text-[16px] pb-[15px]">Gadgets</li>
                      </ul>
                  </div>
                <div>
                    <p className="text-[20px] font-bold pb-[23px]">Customer Care</p>
                      <ul>
                          <li className="text-black text-[16px] pb-[15px]">My Account</li>
                          <li className="text-black text-[16px] pb-[15px]">Order Tracking</li>
                          <li className="text-black text-[16px] pb-[15px]">Wish List</li>
                          <li className="text-black text-[16px] pb-[15px]">Customer Service</li>
                          <li className="text-black text-[16px] pb-[15px]">Returns / Exchange</li>
                          <li className="text-black text-[16px] pb-[15px]">FAQs</li>
                      </ul>
                  </div>
              <div>
              </div>
            </div>
          </div>
          <div className="bg-white text-center py-[13px]">
              <p>2023 <b>Electro Tec</b> - All rights Reserved.  </p>
          </div>
    </>
  )
}

export default Footer