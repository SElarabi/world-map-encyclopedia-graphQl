<!-- @format -->

# [world-map-encyclopedia-graphql](https://world-map-encyclopedia-graphql.vercel.app/dashboard)
# <a href="https://world-map-encyclopedia-graphql.vercel.app/dashboard" target="_blank">world-map-encyclopedia-graphql</a>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Country Information Page

This is a NextJs application that displays information about a selected country. The information is fetched from a GraphQL server using the Apollo Client.


## Components

The page consists of the following components:

 **Features:**
   >- Displays the official and common names of the selected country.
   >- Displays the national flag and coat of arms of the selected country.
   >- Displays various information about the selected country such as:
   >- Capital
   >- Population
   >- Languages
   >- Currencies
   >- Continent
   >- Subregion
   >- Provides a link to the country's location on Google Maps.
   >- Responsive design that adjusts to the viewport size.

## Usage
>- Minimum requirement:
>- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). canary package.
> - npm 10.2.4.
> - node v21.5.0

 
To use this project:

1. Ensure you have the necessary dependencies installed (React, Reactstrap, FontAwesome, etc.).use `npm install` to install all dependencies listed in the package.json file.
2. Include the provided React component in your project.
3. Pass the selected country object and default country object to the component through context.
4. The component will fetch additional country data using Apollo Client.
5. Upon rendering, the component will display the information of the selected country.
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
7. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Dependencies

>- reactstrap: Used for various UI components.
>- @heroicons/react
>- react-error-boundary:used for error page
>- react: The library this component is built with.
>- react-dom
>- @fortawesome/react-fontawesome and @fortawesome/free-solid-svg-icons: Used for displaying icons.
>- @apollo/client: Used for fetching data from the GraphQL server.
>- @apollo/datasource-rest:used to connect apollo server to rest API
>- @apollo/server
>- graphql: for querries
>- graphql-tag
>- graphql-type-json

## Additional Notes

- The component adjusts its layout based on the viewport size, providing a responsive design.
- It dynamically fetches country data and updates the displayed information when a new country is selected.
- Various mappings are used to display languages, currencies, and native names.
- page component uses the window object for some operations. If you're using server-side rendering, make sure to handle these cases properly as the window object is not available on the server.

## Contributing

Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
