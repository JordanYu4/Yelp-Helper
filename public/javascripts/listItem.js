const listItemBuilder = (business, itemId) => {
  let listItem = document.createElement("li");
  listItem.setAttribute("id", itemId);

  let itemBody = document.createElement("a");
  let itemText = document.createElement("section");
  itemBody.setAttribute("href", `${business.url}`);
  itemBody.setAttribute("target", "_blank");
  
  // let linkPic = document.createElement("a");
  // linkPic.setAttribute("href", `${business.url}`);
  // linkPic.setAttribute("target", "_blank");
  
  let photo = document.createElement("i");
  photo.setAttribute(
    "style", `background-image: url(${business.image_url})`
  );
  // linkPic.appendChild(photo);
  
  itemBody.appendChild(photo);
  let itemTitle = document.createElement("h1");
  itemTitle.appendChild(document.createTextNode(`${business.name}`));
  itemText.appendChild(itemTitle);
  itemText.appendChild(document.createTextNode(
    `Rating: ${business.rating}`));
  itemText.appendChild(document.createElement("br"));
  itemText.appendChild(document.createTextNode(
    `Price: ${business.price ? business.price : 'unlisted'}`));
  itemText.appendChild(document.createElement("br"));
  itemText.appendChild(document.createTextNode(
    `Distance: ${business.distance} mi`));
  itemBody.appendChild(itemText);
  listItem.appendChild(itemBody);
  return listItem;
}

export default listItemBuilder;