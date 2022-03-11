const communityData = [
  {
    id: 0,
    name: "data 1",
    collaborate: {
      title: "Collaborate with our logisitics team to improve flow of goods.",
      photo: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    service: {
      title: "Get in touch with our helpful customer service.",
      photo: "https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    projects: {
      title: "We are excited to launch the new Le Raffia scholarship program.",
      photo: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    contact: {
      location: "Pittsburgh",
      phone: "01223445667",
      email: "pitts@leraffia.com",
      address: "333 Invalid street, Pittsburgh, PA 10000.",
      photo: "https://www.nationaldrugscreening.com/wp-content/uploads/2020/07/pittsburgh-996347_1920-1024x683.jpg",
    },
    image:
      "https://images.pexels.com/photos/3769118/pexels-photo-3769118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 1,
    name: "data 2",
    collaborate: {
      title: "Collaborate with our reserach team to study about textiles and materials.",
      photo: "https://images.pexels.com/photos/7679604/pexels-photo-7679604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    service: {
      title: "It is customer service week. Contact us for specialized services.",
      photo: "https://images.pexels.com/photos/7709222/pexels-photo-7709222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    projects: {
      title: "Our logistics scholarship and training program is on. Apply until 03-21-2022.",
      photo: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    contact: {
      location: "Philadelphia",
      phone: "1023456780",
      email: "philly@leraffia.com",
      address: "444 Invalid street, Philadelphia, PA 10000.",
      photo:"https://fullsuitcase.com/wp-content/uploads/2020/12/One-day-in-Philadelphia-Pennsylvania-USA.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1606416132922-22ab37c1231e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjB3b21lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "data 3",
    collaborate: {
      title: "Are you interested in co-designing raffia bags with our design team? Getin here today!",
      photo: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    service: {
      title: "We are now ranked 4.5 stars by the National Customer Service Society.",
      photo: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    projects: {
      title: "Participate in our regreening project in Senegal and Mali. ",
      photo: "https://images.pexels.com/photos/52706/pexels-photo-52706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    contact: {
      location: "Baltimore",
      phone: "1234567890",
      email: "baltimore@leraffia.com",
      address: "555 Invalid street, Baltimore, MD 20000.",
      photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2d/da/baltimore.jpg?w=700&h=500&s=1"
    },
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGN1c3RvbWVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "data 4",
    collaborate: {
      title: "We encourage our community of customers to send their designs. Best designs win prizes.",
      photo: "https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    service: {
      title: "We have a new ordering chatbot in our mobile application.",
      photo: "https://images.pexels.com/photos/7709301/pexels-photo-7709301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    projects: {
      title: "It's Operation Clean The Waters season once again. Register today to participate!",
      photo: "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    contact: {
      location: "San Diego",
      phone: "1234567890",
      email: "sandiego@leraffia.com",
      address: "666 Invalid street, San Diego, CA 90000.",
      photo: "https://www.usatipps.de/wp-content/uploads/2021/05/san-diego-kalifornien.jpg"
    },
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGN1c3RvbWVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "data 5",
    collaborate: {
      title: "Sign up for research collaborations, and contribute to our materials research program.",
      photo: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    service: {
      title: "Have you downloaded mobile catalog application? Get it done today!",
      photo: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    projects: {
      title: "Meet and greet panel on 02-17-2022. Speak with our project teams on new topics.",
      photo: "https://images.pexels.com/photos/7490889/pexels-photo-7490889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    contact: {
      location: "Austin",
      phone: "440110900090",
      email: "austin@leraffia.com",
      address: "777 Invalid street, Austin, TX 20009.",
      photo: "https://www.planetware.com/wpimages/2020/06/texas-austin-visitors-guide-to-exploring-downtown-where-is-austin.jpg"
    },
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGN1c3RvbWVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "data 6",
    collaborate: {
      title: "Calls to submit raffia polish designs. Best designs win a 4-month design internship.",
      photo: "https://images.pexels.com/photos/7963834/pexels-photo-7963834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    service: {
      title: "Why does customer experience matter in the fashion and apparel industry?",
      photo:"https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    projects: {
      title: "We are building a new raffia polishing center in Kearney, Nebraska.",
      photo: "https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    contact: {
      location: "Miami",
      phone: "099097765411",
      email: "miami@leraffia.com",
      address: "888 Invalid street, Miami, FL 30000",
      photo: "https://img.freepik.com/fotos-kostenlos/stadt-miami-florida-sommer-sonnenuntergang-panorama-mit-bunt-beleuchteten-geschaefts-und-wohngebaeuden-und-bruecke-auf-biscayne-bay_268835-1891.jpg"
    },
    image:
      "https://images.unsplash.com/photo-1633058713751-1b1b950014a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwd29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

export default communityData;
