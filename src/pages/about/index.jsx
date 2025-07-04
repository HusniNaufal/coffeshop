import Mainlayout from "@/layouts/Mainlayout";
import React from "react";

export default function About() {
  return (
    <>
      <Mainlayout>
        <h1 className="font-bold text-3xl mt-[5%]">About</h1>
        <div className="grid grid-cols-2 mt-[2%]">
          <div className="bg-bgabout h-[50vh] bg-cover"></div>
          <div className="mt-[15%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate at maxime qui rem magnam distinctio tempora, iure praesentium fugit nisi quidem, molestias et cupiditate quod ipsa dicta incidunt harum eligendi.
          </div>
        </div>
      </Mainlayout>
    </>
  );
}
