This project was built using React. It includes a header with a search bar, notification icon, profile dropdown, and a product table to display product details.

Project Structure
The project consists of the following key components:

1. Header
The Header component is responsible for rendering the top section of the dashboard. It includes the following features:

A logo
A search bar with a loading indicator and search icon
A notification icon with a dropdown for recent activities
A profile section with a dropdown for profile options
File: src/components/Header.js

Functionality:
Search Bar: Utilizes a debounced input to manage the search term, reducing the number of updates and avoiding unnecessary rendering.
Profile Dropdown: Allows toggling of profile-related options such as viewing the profile, settings, and logout.
Notification Dropdown: Shows recent activities.
2. Product Table
The ProductTable component is responsible for displaying a table of products. It filters the products based on the search term provided by the user.

File: src/components/ProductTable.js

Functionality:
Product Filtering: Filters the products array to match the search term.
Table Rendering: Displays the filtered products in a table format with various columns like S/N, Image, SKU, Name, Title, Description, Brand, Cost Price, Quantity, and Size.
3. Product Row
The ProductRow component is responsible for rendering individual rows in the product table.

File: src/components/ProductRow.js

Functionality:
Row Rendering: Renders each product with its details including an image, which defaults to a placeholder if the image fails to load.
4. Product Context
The ProductContext and ProductProvider are used to manage and provide product data throughout the application using React's Context API.

File: src/context/ProductContext.js

Functionality:
Data Fetching: Fetches product data from an external API and makes it available to other components.
State Management: Uses React state to manage the list of products and provides this state to components via the context.
5. Home Page
The HomePage component integrates the Header and ProductTable components, managing the overall layout and flow of data.

File: src/HomePage.js

Functionality:
State Management: Manages the search term state and passes it down to the Header and ProductTable components.
Layout: Arranges the Header and ProductTable components on the page.
Styling
The application is styled using CSS. Key styles include:

General Styles: Global styles for body, font, and layout.
Header Styles: Styles for the header component, including logo, search bar, notification icon, and profile dropdown.
Table Styles: Styles for the product table and individual rows, including hover effects and responsive design considerations.
File: src/components/Header.css

How to Run the Project
Clone the repository:
bash
Copy code
git clone https://github.com/your-repo/product-management-dashboard.git
cd product-management-dashboard
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm start
Open the application:

The application should be running on http://localhost:3000.
Dependencies
React: A JavaScript library for building user interfaces.
React Context API: For state management.
CSS: For styling the components.
API
The application fetches product data from an external API:

Endpoint: http://3.88.1.181:8000/products/public/catalog?supplier=FragranceNet
Contribution
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.

This README.md provides a detailed overview of the project, including the structure, functionality, and instructions on how to set up and run the application.


In the project directory, you can run:

### `npm start`
