import Product from './Product';

const universalImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";

const products = [
  {
    image: universalImage,
    tagline: "Organsko",
    title: "Kozje mleko",
    description: "Sveže kozje mleko sa naših koza, uzgajanih na prirodnim pašnjacima. Bogato proteinima i mineralima.",
    price: "250 RSD/l"
  },
  {
    image: universalImage,
    tagline: "Tradicionalno",
    title: "Kozji sir",
    description: "Tradicionalno pripremljen kozji sir, sačuvan po receptima naših predaka. Bogat ukusom i hranljivim sastojcima.",
    price: "1200 RSD/kg"
  },
  {
    image: universalImage,
    tagline: "Zdravlje",
    title: "Kozja surutka",
    description: "Prirodna kozja surutka, bogata probiotičkim bakterijama i mineralima. Idealna za održavanje zdravlja.",
    price: "150 RSD/l"
  },
  {
    image: universalImage,
    tagline: "Farm to table",
    title: "Kokošija jaja",
    description: "Sveža kokošija jaja od kokošaka koje se slobodno kreću i hrane prirodnom hranom.",
    price: "25 RSD/kom"
  },
  {
    image: universalImage,
    tagline: "Prirodno",
    title: "Piletina",
    description: "Piletina uzgajana na prirodan način, bez hormona i antibiotika. Sočna i ukusna.",
    price: "450 RSD/kg"
  },
  {
    image: universalImage,
    tagline: "Sezonsko",
    title: "Sezonsko povrće",
    description: "Sveže povrće uzgajano u našim baštama, bez pesticida i veštačkih đubriva.",
    price: "Po dogovoru"
  }
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Naši proizvodi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Otkrijte prirodne proizvode sa našeg gazdinstva, uzgajane sa pažljivošću i ljubavlju
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 