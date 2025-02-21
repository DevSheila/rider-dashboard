import React, { useState } from "react";
import {
  Bell,
  Clock,
  User,
  ChevronLeft,
  Search,
  List,
  ArrowLeftRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import MapComponent from "@/components/MapComponent";

const MoodBoard = () => {
  const [selectedLocation, setSelectedLocation] = useState("New York, US");
  const dummyCoordinates = { lat: 37.7749, lng: -122.4194 };
  const dummyPlaces = [
    {
      name: "Place One",
      latitude: 37.775,
      longitude: -122.418,
      photo: { images: { large: { url: "https://via.placeholder.com/150" } } },
    },
    {
      name: "Place Two",
      latitude: 37.776,
      longitude: -122.417,
      photo: { images: { large: { url: "https://via.placeholder.com/150" } } },
    },
  ];
  const shipments = [
    {
      id: "CA-12321-US",
      status: "On Progress",
      origin: "California, US",
      originDate: "12/11/2024",
      destination: "Michigan, US",
      destinationDate: "15/11/2024",
      driver: {
        name: "Ethan",
        photo:
          "https://images.unsplash.com/photo-1565884280295-98eb83e41c65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      id: "NY-12321-SF",
      status: "On Progress",
      origin: "New York, US",
      originDate: "14/11/2024",
      destination: "San Francisco, US",
      destinationDate: "16/11/2024",
      driver: {
        name: "Ricky",
        photo:
          "https://images.unsplash.com/photo-1565884280295-98eb83e41c65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      id: "CGK-12321-NY",
      status: "Delivered",
      origin: "Jakarta, ID",
      originDate: "13/11/2024",
      destination: "New York, US",
      destinationDate: "17/11/2024",
      driver: {
        name: "Louis",
        photo:
          "https://images.unsplash.com/photo-1565884280295-98eb83e41c65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  ];

  return (
    <>
      <div className="w-96 border-r">
        <div className="p-4 flex gap-2">
          <button className="p-2 border rounded">
            <List size={16} />
          </button>
          <button className="p-2 border rounded">
            <ArrowLeftRight size={16} />
          </button>
          <div className="flex items-center ml-2 bg-gray-100 rounded px-3 py-1 flex-1">
            <MapPin size={16} className="text-gray-500 mr-2" />
            <span className="text-sm">{selectedLocation}</span>
          </div>
        </div>

        {/* Shipments */}
        <div className="flex flex-col">
          {shipments.map((shipment) => (
            <div key={shipment.id} className="p-4 border-t">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-purple-100 rounded-md flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-200 rounded-sm" />
                </div>
                <span className="ml-2 text-sm font-medium">{shipment.id}</span>
                <span
                  className={`ml-auto text-xs px-2 py-1 rounded-full ${
                    shipment.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {shipment.status}
                </span>
              </div>

              <div className="flex items-center my-4">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full" />
                  <div
                    className="w-0.5 h-16 bg-gray-300 border-dashed"
                    style={{ borderStyle: "dashed" }}
                  />
                  <div className="w-2 h-2 bg-gray-300 rounded-full" />
                </div>

                <div className="flex-1 flex flex-col justify-between h-16 ml-4">
                  <div>
                    <div className="text-xs text-gray-500">
                      {shipment.origin}
                    </div>
                    <div className="text-xs text-gray-400">
                      {shipment.originDate}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">
                      {shipment.destination}
                    </div>
                    <div className="text-xs text-gray-400">
                      {shipment.destinationDate}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={shipment.driver.photo}
                      alt={shipment.driver.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div className="ml-2">
                    <div className="text-xs flex items-center">
                      <span className="text-green-500 mr-1">•</span>
                      {shipment.driver.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      Driver / Courier
                    </div>
                  </div>
                </div>

                <div className="ml-auto flex gap-2">
                  <button className="p-1.5 border rounded-md">
                    <Phone size={16} />
                  </button>
                  <button className="p-1.5 border rounded-md">
                    <Mail size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className=" bg-gray-100 relative">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          {/* <img
            src="/api/placeholder/800/600"
            alt="Map"
            className="w-full h-full object-cover opacity-50"
          /> */}

          <MapComponent
            coordinates={dummyCoordinates}
            setCoordinates={() => {}}
            setBounds={() => {}}
            places={dummyPlaces}
          />
        </div>
      </div>
    </>
  );
};

export default MoodBoard;
