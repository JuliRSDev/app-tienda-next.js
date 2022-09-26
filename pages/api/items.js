// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 2,
      title: "Figurita octocat",
      price: 100,
      image: "http://localhost:3000/img/octocat.webp",
      description :
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto dicta distinctio enim eum" +
          " hic id, nesciunt, omnis pariatur perferendis placeat praesentium provident qui quis repellat tempora tenetur totam."
    },
    {
      id: 3,
      title: "Invertocat",
      price: 340,
      image: "http://localhost:3000/img/invertocat.webp",
      description :
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto dicta distinctio enim eum" +
          " hic id, nesciunt, omnis pariatur perferendis placeat praesentium provident qui quis repellat tempora tenetur totam."
    },
    {
      id: 4,
      title: "Invertocat 3.0 Mug",
      price: 210,
      image: "http://localhost:3000/img/mug.webp",
      description :
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto dicta distinctio enim eum" +
          " hic id, nesciunt, omnis pariatur perferendis placeat praesentium provident qui quis repellat tempora tenetur totam."
    },
    {
      id: 15,
      title: "Invertocat 2.0 Coasters",
      price: 50,
      image: "http://localhost:3000/img/coasters.webp",
      description :
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto dicta distinctio enim eum" +
          " hic id, nesciunt, omnis pariatur perferendis placeat praesentium provident qui quis repellat tempora tenetur totam."
    },
    {
      id: 20,
      title: "Stickers Packs",
      price: 100,
      image: "http://localhost:3000/img/stickers.webp",
      description :
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto dicta distinctio enim eum" +
          " hic id, nesciunt, omnis pariatur perferendis placeat praesentium provident qui quis repellat tempora tenetur totam."
    },
    {
      id: 5,
      title: "Invertocat Hoodie",
      price: 99,
      image: "http://localhost:3000/img/hoodie.webp",
      description :
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto dicta distinctio enim eum" +
          " hic id, nesciunt, omnis pariatur perferendis placeat praesentium provident qui quis repellat tempora tenetur totam."
    }
  ])
}
