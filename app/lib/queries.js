
import { useQuery, gql } from '@apollo/client';


export const GET_COUNTRIES = gql`

		query Countries {
			countries {
				name {
			    common
          official
          nativeName
        }
        capital
        region
        subregion
        flag
        population
        currencies
        languages
        fifa
        maps{
          googleMaps
        }
        coatOfArms{
          svg 
       }
        flags{
          svg
       }
       unMember
      }
		}
	`;