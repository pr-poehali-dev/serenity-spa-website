import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/8626694c-ae6c-456e-9808-870d5e485dcc/files/20c1f487-90e7-43a8-a593-30b1fdde6ffc.jpg';
const GALLERY_1 = 'https://cdn.poehali.dev/projects/8626694c-ae6c-456e-9808-870d5e485dcc/files/5752b826-8b9f-4476-bed6-c0cd50f7f94d.jpg';
const GALLERY_2 = 'https://cdn.poehali.dev/projects/8626694c-ae6c-456e-9808-870d5e485dcc/files/e1149ab1-9a7f-4f1d-b4e6-55894d3a878d.jpg';

const NAV = [
  { id: 'about', label: 'О нас' },
  { id: 'services', label: 'Услуги' },
  { id: 'masters', label: 'Мастера' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'certificates', label: 'Сертификаты' },
];

const SERVICES = [
  { name: 'Лёгкость', desc: 'Мягкое расслабление, возвращающее телу невесомость и ясность мыслям.', icon: 'Feather', duration: '60 мин' },
  { name: 'Лёгкость и питание волос', desc: 'Расслабление в сочетании с уходом за волосами на косметике Davines.', icon: 'Sparkles', duration: '90 мин' },
  { name: 'Нейрорелаксация для женщин', desc: 'Глубокий релакс всего тела, перезагрузка нервной системы.', icon: 'Moon', duration: '90 мин' },
  { name: 'Нейрорелаксация для мужчин', desc: 'Снятие напряжения и восстановление внутреннего баланса.', icon: 'Wind', duration: '90 мин' },
  { name: 'Блаженство', desc: 'Расслабление женщин в четыре руки — состояние полного покоя.', icon: 'Heart', duration: '120 мин' },
  { name: 'Сила тишины', desc: 'Расслабление мужчин в четыре руки — глубокое восстановление.', icon: 'Mountain', duration: '120 мин' },
];

const MASTERS = [
  { name: 'Анна', role: 'Ведущий мастер релаксации', desc: 'Создаёт атмосферу полного доверия и покоя.', initials: 'А' },
  { name: 'Мария', role: 'Мастер нейрорелаксации', desc: 'Работает с глубоким расслаблением нервной системы.', initials: 'М' },
  { name: 'Дмитрий', role: 'Мастер мужских программ', desc: 'Возвращает телу силу через тишину и заботу.', initials: 'Д' },
];

const REVIEWS = [
  { text: 'Одна процедура заменяет месяц походов к психологу. Вышла другим человеком — лёгкой и спокойной.', author: 'Екатерина' },
  { text: 'Тишина, тепло и темнота — три кита этого места. Засыпаешь прямо на сеансе от блаженства.', author: 'Ольга' },
  { text: 'Лучший подарок самому себе. Сила тишины — это именно то, чего мне не хватало.', author: 'Андрей' },
];

const CERTIFICATES = [
  { value: '3 000 ₽', label: 'Сертификат «Лёгкость»', desc: 'Идеальное знакомство с миром тишины' },
  { value: '5 500 ₽', label: 'Сертификат «Блаженство»', desc: 'Расслабление в четыре руки' },
  { value: '∞', label: 'Подарочный номинал', desc: 'Любая сумма на ваш выбор' },
];

const Leaf = ({ className }: { className?: string }) => (
  <Icon name="Leaf" className={className} />
);

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-serenity-cream text-serenity-darkest overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-serenity-cream/80 backdrop-blur-md border-b border-serenity-darkest/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
            <Leaf className="w-5 h-5 text-serenity-dark animate-sway" />
            <span className="font-serif text-2xl tracking-widest text-serenity-darkest">БЕЗМЯТЕЖНОСТЬ</span>
          </button>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm tracking-wide text-serenity-dark hover:text-serenity-darkest transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-serenity-dark hover:after:w-full after:transition-all"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-serenity-darkest">
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-serenity-cream border-t border-serenity-darkest/10 animate-fade-in">
            <div className="flex flex-col px-6 py-4">
              {NAV.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="py-3 text-left text-serenity-dark tracking-wide border-b border-serenity-darkest/5">
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 grain">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="relative z-10 animate-fade-up">
            <p className="flex items-center gap-3 text-serenity-dark text-sm tracking-luxe uppercase mb-6">
              <span className="w-10 h-px bg-serenity-dark" /> Краснодар
            </p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] text-serenity-darkest mb-8 text-balance">
              Мы вернём вас
              <span className="block italic text-serenity-dark">в тишину, которой так не хватает</span>
            </h1>
            <p className="text-lg text-serenity-dark/80 max-w-md mb-10 leading-relaxed">
              Здесь суета остаётся за порогом.<br />Проведи время наедине с собой.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => scrollTo('services')} className="px-8 py-4 bg-serenity-darkest text-serenity-cream rounded-full text-sm tracking-wide hover:bg-serenity-dark transition-colors">
                Выбрать программу
              </button>
              <a href="tel:+79883651465" className="flex items-center gap-2 text-serenity-darkest hover:text-serenity-dark transition-colors">
                <Icon name="Phone" size={16} />
                <span className="text-sm tracking-wide">+7 (988) 365-14-65</span>
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-6 bg-serenity-dark/10 rounded-[3rem] blur-2xl animate-breathe" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src={HERO_IMG} alt="Расслабляющий массаж головы в СПА-центре Безмятежность" className="w-full h-[60vh] lg:h-[78vh] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-serenity-darkest/30 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-serenity-darkest text-serenity-cream relative grain">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="flex items-center gap-3 text-serenity-cream/60 text-sm tracking-luxe uppercase mb-6">
                <Leaf className="w-4 h-4" /> О нас
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Безмятежность — это не просто&nbsp;СПА
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-serenity-cream/80 text-lg leading-relaxed">
              <p>
                Это пространство тишины и гармонии в самом центре Краснодара. Мы уделяем внимание не только телу, но и состоянию души.
              </p>
              <p>
                Работаем с профессиональной косметикой <span className="text-serenity-cream font-medium">Davines</span> и создаём атмосферу безопасности, которая базируется на трёх «Т»: темно, тепло и тихо.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                {[
                  { icon: 'Sparkles', t: 'Davines', d: 'Профессиональная косметика' },
                  { icon: 'HeartHandshake', t: 'Забота', d: 'Внимание к телу и душе' },
                  { icon: 'Volume1', t: 'Тишина', d: 'Глубокое расслабление' },
                ].map((f) => (
                  <div key={f.t} className="border-t border-serenity-cream/15 pt-4">
                    <Icon name={f.icon} className="w-6 h-6 mb-3 text-serenity-cream/70" />
                    <p className="font-serif text-xl">{f.t}</p>
                    <p className="text-sm text-serenity-cream/60">{f.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="flex items-center justify-center gap-3 text-serenity-dark text-sm tracking-luxe uppercase mb-5">
            <span className="w-8 h-px bg-serenity-dark" /> Услуги <span className="w-8 h-px bg-serenity-dark" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-serenity-darkest">Уникальные программы отдыха</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.name} className="group p-8 rounded-3xl border border-serenity-darkest/10 bg-serenity-cream hover:bg-serenity-darkest hover:border-serenity-darkest transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-serenity-dark/10 group-hover:bg-serenity-cream/15 flex items-center justify-center transition-colors">
                  <Icon name={s.icon} className="w-6 h-6 text-serenity-dark group-hover:text-serenity-cream transition-colors" />
                </div>
                <span className="text-xs tracking-wide text-serenity-dark/60 group-hover:text-serenity-cream/60 transition-colors">{s.duration}</span>
              </div>
              <h3 className="font-serif text-2xl mb-3 text-serenity-darkest group-hover:text-serenity-cream transition-colors">{s.name}</h3>
              <p className="text-sm leading-relaxed text-serenity-dark/70 group-hover:text-serenity-cream/70 transition-colors">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MASTERS */}
      <section id="masters" className="py-28 bg-serenity-dark/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="flex items-center justify-center gap-3 text-serenity-dark text-sm tracking-luxe uppercase mb-5">
              <span className="w-8 h-px bg-serenity-dark" /> Мастера <span className="w-8 h-px bg-serenity-dark" />
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-serenity-darkest">Руки, дарящие покой</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {MASTERS.map((m) => (
              <div key={m.name} className="text-center group">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-serenity-dark/10 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center font-serif text-6xl text-serenity-dark">{m.initials}</div>
                </div>
                <h3 className="font-serif text-2xl text-serenity-darkest">{m.name}</h3>
                <p className="text-sm text-serenity-dark mb-2 tracking-wide">{m.role}</p>
                <p className="text-sm text-serenity-dark/60 max-w-xs mx-auto">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="flex items-center justify-center gap-3 text-serenity-dark text-sm tracking-luxe uppercase mb-5">
            <span className="w-8 h-px bg-serenity-dark" /> Галерея <span className="w-8 h-px bg-serenity-dark" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-serenity-darkest">Атмосфера нашего центра</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="md:row-span-2 rounded-3xl overflow-hidden group">
            <img src={HERO_IMG} alt="Массаж" className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-3xl overflow-hidden group">
            <img src={GALLERY_1} alt="Интерьер СПА" className="w-full h-full object-cover min-h-[240px] group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-3xl overflow-hidden group bg-serenity-darkest flex items-center justify-center p-8 text-center">
            <p className="font-serif text-2xl text-serenity-cream italic leading-snug">«Тишина, которой так не хватает»</p>
          </div>
          <div className="md:col-span-2 rounded-3xl overflow-hidden group">
            <img src={GALLERY_2} alt="Детали СПА-ухода" className="w-full h-full object-cover min-h-[240px] group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28 bg-serenity-darkest text-serenity-cream grain">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="flex items-center justify-center gap-3 text-serenity-cream/60 text-sm tracking-luxe uppercase mb-5">
              <span className="w-8 h-px bg-serenity-cream/40" /> Отзывы <span className="w-8 h-px bg-serenity-cream/40" />
            </p>
            <h2 className="font-serif text-4xl md:text-6xl">Гости о нас</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((r) => (
              <div key={r.author} className="bg-serenity-cream/5 border border-serenity-cream/10 rounded-3xl p-8 backdrop-blur-sm">
                <Icon name="Quote" className="w-8 h-8 text-serenity-cream/30 mb-4" />
                <p className="text-serenity-cream/90 leading-relaxed mb-6 italic font-serif text-xl">{r.text}</p>
                <p className="text-sm tracking-wide text-serenity-cream/60">— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="flex items-center justify-center gap-3 text-serenity-dark text-sm tracking-luxe uppercase mb-5">
            <span className="w-8 h-px bg-serenity-dark" /> Сертификаты <span className="w-8 h-px bg-serenity-dark" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-serenity-darkest">Подарите тишину близким</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {CERTIFICATES.map((c) => (
            <div key={c.label} className="relative p-10 rounded-3xl border border-serenity-darkest/15 text-center hover:shadow-xl transition-shadow group overflow-hidden">
              <Leaf className="absolute -right-4 -top-4 w-24 h-24 text-serenity-dark/5 group-hover:text-serenity-dark/10 transition-colors" />
              <p className="font-serif text-5xl text-serenity-darkest mb-4">{c.value}</p>
              <p className="text-lg text-serenity-darkest mb-2">{c.label}</p>
              <p className="text-sm text-serenity-dark/60">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-serenity-darkest text-serenity-cream rounded-full text-sm tracking-wide hover:bg-serenity-dark transition-colors">
            Заказать сертификат
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-serenity-darkest text-serenity-cream pt-20 pb-10 grain">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Leaf className="w-5 h-5" />
                <span className="font-serif text-2xl tracking-widest">БЕЗМЯТЕЖНОСТЬ</span>
              </div>
              <p className="text-serenity-cream/60 text-sm leading-relaxed max-w-xs">
                Центр эмоциональной разгрузки и качественной тишины. Место, где заботятся о вас.
              </p>
            </div>
            <div>
              <p className="text-sm tracking-luxe uppercase text-serenity-cream/40 mb-5">Контакты</p>
              <div className="space-y-3 text-serenity-cream/80">
                <p className="flex items-start gap-3"><Icon name="MapPin" className="w-5 h-5 mt-0.5 shrink-0" /> г. Краснодар, ул. Северная, д. 100, 1 этаж</p>
                <a href="https://vk.com/spa_serenity" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-serenity-cream transition-colors">
                  <Icon name="Send" className="w-5 h-5" /> Мы ВКонтакте
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm tracking-luxe uppercase text-serenity-cream/40 mb-5">Разделы</p>
              <div className="grid grid-cols-2 gap-2">
                {NAV.map((n) => (
                  <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-serenity-cream/70 hover:text-serenity-cream transition-colors text-sm">
                    {n.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-serenity-cream/10 pt-8 text-center text-serenity-cream/40 text-xs tracking-wide">
            © 2026 Безмятежность · Центр заботы и внутренней тишины
          </div>
        </div>
      </footer>
    </div>
  );
}