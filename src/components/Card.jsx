import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data,referance }) => {
  return (
    <>
      <motion.div drag dragConstraints={referance} whileDrag={{scale:1.2}} className="relative px-5 py-10 w-60 h-72 rounded-[36px] bg-zinc-900/70 text-zinc-400 overflow-hidden m-1">
        <FaRegFileAlt />
        <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0 left-0 w-full">
          <div className="flex items-center justify-between mb-5 px-3 py-1">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose size=".8em" color="#fff" />
              ) : (
                <FiDownload size=".8em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div className={`tag w-full flex items-center justify-center py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600/50" : "bg-green-600/50"}`}>
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};
export default Card;
