// İçerik İmparatorluğu planındaki konularla (film felsefesi, okültizm,
// mitoloji, semiyotik, bilim felsefesi, bilim kurgu edebiyatı) doğrudan
// ilişkili, gerçek ve doğrulanmış (WebSearch ile teyit edilmiş) profesyonel
// düzey eğitim/kurs bağlantıları. Bazıları tamamen ücretsiz (MIT OCW,
// Coursera audit), bazıları ücretli sertifika/akademik programlardır.

import type { SeedTraining } from "./trainings";

export const TRAINING_SEED_2: SeedTraining[] = [
  {
    name: "Philosophy in Film and Other Media (24.209)",
    provider: "MIT OpenCourseWare",
    url: "https://ocw.mit.edu/courses/24-209-philosophy-in-film-and-other-media-spring-2004/",
    type: "FREE",
    category: "Film Felsefesi",
    status: "PLANNED",
    instructor: "Prof. Irving Singer",
    description:
      "Film, edebiyat ve operayı felsefi temalar (kimlik, arzu, biliş, ifade) üzerinden karşılaştıran MIT lisans dersi. Video dersler, syllabus ve okuma listesiyle tamamen ücretsiz.",
  },
  {
    name: "Philosophy of Science",
    provider: "University of Pennsylvania (Coursera)",
    url: "https://www.coursera.org/learn/philosophy-of-science",
    type: "FREE",
    category: "Bilim Felsefesi",
    status: "PLANNED",
    paymentInfo: "Ücretsiz izleme (audit) mevcut; sertifika için ücretli.",
    description:
      "Bilimsel bilginin nasıl üretildiği, bilimsel nesnellik, değerlerin bilime etkisi ve bilim-din ilişkisi üzerine üniversite düzeyinde kurs.",
  },
  {
    name: "Philosophy and the Sciences: Introduction to the Philosophy of Physical Sciences",
    provider: "University of Edinburgh (Coursera)",
    url: "https://www.coursera.org/learn/philosophy-physical-sciences",
    type: "FREE",
    category: "Bilim Felsefesi",
    status: "PLANNED",
    description:
      "Evrenin kökeni, koyu madde/enerji gibi fizik biliminin ürettiği felsefi sorular üzerine ücretsiz Coursera kursu.",
  },
  {
    name: "Philosophy and the Sciences: Introduction to the Philosophy of Cognitive Sciences",
    provider: "University of Edinburgh (Coursera)",
    url: "https://www.coursera.org/learn/philosophy-cognitive-sciences",
    type: "FREE",
    category: "Bilinç & Bilişsel Bilim",
    status: "PLANNED",
    description:
      "Bilinç, zihin-beden ilişkisi, insan bilişinin evrimi üzerine Edinburgh Üniversitesi'nin ücretsiz Coursera kursu.",
  },
  {
    name: "Visions of the Occult: Introduction to (Western) Esotericism",
    provider: "University of Amsterdam — HHP Centre",
    url: "https://summerschool.uva.nl/content/summer-courses/visions-of-the-occult/visions-of-the-occult.html",
    type: "PAID",
    category: "Okültizm / Batı Ezoterizmi",
    status: "PLANNED",
    description:
      "Hermetizm, gnostisizm, astroloji, simya, kabala, büyü ve Yeni Çağ hareketlerini akademik olarak inceleyen, Batı ezoterizmi araştırmalarının en önde gelen merkezi UvA'nın yaz/kış okulu.",
  },
  {
    name: "Certificate in Gnosticism, Esotericism, and Mysticism (GEM)",
    provider: "Rice University — Department of Religion",
    url: "https://ga.rice.edu/programs-study/departments-programs/humanities/gnosticism-esotericism-mysticism/gnosticism-esotericism-mysticism-certificate/",
    type: "PAID",
    category: "Okültizm / Gnostisizm",
    status: "PLANNED",
    description:
      "Gnostik, ezoterik ve mistik dini akımları inceleyen lisansüstü sertifika programı (müfredat referansı — kayıt için Rice'ta lisansüstü programa kabul gerekir).",
  },
  {
    name: "Joseph Campbell: Myth & Storytelling as a Gateway to Psyche and Soul",
    provider: "Pacifica Graduate Institute Extension",
    url: "https://extension.pacifica.edu/myth-and-storytelling/",
    type: "PAID",
    category: "Mitoloji",
    status: "PLANNED",
    instructor: "John Bucher (Joseph Campbell Foundation)",
    description:
      "Joseph Campbell'ın mit teorisini (Kahramanın Yolculuğu dahil) hikâye anlatıcılığına uygulayan Pacifica Graduate Institute sertifika programı.",
  },
  {
    name: "Applied Mythology Graduate Certificate",
    provider: "Pacifica Graduate Institute Extension",
    url: "https://extension.pacifica.edu/applied-mythology-graduate-certificate-2026/",
    type: "PAID",
    category: "Mitoloji",
    status: "PLANNED",
    description:
      "Mitin psişe ve hikâye anlatımını nasıl yapılandırdığını uzman mitologlarla canlı/kayıtlı oturumlarla işleyen lisansüstü sertifika programı.",
  },
  {
    name: "Jung and Mythology: An 8-Week College-Level Class",
    provider: "Depth Psychology Alliance / Depth Psychology Academy",
    url: "https://depthpsychologyalliance.com/page/jung-and-mythology-an-8-week-college-level-class",
    type: "PAID",
    category: "Jung Psikolojisi & Mitoloji",
    status: "PLANNED",
    instructor: "James R. Newell, PhD",
    paymentInfo: "İlk ders ücretsiz, devamı ücretli 8 modül.",
    description:
      "Oidipus, Amor-Psyche, İsis-Osiris gibi mitleri Jung'un arketip kuramıyla ve Campbell/Eliade'nin yorumlarıyla ele alan üniversite düzeyi kurs.",
  },
  {
    name: "Semiotics Institute Online (SIO) — İleri Düzey Semiyotik Kursları",
    provider: "Semiotics Institute Online (Toronto Semiotic Circle kökenli)",
    url: "https://semioticon.com/sio/",
    type: "PAID",
    category: "Semiyotik",
    status: "PLANNED",
    description:
      "Peirce'in semiosis teorisi, Saussure ve ötesi, biyosemiyotik gibi konularda alanın önde gelen akademisyenlerinin verdiği ileri düzey semiyotik kursları.",
  },
  {
    name: "Meaning Patterns: An Introduction to Multimodal Semiotics",
    provider: "University of Illinois Urbana-Champaign (Coursera)",
    url: "https://www.coursera.org/learn/meaning-patterns",
    type: "FREE",
    category: "Semiyotik",
    status: "PLANNED",
    paymentInfo: "Ücretsiz kayıt; sertifika ücretli.",
    description:
      "Anlamın görsel, sözel ve çok-kipli (multimodal) biçimlerde nasıl inşa edildiğini öğreten, özel arka plan gerektirmeyen giriş düzeyi Coursera kursu.",
  },
  {
    name: "Fantasy and Science Fiction: The Human Mind, Our Modern World",
    provider: "University of Michigan (Coursera)",
    url: "https://www.classcentral.com/course/fantasysf-352",
    type: "FREE",
    category: "Bilim Kurgu & Edebiyat",
    status: "PLANNED",
    instructor: "Prof. Eric S. Rabkin",
    description:
      "Fantastik ve bilim kurgu edebiyatını sanat ve insan zihnine dair bir içgörü kaynağı olarak ele alan, ödüllü Michigan Üniversitesi profesörünün 10 üniteli kursu.",
  },
];
