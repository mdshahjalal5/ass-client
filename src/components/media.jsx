import { useMediaQuery } from "react-responsive";

const ExampleComponent = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isMobile && <p>Mobile version</p>}
      {isTablet && <p>Tablet version</p>}
      {isDesktop && <p>Desktop version</p>}
    </div>
  );
};

export default ExampleComponent;
