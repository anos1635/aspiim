import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'CATALOGUE', 'PHOTOGRAPHY', 'DESIGN'];

  const portfolioItems = [
    { image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202025-12-06%20%C3%A0%2017.39.20_2d4553c5.jpg', category: 'CATALOGUE' },
    { image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202025-12-06%20%C3%A0%2017.39.20_0df4ef0e.jpg', category: 'CATALOGUE' },
    { image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202025-12-06%20%C3%A0%2017.39.20_8121c8b8.jpg', category: 'PHOTOGRAPHY' },
    { image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202025-12-06%20%C3%A0%2017.39.21_95b1a1c7.jpg', category: 'PHOTOGRAPHY' },
    { image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202025-12-06%20%C3%A0%2017.39.22_9da862e9.jpg', category: 'PHOTOGRAPHY' },
    { image: 'https://ik.imagekit.io/wvlb7dccz/images%20(2).jpg', category: 'DESIGN' },
    { image: 'https://ik.imagekit.io/wvlb7dccz/images%20(1).jpg', category: 'DESIGN' },
    { image: 'https://ik.imagekit.io/wvlb7dccz/t%C3%A9l%C3%A9chargement%20(16).jpg', category: 'PHOTOGRAPHY' },
    { image: 'https://ik.imagekit.io/wvlb7dccz/images%20(4).jpg', category: 'DESIGN' },
  ];

  const filteredItems =
    activeFilter === 'ALL'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* TITLE */}
        <div className="text-center mb-12">
          <p className="text-[#FFD232] font-semibold mb-2 tracking-wider uppercase text-sm">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            CHECK OUR PORTFOLIO
          </h2>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all border 
                  ${
                    activeFilter === filter
                      ? 'bg-[#FFD232] text-white border-[#FFD232] shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-[#FFF3B0]'
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* GRID ITEMS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CATEGORY ON HOVER */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-semibold text-lg">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
