import React from "react";
import ActivitiesImageContainer from "./ActivitiesImageContainer";
function CityFilterHome() {
  const filterSeaData = [
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//1e139869-8ebe-4579-ac24-1942ba851088.webp",
      h1Text: "Skydive Dubai",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//1aa13ccd-9822-42cd-970c-8b130f62c487.webp",
      h1Text: "XLine Dubai",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//56c67bba-3a9b-479f-a7bc-1452d1ecc7be.webp",
      h1Text: "Deep Dive Dubai",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//95b00086-9430-4e12-9939-527e93bf454b.webp",
      h1Text: "Burj Khalifa Lounge",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Desert//c1179f9b-ccfa-4000-9a97-a2877bfe2518.webp",
      h1Text: "At The Top Burj Khalifa",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/Desert//76990596-bf45-4126-9c2d-ef9bd2207187.webp",
      h1Text: "Inside Burj Al Arab (Coming Soon)",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//568f28ca-4142-49fc-86d5-3cfe41d1d8ce.webp",
      h1Text: "The View Palm",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//cbecf502-6db2-454a-88cd-060812ef9db1.webp",
      h1Text: "Ski Dubai",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//014e42c7-e2c7-4127-8b2d-04aa64aeb802.webp",
      h1Text: "La Perle",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//2e5b2234-8f90-4b77-9711-dedfd900fc6f.webp",
      h1Text: "Dinner In The Sky",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//df574e1a-6dac-4ff0-ad7d-3e1816203897.webp",
      h1Text: "Madame Tussauds",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//d0ed8881-41b5-48b7-a6a3-989436ce916e.webp",
      h1Text: "Atlantis Aquaventure Waterpark & The Lost Chambers Aquarium",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//53410842-aabb-4d2d-87d4-0de2c53786c1.webp",
      h1Text: "Dubai Mall Aquarium & Underwater Zoo",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//319f9cc9-c903-4808-9e56-939aef82cdf1.webp",
      h1Text: "IMG Worlds of Adventure",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com///Desert//4468d86c-14af-418f-9506-21c69068994b.webp",
      h1Text: "The Green Planet",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//575b54cf-b27e-45a6-a88c-85ada4752874.webp",
      h1Text: "Helicopter Tour",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//f0112c08-0d8c-4c37-b3c7-30fad84b8d19.webp",
      h1Text: "Sky Views Edge Walk",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//e06dee34-2e6c-43fe-9f4f-cd51362be0ec.webp",
      h1Text: "Indoor Skydiving",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//37d5f4be-14f8-477b-9f57-4b029c45a9ca.webp",
      h1Text: "Atlantis Dolphin & Sea Lion Encounter",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//f89eb01e-f1ba-42be-9150-303ba6303b7b.webp",
      h1Text: "Aventura Parks",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//52ad7d36-4cf6-4089-a44e-b9152f57c1b9.webp",
      h1Text: "Ski Dubai Penguin Encounter",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//31fdbbf7-bcae-4b84-9dbf-bc499f234e1d.webp",
      h1Text: "Dubai Fountain Lake Ride",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//2981d892-a5b3-4881-b09c-7a13a339b1d2.webp",
      h1Text: "Sky Views Observatory & Glass Slide",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//f33694ba-10a8-4b7c-8680-dd03a0a15435.webp",
      h1Text: "Hop-on Hop-off Bus",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//442ec09f-da96-4fcc-bb79-4a7fa99884c4.webp",
      h1Text: "Theatre of Digital Art (ToDa)",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//de5c32a4-4d5b-4fff-bc8d-774e778be237.webp",
      h1Text: "Dubai Parks & Resorts: Motiongate",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//8899ceec-73cc-41c6-963a-17921bcd97b8.webp",
      h1Text: "Dubai Parks & Resorts: Legoland",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/GiftsforHim//e487172b-1588-4866-932f-d534683f4893.webp",
      h1Text: "Dubai Parks & Resorts: Legoland Waterpark",
    },
    {
      imgSrc:
        "https://topspots-bucket.s3.eu-central-1.amazonaws.com//Activities/City//d878d6f5-5504-4476-875f-d7c074acc995.webp",
      h1Text: "Gyrocopter Flight",
    },

    // Add more objects as needed
  ];

  return (
    <div className="w-full flex flex-wrap h-fit my-10">
      {/* Repeat this block for each item */}
      {filterSeaData.map((data, index) => (
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

export default CityFilterHome;
