import React from "react";

const BlogHero = () => {
  return (
    <div className="relative h-96">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/vintage-fountain-pen-aged-paper-with-handwritten-text-against-textured-turquoise-background_653240-15630.jpg')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Welcome to My Blog
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Exploring ideas, sharing stories, and documenting the journey
          </p>

          <div className="mt-8">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
