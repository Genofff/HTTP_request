fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data => {
  const gallery = data.slice(0, 12);
  const galleryElement = document.querySelector('.gallery');
  galleryElement.innerHTML = gallery.map(photo => `
    <div>
      <img src="${photo.url}" alt="${photo.title}">
    </div>
  `).join('');
})
.catch(error => console.error(error));