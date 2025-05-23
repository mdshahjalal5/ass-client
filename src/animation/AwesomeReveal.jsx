import { Fade } from "react-awesome-reveal";

const AwesomeReveal = ({ children }) => {
  return (
    <div>
      <Fade cascade>{children}</Fade>
    </div>
  );
};

export default AwesomeReveal;
