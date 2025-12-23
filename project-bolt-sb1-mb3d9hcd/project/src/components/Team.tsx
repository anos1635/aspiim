import { Mail, Phone, Linkedin, MapPin, User, AtSign, ClipboardList } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    { name: '', role: 'Service Technique', email: '', phone: '0560601509', linkedin: '' },
    { name: '', role: 'Responsable Technique', email: '', phone: '', linkedin: '' },
    { name: '', role: 'Directeur / Gérant', email: '', phone: '0560036262', linkedin: '' },
    { name: '', role: 'Responsable Commercial', email: '', phone: '0560601500', linkedin: '' },
    { name: '', role: 'Service Commercial', email: '', phone: '0560601500', linkedin: '' },
    { name: '', role: 'Responsable Atelier', email: '', phone: '', linkedin: '' },
    { name: '', role: 'DFC', email: '', phone: '0560601506', linkedin: '' },
  ];

  const yellowColor = '#FFD232';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* ================= TEAM ================= */}
        <div className="text-center mb-16">
          <p className="font-semibold mb-2 tracking-wider uppercase text-sm" style={{ color: yellowColor }}>
            Our Experts
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            CHECK OUR TEAM
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {member.name || '___________________'}
                </h3>
                <p className="text-gray-600 text-center font-semibold mb-6">
                  {member.role}
                </p>

                <div className="space-y-4 border-t border-gray-200 pt-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5" style={{ color: yellowColor }} />
                    <p className="text-sm text-gray-400">{member.email || '___________________'}</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5" style={{ color: yellowColor }} />
                    {member.phone ? (
                      <a href={`tel:${member.phone}`} className="text-sm font-medium" style={{ color: yellowColor }}>
                        {member.phone}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-400">___________________</p>
                    )}
                  </div>

                  {member.linkedin && (
                    <div className="flex items-start space-x-3">
                      <Linkedin className="w-5 h-5" style={{ color: yellowColor }} />
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: yellowColor }}>
                        LinkedIn
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DEVIS FORM ================= */}
        <div className="max-w-4xl mx-auto mb-28">
          <div className="bg-gray-950 rounded-2xl p-10 shadow-2xl border border-gray-800">
            <h3 className="text-3xl font-bold text-white text-center mb-2">
              Demande de devis
            </h3>
            <p className="text-gray-400 text-center mb-10">
              Remplissez le formulaire et notre équipe vous contactera
            </p>

            <form className="grid md:grid-cols-2 gap-6">
              {/* NOM */}
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-[#FFD232]" />
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full pl-12 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-[#FFD232] outline-none"
                />
              </div>

              {/* PRENOM */}
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-[#FFD232]" />
                <input
                  type="text"
                  placeholder="Prénom"
                  className="w-full pl-12 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-[#FFD232] outline-none"
                />
              </div>

              {/* TELEPHONE */}
              <div className="relative">
                <Phone className="absolute left-4 top-3.5 w-5 h-5 text-[#FFD232]" />
                <input
                  type="tel"
                  placeholder="Numéro de téléphone"
                  className="w-full pl-12 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-[#FFD232] outline-none"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <AtSign className="absolute left-4 top-3.5 w-5 h-5 text-[#FFD232]" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-12 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-[#FFD232] outline-none"
                />
              </div>

              {/* SERVICE */}
              <div className="relative md:col-span-2">
                <ClipboardList className="absolute left-4 top-3.5 w-5 h-5 text-[#FFD232]" />
                <input
                  type="text"
                  placeholder="Service demandé"
                  className="w-full pl-12 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-[#FFD232] outline-none"
                />
              </div>

              {/* BUTTON */}
              <div className="md:col-span-2 text-center mt-6">
                <button
                  type="submit"
                  className="px-10 py-3 rounded-lg font-bold bg-[#FFD232] text-black hover:bg-yellow-400 transition-all"
                >
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ================= MAPS ================= */}
        <div className="max-w-5xl mx-auto">
          <a
            href="https://maps.app.goo.gl/ukLYSTAawxwXEo4FA?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block h-80 rounded-xl overflow-hidden border-2 border-gray-800 group"
          >
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=Douira%20Alger&output=embed"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <MapPin className="w-12 h-12 mb-4 text-[#FFD232]" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Notre localisation
              </h3>
              <p className="text-gray-300 mb-6">Douira, Alger</p>
              <span className="px-6 py-3 rounded-lg font-semibold bg-[#FFD232] text-black">
                Ouvrir dans Google Maps
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
