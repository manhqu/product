const manga = [
    {
        "name": "HORE-SHOU NO HALF ELF-SAN THE COMIC [>UPDATE CHAP 7<]",
        "title": "HORE-SHOU NO HALF ELF-SAN THE COMIC",
        "imgaeRemotePath": "https://i7.bumcheo.info/manga/33/33354/hore-shou-no-half-elf-san-the-comic.thumb_300x300.jpg",
        "genres": ["romance"],



    },

    {
        "name": "HORE-SHOU NO HALF ELF-SAN THE COMIC [>UPDATE CHAP 7<]",
        "title": "HORE-SHOU NO HALF ELF-SAN THE COMIC",
        "imgaeRemotePath": "https://i7.bumcheo.info/manga/33/33354/hore-shou-no-half-elf-san-the-comic.thumb_300x300.jpg",
        "genres": ["romance"],



    },
]




function renderManga() {
    const mangalist = document.getElementById('manga-list')


    manga.forEach(manga => {

        const mangaDiv = document.createElement('div')
        mangaDiv.classList.add('mangas')

        const MangaName = document.createElement('h2')
        MangaName.textContent = manga.name;

        const mangaImage = document.createElement('img');
        mangaImage.src = manga.imgaeRemotePath;
        mangaImage.alt = manga.name;


        const mangatitle = document.createElement('p')
        mangatitle.textContent = `$${manga.title}`;



        mangaDiv.appendChild(MangaName)
        mangaDiv.appendChild(mangaImage)
        mangaDiv.appendChild(mangatitle)


        mangalist.appendChild(mangaDiv)





    });
}

document.addEventListener('DOMContentLoaded', renderManga);





