    const choice = {
        categories: document.querySelectorAll('.js-category'),
        products: document.querySelector('.products'),
        productInfo: document.querySelector('.productInfo')
    }

    const productsData = {
        phones:[
            { name: "Apple", description: "iPhone 15 Pro Max is the top solution in the Pro line from Apple, presented in mid-September 2023, which is an evolution of the previous 14th generation"},
            { name: "Samsung", description: "Samsung Galaxy S23 Ultra is the top model in the entire flagship line. This year, there were no drastic changes in the design, only the edges became flatter, but this only benefited ergonomics"},
            { name: "Xiaomi", description: "Xiaomi Redmi Note 12 Pro+ is a top-of-the-range smartphone in the Redmi Note line of devices introduced in 2022, which can be described as a real top for its money"},
            { name: "Poco", description: "POCO F5 is a smartphone, a representative of the mid-budget class with optimal characteristics and a non-boring design"},
        ],

        kitchenAppliances: [
            { name: "refrigerator", description: "The Bosch KGN36VL326 refrigerator with a bottom freezer is made in silver color and belongs to energy consumption class A ++"},
            { name: "dishwasher", description: "Bosch SPV4XMX28E dishwasher with a width of 44.8 cm, which is completely built into the kitchen cabinet. A+ energy consumption class device holds 10 sets of dishes, consuming 9.5 liters of water to clean them"},
            { name: "kettle", description: "Maestro MR-1332 is a modern kettle with an attractive, stylish design that will allow you to quickly boil 2.5 liters of water and become a good addition to the kitchen interior"},
            { name: "microwave", description: "The Whirlpool AMW 730 NB microwave oven is an excellent option for users who need a model with a large working chamber, because in this case its volume is 31 liters, with a turntable diameter of 325 mm"},
        ],

        closes: [
            { name: "skirt", description: "Side zipper, lining inside"},
            { name: "jacket", description: "Jacket with a free cut, made of quilted fabric with insulation"},
            { name: "jeans", description: "Zipper and button fastening, two side pockets, two patch pockets at the back"},
            { name: "dress", description: "Dress with a fitted cut, made of shiny knitted fabric"},
        ],
    }

    choice.categories.forEach((category, index) => {
        category.addEventListener('click', handleChoiceClick)
    })

    function handleChoiceClick(event) {
        const optionIndex = event.target.dataset.index
        showProducts(optionIndex)
    }

    function showProducts(category) {
        const categoryProducts = productsData[category];
        const productName = document.createElement('h1')
        const productList = document.createElement('ul');

        productName.textContent = "Found Goods"
        choice.products.innerHTML = ""

        categoryProducts.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = product.name;
            listItem.addEventListener('click', () => showProductInfo(product))
            productList.appendChild(listItem)
        })

        choice.products.appendChild(productName);
        choice.products.appendChild(productList);
    }

    function showProductInfo(product) {
        const information = document.createElement('h1')
        const productDescription = document.createElement('p')
        const button = document.createElement('button')

        information.textContent = "Information about the product"
        productDescription.textContent = product.description;
        button.textContent = 'buy'

        choice.productInfo.innerHTML = ""

        choice.productInfo.appendChild(information)
        choice.productInfo.appendChild(productDescription)
        choice.productInfo.appendChild(button)

        button.addEventListener('click', handleBuyClick)

    }

    function handleBuyClick() {
        choice.productInfo.innerHTML = ""
        choice.products.innerHTML = ""

        alert('Sorry, the product has been purchased!')
    }


