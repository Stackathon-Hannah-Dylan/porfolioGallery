import React from "react";
import { motion } from "framer-motion";
import useFirestore from "../hooks/useFirestore";

const SinglePic = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  //const { docs } = useFirestore("images");

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={selectedImg} alt="single pic" />
    </motion.div>
  );
};

export default SinglePic;
