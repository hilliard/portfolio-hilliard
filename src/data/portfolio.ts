export interface PortfolioItem {
  id: string;
  title: string;
  subtitle?: string;
  jobTitle?: string;
  role?: string;
  company?: string;
  image: string; // Thumbnail
  introImage?: string; // Hero image
  link: string;
  slug: string;
  contentTitle?: string;
  contentImage?: string;
  content?: string[];
  technologies?: string;
  tools?: string;
  additionalRoles?: string;
  skills?: string[];
  awards?: string;
  exit?: string;
}

export const workItems: PortfolioItem[] = [
  {
    id: "01",
    title: "UCCS",
    subtitle: "Advisor",
    image: "/img/UCCS-soccer-480.jpg",
    introImage: "/img/UCCS-building-480.jpg",
    link: "/portfolio/uccs-soccer",
    slug: "uccs-soccer",
    contentTitle: "Board members make a number of contributions to the program, including:",
    contentImage: "/img/UCCS-classroom-3096.jpg",
    content: [
      "Preserving and enhancing the reputation and quality of the program through strategic review of our credit and noncredit offerings to the community, as well as helping to build our value to the business community.",
      "Offering expert guidance to our faculty and students through occasional classroom visits, forums and conferences , and input on our programs.",
      "Promoting the program’s goal of linking industry with academia to help ensure that our work is relevant and benefits the business community."
    ]
  },
  {
    id: "02",
    title: "Gold Technology",
    subtitle: "GoldTending Incorporated",
    jobTitle: "Chief Technical Advisor",
    role: "Founder",
    company: "GoldTending Incorporated",
    image: "/img/Gold-Question-480.jpg",
    introImage: "/img/Gold-Question-480.jpg",
    link: "/portfolio/goldtending",
    slug: "goldtending",
    contentTitle: "Technical Consulting",
    contentImage: "/img/Technical-Advising-3096.jpg",
    content: [
      "Hilliard is the founder of GoldTending Inc. and is currently serving as Chief Technical Advisor. He is also an acting Advisor to The University of Colorado Colorado Spring Artificial Intelligence board",
      "GoldTending Inc, was founded as both a technology consulting firm and as an entity focused on developing a platform for aspiring young entrepreneurs."
    ],
    technologies: "Javascript, NextJS, Firebase, Supabase, OpenAI, Node.js, React, TypeScript, Vue.js",
    tools: "ViTest, Jasmin, Anthropic, Netlify, Cloudflare, Anthropic, Tailwind CSS, Git, GitHub"
  },
  {
    id: "03",
    title: "Architect",
    subtitle: "SketchUp Extensiblity",
    jobTitle: "Sr. QA Engineer",
    role: "Team Lead",
    company: "SketchUp Extensiblity",
    image: "/img/3D-Architect-draw-480.jpg",
    introImage: "/img/SketchUp-tablet-480.jpg",
    link: "/portfolio/sketchup",
    slug: "sketchup",
    contentTitle: "Validating Very Intelligent People's Software and Software Development Kits",
    contentImage: "/img/SketchUp-extensibility-3096.jpg",
    content: [
      "As a Senior Quality Assurance Engineer at Trimble/SketchUp, I played a critical role in delivering high-quality software products that empower designers and architects worldwide.",
      "In this position, I was responsible for designing, developing, and executing comprehensive test plans and strategies. I excelled at identifying and documenting defects while collaborating closely with development and product teams throughout the entire software development lifecycle.",
      "My expertise in quality assurance methodologies and tools contributed to the continuous improvement of our testing processes. I also advocated for best practices and mentored junior QA team members, all while ensuring the robustness and reliability of SketchUp's innovative 3D modeling API."
    ],
    technologies: "Ruby, C++, Javascript",
    tools: "Atlassian Suite, BitBucket, Git, GitHub, Visual Studio, RubyMine, Cypress, Sauce Labs, Postman, Minitest, Doxygen",
    additionalRoles: "Agile Scrum Master, Team Lead"
  },
  {
    id: "04",
    title: "Data Center",
    subtitle: "ClickBank E-Commerce",
    jobTitle: "QA Manager / Team Lead",
    role: "Agile",
    company: "ClickBank E-Commerce",
    image: "/img/Data-Center-dark-blue-480.jpg",
    introImage: "/img/Data-Center-numbers-480.jpg",
    link: "/portfolio/clickbank",
    slug: "clickbank",
    contentTitle: "Significantly Reduce Validation Time...Add value",
    contentImage: "/img/Enterprise-center-3096.jpg",
    content: [
      "As a QA Manager/Team Lead at a dynamic e-commerce affiliate sales company, I led a team of Quality Assurance engineers, overseeing the entire testing lifecycle for our affiliate marketing platform, merchant solutions, and consumer-facing products. I was responsible for defining and implementing robust QA strategies, building scalable test automation frameworks, and ensuring the delivery of high-quality, reliable software in a fast-paced, agile environment.",
      "This role required strong leadership skills to mentor and develop team members, excellent communication to collaborate cross-functionally with product and engineering teams, and a deep understanding of e-commerce business flows, affiliate marketing models, and performance testing to ensure seamless user experiences and transactional integrity."
    ],
    technologies: "Ruby, Cucumber, Nutch, Java, Javascript, Apache Tomcat, AWS, Liquibase, Docker",
    tools: "Atlassian Suite, InjelliJ, NetNeans, Cypress, Sauce Labs, Postman, Doxygen, Zeus/Azul, Git, GitHub, BitBucket",
    additionalRoles: "Agile Scrum Master, Team Lead, Buildmeister"
  },
  {
    id: "05",
    title: "Cloud Storage",
    subtitle: "Rebit Incorporated",
    jobTitle: "Director IT/QA",
    role: "Co-Founder",
    company: "Rebit Incorporated",
    image: "/img/Rebit-cloud-storage-480.jpg",
    introImage: "/img/Rebit-storage-480.jpg",
    link: "/portfolio/rebit",
    slug: "rebit",
    contentTitle: "Continuous Data Protection",
    contentImage: "/img/Rebit-cloud-3096.jpg",
    content: [
      "As Director of IT I lead our information technology initiatives. In this pivotal role, I was responsible for overseeing all aspects of our IT infrastructure, systems, and operations, ensuring their reliability, security, and scalability to support our continuous data protection backup software and overall business objectives. This included managing our network architecture, server environments (on-premise and cloud-based), cybersecurity protocols, data management, and the suite of applications used by our internal teams. I implemented industry standard best practices, and had a proven track record in strategic IT planning, budget management, and team leadership.",
      "As Director of Quality I was responsible for defining, implementing, and overseeing the quality strategy across all stages of our software development lifecycle for our continuous data protection backup solutions. This includes establishing robust QA processes, leading test automation efforts, managing quality metrics, and ensuring the highest standards of product reliability, performance, and user experience. Delivered software to six major customers off of a single code base, No Customer specific branches"
    ],
    technologies: "Ruby, Cucumber, C++, Delphi, PostgreSQL, Access, Oracle, MSSQL, Oracle Business 1",
    tools: "Atlassian Suite, Git, GitHub, Cypress, Sauce Labs, Postman, Agile Scrum Master, MercurialHG",
    additionalRoles: "Agile Scrum Master, Team Lead, Software Configuration Manager",
    exit: "Rebit was acquired by Betsol / Carbonite for $25 Million"
  },
  {
    id: "06",
    title: "World Bank",
    subtitle: "Nile Basin DSS: Adis Ababa, Ethiopa",
    jobTitle: "System Architect",
    role: "Database Consultant",
    company: "Nile Basin DSS: Adis Ababa, Ethiopa",
    image: "/img/Adis-Ababa-City-480.jpg",
    introImage: "/img/Me-In-Ethiopia-480.jpg",
    link: "/portfolio/worldbank",
    slug: "worldbank",
    contentTitle: "Database/System Architect",
    contentImage: "/img/Nile-River-Pictures-Blue-3096.jpg",
    content: [
      "The Nile Basin Decision Support System (NB-DSS) is a platform developed by the Nile Basin Initiative (NBI) to facilitate cooperative planning and management of the Nile River's water resources by providing data, analytical tools, and modeling capabilities for Integrated Water Resources Management (IWRM). It serves as a central repository for data and offers advanced tools for scenario management, optimization, and multi-criteria decision-making, aiming to support riparian countries in reaching consensus on sustainable water resource development projects.",
      "Over the three development cycles the specifications were refined. Each cycle was started with a detailed requirement analysis and software design stage, and during those stages the specifications were be detailed on a functionality area by functionality area basis. For example, specifications for time series handling was included in development cycle 1 while detailed specifications for multi-criteria analysis (MCA) was included in development cycle 3.",
      "I Engineered and executed the migration of a core system to a PostgreSQL and Ubuntu Linux environment. This strategic shift away from proprietary Microsoft and Oracle solutions created a sustainable, self-supporting infrastructure while achieving substantial reductions in operational licensing costs."
    ],
    technologies: "MS Server, MSSQL, Unix, C++, .Net, Postgres, Ubuntu Linux, Access",
    tools: "SpiraTest Suite, Visual Studio, Visual Studio Code, MercurialHG, Windows Hardware Lab Kit (HLK), SignTool, WHQL (Windows Hardware Quality Labs)"
  },
  {
    id: "07",
    title: "DLT Tape Drive",
    subtitle: "Benchmark Tape systems",
    jobTitle: "Director IT/SCM",
    role: "Co-Founder",
    company: "Benchmark Tape systems",
    image: "/img/Storage-DLT-Tape-Drive-480.jpg",
    introImage: "/img/Storage-DLT-Tape-Drive-480.jpg",
    link: "/portfolio/benchmark",
    slug: "benchmark",
    contentTitle: "Low cost storage for Servers and Libraries",
    contentImage: "/img/Storage-Tape-Drive-Blue-Library-3096.jpg",
    content: [
      "Benchmark Tape Systems a Boulder, Colorado-based enterprise, that developed tape drives products based on DLT technology. The team behind the new company includes the celebrated Jesse Aweida, founder and former COB and president of StorageTek and Lew Frauenfelder, a veteran of STK, Aspen and Datasonix,",
      "As Director of Software Configuration Management (SCM) and Build Meister, I led efforts in establishing and maintaining robust, efficient, and reliable software configuration and build processes. In this critical leadership role, I was responsible for defining and implementing SCM strategies, managing source code control systems, optimizing continuous integration/continuous delivery (CI/CD) pipelines, and ensuring repeatable and high-quality software builds for our cutomers."
    ],
    technologies: "MS Server, MSSQL, PostgreSQL, OBDR, Unix, Linux,C++, .Net",
    tools: "TrackStar, Visual Studio, TortoiseSVN, Windows Hardware Lab Kit (HLK), SignTool, WHQL (Windows Hardware Quality Labs)",
    additionalRoles: "Agile Scrum Master, Director IT, Software Configuration Manager",
    exit: "Quantum acquired Benchmark in 2002 for $56 million."
  },
  {
    id: "08",
    title: "Pereos",
    subtitle: "DataSonix Incorporated",
    jobTitle: "Director IT/QA",
    role: "Co-Founder",
    company: "DataSonix Incorporated",
    image: "/img/Pereos-480.jpg",
    introImage: "/img/Hscott-Patent-Certificate-480-blurred.png",
    link: "/portfolio/datasonix",
    slug: "datasonix",
    contentTitle: "The World's Smallest Backup Tape",
    contentImage: "/img/Data-storage-3096.jpg",
    content: [
      "As a co-founder, I was part of the engineering team that created Pereos, the world's smallest and lightest tape drive. This portable data storage device was a technological marvel, offering unprecedented data mobility and backup capabilities for the time."
    ],
    technologies: "MS Server, MSSQL, OBDR (One Button Disaster Recovery), Unix, C++, .Net",
    tools: "TrackStar, Visual Studio, Windows Hardware Lab Kit (HLK), TortoiseSVN, SignTool, WHQL (Windows Hardware Quality Labs)",
    additionalRoles: "Team Lead, Software Configuration Manager, Buildmeister",
    awards: "Patent Number 5,960,460 for Non-Intrusive Replication of Hard Disk – a disaster recovery / data replication computer program ultimately implemented by the Federal Bureau of Investigations as a checking mechanism to confirm the integrity of replicated data. Also used as a means of disaster recovery of an entire computer system.",
    exit: "Datasonix was acquired by Exabyte for $20 million."
  },
  {
    id: "09",
    title: "StorageTek",
    subtitle: "StorageTek Incorporated",
    jobTitle: "Sr. Engineer",
    role: "Engineering Tools",
    company: "StorageTek Incorporated",
    image: "/img/StorageTek-Cimmaron-480.jpg",
    introImage: "/img/Storage-DLT-Tape-Drive-480.jpg",
    link: "/portfolio/storagetek",
    slug: "storagetek",
    contentTitle: "Storage for Businesses and organizations",
    contentImage: "/img/Storage-Tape-Drive-Blue-Library-3096.jpg",
    content: [
      "StorageTek a Boulder, CO-based enterprise, that developed tape drives products based on DLT technology. The team behind the company included the celebrated Jesse Aweida, founder and former COB and president of StorageTek and Lew Frauenfelder, a veteran of STK, Aspen and Datasonix. As Director of Software Configuration Management (SCM) and Build Meister, I led efforts in establishing and maintaining robust, efficient, and reliable software configuration and build processes. In this critical leadership role, I was responsible for defining and implementing SCM strategies, managing source code control systems, optimizing continuous integration/continuous delivery (CI/CD) pipelines, and ensuring repeatable and high-quality software builds for our cutomers.",
      "StorageTek, founded in 1969, was a global company that developed and manufactured data storage hardware and software."
    ],
    technologies: "MS Server, MSSQL, LSTC2VM, HPu, Unix, Linux C++, .Net, ASP, ASP.NET, PHP, C#, Perl and VBScrip",
    tools: "TrackStar, Atria, SourceSafe, Visual Studio, Windows Hardware Lab Kit (HLK), SignTool, WHQL (Windows Hardware Quality Labs)",
    additionalRoles: "Agile Scrum Master, Team Lead",
    awards: "Technical Innovator of The Year. Malcom Baldridge Quality Award",
    exit: "Sun Microsystems acquired Storage Technology Corporation (StorageTek) in August 2005 for US $4.1 billion."
  },
  {
    id: "10",
    title: "Space Shuttle",
    subtitle: "Tecnetics Incorporated",
    jobTitle: "Aerospace Power Design Engineer",
    role: "Power Supplies",
    company: "Tecnetics Incorporated",
    image: "/img/Space-Shuttle-480-1.jpg",
    introImage: "/img/Space-Shuttle-2-480.jpg",
    link: "/portfolio/technetics",
    slug: "technetics",
    contentTitle: "U.S. Government/NASA Contractor",
    contentImage: "/img/Outer-Space-3096.jpg",
    content: [
      "As a Senior Aerospace Power Design Engineer I designed, developed, and implemented robust power supply solutions for the world's most demanding and mission-critical applications. I have a proven track record of engineering power systems that operate flawlessly in extreme environments, from the vacuum of space to the depths of the ocean and the front lines of national security. This role required a deep understanding of power electronics, a creative approach to complex challenges, and an unwavering commitment to reliability and precision."
    ],
    skills: [
      "Experienced in designing radiation-hardened power systems for space applications.",
      "Familiarity with power requirements for secure communications and sensitive electronic equipment.",
      "Proven ability to mentor junior engineers and lead technical projects."
    ],
    technologies: "C, C++, i386 Assenbly, MIL-STD-1495",
    tools: "Aztek Compiler, AT&T Compiler",
    additionalRoles: "NASA Qualified Assembler, Quality Control"
  },
  {
    id: "11",
    title: "Olympic Rings",
    subtitle: "KGNU 88.5 FM Boulder",
    jobTitle: "Program Director",
    role: "Eclipse",
    company: "KGNU 88.5 FM Boulder",
    image: "/img/Olympic-Rings-480.jpg",
    introImage: "/img/KGNU-Mixer-480.png",
    link: "/portfolio/kgnu",
    slug: "kgnu",
    contentTitle: "Site Engineer/Program Director",
    contentImage: "/img/KGNU-On-Air-3096.png",
    content: [
      "At KGNU Community Radio I was able to fill the unique, combined role of Page Engineer & Program Director. In this leadership position responsible for both the technical integrity of our broadcast signal and the creative vision of the on-air programming.",
      "I acted as an advocate for independent media and possessed a blend of technical expertise and a strong sense of community-focused content curation. I was responsible for ensuring KGNU’s broadcast was reliable and high-quality while also guiding the volunteer programmers to create content that fulfilled the mission to educate, entertain, and serve as a platform for underrepresented voices and music."
    ],
    skills: [
      "Maintain Broadcast Systems: Oversee the maintenance, repair, and installation of all broadcast equipment.",
      "Ensure FCC Compliance: Serve as the station's Chief Operator, ensuring full compliance with all FCC technical regulations.",
      "Manage IT Infrastructure: Supervise the health and performance of station computers, servers, networking equipment.",
      "Troubleshoot & Repair: Provide timely and effective troubleshooting for any technical issues.",
      "Strategic Technical Planning: Research, propose, and implement technology upgrades.",
      "Program Curation & Scheduling: Develop, manage, and oversee the weekly on-air program schedule.",
      "Volunteer Management: Recruit, train, and provide ongoing support and mentorship to KGNU’s large and diverse team of volunteer programmers."
    ]
  },
];

export const playItems: PortfolioItem[] = [
  {
    id: "01",
    title: "Silver Stick Championship",
    subtitle: "Boulder, Hyland Hills, Golden HS, CU Women",
    jobTitle: "Goalie/Assitant Coach",
    role: "USA Hockey Level 5",
    company: "Boulder, Hyland Hills, Golden HS, CU Women",
    image: "/img/Silver-Stick-group-480.jpg",
    introImage: "/img/girl-goalie-480.jpg",
    link: "/portfolio/coaching",
    slug: "coaching",
    contentTitle: "Hockey/Goalie Coach",
    contentImage: "/img/lighted-ice-rink-3096.jpg",
    content: [
      "You can’t learn enough about being a goalie by just watching. There are things you don’t understand until you try them. Along with watching great goalies, I attempted to find experts in the area to help me. There weren’t a whole lot of local goalie experts that one could easily locate. One of the beautiful things about hockey is how nice and willing to share most people are (as long as they can determine that you are not in direct competition with them). Other goalies are extremely helpful, but in most cases, they are either misinformed or just plain mistaken. You do learn all the one-liners; don’t go down too early, hug the post, keep your glove up, face the shooter, etc. Every one of these generalities has a true application or a contradiction. You could possibly become and 80% save goalie facing the shooter, but to get to the 90th percentile, you need to center your body on the puck. Grant Fuhr once said, “It’s not how fast you go down, it’s how fast you get up. ”",
      "Skills are things that are learned and developed. Goalies need the ability to start, stop and/or change direction, while staying balanced and under control. Such agility, often termed \"athleticism\", as well as speed are, two athletic characteristics that were thought to be only \"talents\" and impossible to coach. As strength and conditioning techniques have progressed, such characteristics have become teachable. Since goaltenders should never wander too far from the net, skating speed should not be much of an issue but quickness and agility are. Elite goaltenders will be one of the best athletes on the team. Goalies should practice by replicating patterns commonly used while making saves. A goalie can improve their athleticism. Studies have shown that 1000 repetitions equate to a learned skill where as 2000 repetitions approach reflex. The game of hockey requires 236 unique skills and it takes approximately 15000 hours to prepare a player for the NHL."
    ]
  },
  {
    id: "02",
    title: "Bantam B State Championship",
    subtitle: "Boulder, Hyland Hills, Golden HS, CU Women",
    jobTitle: "Goalie/Assitant Coach",
    role: "USA Hockey Level 5",
    company: "Boulder, Hyland Hills, Golden HS, CU Women",
    image: "/img/Bantam-b-480.jpg",
    introImage: "/img/girl-goalie-480.jpg",
    link: "/portfolio/coaching",
    slug: "coaching-bantam",
    contentTitle: "Hockey/Goalie Coach",
    contentImage: "/img/lighted-ice-rink-3096.jpg",
    content: [
      "You can’t learn enough about being a goalie by just watching. There are things you don’t understand until you try them. Along with watching great goalies, I attempted to find experts in the area to help me. There weren’t a whole lot of local goalie experts that one could easily locate. One of the beautiful things about hockey is how nice and willing to share most people are (as long as they can determine that you are not in direct competition with them). Other goalies are extremely helpful, but in most cases, they are either misinformed or just plain mistaken. You do learn all the one-liners; don’t go down too early, hug the post, keep your glove up, face the shooter, etc. Every one of these generalities has a true application or a contradiction. You could possibly become and 80% save goalie facing the shooter, but to get to the 90th percentile, you need to center your body on the puck. Grant Fuhr once said, “It’s not how fast you go down, it’s how fast you get up. ”",
      "Skills are things that are learned and developed. Goalies need the ability to start, stop and/or change direction, while staying balanced and under control. Such agility, often termed \"athleticism\", as well as speed are, two athletic characteristics that were thought to be only \"talents\" and impossible to coach. As strength and conditioning techniques have progressed, such characteristics have become teachable. Since goaltenders should never wander too far from the net, skating speed should not be much of an issue but quickness and agility are. Elite goaltenders will be one of the best athletes on the team. Goalies should practice by replicating patterns commonly used while making saves. A goalie can improve their athleticism. Studies have shown that 1000 repetitions equate to a learned skill where as 2000 repetitions approach reflex. The game of hockey requires 236 unique skills and it takes approximately 15000 hours to prepare a player for the NHL."
    ]
  },
  {
    id: "03",
    title: "Hilliard On Bass",
    subtitle: "Bass6 Productions",
    jobTitle: "Bassist/Vocalist",
    role: "Harmonic Foundation",
    company: "Bass6 Productions",
    image: "/img/hilli-bass-480.jpg",
    introImage: "/img/MeAndStevie-HotterThanJuly-480-cropped.jpg",
    link: "/portfolio/musician",
    slug: "musician",
    contentTitle: "Continuous Groove",
    contentImage: "/img/Concert-Stage-3096.jpg",
    content: [
      "I have been playing into music playing bass since I was in elementary school. I started on trumpet but while playing James Brown, Sly Stone, The Jackson 5 and Charles Wright & The Watts 103rd Street Rhythm Band, my attention turned to the bass guitar. In the 70’s I was the technical engineer for KGNU Boulder while I was studying at CU. It was difficult to get students/on air talent to show up for their shows and since I was already there, they gave me a slot. My show was called ‘Eclipse – The Shedding of a Blacker Light’. I played jazz, pop R and B, but mostly funk. Cameo, Brothers Johnson, Larry Graham, Lakeside, ConFunkShun, Marcus Miller etc. Eclipse became the first on-air presence for many of these performers. One night Warner Brothers sends me the album “For You”. The record company always suggested which song to play, but I chose “Soft & Wet”. In 1978 the song was considered too racy for on air play and the FCC ordered Prince and I to defend the song in a hearing. We success fully justified it as ‘innuendo’.",
      "In 1980, Stevie Wonder comes to Boulder for the “Hotter Than July” tour. While warming up in the Gren Room, we are jamming on “All I Do“ (and Master Blaster of course). Stevie says “Hey why don’t you come and tour with us, Nathan Watts is gonna take over a project called WonderLove. I hemmed and hawed and said no because I didn’t think I was ‘good enough’. I was 19 years old. Good thing I didn’t cuz WonderLove did not fully materialize and of course, Nate came back. Twenty years later while working on test algorithms for FPGA microchips, (in my day job, I designed and built power systems for the Space Shuttle and nuclear submarines (and black ops helicopters, but I can’t say that))… it occurred to me that if Stevie Wonder asks you to play…You’re good enough.",
      "I’m five years old, living on an army base in Ft. Huachuca Arizona. Next door is this kid who’s always in the backyard playing the saxophone. I grab the Quaker Oats oatmeal box and spoons and accompany him on drums. The neighbors ‘tolerate’ us. Fast forward a few years and I’ve torn my father’s hand built stereo apart and connected my $50 bass to it. As my father prepares to give me “what for”.. he sees the “Album Open Our Eyes” leaned against the speaker and he says, “That’s that boy”. I say what boy?, he says “Andrew Woolfolk” (Of Earth, Wind and Fire) the neighbor you used to jam with. We drive to his house in Denver and just ‘hang out’."
    ]
  },
  {
    id: "04",
    title: "Hilliard BW",
    subtitle: "Bass6 Productions",
    jobTitle: "Bassist/Vocalist",
    role: "Harmonic Foundation",
    company: "Bass6 Productions",
    image: "/img/Sonny-BW-Bass-480.jpg",
    introImage: "/img/MeAndStevie-HotterThanJuly-480-cropped.jpg",
    link: "/portfolio/musician",
    slug: "musician-bw",
    contentTitle: "Continuous Groove",
    contentImage: "/img/Concert-Stage-3096.jpg",
    content: [
      "I have been playing into music playing bass since I was in elementary school. I started on trumpet but while playing James Brown, Sly Stone, The Jackson 5 and Charles Wright & The Watts 103rd Street Rhythm Band, my attention turned to the bass guitar. In the 70’s I was the technical engineer for KGNU Boulder while I was studying at CU. It was difficult to get students/on air talent to show up for their shows and since I was already there, they gave me a slot. My show was called ‘Eclipse – The Shedding of a Blacker Light’. I played jazz, pop R and B, but mostly funk. Cameo, Brothers Johnson, Larry Graham, Lakeside, ConFunkShun, Marcus Miller etc. Eclipse became the first on-air presence for many of these performers. One night Warner Brothers sends me the album “For You”. The record company always suggested which song to play, but I chose “Soft & Wet”. In 1978 the song was considered too racy for on air play and the FCC ordered Prince and I to defend the song in a hearing. We success fully justified it as ‘innuendo’.",
      "In 1980, Stevie Wonder comes to Boulder for the “Hotter Than July” tour. While warming up in the Gren Room, we are jamming on “All I Do“ (and Master Blaster of course). Stevie says “Hey why don’t you come and tour with us, Nathan Watts is gonna take over a project called WonderLove. I hemmed and hawed and said no because I didn’t think I was ‘good enough’. I was 19 years old. Good thing I didn’t cuz WonderLove did not fully materialize and of course, Nate came back. Twenty years later while working on test algorithms for FPGA microchips, (in my day job, I designed and built power systems for the Space Shuttle and nuclear submarines (and black ops helicopters, but I can’t say that))… it occurred to me that if Stevie Wonder asks you to play…You’re good enough.",
      "I’m five years old, living on an army base in Ft. Huachuca Arizona. Next door is this kid who’s always in the backyard playing the saxophone. I grab the Quaker Oats oatmeal box and spoons and accompany him on drums. The neighbors ‘tolerate’ us. Fast forward a few years and I’ve torn my father’s hand built stereo apart and connected my $50 bass to it. As my father prepares to give me “what for”.. he sees the “Album Open Our Eyes” leaned against the speaker and he says, “That’s that boy”. I say what boy?, he says “Andrew Woolfolk” (Of Earth, Wind and Fire) the neighbor you used to jam with. We drive to his house in Denver and just ‘hang out’."
    ]
  },
  {
    id: "05",
    title: "Hilliard and Prince",
    subtitle: "KGNU 88.5 FM Boulder",
    image: "/img/me-and-prince-480-2.jpg",
    introImage: "/img/KGNU-Mixer-480.png",
    link: "/portfolio/kgnu",
    slug: "kgnu-program-director",
    contentTitle: "Site Engineer/Program Director",
    contentImage: "/img/KGNU-On-Air-3096.png",
    content: [
      "At KGNU Community Radio I was able to fill the unique, combined role of Page Engineer & Program Director. In this leadership position responsible for both the technical integrity of our broadcast signal and the creative vision of the on-air programming.",
      "I acted as an advocate for independent media and possessed a blend of technical expertise and a strong sense of community-focused content curation. I was responsible for ensuring KGNU’s broadcast was reliable and high-quality while also guiding the volunteer programmers to create content that fulfilled the mission to educate, entertain, and serve as a platform for underrepresented voices and music."
    ],
    skills: [
      "Maintain Broadcast Systems: Oversee the maintenance, repair, and installation of all broadcast equipment.",
      "Ensure FCC Compliance: Serve as the station's Chief Operator, ensuring full compliance with all FCC technical regulations.",
      "Manage IT Infrastructure: Supervise the health and performance of station computers, servers, networking equipment.",
      "Troubleshoot & Repair: Provide timely and effective troubleshooting for any technical issues.",
      "Strategic Technical Planning: Research, propose, and implement technology upgrades.",
      "Program Curation & Scheduling: Develop, manage, and oversee the weekly on-air program schedule.",
      "Volunteer Management: Recruit, train, and provide ongoing support and mentorship to KGNU’s large and diverse team of volunteer programmers."
    ]
  },
  {
    id: "06",
    title: "Goalie Back",
    subtitle: "Sport Stable Superior",
    jobTitle: "Goaltender",
    role: "Puck Stopper",
    company: "Sport Stable Superior",
    image: "/img/goalie-back-480.jpg",
    introImage: "/img/hilli-goalie-480.jpg",
    link: "/portfolio/goalie",
    slug: "goalie",
    contentTitle: "There is no Future, There is no Past, I am here to make This Moment last",
    contentImage: "/img/Ice-Rink-3096.jpg",
    content: [
      "Goalies are examples of a modern day gladiator or a present day Darth Vader. Their equipment and mask afford the goalie an opportunity to individually express themselves; the last bastion of personalization in a team based environment. The mask allows them to express themselves without saying a word. Goalies must crave pressure. Goalies don’t score in games, but they can be the difference between a win or a loss. Goalies must be passionate about protecting the net. Although shooters take and miss shots, goalies are expected to make every save. The puck must pass through five other players on the ice to get to the goalie, but it is the goalie whose measurement is judged by goals against. Goalies enjoy being the last line of defense. They like the mental challenge of preparation and the attention to detail because one wrong move could cost them the game. When goals are scored, most people blame the goalie; they may not see the terrible pass, bad defense, and lack of clearing the puck, which led to the goal. A goalie is either the hero in a win or the goat in a loss.",
      "There are attributes that every good goalie must possess. I call these attributes STOPPERs. Each item can vary in intensity but the great goalie must have them all. The STOPPERs are Skills, Talent, Opportunities, Physical presence, Psychological presence, Experience, and Resources.",
      "I have seen a multitude of circumstances regarding goalies in the years I have coached hockey. Even though approximately 70 percent of winning a game is because of exceptional goaltending, it is almost always the most overlooked detail in hockey. Even the NHL thinks the fix for what ails hockey lies in the goaltender. The problem happened a long time ago when the game got faster and the equipment came with it. Goalies became more specialized, more athletic, and more scientific. They ceased being the “spacey weird guy” and became intelligent students of the game. The say you can’t make it through the playoffs without a great goalie, but very few teams or coaches understand the position or the person in that position.There are many misconceptions about goalies in the ranks of hockey, and many of them have little immediate effect on the play and mindset of a goalie. I’ve seen some pretty illogical and detrimental behavior perpetrated on goalies and I hope those incidents were soon forgotten. My purpose in writing this is to give coaches a different perspective. As a person who coaches, plays, and studied goalies, I hoped my experiences would be helpful in other people’s understanding of the trials and tribulations the goalies go through to get to where they are. With any luck, people like me can help people understand the differences between good and great goalies."
    ]
  },
  {
    id: "07",
    title: "Hilliard Goalie",
    subtitle: "Sport Stable Superior",
    jobTitle: "Goaltender",
    role: "Puck Stopper",
    company: "Sport Stable Superior",
    image: "/img/hilli-goalie-480.jpg",
    introImage: "/img/hilli-goalie-480.jpg",
    link: "/portfolio/goalie",
    slug: "goalie-hilli",
    contentTitle: "There is no Future, There is no Past, I am here to make This Moment last",
    contentImage: "/img/Ice-Rink-3096.jpg",
    content: [
      "Goalies are examples of a modern day gladiator or a present day Darth Vader. Their equipment and mask afford the goalie an opportunity to individually express themselves; the last bastion of personalization in a team based environment. The mask allows them to express themselves without saying a word. Goalies must crave pressure. Goalies don’t score in games, but they can be the difference between a win or a loss. Goalies must be passionate about protecting the net. Although shooters take and miss shots, goalies are expected to make every save. The puck must pass through five other players on the ice to get to the goalie, but it is the goalie whose measurement is judged by goals against. Goalies enjoy being the last line of defense. They like the mental challenge of preparation and the attention to detail because one wrong move could cost them the game. When goals are scored, most people blame the goalie; they may not see the terrible pass, bad defense, and lack of clearing the puck, which led to the goal. A goalie is either the hero in a win or the goat in a loss.",
      "There are attributes that every good goalie must possess. I call these attributes STOPPERs. Each item can vary in intensity but the great goalie must have them all. The STOPPERs are Skills, Talent, Opportunities, Physical presence, Psychological presence, Experience, and Resources.",
      "I have seen a multitude of circumstances regarding goalies in the years I have coached hockey. Even though approximately 70 percent of winning a game is because of exceptional goaltending, it is almost always the most overlooked detail in hockey. Even the NHL thinks the fix for what ails hockey lies in the goaltender. The problem happened a long time ago when the game got faster and the equipment came with it. Goalies became more specialized, more athletic, and more scientific. They ceased being the “spacey weird guy” and became intelligent students of the game. The say you can’t make it through the playoffs without a great goalie, but very few teams or coaches understand the position or the person in that position.There are many misconceptions about goalies in the ranks of hockey, and many of them have little immediate effect on the play and mindset of a goalie. I’ve seen some pretty illogical and detrimental behavior perpetrated on goalies and I hope those incidents were soon forgotten. My purpose in writing this is to give coaches a different perspective. As a person who coaches, plays, and studied goalies, I hoped my experiences would be helpful in other people’s understanding of the trials and tribulations the goalies go through to get to where they are. With any luck, people like me can help people understand the differences between good and great goalies."
    ]
  },
  {
    id: "08",
    title: "Sonny Goalie",
    subtitle: "Sport Stable Superior",
    jobTitle: "Goaltender",
    role: "Puck Stopper",
    company: "Sport Stable Superior",
    image: "/img/Sonny-Goalie-6-480.jpg",
    introImage: "/img/hilli-goalie-480.jpg",
    link: "/portfolio/goalie",
    slug: "goalie-sonny",
    contentTitle: "There is no Future, There is no Past, I am here to make This Moment last",
    contentImage: "/img/Ice-Rink-3096.jpg",
    content: [
      "Goalies are examples of a modern day gladiator or a present day Darth Vader. Their equipment and mask afford the goalie an opportunity to individually express themselves; the last bastion of personalization in a team based environment. The mask allows them to express themselves without saying a word. Goalies must crave pressure. Goalies don’t score in games, but they can be the difference between a win or a loss. Goalies must be passionate about protecting the net. Although shooters take and miss shots, goalies are expected to make every save. The puck must pass through five other players on the ice to get to the goalie, but it is the goalie whose measurement is judged by goals against. Goalies enjoy being the last line of defense. They like the mental challenge of preparation and the attention to detail because one wrong move could cost them the game. When goals are scored, most people blame the goalie; they may not see the terrible pass, bad defense, and lack of clearing the puck, which led to the goal. A goalie is either the hero in a win or the goat in a loss.",
      "There are attributes that every good goalie must possess. I call these attributes STOPPERs. Each item can vary in intensity but the great goalie must have them all. The STOPPERs are Skills, Talent, Opportunities, Physical presence, Psychological presence, Experience, and Resources.",
      "I have seen a multitude of circumstances regarding goalies in the years I have coached hockey. Even though approximately 70 percent of winning a game is because of exceptional goaltending, it is almost always the most overlooked detail in hockey. Even the NHL thinks the fix for what ails hockey lies in the goaltender. The problem happened a long time ago when the game got faster and the equipment came with it. Goalies became more specialized, more athletic, and more scientific. They ceased being the “spacey weird guy” and became intelligent students of the game. The say you can’t make it through the playoffs without a great goalie, but very few teams or coaches understand the position or the person in that position.There are many misconceptions about goalies in the ranks of hockey, and many of them have little immediate effect on the play and mindset of a goalie. I’ve seen some pretty illogical and detrimental behavior perpetrated on goalies and I hope those incidents were soon forgotten. My purpose in writing this is to give coaches a different perspective. As a person who coaches, plays, and studied goalies, I hoped my experiences would be helpful in other people’s understanding of the trials and tribulations the goalies go through to get to where they are. With any luck, people like me can help people understand the differences between good and great goalies."
    ]
  },
];

export const allItems = [...workItems, ...playItems];
