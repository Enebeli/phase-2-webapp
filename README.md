### READ ME
--- Project Phase 2 --- 
Responsive Navigation and Routing

## TO INSTALL
- install dependencies (npm install)
- install directus/sdk (npm install @directus/sdk)
- install prop-types used in navbar (npm install prop-types)
- this project is deployed on Vercel (https://phase-2-webapp.vercel.app/)

## GOALS
- [DONE] Code optimization
  - [DONE] CSS so that there aren't any code competing with each other (Should it be in all separate folders??)
  - [DONE] Create a reusable button component
  - [DONE] Input form reusable component
  - [DONE] Form container reusable component
  - [DONE] Remove login in navbar when user is in dashboard
  - [DONE] Remove signup in navbar when user is in dashboard
- [DONE] Create a separate header component (NAVBAR)
- [DONE] Create a separate footer component
- [DONE] Add regex pattern for input fields
- [DONE] Routing page 1 - About Us
- [DONE] Routing page 2 - Archive Page 

- Modularization:
  - [DONE] Review code to plan for DRY high level (layouts)
  - [DONE] Outline and build components (minimal styles, focus on functionality)
  - [DONE] Style content and make it responsive

## DEBUG
- [FIXED] Button was not submitting
  - forgot to add type="submit"
- [FIXED] Error pushing commits on github repository
  - File Image is too big, need to resize the file.
- [FIXED] fix button hydration
  -  installed prop-types 
- [FIXED] fix the navbar links
  - properly show the links being rendered in each page
- [FIXED] navlinks breaking when size reaches 600 px
  - changed into a burger menu when screen size is 600px below.

## DELEGATION OF WORK
- [Alyanna] - in charge of optimizing the code
- [Marshall] - in charge of making sure the first routing works (About Page)
- [Jahswill] - in charge of making sure the 2nd routing works (Archives)
  # Online Collaborative Tool - Figjam 
   - [Figjam Link for Code Optimization](https://www.figma.com/board/oQ1lZgnoHZz4e9IKuRaffA/Code-Optimization?node-id=0-1&p=f&t=8z4ZLF5FhIWlmSUF-0)
   - [Figjam Link for Code Learning as a Group](https://www.figma.com/board/KR0hROzfDr24U9GGr3UCSZ/Phase-2?node-id=0-1&p=f&t=w8Y2uD2SwzFrHsb4-0)

## RESOURCES
- [Deploy Directus on Render.com](https://blog.jamin.sh/how-to-deploy-directus-to-rendercom)
- [Directus Authentication in Next JS](https://directus.io/docs/tutorials/getting-started/using-authentication-in-next-js)
- [Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [PropTypes](https://nextjs.org/learn/react-foundations/displaying-data-with-props)
- [Passing Props](https://react.dev/learn/passing-props-to-a-component)
- [Understanding Regular Expression - Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)