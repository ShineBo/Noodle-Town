# Noodle Town Website

Welcome to the Noodle Town Website project. This is a React application built with Vite and styled with Tailwind CSS. It serves as the digital gateway to our Asian noodle restaurant, providing comprehensive information about our establishment, diverse menu, and location.

## Features

- Detailed information about the restaurant
- Comprehensive menu exploration
- Location details
- Reservation functionality
- Contact form for inquiries

# Project Structure

The main page of the website is defined in `src/App.jsx`.

Each page of the website is separated into its own section under `src/sections`. Here are the sections available:

- `About.jsx`: Contains information about the restaurant.
- `AllMenus.jsx`: Displays all the menus available.
- `Contact.jsx`: Provides a way for customers to contact the restaurant.
- `Location.jsx`: Shows the location of the restaurant.
- `Home.jsx`: The home page of the website.
- `Menu.jsx`: Details of the individual menu items.
- `Reservation.jsx`: Allows customers to make a reservation.

All the menu data are stored as JavaScript objects and arrays in `src/constants/index.js`.

All images and logos are stored under the `src/assets` folder.

Reusable and small components like `MenuCard`, `Navbar`, `PrivacyPolicy`, and `TermsOfService` are placed under `src/components`.

We've structured the project this way to keep things organized and make it easier for developers to find what they're looking for.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the following installed on your local machine:

- Node.js
- npm

### Installation

1. Clone the repo:

```bash
git clone https://github.com/ShineBo/Noodle-Town.git

Change into the project directory:
cd your-repo-name

Install the project dependencies:
npm install

Development
To start the development server:

npm run dev

Now you can visit localhost:3000 from your browser.

Contributing
We welcome contributions from the community. Please read our contributing guide first.
