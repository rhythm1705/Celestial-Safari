const theme = {
  name: "Celestial Safari",
  rounding: 14,
  spacing: 24,
  global: {
    colors: {
      brand: "#263959"
    },
    font: {
      family: '"Roboto Slab"',
      face:
        "/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Slab Regular'), local('RobotoSlab-Regular'), url(https://fonts.gstatic.com/s/robotoslab/v9/BngMUXZYTXPIvIBgJJSb6ufA5qW54A.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Slab Regular'), local('RobotoSlab-Regular'), url(https://fonts.gstatic.com/s/robotoslab/v9/BngMUXZYTXPIvIBgJJSb6ufJ5qW54A.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Slab Regular'), local('RobotoSlab-Regular'), url(https://fonts.gstatic.com/s/robotoslab/v9/BngMUXZYTXPIvIBgJJSb6ufB5qW54A.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Slab Regular'), local('RobotoSlab-Regular'), url(https://fonts.gstatic.com/s/robotoslab/v9/BngMUXZYTXPIvIBgJJSb6ufO5qW54A.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Slab Regular'), local('RobotoSlab-Regular'), url(https://fonts.gstatic.com/s/robotoslab/v9/BngMUXZYTXPIvIBgJJSb6ufC5qW54A.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Slab Regular'), local('RobotoSlab-Regular'), url(https://fonts.gstatic.com/s/robotoslab/v9/BngMUXZYTXPIvIBgJJSb6ufD5qW54A.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Slab Regular'), local('RobotoSlab-Regular'), url(https://fonts.gstatic.com/s/robotoslab/v9/BngMUXZYTXPIvIBgJJSb6ufN5qU.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin */\n@font-face {\n  font-family: 'Megrim';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Megrim'), url(https://fonts.gstatic.com/s/megrim/v10/46kulbz5WjvLqJZVam_h.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    },
    control: {
      border: {
        radius: "14px"
      }
    },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "4px",
      large: "12px",
      xlarge: "24px"
    },
    breakpoints: {
      small: {
        value: 768,
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: "4px",
          large: "6px",
          xlarge: "12px"
        },
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "2px",
          xsmall: "3px",
          small: "6px",
          medium: "12px",
          large: "24px",
          xlarge: "48px"
        },
        size: {
          xxsmall: "24px",
          xsmall: "48px",
          small: "96px",
          medium: "192px",
          large: "384px",
          xlarge: "768px",
          full: "100%"
        }
      },
      medium: {
        value: 1536
      },
      large: {}
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "3px",
      xsmall: "6px",
      small: "12px",
      medium: "24px",
      large: "48px",
      xlarge: "96px",
      responsiveBreakpoint: "small"
    },
    input: {
      padding: "12px",
      weight: 600
    },
    spacing: "24px",
    size: {
      xxsmall: "48px",
      xsmall: "96px",
      small: "192px",
      medium: "384px",
      large: "768px",
      xlarge: "1152px",
      xxlarge: "1536px",
      full: "100%"
    }
  },
  heading: {
    level: {
      "1": {
        small: {
          size: "34px",
          height: "40px",
          maxWidth: "816px"
        },
        medium: {
          size: "50px",
          height: "56px",
          maxWidth: "1200px"
        },
        large: {
          size: "82px",
          height: "88px",
          maxWidth: "1968px"
        },
        xlarge: {
          size: "114px",
          height: "120px",
          maxWidth: "2736px"
        }
      },
      "2": {
        small: {
          size: "26px",
          height: "32px",
          maxWidth: "624px"
        },
        medium: {
          size: "34px",
          height: "40px",
          maxWidth: "816px"
        },
        large: {
          size: "50px",
          height: "56px",
          maxWidth: "1200px"
        },
        xlarge: {
          size: "66px",
          height: "72px",
          maxWidth: "1584px"
        }
      },
      "3": {
        small: {
          size: "22px",
          height: "28px",
          maxWidth: "528px"
        },
        medium: {
          size: "26px",
          height: "32px",
          maxWidth: "624px"
        },
        large: {
          size: "34px",
          height: "40px",
          maxWidth: "816px"
        },
        xlarge: {
          size: "42px",
          height: "48px",
          maxWidth: "1008px"
        }
      },
      "4": {
        small: {
          size: "18px",
          height: "24px",
          maxWidth: "432px"
        },
        medium: {
          size: "18px",
          height: "24px",
          maxWidth: "432px"
        },
        large: {
          size: "18px",
          height: "24px",
          maxWidth: "432px"
        },
        xlarge: {
          size: "18px",
          height: "24px",
          maxWidth: "432px"
        }
      },
      "5": {
        small: {
          size: "16px",
          height: "22px",
          maxWidth: "384px"
        },
        medium: {
          size: "16px",
          height: "22px",
          maxWidth: "384px"
        },
        large: {
          size: "16px",
          height: "22px",
          maxWidth: "384px"
        },
        xlarge: {
          size: "16px",
          height: "22px",
          maxWidth: "384px"
        }
      },
      "6": {
        small: {
          size: "14px",
          height: "20px",
          maxWidth: "336px"
        },
        medium: {
          size: "14px",
          height: "20px",
          maxWidth: "336px"
        },
        large: {
          size: "14px",
          height: "20px",
          maxWidth: "336px"
        },
        xlarge: {
          size: "14px",
          height: "20px",
          maxWidth: "336px"
        }
      }
    },
    font: {
      family: '"Megrim"'
    }
  },
  button: {
    border: {
      width: "2px",
      radius: "18px"
    },
    padding: {
      vertical: "4px",
      horizontal: "22px"
    }
  },
  checkBox: {
    check: {
      radius: "14px"
    },
    toggle: {
      radius: "24px",
      size: "48px"
    },
    size: "24px"
  },
  radioButton: {
    size: "24px"
  },
  calendar: {
    small: {
      fontSize: "14px",
      lineHeight: 1.375,
      daySize: "27.428571428571427px"
    },
    medium: {
      fontSize: "18px",
      lineHeight: 1.45,
      daySize: "54.857142857142854px"
    },
    large: {
      fontSize: "30px",
      lineHeight: 1.11,
      daySize: "109.71428571428571px"
    }
  },
  clock: {
    analog: {
      hour: {
        width: "8px",
        size: "24px"
      },
      minute: {
        width: "4px",
        size: "12px"
      },
      second: {
        width: "3px",
        size: "9px"
      },
      size: {
        small: "72px",
        medium: "96px",
        large: "144px",
        xlarge: "216px",
        huge: "288px"
      }
    },
    digital: {
      text: {
        xsmall: {
          size: "10px",
          height: 1.5
        },
        small: {
          size: "14px",
          height: 1.43
        },
        medium: {
          size: "18px",
          height: 1.375
        },
        large: {
          size: "22px",
          height: 1.167
        },
        xlarge: {
          size: "26px",
          height: 1.1875
        },
        xxlarge: {
          size: "34px",
          height: 1.125
        }
      }
    }
  },
  paragraph: {
    small: {
      size: "14px",
      height: "20px",
      maxWidth: "336px"
    },
    medium: {
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    },
    large: {
      size: "22px",
      height: "28px",
      maxWidth: "528px"
    },
    xlarge: {
      size: "26px",
      height: "32px",
      maxWidth: "624px"
    },
    xxlarge: {
      size: "34px",
      height: "40px",
      maxWidth: "816px"
    }
  },
  text: {
    xsmall: {
      size: "12px",
      height: "18px",
      maxWidth: "288px"
    },
    small: {
      size: "14px",
      height: "20px",
      maxWidth: "336px"
    },
    medium: {
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    },
    large: {
      size: "22px",
      height: "28px",
      maxWidth: "528px"
    },
    xlarge: {
      size: "26px",
      height: "32px",
      maxWidth: "624px"
    },
    xxlarge: {
      size: "34px",
      height: "40px",
      maxWidth: "816px"
    }
  }
};

export default theme;
