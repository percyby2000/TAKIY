export const categories = {
  pentateuch: { name: "Pentateuco", bgColor: "bg-amber-600/80" },
  historical_ot: { name: "Históricos AT", bgColor: "bg-orange-500/80" },
  poetic: { name: "Poéticos", bgColor: "bg-red-500/80" },
  major_prophets: { name: "Profetas Mayores", bgColor: "bg-rose-600/80" },
  minor_prophets: { name: "Profetas Menores", bgColor: "bg-pink-600/80" },
  gospels: { name: "Evangelios", bgColor: "bg-emerald-600/80" },
  historical_nt: { name: "Históricos NT", bgColor: "bg-teal-600/80" },
  paul_epistles: { name: "Cartas Paulinas", bgColor: "bg-cyan-600/80" },
  general_epistles: { name: "Cartas Generales", bgColor: "bg-blue-600/80" },
  prophetic_nt: { name: "Profético NT", bgColor: "bg-indigo-600/80" }
};

export const bibleBooks = [
  // Antiguo Testamento
  { id: "Gen", name: "Génesis", short: "Gn", chapters: 50, cat: "pentateuch" },
  { id: "Exo", name: "Éxodo", short: "Ex", chapters: 40, cat: "pentateuch" },
  { id: "Lev", name: "Levítico", short: "Lv", chapters: 27, cat: "pentateuch" },
  { id: "Num", name: "Números", short: "Nm", chapters: 36, cat: "pentateuch" },
  { id: "Deu", name: "Deuteronomio", short: "Dt", chapters: 34, cat: "pentateuch" },
  
  { id: "Jos", name: "Josué", short: "Jos", chapters: 24, cat: "historical_ot" },
  { id: "Jdg", name: "Jueces", short: "Jue", chapters: 21, cat: "historical_ot" },
  { id: "Rut", name: "Rut", short: "Rt", chapters: 4, cat: "historical_ot" },
  { id: "1Sa", name: "1 Samuel", short: "1S", chapters: 31, cat: "historical_ot" },
  { id: "2Sa", name: "2 Samuel", short: "2S", chapters: 24, cat: "historical_ot" },
  { id: "1Ki", name: "1 Reyes", short: "1R", chapters: 22, cat: "historical_ot" },
  { id: "2Ki", name: "2 Reyes", short: "2R", chapters: 25, cat: "historical_ot" },
  { id: "1Ch", name: "1 Crónicas", short: "1Cr", chapters: 29, cat: "historical_ot" },
  { id: "2Ch", name: "2 Crónicas", short: "2Cr", chapters: 36, cat: "historical_ot" },
  { id: "Ezr", name: "Esdras", short: "Esd", chapters: 10, cat: "historical_ot" },
  { id: "Neh", name: "Nehemías", short: "Neh", chapters: 13, cat: "historical_ot" },
  { id: "Est", name: "Ester", short: "Est", chapters: 10, cat: "historical_ot" },

  { id: "Job", name: "Job", short: "Job", chapters: 42, cat: "poetic" },
  { id: "Psa", name: "Salmos", short: "Sal", chapters: 150, cat: "poetic" },
  { id: "Pro", name: "Proverbios", short: "Pr", chapters: 31, cat: "poetic" },
  { id: "Ecc", name: "Eclesiastés", short: "Ec", chapters: 12, cat: "poetic" },
  { id: "Sng", name: "Cantares", short: "Cnt", chapters: 8, cat: "poetic" },

  { id: "Isa", name: "Isaías", short: "Is", chapters: 66, cat: "major_prophets" },
  { id: "Jer", name: "Jeremías", short: "Jer", chapters: 52, cat: "major_prophets" },
  { id: "Lam", name: "Lamentaciones", short: "Lm", chapters: 5, cat: "major_prophets" },
  { id: "Ezk", name: "Ezequiel", short: "Ez", chapters: 48, cat: "major_prophets" },
  { id: "Dan", name: "Daniel", short: "Dn", chapters: 12, cat: "major_prophets" },

  { id: "Hos", name: "Oseas", short: "Os", chapters: 14, cat: "minor_prophets" },
  { id: "Jol", name: "Joel", short: "Jl", chapters: 3, cat: "minor_prophets" },
  { id: "Amo", name: "Amós", short: "Am", chapters: 9, cat: "minor_prophets" },
  { id: "Oba", name: "Abdías", short: "Abd", chapters: 1, cat: "minor_prophets" },
  { id: "Jon", name: "Jonás", short: "Jon", chapters: 4, cat: "minor_prophets" },
  { id: "Mic", name: "Miqueas", short: "Mi", chapters: 7, cat: "minor_prophets" },
  { id: "Nam", name: "Nahúm", short: "Nah", chapters: 3, cat: "minor_prophets" },
  { id: "Hab", name: "Habacuc", short: "Hab", chapters: 3, cat: "minor_prophets" },
  { id: "Zep", name: "Sofonías", short: "Sof", chapters: 3, cat: "minor_prophets" },
  { id: "Hag", name: "Hageo", short: "Hag", chapters: 2, cat: "minor_prophets" },
  { id: "Zec", name: "Zacarías", short: "Zac", chapters: 14, cat: "minor_prophets" },
  { id: "Mal", name: "Malaquías", short: "Mal", chapters: 4, cat: "minor_prophets" },

  // Nuevo Testamento
  { id: "Mat", name: "Mateo", short: "Mt", chapters: 28, cat: "gospels" },
  { id: "Mrk", name: "Marcos", short: "Mr", chapters: 16, cat: "gospels" },
  { id: "Luk", name: "Lucas", short: "Lc", chapters: 24, cat: "gospels" },
  { id: "Jhn", name: "Juan", short: "Jn", chapters: 21, cat: "gospels" },

  { id: "Act", name: "Hechos", short: "Hch", chapters: 28, cat: "historical_nt" },

  { id: "Rom", name: "Romanos", short: "Ro", chapters: 16, cat: "paul_epistles" },
  { id: "1Co", name: "1 Corintios", short: "1Co", chapters: 16, cat: "paul_epistles" },
  { id: "2Co", name: "2 Corintios", short: "2Co", chapters: 13, cat: "paul_epistles" },
  { id: "Gal", name: "Gálatas", short: "Ga", chapters: 6, cat: "paul_epistles" },
  { id: "Eph", name: "Efesios", short: "Ef", chapters: 6, cat: "paul_epistles" },
  { id: "Php", name: "Filipenses", short: "Flp", chapters: 4, cat: "paul_epistles" },
  { id: "Col", name: "Colosenses", short: "Col", chapters: 4, cat: "paul_epistles" },
  { id: "1Th", name: "1 Tesalonicenses", short: "1Ts", chapters: 5, cat: "paul_epistles" },
  { id: "2Th", name: "2 Tesalonicenses", short: "2Ts", chapters: 3, cat: "paul_epistles" },
  { id: "1Ti", name: "1 Timoteo", short: "1Ti", chapters: 6, cat: "paul_epistles" },
  { id: "2Ti", name: "2 Timoteo", short: "2Ti", chapters: 4, cat: "paul_epistles" },
  { id: "Tit", name: "Tito", short: "Tit", chapters: 3, cat: "paul_epistles" },
  { id: "PhM", name: "Filemón", short: "Flm", chapters: 1, cat: "paul_epistles" },

  { id: "Heb", name: "Hebreos", short: "Heb", chapters: 13, cat: "general_epistles" },
  { id: "Jas", name: "Santiago", short: "Stg", chapters: 5, cat: "general_epistles" },
  { id: "1Pe", name: "1 Pedro", short: "1P", chapters: 5, cat: "general_epistles" },
  { id: "2Pe", name: "2 Pedro", short: "2P", chapters: 3, cat: "general_epistles" },
  { id: "1Jo", name: "1 Juan", short: "1Jn", chapters: 5, cat: "general_epistles" },
  { id: "2Jo", name: "2 Juan", short: "2Jn", chapters: 1, cat: "general_epistles" },
  { id: "3Jo", name: "3 Juan", short: "3Jn", chapters: 1, cat: "general_epistles" },
  { id: "Jud", name: "Judas", short: "Jud", chapters: 1, cat: "general_epistles" },

  { id: "Rev", name: "Apocalipsis", short: "Ap", chapters: 22, cat: "prophetic_nt" }
];
