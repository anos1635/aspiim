import {
  Factory,
  Cpu,
  Droplet,
  Printer,
  Wind,
  Megaphone,
  Globe,
  Clock,
  Users,
  Layers,
  ThumbsUp,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Factory,
      title: 'Extrusion',
      description:
        'Extrusions métalliques de haute qualité avec options de post-usinage. Délais rapides et coûts maîtrisés.',
    },
    {
      icon: Cpu,
      title: 'Usinage CNC',
      description:
        'Fraisage et tournage CNC de précision pour prototypes et pièces finales avec tolérances strictes.',
    },
    {
      icon: Droplet,
      title: 'Moulage par Injection',
      description:
        'Moulage plastique, surmoulage et insertion sans MOQ. De 1 à 1M d’unités.',
    },
    {
      icon: Printer,
      title: 'Print & Digital Formats',
      description:
        'Catalogues imprimés et digitaux optimisés pour tous les supports.',
    },
    {
      icon: Wind,
      title: 'Coulée sous vide',
      description:
        'Prototypes rapides et économiques pour petites et moyennes séries.',
    },
    {
      icon: Megaphone,
      title: 'Marketing & Distribution',
      description:
        'Accompagnement marketing stratégique et diffusion multicanale.',
    },
  ];

  const stats = [
    { icon: Globe, value: '15+', label: 'Pays couverts' },
    { icon: Clock, value: '15+', label: "Années d’expérience" },
    { icon: Users, value: '500+', label: 'Clients' },
    { icon: Layers, value: '2K+', label: 'Projets réalisés' },
    { icon: Factory, value: '24/7', label: 'Production' },
    { icon: ThumbsUp, value: '98%', label: 'Satisfaction' },
  ];

  const partners = [
    {
      name: 'Mercedes-Benz',
      logo: 'https://www.freepnglogos.com/uploads/bmw-logo-10.png',
    },
    {
      name: 'BMW',
      logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHEhUTEBETFhUWFRgVFxgVGBcVGBgZGBcaGBcXGBMaHSggGBwmGxUXITEnJikrLi4uFx8/ODMtNygtLisBCgoKDg0OGhAQGy0lHyUrLS4tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0rLS0tLS0tK//AABEIAKgBKwMBIgACEQEDEQH/xAAcAAEAAwEAAwEAAAAAAAAAAAAABQYHBAECAwj/xABJEAABAgMEBgcFAwkGBwEAAAABAAIDBBEFEiExBiJBUWFxBxMyUoGRoRRicpKxI0KCFTNDU6KywcLRY3ODk7PSFiQ0o9Ph8Bf/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAIREBAQACAgICAwEAAAAAAAAAAAECESExElEDQRMyYUL/2gAMAwEAAhEDEQA/ANxREQEREBERAREQEREBERARFzzE22CaYud3RnzOwDmg6F8Y02yDg52O4Yu+UYqOnJu40ujRAxgzAddA+KIaH6KpWhp3LSdWy7DEO8ajPmIqfLHetk2m5aXZ1oE9mGfxEN+lT5gL4mciuOFwcKF3reH0WfQ7WtW2vzEEtaci1lB/mRKjyoumHohac7jGmKcHRXup+FuC3TPK3pdnTMTa7yaP41XqJyKMjXm3+lFS4mhXsFXR4ofqOcA2oxFKVJ2Y+i4tHNFIlswRGhxWN1nNIN4EFppmN+B8U1GbrQW2nEbmGHlVn9V9mWu377XN4jWHpj6KlO0atKS/NxXOG5sUkfJEw9FzPtSds3CPCDh77TCd4PaLn7Kab5NLgTDJjFjgeRy5jYvqs8ldIoEcgPLoL9nWao/DGBu+ZarHL2s+Bg/XHk6m8HJ3pzWabMlgRfGVmmTYqx1d4yI5jYvssUIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiKNnJnrqitIYNHEZvOV0cK4cThvQe8ecMSohmjRm/+DN/PLnsp2kWmUKx6w4AESLtxNGne92Zdwz3lqidJdKYtpRPZZCpJNwuZn8MMj1d5YYmx6H6CQ7IAiTAESNmBmxnIbTx8lWtdue7elakNGJ7SxwizcQw4eYvCmHuQshzOfFXuxtEZSyKFkIOePvxNZ3hXBvgFOosuSpjIIiLFIG3ze6zhCA8y7+gUL0VR70GOzux73g9jf4tKlrSN8TB94N8mgH1qqv0WRrkxMM70OG/5S4H98Kp1Uf6jSl6vYHihAIOw4jyXsilav2pojLzwN1vVk90VaecPLyoqfNWVN6MH7PWhV7DiXQz8Ds4TvKvFagvV7Q8EEAg4EHEHwWypuMrPbJtls4awi5kVnaY7tt34ZPZxpzAVvsi2Wzuo+jYm7Y7i3+n1zVc0p0N6z7aVLmvbiLtbzSO6RiRwzGzcoGzbTM47qoouTDcdXARAMb8MjJ22g5jaBWtp3Z21ZFBaOW57d9nFI60CoOQeN494bR48p1QuXYiIjRERAREQEREBERAREQEREBERAREQERfOYiiA0uOzZvOwDiTgg5p+P8AcBphV5yut57CaHkATuWb6aW++ZcJSVBvGjTdzAdgGAbHOBx3NNMy5T2l1s/kiCcQYjzzBechxa0CvJrQe0uXoy0duD2yOCXvr1d7E0PaiHi7Hw5qpxy53m6ia0J0TZo9DvOAMdw1nd33G8N52qzoim3a5NCIiNERfOZi9Qxzjk1pd5CqCvvN+C93ee93gXVHoqP0fx+otFg/WQns8gH/AMivIh9VLMBzugH6LNLBjezT0o7+1DfnBZ/Mrx+3LLuNuREUOoiIgKmac6LCfb10HViMN8EYEEY3gRljn551rc0Wy6ZZtkVm2k6faXHUmYJHWAYEEGgitG4nBwyqdzhTSdHrXFrwr2Ae3ViNGx3Dgcws/wCkOyHWBGZPS7dWtHt+6QcC1w7pBpyPur6WJa7bLjQ47CTAjNF6vccaAn3mOqDycqs3HOXV1WoIgNUUOoiIgIiICIiAiIgIiICIiAiIgIiICjbTjhpx7LG33c8bo9HH5VJKn6S2j7JAfEBxdWIPw0bC/aMGvijLVQjwXaWWi2DXUYTfI4YxTXmAwHc1i12HDEIBrQAAAABkAMAFROiizOqhRJhwxe640+63Pzd+6r6qy9JwnGxERSsREQFwW867LxB3gGfOQz+Zd6itInakNveitHygxP5EZXynm0hNHBvqsamYvs7ob+49rvlcCtqtNtGtHwhYlaYqxXg55v0C114AjbivKjtHZj2uVgP70FhPO6K+qkVDqIiICIiDjtez22pBfCeBRzSMdh2FYnYodKumJCL2oRdEh13DCK3xbdf+B29bwsa6WYJ0ftCWnWDVcRfG+4aPb+JjiDzV4enL5OOWg6B2mZ+WDXGr4J6p28gYsPi2nkVZFmehcyLNtB0GtWRmEA7yzXY7xYT5rTFOU5XjeBERYoREQEREBERAREQEREBERAREQfCef1cN5Gd005nAeqzfpDmLjWwwcLzW03XGlzh49ZC+VaDbEQQ4RJNBeaSeAcHH0Cym3J1ttRITmdl7308IvU1/7KrHtGbUNGJP2CUgw90ME83azvUlSi8NF0UGxeVKxERAREQFC22esjQGf3j/ACusH+oVNKtRJ5s1Nh7QTCa0M6wCrb1+ruJbg3WGGBxRlSNr7Pib9ViVpGjFtlqm9dpvasMtiJg1jQS5xwAFSdwAGJV4OfyNh6NZj2izoHuhzPJxp6UVnVD6LC+zJf2eZaYcRz3PhtdTWaQMAe9gTdz4K+Kb2vHoREWKEREBZ/03SHtVmmJSpgxGP8Cbjv3h5LQFA6eyft9nTcMZmBEI5taXD1AWy6qcpuWMlsi0rrLOmu71bXf4TzAdXmxrfNbwvzLZEYvsvHAwpiM3lqwX/UuX6SkIvXwobu8xrvNoKrJPx+nQiIodBERAREQEREBERAREQEREBERBSumOddIWTMPYaO1Gg7r7ww/vLONETWBZpPdFfGbi1Wl9L8v7TZE2NzWv+SI138FlWjkbqrPk3/qy8H8Ey59PJ481eLnm/QyLwDVeVDoIiIC+UzMMlWl8Rwa0Zk+g4nhtXxtC0GyQFaueeyxvad/QcTguOXs9844RZk1I7LB2WcuPE48hgjHweItuYEFkHunBz/j3D3B47lMS0s2VFGimH/3guW1bXgWMy9Fe1jRhjh4AbTwFTwWW6UdJcSbqyVHVs77gLx+FuTeZqfhWyWsuUx7aJa1qyko+HDiRAHvcLrW4uJJwNwbOOA4lReiMGzo7Otkyx5IALyaxB7rqgFnw0AO45rCoNtls3BdeJd1zXOc4kkmu0nEr3hTEWyYnWy8R0Nw2tNPAjJw4GoXTw+nL8n3p+kJ2Qhzjbrmj6YjI4ZHiMQuaBaESyzcmSXQ9kXa3+83j3vPes+0W6VA6kOeaGnLrWA3D8TM2eFRwaFpctMw7QYHMc17XCoIIII3gjA8wudljpjlMukk1wcKg1BxFF5UCyFEsc1hAvhZmHtbvMMnL4cjw2y8nNsnW3oZqMtxB2gg4g8CsU+6IiNFx2yKy8b+6f+6V2Litl1ILwfvC585Df5kKxjTKym2LAmGs7L43WDhehBp9WBbJo9jKy9f1EP8AcCyPpZjXYNBm55aPBsL/AHlbHZsLqIMNvdhsb5NAV3qOeP7V0oiKHQREQEREBERAREQEREBERAREQRukkj+U5SYg/rIMRniWkD1WA6Lt9os+PCxvQopNNwjQ6ejpc/Mv0gsKdZ/5CteZlqUZMtd1Y2Xieth+bmlv41eDl8ncrYdF578pSkCL3oTSeYFHeoKlFQ+ieepCjSrjjAiEt+B+I9a+YV7c4NFSaAYklTZy6Y3ceVHzU+XOMOAA5+0nss+LeeHnTCvq+K+0MIZLIW2Jk53wbh73lvVYt/TuU0daYUsBEiDCjTqg+8/f5lJC3SzQpeHZgdFjPBdm6I8jZ9APIcFR9J+k5sKrJIXjl1jsGjltd6DiVnduaUTOkkS69z4jidWFCBI8GCpPM1UxYnRjaFsUdMXZWGe9rxCOENpoPEg8Fcxk7crnbxiq9sW2+dcYkeIXu3uyHADJo4BebI0an9J/+mgOuH9I/Uh/Mc/Cq2zR7o0s+xKOMPr4g+/Ho/HgzsjyVxAu4BLn6ZPit/ZkujfQnBly2JPR3RHgghkLUYCMtY6zvRfa3+il2LpSMHe5FwPIPAofEBaqinyrp4TWn5gtvR+YsZ1I8F7NxI1TycMD4FethaQTOj7r0vELRWpYcWO5t38RQ8V+nY8Fsw0te1rmnMOAIPMFUnSDotkrUq6DegP9zFnjDOXgQrmc+3O/FZzi49FekuXtWkOY+xinDWOo4+6/+Bod1VbIsoQ7rZdwa/bta8DY4bfqPOuJ6Q9G8/Y1SIfXwx96FrGnGH2h4Ahc+jOm83o4QwHrIYwMKJXVpsa7NvLEcFlwl6J8lnGT9AyFoCaq1wuRB2mH6tP3m8eONF2qk2FpXJ6WABrzDjDENdqxGne0/eHKueOassvPOgkMj0qcGxBg124Huu9Ds3KLHWXaRUZbr9Vje88V5N1q/MG+ak1X7XjdZEdQ9htwbrz6E+HY9Vjay7TRv5WtGTlhjfjMLuRfX/TDCtxWKdHjP+I7bjTIFYUuw3Cd7vs4Y53A75VtarL0nD7oiIpWIiICIiAiIgIiICIiAiIgIiICzXphsZz2wpyDhEguFSMxQhwPgRX8PFaUueflGz0N0N4wcKY4+i2XVTlNzTJ7JtH2OclpyC0mHMgQ3sbiavNHMpva8ED4BvV00l0nlrHFZt4qMWy7SC47jE2eeA45qjSsi+x4z5NxLQ5xfLvGbIopqg7zQeLWd5dXR3YclNRojZyF1s0115pjOL2uGGIhnVLhnUgmhV2TtzlvSOndILU07NyTgPEHLV1IdPfjmgdyb5FS1h9EF6jrQmC7+ygVa3kYp1neAatVY0MAAAAGAAwA8F5U+XpfhO7yjbGsGVsNt2VgQ4Y2lo1j8T83eJUkiKViIiAiIgIiIChLe0Sk7fr7RAaXd9upEH4xifGqm0Rlm+2N270QRpY35CPfoahkTUeKZXYowJ8G81z2dprPaMES9qy8R8Ps1iCj6cH9mKPHxW2L4zUrDnGlkVjXtObXgOB5g4K/L2j8euceFfsLSGFPwy+VidfDA7FaRYZ2NcHY054jiFVekO2vyHJPJd9pEvMGyrng3zyo48r7V2/8IyUlMmYlmvhBmGpEe1jnDtHPBgpSlaYHCiocOGek612w21MnLG887HNBx8XuFOXJZxs51qtD6GbANi2e18QUizJ659c6H82D+HH8RV8XhrQwAAUAwAXlZbtcmhERY0REQEREBERAREQEREBERAREQEREFY02sBtqQy8DWbiSMxTJw4jbvHIKjRmRJsiKw3ZyBQup98DKI3fWuPE7nYbAqXpTYJgER4FW3cQQPzZ24bYZ2jZU7MqlRlj9pfRTSJlvQ9jYrR9ozd7w90+inVlLYbnv66X+ymGaz2DJw2vZXtNO0bNu83bRzSdlq0ZEoyNkWnAO+Gv0z5pY3HL2sCIilQiIgIiICIiAiIcEBRVqT16sOGad9w+6O6D3iPIcaL0nLSMfVgnDbE/gzf8AFlurszHpC09Fi/8AKSGvNON3VBd1RPLtRSTgNhNTjgtZa5Ok/SlziLMkAXR4pEN9zNoOAhDc47dww3rR+jjQ9mhso2FgYr6PjPG19Mge63If+1XeiTo7Ojo9rnRenIgrQ63VB2Yrtedp8N9dMQkERFjRERAREQEREBERAREQEREBERAREQEREBCKoiCo2/oyR9pLA4G9dbg5p3wz/Dy3KtPeybNItGRBh1gFGkjvtHYPEYfCtTURbOj8K1MSLj++3+Yfe+vFVKi4+kBZ1vzFmUbHBiM2OrrU3h+Txz81aJC14M/2Hi93Tqu+U58xgqNOWXN2HWjeshcBfZzLM2HiKc1ywbSgRu20wz87OfeHkea3W2TKxqKKl2fPP/QzF4bg4RP2HVc30UrDtaM3tCGeFHNPnU/RTpe0+iiBasQ/oWf5jv8Axr0/LMQ/omD/ABCfS4sNppFBG0I0XItHwtJI8SaeihrVt2Xk6+1TTSe6XXj/AJDP9qFqzzFqw4eDdd25mIHN2Q5VrwUPaloAML5mIxkJuYJowfE49s8Nu6qolpdIgeerkZdz3HBpeDT8MFms7xI5L5yOgNoaWPbFtKM6HDzDTS8BuZCGrD8ceBV+Ptzue+uXHb+m8zpE/wBksiHEJdgYoFHkbSwfom+8cfhVx6OejOFovSPMUizRHazbDrmGVzdvcrXo9o5LaOQ7ktCDa9p2b3cXOzKlllv1FY43uiIilYiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAoq0tHpa0amJCF4/ebqu8xn4oiCtzvR4135mORwe0O/aFPouB+ilpyv5qOCNgbFePRwARFXlU+EfCLZltMBoXE0w1oJ+q4m2Jb8bOI5v44Tf3QiJ5M8P69v/wA8tO0f+pnBQ5h0SJE/ZpRS1mdE0tAoY8aJE4NpDb6VPqiJ5U8Iudk2FLWOKS8BjOIGsebzifNSKIpWIiICIiAiIgIiICIiAiIgIiIP/9k=',
    },
    {
      name: 'Volkswagen',
      logo: "https://www.freepnglogos.com/uploads/vw-png-logo/volkswagen-png-logo-vectors-12.png",
    },
    {
      name: 'Toyota',
      logo: 'https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-red-logo-11.png',
    },
    {
      name: 'Renault',
      logo: 'https://www.freepnglogos.com/uploads/renault-logo-png/renault-logo-renault-logos-vector-eps-cdr-svg-download-19.png',
    },
    {
      name: 'Hyundai',
      logo: 'https://www.freepnglogos.com/uploads/hyundai-logo-huyndai-car-symbol-logo-png-18.png',
    },
    {
      name: 'Bosch',
      logo: 'https://www.freepnglogos.com/uploads/bosch-logo-png/silver-colored-emblem-and-red-bosch-logo-1.png',
    },
    {
      name: 'Siemens',
      logo: 'data:image/png;base64,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',
    },
    {
      name: 'Schneider Electric',
      logo: 'data:image/png;base64,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',
    },
    {
      name: 'Stellantis',
      logo: 'data:image/jpeg;base64,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',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* VIDEO + IMAGE */}
        <div className="grid lg:grid-cols-2 gap-10 mb-24 items-center max-w-7xl mx-auto"> <div className="aspect-video rounded-xl overflow-hidden shadow-xl border"> <iframe src="https://www.youtube.com/embed/kAUDY4y0530" title="YouTube video" className="w-full h-full" allowFullScreen /> </div> <div className="rounded-xl overflow-hidden shadow-xl border"> <img src="https://ik.imagekit.io/wvlb7dccz/photo_2025-12-23_12-11-31.jpg?updatedAt=1766488362153" alt="Industry" className="w-full h-full object-cover" /> </div> </div>
        

        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="text-[#FFD232] font-semibold uppercase text-sm mb-2">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            CHECK OUR SERVICES
          </h2>
        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl p-8 hover:border-[#FFD232] hover:shadow-2xl transition-all"
            >
              <div className="bg-[#FFD232] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 rounded-xl p-10 shadow hover:shadow-xl transition-all"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#FFD232]" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* PARTNERS */}
        <div className="text-center mt-32">
          <h3 className="text-3xl font-bold text-gray-900 mb-14">
            Nos Partenaires
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white border rounded-xl p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-14 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
