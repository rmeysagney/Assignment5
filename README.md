Simple Product Dashboard - Assignment 5
This project is a small React application built to demonstrate the core mental model of React, including component structure, state management, and props.

File Organization
The project follows a modular structure to ensure clean and predictable code:

App.jsx: The root component that manages the application's state, including the user's name and the visibility of the product list.

ProductList.jsx: Contains a static array of product data and uses the .map() method to render a list of products dynamically.

Product.jsx: A reusable presentational component that receives title and price via props and wraps them inside the Card component.

Card.jsx: A layout component that uses the children prop to wrap and style any content passed into it, demonstrating component composition.

Challenges Faced
During the development of this dashboard, I encountered and resolved the following challenges:

State Synchronization: Implementing a controlled input for the user's name required ensuring the UI stayed in sync with the state without manual DOM manipulation.

Conditional Rendering: Logic was implemented to toggle the visibility of the ProductList based on the showProducts boolean state.

Component Composition: Using the children prop in the Card component was a new concept that helped me understand how to create flexible layout wrappers.

Import Path Management: Moving files into a /components subfolder required careful updating of import statements in main.jsx and App.jsx to maintain the application's integrity.
