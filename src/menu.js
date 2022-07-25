function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    
    menu.appendChild(
      createMenuItem(
        "Hamburger",
        "Buns, patty, tomato, onions, lettuce, and our secret family recipe"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Cheeseburger",
        "Similar to our hamburger, but with cheese"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Steak",
        "A juicy steak made just how you like it"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Disgustoso",
        "Tomato sauce, Bacon, Pineapple, Olives, Basil"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Colorato",
        "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Pomodoro",
        "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Ribs",
        "Barbecue ribs with your choice of a add-ons"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Double-Cheeseburger",
        "Similar to our cheeseburger, but with an extra patty"
      )
    );
  
    return menu;
  }




  function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = `images/meals/${name.toLowerCase()}.png`;
    foodImage.alt = `${name}`;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }
  
  function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export default loadMenu;
  