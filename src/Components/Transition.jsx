import { motion } from 'framer-motion';

// Variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '40%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const commonTransition = {
  duration: 0.6,
  ease: 'easeInOut',
};

const colors = ['#3a5a40', '#a1b189', '#3a5841'];

const Transition = () => {
  return (
    <>
      {colors.map((color, index) => (
        <motion.div
          key={color}
          className={`fixed top-0 bottom-0 right-full w-screen h-screen z-${30 - index} bg-[${color}]/70`}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ ...commonTransition, delay: 0.2 + index * 0.1 }}
        />
      ))}
    </>
  );
};

export default Transition;
