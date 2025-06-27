import CustomRendering from "../components/customRender";


export const sourceData = {
  title: "Meet the crew",
  title_description: "Creative people",
  data: [
    {
      id: 1,
      isImage: true,
      image: "1.jpg",
      name: "Tina Bennett",
      role: "Content Strategist",
      description:
        "Visionary leader passionate about building impactful products and growing talented teams.",
    },
    {
      id: 2,
      isImage: true,
      image: "2.jpg",
      name: "Sophia Allen",
      role: "Chief Operating Officer",
      description:
        "Operational expert ensuring smooth execution, team alignment, and delivery excellence.",  
    },
    {
      id: 3,
      isImage: true,
      image: "3.jpg",
      name: "Michael Chen",
      role: "Lead Engineer",
      description:
        "Tech architect focused on scalable systems, clean code, and mentoring junior devs.",  
    },
    {
      id: 4,
      isImage: true,
      image: "4.jpg",
      name: "Emily Johnson",
      role: "Product Designer",
      description:
        "Design thinker crafting intuitive user experiences with empathy and precision.",
    },
    {
      id: 5,
      isImage: true,
      image: "6.jpg",
      name: "Carlos Rivera",
      role: "Marketing Director",
      description:
        "Brand strategist creating campaigns that connect people to products with purpose.", 
    },
    {
      id: 6,
      render: (type) => {
        return(
          <CustomRendering type={type} />
        )
       
      },
    },
  ],
};

export const circleSourceData = {
  title: "Meet the crew",
  title_description: "Creative people",
  data: [
    {
      id: 1,
      image: "10.jpg",
      name: "Reena",
      role: "Founder / CEO",
      description:
        "Visionary leader passionate about building impactful products and growing talented teams.",
    },
    {
      id: 2,
      image: "9.jpg",
      name: "Sophia Allen",
      role: "Chief Operating Officer",
      description:
        "Operational expert ensuring smooth execution, team alignment, and delivery excellence.",
    },
    {
      id: 3,
      image: "8.jpg",
      name: "Michael Chen",
      role: "Lead Engineer",
      description:
        "Tech architect focused on scalable systems, clean code, and mentoring junior devs.",
    },
    {
      id: 4,
      image: "7.jpg",
      name: "Emily Johnson",
      role: "Product Designer",
      description:
        "Design thinker crafting intuitive user experiences with empathy and precision.",
    },
    {
      id: 5,
      image: "6.jpg",
      name: "Carlos Rivera",
      role: "Marketing Director",
      description:
        "Brand strategist creating campaigns that connect people to products with purpose.",
    },
    {
      id: 6,
      image: "5.jpg",
      name: "Alicia Moore",
      role: "HR Manager",
      description:
        "People-first HR leader nurturing a healthy culture and empowering careers.",
    },
    {
      id: 7,
      image: "4.jpg",
      name: "James Blake",
      role: "Financial Analyst",
      description:
        "Data-driven analyst translating numbers into strategic business insights.",
    },
    {
      id: 8,
      image: "3.jpg",
      name: "Linda Park",
      role: "UX Researcher",
      description:
        "Curious mind turning user behavior into design opportunities.",
    },
    {
      id: 9,
      image: "2.jpg",
      name: "Robert Green",
      role: "DevOps Engineer",
      description:
        "Automation advocate ensuring smooth deployments and infrastructure stability.",
    },
    {
      id: 10,
      image: "1.jpg",
      name: "Tina Bennett",
      role: "Content Strategist",
      description:
        "Creative storyteller shaping brand voice and engaging digital audiences.",
    },
  ],
};
