document.body.style.cssText = "margin: 0px; background-color: #ddd; font-family: Tahoma ,Arial;";

// Creating Header Section
let myHeader = document.createElement("header");
myHeader.className = "website-header";
myHeader.style.cssText = "display: flex; padding: 20px; background-color: #fff; justify-content: space-between;";

// Creating the logo
let myLogo = document.createElement("div");
let logoText = document.createTextNode("Artist Abram");
myLogo.className = "website-logo";
myLogo.setAttribute("title", "The Logo");
myLogo.style.cssText = "color: green; float: left; font-weight: bold; font-size: 15px; width: 205px;";
myLogo.appendChild(logoText);

// Creating the menu using loop
let myMenu = document.createElement("ul");
let liElement = ["Home", "About", "Services", "Contact"];
for (i = 0; i < liElement.length; i++) {
    let listText = document.createTextNode(`${liElement[i]}`);
    let myLi = document.createElement("li");
    myLi.style.cssText = "margin-right: 15px;color: #9e9e9e;float: left;text-align: left; font-size: 12px;"
    myLi.appendChild(listText);
    myMenu.append(myLi);
};
myMenu.className = "website-menu";
myMenu.setAttribute("title", "The Menu");
myMenu.style.cssText = "font-weight: bold; font-size: 10px; list-style: none;";

// Creating the contant section using loop
let myContant = document.createElement("div");
myContant.className = "contant";
myContant.style.cssText ="margin: 12px; min-height: calc(100vh - 158px); justify-content: center; gap: 20px;";

for (i = 1; i <= 15; i++) {
    let myProduct = document.createElement("div");
    myProduct.className = "product";
    let myProductText = document.createTextNode("product");
    myProduct.style.cssText = "width: calc((100% - 114px)/3); height: fit-content; background-color: #fff; padding: 10px; border: 1px solid #ccc; margin: 8px; display: inline-block; text-align: center; border-radius: 5px; color: #9e9e9e; font-size: 11px;";
    let mySpan = document.createElement("span");
    mySpan.style.cssText = "font-size: 27px; color: #000; display: block;";
    mySpan.append([i]);
    myProduct.append(mySpan);
    myProduct.append(myProductText);
    myContant.append(myProduct);
};

// Creating the footer section
let myFooter = document.createElement("footer");
let footerText = document.createTextNode("CopyRight Reseved 2021 - 2022")
myFooter.appendChild(footerText);
myFooter.style.cssText = "display: flex; padding: 20px; background-color: green; justify-content: center; color: #fff;";

// Append all sections to the body tag
myHeader.appendChild(myLogo);
myHeader.appendChild(myMenu);
document.body.appendChild(myHeader);
document.body.appendChild(myContant);
document.body.appendChild(myFooter);

