import { Movie } from "./Movie";

async function listMovies(): Promise<void> {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const response = await fetch(`${backendUrl}/movies`);
  const data = await response.json();
  renderMovies(data);
}

function renderMovies(movies:Movie[]): void {
  const app = document.getElementById("app") as HTMLDivElement;
  app.textContent = "";
  const movieTable = document.createElement("table");
  const movieThead = createMovieTableHead();
  const movieTbody = createMovieTableBody(movies);
  movieTable.appendChild(movieThead);
  movieTable.appendChild(movieTbody);
  app.appendChild(movieTable);
}

function createMovieTableBody(movies: Movie[]): HTMLTableSectionElement {
  const tbody = document.createElement("tbody");

  for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdTitle = document.createElement("td");
    const tdCategory = document.createElement("td");
    const tdDuration = document.createElement("td");
    tdId.textContent = movie.id.toString();
    tdTitle.textContent = movie.title;
    tdCategory.textContent = movie.category;
    tdDuration.textContent = movie.duration.toString();
    tr.append(tdId, tdTitle, tdCategory, tdDuration);
    tbody.appendChild(tr);
  }
  return tbody;
}

function createMovieTableHead(): HTMLTableSectionElement {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const thId = document.createElement("th");
  const thTitle = document.createElement("th");
  const thCategory = document.createElement("th");
  const thDuration = document.createElement("th");
  thId.textContent = "#"
  thTitle.textContent = "Cím"
  thCategory.textContent = "Műfaj"
  thDuration.textContent = "Időtartam (perc)"
  tr.append(thId, thTitle, thCategory, thDuration);
  thead.appendChild(tr);
  return thead;
}

listMovies();