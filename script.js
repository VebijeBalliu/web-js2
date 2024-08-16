const animals = {
    cat: [
        { name: "Persian", image: "persian.jpg" },
        { name: "Siamese", image: "siames.jpg" },
        { name: "British Shorthair", image: "britishshorthair.jpg" },
        { name: "Maine Coon", image: "Maine.jpg" }
    ],
    dog: [
        { name: "Labrador", image: "labrador.jpg" },
        { name: "Beagle", image: "beagle.jpg" },
        { name: "German Shepherd", image: "germanshepherd.jpg" },
        { name: "Alaskan Malamute", image: "alaskan.jpg" }
    ],
    birds: [
        { name: "Parrot", image: "parrot.jpg" },
        { name: "Canary", image: "canary.jpg" },
        { name: "Sparrow", image: "sparrow.jpg" }
    ]
};

function searchAnimal() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    let found = false;
    for (const category in animals) {
        animals[category].forEach(animal => {
            if (animal.name.toLowerCase().includes(input)) {
                found = true;
                const card = document.createElement('div');
                card.className = 'animal-card';
                
                const img = document.createElement('img');
                img.src = animal.image;
                img.alt = animal.name;

                const name = document.createElement('p');
                name.textContent = animal.name;

                card.appendChild(img);
                card.appendChild(name);
                resultsDiv.appendChild(card);
            }
        });
    }

    if (!found) {
        resultsDiv.textContent = 'No results found';
    }
}




