import { NAVLINKTYPE, NEWSTYPES, PICTYPE, QATYPE } from "./types";

export const DOMAIN = "http://localhost:3000/";
export const NAVLINKS: NAVLINKTYPE = [
  {
    title: "RELEASES",
    linkTo: "/",
  },
  {
    title: "WAIT LIST",
    linkTo: "/",
  },
  {
    title: "ABOUT US",
    linkTo: "/",
  },
  {
    title: "CONTACT",
    linkTo: "/",
  },
];

export const EXTRANAVLINKS: NAVLINKTYPE = [
  {
    title: "HOME",
    linkTo: "/",
  },
  {
    title: "RELEASES",
    linkTo: "/",
  },
  {
    title: "WAIT LIST",
    linkTo: "/",
  },
  {
    title: "ABOUT US",
    linkTo: "/",
  },
  {
    title: "CONTACT",
    linkTo: "/",
  },
  {
    title: "MEMBERS",
    linkTo: "/",
  },
  {
    title: "NEWS",
    linkTo: "/",
  },
];

export const NEWS: NEWSTYPES = [
  {
    id: "ai-has-indulged-clothing-industry",
    title: "Ai Has Indulged Clothing Industry",
    smallDescription:
      "Papa Khan announces the end of his decade-long music career",
    thumbnail:
      "https://i.pinimg.com/736x/90/cf/e6/90cfe6ee75389e0ef7c73b4c5c1480d5.jpg",
    date: "Thursday, October 3, 2024",
    content: (
      <>
        <p>
          <strong>The Myth of the &quot;Best&quot; Roadmap</strong>
        </p>
        <p>
          When embarking on the journey of learning web development, one of the
          most common questions beginners ask is, &quot;What is the best
          roadmap?&quot; The truth is, there&#39;s no single &quot;best&quot;
          path. Every developer&#39;s journey is unique, influenced by their
          learning style, goals, and interests. What works for one person might
          not be ideal for another.
        </p>
        <p>
          <strong>A Recommended Approach</strong>
        </p>
        <p>
          While there&#39;s no definitive &quot;best&quot; roadmap, here&#39;s a
          suggested approach that can provide a solid foundation for beginners:
        </p>
        <h3>
          1. <strong>Master the Fundamentals: HTML, CSS, and JavaScript</strong>
        </h3>
        <ul>
          <li>
            <strong>HTML (Hypertext Markup Language):</strong> This is the
            backbone of web pages. Learn how to structure content using elements
            like headings, paragraphs, lists, and images.
          </li>
          <li>
            <strong>CSS (Cascading Style Sheets):</strong> This language is used
            to style HTML elements, controlling their appearance, layout, and
            responsiveness.
          </li>
          <li>
            <strong>JavaScript:</strong> This programming language adds
            interactivity to web pages. Learn about variables, data types,
            functions, events, and DOM manipulation.
          </li>
        </ul>
        <h3>
          2. <strong>Dive into a Framework: React or Next.js</strong>
        </h3>
        <ul>
          <li>
            <strong>React:</strong> A popular JavaScript library for building
            user interfaces. It&#39;s component-based, making it easier to
            manage complex applications.
          </li>
          <li>
            <strong>Next.js:</strong> A React framework that provides features
            like server-side rendering, static site generation, and routing,
            making it a great choice for building scalable web applications.
          </li>
        </ul>
        <h3>
          3. <strong>Learn npm and Package Management</strong>
        </h3>
        <ul>
          <li>
            <strong>npm (Node Package Manager):</strong> This tool is essential
            for managing dependencies in your projects. Learn how to install,
            update, and remove packages.
          </li>
        </ul>
        <h3>
          4. <strong>Understand Version Control with Git and GitHub</strong>
        </h3>
        <ul>
          <li>
            <strong>Git:</strong> A distributed version control system that
            allows you to track changes to your code and collaborate with
            others.
          </li>
          <li>
            <strong>GitHub:</strong> A popular platform for hosting Git
            repositories and collaborating with other developers.
          </li>
        </ul>
        <h3>
          5. <strong>Explore Authentication and Backend Services</strong>
        </h3>
        <ul>
          <li>
            <strong>Clerkauth:</strong> A user authentication and authorization
            platform that can simplify the process of adding login and signup
            features to your web applications.
          </li>
          <li>
            <strong>Supabase:</strong> A backend-as-a-service (BaaS) platform
            that provides features like databases, authentication, storage, and
            real-time functionality.
          </li>
        </ul>
        <p>
          <strong>Why This Approach?</strong>
        </p>
        <p>
          This roadmap is designed to provide a strong foundation in web
          development while also introducing modern tools and technologies that
          are widely used in the industry. By following these steps, you&#39;ll
          be well-equipped to build a variety of web applications, from simple
          websites to complex web apps.
        </p>
        <p>
          <strong>Remember, Learning is a Journey</strong>
        </p>
        <p>
          The most important thing is to stay curious, experiment, and don&#39;t
          be afraid to make mistakes. Learning web development takes time and
          effort, but the rewards can be immense. As you progress, you&#39;ll
          discover new tools, technologies, and approaches that can enhance your
          skills and help you achieve your goals.
        </p>
      </>
    ),
  },
];

export const RELEASES: NEWSTYPES = [
  {
    id: "",
    title: "UVIBE V0.2",
    smallDescription:
      "Papa Khan announces the end of his decade-long music career",
    thumbnail:
      "https://i.pinimg.com/736x/1d/1d/fa/1d1dfa97b21db367f4e90e405a3bcb16.jpg",
    date: "Thursday, October 3, 2024",
    content: undefined,
  },
];

export const important = {
  title: "Important",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio? Aliquam molestias aliquid fugiat impedit.",
  link: "/",
  image:
    "https://i.pinimg.com/736x/c5/ad/c5/c5adc567d8eae34a44a9ac8e5044738c.jpg",
};

export const FELLASPICS: PICTYPE = [
  {
    pic: "https://hxcqxvdpfctfywkxocdr.supabase.co/storage/v1/object/public/MyPics/417004144_7353108951406614_4077275856017111278_n.jpg",
    date: "10/3/2024",
    location: "EL KALA, TAREF",
  },
  {
    pic: "https://hxcqxvdpfctfywkxocdr.supabase.co/storage/v1/object/public/MyPics/420153614_1049445229682200_786113159745524306_n.jpg",
    date: "10aksdnlkadlaskd",
    location: "aksdnlkadlaskd",
  },
];

export const QADATA: QATYPE = [
  {
    question: "What is uvibe?",
    answer:
      "uvibe is an AI-powered personal stylist that helps you curate stylish outfits based on your preferences, body type, and occasion.",
  },
  {
    question: "How does uvibe work?",
    answer:
      "Simply provide information about your style preferences, body type, and occasion, and uvibe will suggest personalized outfit combinations.",
  },
  {
    question: "Is uvibe available on both web and mobile?",
    answer:
      "Yes, uvibe is available as both a web application and a mobile app, making it convenient to access anytime, anywhere.",
  },
  {
    question:
      "Can uvibe suggest outfits for specific occasions like weddings, parties, or casual outings?",
    answer:
      "Absolutely! uvibe can tailor outfit suggestions to various events, ensuring you always look your best.",
  },
  {
    question: "Can I save my favorite outfits or styles?",
    answer:
      "Yes, you can create a personal style board to save outfits you like and refer to them later.",
  },
  {
    question: "Does uvibe consider my budget when suggesting outfits?",
    answer:
      "You can set a budget preference within the app, and uvibe will provide outfit options that align with your financial constraints.",
  },
  {
    question:
      "Can I request specific items or brands to be included in my outfit suggestions?",
    answer:
      "Yes, you can input specific items or brands you prefer, and uvibe will incorporate them into your outfit recommendations.",
  },
  {
    question: "Is uvibe compatible with all devices and operating systems?",
    answer:
      "uvibe is designed to be compatible with most modern devices and operating systems.",
  },
  {
    question: "Does uvibe require an internet connection to function?",
    answer:
      "Yes, an internet connection is necessary to access uvibe's features and receive outfit suggestions.",
  },
  {
    question: "How often does uvibe update its outfit recommendations?",
    answer:
      "uvibe's algorithm is constantly evolving, so you can expect new and updated outfit suggestions over time.",
  },
  {
    question: "Can I provide feedback on uvibe's recommendations?",
    answer:
      "Yes, you can provide feedback on outfit suggestions to help improve uvibe's accuracy and personalization.",
  },
];
