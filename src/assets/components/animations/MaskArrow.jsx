import { motion } from "framer-motion";

export default function MaskArrow({ color }) {
  let variants = {
    initial: { x: -112, opacity: 0 },
    animate: {
      x: 20,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
    exit: {
      x: -112,
      opacity: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="113"
      height="73"
      viewBox="0 0 113 73"
      fill="none"
      initial="initial"
      whileInView="animate"
      exit="exit"
      variants={variants}
      viewport={{ margin: "-200px 0px -100px 0px" }}
    >
      <path
        d="M111.557 30.6817C110.568 29.8234 106.278 30.1637 104.293 30.1637H95.61C93.6697 30.1637 93.1121 29.1817 94.6064 27.643C97.5058 24.6351 101.944 20.0422 101.944 20.0422L105.46 16.3849C105.81 15.8746 106.048 15.3874 106.025 14.9467C106.025 13.609 103.981 11.9698 102.464 10.3924C101.067 8.93878 99.5428 6.75057 98.0856 6.81243C96.7995 6.93614 93.9968 10.3306 92.5991 11.7842C92.5991 11.7842 87.633 17.0035 85.9454 18.7045C84.3991 20.2665 83.5219 19.4004 83.5219 17.6607V4.57782C83.5219 2.003 83.6036 0.711725 81.4626 0.371509C79.9757 0.2014 78.3253 0.286454 76.3478 0.286454C74.8609 0.286454 72.638 0.031292 71.8946 0.889566C71.5601 1.23751 71.3965 1.91022 71.3147 2.69117V30.0399C70.4524 30.442 69.2852 30.5657 67.8058 30.5657C60.4458 30.5657 59.9477 27.9059 51.428 27.9059C42.9083 27.9059 42.2169 30.5657 36.158 30.5657C30.099 30.5657 29.4076 27.9059 20.8879 27.9059C12.3682 27.9059 11.8701 30.5657 4.51017 30.5657C2.58468 30.5657 1.17217 30.3647 0.294922 29.5837V44.7466C1.61079 43.6718 4.0195 45.0791 6.58434 45.0791C12.0783 45.0791 14.4944 42.4192 20.8879 42.4192C25.4377 42.4192 27.5565 45.0791 36.158 45.0791C44.7594 45.0791 46.8782 42.4192 51.428 42.4192C57.8215 42.4192 60.2451 45.0791 65.7316 45.0791C67.8875 45.0791 69.932 44.0893 71.3147 44.4064V70.286C71.3891 71.067 71.5526 71.7319 71.8946 72.0876C72.638 72.9459 74.8683 72.6907 76.3478 72.6907C78.3253 72.6907 79.9757 72.7758 81.4626 72.6057C83.6111 72.2655 83.5219 70.9742 83.5219 68.3994V55.3088C83.5219 53.569 84.3991 52.703 85.9454 54.2649C87.6405 55.966 92.5991 61.1852 92.5991 61.1852C93.9968 62.6389 96.7995 66.041 98.0856 66.157C99.5428 66.2189 101.059 64.0307 102.464 62.577C103.981 60.9997 106.025 59.3604 106.025 58.0228C106.04 57.582 105.81 57.0949 105.46 56.5846L101.944 52.9272C101.944 52.9272 97.5058 48.3266 94.6064 45.3265C93.1195 43.7801 93.6697 42.8058 95.61 42.8058H104.293C106.271 42.8058 110.56 43.146 111.557 42.2877C112.627 41.2594 112.218 39.4423 112.218 36.4886C112.218 33.5349 112.627 31.7178 111.557 30.6895V30.6817Z"
        fill={color}
      />
    </motion.svg>
  );
}
