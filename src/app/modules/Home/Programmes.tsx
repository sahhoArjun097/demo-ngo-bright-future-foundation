import { Link } from "react-router-dom";
import { programs } from "../../../constant/constants";

const Programmes = () => {
  return (
    <section className="w-full bg-white  py-20 px-5 sm:px-10 lg:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black text-black uppercase tracking-wide">
          Our Programmes
        </h2>

        <div className="w-28 h-1 bg-green-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
        {programs.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                group
                flex items-start gap-6
                p-6
                rounded-3xl
                hover:bg-white
                transition-all duration-300
                cursor-pointer
              "
            >
              <div
                className={`
                  ${item.bg}
                  min-w-20 h-20
                  rounded-2xl
                  flex items-center justify-center
                  transition-all duration-300
                `}
              >
                <Icon className={`${item.color} w-10 h-10`} />
              </div>

              <div className="space-y-3">
                <Link to={item.link}>
                  <h3
                    className={`
    text-3xl
    font-extrabold
    uppercase
    tracking-wide
    transition-all duration-300
    hover:underline
    hover:-translate
   
    cursor-pointer
    ${item.color}
  `}
                  >
                    {item.title}
                  </h3>
                </Link>

                <p className="text-gray-700 text-lg leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Programmes;
