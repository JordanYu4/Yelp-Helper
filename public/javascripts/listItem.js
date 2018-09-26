const listItemBuilder = (business, itemId) => {
  let listItem = document.createElement("li");
  listItem.setAttribute("id", itemId);

  let itemBody = document.createElement("a");
  let itemTitle = document.createElement("h1");
  itemTitle.appendChild(document.createTextNode(`${business.name}`));
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

  listItem.appendChild(photo);
  itemBody.appendChild(itemTitle);
  itemBody.appendChild(document.createTextNode(
    `Rating: ${business.rating}`));
  itemBody.appendChild(document.createElement("br"));
  itemBody.appendChild(document.createTextNode(
    `Price: ${business.price}`));
  itemBody.appendChild(document.createElement("br"));
  itemBody.appendChild(document.createTextNode(
    `Distance: ${business.distance} mi`));
  listItem.appendChild(itemBody);
  return listItem;
}

export default listItemBuilder;