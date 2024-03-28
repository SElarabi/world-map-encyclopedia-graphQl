/** @format */
import graphql from 'graphql-tag';



export const typeDefs = graphql`
	
	# Queries can fetch a list of libraries
	type Query {
	  countries:[Country]
    coutry(common:String):Country
		
	}

	# Country
	type Country{
	area:String
	name:Name
	capital:[String]
	region:String
  subregion:String
  flag:String
  population:Int
  languages:JSON
  currencies:JSON
  fifa:String
  maps:Maps
  coatOfArms:CoatOfArms
  flags:Flags
  unMember:Boolean
  }
  #Maps
  type Maps{
    googleMaps:String
  }
  

  #CoatOfArms
  type CoatOfArms{
    svg:String
    png:String
  }
  #Flags
  type Flags{
    svg:String
  }


  #Name
   type Name{
   common:String
   official:String
   nativeName:JSON
   }
   
   
   #SCALAR JSON TO ADD NOT A CONSISTENT TYPE OF DATA
  scalar JSON
  scalar JSONObject

  type MyType {
  myValue: JSON
  myObject: JSONObject
}
 
   
	
`;
