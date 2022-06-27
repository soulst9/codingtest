// https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=pizza

function getTopicCount(topic) {
  const https = require("https");
  let data = "";
  https.get(
    `https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=${topic}`,
    (res) => {
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const result = JSON.parse(data.toString());
        let text = result["parse"]["text"]["*"];

        let regExp = new RegExp(topic, "gi");
        let topicCount = (text.match(regExp) || []).length;
        console.log(topicCount);
      });
    }
  );
}

getTopicCount("pizza");
