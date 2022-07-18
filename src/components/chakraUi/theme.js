import { extendTheme } from "@chakra-ui/react";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

const theme = extendTheme({
  colors: {
    bgDefault: 
    {
      50: '#ecf1f8',
      100: '#e4ebf5',
      200: '#a8bad5',
      300: '#849fc6',
      400: '#6283b7',
      500: '#49699d',
      600: '#39527a',
      700: '#293b56',
      800: '#192334',
      900: '#070c13',
    }
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        overflowX: 'hidden',
      },
    },
  },
  components: {
    Table: {
      defaultProps: {
        colorScheme: 'bgDefault',
      },
    },
    Text: {
      variants: {
        formTitle: {
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: ".0375rem",
          fontSize: "0.9rem",
          fontWeight: "500",
        },
        formSubtitle: {
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: ".0375rem",
          fontSize: "0.7125rem",
          fontWeight: "400",
        },
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

export default theme;
