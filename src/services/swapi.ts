const baseURL: string = 'https://swapi.co/api'
export const peopleURL: string = `${baseURL}/people/`

export interface IPerson {
  birth_year: string
  eye_color: string
  films: []
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  created: string
  edited: string
  species: []
  starships: []
  url: string
  vehicles: []
}
