export type Language = 'sr' | 'en';

export interface Translations {
  nav: {
    products: string;
    gallery: string;
    order: string;
    contact: string;
    blog: string;
  };
  hero: {
    tagline: string;
    title: string;
    description: string;
    productsButton: string;
    orderButton: string;
  };
  products: {
    title: string;
    description: string;
    items: {
      milk: {
        tagline: string;
        title: string;
        description: string;
        price: string;
      };
      cheese: {
        tagline: string;
        title: string;
        description: string;
        price: string;
      };
      whey: {
        tagline: string;
        title: string;
        description: string;
        price: string;
      };
      eggs: {
        tagline: string;
        title: string;
        description: string;
        price: string;
      };
      chicken: {
        tagline: string;
        title: string;
        description: string;
        price: string;
      };
      vegetables: {
        tagline: string;
        title: string;
        description: string;
        price: string;
      };
    };
  };
  howWeWork: {
    tagline: string;
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    tagline: string;
    title: string;
    description: string;
    blog: {
      title: string;
      description: string;
      cta: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  sr: {
    nav: {
      products: 'Производи',
      gallery: 'Галерија',
      order: 'Наручи',
      contact: 'Контакт',
      blog: 'Блог',
    },
    hero: {
      tagline: 'Традиција и квалитет од 1990.',
      title: 'Пољопривредно газдинство Војканићи',
      description: 'Наше породично газдинство се бави производњом квалитетних пољопривредних производа већ више од 30 година. Комбинујемо традиционалне методе узгоја са модерним технологијама како бисмо вам обезбедили најбоље производе.',
      productsButton: 'Наши производи',
      orderButton: 'Наручи',
    },
    products: {
      title: 'Наши производи',
      description: 'Откријте нашу палету квалитетних пољопривредних производа, узгојених са пажњом и посвећеношћу.',
      items: {
        milk: {
          tagline: 'Органско',
          title: 'Козје млеко',
          description: 'Свеже козје млеко, богато протеинима и минералима, идеално за све узрасте.',
          price: '200 дин/л',
        },
        cheese: {
          tagline: 'Традиционално',
          title: 'Козји сир',
          description: 'Традиционално зрели козји сир, богатог укуса и кремасте текстуре.',
          price: '1200 дин/кг',
        },
        whey: {
          tagline: 'Натурално',
          title: 'Козја сурутка',
          description: 'Натурална козја сурутка, богата протеинима и минералима.',
          price: '100 дин/л',
        },
        eggs: {
          tagline: 'Свеже',
          title: 'Кокошија јаја',
          description: 'Свежа кокошија јаја од слободно узгојених кокошака.',
          price: '25 дин/ком',
        },
        chicken: {
          tagline: 'Органско',
          title: 'Пилеће месо',
          description: 'Квалитетно пилеће месо од слободно узгојених пилића.',
          price: '450 дин/кг',
        },
        vegetables: {
          tagline: 'Сезонско',
          title: 'Поврће',
          description: 'Свеже сезонско поврће, узгојено без пестицида.',
          price: 'По договору',
        },
      },
    },
    howWeWork: {
      tagline: 'Наш приступ',
      title: 'Како радимо',
      description: 'Наше породично газдинство се бави производњом квалитетних пољопривредних производа већ више од 30 година. Комбинујемо традиционалне методе узгоја са модерним технологијама како бисмо вам обезбедили најбоље производе. Сваки производ је резултат наше посвећености квалитету и одрживости.',
      cta: 'Изабери производе',
    },
    footer: {
      tagline: 'Традиција и квалитет',
      title: 'Пољопривредно газдинство Војканићи',
      description: 'Наше породично газдинство се бави производњом квалитетних пољопривредних производа већ више од 30 година.',
      blog: {
        title: 'Пратите наш блог',
        description: 'Сазнајте више о нашем начину рада, саветима за узгој и најновијим вестима из света пољопривреде.',
        cta: 'Посетите блог',
      },
    },
  },
  en: {
    nav: {
      products: 'Products',
      gallery: 'Gallery',
      order: 'Order',
      contact: 'Contact',
      blog: 'Blog',
    },
    hero: {
      tagline: 'Tradition and quality since 1990',
      title: 'Vojkanići Agricultural Farm',
      description: 'Our family farm has been producing quality agricultural products for over 30 years. We combine traditional farming methods with modern technologies to provide you with the best products.',
      productsButton: 'Our Products',
      orderButton: 'Order',
    },
    products: {
      title: 'Our Products',
      description: 'Discover our range of quality agricultural products, grown with care and dedication.',
      items: {
        milk: {
          tagline: 'Organic',
          title: 'Goat Milk',
          description: 'Fresh goat milk, rich in proteins and minerals, ideal for all ages.',
          price: '200 RSD/l',
        },
        cheese: {
          tagline: 'Traditional',
          title: 'Goat Cheese',
          description: 'Traditionally aged goat cheese, rich in flavor and creamy texture.',
          price: '1200 RSD/kg',
        },
        whey: {
          tagline: 'Natural',
          title: 'Goat Whey',
          description: 'Natural goat whey, rich in proteins and minerals.',
          price: '100 RSD/l',
        },
        eggs: {
          tagline: 'Fresh',
          title: 'Chicken Eggs',
          description: 'Fresh chicken eggs from free-range hens.',
          price: '25 RSD/pc',
        },
        chicken: {
          tagline: 'Organic',
          title: 'Chicken Meat',
          description: 'Quality chicken meat from free-range chickens.',
          price: '450 RSD/kg',
        },
        vegetables: {
          tagline: 'Seasonal',
          title: 'Vegetables',
          description: 'Fresh seasonal vegetables, grown without pesticides.',
          price: 'Upon agreement',
        },
      },
    },
    howWeWork: {
      tagline: 'Our Approach',
      title: 'How We Work',
      description: 'Our family farm has been producing quality agricultural products for over 30 years. We combine traditional farming methods with modern technologies to provide you with the best products. Each product is a result of our commitment to quality and sustainability.',
      cta: 'Choose Products',
    },
    footer: {
      tagline: 'Tradition and Quality',
      title: 'Vojkanići Agricultural Farm',
      description: 'Our family farm has been producing quality agricultural products for over 30 years.',
      blog: {
        title: 'Follow Our Blog',
        description: 'Learn more about our farming methods, growing tips, and the latest news from the agricultural world.',
        cta: 'Visit Blog',
      },
    },
  },
}; 