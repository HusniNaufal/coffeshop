import Image from "next/image";
import Mainlayout from "@/layouts/Mainlayout";
import axios from "axios";
import { useEffect, useState } from "react";
import NumberFormat from "@/utils/NumberFormat";
import Link from "next/link";

export default function MenuPage() {
  const [Data, setData] = useState([]);
  function getData() {
    axios.get("/api/coffee").then((ress) => {
      console.log(ress?.data?.data);
      setData(ress?.data?.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Mainlayout>
        <div className="relative text-center align-items-center h-[30px] bg-bgfore bg-cover pt-[20%]">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-cci-green">MENU</p>
        </div>
        <p className="text-4xl font-bold mb-[5%]">Halaman Menu</p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-2xl font-bold">AMERICANO SERIES</p>
          <button className="text-cci-blue hover:underline text-sm">
            <Link href={"/menu/lihatsemua/americano"}>Lihat Semua</Link>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Data?.slice(0, 4).map((data, indexData) => (
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
        <div className="flex justify-between items-center mb-4">
          <p className="text-2xl font-bold">MILKY SERIES</p>
          <button className="text-cci-blue hover:underline text-sm">
            <Link href={"/menu/lihatsemua/milkyseries"}>Lihat Semua</Link>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Data?.slice(7, 11).map((data, indexData) => (
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
