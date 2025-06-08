# anythingz

**anythingz** is a super app inspired by platforms like Swiggy and Zomato, but with an expansive vision: enabling customers to order anything—from groceries and hardware to medicine and more—directly from their local stores and supermarkets. The application streamlines the experience for customers, restaurants/stores, and delivery personnel through feature-rich web and mobile interfaces.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [User Roles & Application Flow](#user-roles--application-flow)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Status](#development-status)
- [Contact](#contact)

---

## Project Overview

anythingz is a one-stop solution for ordering a wide variety of products from local stores and supermarkets. It connects customers, store managers, and delivery personnel via dedicated panels, providing seamless order management, live tracking, and payment integration. The platform is designed to be scalable and efficient, catering to all aspects of the order and delivery process.

---

## Key Features

- **Order Management**: Place, update, and manage orders in real-time.
- **Live Order Status**: Customers can view the status of their orders at every stage.
- **Live Tracking**: Track delivery personnel's location as they fulfill orders.
- **Multi-role Access**: Dedicated panels for Admin, Store Managers, Customers, and Delivery Boys.
- **Store & Product Management**: Stores can add/edit/manage their inventory and details.
- **Payment Gateway Integration**: Secure and easy online payments (in progress).
- **Multi-category Support**: Order anything—from groceries to hardware and medicine.
- **Responsive Web & Mobile UI**: Accessible on both web and mobile (Admin and Manager panels are web-only for now).
- **Structured State Management**: Efficient data handling using Redux and Axios.

---

## User Roles & Application Flow

1. **Admin Panel** (Web only)
    - Tracks and manages all aspects of the platform.
    - Creates and updates stores, products, users, and oversees platform operations.

2. **Manager Panel** (Web only)
    - For store/restaurant owners and responsible personnel.
    - Add/manage their store details, products, and handle incoming orders.

3. **Customer Panel** (Web & Mobile)
    - Browse stores/restaurants, view products, and place orders.
    - Track current orders and delivery status in real-time.

4. **Delivery Boy Panel** (Web & Mobile)
    - Receives order assignments, picks up products, and delivers to the customer.
    - Location tracking for efficient routing and delivery updates.

---

## Tech Stack

- **Frontend**: React.js, Redux, JavaScript, HTML, CSS, Axios
- **Backend**: APIs are live and hosted (details not included in this repository)
- **State Management**: Redux
- **API Communication**: Axios

---

## Project Structure

```
anythingz/
  ├── Frontend/
  │   ├── src/
  │   ├── public/
  │   └── README.md
  ├── README.md
  └── ... (Other directories as development progresses)
```

- **Frontend**: Contains the React codebase for all user panels.
- **APIs**: Connected to a live backend (not included in this repository).

---

## Getting Started

> **Note:** Only the frontend code is available in this repository.

1. **Clone the repository**
   ```bash
   git clone https://github.com/shannub556-marolix/anythingz.git
   cd anythingz/Frontend
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the app**
   ```bash
   npm start
   ```
   The app will run locally, typically at [http://localhost:3000](http://localhost:3000).

---

## Development Status

- The application is under active development.
- Core modules such as order management and some integrations are in progress.
- Payment gateway integration and some order features are partially complete.
- Admin, Manager, Customer, and Delivery Boy flows are being incrementally built and tested.

---

## License

No open-source license has been specified for this project yet.

---

## Contact

For any questions or collaboration inquiries, please contact the repository owner via [GitHub](https://github.com/shannub556-marolix).

---

> _This documentation will be updated as the project evolves and new features are released._
