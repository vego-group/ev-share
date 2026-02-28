export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export const item = (reduceMotion: boolean | null) => ({
  hidden: {
    opacity: 0,
    y: reduceMotion ? 0 : 28,
    scale: reduceMotion ? 1 : 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
    },
  },
});
