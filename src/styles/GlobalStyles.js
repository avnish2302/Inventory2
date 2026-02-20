import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* =========================================
   DESIGN TOKENS
========================================= */

:root {

  /* Brand Colors */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;


  /* Border Radius */
  --radius-xs: 3px;
  --radius-sm: 5px;
  --radius-md: 7px;
  --radius-lg: 10px;

  /* Shadows */
--shadow-color: 146, 64, 14; /* brown-700 */

--shadow-sm: 0 2px 4px rgba(var(--shadow-color), 0.18);

--shadow-md:
  0 2px 6px rgba(var(--shadow-color), 0.18),
  0 12px 28px rgba(var(--shadow-color), 0.22);

--shadow-lg:
  0 4px 10px rgba(var(--shadow-color), 0.22),
  0 20px 40px rgba(var(--shadow-color), 0.30);
}

/* =========================================
   LIGHT MODE
========================================= */

html.light-mode {

--color-brown-50:  #fdf8f3;
--color-brown-100: #fbe9d7;
--color-brown-200: #f7d1ae;
--color-brown-300: #f1b77f;
--color-brown-400: #e89b4f;
--color-brown-500: #d97706;  /* primary amber */
--color-brown-600: #b45309;
--color-brown-700: #92400e;
--color-brown-800: #78350f;
--color-brown-900: #451a03;


  --color-grey-0: #ffffff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --bg-main: var(--color-grey-50);
  --bg-card: var(--color-grey-0);
  --border-color: var(--color-brown-600);

  --text-primary: var(--color-grey-900);
  --text-secondary: var(--color-grey-600);

  --backdrop-color: rgba(255,255,255,0.1);

  --image-grayscale: 0;
  --image-opacity: 100%;
}

/* =========================================
   DARK MODE
========================================= */

html.dark-mode {

/* Brown / Amber Scale */
--color-brown-900:  #fdf8f3;
--color-brown-800: #fbe9d7;
--color-brown-700: #f7d1ae;
--color-brown-600: #f1b77f;
--color-brown-500: #e89b4f;
--color-brown-400: #d97706;  /* primary amber */
--color-brown-300: #b45309;
--color-brown-200: #92400e;
--color-brown-100: #78350f;
--color-brown-50: #451a03;



  --color-grey-0: #18212f;
  --color-grey-50: #111827;
  --color-grey-100: #1f2937;
  --color-grey-200: #374151;
  --color-grey-300: #4b5563;
  --color-grey-400: #6b7280;
  --color-grey-500: #9ca3af;
  --color-grey-600: #d1d5db;
  --color-grey-700: #e5e7eb;
  --color-grey-800: #f3f4f6;
  --color-grey-900: #f9fafb;

  --bg-main: var(--color-grey-50);
  --bg-card: var(--color-grey-100);
  --border-color: var(--color-grey-200);

  --text-primary: var(--color-grey-800);
  --text-secondary: var(--color-grey-500);

  --backdrop-color: rgba(0,0,0,0.3);

  --shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
  --shadow-md: 0 6px 24px rgba(0,0,0,0.3);
  --shadow-lg: 0 24px 32px rgba(0,0,0,0.4);

  --image-grayscale: 10%;
  --image-opacity: 90%;
}

/* =========================================
   RESET
========================================= */

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s, color 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--bg-main);
  color: var(--text-primary);
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

/* =========================================
   GLOBAL ELEMENT STYLES
========================================= */

button {
  cursor: pointer;
  font-family: inherit;
  border: none;
}

input,
textarea,
select {
  font: inherit;
  color: inherit;
}

*:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline : none;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

/* =========================================
   SCROLLBAR
========================================= */

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-grey-100);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--color-grey-400);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-grey-500);
}

`;

export default GlobalStyles;