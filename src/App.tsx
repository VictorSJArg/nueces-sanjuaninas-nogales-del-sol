import React from 'react';
import { ShoppingBag, Leaf, Sprout, Hand, Star, Package, CheckCircle2, MessageCircle } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md shadow-sm no-line">
    <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <span className="text-2xl font-headline font-bold text-stone-800">Nogales del Sol</span>
      <div className="hidden md:flex gap-8 items-center">
        <a className="text-stone-600 font-medium hover:text-stone-900 transition-all duration-300" href="#story">Our Story</a>
        <a className="text-stone-600 font-medium hover:text-stone-900 transition-all duration-300" href="#quality">The Orchard</a>
        <a className="text-stone-900 border-b-2 border-stone-800 pb-1 font-medium" href="#products">Shop</a>
        <a className="text-stone-600 font-medium hover:text-stone-900 transition-all duration-300" href="#benefits">Health Benefits</a>
      </div>
      <div className="flex items-center gap-4">
        <a className="hidden md:block bg-primary text-on-primary px-5 py-2 rounded-lg font-label font-semibold hover:opacity-90 transition-all active:scale-95" href="https://wa.me/5492645235017">WhatsApp</a>
        <ShoppingBag className="text-stone-700 cursor-pointer hover:opacity-80 transition-all w-6 h-6" />
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-20">
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img className="w-full h-full object-cover" alt="Close-up of premium walnuts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZdqZhiHAgfXoPICKLu89g8FoLanbaq_-p89iedhdqTl9DLBKwKFIgrePWjD2Ig8Q98KrjO_8aus5lcCVJpHiFBw3dgawUdJ7olBmTlPoV0p_zzTjgpAoJaMdE0q1_tqTnqFV0M1xmZMkdtKLmp-6KIVnaJBkrAvUZcF73EAnaocVX5xE0aUtdCxBW7vm74gPEJQ5gXm4viJCdebY6FKUL3nKTIItmQqw8ENEJCq3bgZmaG9s5_FV0qT_cnpccJZ0vq9osZpwE0L6q" />
      <div className="absolute inset-0 bg-stone-900/30"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
      <div className="max-w-2xl bg-surface/80 backdrop-blur-xl p-10 md:p-16 rounded-xl shadow-sm border border-white/20">
        <h1 className="font-headline text-5xl md:text-7xl text-on-surface editorial-text mb-6 font-bold leading-tight">Nueces Premium de San Juan</h1>
        <p className="text-xl md:text-2xl text-on-surface-variant mb-10 leading-relaxed">100% naturales, sin químicos, cosechadas artesanalmente y peladas a mano.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a className="satin-gradient text-on-primary text-center px-10 py-5 rounded-lg text-lg font-bold shadow-lg hover:opacity-90 transition-all active:scale-95" href="https://wa.me/5492645235017?text=Hola%20vi%20las%20nueces%20premium%20de%20Nogales%20del%20Sol%20y%20quiero%20info%20sobre%20precios%20y%20env%C3%ADos">Comprar Ahora</a>
        </div>
      </div>
    </div>
  </header>
);

const Story = () => (
  <section className="py-24 bg-surface" id="story">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <img className="rounded-lg shadow-xl object-cover aspect-[4/5] w-full" alt="Walnut orchard in San Juan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8farzOlCUUqYVfVYw9jGEd17BW20H39iiAvz6iCbjgro0cvzD8BdCF0CmOtQ-IliQL2cwLjURwgAyJBj9-zjMneRzmA-Ej9hoDKNAzFHaMyNyZkPtPrL0fG2ZCNqoOPGaiT2SNW9UwAQazW1GqfnapRugWvjZzweHGdzeno3TXaTjfQu9cfM4bQjklQP9fSQgXxu5gksNjd4M7sb3q4v-t7DLc19mcdoxNQ6t14Oby0iF6ei9MW7ibuPpjh9e2I1mi6FJauDHHiIm" />
          <div className="absolute -bottom-10 -right-10 hidden md:block w-64 h-64 border-[12px] border-surface-container-low rounded-lg overflow-hidden shadow-2xl">
            <img className="w-full h-full object-cover" alt="Hand peeling a walnut" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrPn-kgDByGCHjK5-q4poURH8057jKPpb0qJYLnE2njdMw1bHuTXBPm5GntuFnq3IiamEza5UBtwVC8VtCWlc6IysID-Q0jKispeD1zlS4MhV24xKIRsqxyXbmyyTu6Y4fW53XNh_ssrrJtW9vyrSn2GtXS67ONkGJV1EL_3iYADn5qclMNhWwFCn1IGrfuZpshckkKVdBkWxR5fh3cwGH46SEzCaTn65oykxQP0o_3aBr4SCVy8gBMNaiEo7SkhFY-1azPk7TjNwu" />
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Legado y Terruño</span>
          <h2 className="font-headline text-4xl md:text-5xl editorial-text font-bold">El sol de San Juan en cada cosecha</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            En el corazón de San Juan, nuestros nobles nogales crecen bajo un sol inclemente que otorga a nuestras nueces un carácter único. No somos una industria; somos una producción artesanal de baja escala donde cada paso respeta los tiempos de la naturaleza.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Nuestra dedicación culmina en el pelado a mano: un proceso laborioso que preserva la integridad del fruto y garantiza una calidad que los procesos industriales simplemente no pueden replicar.
          </p>
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 border-b-2 border-primary-container pb-1 text-primary font-bold cursor-default">
              <span>Calidad Artesanal Garantizada</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Quality = () => (
  <section className="py-24 bg-surface-container-low" id="quality">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-headline text-4xl font-bold">Calidad de Exportación</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">Seleccionamos lo mejor de nuestra cosecha para llevar a tu mesa un producto puro y excepcional.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-highest p-8 rounded-xl flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Leaf className="w-8 h-8" />
          </div>
          <h3 className="font-headline text-xl font-bold">Sin químicos</h3>
          <p className="text-on-surface-variant">Frutos naturales procesados sin aditivos ni conservantes industriales.</p>
        </div>
        <div className="bg-surface-container-highest p-8 rounded-xl flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Sprout className="w-8 h-8" />
          </div>
          <h3 className="font-headline text-xl font-bold">Cultivo natural</h3>
          <p className="text-on-surface-variant">Respetamos el ciclo del suelo sanjuanino para un crecimiento orgánico.</p>
        </div>
        <div className="bg-surface-container-highest p-8 rounded-xl flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Hand className="w-8 h-8" />
          </div>
          <h3 className="font-headline text-xl font-bold">Selección manual</h3>
          <p className="text-on-surface-variant">Cada nuez es inspeccionada visualmente antes del envasado.</p>
        </div>
        <div className="md:col-span-2 bg-primary text-on-primary p-10 rounded-xl flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h3 className="font-headline text-3xl font-bold">Sabor intenso y auténtico</h3>
            <p className="opacity-90">La baja escala nos permite concentrarnos en la frescura. Notarás la diferencia en la textura cremosa y el sabor profundo de la nuez recién pelada.</p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <Star className="w-24 h-24 opacity-30 fill-current" />
          </div>
        </div>
        <div className="bg-tertiary-container text-on-tertiary-container p-8 rounded-xl flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <Package className="w-8 h-8" />
          </div>
          <h3 className="font-headline text-xl font-bold">Producción limitada</h3>
          <p className="opacity-90">No producimos en masa. Cada lote es exclusivo de temporada.</p>
        </div>
      </div>
    </div>
  </section>
);

const WhyDifferent = () => (
  <section className="py-24 bg-surface overflow-hidden">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 space-y-10">
          <h2 className="font-headline text-4xl font-bold">¿Por qué somos diferentes?</h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="text-primary mt-1 w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Proceso 100% Artesanal</h4>
                <p className="text-on-surface-variant">Sin maquinaria industrial agresiva que dañe el aceite natural del fruto.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="text-primary mt-1 w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Pelado a Mano</h4>
                <p className="text-on-surface-variant">Evitamos el calor de las máquinas, manteniendo la nuez fresca por más tiempo.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="text-primary mt-1 w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Origen San Juan</h4>
                <p className="text-on-surface-variant">Directo de nuestras tierras áridas con riego de deshielo.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-secondary-container rounded-full blur-3xl opacity-20"></div>
          <img className="relative z-10 rounded-xl shadow-2xl" alt="Bowl of golden walnuts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCUGVZTxf1GGrAzBw0dnBY9gNmE6PQlOyOsW6E7KFAcqX_oRlg7_fWXRWxCtCoNuGba_d_nCJGgUTh4u5p2lRqCS1wVrrjLPhDRfo4VOHBJMB5TvXTeqZhGPfUvc0TWLT9UyeQlcXvuFEGB50VWjZZR9S3MPhKam881pI4eldtdqRj_9DE7ELMOwhxmNPJkfnza9LJuTNo1JBh0UvyvCA0X3rX1w_48UcELlJzJ5VvwTevYo6XyhZOxBVQHzsQlZudRNAnnPOBBgZW" />
        </div>
      </div>
    </div>
  </section>
);

const FairPrice = () => (
  <section className="bg-inverse-surface text-inverse-on-surface py-20">
    <div className="max-w-7xl mx-auto px-8 text-center space-y-6">
      <h2 className="font-headline text-3xl md:text-5xl font-bold">Calidad premium a precio justo</h2>
      <p className="text-xl opacity-80 max-w-2xl mx-auto">Al ser productores, eliminamos intermediarios. Pagás por la calidad del trabajo artesanal, no por costos de distribución innecesarios.</p>
      <div className="flex justify-center gap-8 pt-6">
        <div className="text-center">
          <p className="text-3xl font-bold">100%</p>
          <p className="text-xs uppercase tracking-widest opacity-60">Del Productor</p>
        </div>
        <div className="w-px h-12 bg-white/20"></div>
        <div className="text-center">
          <p className="text-3xl font-bold">0%</p>
          <p className="text-xs uppercase tracking-widest opacity-60">Intermediarios</p>
        </div>
      </div>
    </div>
  </section>
);

const Products = () => (
  <section className="py-24 bg-surface" id="products">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-20">
        <span className="text-primary font-bold uppercase tracking-widest text-sm">Nuestra Tienda</span>
        <h2 className="font-headline text-4xl md:text-5xl font-bold mt-2">Elegí tu presentación</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
          <div className="aspect-square overflow-hidden">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="1kg bag of premium walnuts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_FbIXu2jppn4KkZGzV_ivWq2rldga4PUsoGNz5RERg2PKWhBJozPYUJFT7FV3g_Y9assff5jTziStJoU3eIbX8RNSkBHUF4HY8U_HAcXmYNaD4uNh7AAVAFXQZNA77Jz8nNDChbbkKFjv90ZTFdLeqNHLpLssQ_ARiqiZKigoVPzkElutJTgsZZEWUd81alTrLO6OuU9vveHllSu0RzL8ZGlB_APt5iV56LaEMO9ccmHJlwn2OMm3uMMDd9c5xv-ZLobzo-LTosXU" />
          </div>
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl font-bold">Nueces Premium Peladas 1 Kg</h3>
                <p className="text-on-surface-variant mt-2 italic">Ideal para familias y amantes de la cocina.</p>
              </div>
              <span className="text-2xl font-bold text-primary">$18.000</span>
            </div>
            <a className="flex items-center justify-center gap-3 w-full bg-primary text-on-primary py-4 rounded-lg font-bold hover:opacity-90 transition-all" href="https://wa.me/5492645235017?text=Hola%20quiero%20comprar%201kg%20de%20Nueces%20Premium">
              <MessageCircle className="w-5 h-5" />
              Comprar por WhatsApp
            </a>
          </div>
        </div>
        <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
          <div className="aspect-square overflow-hidden">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="500g bag of premium walnuts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-q9q52Om6cX7L1I3lqnawx0OORow3XbfJv7FIF1vS-060B4fPnKHEITFqO6RFlxFL2GA_xwyqnGrrners5s9YEqyJDfuHkr_ndt56waUqS970rLeaRYd1BntMbjSFVNwpCDSTGwlb253yJGllCLk37OcnWT_WZ4dNyzjtg5dZz0WLLRvvM-IthOD9DhG-asFbIo_77Vr_oQoJGdDxhjsE-XqzP1jO3adMw7NNS23zKkhn3qUYrvtZa3ZdoBNstOwOS-NhJRv0Eni" />
          </div>
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl font-bold">Nueces Premium Peladas 500 grs</h3>
                <p className="text-on-surface-variant mt-2 italic">La medida justa para tus snacks saludables.</p>
              </div>
              <span className="text-2xl font-bold text-primary">$9.900</span>
            </div>
            <a className="flex items-center justify-center gap-3 w-full bg-primary text-on-primary py-4 rounded-lg font-bold hover:opacity-90 transition-all" href="https://wa.me/5492645235017?text=Hola%20quiero%20comprar%20500grs%20de%20Nueces%20Premium">
              <MessageCircle className="w-5 h-5" />
              Comprar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-surface-container-high relative">
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="font-headline text-3xl font-bold text-center mb-16 italic">"No hay vuelta atrás después de probarlas"</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { text: "La frescura es increíble. Se nota que están recién peladas, nada que ver con lo que compras en el súper.", author: "María L., San Juan" },
          { text: "Excelentes nueces, enteras y con un sabor muy intenso. El envío a Buenos Aires llegó perfecto.", author: "Ricardo G., Buenos Aires" },
          { text: "Me encantó que sean sin químicos. Se las doy a mis hijos con total tranquilidad. ¡Riquísimas!", author: "Sofía M., Mendoza" }
        ].map((t, i) => (
          <div key={i} className="bg-surface p-8 rounded-xl shadow-sm space-y-4">
            <div className="flex text-primary">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-on-surface-variant italic">"{t.text}"</p>
            <p className="font-bold text-sm">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 bg-surface text-center px-8 relative overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
      <img className="w-full h-full object-cover" alt="Background pattern of walnuts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv15KOSs3VsmJfW1qXavpZAvcG5En0XxsGuBGnHfxur3PWiV4cTP1XCOIo_6yXFT2DJJ9l0ZPhJVJbKUjuAKw0lAFwGQKQvCnoTxz_5jSCnB_xmq1K59anHBRjkWVea3JKFrikKMj-K3mXpBwB3L3nXLAY0jfrShAJ6gGLgTJKFtDzhfqF37RnoUJBZQppA44UPYtbU7JTbKXg3gAtJjs9GxsiaDoWfvyA6Zn1vFR-Nbek9TM1_z8lJpy4miebMdXBYVgYL99epFD8" />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto space-y-8">
      <h2 className="font-headline text-4xl md:text-6xl font-bold editorial-text">Probá la diferencia de lo natural</h2>
      <p className="text-2xl text-primary font-bold">Stock limitado - Cosecha de temporada</p>
      <p className="text-xl text-on-surface-variant">Llevamos el sabor de San Juan directamente a tu casa.</p>
      <div className="pt-6">
        <a className="satin-gradient text-on-primary inline-block px-12 py-6 rounded-lg text-2xl font-bold shadow-2xl hover:scale-105 transition-transform active:scale-95" href="https://wa.me/5492645235017?text=Hola%20vi%20las%20nueces%20premium%20de%20Nogales%20del%20Sol%20y%20quiero%20info%20sobre%20precios%20y%20env%C3%ADos">Comprar Ahora</a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-stone-900 text-stone-100 py-16 px-8 no-line">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="space-y-4 text-center md:text-left">
        <span className="text-3xl font-headline font-bold">Nogales del Sol</span>
        <p className="text-stone-400 font-sans text-sm max-w-xs leading-relaxed">Nueces Premium seleccionadas y peladas a mano en San Juan, Argentina.</p>
      </div>
      <div className="flex gap-8">
        <a className="text-stone-400 hover:text-white transition-colors" href="#">Instagram</a>
        <a className="text-stone-400 hover:text-white transition-colors" href="#">Facebook</a>
        <a className="text-stone-400 hover:text-white transition-colors" href="#">Location</a>
        <a className="text-stone-400 hover:text-white transition-colors" href="#">Contact Us</a>
      </div>
      <p className="text-stone-400 font-sans text-sm">© 2024 Nogales del Sol. San Juan, Argentina.</p>
    </div>
  </footer>
);

const WhatsAppFAB = () => (
  <a className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-90" href="https://wa.me/5492645235017?text=Hola%20vi%20las%20nueces%20premium%20de%20Nogales%20del%20Sol%20y%20quiero%20info%20sobre%20precios%20y%20env%C3%ADos" title="Contactanos por WhatsApp">
    <MessageCircle className="w-8 h-8" />
  </a>
);

export default function App() {
  return (
    <div className="bg-surface font-body text-on-surface overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Quality />
        <WhyDifferent />
        <FairPrice />
        <Products />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
