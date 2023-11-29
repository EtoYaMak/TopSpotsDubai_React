import React from "react";
import ActivitiesImageContainer from "./ActivitiesImageContainer";
function SeaFilterHome() {
  const filterSeaData = [
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///PCRTest//f21658e4-1193-44a6-af25-9cee9f09b1b1.webp",
      h1Text: "Yacht Charter",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Sea//9f685848-2b33-49c5-a284-39dbb39eafb6.webp",
      h1Text: "Jet Ski Tour",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///PCRTest//d6a8a5e9-5a14-40ff-9ea0-84ad3e62fec7.webp ",
      h1Text: "Fishing Yacht Charter ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///PCRTest//5ab740c6-b004-4dc6-a7fa-3d97cf8bdf53.webp ",
      h1Text: "Skipper of Your Own Boat ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///PCRTest//fde1d5eb-720a-45d5-a28a-7ea1ea95f715.webp ",
      h1Text: "Shared Yacht Experience ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///PCRTest//a9fabcfa-980c-4974-a79b-bea0aa0bda19.webp ",
      h1Text: "Mega Yacht Dinner Cruise (Coming Soon) ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Sea//eae73bcd-955c-4128-a759-a8220edda402.webp ",
      h1Text: "Jet Car ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Sea//fec2add0-d817-4d4a-b66b-20f57f0d529a.webp ",
      h1Text: "Boat Tour ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Sea//b963d9c8-413e-4743-bd5e-e2e410e8dd49.webp ",
      h1Text: "Fly Boarding (Coming Soon) ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Sea//d717f64d-dbbc-44d7-9f70-bf3c973f0214.webp ",
      h1Text: "Parasailing (Coming soon) ",
    },

    // Add more objects as needed
  ];
  return (
    <div className="w-full flex flex-wrap h-fit my-10">
      {/* Repeat this block for each item */}
      {filterSeaData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 gap-1 sm:p-2 justify-start mb-4"
        >
          <ActivitiesImageContainer src={data.imgSrc} />
          <h1 className="w-full  text-black font-bold font-Montserrat text-lg text-center">
            {data.h1Text}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default SeaFilterHome;
