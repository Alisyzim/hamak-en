import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Discover <br />
              More real estate
              <br /> stable
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find the property that suits you very easily</span>
            <span>You will forget all the difficulties in finding what suits you</span>
          </div>


          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
              <span>+</span><CountUp start={8800} end={9000} duration={4} />   
              </span>
              <span className="secondaryText">Highly rated properties</span>
            </div>

            <div className="flexColCenter stat">
              <span>
              <span>+</span><CountUp start={1950} end={2000} duration={4} />   
              </span>
              <span className="secondaryText">Satisfied customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
              <span>+</span><CountUp end={28} />
              </span>
              <span className="secondaryText">Site awards</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
