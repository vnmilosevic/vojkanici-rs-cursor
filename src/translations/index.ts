export type Language = 'sr' | 'en';

export const translations = {
  sr: {
    nav: {
      products: 'Производи',
      gallery: 'Галерија',
      order: 'Наручи',
      contact: 'Контакт',
      blog: 'Блог',
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
  },
}; 