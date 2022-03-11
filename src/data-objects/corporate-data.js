const corporateData = [
  {
    id: 0,
    name: "data 1",
    careers: {
      careerText: "Explore careers in Logistics.",
      careerImage: "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    investors: {
      investorText: "Quarterly report for Q1 2022 is ready.",
      investorImage: "https://images.pexels.com/photos/7414276/pexels-photo-7414276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    partners: {
      partnerText: "Our partnership with Shopify has kickstarted.",
      partnerImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    leadership: {
      leaderText: "Joanna Houston",
      role: "CEO",
      email: "j.houston@leraffia.com",
      leaderImage: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?w=740",
    },
    image:
      "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },

  {
    id: 1,
    name: "data 2",
    careers: {
      careerText: "Explore careers in Design.",
      careerImage: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    investors: {
      investorText: "Sustainability report for Q1 2022 is ready.",
      investorImage: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    partners: {
      partnerText: "We are teaming up with Google to locate places that need afforestation.",
      partnerImage: "https://images.pexels.com/photos/52706/pexels-photo-52706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    leadership: {
      leaderText: "Susannah Welsh",
      role: "VP Talent",
      email: "s.welsh@leraffia.com",
      leaderImage: "https://img.freepik.com/free-photo/sassy-african-american-businesswoman-showing-way-pointing-upper-right-corner_176420-26979.jpg?w=740",
    },
    image:
      "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    name: "data 3",
    careers: {
      careerText: "Explore careers in Project Management",
      careerImage: "https://images.pexels.com/photos/7439136/pexels-photo-7439136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    investors: {
      investorText: "AGM transcripts are ready for viewing",
      investorImage: "https://images.pexels.com/photos/6170868/pexels-photo-6170868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    partners: {
      partnerText: "Our partnership with Stripe will ease payments online.",
      partnerImage: "https://images.pexels.com/photos/8938734/pexels-photo-8938734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    leadership: {
      leaderText: "Archie Benson",
      role: "VP Marketing",
      email: "a.benson@leraffia.com",
      leaderImage: "https://media.istockphoto.com/photos/smiling-businessman-in-blue-shirt-isolated-on-gray-background-picture-id1096419442?k=20&m=1096419442&s=612x612&w=0&h=BLuqEbSmlQ1AAo5ulWUT6ReMpPvUlt1Wb7YQ8Mqrajw=",
    },
    image:
      "https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 3,
    name: "data 4",
    careers: {
      careerText: "We are accepting applications for the apprenticeship program.",
      careerImage: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    investors: {
      investorText: "Ordinary shareholders can now redeem their dividends.",
      investorImage: "https://images.pexels.com/photos/6133958/pexels-photo-6133958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    partners: {
      partnerText: "Redefining leather refinement would not be easy without partnering Lederoo.",
      partnerImage: "https://images.pexels.com/photos/65280/belts-belt-skin-colors-65280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    leadership: {
      leaderText: "Ifeoma Kalu",
      role: "VP Communications",
      email: "i.kalu@leraffia.com",
      leaderImage: "https://media.istockphoto.com/photos/happy-smiling-african-american-woman-in-formal-business-attire-picture-id1153955734?k=20&m=1153955734&s=612x612&w=0&h=d7ShCuqLRnZYkEZTD5P7POSFwAwi4H_2WrWenMrETjw=",
    },
    image:
      "https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 4,
    name: "data 5",
    careers: {
      careerText: "Participate in our graduate trainee program.",
      careerImage: "https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    investors: {
      investorText: "Annual performance results have been published!",
      investorImage: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    partners: {
      partnerText: "Our partnerships with H&M are beginning to bear fruits.",
      partnerImage: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    leadership: {
      leaderText: "Ming Nguyen",
      role: "VP Finance",
      email: "m.nguyen@leraffia.com",
      leaderImage: "https://img.freepik.com/free-photo/asian-business-woman-crossed-arms-with-long-hair-black-suit-isolated-white-color_147586-202.jpg?size=626&ext=jpg",
    },
    image:
      "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 5,
    name: "data 6",
    careers: {
      careerText: "Are you interested in an internship?",
      careerImage: "https://images.pexels.com/photos/6000157/pexels-photo-6000157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    investors: {
      investorText: "Investors meeting scheduled for late August.",
      investorImage: "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    partners: {
      partnerText: "Versace signs design and supply contract for one year.",
      partnerImage: "https://images.pexels.com/photos/8240672/pexels-photo-8240672.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    leadership: {
      leaderText: "Jacob Gonzalez",
      role: "VP Technology",
      email: "j.gonzalez@leraffia.com",
      leaderImage: "https://www.seekpng.com/png/detail/106-1062345_black-businessman-png-african-american-professional-png.png",
    },
    image:
      "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

export default corporateData;
