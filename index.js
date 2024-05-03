document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnSave').addEventListener('click', function(event) {
        event.preventDefault(); 

        var characterName = document.getElementById('characterName').value;
        var actorName = document.getElementById('actorName').value;
        var actorAge = document.getElementById('age').value;
        var location = document.getElementById('location').value;
        var poster = document.getElementById('poster').value;
        var dateAppears = document.getElementById('dateAppears').value;
        var producer = document.getElementById('producer').value;


        if (characterName === '' || actorName === '' || actorAge === '' || location === '' || poster === '' || dateAppears === '' || producer === '') {
            alert('Por favor complete todos los campos.');
            return;
        }

        var hero = {
            characterName: characterName,
            actorName: actorName,
            actorAge: actorAge,
            location: location,
            poster: poster,
            dateAppears: dateAppears,
            producer: producer
        };

        localStorage.setItem('hero', JSON.stringify(hero));

        document.getElementById('characterName').value = '';
        document.getElementById('actorName').value = '';
        document.getElementById('age').value = '';
        document.getElementById('location').value = '';
        document.getElementById('poster').value = '';
        document.getElementById('dateAppears').value = '';
        document.getElementById('producer').value = '';

        alert('Heroe guardado exitosamente.');
    });

    var heroString = localStorage.getItem('hero');
    if (heroString) {
        var hero = JSON.parse(heroString);
        document.getElementById('characterName').value = hero.characterName;
        document.getElementById('actorName').value = hero.actorName;
        document.getElementById('age').value = hero.actorAge;
        document.getElementById('location').value = hero.location;
        document.getElementById('poster').value = hero.poster;
        document.getElementById('dateAppears').value = hero.dateAppears;
        document.getElementById('producer').value = hero.producer;
    }
});
