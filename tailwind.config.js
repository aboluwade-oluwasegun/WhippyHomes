/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    borderWidth: {
      DEFAULT: "1.9px",
      x: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      width: {
        "w-31": "31rem",
        21: "21px",
        136: "136px",
      },
      minHeight: {
        24: "302px",
      },
      maxWidth: {
        340: "340px",
      },
      height: {
        253: "253px",
        21: "21px",
        fit: "fit-content",
      },
      margin: {
        6.25: "6.25rem",
        6.7: "6.6875rem",
        36: "36px",
        30: "30px",
        25: "25px",
        21: "21px",
        18: "18px",
        13: "13px",
      },
      padding: {
        4.4: "4.4rem",
        2.7: "2.6875rem",
        30: "30px",
        25: "25px",
      },
      gap: {
        135: "8.4375rem",
        152: "9.6875rem",
      },
      colors: {
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",
        light: "#ffffff33",
        gray: {
          500: "#444E54",
          400: "#6F7278",
          300: "#E4E6EB",
          200: "#FDFCFC",
          100: "#928EAA",
        },
        primary: {
          500: "#DCA437",
          400: "#B77C0A",
          300: "#BA8113",
          200: "#BAC0EC",
          100: "#d7a81e14",
        },
        secondary: {
          500: "#727272",
          400: "#01083314",
          300: "#010833",
          200: "#F7F7F7",
          100: "#130E00",
          50: "#0108331A",
        },
        neutral: {
          500: "#1B1C1E",
          400: "#C1C1C1",
          300: "#A0A3BD",
          200: "#757886",
          100: "#CCCCCC",
        },
        dark: {
          700: "#102023",
          600: "#4B4543",
          500: "#FBFBFB",
          400: "#878682",
          300: "#9a9eb01a",
          200: "#F5F5F5",
          100: "#F5F6F8",
        },
        success: "#56BC7C",
        error: {
          main: "#D45757",
        },
        warning: {
          500: "#FEF5DC",
        },
        link: {
          active: "#D7A81E",
          hover: "#30519C",
        },
        main: "#FBFBFD",
      },
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    fontSize: {
      xs: [
        "8px",
        {
          letterSpacing: "2%",
          fontWeight: "normal",
        },
      ],
      buttonText: [
        "14px",
        {
          letterSpacing: "2%",
          fontWeight: "semi-bold",
        },
      ],
      labels: [
        "12px",
        {
          fontWeight: "medium",
        },
      ],
      "xxx-small": [
        "6px",
        {
          fontWeight: "medium",
        },
      ],
      "xx-small": [
        "8px",
        {
          fontWeight: "medium",
        },
      ],
      "x-small": [
        "10px",
        {
          fontWeight: "medium",
        },
      ],
      small: [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "medium",
        },
      ],
      "sm-regular": [
        "14px",
        {
          fontWeight: "normal",
          lineHeight: "140%",
        },
      ],
      "md-regular": [
        "15px",
        {
          fontWeight: "normal",
          lineHeight: "140%",
        },
      ],
      "sm-headline": ["16px", { lineHeight: "140%" }],
      "x-sm-headline": ["18px", { lineHeight: "140%" }],
      "md-headline": ["20px", { lineHeight: "140%" }],
      headline: ["24px", { fontWeight: "medium" }],
      "l-headline": ["32px"],
      "ll-headline": ["35px"],
      "xl-heading": ["40px"],
      "xxl-heading": ["60.68px"],
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.primary.200", "currentColor"),
    }),
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
