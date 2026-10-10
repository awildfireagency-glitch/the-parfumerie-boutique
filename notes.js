// Detailed notes for catalog perfumes, keyed by catalog id (see catalog.js).
// Add an entry here to give a perfume its notes pyramid. Use the notes the brand
// lists for that exact concentration (EDT, EDP, Extrait can differ).
// color / cap: bottle illustration colours. photo: optional path to your own bottle photo.
window.NOTES = [
  {
    id: "dior-sauvage-edt",
    year: 2015, perfumer: "François Demachy",
    color: "#2c4a7a", cap: "#1b1b1b",
    blurb: "Peppery citrus over a big, smooth ambroxan trail. Fresh, loud and easy to like.",
    accords: ["Fresh spicy", "Citrus", "Aromatic", "Amber", "Woody"],
    notes: {
      top: ["Bergamot", "Pepper"],
      heart: ["Sichuan Pepper", "Lavender", "Pink Pepper", "Geranium", "Vetiver", "Patchouli", "Elemi"],
      base: ["Ambroxan", "Cedar", "Labdanum"]
    },
    bestFor: "Daily wear, all year"
  },
  {
    id: "chanel-bleu-de-chanel-edp",
    year: 2014, perfumer: "Jacques Polge",
    color: "#1c2a44", cap: "#0e0e0e",
    blurb: "Clean citrus and incense on a polished woody base. The office-to-dinner classic.",
    accords: ["Citrus", "Woody", "Aromatic", "Amber", "Fresh spicy"],
    notes: {
      top: ["Grapefruit", "Lemon", "Mint", "Pink Pepper", "Bergamot"],
      heart: ["Ginger", "Nutmeg", "Jasmine"],
      base: ["Incense", "Cedar", "Sandalwood", "Patchouli", "Labdanum", "Amber"]
    },
    bestFor: "Office, dinner, all year"
  },
  {
    id: "ysl-libre-eau-de-parfum-edp",
    year: 2019, perfumer: "Anne Flipo & Carlos Benaïm",
    color: "#c9a25a", cap: "#111111",
    blurb: "Lavender meets orange blossom and vanilla. Bold, warm and feminine with an edge.",
    accords: ["Floral", "Aromatic", "Vanilla", "White floral", "Citrus"],
    notes: {
      top: ["Lavender", "Mandarin", "Black Currant", "Petitgrain"],
      heart: ["Lavender", "Orange Blossom", "Jasmine"],
      base: ["Vanilla", "Musk", "Cedar", "Ambergris"]
    },
    bestFor: "Evening, cooler months"
  },
  {
    id: "le-labo-santal-33-edp",
    year: 2011, perfumer: "Frank Voelkl",
    color: "#cdbb98", cap: "#2a2a2a",
    blurb: "Creamy sandalwood with leather and violet. Dry, smoky and cult-favourite.",
    accords: ["Woody", "Leather", "Powdery", "Warm spicy", "Smoky"],
    notes: {
      top: ["Cardamom", "Violet"],
      heart: ["Iris", "Ambrox"],
      base: ["Sandalwood", "Papyrus", "Cedar", "Leather"]
    },
    bestFor: "Daily signature, all year"
  },
  {
    id: "creed-aventus-edp",
    year: 2010, perfumer: "Olivier Creed & Erwin Creed",
    color: "#1f1f1f", cap: "#c0c0c0",
    blurb: "Smoky pineapple and birch over musk and oakmoss. Confident, fruity and powerful.",
    accords: ["Fruity", "Smoky", "Woody", "Musky", "Fresh"],
    notes: {
      top: ["Pineapple", "Bergamot", "Black Currant", "Apple"],
      heart: ["Birch", "Patchouli", "Jasmine", "Rose"],
      base: ["Musk", "Oakmoss", "Ambergris", "Vanilla"]
    },
    bestFor: "Day, spring and summer"
  },

  // ---------- ARABIAN ----------,
  {
    id: "lattafa-khamrah-edp-extrait",
    year: 2022,
    color: "#7a2e1f", cap: "#c9a85a",
    blurb: "Spiced dates and praline in warm vanilla. Rich, sweet and great value.",
    accords: ["Warm spicy", "Sweet", "Gourmand", "Amber", "Vanilla"],
    notes: {
      top: ["Cinnamon", "Nutmeg", "Bergamot"],
      heart: ["Dates", "Praline", "Tuberose"],
      base: ["Vanilla", "Tonka Bean", "Amberwood", "Myrrh", "Benzoin"]
    },
    bestFor: "Night, cold weather"
  },
  {
    id: "lattafa-asad-edp",
    year: 2021,
    color: "#1a1a1a", cap: "#c9a85a",
    blurb: "Black pepper, coffee and tobacco over vanilla and amber. Dark and bold.",
    accords: ["Warm spicy", "Amber", "Vanilla", "Woody", "Coffee"],
    notes: {
      top: ["Black Pepper", "Pineapple", "Tobacco"],
      heart: ["Coffee", "Patchouli", "Iris"],
      base: ["Vanilla", "Amber", "Benzoin", "Labdanum"]
    },
    bestFor: "Evening, fall and winter"
  },
  {
    id: "armaf-cdn-intense-man-edt",
    year: 2015,
    color: "#151515", cap: "#a8a8a8",
    blurb: "Lemon, pineapple and smoky birch on a musky base. A fan-favourite powerhouse.",
    accords: ["Citrus", "Fruity", "Smoky", "Woody", "Musky"],
    notes: {
      top: ["Lemon", "Pineapple", "Bergamot", "Black Currant", "Apple"],
      heart: ["Birch", "Jasmine", "Rose"],
      base: ["Musk", "Ambergris", "Patchouli", "Vanilla"]
    },
    bestFor: "Day and night, all year"
  },
  {
    id: "amouage-interlude-man-edp",
    year: 2012, perfumer: "Pierre Negrin",
    color: "#2b3b5a", cap: "#c9a85a",
    blurb: "Oregano and pepper into thick incense, oud and leather. Smoky Omani luxury.",
    accords: ["Smoky", "Resinous", "Amber", "Leather", "Oud"],
    notes: {
      top: ["Oregano", "Pepper", "Bergamot"],
      heart: ["Incense", "Amber", "Opoponax"],
      base: ["Leather", "Oud", "Sandalwood", "Patchouli"]
    },
    bestFor: "Night, cold weather"
  },
  {
    id: "kilian-l-huere-verte-edp",
    perfumer: "Mathieu Nardin",
    blurb: "The Paris “green hour” in a bottle. Bitter absinthe, cool violet leaf, then dark patchouli and woods.",
    accords: ["Green", "Aromatic", "Boozy", "Earthy", "Woody"],
    notes: { top: ["Absinthe"], heart: ["Violet Leaf"], base: ["Patchouli", "Vetiver", "Sandalwood"] },
    bestFor: "Evening, fall and winter"
  },
  {
    id: "giorgio-armani-acqua-di-gio-edt",
    year: 1996, perfumer: "Alberto Morillas",
    blurb: "Sun on the Mediterranean: zesty citrus, sea air and soft woods. A clean, timeless everyday scent.",
    accords: ["Aquatic", "Citrus", "Fresh", "Floral", "Woody"],
    notes: { top: ["Lime", "Lemon", "Bergamot", "Mandarin", "Neroli"], heart: ["Sea Notes", "Jasmine", "Peach", "Freesia", "Coriander", "Rose"], base: ["White Musk", "Cedar", "Oakmoss", "Patchouli", "Amber"] },
    bestFor: "Daytime, hot weather"
  },
  {
    id: "giorgio-armani-code-edt",
    year: 2004, perfumer: "Antoine Lie",
    blurb: "Smooth and seductive: citrus and star anise warming into leather, tonka and tobacco.",
    accords: ["Warm spicy", "Aromatic", "Leather", "Sweet", "Citrus"],
    notes: { top: ["Lemon", "Bergamot"], heart: ["Star Anise", "Olive Blossom", "Guaiac Wood"], base: ["Leather", "Tonka Bean", "Tobacco"] },
    bestFor: "Evening, cooler months"
  },
  {
    id: "giorgio-armani-my-way-edp",
    year: 2020, perfumer: "Carlos Benaïm & Bruno Jovanovic",
    blurb: "Bright orange blossom and creamy tuberose on soft vanilla. Elegant, warm and easy to wear.",
    accords: ["White floral", "Citrus", "Vanilla", "Musky", "Sweet"],
    notes: { top: ["Orange Blossom", "Bergamot"], heart: ["Tuberose", "Jasmine"], base: ["Vanilla", "White Musk", "Cedar"] },
    bestFor: "Day to night, all year"
  },
  {
    id: "azzaro-most-wanted-edp",
    year: 2021,
    blurb: "Spicy cardamom melting into toffee and warm amberwood. A sweet, magnetic crowd-pleaser.",
    accords: ["Sweet", "Warm spicy", "Amber", "Woody", "Gourmand"],
    notes: { top: ["Cardamom"], heart: ["Toffee"], base: ["Amberwood"] },
    bestFor: "Night out, cool weather"
  },
  {
    id: "jean-paul-gaultier-le-male-le-parfum-edp",
    year: 2020, perfumer: "Quentin Bisch & Natalie Gracia-Cetto",
    blurb: "Cardamom, lavender and iris over rich vanilla. Polished, warm and quietly powerful.",
    accords: ["Aromatic", "Vanilla", "Powdery", "Warm spicy", "Woody"],
    notes: { top: ["Cardamom"], heart: ["Lavender", "Iris"], base: ["Vanilla", "Woody Notes"] },
    bestFor: "Evening, fall and winter"
  },
  {
    id: "jean-paul-gaultier-ultra-male-edt",
    year: 2015, perfumer: "Francis Kurkdjian",
    blurb: "Juicy pear and fresh mint into deep black vanilla. Sweet, loud and long-lasting.",
    accords: ["Sweet", "Fruity", "Vanilla", "Aromatic", "Amber"],
    notes: { top: ["Pear", "Lavender", "Mint", "Bergamot", "Lemon"], heart: ["Cinnamon", "Clary Sage", "Caraway"], base: ["Black Vanilla Husk", "Amber", "Patchouli", "Cedar"] },
    bestFor: "Party nights, cool weather"
  },
  {
    id: "jean-paul-gaultier-scandal-edp",
    year: 2017, perfumer: "Daphné Bugey, Christophe Raynaud & Fabrice Pellegrin",
    blurb: "Golden honey and gardenia with a touch of blood orange. Sweet, glamorous and a little daring.",
    accords: ["Honey", "Sweet", "White floral", "Citrus", "Waxy"],
    notes: { top: ["Blood Orange", "Mandarin"], heart: ["Honey", "Gardenia", "Orange Blossom", "Jasmine", "Peach"], base: ["Beeswax", "Caramel", "Patchouli", "Licorice"] },
    bestFor: "Night out, cool weather"
  },
  {
    id: "carolina-herrera-good-girl-edp",
    year: 2016, perfumer: "Louise Turner",
    blurb: "Almond and coffee meet tuberose and jasmine on a dark cacao-tonka base. Sweet with an edge.",
    accords: ["Sweet", "White floral", "Gourmand", "Warm spicy", "Vanilla"],
    notes: { top: ["Almond", "Coffee", "Bergamot", "Lemon"], heart: ["Tuberose", "Jasmine Sambac", "Orange Blossom", "Iris", "Rose"], base: ["Tonka Bean", "Cacao", "Vanilla", "Praline", "Sandalwood", "Musk"] },
    bestFor: "Date night, cool weather"
  },
  {
    id: "chanel-coco-mademoiselle-edp",
    year: 2001, perfumer: "Jacques Polge",
    blurb: "Fresh orange and rose over clean patchouli. Chic, confident and always appropriate.",
    accords: ["Citrus", "Rose", "Patchouli", "Fresh", "Musky"],
    notes: { top: ["Orange", "Mandarin", "Orange Blossom", "Bergamot"], heart: ["Turkish Rose", "Jasmine", "Mimosa", "Ylang-Ylang"], base: ["Patchouli", "White Musk", "Vanilla", "Vetiver", "Tonka Bean", "Opoponax"] },
    bestFor: "Office to dinner, all year"
  },
  {
    id: "chanel-chance-eau-tendre-edt",
    year: 2010, perfumer: "Jacques Polge",
    blurb: "Soft and airy: quince and grapefruit over hyacinth and jasmine. Fresh, sweet and gentle.",
    accords: ["Fruity", "Floral", "Citrus", "Fresh", "Musky"],
    notes: { top: ["Quince", "Grapefruit"], heart: ["Hyacinth", "Jasmine"], base: ["White Musk", "Iris", "Cedar", "Amber"] },
    bestFor: "Daytime, spring and summer"
  },
  {
    id: "chanel-allure-homme-sport-edt",
    year: 2004, perfumer: "Jacques Polge",
    blurb: "Sparkling orange and sea breeze on a smooth tonka-vanilla base. Sporty but refined.",
    accords: ["Citrus", "Fresh", "Aquatic", "Woody", "Sweet"],
    notes: { top: ["Orange", "Sea Notes", "Aldehydes"], heart: ["Pepper", "Neroli", "Cedar"], base: ["Tonka Bean", "Vanilla", "White Musk", "Amber", "Vetiver", "Elemi"] },
    bestFor: "Daytime, warm weather"
  },
  {
    id: "gucci-bloom-edp",
    year: 2017, perfumer: "Alberto Morillas",
    blurb: "A garden of white flowers: lush tuberose and jasmine. Rich, natural and romantic.",
    accords: ["White floral", "Tuberose", "Floral", "Green", "Powdery"],
    notes: { top: ["Jasmine"], heart: ["Tuberose"], base: ["Rangoon Creeper"] },
    bestFor: "Daytime, spring"
  },
  {
    id: "burberry-her-edp",
    year: 2018, perfumer: "Francis Kurkdjian",
    blurb: "A basket of red berries over soft musk and amber. Juicy, playful and very wearable.",
    accords: ["Fruity", "Sweet", "Musky", "Berry", "Floral"],
    notes: { top: ["Strawberry", "Raspberry", "Blackberry", "Sour Cherry", "Black Currant", "Mandarin", "Lemon"], heart: ["Violet", "Jasmine"], base: ["Musk", "Vanilla", "Cashmeran", "Amber", "Patchouli", "Oakmoss"] },
    bestFor: "Daytime, all year"
  },
  {
    id: "burberry-hero-edt",
    year: 2021, perfumer: "Francis Kurkdjian",
    blurb: "Crisp bergamot and juniper over a trio of cedars. Clean, woody and modern.",
    accords: ["Woody", "Fresh spicy", "Citrus", "Aromatic", "Fresh"],
    notes: { top: ["Bergamot"], heart: ["Juniper", "Black Pepper"], base: ["Cedar"] },
    bestFor: "Office, all year"
  },
  {
    id: "boss-boss-bottled-edt",
    year: 1998, perfumer: "Annick Menardo",
    blurb: "Apple and cinnamon over smooth woods and vanilla. The classic gentleman's signature.",
    accords: ["Fruity", "Warm spicy", "Woody", "Sweet", "Fresh"],
    notes: { top: ["Apple", "Plum", "Bergamot", "Lemon", "Geranium"], heart: ["Cinnamon", "Mahogany", "Carnation"], base: ["Vanilla", "Sandalwood", "Cedar", "Vetiver", "Olive Tree"] },
    bestFor: "Office, all year"
  },
  {
    id: "byredo-gypsy-water-edp",
    year: 2008, perfumer: "Jérôme Epinette",
    blurb: "Fresh citrus and pine with soft incense and vanilla. Like a campfire in the forest.",
    accords: ["Woody", "Fresh", "Citrus", "Smoky", "Vanilla"],
    notes: { top: ["Bergamot", "Lemon", "Pepper", "Juniper"], heart: ["Incense", "Pine Needles", "Iris"], base: ["Amber", "Vanilla", "Sandalwood"] },
    bestFor: "Daily signature, all year"
  },
  {
    id: "byredo-mojave-ghost-edp",
    year: 2014, perfumer: "Jérôme Epinette",
    blurb: "Soft, airy and dreamy: ambrette and magnolia over creamy woods and musk.",
    accords: ["Musky", "Woody", "Floral", "Powdery", "Fruity"],
    notes: { top: ["Ambrette", "Sapodilla"], heart: ["Magnolia", "Violet", "Sandalwood"], base: ["Cedar", "Amber", "Chantilly Musk"] },
    bestFor: "Daytime, all year"
  },
  {
    id: "byredo-bal-d-afrique-edp",
    year: 2009, perfumer: "Jérôme Epinette",
    blurb: "Bright citrus and marigold over violet and vetiver. Warm, joyful and full of energy.",
    accords: ["Citrus", "Floral", "Woody", "Musky", "Fresh"],
    notes: { top: ["Bergamot", "Lemon", "Neroli", "African Marigold", "Buchu"], heart: ["Violet", "Jasmine", "Cyclamen"], base: ["Vetiver", "Musk", "Amber", "Cedar"] },
    bestFor: "Daytime, spring and summer"
  },
  {
    id: "byredo-blanche-edp",
    year: 2009, perfumer: "Jérôme Epinette",
    blurb: "Fresh laundry in a bottle: clean aldehydes, white rose and soft musk.",
    accords: ["Clean", "Aldehydic", "Floral", "Musky", "Powdery"],
    notes: { top: ["Aldehydes", "White Rose", "Pink Pepper"], heart: ["Violet", "Peony", "Neroli"], base: ["Sandalwood", "Musk", "Blond Woods"] },
    bestFor: "Daytime, all year"
  },
  {
    id: "creed-silver-mountain-water-edp",
    year: 1995, perfumer: "Olivier Creed",
    blurb: "Cool citrus and green tea with black currant. Crisp as fresh mountain air.",
    accords: ["Fresh", "Citrus", "Green", "Fruity", "Musky"],
    notes: { top: ["Bergamot", "Mandarin"], heart: ["Green Tea", "Black Currant"], base: ["Musk", "Sandalwood", "Petitgrain", "Galbanum"] },
    bestFor: "Daytime, spring and summer"
  },
  {
    id: "kilian-good-girl-gone-bad-edp",
    year: 2012, perfumer: "Alberto Morillas",
    blurb: "A lush bouquet of jasmine, tuberose and rose with soft osmanthus. Feminine and seductive.",
    accords: ["White floral", "Floral", "Fruity", "Sweet", "Powdery"],
    notes: { top: ["Osmanthus", "Jasmine Sambac"], heart: ["Tuberose", "May Rose", "Narcissus"], base: ["Amber", "Cedar"] },
    bestFor: "Date night, spring"
  },
  {
    id: "initio-oud-for-greatness-edp",
    year: 2018,
    blurb: "Saffron and nutmeg over rich oud and patchouli. Bold, smoky and regal.",
    accords: ["Oud", "Warm spicy", "Woody", "Earthy", "Smoky"],
    notes: { top: ["Saffron", "Nutmeg", "Lavender"], heart: ["Agarwood"], base: ["Patchouli", "Musk"] },
    bestFor: "Evening, cool weather"
  },
  {
    id: "initio-side-effect-edp",
    year: 2016,
    blurb: "Dark rum, tobacco and cinnamon on warm vanilla. Boozy, sweet and addictive.",
    accords: ["Boozy", "Sweet", "Warm spicy", "Tobacco", "Vanilla"],
    notes: { top: ["Rum"], heart: ["Tobacco", "Cinnamon"], base: ["Vanilla"] },
    bestFor: "Night, cold weather"
  },
  {
    id: "lattafa-yara-edp",
    year: 2020,
    blurb: "Creamy tropical fruit and orchid on soft vanilla. Sweet, cosy and very pink.",
    accords: ["Sweet", "Fruity", "Vanilla", "Powdery", "Floral"],
    notes: { top: ["Heliotrope", "Orchid", "Mandarin"], heart: ["Gourmand Accord", "Tropical Fruits"], base: ["Vanilla", "Musk", "Sandalwood"] },
    bestFor: "Daytime, all year"
  },
  {
    id: "afnan-9pm-edp",
    year: 2020,
    blurb: "Apple and cinnamon into sweet vanilla and amber. A party-ready crowd-pleaser.",
    accords: ["Sweet", "Vanilla", "Warm spicy", "Fruity", "Amber"],
    notes: { top: ["Apple", "Cinnamon", "Lavender", "Bergamot"], heart: ["Orange Blossom", "Lily of the Valley"], base: ["Vanilla", "Tonka Bean", "Amber", "Patchouli"] },
    bestFor: "Night out, cool weather"
  },
  {
    id: "ariana-grande-cloud-edp",
    year: 2018,
    blurb: "Whipped cream, praline and coconut over soft musk. Dreamy, sweet and cosy.",
    accords: ["Sweet", "Gourmand", "Vanilla", "Musky", "Fruity"],
    notes: { top: ["Lavender", "Pear", "Bergamot"], heart: ["Whipped Cream", "Praline", "Coconut", "Vanilla Orchid"], base: ["Musk", "Blond Woods"] },
    bestFor: "Daytime, all year"
  }
];
