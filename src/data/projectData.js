export const projectData = [
  // Project #1 - HireMe Mock Interview
  {
    id: 1,
    title: "HireMe Mock Interview Web Application",
    about: "This is a web application that provides a platform for users in various career paths and levels to practice common interview questions similar to a mock interview. I was inspired to create this project when hearing about some of my friends and family members struggling when it came to verbally responding to common interview questions.\n\nThe problem was that even though they knew websites or had a word document of possible questions, they did not have a simple platform that would force them to answer each question one at a time or could provide simple tools such as a timer or stopwatch. My solution was to develop this platform that provided common interview questions but also allowed users to generate their own custom question sets.\n\nThe project uses React with TypeScript and Redux Toolkit for state management. Redux Toolkit was utilized to allow for a number of user interactions to be tracked and saved if necessary to local storage.",
    challenges: "The Redux Toolkit library was utilized to manage state across the application. The initial configuration of the store had to be carefully designed for the 3 different reducers (customQuestionSets, hireMeQuestionSets, and users) and the listener middleware.\n\nThe slices were created in separate files to better organize the various states since each would have a different initial state and how the state would be updated.\n\nThe listener middleware utilized the 'createListenerMiddle' function from the Redux Toolkit library. This initial configuration was critical for storing data from the custom question sets and user's favorites in local storage.",
    github: "https://github.com/jomelbautista/hiremeinterview-react-ts-rtk",
    link: "https://hireme-mockinterview.onrender.com/",
    techStack: "React | TypeScript | Redux Toolkit Library",
    images: [
      {
        id: 1,
        alt: "Project Homepage",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683177525/jomelbautista-portfolio/homePage_gtis2w.png",
        caption: 'The homepage allows users to see avaible mock interview question sets (both default and user generated sets). The user can click an existing deck to begin a mock interview or navigate to the new set page.'
      },
      {
        id: 2,
        alt: "Custom Question Set",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683177525/jomelbautista-portfolio/customSet_eomsb3.png",
        caption: 'Users have the ability to create their own custom mock interview question sets which can hold as many questions as they would like. Users can also edit and delete their custom sets. Data is saved to local storage through configuration of listener middleware in the Redux Toolkit store.'
      },
      {
        id: 3,
        alt: "Sample Mock Interview 1",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683177524/jomelbautista-portfolio/demoQuestion_cyrwq3.png",
        caption: 'After a user clicks a deck, the mock interface displays the first question. The user then practices reciting their answer aloud. The user can then go to the next or previous question as well as use the available tools such as the timer.'
      },
      {
        id: 4,
        alt: "Sample Mocke Interview 2",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683177525/jomelbautista-portfolio/demoQuestion2_omanju.png",
        caption: 'In case the user prefers to see how long their response is, the user can toggle the stopwatch to time their response. Using the useRef hook, the timer and stopwatch function does not reset between rerenders.'
      },
    ],
    codeSnippets: [
      {
        id: 1,
        alt: "Listener Middleware Code Snippet",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683264086/jomelbautista-portfolio/hmmiListenerMiddleware_fs0rrm.png",
        caption: "The Redux Toolkit library offered functions that made configuring middleware simpler. This is an example of the listenerMiddle being set up to configure localStorage if the user were to create a custom question set based on the action type dispatched."
      },
      {
        id: 2,
        alt: "Custom Question Set Slice",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683264284/jomelbautista-portfolio/hmmiSliceCreation_yri6ig.png",
        caption: "Slices were defined with case reducers to handle specific actions if the action were dispatched from a component within the app. This example shows the case reducers for the custom question sets."
      },
      {
        id: 3,
        alt: "Custom Question Set Interafce",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683264635/jomelbautista-portfolio/hmmiInterface_iosdra.png",
        caption: "Since custom question sets could have as few or as many questions as the user desired, the form had to allow for a variable number of questions. This meant relying on an array in the interface definition for questions."
      },
      {
        id: 4,
        alt: "Form Entry",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683264511/jomelbautista-portfolio/hmmiForm_ynksdl.png",
        caption: "In addition to the slice state being configured to handle a variable number of questions, the form to accept the data had to allow for a variable number of inputs. This code shows how I achieved the addition or removal of user question inputs."
      },
    ],
  },
  // Project #2 - South Bay Rehab and Performance
  {
    id: 2,
    title: "South Bay Rehab and Performance Website",
    about: "I developed a modern, mobile responsive business website for a new private chiropractic clinic. The client previously relied solely on a Google Business Page but did not like the limited customizations and inability to make their page look unique.\n\nThe client also had a previous website that was built with a basic HTML and CSS code structure. I used this project to develop truly reusable React components that could easily be utilized in other projects. Using the React framework, I also focused on modularizing the code so that data could easily be updated without too many modifications to the components themselves but rather just the data being passed into them as props.",
    challenges: "The challenge with this project was focusing on the reusability aspect of the components. To achieve this, the components had to be thoroughly planned out to be able to receive a variable amount of props.",
    github: "https://github.com/jomelbautista/react-tkhmovement",
    link: "https://southbayrehabandperformance.onrender.com/",
    techStack: "React",
    images: [
      {
        id: 1,
        alt: "Project Homepage",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683179410/jomelbautista-portfolio/tkhMovementHomePage_h4dte2.png",
        caption: 'The landing page was a point of emphasis for the client as they wanted to have an exciting display for potential customers to see the services the Doctor had to offer in an attention drawing manner.'
      },
      {
        id: 2,
        alt: "Scheduler",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683179409/jomelbautista-portfolio/tkhMovementScheduler_vn4gnr.png",
        caption: 'The scheduler uses a custom reusable accordion component which has the ability to generate additional panels if the client requests to display more services.'
      },
      {
        id: 3,
        alt: "Testimonials",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683179410/jomelbautista-portfolio/tkhMovementTestimonials_zb3vvp.png",
        caption: 'The testimonials slider was a custom component which also has the ability to dynamically generate additional slides based on the amount of testimonial data.'
      },
    ],
    codeSnippets: [
      {
        id: 1,
        alt: "Buttons Component",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683266590/jomelbautista-portfolio/tkhButtons_asex2z.png",
        caption: "The Buttons component shown, uses '...rest' to allow other props to be passed that are not specifically defined. This was important for items such as eventHandlers that we may not be sure exist. The component also uses the 'classNames' package to simplify conditional rendering based on customly created classNames.",
      },
      {
        id: 2,
        alt: "Slider Component",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683266596/jomelbautista-portfolio/tkhSlider_wi1bx3.png",
        caption: "The Slider and Slide components are another example of a reusable and scalable component based on the number of objects in the data array being passed in. Additional slides will render if additional data is added to the data array of objects.",
      },
      {
        id: 3,
        alt: "Accordion Component",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683266592/jomelbautista-portfolio/tkhAccordion_nomg2x.png",
        caption: "The Accordion component uses the useState hook to determine if an accordion item should be expanded or not. The state is updated when the click event handler is called. In order to show a change on the screen, state is used.",
      },
    ],
  },
  {
    id: 3,
    title: "Youth Basketball Organization Full-Stack Web Application",
    about: "This is a full-stack project which allows the admin of a youth sports organization to post blog posts, share images, and update team rosters. The creating, reading, updating, and deleting of content is achieved through a content management dashboard which requires the user to be authorized and authenticated.\n\nThe backend of the project uses MongoDB, Express, and Node.js with the support of packages such as JSON WebTokens and Bcrypt. The frontend of the project uses React.\n\nTo handle the uploading, storage, and fetching of uploaded photos, the Cloudinary API was used. More detail on this API configuration can be seen in the challenges section.",
    challenges: "A unique function of this web application was allowing the logged in admin to upload, store photos, and display photos on the public facing pages (in this case the blog and featured news section). While MongoDB could handle images, it is not recommended. To resolve this problem, I used the Cloudinary RESTful API and configured my custom backend API to correctly handle a file upload per the Cloudinary documentation. MongoDB was used to simply store the image URL which was obtained from Cloudinary.\n\nAnother challenge was requiring admin users to be logged in if they chose to modify content. After days of research, I found that one of the most secure ways to handle user log in was using JSON Webtoken access and refresh tokens. These tokens were critical so that any actions that were completed on the admin end could properly be authenticated before modifying data.",
    github: "https://github.com/jomelbautista/san-diego-relentless-backend",
    link: "https://sdr-beta-frontend.onrender.com/",
    techStack: "MongoDB | Express | React | Node.js",
    images: [
      {
        id: 1,
        alt: "Project Homepage",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683268387/jomelbautista-portfolio/bballHomepage_tretvr.png",
        caption: 'The homepage displays important photos and featured news. The React Bootstrap library was utilized to focus on the full-stack development. The components used include the navBar and carousel.'
      },
      {
        id: 2,
        alt: "Admin Content Manager",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683268381/jomelbautista-portfolio/bballContentManager_zjinry.png",
        caption: 'Authorized users can sign in to the admin dashboard to access the content manager. The content manager was built from scratch and allows new content to be created and existing content to be updated or deleted. Data is accessed and stored using MongoDB in addition to the custom API endpoints.'
      },
      {
        id: 3,
        alt: "New Post Form",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683268392/jomelbautista-portfolio/bballNewPostForm_vlcfah.png",
        caption: 'A key component to the blog and news aspect of the project was the ability to post images. The use of the Cloudinary API made this possible.'
      },
    ],
    codeSnippets: [
      {
        id: 1,
        alt: "Context API",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683267704/jomelbautista-portfolio/bballContext_jpcgor.png",
        caption: "The React Context API was used to manage the state of the application. The code snippet is an example of a reducer with action types that are eventually passed to children components using the context provider."
      },
      {
        id: 2,
        alt: "API Endpoint Communication",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683267518/jomelbautista-portfolio/bballNewPost_edzre0.png",
        caption: "API endpoints were designed to handle the creation of new post data along with all standard CRUD functionality as long as the user was authenticated and authorized based on their role.",
      },
      {
        id: 3,
        alt: "JSON Webtoken",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683267445/jomelbautista-portfolio/bballJSONWebtoken_ztfv03.png",
        caption: "The JSON Webtoken package was used for authentication via access and refresh tokens. Using refresh token, I was able to allow persistent login if the user indicated the device in use was trustworthy."
      },
      {
        id: 4,
        alt: "Cloudinary API Configuration",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683267480/jomelbautista-portfolio/bballCloudinary_lsfqew.png",
        caption: "The Cloudinary RESTful API was configured in the backend API to correctly handle a file upload per the Cloudinary documentation. Using the API, authorized users could also update and delete photos.",
      },
    ],
  },

  // Project #4 - Lindsay's Good Dog Services
  {
    id: 4,
    title: "Lindsay's Good Dog Services Business Website",
    about: "I developed a modern, mobile responsive business website for a newly founded dog grooming small business. The small business had just opened up nearby and I had taken my dog in for grooming. I noticed that they only had a Facebook page and did not have a website unlike their main competitor in town. I offered to build the owner a website using the new React and TypeScript skills I was developing.\n\nWithin the first month, the website generated 855 impressions and reached the number 2 search position. This was done by following best practices of SEO within the code. The owner was happy for the first iteration of the project and requested to expand on the website with additional content in the future.",
    challenges: "The main challenge with this project was taking my existing skills in JavaScript and the React Framework and adapting to the practices of TypeScript. While I completed a number of exercises in pure TypeScript, it was a challenge to understand the protocols for React with TypeScript.\n\nThroughout the code, I implemented type interfaces when passing props to components which will make expanding on the existing code easier in the future as I know what a component can and cannot accept.",
    github: "https://github.com/jomelbautista/lindsays-good-dog-services",
    link: "https://lindsaysgooddogservices.com/",
    techStack: "React | TypeScript",
    images: [
      {
        id: 1,
        alt: "Project Homepage",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683180065/jomelbautista-portfolio/lgdsHomePage_kulzkc.png",
        caption: 'The landing page provides a recognizable logo and color scheme that matches the large physical sign outside of the building at its physical location. "Contact Us" and "Testimonials" buttons are clearly presented that will jump the user to the appropriate section.'
      },
      {
        id: 2,
        alt: "Mobile Navbar",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683180065/jomelbautista-portfolio/lgdsMenuModal_pmuars.png",
        caption: 'A point of emphasis for this project was the mobile responsiveness. To know when a user was on a mobile device or smaller screen, I used a custom React Hook to recognize this and render a side navigation bar.'
      },
      {
        id: 3,
        alt: "Customer Form",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683180065/jomelbautista-portfolio/lgdsContactPage_kfrmck.png",
        caption: "The business was overwhelmed with phone calls and voicemails. To support the growth of the business, I built a contact form which automatically sent an email to the business with the customer's request. The business could then follow up with the customer based on their inquiry. Based on follow-up conversations, the contact form had brought in many new customers."
      },
    ],
    codeSnippets: [
      {
        id: 1,
        alt: "Custom Hook",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683265032/jomelbautista-portfolio/lgdsCustomHook_asoccx.png",
        caption: "To know when to render a full-size navbar or a side navbar, I used a custom React Hook to recognize this and render a side navigation bar. The string '(min-width:768px)' was the passed parameter to this hook to determine if the screen was larger than a typical small screen."
      },
      {
        id: 2,
        alt: "TypeScript Props 1",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683265353/jomelbautista-portfolio/lgdsProps_u2itxm.png",
        caption: "Understanding the requirements of defining passed props to components was essential for completing this project. Doing so will allow for future expansion on the existing code."
      },
      {
        id: 3,
        alt: "TypeScript Props 2",
        src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1683265357/jomelbautista-portfolio/lgdsProps2_avxrl4.png",
        caption: "This is another example of props being defined for the gallery item component. The second part of the code snippet is an example of the Framer Motion package being configured to provide animations."
      },
    ],
  },
]