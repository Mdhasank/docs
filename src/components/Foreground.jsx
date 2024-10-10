import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const data = [
    {
      desc: "lorem ipsum sit amet consectetur uyoe uoidh",
      filesize: ".8mb",
      close: true,
      tag: {isOpen:true, tagTitle:"Download Now",tagColor:"green"},
    },
    {
      desc: "lorem ipsum sit amet consectetur uyoe uoidh",
      filesize: ".8mb",
      close: true,
      tag: {isOpen:true, tagTitle:"Download Now",tagColor:"blue"},
    },
    {
      desc: "lorem ipsum sit amet consectetur uyoe uoidh",
      filesize: ".8mb",
      close: true,
      tag: {isOpen:true, tagTitle:"Download Now",tagColor:"green"},
    },
    {
      desc: "lorem ipsum sit amet consectetur uyoe uoidh",
      filesize: ".8mb",
      close: true,
      tag: {isOpen:true, tagTitle:"Download Now",tagColor:"green"},
    },
  ];

  const ref  = useRef(null);

  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-4 flex-wrap flex-shrink-0">
      {data.map((item,index)=>(
        <Card data={item} referance={ref} />
      ))}
      </div>
    </>
  );
};
export default Foreground;
