/* Routing */

import { Link } from "react-router-dom"; // so that web page does not reload

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="/">Go Back(Implementing Routing)</Link>
    </div>
  );
};

export default About;
