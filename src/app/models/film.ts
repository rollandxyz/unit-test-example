
// https://swapi.co/api/films/6/
export class Film {
    constructor(
        public title: string,
        public episode_id: number,
        public opening_crawl: string,
        public director: string,
        public producer: string,
        public release_date: string
        ) {
    }
}

export class FilmResult {
    count: number;
    next: number;
    results: Film[];
}
