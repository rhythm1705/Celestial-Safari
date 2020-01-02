import { css } from "styled-components";

const theme = {
	name: "Celestial",
	rounding: 16,
	spacing: 20,
	defaultMode: "light",
	global: {
		colors: {
			brand: {
				dark: "#007575",
				light: "#007575"
			},
			background: {
				dark: "#111111",
				light: "#FFFFFF"
			},
			"background-back": {
				dark: "#111111",
				light: "#EEEEEE"
			},
			"background-front": {
				dark: "#222222",
				light: "#FFFFFF"
			},
			"background-contrast": {
				dark: "#FFFFFF11",
				light: "#11111111"
			},
			text: {
				dark: "#EEEEEE",
				light: "#333333"
			},
			"text-strong": {
				dark: "#FFFFFF",
				light: "#000000"
			},
			"text-weak": {
				dark: "#CCCCCC",
				light: "#444444"
			},
			"text-xweak": {
				dark: "#999999",
				light: "#666666"
			},
			border: {
				light: "#CCCCCC",
				dark: "#444444"
			},
			control: {
				light: "#6807f9",
				dark: "#5205C5"
			},
			focus: "none",
			"active-background": "background-contrast",
			"active-text": "text-strong",
			"selected-background": {
				light: "brand",
				dark: "brand"
			},
			"selected-text": {
				light: "text-strong",
				dark: "text-strong"
			},
			"status-critical": "#FF4040",
			"status-warning": "#FFAA15",
			"status-ok": "#00C781",
			"status-unknown": "#CCCCCC",
			"status-disabled": "#CCCCCC",
			"graph-0": {
				light: "control",
				dark: "control"
			},
			"graph-1": {
				dark: "status-critical",
				light: "status-critical"
			}
		},
		font: {
			family: '"Roboto"',
			face:
				"/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* vietnamese */\n@font-face {\n  font-family: 'Major Mono Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Major Mono Display Regular'), local('MajorMonoDisplay-Regular'), url(https://fonts.gstatic.com/s/majormonodisplay/v4/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7AneREnc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Major Mono Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Major Mono Display Regular'), local('MajorMonoDisplay-Regular'), url(https://fonts.gstatic.com/s/majormonodisplay/v4/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7A3eREnc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Major Mono Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Major Mono Display Regular'), local('MajorMonoDisplay-Regular'), url(https://fonts.gstatic.com/s/majormonodisplay/v4/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7DXeR.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* vietnamese */\n@font-face {\n  font-family: 'Major Mono Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Major Mono Display Regular'), local('MajorMonoDisplay-Regular'), url(https://fonts.gstatic.com/s/majormonodisplay/v4/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7AneREnc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Major Mono Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Major Mono Display Regular'), local('MajorMonoDisplay-Regular'), url(https://fonts.gstatic.com/s/majormonodisplay/v4/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7A3eREnc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Major Mono Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Major Mono Display Regular'), local('MajorMonoDisplay-Regular'), url(https://fonts.gstatic.com/s/majormonodisplay/v4/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7DXeR.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* vietnamese */\n@font-face {\n  font-family: 'Major Mono Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Major Mono Display Regular'), local('MajorMonoDisplay-Regular'), url(https://fonts.gstatic.com/s/majormonodisplay/v4/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7AneREnc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Major Mono Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Major Mono Display Regular'), local('MajorMonoDisplay-Regular'), url(https://fonts.gstatic.com/s/majormonodisplay/v4/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7A3eREnc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Major Mono Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Major Mono Display Regular'), local('MajorMonoDisplay-Regular'), url(https://fonts.gstatic.com/s/majormonodisplay/v4/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7DXeR.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
			size: "15px",
			height: "20px",
			maxWidth: "300px"
		},
		active: {
			background: "active-background",
			color: "active-text"
		},
		hover: {
			background: "active-background",
			color: "active-text"
		},
		selected: {
			background: "selected-background",
			color: "selected-text"
		},
		control: {
			border: {
				radius: "16px"
			}
		},
		borderSize: {
			xsmall: "1px",
			small: "2px",
			medium: "3.3333333333333335px",
			large: "10px",
			xlarge: "20px"
		},
		breakpoints: {
			small: {
				value: 640,
				borderSize: {
					xsmall: "1px",
					small: "2px",
					medium: "3.3333333333333335px",
					large: "5px",
					xlarge: "10px"
				},
				edgeSize: {
					none: "0px",
					hair: "1px",
					xxsmall: "2px",
					xsmall: "2.5px",
					small: "5px",
					medium: "10px",
					large: "20px",
					xlarge: "40px"
				},
				size: {
					xxsmall: "20px",
					xsmall: "40px",
					small: "80px",
					medium: "160px",
					large: "320px",
					xlarge: "640px",
					full: "100%"
				}
			},
			medium: {
				value: 1280
			},
			large: {}
		},
		edgeSize: {
			none: "0px",
			hair: "1px",
			xxsmall: "2.5px",
			xsmall: "5px",
			small: "10px",
			medium: "20px",
			large: "40px",
			xlarge: "80px",
			responsiveBreakpoint: "small"
		},
		input: {
			padding: "10px",
			weight: 600
		},
		spacing: "20px",
		size: {
			xxsmall: "40px",
			xsmall: "80px",
			small: "160px",
			medium: "320px",
			large: "640px",
			xlarge: "960px",
			xxlarge: "1280px",
			full: "100%"
		},
		elevation: {
			light: {
				none: "none",
				xsmall: "0px 1px 2px rgba(0, 0, 0, 0.20)",
				small: "0px 2px 4px rgba(0, 0, 0, 0.20)",
				medium: "0px 4px 8px rgba(0, 0, 0, 0.20)",
				large: "0px 8px 16px rgba(0, 0, 0, 0.20)",
				xlarge: "0px 12px 24px rgba(0, 0, 0, 0.20)"
			},
			dark: {
				none: "none",
				xsmall: "0px 2px 2px rgba(0, 0, 0, 0.40)",
				small: "0px 4px 4px rgba(0, 0, 0, 0.40)",
				medium: "0px 6px 8px rgba(0, 0, 0, 1)",
				large: "0px 8px 16px rgba(0, 0, 0, 0.40)",
				xlarge: "0px 12px 24px rgba(0, 0, 0, 0.40)"
			}
		}
	},
	chart: {},
	diagram: {
		line: {}
	},
	meter: {},
	heading: {
		level: {
			"1": {
				small: {
					size: "31px",
					height: "36px",
					maxWidth: "620px"
				},
				medium: {
					size: "47px",
					height: "52px",
					maxWidth: "940px"
				},
				large: {
					size: "79px",
					height: "84px",
					maxWidth: "1580px"
				},
				xlarge: {
					size: "111px",
					height: "116px",
					maxWidth: "2220px"
				}
			},
			"2": {
				small: {
					size: "23px",
					height: "28px",
					maxWidth: "460px"
				},
				medium: {
					size: "31px",
					height: "36px",
					maxWidth: "620px"
				},
				large: {
					size: "47px",
					height: "52px",
					maxWidth: "940px"
				},
				xlarge: {
					size: "63px",
					height: "68px",
					maxWidth: "1260px"
				}
			},
			"3": {
				small: {
					size: "19px",
					height: "24px",
					maxWidth: "380px"
				},
				medium: {
					size: "23px",
					height: "28px",
					maxWidth: "460px"
				},
				large: {
					size: "31px",
					height: "36px",
					maxWidth: "620px"
				},
				xlarge: {
					size: "39px",
					height: "44px",
					maxWidth: "780px"
				}
			},
			"4": {
				small: {
					size: "15px",
					height: "20px",
					maxWidth: "300px"
				},
				medium: {
					size: "15px",
					height: "20px",
					maxWidth: "300px"
				},
				large: {
					size: "15px",
					height: "20px",
					maxWidth: "300px"
				},
				xlarge: {
					size: "15px",
					height: "20px",
					maxWidth: "300px"
				}
			},
			"5": {
				small: {
					size: "13px",
					height: "18px",
					maxWidth: "260px"
				},
				medium: {
					size: "13px",
					height: "18px",
					maxWidth: "260px"
				},
				large: {
					size: "13px",
					height: "18px",
					maxWidth: "260px"
				},
				xlarge: {
					size: "13px",
					height: "18px",
					maxWidth: "260px"
				}
			},
			"6": {
				small: {
					size: "11px",
					height: "16px",
					maxWidth: "220px"
				},
				medium: {
					size: "11px",
					height: "16px",
					maxWidth: "220px"
				},
				large: {
					size: "11px",
					height: "16px",
					maxWidth: "220px"
				},
				xlarge: {
					size: "11px",
					height: "16px",
					maxWidth: "220px"
				}
			}
		},
		font: {
			family: '"Major Mono Display"'
		}
	},
	button: {
		border: {
			width: "2px",
			radius: "15px"
		},
		padding: {
			vertical: "3px",
			horizontal: "18px"
		}
	},
	checkBox: {
		check: {
			radius: "16px"
		},
		toggle: {
			radius: "20px",
			size: "40px"
		},
		size: "20px"
	},
	radioButton: {
		size: "20px"
	},
	scale: 1.2,
	calendar: {
		small: {
			fontSize: "11px",
			lineHeight: 1.375,
			daySize: "22.857142857142858px"
		},
		medium: {
			fontSize: "15px",
			lineHeight: 1.45,
			daySize: "45.714285714285715px"
		},
		large: {
			fontSize: "27px",
			lineHeight: 1.11,
			daySize: "91.42857142857143px"
		}
	},
	clock: {
		analog: {
			hour: {
				width: "6.666666666666667px",
				size: "20px"
			},
			minute: {
				width: "3.3333333333333335px",
				size: "10px"
			},
			second: {
				width: "2.5px",
				size: "8px"
			},
			size: {
				small: "60px",
				medium: "80px",
				large: "120px",
				xlarge: "180px",
				huge: "240px"
			}
		},
		digital: {
			text: {
				xsmall: {
					size: "7px",
					height: 1.5
				},
				small: {
					size: "11px",
					height: 1.43
				},
				medium: {
					size: "15px",
					height: 1.375
				},
				large: {
					size: "19px",
					height: 1.167
				},
				xlarge: {
					size: "23px",
					height: 1.1875
				},
				xxlarge: {
					size: "31px",
					height: 1.125
				}
			}
		}
	},
	paragraph: {
		small: {
			size: "11px",
			height: "16px",
			maxWidth: "220px"
		},
		medium: {
			size: "15px",
			height: "20px",
			maxWidth: "300px"
		},
		large: {
			size: "19px",
			height: "24px",
			maxWidth: "380px"
		},
		xlarge: {
			size: "23px",
			height: "28px",
			maxWidth: "460px"
		},
		xxlarge: {
			size: "31px",
			height: "36px",
			maxWidth: "620px"
		}
	},
	text: {
		xsmall: {
			size: "9px",
			height: "14px",
			maxWidth: "180px"
		},
		small: {
			size: "11px",
			height: "16px",
			maxWidth: "220px"
		},
		medium: {
			size: "15px",
			height: "20px",
			maxWidth: "300px"
		},
		large: {
			size: "19px",
			height: "24px",
			maxWidth: "380px"
		},
		xlarge: {
			size: "23px",
			height: "28px",
			maxWidth: "460px"
		},
		xxlarge: {
			size: "31px",
			height: "36px",
			maxWidth: "620px"
		}
	},
	layer: {
		background: {
			dark: "#111111",
			light: "#FFFFFF"
		}
	},
	tabs: {
		panel: {
			extend: () => css``
		},
		header: {
			extend: () => css`
				margin: 10px;
				padding: none;
				background: none;
			`
		}
	},
	tab: {
		color: "textx-weak",
		active: {
			background: "brand",
			color: "text-strong"
		},
		hover: {
			color: "white"
		},
		border: undefined,
		margin: undefined,
		extend: () => css`
			border-radius: 16px;
			padding: 0 14px;
			text-align: center;
			line-height: 40px;
			position: relative;
			transition: 0.2s ease-in-out;
			overflow: hidden;

			&::after {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				transform: translateY(-100%);
				background-color: #007575;
				transition: transform 0.2s ease-out;
				z-index: -1;
			}

			&:hover {
				transition: 0.2s ease-out;
			}

			&:hover::after {
				transform: translateY(0);
				transition: transform 0.2s ease-in;
			}
		`
	}
};

export default theme;
