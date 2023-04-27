export interface ISkillModel {
  id: number
  name: string
  showName?: boolean
  description: React.ReactNode
  icon?: React.ReactNode
  categories: string[]
}

export const skills: ISkillModel[] = [
  {
    id: 1,
    name: 'Openshift',
    showName: true,
    description:
      "OpenShift is a cloud development Platform as a Service (PaaS) hosted by Red Hat. It's an open source cloud-based user-friendly platform used to create, test, and run applications, and finally deploy them on cloud. OpenShift is capable of managing applications written in different languages, such as Node.",
    icon: <img src="/assets/icons/openshift.png" />,
    categories: ['container'],
  },
  {
    id: 2,
    name: 'Kubernetes',
    showName: true,
    description:
      'Kubernetes automates operational tasks of container management and includes built-in commands for deploying applications, rolling out changes to your applications, scaling your applications up and down to fit changing needs, monitoring your applications, and more—making it easier to manage applications.',
    icon: <img src="/assets/icons/kubernetes.webp" />,
    categories: ['container'],
  },
  {
    id: 3,
    name: 'Docker',
    showName: true,
    description:
      'Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications.',
    icon: <img src="/assets/icons/docker.webp" />,
    categories: ['container'],
  },
  {
    id: 4,
    name: 'Azure',
    showName: true,
    description:
      'Azure is a huge collection of servers and networking hardware, which runs a complex set of distributed applications. These applications orchestrate the configuration and operation of virtualized hardware and software on those servers. The orchestration of these servers is what makes Azure so powerful.',
    icon: <img src="/assets/icons/azure.png" />,
    categories: ['cloud'],
  },
  {
    id: 5,
    name: 'AWS',
    showName: false,
    description:
      'Amazon web service is an online platform that provides scalable and cost-effective cloud computing solutions. AWS is a broadly adopted cloud platform that offers several on-demand operations like compute power, database storage, content delivery, etc., to help corporates scale and grow.',
    icon: <img src="/assets/icons/aws.png" />,
    categories: ['cloud'],
  },
  {
    id: 6,
    name: 'Windows',
    showName: false,
    description:
      'Microsoft Windows is a group of OSs manufactured by Microsoft. Windows is available in 32 and 64-bit versions and offers a graphical user interface (GUI), multitasking functionalities, virtual memory management capabilities, and support for several peripheral devices.',
    icon: <img src="/assets/icons/windows.png" />,
    categories: ['os'],
  },
  {
    id: 7,
    name: 'Mac',
    showName: false,
    description:
      "MacOS is the computer operating system (OS) for Apple desktops and laptops. It is a proprietary graphical OS that powers every Mac. OSes interact with a computer's hardware, allocating the resources necessary to complete tasks given to it -- for example, running an application.",
    icon: <img src="/assets/icons/mac.png" />,
    categories: ['os'],
  },
  {
    id: 8,
    name: 'Linux',
    showName: false,
    description:
      'Linux is a free, open source operating system, released under the GNU General Public License (GPL). Anyone can run, study, modify, and redistribute the source code, or even sell copies of their modified code, as long as they do so under the same license.',
    icon: <img src="/assets/icons/linux.png" />,
    categories: ['os'],
  },
  {
    id: 9,
    name: 'Raspberry Pi',
    showName: false,
    description:
      'The Raspberry Pi is a low cost, credit-card sized computer that plugs into a computer monitor or TV, and uses a standard keyboard and mouse. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Scratch and Python.',
    icon: <img src="/assets/icons/raspberry-pi.png" />,
    categories: ['os'],
  },
  {
    id: 10,
    name: 'C#',
    showName: false,
    description:
      'C# is an object-oriented, component-oriented programming language. C# provides language constructs to directly support these concepts, making C# a natural language in which to create and use software components. Since its origin, C# has added features to support new workloads and emerging software design practices.',
    icon: <img src="/assets/icons/csharp.png" />,
    categories: ['language'],
  },
  {
    id: 11,
    name: 'Dotnet',
    showName: false,
    description:
      '.NET is a free, cross-platform, open source developer platform for building many different types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, games, IoT, and more.',
    icon: <img src="/assets/icons/dotnet.png" />,
    categories: ['language'],
  },
  {
    id: 12,
    name: 'ASP.NET',
    showName: false,
    description:
      'ASP.NET is a free web framework for building great websites and web applications using HTML, CSS, and JavaScript. You can also create Web APIs and use real-time technologies like Web Sockets. ASP.NET Core is an alternative to ASP.NET.',
    icon: <img src="/assets/icons/aspnet.webp" />,
    categories: ['language'],
  },
  {
    id: 13,
    name: 'SignalR',
    showName: true,
    description:
      'SignalR is a free and open-source software library for Microsoft ASP.NET that allows server code to send asynchronous notifications to client-side web applications. The library includes server-side and client-side JavaScript components.',
    icon: <img src="/assets/icons/signalr.png" />,
    categories: ['language'],
  },
  {
    id: 14,
    name: 'Java',
    showName: true,
    description:
      'Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.',
    icon: <img src="/assets/icons/java.png" />,
    categories: ['language'],
  },
  {
    id: 15,
    name: 'bash',
    showName: true,
    description:
      'Bash is a command processor that typically runs in a text window where the user types commands that cause actions. Bash can also read and execute commands from a file, called a shell script.',
    icon: <img src="/assets/icons/bash.png" />,
    categories: ['language'],
  },
  {
    id: 16,
    name: 'NodeJs',
    showName: false,
    description:
      'Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.',
    icon: <img src="/assets/icons/node.png" />,
    categories: ['language'],
  },
  {
    id: 17,
    name: 'Javascript',
    showName: true,
    description:
      'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.',
    icon: <img src="/assets/icons/javascript.png" />,
    categories: ['language'],
  },
  {
    id: 18,
    name: 'Typescript',
    showName: true,
    description:
      'TypeScript is a strongly typed, object-oriented, compiled programming language that builds on JavaScript. It is a superset of the JavaScript language, designed to give you better tooling at any scale. The lead architect behind TypeScript is Anders Hejlsberg, designer of C# at Microsoft.',
    icon: <img src="/assets/icons/typescript.jpeg" />,
    categories: ['language'],
  },
  {
    id: 19,
    name: 'React',
    showName: true,
    description:
      'React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.',
    icon: <img src="/assets/icons/react.png" />,
    categories: ['language'],
  },
  {
    id: 20,
    name: 'Redux',
    showName: false,
    description:
      'Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.',
    icon: <img src="/assets/icons/redux.png" />,
    categories: ['language'],
  },
  {
    id: 21,
    name: 'AngularJS',
    showName: true,
    description:
      "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write.",
    icon: <img src="/assets/icons/angularjs.png" />,
    categories: ['language'],
  },
  {
    id: 22,
    name: 'Leaflet',
    showName: true,
    description:
      'Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 42 KB of JS , it has all the mapping features most developers ever need. Leaflet is designed with simplicity, performance and usability in mind.',
    icon: <img src="/assets/icons/leaflet.webp" />,
    categories: ['library'],
  },
  {
    id: 23,
    name: 'ArcJS',
    showName: true,
    description:
      "ArcGIS API for JavaScript Overview. The ArcGIS API for JavaScript is a lightweight way to embed maps and tasks in web applications. You can get these maps from ArcGIS Online, your own ArcGIS Server or others' servers.",
    icon: <img src="/assets/icons/arcjs.png" />,
    categories: ['library'],
  },
  {
    id: 24,
    name: 'jQuery',
    showName: false,
    description:
      'jQuery is an open-sourced JavaScript library that simplifies creation and navigation of web applications. Specifically, jQuery simplifies HTML Document Object Model (DOM) manipulation, Asynchronous JavaScript and XML (Ajax) and event handling.',
    icon: <img src="/assets/icons/jquery.png" />,
    categories: ['library'],
  },
  {
    id: 25,
    name: 'HTML',
    showName: false,
    description:
      'HyperText Markup Language, or HTML, is the standard markup language for describing the structure of documents displayed on the web. HTML consists of a series of elements and attributes which are used to mark up all the components of a document to structure it in a meaningful way.',
    icon: <img src="/assets/icons/html5.png" />,
    categories: ['language'],
  },
  {
    id: 26,
    name: 'CSS',
    showName: false,
    description:
      'CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language.',
    icon: <img src="/assets/icons/css3.webp" />,
    categories: ['language'],
  },
  {
    id: 27,
    name: 'Sass',
    showName: false,
    description:
      "Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster. Sass is compatible with all versions of CSS.",
    icon: <img src="/assets/icons/sass.webp" />,
    categories: ['language'],
  },
  {
    id: 28,
    name: 'Kafka',
    showName: true,
    description:
      'Kafka is primarily used to build real-time streaming data pipelines and applications that adapt to the data streams. It combines messaging, storage, and stream processing to allow storage and analysis of both historical and real-time data.',
    icon: <img src="/assets/icons/kafka.png" />,
    categories: ['tool', 'queue', 'event streaming', 'database'],
  },
  {
    id: 29,
    name: 'TSQL',
    showName: false,
    description:
      'Structured query language (SQL) is a programming language for storing and processing information in a relational database. A relational database stores information in tabular form, with rows and columns representing different data attributes and the various relationships between the data values.',
    icon: <img src="/assets/icons/tsql.webp" />,
    categories: ['database', 'language'],
  },
  {
    id: 30,
    name: 'SQL Server',
    showName: true,
    description:
      'Microsoft SQL Server is a relational database management system (RDBMS) that supports a wide variety of transaction processing, business intelligence and analytics applications in corporate IT environments.',
    icon: <img src="/assets/icons/mssql.png" />,
    categories: ['database'],
  },
  {
    id: 31,
    name: 'Oracle DB',
    showName: true,
    description:
      'It is a database commonly used for running online transaction processing (OLTP), data warehousing (DW) and mixed (OLTP & DW) database workloads. Oracle Database is available by several service providers on-prem, on-cloud, or as a hybrid cloud installation.',
    icon: <img src="/assets/icons/oracle.png" />,
    categories: ['database'],
  },
  {
    id: 32,
    name: 'PostgreSQL',
    showName: true,
    description:
      'PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.',
    icon: <img src="/assets/icons/postgresql.webp" />,
    categories: ['database'],
  },
  {
    id: 33,
    name: 'Elasticsearch',
    showName: true,
    description:
      'Elasticsearch is a distributed search and analytics engine built on Apache Lucene. Since its release in 2010, Elasticsearch has quickly become the most popular search engine and is commonly used for log analytics, full-text search, security intelligence, business analytics, and operational intelligence use cases.',
    icon: <img src="/assets/icons/elasticsearch.png" />,
    categories: ['database'],
  },
  {
    id: 34,
    name: 'MongoDB',
    showName: true,
    description:
      'MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs.',
    icon: <img src="/assets/icons/mongodb.png" />,
    categories: ['database'],
  },
  {
    id: 35,
    name: 'Redis',
    showName: true,
    description:
      'Redis is an open source (BSD licensed), in-memory data structure store used as a database, cache, message broker, and streaming engine. Redis provides data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams.',
    icon: <img src="/assets/icons/redis.png" />,
    categories: ['database'],
  },
  {
    id: 36,
    name: 'Kibana',
    showName: true,
    description:
      'Kibana is a visual interface tool that allows you to explore, visualize, and build a dashboard over the log data massed in Elasticsearch Clusters. Elastic is the company behind Kibana and the two other open source tools - Elasticsearch and Logstash.',
    icon: <img src="/assets/icons/kibana.webp" />,
    categories: ['monitor'],
  },
  {
    id: 37,
    name: 'Grafana',
    showName: true,
    description:
      'Grafana is a multi-platform open source analytics and interactive visualization web application. It provides charts, graphs, and alerts for the web when connected to supported data sources.',
    icon: <img src="/assets/icons/grafana.png" />,
    categories: ['monitor'],
  },
  {
    id: 38,
    name: 'Sysdig',
    showName: true,
    description:
      'Sysdig Monitor is a monitoring, troubleshooting, cost-optimization, and alerting suite offering deep, process-level visibility into dynamic, distributed production environments. Sysdig Monitor captures, correlates, and visualizes full-stack data, and provides dashboards for monitoring your cloud-native environment.',
    icon: <img src="/assets/icons/sysdig.png" />,
    categories: ['monitor'],
  },
  {
    id: 39,
    name: 'Prometheus',
    showName: true,
    description:
      'Prometheus is an open-source technology designed to provide monitoring and alerting functionality for cloud-native environments, including Kubernetes. It can collect and store metrics as time-series data, recording information with a timestamp.',
    icon: <img src="/assets/icons/prometheus.png" />,
    categories: ['monitor'],
  },
  {
    id: 40,
    name: 'Github',
    showName: true,
    description:
      'GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests.',
    icon: <img src="/assets/icons/github.png" />,
    categories: ['tool'],
  },
  {
    id: 41,
    name: 'Git',
    showName: true,
    description:
      'Git (/ɡɪt/) is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development.',
    icon: <img src="/assets/icons/git.webp" />,
    categories: ['tool'],
  },
  {
    id: 42,
    name: 'SVN',
    showName: true,
    description:
      'Apache Subversion (often abbreviated SVN, after its command name svn) is a software versioning and revision control system distributed as open source under the Apache License. Software developers use Subversion to maintain current and historical versions of files such as source code, web pages, and documentation.',
    icon: <img src="/assets/icons/svn.png" />,
    categories: ['tool'],
  },
  {
    id: 43,
    name: 'Team Foundation Server',
    showName: true,
    description:
      'Team Foundation Server (TFS) is a Microsoft product which provides source code management, reporting, requirements management, project management, automated builds, lab management, testing and release management capabilities.',
    icon: <img src="/assets/icons/tfs.png" />,
    categories: ['devops'],
  },
  {
    id: 44,
    name: 'Jenkins',
    showName: true,
    description:
      'Jenkins is an open source continuous integration/continuous delivery and deployment (CI/CD) automation software DevOps tool written in the Java programming language. It is used to implement CI/CD workflows, called pipelines.',
    icon: <img src="/assets/icons/jenkins.png" />,
    categories: ['devops'],
  },
  {
    id: 45,
    name: 'Tekton',
    showName: true,
    description:
      'Tekton is a powerful yet flexible Kubernetes-native open source framework for creating continuous integration and delivery (CI/CD) systems. It lets you build, test, and deploy across multiple cloud providers or on-premises systems by abstracting away the underlying implementation details.',
    icon: <img src="/assets/icons/tekton.png" />,
    categories: ['devops'],
  },
  {
    id: 46,
    name: 'OpenNLP',
    showName: false,
    description:
      'The Apache OpenNLP library is a machine learning based toolkit for the processing of natural language text. It supports the most common NLP tasks, such as tokenization, sentence segmentation, part-of-speech tagging, named entity extraction, chunking, and parsing.',
    icon: <img src="/assets/icons/opennlp.png" />,
    categories: ['tool'],
  },
  {
    id: 47,
    name: 'FFmpeg',
    showName: true,
    description:
      'FFmpeg is a free and open-source software project consisting of a suite of libraries and programs for handling video, audio, and other multimedia files and streams. At its core is the command-line ffmpeg tool itself, designed for processing of video and audio files.',
    icon: <img src="/assets/icons/ffmpeg.png" />,
    categories: ['tool'],
  },
  {
    id: 48,
    name: 'Keycloak',
    showName: true,
    description:
      'Keycloak is an open source Identity and Access Management tool with features such as Single-Sign-On (SSO), Identity Brokering and Social Login, User Federation, Client Adapters, an Admin Console, and an Account Management Console.',
    icon: <img src="/assets/icons/keycloak.png" />,
    categories: ['tool'],
  },
  {
    id: 49,
    name: 'OIDC',
    showName: true,
    description:
      'OpenID Connect (OIDC) is an open authentication protocol that works on top of the OAuth 2.0 framework. Targeted toward consumers, OIDC allows individuals to use single sign-on (SSO) to access relying party sites using OpenID Providers (OPs), such as an email provider or social network, to authenticate their identities.',
    icon: <img src="/assets/icons/oidc.png" />,
    categories: ['specification'],
  },
  {
    id: 50,
    name: 'Oauth',
    showName: true,
    description:
      'OAuth is an authentication protocol that allows you to approve one application interacting with another on your behalf without giving away your password.',
    icon: <img src="/assets/icons/oauth2.png" />,
    categories: ['specification'],
  },
  {
    id: 51,
    name: 'VS Code',
    showName: true,
    description:
      'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.',
    icon: <img src="/assets/icons/vscode.webp" />,
    categories: ['ide'],
  },
  {
    id: 52,
    name: 'Visual Studio',
    showName: true,
    description:
      'The Visual Studio IDE is a creative launching pad that you can use to edit, debug, and build code, and then publish an app.',
    icon: <img src="/assets/icons/visualstudio.png" />,
    categories: ['ide'],
  },
  {
    id: 53,
    name: 'UXPin',
    showName: false,
    description:
      'UXPin is a product design platform used by the best designers on the planet. Let your team easily design, collaborate, and present from low-fidelity wireframes to fully-interactive prototypes.',
    icon: <img src="/assets/icons/uxpin.png" />,
    categories: ['ide'],
  },
  {
    id: 54,
    name: 'Jira',
    showName: true,
    description:
      'Jira is a suite of agile work management solutions that powers collaboration across all teams from concept to customer, empowering you to do the best work of your life, together. Jira offers several products and deployment options that are purpose-built for Software, IT, Business, Ops teams, and more.',
    icon: <img src="/assets/icons/jira.png" />,
    categories: ['tool', 'process'],
  },
  {
    id: 55,
    name: 'Agile',
    showName: true,
    description:
      'Agile is an iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer headaches. Instead of betting everything on a "big bang" launch, an agile team delivers work in small, but consumable, increments.',
    icon: <img src="/assets/icons/agile.png" />,
    categories: ['process'],
  },
  {
    id: 56,
    name: 'Scrum',
    showName: true,
    description:
      'Scrum is a management framework that teams use to self-organize and work towards a common goal. It describes a set of meetings, tools, and roles for efficient project delivery. Much like a sports team practicing for a big match, Scrum practices allow teams to self-manage, learn from experience, and adapt to change.',
    icon: <img src="/assets/icons/scrum.png" />,
    categories: ['process'],
  },
  {
    id: 57,
    name: 'Waterfall',
    showName: true,
    description:
      'The waterfall project management approach entails a clearly defined sequence of execution with project phases that do not advance until a phase receives final approval. Once a phase is completed, it can be difficult and costly to revisit a previous stage.',
    icon: <img src="/assets/icons/waterfall.png" />,
    categories: ['process'],
  },
]
