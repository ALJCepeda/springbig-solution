export default class Country {
  public raw: any

  public get name(): string { return this.raw.name }
  public get population(): number { return this.raw.population }
  public get region(): string { return this.raw.region }
  public get capital(): string { return this.raw.capital }
  public get alphaCodes(): string[] { return [this.raw.alpha2Code, this.raw.alpha3Code] }
  public get flagURL(): string { return this.raw.flag }

  constructor(raw: any) {
    this.raw = raw
  }
}
