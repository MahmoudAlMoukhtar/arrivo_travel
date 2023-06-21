import {motion} from "framer-motion";
const PrevTitle = ({prevTitle}) => {
  const animateVariants = {
    hidden: {translateY: -20, opacity: 0},
    show: {
      translateY: 0,
      opacity: 1,
      transition: {duration: 1},
    },
  };
  return (
    <motion.p
      variants={animateVariants}
      initial="hidden"
      whileInView="show"
      className="text-[16px] font-bold-500 text-right text-orange "
    >
      {prevTitle}
    </motion.p>
  );
};

export default PrevTitle;
