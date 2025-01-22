# Lawyer Appointment Management Application

## Overview
This project is a React-based application for managing lawyer appointments. Users can browse through a list of lawyers, view their specialties, costs, and available time slots, and book appointments dynamically. The application uses Redux Toolkit for state management.

## Features
- **Browse Lawyers**: View a list of available lawyers with their details.
- **Book Appointments**: Choose from available time slots to book an appointment.
- **Dynamic Availability**: Time slots update automatically as appointments are booked.
- **Appointment History**: View previously booked appointments.
- **Responsive Design**: Optimized for various screen sizes.

## Technologies Used
- **Frontend**: React, Redux Toolkit, Tailwind CSS
- **State Management**: Redux Toolkit
- **Development Tools**: ESLint

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (>=16.x)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure
```
src
├── Components
│   └── LawyersList.js
├── reducers
│   └── lawyers.js
├── store.js
├── App.js
├── index.js
├── index.css
└── data.json
```

## How It Works
1. **Lawyer Data**: The data for lawyers is stored in `data.json`.
2. **State Management**: The Redux slice (`lawyers.js`) manages the application's state, including available time slots and appointments.
3. **Dynamic Rendering**: The `LawyersList` component maps over the lawyer data and dynamically renders their details and available appointments.
4. **Booking**: Clicking on a time slot dispatches an action to update the Redux state with the booked appointment.

## Sample Data
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "specialties": ["Divorce", "Criminal"],
    "availableTimeSlots": ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM"],
    "cost": 100,
    "appointments": []
  }
]
```

