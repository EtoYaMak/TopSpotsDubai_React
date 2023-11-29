import React from "react";
import ActivitiesImageContainer from "./ActivitiesImageContainer";

function DefaultFilterHome() {
  const filterDefaultData = [
    {
      imgSrc:
        "https://dt69jdpqhk00u.cloudfront.net//PersonalAssistant//11730634-90e6-44a6-92d4-ef7d8ddb756d.jpg ",
      h1Text: "Personal Concierge ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/VIP/751ba20a-8fbe-450d-9d5e-c0ac92fc5ce0.webp ",
      h1Text: " VIP",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/MustDoPremium/a857dc8f-3b20-47b5-bbad-6b9866b86898.webp ",
      h1Text: "Must Do Premium ",
    },
    {
      imgSrc:
        " https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/Adventure/7ac05665-7214-4055-b93b-5039d71136bf.webp",
      h1Text: " Adventure",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/Families%2526YoungAdults/c7122f4b-f6b5-4451-8cb5-5fd6c87412d7.webp ",
      h1Text: "Families & Young Adults ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/MustDo/913022b2-8842-486b-8d9b-3d86e127d066.webp ",
      h1Text: "Must Do ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/MustDoSeaBased/b6c539f6-c4bb-439b-b301-61fcc4742866.webp ",
      h1Text: "Must Do Sea Based ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/MustDoDesertBased/743df6d5-e923-4b29-a808-6ebfa2c1550d.webp ",
      h1Text: "Must Do Desert Based ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/DayTrips/9959c5cc-809d-4fcf-b0b1-09709540305c.webp ",
      h1Text: "Day Trips Outside Dubai ",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//subcategories/Free/5dbeb281-aacf-4b11-972f-f1c0f3dce8cb.webp ",
      h1Text: "Free ",
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
          <ActivitiesImageContainer src={data.imgSrc} />
          <h1 className="w-full  text-black font-bold font-Montserrat text-lg text-center">
            {data.h1Text}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default DefaultFilterHome;
