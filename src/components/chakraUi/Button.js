import { Button as ChakraButton } from "@chakra-ui/react";

function Button(props) {
  const { variant } = props;
  let buttonProperties;

  if (!variant) {
    buttonProperties = {
      color: "white",
      letterSpacing: "0.1rem",
      bg: "#1E97F7",
      border: "1px solid #1E97F7",
      borderRadius:"3px",
      textTransform: "uppercase",

      _hover: {
        bg:"white",
        color: "#1E97F7",
      },
      _active: {
        bg:"white",
        color: "#1E97F7"
      }

    };
  }


  if (variant === 'invert') {
    buttonProperties = {
      color: "#1E97F7",
      letterSpacing: "0.1rem",
      bg: "white",
      border: "1px solid #1E97F7",
      borderRadius:"3px",
      textTransform: "uppercase",

      _hover: {
        bg:"#1E97F7",
        color: "white",
      },
      _active: {
        bg:"#1E97F7",
        color: "white",
      }

    };
  }

  return <ChakraButton {...buttonProperties} {...props} />;
}

export default Button;
