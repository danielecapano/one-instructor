import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const getCountdown = (date) => {
  const now = new Date();
  let targetDate = new Date(date);
  if (targetDate <= now)
    targetDate = targetDate.setDate(targetDate.getDate() + 7);
  const diff = targetDate - now;

  const s = 1000;
  const m = s * 60;
  const h = m * 60;
  const d = h * 24;

  const days = Math.floor(diff / d);
  const hours = Math.floor((diff % d) / h);
  const minutes = Math.floor((diff % h) / m);
  const seconds = Math.floor((diff % m) / s);

  return {
    days: days.toString().padStart(2, "0"),
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  };
};

function LimitedSale() {
  const [time, setTime] = useState(getCountdown("2024-11-10T18:27"));
  const { days, hours, minutes, seconds } = time;
  const sTens = seconds.at(0);
  const sUnit = seconds.at(1);
  const mTens = minutes.at(0);
  const mUnit = minutes.at(1);
  const hTens = hours.at(0);
  const hUnit = hours.at(1);
  const dTens = days.at(0);
  const dUnit = days.at(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCountdown("2024-11-10T18:29"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    initial: { y: -20, opacity: 0 }, // Partenza da sopra con opacità 0
    animate: { y: 0, opacity: 1 }, // Arriva in posizione centrale con opacità 1
    exit: { y: 20, opacity: 0 }, // Scende verso il basso con opacità 0
  };

  return (
    <div className='wrapper'>
      <div className='info'>
        <h3 className='title'>
          Limited Sale: <span>All courses with 55% off</span>
        </h3>
        <div className='input-group'>
          <input
            type='text'
            className='input'
            placeholder='Enter your E-mail'
          />
          <button className='btn'>subscribe </button>
        </div>
      </div>
      <div className='countdown'>
        <div className='set-date'>
          <span className='count'>
            <AnimatePresence mode='sync'>
              <motion.span
                key={`dTens-${dTens}`}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                className='digit'
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", left: 0 }}
              >
                {dTens}
              </motion.span>
            </AnimatePresence>
            <AnimatePresence mode='sync'>
              <motion.span
                key={`dUnit-${dUnit}`}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                className='digit'
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", right: 0 }}
              >
                {dUnit}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className='description'>Days</span>
        </div>
        <div className='set-date'>
          <span className='count'>
            <AnimatePresence mode='sync'>
              <motion.span
                key={`hTens-${hTens}`}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                className='digit'
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", left: 0 }}
              >
                {hTens}
              </motion.span>
            </AnimatePresence>
            <AnimatePresence mode='sync'>
              <motion.span
                key={`hUnit-${hUnit}`}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                className='digit'
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", right: 0 }}
              >
                {hUnit}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className='description'>Hours</span>
        </div>
        <div className='set-date'>
          <span className='count'>
            <AnimatePresence mode='sync'>
              <motion.span
                key={`mTens-${mTens}`}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                className='digit'
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", left: 0 }}
              >
                {mTens}
              </motion.span>
            </AnimatePresence>
            <AnimatePresence mode='sync'>
              <motion.span
                key={`mUnit-${mUnit}`}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                className='digit'
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", right: 0 }}
              >
                {mUnit}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className='description'>Minutes</span>
        </div>
        <div className='set-date'>
          <span className='count'>
            <AnimatePresence mode='sync'>
              <motion.span
                key={`sTens-${sTens}`}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                className='digit'
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", left: 0 }}
              >
                {sTens}
              </motion.span>
            </AnimatePresence>
            <AnimatePresence mode='sync'>
              <motion.span
                key={`sUnit-${sUnit}`}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                className='digit'
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", right: 0 }}
              >
                {sUnit}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className='description'>Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default LimitedSale;
