import { v4 as uuidv4 } from "uuid";

const sampleBlogs = [
  {
    id: uuidv4(),
    title: "The Impact of Artificial Intelligence in Healthcare",
    image: "https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/og-ai-in-healthcare.png",
    content: `
      <p>Artificial Intelligence (AI) is revolutionizing the healthcare industry by 
      enhancing diagnostics, personalized treatment plans, and patient care management. 
      AI-powered systems analyze vast amounts of medical data to identify patterns 
      and predict outcomes, leading to more accurate diagnoses and timely interventions.</p>
      <p>Moreover, AI-driven robotics assist in surgeries, reducing human errors 
      and recovery times. With advancements in machine learning algorithms, 
      AI continues to innovate healthcare, promising a future of improved medical 
      services and better patient outcomes.</p>
    `,
    category: "healthcare",
    comments: [],
  },
  {
    id: uuidv4(),
    title: "Heat Stroke and Heat Exhaustion: Differentiating the Symptoms and Severity.",
    image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_Heat_Stroke_and_Heat_0dd86d0882.jpg",
    content: `
      <p>This summer, with temperatures breaking all historic records, it has become more important than ever to protect yourself.</p>
    `,
    category: "healthcare",
    comments: [],
  },
  {
    id: uuidv4(),
    title: "The Role of Telemedicine in Modern Healthcare",
    image: "https://sentropharma.com/image/blog/blog-banner-54.jpg",
    content: `
      <p>Telemedicine is transforming healthcare delivery by enabling remote 
      consultations, diagnosis, and treatment options through digital platforms. 
      This technology improves access to healthcare services, particularly in 
      rural or underserved areas, and enhances patient convenience and satisfaction.</p>
      <p>Furthermore, telemedicine reduces healthcare costs, minimizes wait times 
      for appointments, and allows healthcare providers to reach a broader patient 
      population. By integrating telemedicine into healthcare systems, 
      organizations can improve efficiency and patient outcomes.</p>
    `,
    category: "healthcare",
    comments: [],
  },
  {
    id: uuidv4(),
    title: "The Importance of Mental Health Awareness",
    image: "https://miro.medium.com/v2/resize:fit:800/1*hok7touAokQ21TTrIV6Z5w.png",
    content: `
      <p>Mental health awareness plays a crucial role in promoting emotional 
      well-being, reducing stigma, and encouraging individuals to seek help 
      when needed. Awareness campaigns educate the public about mental health 
      conditions, symptoms, and available resources for support and treatment.</p>
      <p>Moreover, promoting mental health awareness in schools, workplaces, 
      and communities fosters a supportive environment and encourages open 
      conversations about mental health. By raising awareness and providing 
      access to mental health services, societies can improve overall mental 
      health outcomes and support individuals in their recovery journeys.</p>
    `,
    category: "healthcare",
    comments: [],
  },

  // Education category
  {
    id: uuidv4(),
    title: "Effective Study Techniques for Students",
    image: "https://www.mometrix.com/blog/wp-content/uploads/2016/04/Study-Tips-825x510.png",
    content: `
      <p>Effective study techniques are essential for students to maximize learning 
      and academic success. Techniques such as active recall, spaced repetition, 
      and summarization help in retaining information longer and understanding 
      complex concepts deeply.</p>
      <p>Furthermore, creating a conducive study environment, managing time 
      efficiently, and practicing self-discipline play crucial roles in achieving 
      academic goals. By adopting these proven strategies, students can enhance 
      their learning experiences and achieve academic excellence.</p>
    `,
    category: "education",
    comments: [],
  },
  {
    id: uuidv4(),
    title: "The Benefits of STEM Education in Schools",
    image: "https://images.shiksha.com/mediadata/images/articles/1693469058phpdUhdBR_480x360.jpeg",
    content: `
      <p>STEM (Science, Technology, Engineering, and Mathematics) education 
      prepares students for future careers by fostering critical thinking, 
      problem-solving skills, and innovation. It encourages students to 
      explore and excel in disciplines that are essential for technological 
      advancement and global competitiveness.</p>
      <p>Moreover, STEM education promotes hands-on learning experiences, 
      collaborative projects, and real-world applications, preparing students 
      for diverse career opportunities in STEM-related fields. By integrating 
      STEM into school curricula, educators empower students to become 
      lifelong learners and future leaders in science and technology.</p>
    `,
    category: "education",
    comments: [],
  },
  {
    id: uuidv4(),
    title: "The Role of Online Learning Platforms in Education",
    image: "https://futureeducationmagazine.com/wp-content/uploads/2023/08/2.-The-Role-of-Online-Learning-Platforms-in-Learning-Programming-Skills-1024x683.jpg",
    content: `
      <p>Online learning platforms revolutionize education by offering 
      flexible learning opportunities, access to diverse courses, 
      and personalized learning experiences. These platforms enable 
      students to learn at their own pace, from anywhere in the world, 
      and acquire new skills or certifications.</p>
      <p>Furthermore, online learning enhances educational access 
      for learners with diverse needs and schedules, promotes lifelong 
      learning, and prepares individuals for career advancement 
      and professional development. By leveraging online learning 
      platforms, educational institutions and learners can 
      adapt to the evolving landscape of digital education.</p>
    `,
    category: "education",
    comments: [],
  },

  // Travel category
  {
    id: uuidv4(),
    title: "The Rise of Sustainable Travel Practices",
    image: "https://www.ipsos.com/sites/default/files/ct/news_and_polls/2024-03/ipsos-sustainability-green-travel-opti.jpg",
    content: `
      <p>Sustainable travel practices promote responsible tourism 
      by minimizing environmental impact, supporting local communities, 
      and preserving cultural heritage. Travelers can reduce their carbon 
      footprint by choosing eco-friendly accommodations, reducing 
      single-use plastics, and supporting sustainable tour operators.</p>
      <p>Moreover, embracing sustainable travel practices enhances 
      travel experiences, promotes ethical tourism, and contributes 
      to global conservation efforts. By making informed travel 
      choices, individuals can enjoy enriching travel experiences 
      while protecting natural landscapes and biodiversity.</p>
    `,
    category: "travel",
    comments: [],
  },
  {
    id: uuidv4(),
    title: "Exploring Off-the-Beaten-Path Destinations",
    image: "https://i.natgeofe.com/n/1f67139e-6a44-429f-b071-e81a6ee52de7/your-shot-off-the-beaten-path19.jpg",
    content: `
      <p>Off-the-beaten-path destinations offer unique cultural 
      experiences, scenic landscapes, and authentic interactions 
      with local communities. Travelers seeking adventure and 
      exploration can discover hidden gems, historical sites, 
      and natural wonders off the typical tourist routes.</p>
      <p>Furthermore, visiting lesser-known destinations supports 
      sustainable tourism practices, reduces overcrowding at 
      popular tourist spots, and promotes economic development 
      in remote areas. By exploring off-the-beaten-path destinations, 
      travelers can embark on memorable journeys and create 
      meaningful connections with diverse cultures.</p>
    `,
    category: "travel",
    comments: [],
  },
  {
    id: uuidv4(),
    title: "Tips for Solo Travelers: Embracing Independence",
    image: "https://thumbs.dreamstime.com/b/solo-travel-character-traveling-alone-back-pack-retreat-camp-adventurous-lifestyle-traveler-exploring-nature-flat-vector-288676652.jpg",
    content: `
      <p>Solo travel offers opportunities for personal growth, 
      self-discovery, and cultural immersion. Travelers can 
      embrace independence, challenge their comfort zones, 
      and navigate new destinations at their own pace.</p>
      <p>Moreover, solo travel enhances confidence, fosters 
      resilience, and encourages meaningful connections with 
      locals and fellow travelers. By planning ahead, staying 
      informed about safety measures, and embracing spontaneity, 
      solo travelers can create enriching travel experiences 
      and unforgettable adventures around the world.</p>
    `,
    category: "travel",
    comments: [],
  },

  // Technology category
  {
    id: uuidv4(),
    title: "The Future of Artificial Intelligence: Trends and Applications",
    image: "https://www.market-prospects.com/storage/images/671_1200x675.jpg",
    content: `
      <p>Artificial Intelligence (AI) continues to advance with 
      innovations in machine learning, natural language processing, 
      and computer vision. AI-powered technologies are transforming 
      industries, automating processes, and enhancing decision-making 
      capabilities across various sectors.</p>
      <p>Furthermore, AI applications in healthcare, finance, 
      transportation, and other fields are revolutionizing 
      business operations, improving efficiency, and driving 
      innovation. By harnessing the potential of AI, businesses 
      and organizations can unlock new opportunities, 
      optimize performance, and achieve strategic goals 
      in the digital age.</p>
    `,
    category: "technology",
    comments: [],
  },
  {
    id: uuidv4(),
    title: "The Impact of 5G Technology on Mobile Communications",
    image: "https://www.thedigitalspeaker.com/content/images/2022/08/Impact-5G-technology.jpg",
    content: `
      <p>5G technology promises faster data speeds, lower latency, 
      and enhanced connectivity for mobile communications and 
      Internet of Things (IoT) devices. This next-generation 
      wireless network enables real-time data transfer, 
      supports advanced applications, and facilitates 
      seamless connectivity in smart cities and industries.</p>
      <p>Moreover, 5G's high-speed connectivity transforms 
      user experiences, enables immersive technologies 
      like augmented reality (AR) and virtual reality (VR), 
      and drives innovation in autonomous vehicles, 
      healthcare telemedicine, and smart infrastructure. 
      By embracing 5G technology, industries and consumers 
      can unlock new possibilities and propel digital 
      transformation in the global market.</p>
    `,
    category: "technology",
    comments: [],
  },
  // Add more entries as needed
];

export default sampleBlogs;
