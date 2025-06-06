import card from "./card.js"

const food ={
    "categories": [
      
    
      {
        "idCategory": "1",
        "strCategory": "Dessert",
        "strCategoryThumb": "https://www.themealdb.com/images/category/dessert.png",
        "strCategoryDescription": "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts."
      },
      
      {
        "idCategory": "2",
        "strCategory": "Miscellaneous",
        "strCategoryThumb": "https://www.themealdb.com/images/category/miscellaneous.png",
        "strCategoryDescription": "General foods that don't fit into another category"
      },
      {
        "idCategory": "3",
        "strCategory": "Pasta",
        "strCategoryThumb": "https://www.themealdb.com/images/category/pasta.png",
        "strCategoryDescription": "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca)."
      },

      
      {
        "idCategory": "4",
        "strCategory": "Side",
        "strCategoryThumb": "https://www.themealdb.com/images/category/side.png",
        "strCategoryDescription": "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes)."
      },
      {
        "idCategory": "5",
        "strCategory": "Starter",
        "strCategoryThumb": "https://www.themealdb.com/images/category/starter.png",
        "strCategoryDescription": "An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the main dish or the only dish of a meal.\r\n\r\nHistorically, the entrée was one of the stages of the “Classical Order” of formal French table service of the 18th and 19th centuries. It formed a part of the “first service” of the meal, which consisted of potage, hors d’œuvre, and entrée (including the bouilli and relevé). The “second service” consisted of roast (rôti), salad, and entremets (the entremets sometimes being separated into a “third service” of their own). The final service consisted only of dessert.[3]:3–11 :13–25"
      },
      {
        "idCategory": "6",
        "strCategory": "Vegan",
        "strCategoryThumb": "https://www.themealdb.com/images/category/vegan.png",
        "strCategoryDescription": "Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced /ˈviːɡən/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances.[c] The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the use of animals for any purpose.[d] Another term is environmental veganism, which refers to the avoidance of animal products on the premise that the harvesting or industrial farming of animals is environmentally damaging and unsustainable."
      },
      {
        "idCategory": "7",
        "strCategory": "Vegetarian",
        "strCategoryThumb": "https://www.themealdb.com/images/category/vegetarian.png",
        "strCategoryDescription": "Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.\r\n\r\nVegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish."
      },
      {
        "idCategory": "8",
        "strCategory": "Breakfast",
        "strCategoryThumb": "https://www.themealdb.com/images/category/breakfast.png",
        "strCategoryDescription": "Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more \"typical\", or \"traditional\", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast."
      },
      
    ]
}


let foods = document.getElementById("foods")

food.categories.map((ele)=>{
    foods.innerHTML += `<div class="col-3">${card(ele.strCategoryThumb,ele.idCategory,ele.strCategory  )}</div>`
})

  