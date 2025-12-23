import { ShoppingCart, Package, Users, Sparkles, TrendingUp } from 'lucide-react';

export default function Hero() {
  const features = [
    { icon: ShoppingCart, title: 'Catalogue', subtitle: 'Design' },
    { icon: Package, title: 'Product', subtitle: 'Photography' },
    { icon: Users, title: 'Customer', subtitle: 'Support' },
    { icon: Sparkles, title: 'Creative', subtitle: 'Solutions' },
    { icon: TrendingUp, title: 'Brand', subtitle: 'Strategy' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* IMAGE DE FOND CLAIRE & NETTE */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202025-12-06%20%C3%A0%2017.39.20_2d4553c5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Overlay léger (pas de flou) */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Pièces de qualité fabriqué plus facile 
          <br />
          <span className="text-[#F4B400]">Usinage de precision  </span>
                  <span className="text-[#F4B400]">Aspim industrie algerie </span>
        </h1>

        <p className="text-xl md:text-2xl mb-16 text-gray-300 max-w-3xl mx-auto">
          
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/60 border border-gray-700 rounded-lg p-6 hover:bg-gray-700/60 transition-all hover:scale-105 hover:border-[#F4B400]"
            >
              <feature.icon className="w-12 h-12 text-[#F4B400] mx-auto mb-3" />
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
