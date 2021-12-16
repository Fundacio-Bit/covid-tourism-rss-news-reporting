const get_unique_news = (newsArray) => {
  let linksSoFar = [];
  let processedNews = [];
  newsArray.forEach((entry) => {
    if (entry.category === "tourism") {
      if (!linksSoFar.includes(entry.link)) {
        linksSoFar.push(entry.link);
        processedNews.push(entry);
      } else {
        let indexOfRowToUpdate = linksSoFar.indexOf(entry.link);
        //update categories
        processedNews[indexOfRowToUpdate]["category"] =
          processedNews[indexOfRowToUpdate]["category"] + "," + entry.category;
        //update brands
        processedNews[indexOfRowToUpdate]["brand"] =
          processedNews[indexOfRowToUpdate]["brand"] + "," + entry.brand;
      }
    }
  });
  let processedRows = processedNews.map((processedNew) => {
    return [
      processedNew.title,
      processedNew.brand,
      processedNew.category,
      processedNew.link,
    ];
  });
  return processedRows;
};

module.exports = { get_unique_news };
