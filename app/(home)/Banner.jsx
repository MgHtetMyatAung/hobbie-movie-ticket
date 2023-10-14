import { Button } from "@/components/ui/button";
import { Clock8 } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { Play } from "lucide-react";
import React from "react";

export default function Banner() {
  return (
    <section
      className=" w-full h-screen"
      style={{
        backgroundImage: `url("https://canvas-bridge.tubitv.com/SziHUsNIh4_kpoRP99JAtJeRWDU=/1920x1080/smart/img.adrise.tv/e25c9d90-93fd-4b1b-9f06-5635671690c8.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-[#111111b0] w-full h-full">
        <div className="container mx-auto  w-full h-full grid grid-cols-1 lg:grid-cols-2">
          <div className=" w-full h-full flex lg:items-center order-2">
            <div className="">
              <button className=" px-5 py-1 rounded-full bg-yellow-300 font-semibold">
                New
              </button>
              <h1 className=" text-5xl font-bold text-gray-50 mt-5">
                Bury the Bride
              </h1>
              <div className="flex text-xs gap-5 mt-5 text-gray-50 font-semibold items-center">
                <button className="py-1 px-3 bg-white font-semibold text-gray-800">
                  PD 18
                </button>
                <button className="px-3 py-1 border-2 border-gray-50 text-gray-50 font-semibold">
                  4K
                </button>
                <span>Romance, Drama</span>
                <span className=" flex gap-2 items-center">
                  <CalendarDays size={15} /> 2023
                </span>
                <span className=" flex gap-2 items-center">
                  <Clock8 size={15} /> 128 min
                </span>
              </div>
              <Button
                className={
                  "rounded-full font-semibold text-lg px-10 py-7 bg-transparent border-2 border-yellow-300 mt-8 hover:bg-yellow-300 hover:text-gray-800"
                }
              >
                <Play className=" me-3" /> Watch Now
              </Button>
            </div>
          </div>
          <div className=" flex items-center justify-center order-1">
            <img
              src="https://m.media-amazon.com/images/M/MV5BYjgzNmFhYmQtOWJjNy00NTFjLWE0ZTUtNzg5Yjc2NTEzM2JkXkEyXkFqcGdeQXVyMTEzOTc5NzY1._V1_.jpg"
              alt=""
              className=" h-[400px] lg:h-[450px] 2xl:h-[550px] border-4 border-yellow-300 mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
