export type Language = 'sr' | 'en';

export const translations = {
  sr: {
    nav: {
      logo: 'Војканићи',
      products: 'Производи',
      gallery: 'Галерија',
      order: 'Наручи',
      contact: 'Контакт',
      blog: 'Блог',
      openMenu: 'Отвори мени',
      theme: {
        winter: 'Зима',
        summer: 'Лето'
      }
    },
    hero: {
      tagline: 'Органска пољопривреда',
      title: 'Добродошли у Војканиће',
      description: 'Производимо најквалитетније органске производе за вас и вашу породицу.',
      productsButton: 'Наши производи',
      orderButton: 'Наручи',
      cta: 'Наручите сада',
      secondaryCta: 'Сазнајте више',
    },
    ourStory: {
      tagline: 'Традиција и квалитет од 1990.',
      title: 'Пољопривредно газдинство Војканићи',
      description: 'Наше породично газдинство се бави производњом квалитетних пољопривредних производа већ више од 30 година. Комбинујемо традиционалне методе узгајања са модерним технологијама како бисмо вам обезбедили најбоље производе.',
      productsButton: 'Наши производи',
      orderButton: 'Наручи',
    },
    products: {
      title: 'Наши производи',
      description: 'Откријте нашу палету органских производа',
      items: {
        milk: {
          tagline: 'Органско',
          title: 'Млеко',
          description: 'Свеже млеко од наших крава',
          price: '120 дин/л',
        },
        cheese: {
          tagline: 'Традиционално',
          title: 'Сир',
          description: 'Традиционални сир од овчијег млека',
          price: '1500 дин/кг',
        },
        whey: {
          tagline: 'Натурално',
          title: 'Сурутка',
          description: 'Натурална сурутка богата протеинима',
          price: '80 дин/л',
        },
        eggs: {
          tagline: 'Свеже',
          title: 'Јаја',
          description: 'Свежа јаја од слободних кокошака',
          price: '25 дин/ком',
        },
        chicken: {
          tagline: 'Органско',
          title: 'Пиле',
          description: 'Органско пилеће месо',
          price: '450 дин/кг',
        },
        vegetables: {
          tagline: 'Сезонско',
          title: 'Поврће',
          description: 'Свеже сезонско поврће',
          price: '200 дин/кг',
        },
      },
    },
    howWeWork: {
      tagline: 'Како радимо',
      title: 'Наш приступ',
      description: 'Само најбоље за наше купце',
      cta: 'Сазнајте више',
    },
    footer: {
      tagline: 'Традиција и квалитет',
      title: 'Војканићи',
      description: 'Органска пољопривреда',
      contact: 'Контакт',
      quickLinks: 'Брзи линкови',
      social: 'Друштвене мреже',
      address: 'Војканићи, Србија',
      phone: 'Телефон: +381 63 123 456',
      email: 'Email: info@vojkanici.rs',
      rights: 'Сва права задржана',
      blog: {
        title: 'Блог',
        description: 'Сазнајте више о нама',
        cta: 'Посетите блог',
      },
    },
    contact: {
      title: 'Контактирајте нас',
      name: 'Име',
      phone: 'Телефон',
      message: 'Порука',
      submit: 'Пошаљи',
      cancel: 'Откажи',
    },
    order: {
      title: 'Наручите наше производе',
      steps: {
        products: 'Избор производа',
        quantities: 'Количине и цена',
        contact: 'Контакт подаци',
        summary: 'Преглед поруџбине'
      },
      name: 'Име',
      phone: 'Телефон',
      message: 'Порука',
      quantity: 'Количина',
      price: 'Цена',
      total: 'Укупно',
      next: 'Следеће',
      previous: 'Претходно',
      submit: 'Наручи',
      cancel: 'Откажи',
      summary: {
        products: 'Производи',
        contact: 'Контакт подаци',
        totalPrice: 'Укупна цена'
      }
    },
    copyright: {
      text: '© 2025. PG Vojkanići. Сва права задржана.',
      regNumber: '123456'
    },
    gallery: {
      title: 'Галерија',
      next: 'Следећа',
      previous: 'Претходна',
      close: 'Затвори'
    },
    testimonials: {
      title: 'Шта кажу наши купци',
      description: 'Искуства наших задовољних купаца',
      items: {
        user1: {
          name: 'Милан из Сомбора',
          description: 'Најбоље млеко које сам икада пио. Свака препорука!'
        },
        user2: {
          name: 'Јелена из Суботице',
          description: 'Органски сир је невероватно укусан. Породица је одушевљена!'
        },
        user3: {
          name: 'Стефан из Бајмока',
          description: 'Свеже поврће сваке недеље. Квалитет је изузетан.'
        },
        user4: {
          name: 'Ана из Чонопље',
          description: 'Одлична комуникација и брза испорука. Препоручујем!'
        },
        user5: {
          name: 'Драган из Бечеја',
          description: 'Најбоље јаја у граду. Купујем редовно већ 2 године.'
        },
        user6: {
          name: 'Марија из Бачке Тополе',
          description: 'Органско пилеће месо је невероватно укусно. Враћам се поново!'
        },
        user7: {
          name: 'Ненад из Апатина',
          description: 'Професионални приступ и квалитетни производи. Задовољан сам.'
        },
        user8: {
          name: 'Софија из Куле',
          description: 'Најбољи органски производи у региону. Препоручујем свима!'
        }
      }
    },
    features: {
      title: 'Зашто изабрати нас',
      description: 'Наши произвођачи нуде најбоље органске производе са ваше фарме',
      items: {
        quality: {
          title: 'Високи квалитет',
          description: 'Сви наши производи су органски и од највишег квалитета. Гајимо их са пажњом и љубављу.'
        },
        delivery: {
          title: 'Брза испорука',
          description: 'Испоручујемо свеже производе директно до ваших врата. Гарантујемо брзину и поузданост.'
        },
        support: {
          title: 'Подршка 24/7',
          description: 'Наш тим је увек спреман да вам помогне. Одговоримо на сва ваша питања и пружамо подршку.'
        }
      }
    },
  },
  en: {
    nav: {
      logo: 'Vojkanići',
      products: 'Products',
      gallery: 'Gallery',
      order: 'Order',
      contact: 'Contact',
      blog: 'Blog',
      openMenu: 'Open main menu',
      theme: {
        winter: 'Winter',
        summer: 'Summer'
      }
    },
    hero: {
      tagline: 'Organic Farming',
      title: 'Welcome to Vojkanići',
      description: 'We produce the highest quality organic products for you and your family.',
      productsButton: 'Our Products',
      orderButton: 'Order',
      cta: 'Order Now',
      secondaryCta: 'Learn More',
    },
    ourStory: {
      tagline: 'Tradition and Quality since 1990',
      title: 'Vojkanići Agricultural Farm',
      description: 'Our family farm has been producing quality agricultural products for over 30 years. We combine traditional farming methods with modern technologies to provide you with the best products.',
      productsButton: 'Our Products',
      orderButton: 'Order',
    },
    products: {
      title: 'Our Products',
      description: 'Discover our range of organic products',
      items: {
        milk: {
          tagline: 'Organic',
          title: 'Milk',
          description: 'Fresh milk from our cows',
          price: '€1.00/l',
        },
        cheese: {
          tagline: 'Traditional',
          title: 'Cheese',
          description: 'Traditional sheep cheese',
          price: '€12.50/kg',
        },
        whey: {
          tagline: 'Natural',
          title: 'Whey',
          description: 'Natural whey rich in proteins',
          price: '€0.70/l',
        },
        eggs: {
          tagline: 'Fresh',
          title: 'Eggs',
          description: 'Fresh eggs from free-range chickens',
          price: '€0.20/pc',
        },
        chicken: {
          tagline: 'Organic',
          title: 'Chicken',
          description: 'Organic chicken meat',
          price: '€3.80/kg',
        },
        vegetables: {
          tagline: 'Seasonal',
          title: 'Vegetables',
          description: 'Fresh seasonal vegetables',
          price: '€1.70/kg',
        },
      },
    },
    howWeWork: {
      tagline: 'How We Work',
      title: 'Our Approach',
      description: 'Only the best for our customers',
      cta: 'Learn More',
    },
    footer: {
      tagline: 'Tradition and Quality',
      title: 'Vojkanići',
      description: 'Organic Farming',
      contact: 'Contact',
      quickLinks: 'Quick Links',
      social: 'Social Media',
      address: 'Vojkanici, Serbia',
      phone: 'Phone: +381 63 123 456',
      email: 'Email: info@vojkanici.rs',
      rights: 'All rights reserved',
      blog: {
        title: 'Blog',
        description: 'Learn more about us',
        cta: 'Visit Blog',
      },
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      phone: 'Phone',
      message: 'Message',
      submit: 'Submit',
      cancel: 'Cancel',
    },
    order: {
      title: 'Order Our Products',
      steps: {
        products: 'Select Products',
        quantities: 'Quantities and Price',
        contact: 'Contact Details',
        summary: 'Order Summary'
      },
      name: 'Name',
      phone: 'Phone',
      message: 'Message',
      quantity: 'Quantity',
      price: 'Price',
      total: 'Total',
      next: 'Next',
      previous: 'Previous',
      submit: 'Order',
      cancel: 'Cancel',
      summary: {
        products: 'Products',
        contact: 'Contact Details',
        totalPrice: 'Total Price'
      }
    },
    copyright: {
      text: '© 2025. PG Vojkanici. All rights reserved.',
      regNumber: '123456'
    },
    gallery: {
      title: 'Gallery',
      next: 'Next',
      previous: 'Previous',
      close: 'Close'
    },
    testimonials: {
      title: 'What Our Customers Say',
      description: 'Experiences from our satisfied customers',
      items: {
        user1: {
          name: 'Milan from Sombor',
          description: 'The best milk I have ever tasted. Highly recommended!'
        },
        user2: {
          name: 'Jelena from Subotica',
          description: 'The organic cheese is incredibly delicious. Family loves it!'
        },
        user3: {
          name: 'Stefan from Bajmok',
          description: 'Fresh vegetables every week. Quality is exceptional.'
        },
        user4: {
          name: 'Ana from Conoplja',
          description: 'Great communication and fast delivery. Recommended!'
        },
        user5: {
          name: 'Dragan from Becej',
          description: 'Best eggs in town. Been buying regularly for 2 years.'
        },
        user6: {
          name: 'Marija from Backa Topola',
          description: 'The organic chicken is incredibly tasty. Coming back for more!'
        },
        user7: {
          name: 'Nenad from Apatin',
          description: 'Professional approach and quality products. Very satisfied.'
        },
        user8: {
          name: 'Sofija from Kula',
          description: 'Best organic products in the region. Recommend to everyone!'
        }
      }
    },
    features: {
      title: 'Why Choose Us',
      description: 'Our producers offer the best organic products from your farm',
      items: {
        quality: {
          title: 'High Quality',
          description: 'All our products are organic and of the highest quality. We grow them with care and love.'
        },
        delivery: {
          title: 'Fast Delivery',
          description: 'We deliver fresh products directly to your door. We guarantee speed and reliability.'
        },
        support: {
          title: '24/7 Support',
          description: 'Our team is always ready to help. We answer all your questions and provide support.'
        }
      }
    },
  },
}; 