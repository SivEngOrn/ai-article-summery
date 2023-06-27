import { logo } from '../assets'
import video from "../assets/video.mp4";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-36 object-contain" />

        <button
          type="button"
          onClick={() => window.open("")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className=" mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        Summarize any <br />
        <span className="typing-animation text-purple-700">
          article with AI
        </span>
      </h1>
      <h2 className="desc">
        With SumAI, you can simply input an article, and the system will provide
        you the the main points. SumAI can help you save time and quickly grasp
        the key ideas and insights.
      </h2>
      <div className="w-full max-w-screen-md pt-16 shadow-lg">
        <video autoPlay loop muted className="w-full rounded-lg">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </header>
  );
}

export default Hero
