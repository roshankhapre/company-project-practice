import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us-page bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="hero-section relative flex items-center justify-center h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          src="/path/to/futuristic-background-video.mp4"
        ></video>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 neon-text">
            About Us
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Your Partner in Pioneering Digital Solutions
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      {/* Company Overview */}
      <section className="company-overview py-20 px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            We are a visionary tech company specializing in futuristic web
            development, design, and innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story py-20 px-8 bg-gradient-to-br from-black to-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 glass-text">Our Story</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Established in 2024, our journey began with a mission to redefine
            the digital landscape. From launching ground-breaking web platforms
            to leading digital transformations, we have grown exponentially...
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-20 px-8 relative bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center neon-text">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="team-member bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                src="/path/to/member1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto border-4 border-cyan-500"
              />
              <h3 className="mt-4 text-2xl font-semibold">John Doe</h3>
              <p className="text-cyan-300">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="team-member bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                src="/path/to/member2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto border-4 border-pink-500"
              />
              <h3 className="mt-4 text-2xl font-semibold">Jane Smith</h3>
              <p className="text-pink-300">CTO</p>
            </div>
            {/* Team Member 3 */}
            <div className="team-member bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                src="/path/to/member3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto border-4 border-yellow-500"
              />
              <h3 className="mt-4 text-2xl font-semibold">Bob Johnson</h3>
              <p className="text-yellow-300">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-20 px-8 text-center">
        <h2 className="text-5xl font-bold mb-8 glass-text">
          Join Our Digital Revolution
        </h2>
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 px-8 rounded-full mt-4 hover:shadow-lg hover:from-blue-500 hover:to-purple-500 transition duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
