# StayEase Hostel Management System - Backend API

Production-ready Node.js, Express, and SQLite backend service for the StayEase Hostel Management System.

---

## Features

- **Full RESTful API**: Endpoints covering all 10 core entities in the hostel management workflow.
- **SQLite Persistence**: Embedded relational database (`hostel.db`) with zero external database dependencies.
- **Automatic Seeding**: On first run, seeds realistic rooms, beds, tenants, notices, maintenance tickets, expenses, visitors, 7-day meal schedules, and staff rosters.
- **CORS & JSON Support**: Cross-Origin Resource Sharing enabled with payload handling for web apps.
- **Automated Test Suite**: Built-in integration test suite (`npm test`) verifying all endpoints.
- **Interactive Control Center**: Includes `backend-demo.html` for visual testing and API inspection.

---

## Directory Structure

```
hostel-management-app/
├── backend/
│   ├── .env                 # Active environment variables
│   ├── .env.example         # Environment template
│   ├── database.js          # SQLite connection, schema definition & seed data
│   ├── server.js            # Express API server & routes
│   ├── test-api.js          # Automated 43-assertion API test suite
│   ├── package.json         # Dependencies & npm scripts
│   └── hostel.db            # SQLite database file (created automatically)
├── scripts/
│   ├── build.js             # Compiles app.js (JSX) into app.compiled.js
│   └── dev.js               # Runs the bundle watcher + backend dev server together
├── api.js                   # Frontend API client library
├── app.js                   # Main React frontend source (edit this one)
├── app.compiled.js          # Generated browser bundle (do not edit by hand)
├── babel.config.json        # Babel config used by the frontend build
├── backend-demo.html        # Interactive API test & control center
├── index.html               # Main single-page web app
├── package.json             # Frontend build scripts & dev dependency
├── .gitignore               # Ignores installed node_modules
└── BACKEND_README.md        # This documentation
```

---

## Quick Start

### 1. Install Dependencies
Install the backend, plus the toolchain used to build the frontend:
```bash
npm install                 # root: Babel toolchain for the frontend build
npm --prefix backend install
```

### 2. Configure Environment (Optional)
Copy `.env.example` to `.env` if not already present:
```bash
PORT=5000
CORS_ORIGIN=*
DB_PATH=./hostel.db
```

### 3. Run Development Server
```bash
npm run dev
```
Or start the production server:
```bash
npm start
```
The server will start at `http://localhost:5000`.

### 4. Run Automated Tests
With the server running in another terminal, run:
```bash
npm test
```
All 43 automated integration test assertions will execute and report status.

---

## Frontend Build

`index.html` loads **`app.compiled.js`**, never `app.js` directly. `app.compiled.js` is generated output: edit `app.js` and rebuild instead of editing the bundle by hand.

| Script | What it does |
|---|---|
| `npm run build` | Compile `app.js` → `app.compiled.js` once |
| `npm run build:watch` | Compile, then rebuild whenever `app.js` or `babel.config.json` changes |
| `npm run dev` | Run the bundle watcher **and** the backend dev server (nodemon) together |

```bash
npm install     # root: installs the Babel toolchain
npm run dev     # bundle watcher + backend server, both auto-reloading
```

The build uses `@babel/preset-react` with the **classic** runtime, so the output is plain `React.createElement` calls that match the React 18 UMD globals loaded by `index.html`. A failed build leaves the previous bundle on disk and prints the error, so a syntax mistake in `app.js` cannot silently blank the page.

---

## API Endpoints Reference

### System & Diagnostics
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status and timestamp |
| `GET` | `/api/stats` | High-level analytics (occupancy, bed counts, tickets, active visitors, expenses) |

---

### 1. Hostel Information
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/hostel` | Get hostel details (name, manager, phone, rules, capacity) |
| `PUT` | `/api/hostel` | Update hostel metadata |

**Sample PUT Payload:**
```json
{
  "manager_name": "Ramesh Sharma",
  "contact_phone": "+91 98999 11111",
  "rules": ["Gate closes strictly at 10:30 PM", "Quiet hours after 11 PM"]
}
```

---

### 2. Rooms & Bed Management
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/rooms` | List all rooms (supports `?floor=1`, `?ac=true`, `?category=Single`) |
| `GET` | `/api/rooms/:id` | Get specific room by ID (e.g. `R101`) with nested beds |
| `POST` | `/api/rooms` | Create a new room with auto-generated or custom beds |
| `PUT` | `/api/rooms/:id` | Update room attributes, price, or amenities |
| `DELETE` | `/api/rooms/:id` | Delete a room and cascade remove its beds |
| `GET` | `/api/rooms/:roomId/beds` | List all beds in a specific room |
| `POST` | `/api/rooms/:roomId/beds` | Add a new bed to a room |
| `PUT` | `/api/beds/:id` | Update bed tenant, status (`Available`/`Occupied`), or payment status |
| `DELETE` | `/api/beds/:id` | Remove a specific bed |

**Sample POST `/api/rooms`:**
```json
{
  "id": "R501",
  "roomNumber": "501",
  "floor": 5,
  "type": "Penthouse Studio",
  "category": "Single",
  "ac": true,
  "pricePerMonth": 15000,
  "deposit": 20000,
  "totalBeds": 1,
  "amenities": ["Attached Bath", "Private Balcony", "Smart TV", "WiFi"],
  "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  "beds": [{ "id": "501-A", "status": "Available" }]
}
```

**Sample PUT `/api/beds/:id`:**
```json
{
  "status": "Occupied",
  "tenant": "Aarav Patel",
  "phone": "+91 98444 55667",
  "joinDate": "2026-03-01",
  "paymentStatus": "Paid"
}
```

---

### 3. Maintenance Tickets (Tenant Portal & Operations)
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/tickets` | List all tickets (ordered by newest) |
| `POST` | `/api/tickets` | Submit a maintenance ticket |
| `PUT` | `/api/tickets/:id` | Update ticket status (`Pending`, `In Progress`, `Resolved`) |
| `DELETE` | `/api/tickets/:id` | Remove a ticket |

**Sample POST `/api/tickets`:**
```json
{
  "tenant": "Rahul Verma",
  "room": "102",
  "category": "Plumbing",
  "priority": "High",
  "description": "Geyser knob replacement required"
}
```

---

### 4. Notices & Announcements
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/notices` | List circulars and announcements |
| `POST` | `/api/notices` | Publish a new notice |
| `PUT` | `/api/notices/:id` | Edit notice details |
| `DELETE` | `/api/notices/:id` | Delete a notice |

---

### 5. Expenses Management
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/expenses` | List all financial expenses |
| `POST` | `/api/expenses` | Record a utility, salary, or repair expense |
| `DELETE` | `/api/expenses/:id` | Delete an expense record |

---

### 6. Visitors & Security Desk
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/visitors` | List all visitor logs |
| `POST` | `/api/visitors` | Check-in a visitor (status `Checked In`, exit `Active inside`) |
| `PUT` | `/api/visitors/:id/checkout` | Check-out a visitor with exit timestamp |

---

### 7. Bookings (New Joiner Portal)
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/bookings` | View all admission applications |
| `POST` | `/api/bookings` | Submit new admission booking application |
| `PUT` | `/api/bookings/:id` | Update booking approval status (`Pending`, `Confirmed`, `Rejected`) |

---

### 8. Reviews & Ratings
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/reviews` | List resident reviews |
| `POST` | `/api/reviews` | Post a customer review and rating |

---

### 9. Food Menu & Staff Roster
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/menu` | 7-day meal plan (Breakfast, Lunch, Snacks, Dinner) |
| `PUT` | `/api/menu/:id` | Update meal items for a given day |
| `GET` | `/api/staff` | List staff members (Wardens, Mess Manager, Security) |
| `POST` | `/api/staff` | Add new staff member |

---

## Frontend Integration (`api.js`)

A client utility is included in the project root at `api.js`. You can use it anywhere in vanilla JS or React components:

```javascript
// Check connection
const health = await StayEaseApi.checkHealth();

// Fetch rooms with live beds
const rooms = await StayEaseApi.getRooms({ floor: 1 });

// Submit a maintenance ticket
await StayEaseApi.createTicket({
  tenant: 'Rahul Verma',
  room: '102',
  category: 'WiFi',
  priority: 'Medium',
  description: 'Signal booster reset needed'
});

// Check-in a visitor
await StayEaseApi.checkInVisitor({
  visitorName: 'John Doe',
  hostTenant: 'Rahul Verma',
  room: '102',
  relation: 'Friend'
});
```

---

## Testing & Visual Inspection

1. Start the server: `cd backend && npm start`
2. Open `backend-demo.html` in your web browser:
   - View live server status indicator
   - View and filter rooms and bed status
   - Inspect and submit tickets, notices, expenses, and visitors
   - Execute custom GET, POST, PUT, DELETE requests in the interactive API console.
