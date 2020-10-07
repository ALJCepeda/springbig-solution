export default class Country {
  public name!: string
  public population!: number
  public region!: string
  public capital!: string
  public alphaCodes!: string[]
  public flagURL!: string
  public nativeName!: string
  public topLevelDomain!: string[]
  public currencies!: string[]
  public languages!: string[]
  public subRegion!: string
  public borders!: string[];

  constructor(data: Country) {
    Object.assign(this, data)
  }

  static fromAPI(raw: any): Country {
    return {
      name: raw.name,
      population: raw.population,
      region: raw.region,
      capital: raw.capital,
      alphaCodes: [raw.alpha2Code, raw.alpha3Code],
      flagURL: raw.flag,
      nativeName: raw.nativeName,
      topLevelDomain: raw.topLevelDomain,
      currencies: raw.currencies.map((currency: any) => currency.name),
      languages: raw.languages.map((language: any) => language.name),
      subRegion: raw.subregion,
      borders: raw.borders
    }
  }
}
