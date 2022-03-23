import axios from "axios";

async function setupData() {
  if (!JSON.parse(localStorage.getItem("myApp.dataSet"))) {
    await Promise.all([
      getFullList("https://swapi.dev/api/people/",  peopleFormatter),
      getFullList("https://swapi.dev/api/planets/", planetFormatter),
      getFullList("https://swapi.dev/api/films/",   filmFormatter)
    ]).then(([people, planets, films]) => {
      localStorage.setItem(
        "myApp.people",
        JSON.stringify(Object.fromEntries(people.map(data => [data.id, data])))
      );
      localStorage.setItem(
        "myApp.planets",
        JSON.stringify(Object.fromEntries(planets.map(data => [data.id, data])))
      );
      localStorage.setItem(
        "myApp.films",
        JSON.stringify(Object.fromEntries(films.map(data => [data.id, data])))
      );
      localStorage.setItem("myApp.dataSet", JSON.stringify(true));
    });
  }
  return {
    people:  JSON.parse(localStorage.getItem("myApp.people")),
    planets: JSON.parse(localStorage.getItem("myApp.planets")),
    films:   JSON.parse(localStorage.getItem("myApp.films")),
    setupComplete: true
  };
}

async function getFullList(url, formatter, currentResults = []) {
  const data    = await axios.get(url).then(res => res.data);
  const results = currentResults.concat(data.results.map(formatter));

  return data.next
        ? await getFullList(data.next, formatter, results)
        : results;
}

function peopleFormatter(people) {
  return {
    id:         people.url.replace(/.+\/([^/]+)\/$/, "$1"),
    name:       people.name,
    birth_year: people.birth_year,
    gender:     people.gender,
    films:      people.films.map(film => film.replace(/.+\/([^/]+)\/$/, "$1"))
  };
}

function planetFormatter(planet) {
  return {
    id:              planet.url.replace(/.+\/([^/]+)\/$/, "$1"),
    climate:         planet.climate,
    diameter:        planet.diameter,
    films:           planet.films.map(film => film.replace(/.+\/([^/]+)\/$/, "$1")),
    name:            planet.name,
    orbital_period:  planet.orbital_period,
    population:      planet.population,
    residents:       planet.residents.map(film =>film.replace(/.+\/([^/]+)\/$/, "$1")),
    rotation_period: planet.rotation_period
  };
}

function filmFormatter(film) {
  return {
    id:            film.url.replace(/.+\/([^/]+)\/$/, "$1"),
    characters:    film.characters.map(film =>
                   film.replace(/.+\/([^/]+)\/$/, "$1")),
    episode_id:    film.episode_id,
    opening_crawl: film.opening_crawl,
    planets:       film.planets.map(film =>
                   film.replace(/.+\/([^/]+)\/$/, "$1")),
    release_date:  film.release_date,
    title:         film.title
  };
}
export default setupData;
