// Course contnet

// Course item iterface
export interface CoursesItem {
  title: string;
  slug: string;
  subTitle: string;
  description: string;
  track: Track[];
}

// Track Interface
export interface Track {
  title: string;
  subTitle?: string;
  description?: string;
  type?: string;
  href?: string;
  outline?: Track[];
  subOutline?: Track[];
}

// Core Track Items
export const CORE_TRACK: Track[] = [
  {
    title: 'Quarter I',
    subTitle: 'CS-101: Object-Oriented Programming using TypeScript',
    description: `We will start the program by learning the fundamentals of Object-Oriented programming 
    using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and 
    Metaverse concepts and try to understand their working from the perspective of the users.`,
    outline: [
      {
        title: 'HTML and CSS',
        subOutline: [
          {
            title: 'Learn HTML by Hira Khan',
            type: 'video',
            href: 'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6',
          },
          {
            title: 'Learn CSS Intro by Hira Khan',
            type: 'video',
            href: 'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob',
          },
        ],
      },
      {
        title: 'Web 3.0 and Metaverse Theory',
        subOutline: [
          {
            title: 'Introduction to Panaverse DAO',
            type: 'reading',
            href: 'https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing',
          },
          {
            title: 'Web 3.0 User Guide',
            type: 'reading',
            href: 'https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing',
          },
          {
            title: 'Web 3.0 User Assignments from the guide',
            type: 'assignment',
            href: 'https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing',
          },
          {
            title: 'Virtual and Augmented  Metaverse User Guide',
            type: 'reading',
            href: 'https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing',
          },
        ],
      },
      {
        title: 'Fundamentals of Typescript',
        subOutline: [
          {
            title:
              'Background of JavaScript and How to use JavaScript in Browser',
            type: 'reading',
          },
          {
            title:
              'JavaScript from Beginner to Professional (Chapter 02 - 06 and 13)',
            type: 'reading',
            href: 'https://books.google.com.pk/books/about/JavaScript_from_Beginner_to_Professional.html?id=n_xTEAAAQBAJ&source=kp_book_description&redir_esc=y',
          },
          {
            title:
              'Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm',
            type: 'reading',
            href: 'https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing',
          },
          {
            title: 'JavaScript promises, mastering the asynchronous',
            type: 'reading',
            href: 'https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript',
          },
          {
            title: 'New JavaScript Features in ECMAScript 2022 and 2021',
            type: 'reading',
            href: 'https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg',
          },
          {
            title: 'Fundamentals of JavaScript and Node.js Quiz',
            type: 'quiz',
          },
          {
            title: 'TypeScript Presentation',
            type: 'reading',
            href: 'https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing',
          },
          {
            title: 'Getting Started Exercises with TypeScript and Node.js',
            type: 'assignment',
            href: 'https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md',
          },
        ],
      },
      {
        title: 'Object-Oriented Programming with TypeScript',
        subOutline: [
          {
            title:
              'Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript (Chapter 01 - 11)',
            type: 'reading',
            href: 'https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1 ',
          },
          {
            title: 'Learning Repository',
            type: 'github',
            href: 'https://github.com/panaverse/learn-typescript',
          },
          {
            title:
              'In Class Companion projects and articles for Learning TypeScript',
            type: 'assignment',
            href: 'https://www.learningtypescript.com/',
          },
          {
            title: 'Homework Project',
            type: 'assignment',
            href: 'https://github.com/panaverse/typescript-node-projects ',
          },
          {
            title: 'Fundamentals of TypeScript Quiz',
            type: 'quiz',
          },
          {
            title: 'TypeScript Professional Proficiency Quiz',
            type: 'quiz',
          },
        ],
      },
      {
        title: 'TypeScript for React',
        subOutline: [
          {
            title:
              'Minimal TypeScript Crash Course For React With Interactive Code Exercises',
            type: 'reading',
            href: 'https://profy.dev/article/react-typescript ',
          },
        ],
      },
      {
        title: 'Fundamentals of Version Control',
        subOutline: [
          {
            title: 'Version Control using Git and GitHub By Sir Zeeshan Hanif',
            type: 'video',
            href: 'https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF',
          },
          {
            title:
              'Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther (Chapter 01 - 04)',
            type: 'reading',
            href: 'https://www.amazon.com/Learn-Version-Control-step-step/dp/1520786506',
          },
          {
            title: 'Markdown Basics',
            type: 'reading',
            href: 'https://help.github.com/articles/markdown-basics/ ',
          },
          {
            title: 'Fork vs Branch',
            type: 'reading',
            href: 'http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github',
          },
          {
            title: 'Branch, fork, merge, rebase and clone',
            type: 'reading',
            href: 'http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences',
          },
          {
            title: 'Git branching and rebasing',
            type: 'reading',
            href: 'https://git-scm.com/book/en/v2/Git-Branching-Rebasing',
          },
          {
            title: 'Tracking Branches',
            type: 'reading',
            href: 'http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches',
          },
          {
            title: 'Github Challenges',
            type: 'assignment',
            href: 'https://try.github.io/levels/1/challenges/1 ',
          },
          {
            title: 'Introduction to git for data science',
            type: 'homework',
            href: 'https://www.datacamp.com/courses/introduction-to-git-for-data-science',
          },
          {
            title: 'Git Cheatsheet',
            type: 'reading',
            href: 'https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html',
          },
          {
            title: 'Git Quiz',
            type: 'quiz',
          },
        ],
      },
      {
        title: 'Quarter Break Assignments',
        subOutline: [
          {
            title: 'Cloud to Edge presentation',
            type: 'assignment',
            href: 'https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge ',
          },
          {
            title: 'Todo App woth NextJS and Chakra',
            type: 'assignment',
            href: 'https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app ',
          },
          {
            title: 'Pricing UI',
            type: 'assignment',
            href: 'https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui',
          },
          {
            title: 'Create Panaverse DAO Syllabus Website',
            type: 'assignment',
          },
          {
            title: 'Create PIAIC Website',
            type: 'assignment',
          },
        ],
      },
    ],
  },
  {
    title: 'Quarter II',
    subTitle: `W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs 
    using Next.js 13 and CDK for Terraform`,
    description: `The objective of this course is to teach participants to develop customer facing
    planet scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs.
    By the end of the quarter, the participants will be able to develop and deploy web platforms like
    Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma,
    Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS
    Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).`,
    outline: [
      {
        title: 'Next.js 13 Web Development ',
        subOutline: [
          {
            title: 'Next 13 Official Documentation',
            type: 'reading',
            href: 'https://beta.nextjs.org/docs',
          },
          {
            title: 'Latest Learn React Official Website',
            type: 'reading',
            href: 'https://beta.reactjs.org/learn ',
          },
          {
            title: 'Learn Next.js 13 Learning Repo',
            type: 'github',
            href: 'https://github.com/panaverse/learn-nextjs',
          },
        ],
      },
      {
        title: 'Next.js 13 using Chakra UI',
        subOutline: [
          {
            title:
              'CSS Flexbox Explained - Complete Guide to Flexible Containers and Flex Items',
            type: 'reading',
            href: 'https://www.freecodecamp.org/news/css-flexbox-complete-guide/',
          },
          {
            title: 'Chakra UI Docs',
            type: 'reading',
            href: 'https://chakra-ui.com/getting-started',
          },
        ],
      },
      {
        title: 'UI/UX Design with Figma, TailwindCSS, and Chakra UI',
        subOutline: [
          {
            title:
              'Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano',
            type: 'reading',
            href: 'https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa ',
          },
          {
            title: 'Figma Design Kit for TailwindCSS',
            type: 'reading',
            href: 'https://www.figma.com/community/file/768809027799962739',
          },
          {
            title: 'Chakra UI Figma Kit',
            type: 'reading',
            href: 'https://www.figma.com/community/file/971408767069651759',
          },
        ],
      },
      {
        title: 'API Routes with Next.js',
        subOutline: [
          {
            title: 'API Routes',
            type: 'reading',
            href: 'https://nextjs.org/docs/api-routes/introduction',
          },
        ],
      },
      {
        title: 'APIs with Next.js and tRPC',
        subOutline: [
          {
            title: 'Build a tRPC CRUD API Example with Next.js',
            type: 'reading',
            href: 'https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/',
          },
          {
            title:
              'Stop building REST APIs for your Next.js apps, use tRPC instead',
            type: 'reading',
            href: 'https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/',
          },
        ],
      },
      {
        title: 'SQL and Prisma',
        subOutline: [
          {
            title: 'Start from scratch with relational databases',
            type: 'reading',
            href: 'https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres ',
          },
          {
            title: 'SQL For Beginners Video Tutorial',
            type: 'video',
            href: 'https://www.youtube.com/watch?v=5hzZtqCNQKk',
          },
          {
            title:
              'Database Management Systems and SQL - Tutorial for Beginners',
            type: 'reading',
            href: 'https://www.freecodecamp.org/news/dbms-and-sql-basics/',
          },
        ],
      },
      {
        title: 'Next.js 13 using TailwindCSS',
        subOutline: [
          {
            title: 'Modern CSS with Tailwind, Second Edition by Noel Rappin',
            type: 'reading',
            href: 'https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/ ',
          },
        ],
      },
      {
        title: 'AWS Application Composer',
        subOutline: [
          {
            title: 'What is AWS Application Composer?',
            type: 'video',
            href: 'https://www.youtube.com/watch?v=BujE_tik5r8',
          },
          {
            title: 'Event-driven apps with AWS Application Composer',
            type: 'video',
            href: 'https://www.youtube.com/watch?v=p411uh363jQ',
          },
          {
            title: 'Visually design and build serverless applications quickly',
            type: 'reading',
            href: 'https://aws.amazon.com/application-composer/',
          },
          {
            title: 'Create Free AWS Account',
            type: 'info',
            href: 'https://aws.amazon.com/free/',
          },
        ],
      },
      {
        title:
          'Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF)',
        subOutline: [
          {
            title:
              'Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps',
            type: 'github',
            href: 'https://github.com/panaverse/learn-multicloud-api-development',
          },
        ],
      },
      {
        title: 'Web 2.0 Projects',
        subOutline: [
          {
            title: 'Next.js Projects',
            type: 'assignment',
            href: 'https://github.com/panaverse/nextjs-projects',
          },
          {
            title: 'Styling Next.js Projects using TailwindCSS and Chakra UI',
            type: 'assignment',
            href: 'https://github.com/panaverse/styling-nextjs-projects',
          },
          {
            title: 'Todo Full-Stack App',
            type: 'assignment',
            href: 'https://github.com/ogzhanolguncu/min-todo',
          },
          {
            title: 'Build a Twitter Clone',
            type: 'video',
            href: 'https://www.youtube.com/watch?v=nzJsYJPCc80',
          },
        ],
      },
    ],
  },
  {
    title: 'Quarter III',
    subTitle: `$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development`,
    description: `In this quarter students will learn how to make money and boost exports in the classroom (Earn While You Learn Projects)`,
    outline: [
      {
        title: 'The Template Standard',
        subOutline: [
          {
            title: 'The Template Standard',
            type: 'github',
            href: 'https://github.com/panaverse/panaverse-template-standard ',
          },
        ],
      },
      {
        title: 'Build Full-Stack Next.js 13 Jamstack Templates',
        subOutline: [
          {
            title: `You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. 
            The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. 
            An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer 
            through the Panaverse DAO in the form of Panaverse tokens. `,
            type: 'assignment',
          },
        ],
      },
      {
        title: 'Build QraphQL APIs ',
        subOutline: [
          {
            title: `You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. 
            The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. 
            An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer 
            through the Panaverse DAO in the form of Panaverse tokens.`,
            type: 'assignment',
          },
        ],
      },
    ],
  },
];

// Course Items (Array of items)
export const COURSE_ITEMS: Array<CoursesItem> = [
  {
    title: 'WMD',
    slug: 'wmd',
    subTitle: 'Web 3.0 (Blockchain) and Metaverse',
    description: `This Web 3.0 and Metaverse specialization focuses on developing full-stack 
    Web 3.0 and Metaverse experiences for the next generation of the internet by specializing 
    in building worlds that merge the best of cutting-edge decentralized distributed blockchains 
    with 3D metaverse client experiences.`,
    track: [
      {
        title: 'Quarter IV',
        subTitle: `W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps`,
        description: `In this course you will learn how to develop Web 3.0 DApps, create a project, 
        deploy it in production, write smart contracts, unit test them, and create user interfaces for them. 
        We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order 
        to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have 
        already covered in the previous quarters.`,
        outline: [
          {
            title: 'Blockchain and Metaverse Theory',
            subOutline: [
              {
                title:
                  'The Metaverse: And How It Will Revolutionize Everything by Matthew Ball',
                type: 'reading',
                href: 'https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067',
              },
              {
                title:
                  'The Metaverse: And How It Will Revolutionize Everything by Matthew Ball',
                type: 'reading',
                href: 'https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067',
              },
            ],
          },
          {
            title: 'Smart Contract Development in Solidity',
            subOutline: [
              {
                title:
                  'Solidity Programming Essentials - Second Edition By Ritesh Modi',
                type: 'reading',
                href: 'https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181',
              },
              {
                title: 'Solidity Learning Repo',
                type: 'github',
                href: 'https://github.com/panaverse/defi-dapps-solidity-smart-contracts',
              },
            ],
          },
          {
            title: 'Dapp Development using Ethers.js and Next.js 13',
            subOutline: [
              {
                title: 'Dapp Learning Repo',
                type: 'github',
                href: 'https://github.com/panaverse/dapps-nextjs',
              },
            ],
          },
          {
            title: 'Tokennomics',
          },
          {
            title: 'Blockchain Project: Create a Token and Launch ICO/IEO/IDO',
            subOutline: [
              {
                title:
                  'Project Part 1: How to Launch a IEO on Binance Launchpad',
                type: 'assignment',
                href: 'https://docs.google.com/document/d/139etGH-CtHWvJS-sDViXCuPqeTmKgOWbwqbo1cmrTVE/edit?usp=sharing',
              },
              {
                title: 'Project Part 2: How to Launch a IDO on Polkastarter',
                type: 'assignment',
                href: 'https://docs.google.com/document/d/139etGH-CtHWvJS-sDViXCuPqeTmKgOWbwqbo1cmrTVE/edit?usp=sharing',
              },
              {
                title: 'Project Part 3: Create a Pako Token',
                type: 'assignment',
                href: 'https://docs.google.com/document/d/139etGH-CtHWvJS-sDViXCuPqeTmKgOWbwqbo1cmrTVE/edit?usp=sharing',
              },
              {
                title: 'Project Part 4: Develop Crowd Sale Contrac',
                type: 'assignment',
                href: 'https://docs.google.com/document/d/139etGH-CtHWvJS-sDViXCuPqeTmKgOWbwqbo1cmrTVE/edit?usp=sharing',
              },
              {
                title: 'Project Part 5: Trying it with MetaMask',
                type: 'assignment',
                href: 'https://docs.google.com/document/d/139etGH-CtHWvJS-sDViXCuPqeTmKgOWbwqbo1cmrTVE/edit?usp=sharing',
              },
              {
                title: 'Project Part 6: Trying it with Multisignature Wallets',
                type: 'assignment',
                href: 'https://docs.google.com/document/d/139etGH-CtHWvJS-sDViXCuPqeTmKgOWbwqbo1cmrTVE/edit?usp=sharing',
              },
              {
                title: 'Project Part 7: Sending Tokens using Ethers.js ',
                type: 'assignment',
                href: 'https://docs.google.com/document/d/139etGH-CtHWvJS-sDViXCuPqeTmKgOWbwqbo1cmrTVE/edit?usp=sharing',
              },
              {
                title:
                  'Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT',
                type: 'assignment',
                href: 'https://docs.google.com/document/d/139etGH-CtHWvJS-sDViXCuPqeTmKgOWbwqbo1cmrTVE/edit?usp=sharing',
              },
            ],
          },
        ],
      },
      {
        title: 'Quarter V',
        subTitle: `MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences`,
        description: `The Web is the Metaverse. The metaverse requires an infrastructure that connects 
        all of the metaverses so that we can travel between them. This is only achievable with open 
        web-based metaverses. The internet and its browsers are magical. Federated but linked experiences 
        connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. 
        The metaverse should replicate the best qualities of the web - it should just be the web. We just 
        have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual 
        Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU 
        technologies.`,
        outline: [
          {
            title: 'Open Metaverse Web Development',
            subOutline: [
              {
                title: 'Open Metaverse Learning Repo',
                type: 'github',
                href: 'https://github.com/panaverse/metaverse-web ',
              },
            ],
          },
          {
            title: 'Blender 3D asset Creation for the Metaverse',
            subOutline: [
              {
                title: `Blender development is being funded by heavyweights in the real-time 3D (RT3D) 
                space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, 
                and Decentraland. It is expected to become the standard asset creation tool for metaverse.`,
                type: 'info',
              },
              {
                title: 'Blender 3.3+',
                type: 'reading',
                href: 'https://www.blender.org/download/ ',
              },
              {
                title: 'Blender 3.0 Beginner Tutorial ',
                type: 'video',
                href: 'https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD ',
              },
              {
                title: 'Blender 3.0 Hotkey',
                type: 'reading',
                href: 'https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit',
              },
              {
                title:
                  'Blender Projects Textbook: Blender by Example 2nd Edition',
                type: 'reading',
                href: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 ',
              },
              {
                title: `Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & 
                Animation 7th Edition by John M. Blain`,
                type: 'reading',
                href: 'https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5',
              },
              {
                title: 'Best Hardware Performance for Blender Rendering',
                type: 'video',
                href: 'https://www.youtube.com/watch?v=H7T0SzdFHwg',
              },
            ],
          },
          {
            title: 'Blender 3D Projects',
            subOutline: [
              {
                title:
                  'Build a 3D Donut using Blender 3 as shown in these video tutorials',
                type: 'assignment',
                href: 'https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD ',
              },
              {
                title:
                  'Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book',
                type: 'assignment',
                href: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 ',
              },
              {
                title:
                  'Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book ',
                type: 'assignment',
                href: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561',
              },
              {
                title:
                  'Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7',
                type: 'assignment',
                href: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 ',
              },
              {
                title:
                  'Illustrating an Alien Hero with Grease Pencil as shown in chapter 8',
                type: 'assignment',
                href: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 ',
              },
              {
                title:
                  'Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials',
                type: 'assignment',
                href: 'https://www.youtube.com/watch?v=bpvh-9H8S1g ',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'AIC',
    slug: 'aic',
    subTitle: 'Artificial Intelligence and Deep Learning',
    description: `The AI and Deep Learning specialization focuses on building and deploying intelligent 
    APIs using OpenAI models and building custom Deep Learning Tensorflow models.`,
    track: [
      {
        title: 'Quarter IV',
        subTitle: `AI-351: Developing Planet-Scale Intelligent APIs and Python Programming`,
        description: `Artificial intelligence is the simulation of human intelligence processes by 
        machines, especially computer systems. The AI and Deep Learning Specialization is a foundational 
        program that will aid in your comprehension of deep learning's potential, difficulties, and effects 
        as well as equip you to take part in the creation of cutting-edge AI technology.
        We will start this course by understanding the fundamentals and use cases for AI and move on to 
        building next-gen intelligent apps using OpenAI's powerful models and Next.js 13.
        We'll conclude the course by learning about basic programming concepts using Python, such as lists, 
        dictionaries, classes, functions, and loops, and practice writing clean and readable code with 
        exercises for each topic. We'll also learn how to make your programs interactive and how to test 
        your code safely before adding it to a project. It is a fast-paced, thorough introduction to 
        programming with Python 3.10+ that will have you writing programs, solving problems, and making 
        things that work in no time. In this quarter we will also learn Git, the distributed version control 
        system. We will also review Git-based GitHub services.
        `,
        outline: [
          {
            title: 'Introduction to Machine Learning, Data Science, and AI',
            subOutline: [
              {
                title: 'AI for Everyone',
                type: 'video',
                href: 'https://www.coursera.org/learn/ai-for-everyone ',
              },
              {
                title: 'AI for Everyone Quiz',
                type: 'quiz',
              },
            ],
          },
          {
            title:
              'Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models',
            subOutline: [
              {
                title: 'Open Api',
                type: 'reading',
                href: 'https://openai.com/api/',
              },
              {
                title: 'GPT-4, ChatGPT, etc. and Next.js 13',
                type: 'reading',
                href: 'https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45',
              },
            ],
          },
          {
            title: 'Python Crash Course  for TypeScript Developers',
            subOutline: [
              {
                title:
                  'Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition',
                type: 'reading',
                href: 'https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5',
              },
            ],
          },
        ],
      },
      {
        title: 'Quarter V',
        subTitle: `AI-361: Deep Learning and MLOps`,
        description: `This course will help you understand the capabilities, challenges, and consequences 
        of deep learning and prepare you to participate in the development of leading-edge AI technology. 
        We will finish the program by learning how to envision, create, and maintain integrated systems that 
        run constantly in production. Production systems must manage constantly changing data, in stark 
        contrast to typical machine learning modeling. The production system must also operate continuously 
        at the lowest possible cost while delivering the highest possible performance.`,
        outline: [
          {
            title: 'Deep Learning with Tensorflow',
            subOutline: [
              {
                title: 'Deep Learning with Python, Second Edition 2nd Edition',
                type: 'reading',
                href: 'https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2',
              },
            ],
          },
          {
            title:
              'Machine Learning Engineering for Production (MLOps) using Terraform for CDK',
            subOutline: [
              {
                title:
                  'A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)',
                type: 'reading',
                href: 'https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351',
              },
              {
                title: 'MLOps leveraging AWS SageMaker and Terraform',
                type: 'reading',
                href: 'https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'CNC',
    slug: 'cnc',
    subTitle: 'Cloud-Native Computing',
    description: `The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, 
    and CDK for Kubernetes.`,
    track: [
      {
        title: 'Quarter IV',
        subTitle: `CN-351: Certified Kubernetes Application Developer (CKAD)`,
        description: `Cloud-native architecture and technologies are an approach to designing, constructing, 
        and operating workloads that are built in the cloud and take full advantage of the cloud computing 
        model. Cloud-native technologies empower organizations to build and run scalable applications in 
        modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, 
        microservices, immutable infrastructure, and declarative APIs exemplify this approach. These 
        techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined 
        with robust automation, they allow engineers to make high-impact changes frequently and predictably 
        with minimal toil. Kubernetes is an open-source system for automating the deployment, scaling, and 
        management of containerized applications. In this course, you will learn how to develop cloud 
        applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.
        `,
        outline: [
          {
            title: 'Kubernetes',
            subOutline: [
              {
                title:
                  'Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition',
                type: 'reading',
                href: 'https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3',
              },
            ],
          },
          {
            title: 'CDK for Kubernetes',
            subOutline: [
              {
                title: 'Cloud Development Kit for Kubernetes',
                type: 'reading',
                href: 'https://cdk8s.io/ ',
              },
            ],
          },
        ],
      },
      {
        title: 'Quarter V',
        subTitle: `CN-361: Developing Multi-Cloud Apps using CDK for Terraform`,
        description: `Terraform lets you use the same workflow to manage multiple providers and 
        handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, 
        multi-cloud infrastructures. Cloud Development Kit for Terraform (CDKTF) allows you to use 
        familiar programming languages to define and provision infrastructure. This gives you access to 
        the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets 
        you leverage the power of your existing toolchain for testing, dependency management, etc.
        `,
        outline: [
          {
            title: 'CDK fro Terraform',
            subOutline: [
              {
                title: 'Cloud Development Kit for Terraform',
                type: 'reading',
                href: 'https://developer.hashicorp.com/terraform/cdktf ',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'IOT',
    slug: 'iot',
    subTitle: 'Ambient Computing and IoT',
    description: `The Ambient Computing and IoT Specialization focuses on building Smart Homes, 
    Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices`,
    track: [
      {
        title: 'Quarter IV',
        subTitle: `AC-351: Ambient Computing with Voice Assistants and Matter Devices`,
        description: `Ambient computing, also commonly referred to as ubiquitous computing, is the 
        concept of blending computing power into our everyday lives in a way that is embedded into our 
        surroundings - invisible but useful. In a multi-device world, people don't want to spend their 
        life fussing with technology. An ambient approach gets the tech out of your way so you can live 
        your life while getting the help you need. It doesn't matter what device you're using, what 
        context you're in, whether you're talking, typing, or tapping. The technology in your life works 
        together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice 
        assistants, artificial intelligence, sensors, connectivity, cloud computing and more. If you were 
        thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts 
        are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize 
        their functionality, like smart sensors and smart speakers: ambient computing builds on that. 
        Ambient computing focuses on the interaction between these devices once they are connected. Matter, 
        the next-generation smart home standard, solves many smart home pain points while bringing all our 
        IoT devices together. Some of the biggest tech companies are working together to make Matter a 
        unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This 
        means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will 
        support the Matter standard by default for all new devices. In this course we will learn to build 
        smart homes with Amazon Alexa and Matter protocol.
        `,
        outline: [
          {
            title: 'Alexa',
            subOutline: [
              {
                title: 'What Is Alexa?',
                type: 'reading',
                href: 'https://developer.amazon.com/en-US/alexa',
              },
            ],
          },
          {
            title: 'Alexa with Matter Protocol',
            subOutline: [
              {
                title: 'Get the most out of Matter with Alexa',
                type: 'reading',
                href: 'https://developer.amazon.com/en-US/alexa/matter ',
              },
              {
                title: 'Alexa Connect Kit SDK for Matter',
                type: 'reading',
                href: 'https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html',
              },
            ],
          },
        ],
      },
      {
        title: 'Quarter V',
        subTitle: `AC-361: Embedded Programming using C and Rust`,
        description: `This is an introductory course about using the C and Rust Programming Languages on 
        "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems 
        and move on to learn the  C++ and Rust programming languages. We'll learn about basic programming 
        concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and 
        embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that 
        will have you writing programs, solving problems, burning your code on microcontrollers,  playing with 
        GPIOs, and making things that work in no time.`,
        outline: [
          {
            title:
              'Introduction to the Internet of Things and Embedded Systems',
            subOutline: [
              {
                title: 'What is the Fourth Industrial Revolution?',
                type: 'reading',
                href: 'https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar ing ',
              },
              {
                title: 'What is IoT?',
                type: 'reading',
                href: 'https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar ing ',
              },
              {
                title: 'Embedded Systems',
                type: 'reading',
                href: 'https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar ing ',
              },
              {
                title: 'Hardware and Software for IoT',
                type: 'reading',
                href: 'https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar ing ',
              },
              {
                title: 'Edge and Cloud Computing',
                type: 'reading',
                href: 'https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar ing ',
              },
              {
                title: 'The future of IoT is AI',
                type: 'reading',
                href: 'https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar ing ',
              },
              {
                title: 'Blockchain in the Internet of Things?',
                type: 'reading',
                href: 'https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar ing ',
              },
              {
                title:
                  'IoT + AI + Blockchain: The Fourth Industrial Revolution has begun',
                type: 'reading',
                href: 'https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar ing ',
              },
              {
                title:
                  'How will Matter change the IoT Infrastructure and address issues',
                type: 'reading',
                href: 'https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar ing ',
              },
              {
                title: 'Metaverse and IoT',
                type: 'reading',
                href: 'https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar ing ',
              },
              {
                title: 'Introduction to the Internet of Things (IoT) Quiz',
                type: 'quiz',
              },
            ],
          },
          {
            title: 'The C Reference Book: The C programming language',
            subOutline: [
              {
                title:
                  'Embedded Programming book: Internet of things with ESP8266',
                type: 'reading',
                href: 'https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing',
              },
            ],
          },
          {
            title: 'Introduction to C Part 1',
            subOutline: [
              {
                title: 'The C programming language (Chapter 01 - 02)',
                type: 'reading',
                href: 'https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing',
              },
            ],
          },
          {
            title: 'Introduction to C Part 2',
            subOutline: [
              {
                title: 'The C programming language (Chapter 03 - 04)',
                type: 'reading',
                href: 'https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing',
              },
            ],
          },
          {
            title: 'Introduction to Embedded systems Part 1',
            subOutline: [
              {
                title: 'Internet of things with ESP8266 (Chapter 01)',
                type: 'reading',
                href: 'https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing',
              },
              {
                title: 'C Programming Quiz 1',
                type: 'quiz',
              },
            ],
          },
          {
            title: 'Introduction to Embedded systems Part 2',
            subOutline: [
              {
                title: 'Internet of things with ESP8266 (Chapter 02 - 05)',
                type: 'reading',
                href: 'https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing',
              },
            ],
          },
          {
            title: 'Embedded Programming using Rust',
            subOutline: [
              {
                title: 'Embedded devices',
                type: 'reading',
                href: 'https://www.rust-lang.org/what/embedded',
              },
              {
                title: 'esp8266',
                type: 'reading',
                href: 'https://crates.io/crates/esp8266',
              },
            ],
          },
          {
            title: 'Hardware Requirements',
            subOutline: [
              {
                title: 'Esp8266 (Node MCU)',
                type: 'info',
              },
              {
                title: 'Jumper Wires',
                type: 'info',
              },
              {
                title: 'Bread Board',
                type: 'info',
              },
              {
                title: 'LEDs',
                type: 'info',
              },
              {
                title: 'Sensors: (Dht11, ultrasonic sensor, IR sensor)',
                type: 'info',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'GB',
    slug: 'gb',
    subTitle: 'Genomics and Bioinformatics',
    description: `Genomics is the study of the total genetic makeup of individual organisms, 
    and how this genetic information is structured, functions, and has evolved; bioinformatics 
    encompasses a diverse range of analytical methods and tools applied to genomic data. 
    This Specialization focuses on performing complex bioinformatics analysis using the most essential 
    Python libraries and applications`,
    track: [
      {
        title: 'Quarter IV',
        subTitle: `Bio-351: Python for Biologists`,
        description: `This course will focus on learning the basics of the Python programming 
        language through genomics examples.`,
        outline: [
          {
            title: 'Python for Biologists',
            subOutline: [
              {
                title: 'Python for Biologists',
                type: 'reading',
                href: 'https://www.pythonforbiologists.org/',
              },
            ],
          },
        ],
      },
      {
        title: 'Quarter V',
        subTitle: `Bio-361: Bioinformatics with Python`,
        description: `In this course we will discover modern, next-generation sequencing libraries from 
        the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of 
        biological data.`,
        outline: [
          {
            title: 'Bioinformatics with Python',
            subOutline: [
              {
                title: `Bioinformatics with Python Cookbook: Use modern Python libraries and applications 
                to solve real-world computational biology problems`,
                type: 'reading',
                href: 'https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1 ',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'NPA',
    slug: 'npa',
    subTitle: 'Network Programmability and Automation',
    description: `More than ever, network engineers are finding it challenging to complete their duties 
    entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, 
    and the requirement for enterprises to become more adaptable and agile. This course teaches network 
    engineers how to automate systems with code using a variety of technologies and tools, including Linux, 
    Python, APIs, and Git.`,
    track: [
      {
        title: 'Quarter IV',
        subTitle: `NPA-351: CCNA 200-301 Certification`,
        description: `This course will focus on learning the basics of the networking and preparing for the 
        new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the 
        solutions and technologies needed to implement and administer a broad range of modern networking and 
        IT infrastructure`,
        outline: [
          {
            title: 'CCNA Official Guide',
            subOutline: [
              {
                title: 'CCNA 200-301',
                type: 'reading',
                href: 'https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1',
              },
            ],
          },
        ],
      },
      {
        title: 'Quarter V',
        subTitle: `NPA-361: Network Programmability and Automation`,
        description: `Traditional network management techniques can't be effectively automated and don't 
        scale well. By implementing network programmability based on Application Programming Interfaces, 
        this course will assist in overcoming issues of the future and help you develop the skills required 
        for the Next Generation Network Engineer.`,
        outline: [
          {
            title: 'NPA Networking Technology',
            subOutline: [
              {
                title:
                  'Network Programmability Automation Networking Technology',
                type: 'reading',
                href: 'https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3 ',
              },
            ],
          },
        ],
      },
    ],
  },
];
