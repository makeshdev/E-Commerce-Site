import {
  ShippingIcon,
  CartIcon,
  HeartIcon,
  ProfileIcon,
  SearchIcon,
} from "../../assets/Svg";

const Header = () => {
  return (
    <>
      {/* Min Top Section */}
      <div className="bg-oliveGreen-100">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-between items-center">
            <div>
              <p>Save 50% Sitewide! Ends in:</p>
            </div>
            <div className="pl-3">
              <ul className="flex h-11 bg-primary text-white p-4 items-center">
                <li className="pr-2">01</li>|<li className="px-2">02</li>|
                <li className="px-2">03</li>|<li className="pl-2">04</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <ShippingIcon />
            <p className="pl-2">Free Shipping & 30 Days Money Back Guarantee</p>
          </div>
        </div>
      </div>
      {/* Logo Section */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-5">
          <div>
            <h3>E-Commerce</h3>
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Search...."
              className="border border-1 border-oliveGreen-400 px-3.5 py-[10px] w-[500px] rounded shadow"
            />
            <button className="absolute right-0 p-2 bg-primary w-[40px] h-[36px] m-[5px] flex justify-center top-0 items-center rounded">
              <SearchIcon />
            </button>
          </div>
          <div className="flex justify-between items-center relative">
            <div className="">
              <HeartIcon />
              <span className="absolute -top-[12px] left-[15px] bg-secondary text-white rounded-full w-[14px] h-[14px] text-[7px] text-center leading-[13px]">
                2
              </span>
            </div>
            <div className="px-4">
              <CartIcon />
              <span className="absolute -top-[12px] right-[22px] bg-secondary text-white rounded-full w-[14px] h-[14px] text-[7px] text-center leading-[13px]">
                1
              </span>
            </div>
            <ProfileIcon />
          </div>
        </div>
      </div>
      {/* NavBar Section */}
      <div className="bg-primary py-5">
        <div className="container mx-auto flex justify-between items-center text-white">
          <div>
            <ul className="flex">
              <li className="pr-[34px]">Home</li>
              <li className="pr-[34px]">About Us</li>
              <li className="pr-[34px]">Shop</li>
              <li className="pr-[34px]">Contact US</li>
              <li className="">Pages</li>
            </ul>
          </div>
          <div>
            <p className="text-white">Need help? Call Us: +91 01234 56789</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
