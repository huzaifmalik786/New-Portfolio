import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  },
}

const Transition = () => {
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#170f30]"
        variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      />
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#251a47]"
        variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      />
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#2d1f5c]"
        variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      />
    </>
  );
};

export default Transition;
