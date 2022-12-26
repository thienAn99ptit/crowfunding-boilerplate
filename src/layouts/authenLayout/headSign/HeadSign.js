import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function HeadSign({ title, description, link, to }) {
  return (
    <div className=" text-center mb-6 lg:mb-5">
      <h1 className="font-semibold text-lg lg:text-xl mb-1 lg:mb-3 dark:text-white text-text1">
        {title}
      </h1>
      <h3 className="text-sm font-normal text-text3">
        {description}{" "}
        <NavLink to={to} className="text-primary font-semibold">
          {link}
        </NavLink>
      </h3>
    </div>
  );
}
HeadSign.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  to: PropTypes.string,
};

export default HeadSign;
