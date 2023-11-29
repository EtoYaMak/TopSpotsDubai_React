import React from "react";
import GiftImageContainer from "./GiftImageContainer";

function DefaultFilterHome() {
  const filterDefaultData = [
    {
      imgSrc:
        " https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/GiftsforHim/d34b9007-579c-43b5-bc62-d01cec78a320.webp   ",
      h1Text: " Gifts for Him  ",
    },
    {
      imgSrc:
        " https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/GiftsforHer/e0cbfd72-8424-4f70-87b4-591bfbac7c85.webp   ",
      h1Text: " Gifts for Her  ",
    },
    {
      imgSrc:
        " https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/GiftsforCouples/84f04294-5388-4ff8-a5d8-9c23645b1d90.webp   ",
      h1Text: " Gifts for Couples & Weddings  ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/BirthdayGifts/a11bed3e-114c-48a9-a480-cf2bd82ca7f7.webp    ",
      h1Text: " Gifts for Birthdays  ",
    },
    {
      imgSrc:
        " https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/GiftsforaFriend/1608eee4-bd4c-407e-8dab-37927f6573d1.webp   ",
      h1Text: " Gifts for Friends  ",
    },
    {
      imgSrc:
        " https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/GiftsforTeenagers/5cd102b5-7e9d-4afa-a995-7821831c7efa.webp   ",
      h1Text: " Gifts for Teenagers  ",
    },
  ];
  return (
    <div className="w-full flex flex-wrap h-fit my-10">
      {/* Repeat this block for each item */}
      {filterDefaultData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 gap-1 sm:p-2 justify-start mb-4"
        >
          <GiftImageContainer src={data.imgSrc} />
          <h1 className="w-full  text-black font-bold font-Montserrat text-lg text-center">
            {data.h1Text}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default DefaultFilterHome;
