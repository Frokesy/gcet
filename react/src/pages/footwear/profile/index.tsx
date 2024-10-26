import Container from "../../../components/defaults/Container";
import {
  AddressBookIcon,
  EmailFieldIcon,
  PhoneFieldIcon,
} from "../../../components/svgs/extras";

const AccountProfile = () => {
  return (
    <Container active="footwear">
      <div className="pt-[15vh] pb-10 w-[90vw] mx-auto">
        <h2 className="text-[30px] font-semibold">Profile Settings</h2>
        <div className="flex justify-between mt-10">
          <div className="bg-[#faf9f6] w-[20%] px-6 pt-10 pb-3 lg:flex hidden flex-col space-y-4">
            <p className="bg-[#fff] px-6 py-3 rounded-md">Profile Details</p>
            <p className="bg-[#fff] px-6 py-3 rounded-md">Notifications</p>
            <p className="bg-[#fff] px-6 py-3 rounded-md">Security</p>
            <p className="bg-[#fff] px-6 py-3 rounded-md">History</p>
            <p className="bg-[#fff] px-6 py-3 rounded-md">Saved Cards</p>
            <div className="pt-[13vh]">
              <p className="bg-[#fff] px-6 py-3 rounded-md text-[#808080]">
                Log out
              </p>
            </div>
          </div>
          <div className="lg:w-[80%] lg:text-[14px] text-[13px] bg-[#fff] lg:pt-10 pb-3 lg:px-6">
            <h2 className="text-[18px] font-semibold">Personal Info</h2>
            <p className="text-[14px] text-[#808080] mt-2 pb-4">
              Update your photo and personal details here.
            </p>
            <hr />
            <div className="py-6 lg:w-[70%] flex items-center justify-between">
              <label
                htmlFor="name"
                className="text-[14px] text-[#344054] font-semibold"
              >
                Name
              </label>
              <div className="input flex lg:space-x-6 space-x-3 lg:w-[60%] w-[75%]">
                <input
                  type="text"
                  placeholder="Joseph"
                  className="border border-[#ccc] py-2 px-4 w-[50%] outline-none placeholder:text-[#333] rounded-md"
                />
                <input
                  type="text"
                  placeholder="Danjuma"
                  className="border border-[#ccc] py-2 px-4 w-[50%] outline-none placeholder:text-[#333] rounded-md"
                />
              </div>
            </div>
            <hr />
            <div className="py-6 lg:w-[70%] flex items-center justify-between">
              <label
                htmlFor="name"
                className="text-[14px] text-[#344054] font-semibold"
              >
                Email Address
              </label>
              <div className="w-[60%] border border-[#ccc] rounded-md py-2 px-4 flex items-center space-x-2">
                <EmailFieldIcon />
                <input
                  type="email"
                  placeholder="josephdanjuma@gmail.com"
                  className="border-none outline-none w-[100%] placeholder:text-[#333]"
                />
              </div>
            </div>
            <div className="lg:w-[70%] flex items-center pb-6 justify-between">
              <label
                htmlFor="name"
                className="text-[14px] text-[#344054] font-semibold"
              >
                Phone Number
              </label>
              <div className="w-[60%] border border-[#ccc] rounded-md py-2 px-4 flex items-center space-x-2">
                <PhoneFieldIcon />
                <input
                  type="email"
                  placeholder="234 801 234 5678"
                  className="border-none outline-none w-[100%] placeholder:text-[#333]"
                />
              </div>
            </div>
            <hr />
            <div className="lg:w-[70%] flex items-center py-6 justify-between">
              <label
                htmlFor="name"
                className="text-[14px] text-[#344054] font-semibold"
              >
                Billing Address
              </label>
              <div className="w-[60%] border border-[#ccc] rounded-md py-2 px-4 flex items-center space-x-2">
                <AddressBookIcon />
                <input
                  type="email"
                  placeholder="23, Openda street, Lagos state"
                  className="border-none outline-none w-[100%] placeholder:text-[#333]"
                />
              </div>
            </div>
            <hr />

            <div className="flex justify-end mt-6 space-x-6">
              <button className="border border-[#ccc] py-2 px-6 rounded-lg">Cancel</button>
              <button className="bg-[#000] text-[#fff] py-2 px-6 rounded-lg">Save</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AccountProfile;
