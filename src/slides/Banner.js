import "./Banner.scss";
import BannerImg from "../images/banner.jpg";

function Banner() {
  return (
    <div id="banner">
      <img src={BannerImg} alt="banner" />
      <div class="content">
        <h1>ADNAN SKOPLJAK</h1>
        <h2>SOFTWARE ENGINEER</h2>
      </div>
    </div>
  );
}

export default Banner;
