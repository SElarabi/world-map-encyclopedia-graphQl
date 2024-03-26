/** @format */
import graphql from 'graphql-tag';


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = graphql`
	
	# Queries can fetch a list of libraries
	type Query {
	  countries:[Country]
    coutry(common:string):Country
		
	}

	# Country
	type Country{
	area:string
	name:Name
	capital:[string]
	region:string
  subregion:string
  flag:string
  population:Int
  languages:JSON
  currencies:JSON
  fifa:string
  maps:Maps
  coatOfArms:CoatOfArms
  flags:Flags
  unMember:Boolean
  }
  #Maps
  type Maps{
    googleMaps:string
  }
  

  #CoatOfArms
  type CoatOfArms{
    svg:string
    png:string
  }
  #Flags
  type Flags{
    svg:string
  }


  #Name
   type Name{
   common:string
   official:string
   nativeName:JSON
   }
   
   
   #USE SCALAR JSON TO ADD NOT A CONSISTENT TYPE OF DATA
  scalar JSON
  scalar JSONObject

  type MyType {
  myValue: JSON
  myObject: JSONObject
}
 
   
	
`;
