import "./Banner.scss";
import BannerImg from "../images/banner.jpg";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Banner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="banner">
      <img src={BannerImg} alt="banner" />
      <div class="content">
        <h1
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
          }}
        >
          ADNAN SKOPLJAK
        </h1>
        <h2
          ref={ref}
          style={{
            width: isInView ? "100%" : "0px",
          }}
        >
          SOFTWARE ENGINEER
        </h2>
      </div>
    </div>
  );
}

export default Banner;
