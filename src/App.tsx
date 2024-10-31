import React, { useState } from 'react';
import { Palette, Calendar, Users, ArrowRight, Home, Info, Award, UserPlus, Handshake, Clock, HelpCircle, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
// import { Palette, Calendar, Users, ArrowRight, Home, Info, Award, UserPlus, Handshake, Clock, HelpCircle, Mail, Facebook, Twitter, Instagram, Linkedin } from 'react-feather';

const NavLink = ({ icon: Icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition duration-300"
  >
    <Icon size={20} />
    <span>{text}</span>
  </button>
);

const ArtworkCard = ({ title, artist, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{artist}</p>
    </div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <section
            id="home"
            className="py-20 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://etfdb.com/media/W1siZiIsIjIwMjEvMTAvMjgvODc2dnBwNDdudF9Gb3VyX01lZ2F0cmVuZHNfRWxldmF0aW5nX3RoZV9Db21tZXJjaWFsX1NwYWNlX0luZHVzdHJ5LmpwZyJdLFsicCIsInRodW1iIiwiNjAweDMxNV4iXV0/Four-Megatrends-Elevating-the-Commercial-Space-Industry.jpg')", // Replace with your image URL
            }}
          >
            <div className="container mx-auto px-4 bg-white bg-opacity-70 p-10 rounded-lg">
            <h1 className="text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 drop-shadow-lg">
  National AI Art-a-thon
</h1>
<h2 className="text-3xl text-center mb-6 text-gray-700 font-semibold drop-shadow-md">
  Reimagining Bangladesh through AI-driven Creativity
</h2>
<p className="text-lg text-center mb-10 text-gray-600 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
  Explore the dynamic intersection of Artificial Intelligence and Bangladeshi art. Join the nation's first AI-powered art competition.
</p>

              <div className="text-center">
              <button
    onClick={() => window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSf_nWf5ZSnVExvLibuaF_V_kjyPLa7pS8N1PPZa6rSqwYuDWg/viewform'}
    className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
  >
    Register Now
  </button>
              </div>
            </div>
          </section>
        );
      
  
       case 'about':
        return (
<section id="about" className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-8 gradient-text">What is National AI Art-a-thon?</h2>
    <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src="https://i.pinimg.com/originals/e9/e9/cf/e9e9cf900af2607f731942f973fc787b.png"
          alt="AI Art-a-thon"
          className="rounded-lg shadow-lg"
        />
      </div>
      
      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-6 text-lg">
        <p>
          Artificial Intelligence (AI) is increasingly becoming a transformative force across all sectors, revolutionizing how we work, create, and interact. In Bangladesh, although AI readiness is gaining traction in different sectors, the challenges of cultural homogenization in the creative industries remain unaddressed.
        </p>
        <p>
          Through the National AI Art-a-thon competition, participants will create AI-generated artworks that showcase Bangladesh's rich and diverse culture, making their mark in an evolving global AI landscape. This unique competition brings together Bangladeshi art practitioners, art professionals, students, technologists, and AI enthusiasts in a dynamic and creative competition.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Objectives</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Challenge the cultural homogenization seen in AI-generated content by creating representations that reflect Bangladesh's unique traditions and identities.</li>
          <li>Bring together Bangladeshi artists, creators, and technologists to explore AI tools like DALL-E, Midjourney, and Stable Diffusion in culturally relevant ways.</li>
          <li>Encourage a deeper understanding of the role AI can play in preserving and showcasing Bangladesh's cultural diversity in the global digital space.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
        );
          
          case 'hackathon':
            return (
              <section id="hackathon" className="py-20">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Hackathon Details</h2>
                  <div className="max-w-4xl mx-auto space-y-6 text-lg">
                    <h3 className="text-2xl font-semibold">Overview</h3>
                    <p>
                      National AI Art-a-thon is designed to provide Bangladeshi artists and creators the opportunity to use Generative AI tools to produce artworks that reflect the nation's cultural and social diversity. The competition will be conducted in two phases: an initial virtual phase and a final in-person event, each with its own set of themes and objectives.
                    </p>
          
                    <h3 className="text-2xl font-semibold mt-8">Categories for Submission</h3>
          
                    {/* Images for categories */}
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-8 mb-8">
                      {/* Category A Image */}
                      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <img 
                          src="https://i.ibb.co/ygKCYYL/23bf6cb1ddbc.png" 
                          alt="Category A: Professional Artists" 
                          className="rounded-lg shadow-lg" 
                        />
                        <p className="text-center mt-4 font-semibold">Category A: Professional Artists (individual or team of up to 2 members)</p>
                      </div>
          
                      {/* Category B Image */}
                      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <img 
                          src="https://i.ibb.co/59LzfbS/0ef42aaadc42.png" 
                          alt="Category B: Student Artists" 
                          className="rounded-lg shadow-lg" 
                        />
                        <p className="text-center mt-4 font-semibold">Category B: Student Artists (individual or team of up to 2 members)</p>
                      </div>
                    </div>
          
                    <p className="text-red-600 font-bold"><em>Note: Female participants are encouraged to apply.</em></p>
          
                    <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Competition Phases</h2>
          
                    <h3 className="text-2xl font-semibold mt-8"></h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <p className="text-center font-bold">Initial Phase (virtual): Individual or team application submission</p>
                    </ul>
          
                    <h3 className="text-2xl font-semibold mt-8">Submission Requirements</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>AI-generated final image/art.</li>
                      <li>
                        Step-by-step prompt documentation (<a href="https://drive.google.com/file/d/1SxoB13-gvukclOQBs3tPLLCp8i2whFUI/view" className="text-indigo-600 hover:underline">click here for the sample</a>).
                      </li>
                      <li>
                        Video documentation of the whole process (max limit: 2 minutes, the process can be fast-forwarded, <a href="https://drive.google.com/file/d/1vlbzBuajMX0oSWnY3U0A7t-skAbOvhMs/view" className="text-indigo-600 hover:underline">click here for the sample screen record video documentation</a>).
                      </li>
                      <li>
                        Existing popular AI art tools, such as DALL-E, Midjourney, Stable Diffusion, Firefly, etc., can be applied to create the final image output (the tools used in the process must be mentioned in the art description).
                      </li>
                      <li>Either Bengali or English language can be used to write the description.</li>
                      <li>Participants will bring their laptops.</li>
                    </ol>
          
                    <div className="mt-8 space-y-8">
                      {/* Theme 1 */}
                      <div className="flex flex-col md:flex-row items-center md:space-x-4">
                        <img src="https://i.ibb.co/LZ7rNMZ/f7dc62d471f0.png" alt="Theme 1" className="w-full md:w-1/2 rounded-lg" />
                        <div className="text-lg">
                          <h4 className="font-bold text-xl">Theme 1: “Time-Travelling: An Artathon Adventure into Urban Street Markets”</h4>
                        </div>
                      </div>
          
                      {/* Theme 2 */}
                      <div className="flex flex-col md:flex-row items-center md:space-x-4">
                        <div className="text-lg">
                          <h4 className="font-bold text-xl">Theme 2: “Bangladesh’s Urban Jungle: An Artathon Adventure in Informal Housing”</h4>
                        </div>
                        <img src="https://i.ibb.co/tKpPVzR/a683fae3a466.png" alt="Theme 2" className="w-full md:w-1/2 rounded-lg" />
                      </div>
                    </div>
          
                    <h2 className="text-4xl font-bold text-center mb-8 gradient-text">In-Person Competition</h2>
                    <p className="text-center font-bold">Final Phase (in-person): Around 20 individuals or teams will be invited to the final phase.</p>
          
                    {/* New Text with Image */}
                    <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-8">
                      <div className="text-lg w-full md:w-1/2">
                        <h4 className="font-bold text-xl">Details:</h4>
                        <ol className="list-decimal pl-6 space-y-2">
                          <li>Around 20 shortlisted teams (10 from Category A and 10 from Category B) will be brought together for one day to ideate and complete the final task.</li>
                          <li>Theme: Notun Bangladesh/Bangladesh 2.0.</li>
                          <li>Shortlisted participants will get 120 minutes for image creation and an additional 60 minutes for documentation.</li>
                          <li>Experts and mentors will be available in the final phase to support the participants.</li>
                          <li>Participants will present their art/image to the judges of the competition.</li>
                        </ol>
                      </div>
                      <img src="https://i.ibb.co/BrjPhwf/4ac9b3e5f7cc.png" alt="In-Person Competition" className="w-full md:w-1/2 rounded-lg" />
                    </div>
                    <section id="eligibility" className="py-20">
  <div className="container mx-auto px-4">
    {/* Eligibility Criteria Header */}
    <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Eligibility Criteria</h2>
    <p className="text-center text-lg mb-8">
    </p>

    {/* Icons or Logos for Eligibility Types */}
    <div className="flex flex-wrap justify-center items-center space-x-8">
    <div className="flex flex-col items-center">
        <img src="https://i.ibb.co/xD0d6hg/aabf9439fa1a.png" alt="Artists" className="w-16 h-16 mb-4" />
        <p className="font-semibold">Bangladeshi nationals</p>
      </div>

      {/* Artist Logo */}
      <div className="flex flex-col items-center">
        <img src="https://i.ibb.co/q9t0PM2/5ec4cbcaac60.png" alt="Artists" className="w-16 h-16 mb-4" />
        <p className="font-semibold">Artists</p>
      </div>

      {/* Designer Logo */}
      <div className="flex flex-col items-center">
        <img src="https://i.ibb.co/V9Ldk2S/5fc0ecee1bec.png" alt="Designers" className="w-16 h-16 mb-4" />
        <p className="font-semibold">Designers</p>
      </div>

      {/* AI Enthusiast Logo */}
      <div className="flex flex-col items-center">
        <img src="https://i.ibb.co/sCsLnVy/baa2b0a6859d.png" alt="AI Enthusiasts" className="w-16 h-16 mb-4" />
        <p className="font-semibold">AI Enthusiasts</p>
      </div>

      {/* Students Logo */}
      <div className="flex flex-col items-center">
        <img src="https://i.ibb.co/QMTGXpb/4ad3ee38fd61.png" alt="Students" className="w-16 h-16 mb-4" />
        <p className="font-semibold">Students</p>
      </div>

      {/* Technologist Logo */}
      <div className="flex flex-col items-center">
        <img src="https://i.ibb.co/mT3mqMd/ffad748374f9.png" alt="Technologists" className="w-16 h-16 mb-4" />
        <p className="font-semibold">Technologists</p>
      </div>
    </div>
  </div>
</section>

<section id="judging-timeline" className="py-20">
  <div className="container mx-auto px-4">
    {/* Judging Criteria Header */}
    <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Judging Criteria Timeline</h2>

    {/* Timeline Tree */}
    <div className="relative border-l-4 border-gray-300 pl-6 space-y-10">

      {/* Cultural Relevance */}
      <div className="relative">
        {/* Timeline Dot */}
        <div className="absolute w-6 h-6 bg-indigo-600 rounded-full -left-4 top-1.5 shadow-md"></div>
        {/* Timeline Content */}
        <div className="ml-10">
          <h4 className="text-2xl font-bold text-indigo-600">Cultural Relevance</h4>
          <p className="text-lg text-gray-700 mt-2">
            How effectively does the artwork capture and reflect Bangladesh’s unique cultural, social, and artistic traditions?
          </p>
        </div>
      </div>

      {/* Innovation */}
      <div className="relative">
        {/* Timeline Dot */}
        <div className="absolute w-6 h-6 bg-yellow-500 rounded-full -left-4 top-1.5 shadow-md"></div>
        {/* Timeline Content */}
        <div className="ml-10">
          <h4 className="text-2xl font-bold text-yellow-500">Innovation</h4>
          <p className="text-lg text-gray-700 mt-2">
            The originality and creativity in the use of AI tools to generate new ideas and visual narratives.
          </p>
        </div>
      </div>

      {/* Technical Expertise */}
      <div className="relative">
        {/* Timeline Dot */}
        <div className="absolute w-6 h-6 bg-green-500 rounded-full -left-4 top-1.5 shadow-md"></div>
        {/* Timeline Content */}
        <div className="ml-10">
          <h4 className="text-2xl font-bold text-green-500">Technical Expertise</h4>
          <p className="text-lg text-gray-700 mt-2">
            Proficiency in using AI tools, integrating manual techniques, and creating a cohesive and visually appealing final image.
          </p>
        </div>
      </div>

      {/* Process Documentation */}
      <div className="relative">
        {/* Timeline Dot */}
        <div className="absolute w-6 h-6 bg-red-500 rounded-full -left-4 top-1.5 shadow-md"></div>
        {/* Timeline Content */}
        <div className="ml-10">
          <h4 className="text-2xl font-bold text-red-500">Process Documentation</h4>
          <p className="text-lg text-gray-700 mt-2">
            Clarity and depth in documenting the creative process, including prompts, tool usage, and workflow.
          </p>
        </div>
      </div>

    </div>
    {/* CTA Buttons */}
    <div className="mt-8 flex justify-center space-x-4">
      {/* Meet the Judges Button */}
      <a
        href="/meet-the-judges"
        className="bg-indigo-600 text-white font-bold py-2 px-6 rounded hover:bg-indigo-700 transition"
      >
        Meet the Judges
      </a>

      {/* Submit Your Work Button */}
      <a
        href="/submit-your-work"
        className="bg-green-600 text-white font-bold py-2 px-6 rounded hover:bg-green-700 transition"
      >
        Submit Your Work
      </a>
    </div>

    {/* Participation Fees */}
    <div className="mt-12 text-center">
      <p className="text-lg font-bold">
        Participation Fees: <span className="text-indigo-600">Free of charge</span>
      </p>
    </div>
  </div>
</section>
       </div>
          </div>
          </section>
            );

            
      case 'awards':
        return (
          <section id="awards-prize-money" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Awards & Prize Money</h2>
        
            <div className="max-w-4xl mx-auto space-y-6 text-lg">
              {/* Prize Money Info */}
              <p>
                In total, four teams (2 teams from Category A & 2 teams from Category B) will be finalists, and they will receive a total of 
                <strong> 2 lacs in prize money</strong>.
              </p>
        
              {/* Exhibition Info */}
              <p>
                The shortlisted artworks will be showcased through an exhibition that will engage the wider public, including artists, educators, technologists, and policymakers. The exhibition aims to create awareness about AI’s potential to express local identity and creativity.
              </p>
              
              {/* Image */}
              <div className="mt-8 flex justify-center">
                <img 
                  src="https://i.ibb.co/NtjHs7c/3669da082b66.png" 
                  alt="Prize Money and Exhibition" 
                  className="w-full max-w-md rounded-lg shadow-lg" 
                />
              </div>
            </div>
          </div>
        </section>
        
        );

      case 'registration':
        return (
          <section id="registration" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Register for National AI Art-a-thon</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto space-y-6 md:space-y-0">
              
              {/* Registration Text */}
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-lg">
                  Ready to participate in this exciting event? Click the button below to fill out our registration form.
                </p>
                <div className="text-center mt-8">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf_nWf5ZSnVExvLibuaF_V_kjyPLa7pS8N1PPZa6rSqwYuDWg/viewform" // Replace with actual Google Form link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
                  >
                    Submit Now
                    <ArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
              
              {/* Image */}
              <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                <img 
                  src="https://i.ibb.co/VWNfFbX/fb929af04fdf.jpg" // Replace with your image link
                  alt="Art-a-thon Registration"
                  className="w-full max-w-md rounded-lg shadow-lg" 
                />
              </div>
            </div>
            
          </div>
        </section>
        
        );

      case 'partners':
        return (
          <section id="partners" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Our Partners</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg">
                <p>
                  National AI Art-a-thon is organized by the Partnerships for a Tolerant, Inclusive Bangladesh (PTIB), UNDP Bangladesh in collaboration with the ICT Ministry, a2i, renowned researchers from the University of Toronto, Harvard Graduate School of Design, and the University of Cambridge and Peace Maker Studio. These partnerships reflect the commitment to developing AI tools that are culturally relevant and ethically grounded in Bangladesh's pluralistic values.
                </p>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
  {/* Replace these with actual partner logos */}
  <img 
    src="https://seeklogo.com/images/P/punjab-information-technology-board-pitb-logo-3EF1FC7FB7-seeklogo.com.png" 
    alt="PTIB Logo" 
    className="mx-auto w-32 h-32 object-contain" 
  />
  <img 
    src="https://dailyasianage.com/library/1494416681_1.png" 
    alt="ICT Ministry Logo" 
    className="mx-auto w-32 h-32 object-contain" 
  />
  <img 
    src="https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2022/05/16/a2i.jpg?itok=xQiidxDL&timestamp=1652695438" 
    alt="a2i Logo" 
    className="mx-auto w-32 h-32 object-contain" 
  />
  <img 
    src="https://th.bing.com/th/id/OIP.zrRlIk4AC9HjuPptbWjZtwHaHa?rs=1&pid=ImgDetMain" 
    alt="Peace Maker Studio Logo" 
    className="mx-auto w-32 h-32 object-contain" 
  />
  <img 
    src="https://th.bing.com/th/id/OIP.UHrq_DZ1Byr9-wQzMTQNngHaDz?w=661&h=340&rs=1&pid=ImgDetMain" 
    alt="UNDP Logo" 
    className="mx-auto w-32 h-32 object-contain" 
  />
  <img 
    src="https://seekvectorlogo.com/wp-content/uploads/2018/02/university-of-toronto-vector-logo.png" 
    alt="University of Toronto Logo" 
    className="mx-auto w-32 h-32 object-contain" 
  />
</div>

              </div>
            </div>
          </section>
        );

      case 'timeline':
        return (
<section id="timeline" className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Important Dates</h2>
    <div className="max-w-4xl mx-auto space-y-6 text-lg">
      <p className="text-center mb-8">Mark your calendars for the following key dates:</p>

      {/* Timeline Tree */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

        {/* Event 1 - Left */}
        <div className="mb-8 flex justify-between items-center w-full">
          <div className="order-1 w-5/12">
            <div className="bg-indigo-200 rounded-lg shadow-xl px-6 py-4">
              <h4 className="font-bold">Registration Opens:</h4>
              <p>November 1, 2024</p>
            </div>
          </div>
          <div className="z-20 flex items-center order-2 bg-indigo-600 shadow-xl w-8 h-8 rounded-full">
            <Calendar className="mx-auto text-white" />
          </div>
          <div className="order-3 w-5/12"></div>
        </div>

        {/* Event 2 - Right */}
        <div className="mb-8 flex justify-between items-center w-full">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-2 bg-indigo-600 shadow-xl w-8 h-8 rounded-full">
            <Calendar className="mx-auto text-white" />
          </div>
          <div className="order-3 w-5/12">
            <div className="bg-indigo-200 rounded-lg shadow-xl px-6 py-4">
              <h4 className="font-bold">Submission Deadline for Virtual Phase:</h4>
              <p>November 30, 2024</p>
            </div>
          </div>
        </div>

        {/* Event 3 - Left */}
        <div className="mb-8 flex justify-between items-center w-full">
          <div className="order-1 w-5/12">
            <div className="bg-indigo-200 rounded-lg shadow-xl px-6 py-4">
              <h4 className="font-bold">Finalists Announcement:</h4>
              <p>Last week of December 2024</p>
            </div>
          </div>
          <div className="z-20 flex items-center order-2 bg-indigo-600 shadow-xl w-8 h-8 rounded-full">
            <Calendar className="mx-auto text-white" />
          </div>
          <div className="order-3 w-5/12"></div>
        </div>

        {/* Event 4 - Right */}
        <div className="mb-8 flex justify-between items-center w-full">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-2 bg-indigo-600 shadow-xl w-8 h-8 rounded-full">
            <Calendar className="mx-auto text-white" />
          </div>
          <div className="order-3 w-5/12">
            <div className="bg-indigo-200 rounded-lg shadow-xl px-6 py-4">
              <h4 className="font-bold">Final Hackathon:</h4>
              <p>First week of January 2025</p>
            </div>
          </div>
        </div>

        {/* Event 5 - Left */}
        <div className="mb-8 flex justify-between items-center w-full">
          <div className="order-1 w-5/12">
            <div className="bg-indigo-200 rounded-lg shadow-xl px-6 py-4">
              <h4 className="font-bold">Exhibition:</h4>
              <p>To be announced</p>
            </div>
          </div>
          <div className="z-20 flex items-center order-2 bg-indigo-600 shadow-xl w-8 h-8 rounded-full">
            <Calendar className="mx-auto text-white" />
          </div>
          <div className="order-3 w-5/12"></div>
        </div>
      </div>
    </div>
  </div>
</section>
        );

      case 'faq':
        return (
          <section id="faq" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Frequently Asked Questions</h2>
              <div className="max-w-4xl mx-auto space-y-8 text-lg">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Who can participate?</h3>
                  <p>The National AI Art-a-thon is open to all Bangladeshi nationals, including artists, designers, AI enthusiasts, students, and technologists.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">What AI tools are allowed?</h3>
                  <p>Participants can use popular AI art tools such as DALL-E, Midjourney, Stable Diffusion, and others. The specific tools used must be mentioned in the art description.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Can teams submit more than one entry?</h3>
                  <p>Each individual or team (of up to 2 members) can submit one entry per category.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">How do I submit my work?</h3>
                  <p>Submission details will be provided to registered participants. Generally, you'll need to submit the final AI-generated image, step-by-step prompt documentation, and a video of the creation process.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Will the artwork be used for research purposes?</h3>
                  <p>Yes, the submitted artworks may be used for research purposes to further understand and improve AI's cultural representation. All usage will be properly credited to the artists.</p>
                </div>
              </div>
            </div>
          </section>
        );

      case 'contact':
        return (
          <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Get in Touch</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg">
                <p className="text-center mb-8">
                  Have questions or need assistance? Reach out to us through the form below or email us at <a href="mailto:artathonbd@gmail.com" className="text-indigo-600 hover:underline">artathonbd@gmail.com</a>.
                </p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required></textarea>
                  </div>
                  <div>
                    <button type="submit" className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">National AI Art-a-thon</h1>
            <div className="flex space-x-4">
              <NavLink icon={Home} text="Home" onClick={() => setCurrentPage('home')} />
              <NavLink icon={Info} text="About" onClick={() => setCurrentPage('about')} />
              <NavLink icon={Palette} text="Hackathon" onClick={() => setCurrentPage('hackathon')} />
              <NavLink icon={Award} text="Awards" onClick={() => setCurrentPage('awards')} />
              <NavLink icon={UserPlus} text="Registration" onClick={() => setCurrentPage('registration')} />
              <NavLink icon={Handshake} text="Partners" onClick={() => setCurrentPage('partners')} />
              <NavLink icon={Clock} text="Timeline" onClick={() => setCurrentPage('timeline')} />
              <NavLink icon={HelpCircle} text="FAQ" onClick={() => setCurrentPage('faq')} />
              <NavLink icon={Mail} text="Contact" onClick={() => setCurrentPage('contact')} />
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        {renderPage()}
      </main>

      <section className="bg-gray-100 py-8">
  <div className="container mx-auto px-4">
    <p className="text-center text-2xl font-bold text-indigo-600">
      AI Readiness in Bangladesh: Making AI More Representative of Bangladesh’s Diverse Culture and Society
    </p>
  </div>
</section>

<footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h3 className="text-xl font-bold mb-4">National AI Art-a-thon</h3>
        <p>Reimagining Bangladesh through AI-driven Creativity</p>
      </div>
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#" onClick={() => setCurrentPage('home')} className="hover:text-indigo-400">Home</a></li>
          <li><a href="#" onClick={() => setCurrentPage('about')} className="hover:text-indigo-400">About</a></li>
          <li><a href="#" onClick={() => setCurrentPage('registration')} className="hover:text-indigo-400">Registration</a></li>
          <li><a href="#" onClick={() => setCurrentPage('hackathon')} className="hover:text-indigo-400">Hackathon Structure</a></li>
          <li><a href="#" onClick={() => setCurrentPage('faq')} className="hover:text-indigo-400">FAQs</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/3">
        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-indigo-400"><Facebook /></a>
          <a href="#" className="hover:text-indigo-400"><Twitter /></a>
          <a href="#" className="hover:text-indigo-400"><Instagram /></a>
          <a href="#" className="hover:text-indigo-400"><Linkedin /></a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center">
      <p>&copy; 2024 National AI Art-a-thon. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;