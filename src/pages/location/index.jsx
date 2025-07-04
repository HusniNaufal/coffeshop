import Mainlayout from "@/layouts/Mainlayout";
import React from "react";

export default function Location() {
  return (
    <>
      <Mainlayout>
        <h1 className="mt-[2%] font-bold text-3xl mb-[2%]">Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d104200.8749286771!2d110.41902573137334!3d-7.009489741531743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFore!5e1!3m2!1sid!2sid!4v1751620441234!5m2!1sid!2sid"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Mainlayout>
    </>
  );
}
