import Image from "next/image";
import Mainlayout from "@/layouts/Mainlayout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function LihatSemuaMilky() {
  const [Data, setData] = useState([]);
  function getData() {
    axios.get("/api/coffee").then((ress) => {
      console.log(ress?.data?.data);
      setData(ress?.data?.data);
    });
  }

  useEffect(() => {
    getData();
    document.title = "Semua Menu Kopi Milky";
    const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.type = "image/png";
    link.rel = "icon";
    link.href = "/logo.png"; // ganti dengan path favicon kamu
    document.getElementsByTagName("head")[0].appendChild(link);
  }, []);
  return (
    <>
      <Mainlayout>
        <div className="flex justify-between items-center mb-4 mt-[5%]">
          <p className="text-2xl font-bold">MILKY SERIES</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Data?.slice(7, 14).map((data, indexData) => (
            <div key={indexData} className="flex gap-4 p-4 border-2 rounded-md">
              <div className="min-w-[164px]">
                <Image alt="" width={164} height={164} src={data?.image_url} />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-bold">{data?.name}</p>
                <p className="text-xl font-bold text-cci-blue">Rp{data?.price}</p>
                <p>{data?.description}</p>
              </div>
            </div>
          ))}
          ;
        </div>
      </Mainlayout>
    </>
  );
}
