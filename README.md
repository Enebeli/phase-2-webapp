### READ ME

--- Project Phase 2 --- 
Responsive Navigation and Routing

## GOALS
- [DONE] Code optimization
  - [DONE] CSS so that there aren't any code competing with each other (Should it be in all separate folders??)
  - [DONE] Create a reusable button component
  - [DONE] Input form reusable component
  - [DONE] Form container reusable component
  - [DONE] Remove login in navbar when user is in dashboard
  - [DONE] Remove signup in navbar when user is in dashboard
- [DONE] Create a separate header component (NAVBAR)
- [] Create a separate footer component
- [] Routing page 1 - About Us
- [] Routing page 2 - Archive Page 


- Modularization:
  - [] Review code to plan for DRY high level (layouts)
  - [] Review code for needed error handling (user facing and dev facing)
  - [] Outline and build components (minimal styles, focus on functionality)
  - [] Style content and make it responsive

## DEBUG
- [DONE] Button was not submitting
  - [DONE] forgot to add type="submit"
- [DONE] Error pushing commits on github repository
  - [DONE] File Image is too big, need to resize the file.
- [DONE] fix button hydration - installed prop-types 
- [ ] add footer
- [DONE] fix the navbar links - properly show the links being rendered in each page

## RESOURCES
[Deploy Directus on Render.com](https://blog.jamin.sh/how-to-deploy-directus-to-rendercom)
[Directus Authentication in Next JS](https://directus.io/docs/tutorials/getting-started/using-authentication-in-next-js)
[Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
[Conditional Rendering](https://react.dev/learn/conditional-rendering)
[Passing Props](https://react.dev/learn/passing-props-to-a-component)

## TO INSTALL
- install dependencies (npm install)
- install directus/sdk (npm install @directus/sdk)
- install prop-types used in navbar (npm install prop-types)