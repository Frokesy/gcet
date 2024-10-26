import { FC } from "react";
import {
  CoFacebook,
  CoLinkedIn,
  CoTwitter,
  CoYoutube,
} from "../svgs/contactIcons";
import { EmailIcon, LocationIcon, Phone } from "../svgs/extras";
import React from "react";

interface ContactTemplateProps {
  themeColor: string;
}

const ContactTemplate: FC<ContactTemplateProps> = ({ themeColor }) => {
  return (
    <div className="pt-[10vh] lg:pb-10 flex lg:flex-row flex-col-reverse justify-between">
      <div className={`bg-[${themeColor}] text-[#fff] py-10 lg:w-[35%] lg:pl-20 pl-6 pr-6 mt-10 lg:mt-0`}>
        <h2 className="text-[24px] font-semibold">Get in touch</h2>
        <p className="text-[#E9D7FE]">
          We love to hear from you. Our friendly team is always here to chat.
        </p>

        <div className="space-y-10">
          <div className="flex space-x-3 mt-10">
            <EmailIcon />
            <div className="">
              <h2 className="text-[20px] font-semibold">Chat to us</h2>
              <p className="pb-3 pt-1 text-[#E9D7FE]">
                Our friendly team is here to help
              </p>
              <p>goatcloudstechnologies.com</p>
            </div>
          </div>
          <div className="flex space-x-3 mt-10">
            <LocationIcon />
            <div className="">
              <h2 className="text-[20px] font-semibold">Office</h2>
              <p className="pb-3 pt-1 text-[#E9D7FE]">
                Come say hello at our office HQ
              </p>
              <p>
                100 Smith Street <br /> Collingwood VIC 3066 AU
              </p>
            </div>
          </div>
          <div className="flex space-x-3 mt-10">
            <Phone />
            <div className="">
              <h2 className="text-[20px] font-semibold">Phone</h2>
              <p className="pb-3 pt-1 text-[#E9D7FE]">
                Mon - Fri from 8am to 5pm
              </p>
              <p>+234 801 234 5678</p>
            </div>
          </div>

          <div className="pt-20 flex items-center space-x-10">
            <CoFacebook />
            <CoTwitter />
            <CoLinkedIn />
            <CoYoutube />
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] lg:mr-20 mr-6 ml-6 lg:ml-0 pt-16">
        <h2 className="lg:text-[36px] text-[24px] font-semibold">
          We&apos;re here for you
        </h2>
        <p className="text-[#667085] lg:text-[20px] text-[12px]">
          You can reach us anytime via{" "}
          <a className="text-[#000]" href="mailto:goatcloudstechnologies.com">
            goatcloudstechnologies.com
          </a>{" "}
        </p>

        <div className="form mt-10 space-y-10">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-[14px]">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="px-4 py-2.5 rounded-lg border border-[#ccc] outline-none w-[100%]"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-[14px]">
              Email
            </label>
            <input
              type="text"
              placeholder="you@company.com"
              className="px-4 py-2.5 rounded-lg border border-[#ccc] outline-none w-[100%]"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="phone" className="text-[14px]">
              Phone number
            </label>
            <input
              type="text"
              placeholder="+234 801 234 5678"
              className="px-4 py-2.5 rounded-lg border border-[#ccc] outline-none w-[100%]"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="help" className="text-[14px]">
              How can we help?
            </label>
            <textarea
              name=""
              id=""
              placeholder="Tell us a little about the project"
              className="px-4 py-2.5 rounded-lg border border-[#ccc] outline-none w-[100%]"
            ></textarea>
          </div>

          <button className={`w-[100%] py-3 bg-[${themeColor}] text-[#fff] rounded-lg`}>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactTemplate;
