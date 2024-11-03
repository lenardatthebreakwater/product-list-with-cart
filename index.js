function Card(foodImagePath, foodCategory, foodName, foodPrice) {
	const card = document.createElement("div")
	card.classList.add("card")
	const foodImage = document.createElement("img")
	foodImage.src = foodImagePath
	card.append(foodImage)

	const button = document.createElement("button")
	const cartIcon = document.createElement("img")
	cartIcon.src = "./assets/images/icon-add-to-cart.svg"	
	button.append(cartIcon)
	const buttonText = document.createElement("p")
	buttonText.innerText = "Add to Cart"
	button.append(buttonText)
	card.append(button)

	const h2 = document.createElement("h2")
	h2.innerText = foodCategory
	card.append(h2)

	const h3 = document.createElement("h3")
	h3.innerText = foodName
	card.append(h3)

	const h4 = document.createElement("h4")
	h4.innerText = foodPrice
	card.append(h4)

	return card
}

function Container(data) {
	const container = document.getElementById("container")

	for (let i = 0; i < data.length; i++) {
		container.append(Card(data[i].image.desktop, data[i].category, data[i].name, data[i].price))
	}

	return container
}

function main() {
	document.getElementById("card-section").append(Container(data))
}

main()
