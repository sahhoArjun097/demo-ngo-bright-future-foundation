import { useNavigate } from "react-router-dom";
import { HomeAbout } from "../../../constant/constants";

const AboutHome = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full py-10 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center px-6">
        {HomeAbout.paragraphs.map((text, index) => (
          <p
            key={index}
            className={`text-xl leading-relaxed text-gray-700 ${
              index === 0 ? "mb-6" : ""
            }`}
          >
            {text}
          </p>
        ))}

        <button
          onClick={() => navigate(HomeAbout.ctaLink)}
          className="mt-8 text-primary font-medium hover:underline transition"
        >
          {HomeAbout.ctaText}
        </button>
      </div>
    </section>
  );
};

export default AboutHome;
