import React from "react";

function Footer() {
  return (
    <div className="h-[40%] min-h-fit bg-white text-black font-Montserrat border-t-[2px] border-[#F16565] flex flex-col mx-auto w-full text-center ">
      <h1 className="font-medium text-[19px] mt-10 mb-2">
        Stay in touch with us
      </h1>
      {/* socials */}
      <div className="flex gap-6 justify-center items-center h-14 mb-4">
        <a href="https://www.instagram.com/topspotsdubai/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
            alt=""
            className="w-8 h-8"
          />
        </a>
        <a href="https://www.facebook.com/topspotsdubai">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png"
            alt=""
            className="w-8 h-8"
          />
        </a>
        <a href="https://twitter.com/topspotsdubai">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"
            alt=""
            className="w-8 h-8"
          />
        </a>
        <a href="https://www.tiktok.com/@topspotsdubai">
          <img
            src="https://cdn.worldvectorlogo.com/logos/tiktok-1.svg"
            alt=""
            className="w-8 h-8"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCyn4lbac3PXhwLTp7mMDbZw">
          <img
            src="https://www.svgrepo.com/show/13671/youtube.svg"
            alt=""
            className="w-8 h-8"
          />
        </a>
      </div>
      {/* Mobile */}
      <div className="flex justify-center items-center">
        <a href="https://play.google.com/store/apps/details?id=com.tsd.app">
          <img
            src="https://topspotsdubai.com/assets/icon/social/google-play-badge.png"
            alt=""
            className="w-[175px] h-[58px]"
          />
        </a>
        <a href="https://apps.apple.com/ae/app/top-spots-dubai/id6446632101">
          <img
            src="https://topspotsdubai.com/assets/icon/social/app-store-badge.png"
            alt=""
            className="w-[169px] h-[49px]"
          />
        </a>
      </div>
      {/* SITEMAP */}
      <div className="footerLinks flex flex-col min-[760px]:flex-row w-full justify-center items-center gap-4 mt-4 text-[17px] font-Montserrat font-medium">
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a href="#">Advertising</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">SiteMap</a>
        <a href="#">Support</a>
      </div>
      <div className="flex  flex-col justify-center items-center my-10 gap-8">
        <h1 className="font-semibold">COPYRIGHT @ TOP SPOTS FZE 2023</h1>
        <img
          src="https://topspotsdubai.com/assets/images/logo2.svg"
          alt=""
          className="w-24"
        />
      </div>
    </div>
  );
}

export default Footer;
