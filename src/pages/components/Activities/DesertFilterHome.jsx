import React from "react";
import ActivitiesImageContainer from "./ActivitiesImageContainer";

function DesertFilterHome() {
  const filterDesertData = [
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//6112d350-2c89-4c01-abd8-727795165967.webp",
      h1Text: "Exclusive Dinner in Majestic Desert Camp",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Desert//21ac5f84-08db-4769-b377-b892496b4261.webp",
      h1Text: "Desert Safari with BBQ Dinner",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//35744a11-df94-423c-98cd-ea82ab2e3d9d.webp",
      h1Text: "Dune Buggy in the Desert",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Desert//2e5224bb-581d-4a1b-9f17-c4bef0febd0d.webp",
      h1Text: "Horse Riding in the Desert",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Desert//8055cecd-6781-42b3-a185-7f9af9d8ca45.webp",
      h1Text: "Private Desert BBQ Dinner",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com/Activities/Desert//5173d876-29e5-4b73-a0cc-6c98ad3a9e7b.JPG",
      h1Text: "Camping in the Desert",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//195eb693-fa95-4ca5-bfc4-6c2f04e1c6d8.webp",
      h1Text: "Overnight Luxury Glamping in the Desert",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//0e290369-a230-42d4-9ffa-e8209f23179c.webp",
      h1Text: "Private Desert Escape",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//dc1e70a4-7215-4707-8c38-629d02c62d17.webp",
      h1Text: "Hot Air Balloon",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Desert//a6e17bea-999b-4327-ae01-b0f8da0d9c6f.webp",
      h1Text: "Camping in the Liwa Desert",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Desert//ec73be16-c954-4b6c-8635-e099c154ef9c.webp",
      h1Text: "Luxury Heritage Safari",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Desert//0a7ae21f-cfb1-4c91-a992-d28f927578a6.webp",
      h1Text: "Adventure Sunrise Safari",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Desert//df9b572a-4133-4974-a4f7-1e425e496bc6.webp",
      h1Text: "The Nest Experience",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Desert//bf414cb7-7910-4a92-b773-4a06de669876.webp",
      h1Text: "Private Hot Air Balloon",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Desert//c5e70b23-6a32-4926-84eb-2df96157b5c1.webp",
      h1Text: "Ramo Desert Safari",
    },
    // Add more objects as needed
  ];
  return (
    <div className="w-full flex flex-wrap h-fit my-10">
      {/* Repeat this block for each item */}
      {filterDesertData.map((data, index) => (
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

export default DesertFilterHome;
