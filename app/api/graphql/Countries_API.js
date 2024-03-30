import { RESTDataSource } from '@apollo/datasource-rest';



export class AllCountriesAPI extends RESTDataSource {
  baseURL = 'https://restcountries.com/v3.1/'; //API 


  async getAllCountries () {

    const data = await this.get( 'all' )
    return data;
  }

  async getCountry ( name ) {

    const data = await this.get( `name/${ name }` )
    return data[ 0 ];
  }
}