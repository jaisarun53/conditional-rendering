import React from "react";
import "./App.css";
import ShowName from "./ShowName";
import ProductCard from "./ProductCard";

const App = () => {
  return (
    <div>
      {/* <ShowName studentName="Payal" collage="ismt" address="jhapa" />
      <ShowName studentName="Arun" collage="ismt" address="rautahat" /> */}
      <ProductCard
        image="https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fproduct%2Fmsi-gf63-thin-10scxr-price-nepal%2Fthumb%2F09da26e7-a503-4f80-bcdf-bf76ed9ec325.webp&w=1920&q=75"
        name="MSI GF63 Thin 10SCXR i7 10TH GEN / GTX 1650 / 8GB RAM / 512GB SSD / 15.6 FHD"
        price={112000}
      />
    </div>
  );
};

export default App;
