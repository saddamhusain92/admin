import prompts from "./prompt.json";
export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(prompts);
  } else if (req.method === "POST") {
    const type = req.body.type;
    switch (type) {
      case "develop":
        return res.status(200).json(prompts.develop);
          break;
      case "blogs":
        return res.status(200).json(prompts.blogs)
          break;
      case "image":
        return res.status(200).json(prompts.image)
          break;
      default:
          return res.status(200).json(prompts.default)
  }

  
  }
  // const type = req.boby

  // console.log(type);
}
