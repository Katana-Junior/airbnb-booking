# Airbnb-Style Booking Site Frontend

A modern, responsive React application built with TailwindCSS that replicates the core features of Airbnb's booking platform.

## 🌟 Features

### Navigation & Layout

- Sticky navigation bar with collapsible mobile menu
- Links to Home, Explore, Favorites, and Profile
- Clean, minimal design inspired by Airbnb colors (white, soft gray, accent red)

### Home Page

- Hero section with engaging headline
- Advanced search bar for location, check-in/check-out dates, and guest count
- Featured properties grid
- "How it works" instructional section with 3-step process

### Explore Page

- Browse all available properties
- Filter by price range (Budget, Mid-range, Luxury)
- Filter by rating (4.5+, 4.7+, 4.9+ stars)
- Responsive grid layout for easy browsing

### Property Listings

- Property cards with images, title, location, price, and rating
- Favorite button for bookmarking properties
- Hover effects and smooth transitions
- Optimized for desktop and mobile views

### Property Detail Page

- Full-screen image carousel with thumbnail navigation
- Navigation arrows for desktop, swipeable on mobile
- Property information (guests, bedrooms, bathrooms)
- Complete amenities list with icons
- User reviews section with ratings
- Booking form with date selection and price breakdown
- Real-time total price calculation

### Mobile Responsiveness

- Fully responsive design for all screen sizes
- Collapsible navigation menu
- Touch-friendly inputs and buttons
- Optimized grid layouts for tablets and phones
- Responsive image gallery

### Design & UX

- Consistent typography and spacing
- Smooth hover effects and transitions
- Card-based UI with subtle shadows
- Color scheme: White, Soft Gray (#F7F7F7), Dark Gray (#222222), Accent Red (#FF385C)
- Professional, polished appearance

## 🛠 Tech Stack

- **Frontend Framework**: React 19.2.6
- **Styling**: TailwindCSS 3.4.0
- **Routing**: React Router DOM 6.20.0
- **Icons**: React Icons 4.12.0
- **Build Tool**: Create React App with React Scripts 5.0.1

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js              # Navigation bar with mobile menu
│   ├── SearchBar.js           # Search functionality component
│   ├── PropertyCard.js        # Property listing card
│   ├── ImageCarousel.js       # Image gallery with navigation
│   ├── Amenities.js           # Amenities display with icons
│   └── ReviewSection.js       # Reviews and ratings display
├── pages/
│   ├── Home.js               # Homepage with search and featured listings
│   ├── Explore.js            # All properties with filters
│   └── PropertyDetail.js      # Property detail page with booking form
├── data/
│   └── properties.js         # Sample property data
├── App.js                    # Main app with routing
├── index.js                  # React entry point
└── index.css                 # Global styles and Tailwind directives
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Navigate to the project directory:

```bash
cd airbnb-booking
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will reload when you make changes.

## 📝 Available Scripts

### `npm start`

Runs the app in development mode.

### `npm build`

Builds the app for production to the `build` folder.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🎨 Design System

### Colors

- **Primary Red**: #FF385C (Airbnb brand color)
- **Background Gray**: #F7F7F7
- **Dark Gray**: #222222
- **Light Gray**: #EBEBEB

### Components

- **Buttons**: Primary (red background), Secondary (white with border)
- **Cards**: White background with subtle shadow
- **Inputs**: Border with focus ring effect

### Spacing

- Uses Tailwind's default spacing scale
- Consistent padding and margins throughout

## 📚 Sample Data

The application includes 6 sample properties with:

- Real images from Unsplash
- Realistic pricing and ratings
- Detailed amenities lists
- User reviews with ratings

## 🔄 Routing

- `/` - Home page
- `/explore` - Explore all properties
- `/property/:id` - Property detail page

## 🌐 Responsive Breakpoints

- **Mobile**: < 768px (md breakpoint)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 💡 Future Enhancements

- User authentication and profile management
- Booking history and reservation management
- Advanced filtering (amenities, property type, etc.)
- Map view for properties
- Messaging system between hosts and guests
- Payment integration
- Reviews and ratings submission
- Favorites/wishlist persistence
- Image upload for user profiles

## 📝 Notes

This is a frontend demonstration of an Airbnb-style booking platform. It showcases modern React practices, responsive design with TailwindCSS, and a polished user interface. The booking form is for demonstration purposes and doesn't process real transactions.

## 📄 License

This project is available for educational and personal use.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
