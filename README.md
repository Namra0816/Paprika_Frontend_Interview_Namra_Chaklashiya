
# Paprika

## Project Overview

Welcome to Paprika! 🍽️ We're a consumer app revolutionizing the way you find restaurants and menu items that cater to your unique food preferences and dietary restrictions.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Namra0816/Paprika_Frontend_Interview_Namra_Chaklashiya.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Paprika_Frontend_Interview_Namra_Chaklashiya
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server, run:
```bash
npm start
```

This will launch the application in your default web browser. You can now explore the various features and components of the application.

## Project Structure

The project is structured as follows:

```plaintext
Paprika_Frontend_Interview_Namra_Chaklashiya/
│
├── public/
│   ├── index.html
│   ├── logoIcon.png
│
├── src/
│   ├── assets/
│   │   ├── addItemIllustration..png
│   │   ├── backArrow.png
│   │   ├── bgimage.png
│   │   ├── favIcon.png
│   │   ├── forwardarrow.png
│   │   ├── imageIcon.png
│   │   ├── locationIcon.png
│   │   ├── logo.png
│   │   ├── searchIcon.png
│   │   ├── shareIcon.png
│   │   ├── strawberry.svg
│   │   ├── teaIcon.png
│   │   ├── verifiedIcon.png
│   ├── components/
│   │   ├── MainContent/
│   │   │   ├── Appetizers/
│   │   │   │   ├── Appetizer.jsx
│   │   │   │   └── AppetizerBox.jsx
│   │   │   ├── BestMatches.jsx
│   │   │   ├── MainContent.jsx
│   │   │   └── RestaurantHeader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   └── Sidebar.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│
└── tailwind.config.js
└── package-lock.json
└── postcss.config.js
└── package.json
```

## Components

### Appetizer.jsx

The `Appetizer` component displays a list of appetizers in a structured layout. It utilizes the `AppetizerBox` component to render individual appetizer items.

### AppetizerBox.jsx

The `AppetizerBox` component represents an individual appetizer item with details such as the name, price, description, and dietary match percentage.

### BestMatches.jsx

The `BestMatches` component displays the best-matched menu items, each represented with an image, name, preference match, and price.

### RestaurantHeader.jsx

The `RestaurantHeader` component displays information about the restaurant, including the name, verification status, distance, and open status. It also includes an option to add new items to the menu.

### Navbar.jsx

The `Navbar` component is the navigation bar of the application, allowing users to navigate between different sections of the application.

### Hero.jsx

The `Hero` component represents the hero section of the application, typically the main banner or introductory section.

### Sidebar.jsx

The `Sidebar` component displays additional navigation or information options for the user.

### MainContent.jsx

The `MainContent` component is the main content area where the primary information and features of the application are displayed.

## Styling

The application uses Tailwind CSS for styling. The configuration for Tailwind CSS can be found in the `tailwind.config.js` file. Global styles are defined in the `index.css` file.

## Dependencies

The project relies on several npm packages, including but not limited to:

- `react`
- `react-dom`
- `tailwindcss`
- `@emotion/react`
- `@emotion/styled`
- `@mui/material`
- `@mui/icons-material`

For a complete list of dependencies, refer to the `package-lock.json` file.

## License

This project is licensed under the MIT License.
