import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import { BiX } from "react-icons/bi";

const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
  const [isCard, setIsCard] = useState(false);
  const [cardData, setCardData] = useState(null);

  return (
    <div className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${import.meta.env.GOOGLE_API_KEY}` }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={{}}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setCardData(places[child]);
          setIsCard(true);
        }}
      >
        {places?.map((place, i) => (
          <div
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            className="relative cursor-pointer"
          >
            <IoLocation className="text-red-500 text-2xl" />
          </div>
        ))}

        {isCard && (
          <div className="absolute top-[-12px] left-0 w-[200px] h-[150px] bg-white shadow-lg rounded-lg">
            <img
              className="w-full h-[120px] object-cover rounded-lg"
              src={
                cardData?.photo
                  ? cardData?.photo?.images?.large?.url
                  : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
              }
              alt={cardData?.name}
            />

            <p className="capitalize w-40 text-lg font-medium truncate">
              {cardData?.name}
            </p>

            <div
              className="absolute top-2 right-2 w-[30px] h-[30px] bg-red-300 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => setIsCard(false)}
            >
              <BiX className="text-xl" />
            </div>
          </div>
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
