/*
 * AUTO-GENERATED FILE - DO NOT EDIT.
 * Built from app.js by "npm run build" (see scripts/build.js).
 * Manual changes here are overwritten on the next build; edit app.js instead.
 */
const {
  useState,
  useEffect,
  useMemo
} = React;

// --- INITIAL MOCK DATA ---
const INITIAL_ROOMS = [{
  id: 'R101',
  roomNumber: '101',
  floor: 1,
  type: 'three sharing',
  category: 'Triple',
  ac: true,
  pricePerMonth: 12000,
  deposit: 15000,
  totalBeds: 3,
  availableBeds: 1,
  amenities: ['Private Balcony', 'Attached Bath', 'Study Desk', 'Ergonomic Chair', '1Gbps WiFi', 'Geyser'],
  image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
  beds: [{
    id: '101-A',
    status: 'Available',
    tenant: null
  }]
}, {
  id: 'R102',
  roomNumber: '102',
  floor: 1,
  type: 'Double Sharing AC',
  category: 'Double',
  ac: true,
  pricePerMonth: 8500,
  deposit: 10000,
  totalBeds: 2,
  availableBeds: 1,
  amenities: ['Attached Bath', 'Individual Closets', 'Study Desk', 'Geyser', 'High-Speed WiFi'],
  image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
  beds: [{
    id: '102-A',
    status: 'Occupied',
    tenant: 'Rahul Verma',
    phone: '+91 98765 43210',
    joinDate: '2026-01-10',
    paymentStatus: 'Paid'
  }, {
    id: '102-B',
    status: 'Available',
    tenant: null
  }]
}, {
  id: 'R103',
  roomNumber: '103',
  floor: 1,
  type: 'Triple Sharing Non-AC',
  category: 'Triple',
  ac: false,
  pricePerMonth: 6000,
  deposit: 8000,
  totalBeds: 3,
  availableBeds: 0,
  amenities: ['Common Bath', 'Ceiling Fan', 'Study Desks', 'Spacious Locker'],
  image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
  beds: [{
    id: '103-A',
    status: 'Occupied',
    tenant: 'Vikram Singh',
    phone: '+91 98111 22334',
    joinDate: '2025-11-15',
    paymentStatus: 'Overdue'
  }, {
    id: '103-B',
    status: 'Occupied',
    tenant: 'Amit Sharma',
    phone: '+91 98222 33445',
    joinDate: '2026-02-01',
    paymentStatus: 'Paid'
  }, {
    id: '103-C',
    status: 'Occupied',
    tenant: 'Karthik Raja',
    phone: '+91 98333 44556',
    joinDate: '2026-01-05',
    paymentStatus: 'Paid'
  }]
}, {
  id: 'R201',
  roomNumber: '201',
  floor: 2,
  type: 'Single AC Standard',
  category: 'Single',
  ac: true,
  pricePerMonth: 11000,
  deposit: 14000,
  totalBeds: 1,
  availableBeds: 0,
  amenities: ['Attached Bath', 'Study Desk', 'Compact Fridge', 'WiFi'],
  image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
  beds: [{
    id: '201-A',
    status: 'Occupied',
    tenant: 'Aarav Patel',
    phone: '+91 98444 55667',
    joinDate: '2026-03-01',
    paymentStatus: 'Paid'
  }]
}, {
  id: 'R202',
  roomNumber: '202',
  floor: 2,
  type: 'Double Sharing AC',
  category: 'Double',
  ac: true,
  pricePerMonth: 8500,
  deposit: 10000,
  totalBeds: 2,
  availableBeds: 2,
  amenities: ['Attached Bath', 'Dual Study Stations', 'Balcony', 'Geyser'],
  image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
  beds: [{
    id: '202-A',
    status: 'Available',
    tenant: null
  }, {
    id: '202-B',
    status: 'Available',
    tenant: null
  }]
}, {
  id: 'R301',
  roomNumber: '301',
  floor: 3,
  type: 'Triple Sharing AC',
  category: 'Triple',
  ac: true,
  pricePerMonth: 7200,
  deposit: 9000,
  totalBeds: 3,
  availableBeds: 1,
  amenities: ['AC', 'Attached Bath', 'Fast WiFi', 'Personal Lockers'],
  image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
  beds: [{
    id: '301-A',
    status: 'Occupied',
    tenant: 'Siddharth Roy',
    phone: '+91 98555 66778',
    joinDate: '2026-01-20',
    paymentStatus: 'Paid'
  }, {
    id: '301-B',
    status: 'Occupied',
    tenant: 'Deepak Kumar',
    phone: '+91 98666 77889',
    joinDate: '2026-02-12',
    paymentStatus: 'Overdue'
  }, {
    id: '301-C',
    status: 'Available',
    tenant: null
  }]
}, {
  id: 'R401',
  roomNumber: '401',
  floor: 4,
  type: 'Executive Suite Single',
  category: 'Single',
  ac: true,
  pricePerMonth: 14000,
  deposit: 18000,
  totalBeds: 1,
  availableBeds: 1,
  amenities: ['Penthouse Balcony', 'Smart TV', 'Mini Kitchenette', 'Attached Bath', 'Geyser'],
  image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
  beds: [{
    id: '401-A',
    status: 'Available',
    tenant: null
  }]
}];
const WEEKLY_MENU = [{
  day: 'Monday',
  breakfast: 'Puri Bhaji / Idli Sambar + Tea/Coffee',
  lunch: 'Paneer Butter Masala, Dal Tadka, Roti, Rice, Salad',
  snack: 'Samosa / Biscuits + Tea',
  dinner: 'Aloo Gobi, Chana Dal, Rice, Chapati, Kheer'
}, {
  day: 'Tuesday',
  breakfast: 'Aloo Paratha with Curd / Toast',
  lunch: 'Rajma Masala, Jeera Rice, Chapati, Boondi Raita',
  snack: 'Veg Cutlet + Coffee',
  dinner: 'Egg Curry / Kadai Paneer, Yellow Dal, Chapati, Rice'
}, {
  day: 'Wednesday',
  breakfast: 'Masala Dosa / Vada + Chutney',
  lunch: 'Chicken Curry / Butter Paneer, Veg Biryani, Mirchi Salan',
  snack: 'Onion Pakoda + Tea',
  dinner: 'Mixed Veg, Dal Fry, Roti, Rice, Gulab Jamun'
}, {
  day: 'Thursday',
  breakfast: 'Poha / Uttapam + Coffee',
  lunch: 'Kadi Pakoda, Steamed Rice, Bhindi Fry, Chapati',
  snack: 'Bread Pakoda + Tea',
  dinner: 'Soyabean Masala, Dal Makhani, Roti, Rice, Ice Cream'
}, {
  day: 'Friday',
  breakfast: 'Chole Bhature / Upma',
  lunch: 'Dal Tadka, Sev Tamatar, Rice, Phulka, Butter Milk',
  snack: 'Maggi / French Fries + Coffee',
  dinner: 'Chicken Biryani / Veg Hyderabadi Biryani, Raita, Rasgulla'
}, {
  day: 'Saturday',
  breakfast: 'Pav Bhaji / Stuffed Paratha',
  lunch: 'Baingan Bharta, Chana Dal, Rice, Chapati, Salad',
  snack: 'Pav Vada + Tea',
  dinner: 'Paneer Do Pyaza, Dal Kolhapuri, Naan/Roti, Jeera Rice'
}, {
  day: 'Sunday',
  breakfast: 'Masala Omelette / Paneer Sandwich + Juice',
  lunch: 'Special Sunday Feast: Paneer Tikka Masala, Veg Pulao, Puri, Shrikhand',
  snack: 'Pastry / Cookies + Tea',
  dinner: 'Light Khichdi / Egg Bhurji, Chapti, Curd, Fruit Salad'
}];
const LANDMARKS = [{
  name: 'City Engineering College',
  distance: '1.2 km',
  time: '5 mins drive',
  category: 'Education',
  icon: 'graduation-cap'
}, {
  name: 'Global Tech Park (IT Hub)',
  distance: '2.5 km',
  time: '10 mins bus',
  category: 'Offices',
  icon: 'building'
}, {
  name: 'Central Metro Station',
  distance: '800 m',
  time: '8 mins walk',
  category: 'Transport',
  icon: 'train'
}, {
  name: 'Apollo Speciality Hospital',
  distance: '1.8 km',
  time: '7 mins drive',
  category: 'Healthcare',
  icon: 'activity'
}, {
  name: 'Phoenix Mega Mall',
  distance: '3.0 km',
  time: '12 mins drive',
  category: 'Shopping',
  icon: 'shopping-bag'
}];
const INITIAL_REVIEWS = [{
  id: 1,
  name: 'Ananya Deshmukh',
  room: 'Room 201 (Single AC)',
  rating: 5,
  date: 'Feb 2026',
  comment: 'Extremely clean hostel! High-speed WiFi made my remote work super smooth. High security and delicious Sunday meals.'
}, {
  id: 2,
  name: 'Rohan Mehta',
  room: 'Room 102 (Double Sharing)',
  rating: 4.8,
  date: 'Jan 2026',
  comment: 'The manager responds quickly to maintenance tickets. Washing area with 8 machines is super convenient.'
}, {
  id: 3,
  name: 'Praveen Kumar',
  room: 'Room 301 (Triple AC)',
  rating: 4.5,
  date: 'Dec 2025',
  comment: 'Great community vibe! landmark distances are exact; metro station is just a 8 min walk.'
}];
const INITIAL_NOTICES = [{
  id: 101,
  title: 'Annual Cultural Night & Dinner',
  date: '2026-08-20',
  category: 'Event',
  author: 'Hostel Committee',
  content: 'Join us in the Main Dining Hall for music, games, and a special buffet dinner starting at 7:00 PM.'
}, {
  id: 102,
  title: 'Scheduled Water Tank Cleaning',
  date: '2026-08-16',
  category: 'Maintenance',
  author: 'Manager Operations',
  content: 'Water supply will be temporarily paused from 10 AM to 1 PM this Saturday for deep tank sanitization.'
}, {
  id: 103,
  title: 'Mess Timings Update',
  date: '2026-08-10',
  category: 'Notice',
  author: 'Mess Warden',
  content: 'Breakfast now starts 15 minutes earlier at 7:30 AM to accommodate early college commuters.'
}];
const INITIAL_TICKETS = [{
  id: 'T-108',
  tenant: 'Rahul Verma',
  room: '102',
  category: 'Plumbing',
  priority: 'High',
  description: 'Bathroom geyser temperature knob broken.',
  status: 'In Progress',
  date: '2026-08-12',
  photo: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80'
}, {
  id: 'T-105',
  tenant: 'Vikram Singh',
  room: '103',
  category: 'WiFi',
  priority: 'Medium',
  description: 'Signal dropping in corner desk of Room 103.',
  status: 'Pending',
  date: '2026-08-13',
  photo: null
}, {
  id: 'T-099',
  tenant: 'Aarav Patel',
  room: '201',
  category: 'Electrical',
  priority: 'Low',
  description: 'Study lamp plug replacement needed.',
  status: 'Resolved',
  date: '2026-08-08',
  photo: null
}];
const INITIAL_EXPENSES = [{
  id: 1,
  title: 'Electricity Bill (July)',
  category: 'Utilities',
  amount: 42500,
  date: '2026-08-02',
  status: 'Paid'
}, {
  id: 2,
  title: 'Commercial Water Supply',
  category: 'Utilities',
  amount: 18200,
  date: '2026-08-05',
  status: 'Paid'
}, {
  id: 3,
  title: 'Staff Salaries (4 Wardens/Cleaners)',
  category: 'Salaries',
  amount: 85000,
  date: '2026-08-01',
  status: 'Paid'
}, {
  id: 4,
  title: 'Washing Machine Repair (Unit 3)',
  category: 'Repairs',
  amount: 3400,
  date: '2026-08-09',
  status: 'Paid'
}];
const STAFF_ROSTER = [{
  name: 'Ramesh Sharma',
  role: 'Chief Warden',
  shift: 'Day (8 AM - 6 PM)',
  phone: '+91 98999 11111',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
}, {
  name: 'Sunita Devi',
  role: 'Head Mess Manager',
  shift: 'Morning & Evening',
  phone: '+91 98999 22222',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
}, {
  name: 'Manoj Kumar',
  role: 'Security Supervisor',
  shift: 'Night (8 PM - 8 AM)',
  phone: '+91 98999 33333',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
}];
const INITIAL_VISITORS = [{
  id: 'V-501',
  visitorName: 'Sanjay Verma',
  hostTenant: 'Rahul Verma',
  room: '102',
  relation: 'Father',
  entryTime: '2026-08-13 10:30 AM',
  exitTime: '2026-08-13 02:15 PM',
  status: 'Checked Out'
}, {
  id: 'V-502',
  visitorName: 'Anil Singh',
  hostTenant: 'Vikram Singh',
  room: '103',
  relation: 'Brother',
  entryTime: '2026-08-13 04:00 PM',
  exitTime: 'Active inside',
  status: 'Checked In'
}];

// --- TRANSLATION DICTIONARY ---
const TRANSLATIONS = {
  en: {
    appTitle: 'StayEase Hostel Management',
    roleCustomer: 'Customer / Public',
    roleNewJoiner: 'New Joiner',
    roleTenant: 'Tenant Portal',
    roleManager: 'Manager Dashboard',
    sosButton: 'SOS Emergency Alert',
    heroTitle: 'Modern, Safe & Comfortable Hostel Living',
    heroSubtitle: 'Fully furnished AC/Non-AC rooms, delicious hygienic meals, 24/7 high-speed WiFi & top tier security.',
    exploreRooms: 'Explore Available Rooms',
    calculateFee: 'Fee Calculator',
    occupancyRate: 'Occupancy Rate',
    totalFloors: 'Total Floors',
    totalBeds: 'Total Beds',
    washingMachines: 'Washing Machines',
    roomVacancies: 'Real-time Vacancies'
  },
  hi: {
    appTitle: 'स्टे-ईज़ हॉस्टल प्रबंधन',
    roleCustomer: 'ग्राहक / सार्वजनिक',
    roleNewJoiner: 'नए प्रवेशी',
    roleTenant: 'किराएदार पोर्टल',
    roleManager: 'प्रबंधक डैशबोर्ड',
    sosButton: 'आपातकालीन (SOS) अलर्ट',
    heroTitle: 'आधुनिक, सुरक्षित और आरामदायक हॉस्टल निवास',
    heroSubtitle: 'सुसज्जित एसी/नॉन-एसी कमरे, स्वादिष्ट स्वच्छ भोजन, 24/7 वाई-फाई और उच्च सुरक्षा।',
    exploreRooms: 'उपलब्ध कमरे देखें',
    calculateFee: 'शुल्क कैलकुलेटर',
    occupancyRate: 'ऑक्यूपेंसी दर',
    totalFloors: 'कुल मंजिलें',
    totalBeds: 'कुल बेड',
    washingMachines: 'वाशिंग मशीनें',
    roomVacancies: 'लाइव रिक्तियां'
  },
  ta: {
    appTitle: 'ஸ்டே-ஈஸ் விடுதி மேலாண்மை',
    roleCustomer: 'வாடிக்கையாளர்',
    roleNewJoiner: 'புதிய சேர்க்கை',
    roleTenant: 'தங்குபவர் போர்ட்டல்',
    roleManager: 'மேலாளர் டேஷ்போர்டு',
    sosButton: 'அவசர நிலை SOS',
    heroTitle: 'நவீன, பாதுகாப்பான & வசதியான விடுதி வாழ்க்கை',
    heroSubtitle: 'ஏசி/ஏசி அல்லாத அறைகள், சுவையான உணவுகள், 24/7 அதிவேக வைஃபை & பாதுகாப்பு.',
    exploreRooms: 'அறைகளை பார்க்கவும்',
    calculateFee: 'கட்டண கணக்கீடு',
    occupancyRate: 'தங்குமிடம் அளவு',
    totalFloors: 'மொத்த தளங்கள்',
    totalBeds: 'மொத்த படுக்கைகள்',
    washingMachines: 'சலவை இயந்திரங்கள்',
    roomVacancies: 'தற்போதைய காலியிடங்கள்'
  }
};

// --- MAIN REACT APPLICATION APP COMPONENT ---
function App() {
  // State
  const [role, setRole] = useState('PUBLIC_CUSTOMER'); // PUBLIC_CUSTOMER, NEW_JOINER, TENANT, MANAGER
  const [lang, setLang] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [toast, setToast] = useState(null);
  const [showSosModal, setShowSosModal] = useState(false);

  // Core App Data State
  const [rooms, setRooms] = useState(() => {
    const saved = localStorage.getItem('stayease_rooms');
    return saved ? JSON.parse(saved) : INITIAL_ROOMS;
  });
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem('stayease_tickets');
    return saved ? JSON.parse(saved) : INITIAL_TICKETS;
  });
  const [notices, setNotices] = useState(() => {
    const saved = localStorage.getItem('stayease_notices');
    return saved ? JSON.parse(saved) : INITIAL_NOTICES;
  });
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('stayease_expenses');
    return saved ? JSON.parse(saved) : INITIAL_EXPENSES;
  });
  const [visitors, setVisitors] = useState(() => {
    const saved = localStorage.getItem('stayease_visitors');
    return saved ? JSON.parse(saved) : INITIAL_VISITORS;
  });
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem('stayease_rooms', JSON.stringify(rooms));
  }, [rooms]);
  useEffect(() => {
    localStorage.setItem('stayease_tickets', JSON.stringify(tickets));
  }, [tickets]);
  useEffect(() => {
    localStorage.setItem('stayease_expenses', JSON.stringify(expenses));
  }, [expenses]);
  useEffect(() => {
    localStorage.setItem('stayease_visitors', JSON.stringify(visitors));
  }, [visitors]);
  useEffect(() => {
    localStorage.setItem('stayease_notices', JSON.stringify(notices));
  }, [notices]);

  // Dark mode class toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Re-initialize Lucide Icons after render
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
  const showToast = (message, type = 'info') => {
    setToast({
      message,
      type
    });
    setTimeout(() => setToast(null), 4000);
  };
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex flex-col selection:bg-brand-500 selection:text-white"
  }, toast && /*#__PURE__*/React.createElement("div", {
    className: `fixed top-4 right-4 z-50 px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 text-white transition-all transform animate-bounce ${toast.type === 'success' ? 'bg-emerald-600' : toast.type === 'error' ? 'bg-rose-600' : 'bg-brand-600'}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": toast.type === 'success' ? 'check-circle' : toast.type === 'error' ? 'alert-triangle' : 'info',
    className: "w-5 h-5"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-sm"
  }, toast.message)), showSosModal && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 max-w-md w-full rounded-2xl shadow-2xl p-6 border border-rose-200 dark:border-rose-900"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-full bg-rose-100 dark:bg-rose-950 flex items-center justify-center mx-auto mb-4 text-rose-600"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "siren",
    className: "w-8 h-8 animate-pulse"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-center text-rose-600 dark:text-rose-400 mb-2"
  }, "Emergency SOS Triggered"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-600 dark:text-slate-300 text-center mb-6"
  }, "Your location & room alert has been broadcasted immediately to Chief Warden Ramesh Sharma and the Security Desk."), /*#__PURE__*/React.createElement("div", {
    className: "bg-rose-50 dark:bg-rose-950/40 p-4 rounded-xl mb-6 space-y-2 text-sm text-slate-700 dark:text-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between font-semibold"
  }, /*#__PURE__*/React.createElement("span", null, "Security Desk Hotline:"), /*#__PURE__*/React.createElement("span", {
    className: "text-rose-600"
  }, "+91 98999 33333")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between font-semibold"
  }, /*#__PURE__*/React.createElement("span", null, "Hostel Warden:"), /*#__PURE__*/React.createElement("span", {
    className: "text-rose-600"
  }, "+91 98999 11111")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between font-semibold"
  }, /*#__PURE__*/React.createElement("span", null, "Medical Emergency:"), /*#__PURE__*/React.createElement("span", {
    className: "text-rose-600"
  }, "108"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowSosModal(false);
      showToast('Warden & Security team notified of SOS alert.', 'error');
    },
    className: "w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-lg transition"
  }, "Acknowledge & Dismiss Alert"))), /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-brand-500/30"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "building-2",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5"
  }, "StayEase ", /*#__PURE__*/React.createElement("span", {
    className: "text-xs px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold border border-brand-200 dark:border-brand-800"
  }, "Hostels")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 dark:text-slate-400"
  }, "Complete Management Suite"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-x-auto max-w-full"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setRole('PUBLIC_CUSTOMER'),
    className: `px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${role === 'PUBLIC_CUSTOMER' ? 'bg-white dark:bg-brand-600 text-brand-600 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "globe",
    className: "w-3.5 h-3.5"
  }), t.roleCustomer), /*#__PURE__*/React.createElement("button", {
    onClick: () => setRole('NEW_JOINER'),
    className: `px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${role === 'NEW_JOINER' ? 'bg-white dark:bg-brand-600 text-brand-600 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "user-plus",
    className: "w-3.5 h-3.5"
  }), t.roleNewJoiner), /*#__PURE__*/React.createElement("button", {
    onClick: () => setRole('TENANT'),
    className: `px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${role === 'TENANT' ? 'bg-white dark:bg-brand-600 text-brand-600 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "key",
    className: "w-3.5 h-3.5"
  }), t.roleTenant), /*#__PURE__*/React.createElement("button", {
    onClick: () => setRole('MANAGER'),
    className: `px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${role === 'MANAGER' ? 'bg-white dark:bg-brand-600 text-brand-600 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shield-check",
    className: "w-3.5 h-3.5"
  }), t.roleManager)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, role === 'TENANT' && /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowSosModal(true),
    className: "px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-md shadow-rose-600/30 transition animate-pulse"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "siren",
    className: "w-3.5 h-3.5"
  }), t.sosButton), /*#__PURE__*/React.createElement("select", {
    value: lang,
    onChange: e => setLang(e.target.value),
    className: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
  }, /*#__PURE__*/React.createElement("option", {
    value: "en"
  }, "English (EN)"), /*#__PURE__*/React.createElement("option", {
    value: "hi"
  }, "हिंदी (HI)"), /*#__PURE__*/React.createElement("option", {
    value: "ta"
  }, "தமிழ் (TA)")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDarkMode(!darkMode),
    className: "p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition",
    title: "Toggle Theme"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": darkMode ? 'sun' : 'moon',
    className: "w-4 h-4"
  }))))), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6"
  }, role === 'PUBLIC_CUSTOMER' && /*#__PURE__*/React.createElement(PublicCustomerView, {
    rooms: rooms,
    weeklyMenu: WEEKLY_MENU,
    landmarks: LANDMARKS,
    reviews: reviews,
    onAddReview: newRev => {
      setReviews([newRev, ...reviews]);
      showToast('Thank you! Your review has been published.', 'success');
    },
    showToast: showToast,
    t: t
  }), role === 'NEW_JOINER' && /*#__PURE__*/React.createElement(NewJoinerPortalView, {
    rooms: rooms,
    showToast: showToast,
    onBookingCreated: booking => {
      showToast(`Booking submitted! Your Booking ID is ${booking.id}`, 'success');
    }
  }), role === 'TENANT' && /*#__PURE__*/React.createElement(TenantPortalView, {
    rooms: rooms,
    tickets: tickets,
    notices: notices,
    onAddTicket: ticket => {
      setTickets([ticket, ...tickets]);
      showToast('Maintenance ticket submitted to management!', 'success');
    },
    showToast: showToast
  }), role === 'MANAGER' && /*#__PURE__*/React.createElement(ManagerDashboardView, {
    rooms: rooms,
    setRooms: setRooms,
    tickets: tickets,
    setTickets: setTickets,
    expenses: expenses,
    setExpenses: setExpenses,
    visitors: visitors,
    setVisitors: setVisitors,
    staff: STAFF_ROSTER,
    showToast: showToast
  })), /*#__PURE__*/React.createElement("footer", {
    className: "bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12 py-8 text-xs text-slate-500 dark:text-slate-400"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-6 h-6 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold"
  }, "S"), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-slate-800 dark:text-slate-200"
  }, "StayEase Hostel Management System"), /*#__PURE__*/React.createElement("span", null, "© 2026")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-6"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hover:text-brand-600"
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hover:text-brand-600"
  }, "Terms of Service"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hover:text-brand-600"
  }, "Contact Warden"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hover:text-brand-600"
  }, "Hostel Rules")))));
}

// ----------------------------------------------------------------------
// 1. PUBLIC / CUSTOMER VIEW MODULE
// ----------------------------------------------------------------------
function PublicCustomerView({
  rooms,
  weeklyMenu,
  landmarks,
  reviews,
  onAddReview,
  showToast,
  t
}) {
  const [selectedFloor, setSelectedFloor] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [acOnly, setAcOnly] = useState(false);
  const [compareRooms, setCompareRooms] = useState([]);
  const [showCalculator, setShowCalculator] = useState(false);
  const [activeMenuDay, setActiveMenuDay] = useState('Monday');

  // Filtered rooms calculation
  const filteredRooms = useMemo(() => {
    return rooms.filter(r => {
      if (selectedFloor !== 'ALL' && r.floor !== Number(selectedFloor)) return false;
      // Compare case-insensitively: categories arrive as either 'Triple' or
      // 'triple' depending on whether they came from the mock seed or the API.
      if (selectedCategory !== 'ALL' && String(r.category).toLowerCase() !== selectedCategory.toLowerCase()) return false;
      if (acOnly && !r.ac) return false;
      return true;
    });
  }, [rooms, selectedFloor, selectedCategory, acOnly]);
  const toggleCompare = room => {
    if (compareRooms.some(r => r.id === room.id)) {
      setCompareRooms(compareRooms.filter(r => r.id !== room.id));
    } else {
      if (compareRooms.length >= 3) {
        showToast('You can compare a maximum of 3 rooms side-by-side.', 'error');
        return;
      }
      setCompareRooms([...compareRooms, room]);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-12 shadow-2xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 max-w-2xl space-y-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold border border-brand-400/30"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sparkles",
    className: "w-3.5 h-3.5"
  }), "Premium Student & Professional Residence"), /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight"
  }, t.heroTitle), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-300 text-sm sm:text-base leading-relaxed"
  }, t.heroSubtitle), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-4 pt-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#rooms-section",
    className: "px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-brand-500/40 transition flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    className: "w-4 h-4"
  }), t.exploreRooms), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowCalculator(true),
    className: "px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-sm backdrop-blur-md border border-white/20 transition flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "calculator",
    className: "w-4 h-4"
  }), t.calculateFee))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-white/5 border border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-black text-brand-300"
  }, "4"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400 font-medium"
  }, t.totalFloors)), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-white/5 border border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-black text-emerald-400"
  }, "120+"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400 font-medium"
  }, t.totalBeds)), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-white/5 border border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-black text-amber-300"
  }, "8 Units"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400 font-medium"
  }, t.washingMachines)), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-white/5 border border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-black text-indigo-300"
  }, "1 Gbps"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400 font-medium"
  }, "Fiber WiFi")))), /*#__PURE__*/React.createElement("section", {
    id: "rooms-section",
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bed-double",
    className: "w-6 h-6 text-brand-600"
  }), "Available Rooms & Vacancies"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 dark:text-slate-400"
  }, "Filter by floor, room type, or AC amenities")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
  }, /*#__PURE__*/React.createElement("select", {
    value: selectedFloor,
    onChange: e => setSelectedFloor(e.target.value),
    className: "bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700"
  }, /*#__PURE__*/React.createElement("option", {
    value: "ALL"
  }, "All Floors (1 to 4)"), /*#__PURE__*/React.createElement("option", {
    value: "1"
  }, "Floor 1"), /*#__PURE__*/React.createElement("option", {
    value: "2"
  }, "Floor 2"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "Floor 3"), /*#__PURE__*/React.createElement("option", {
    value: "4"
  }, "Floor 4")), /*#__PURE__*/React.createElement("select", {
    value: selectedCategory,
    onChange: e => setSelectedCategory(e.target.value),
    className: "bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700"
  }, /*#__PURE__*/React.createElement("option", {
    value: "ALL"
  }, "All Room Types"), /*#__PURE__*/React.createElement("option", {
    value: "Single"
  }, "Single Sharing"), /*#__PURE__*/React.createElement("option", {
    value: "Double"
  }, "Double Sharing"), /*#__PURE__*/React.createElement("option", {
    value: "Triple"
  }, "Triple Sharing")), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 px-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: acOnly,
    onChange: e => setAcOnly(e.target.checked),
    className: "rounded text-brand-600 focus:ring-brand-500 w-4 h-4"
  }), "AC Only"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  }, filteredRooms.map(room => {
    const isCompared = compareRooms.some(r => r.id === room.id);
    return /*#__PURE__*/React.createElement("div", {
      key: room.id,
      className: "bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between group"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "relative h-48 overflow-hidden"
    }, /*#__PURE__*/React.createElement("img", {
      src: room.image,
      alt: room.type,
      className: "w-full h-full object-cover group-hover:scale-105 transition duration-500"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute top-3 left-3 flex gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-2.5 py-1 rounded-full text-xs font-bold bg-slate-900/80 text-white backdrop-blur-md"
    }, "Floor ", room.floor), room.ac && /*#__PURE__*/React.createElement("span", {
      className: "px-2.5 py-1 rounded-full text-xs font-bold bg-sky-500/90 text-white backdrop-blur-md flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "wind",
      className: "w-3 h-3"
    }), " AC")), /*#__PURE__*/React.createElement("div", {
      className: "absolute top-3 right-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: `px-3 py-1 rounded-full text-xs font-extrabold backdrop-blur-md ${room.availableBeds > 0 ? 'bg-emerald-500/90 text-white' : 'bg-rose-500/90 text-white'}`
    }, room.availableBeds > 0 ? `${room.availableBeds} Vacant Bed(s)` : 'Fully Occupied'))), /*#__PURE__*/React.createElement("div", {
      className: "p-5 space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-start"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-extrabold text-lg text-slate-900 dark:text-white"
    }, "Room ", room.roomNumber), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 dark:text-slate-400"
    }, room.type)), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xl font-black text-brand-600 dark:text-brand-400"
    }, "₹", room.pricePerMonth.toLocaleString()), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-slate-400 font-medium"
    }, " / mo"))), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-1.5"
    }, room.amenities.map((am, idx) => /*#__PURE__*/React.createElement("span", {
      key: idx,
      className: "px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300"
    }, am))))), /*#__PURE__*/React.createElement("div", {
      className: "p-5 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 mt-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggleCompare(room),
      className: `flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 border ${isCompared ? 'bg-brand-50 border-brand-300 text-brand-700 dark:bg-brand-950 dark:border-brand-800 dark:text-brand-300' : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": isCompared ? 'check-square' : 'columns',
      className: "w-3.5 h-3.5"
    }), isCompared ? 'Comparing' : 'Compare'), /*#__PURE__*/React.createElement("a", {
      href: "#calculator-section",
      onClick: () => setShowCalculator(true),
      className: "flex-1 py-2 px-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold text-center transition"
    }, "Calculate Cost")));
  }))), compareRooms.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bg-brand-900 text-white rounded-3xl p-6 shadow-2xl border border-brand-700 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "columns",
    className: "w-5 h-5 text-brand-300"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold"
  }, "Side-by-Side Room Comparison (", compareRooms.length, "/3)")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCompareRooms([]),
    className: "text-xs text-brand-300 hover:text-white underline font-semibold"
  }, "Clear Comparison")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-4"
  }, compareRooms.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    className: "bg-white/10 rounded-2xl p-4 border border-white/10 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-extrabold text-base"
  }, "Room ", r.roomNumber, " (", r.type, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: () => toggleCompare(r),
    className: "text-slate-400 hover:text-white"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-black text-brand-300"
  }, "₹", r.pricePerMonth.toLocaleString(), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-normal text-slate-300"
  }, "/ mo")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs space-y-1 text-slate-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Floor:"), " Floor ", r.floor), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Security Deposit:"), " ₹", r.deposit.toLocaleString()), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Beds Available:"), " ", r.availableBeds, " of ", r.totalBeds), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "AC:"), " ", r.ac ? 'Yes (Split AC)' : 'No (Ceiling Fan)')), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold mb-1 text-slate-300"
  }, "Amenities:"), /*#__PURE__*/React.createElement("ul", {
    className: "text-[11px] list-disc list-inside space-y-0.5 text-slate-200"
  }, r.amenities.map((a, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, a)))))))), /*#__PURE__*/React.createElement("section", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-2xl"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "coffee",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-900 dark:text-white"
  }, "Hostel Amenities & Hygiene"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 dark:text-slate-400"
  }, "Everything designed for comfortable living"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-brand-600 dark:text-brand-400 flex items-center gap-2 font-bold text-sm"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "utensils",
    className: "w-4 h-4"
  }), " Dining Hall"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 dark:text-slate-300"
  }, "Spacious 150-seater mess with daily sanitized tables & fresh meals.")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-brand-600 dark:text-brand-400 flex items-center gap-2 font-bold text-sm"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shirt",
    className: "w-4 h-4"
  }), " Washing & Drying"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 dark:text-slate-300"
  }, "8 Heavy-duty Front Load Machines + Rooftop Solar Drying Deck.")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-brand-600 dark:text-brand-400 flex items-center gap-2 font-bold text-sm"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wifi",
    className: "w-4 h-4"
  }), " High-Speed WiFi"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 dark:text-slate-300"
  }, "Dedicated mesh routers on every floor with 1 Gbps fiber backup.")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-brand-600 dark:text-brand-400 flex items-center gap-2 font-bold text-sm"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shield",
    className: "w-4 h-4"
  }), " 24/7 Security"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 dark:text-slate-300"
  }, "CCTV cameras, biometric entry & resident night security wardens.")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-amber-100 dark:bg-amber-950 text-amber-600 rounded-2xl"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "calendar",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-900 dark:text-white"
  }, "Weekly Food Menu"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 dark:text-slate-400"
  }, "Nutritious, hygienic & rotated weekly")))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800"
  }, weeklyMenu.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.day,
    onClick: () => setActiveMenuDay(m.day),
    className: `px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${activeMenuDay === m.day ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`
  }, m.day.substring(0, 3)))), (() => {
    const currentMeal = weeklyMenu.find(m => m.day === activeMenuDay);
    return /*#__PURE__*/React.createElement("div", {
      className: "mt-4 space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-bold text-brand-600 uppercase tracking-wider"
    }, "Breakfast (7:30 AM - 9:30 AM)"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1"
    }, currentMeal.breakfast)), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-bold text-amber-600 uppercase tracking-wider"
    }, "Lunch (12:30 PM - 2:30 PM)"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1"
    }, currentMeal.lunch)), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-bold text-sky-600 uppercase tracking-wider"
    }, "Evening Snacks (5:00 PM - 6:00 PM)"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1"
    }, currentMeal.snack)), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-bold text-indigo-600 uppercase tracking-wider"
    }, "Dinner (8:00 PM - 10:00 PM)"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1"
    }, currentMeal.dinner)));
  })()))), /*#__PURE__*/React.createElement("section", {
    className: "bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    className: "w-6 h-6 text-rose-500"
  }), "Nearby Landmarks & Transport Accessibility"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 dark:text-slate-400"
  }, "Conveniently located near top universities, IT hubs, and transit centers")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, landmarks.map((lm, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 font-bold"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": lm.icon,
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-slate-900 dark:text-white"
  }, lm.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-brand-600 dark:text-brand-400 font-semibold"
  }, lm.category), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "navigation",
    className: "w-3 h-3"
  }), " ", lm.distance), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    className: "w-3 h-3"
  }), " ", lm.time)))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg animate-bounce mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    className: "w-8 h-8"
  })), /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-slate-900 dark:text-white text-base"
  }, "StayEase Hostel Main Gate"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 dark:text-slate-400 mt-1"
  }, "Plot 42, University Road, Sector 5"), /*#__PURE__*/React.createElement("button", {
    onClick: () => showToast('Redirecting to Google Maps live navigation...', 'info'),
    className: "mt-4 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-bold hover:opacity-90 transition"
  }, "Open in Google Maps")))), showCalculator && /*#__PURE__*/React.createElement(FeeCalculatorModal, {
    rooms: rooms,
    onClose: () => setShowCalculator(false)
  }), /*#__PURE__*/React.createElement("section", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "star",
    className: "w-6 h-6 text-amber-400 fill-amber-400"
  }), "Reviews from Past & Current Tenants"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 dark:text-slate-400"
  }, "Transparent feedback before you book your bed"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6"
  }, reviews.map(rev => /*#__PURE__*/React.createElement("div", {
    key: rev.id,
    className: "bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex text-amber-400"
  }, [...Array(5)].map((_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "star",
    className: `w-4 h-4 ${i < Math.floor(rev.rating) ? 'fill-amber-400' : 'text-slate-300'}`
  }))), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-slate-400"
  }, rev.date)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed"
  }, "\"", rev.comment, "\""), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-slate-100 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-sm text-slate-900 dark:text-white"
  }, rev.name), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-brand-600 dark:text-brand-400 font-semibold"
  }, rev.room)))))));
}

// ----------------------------------------------------------------------
// FEE CALCULATOR MODAL COMPONENT
// ----------------------------------------------------------------------
function FeeCalculatorModal({
  rooms,
  onClose
}) {
  const [selectedRoomId, setSelectedRoomId] = useState(rooms[0]?.id || '');
  const [durationMonths, setDurationMonths] = useState(6);
  const [includeLaundry, setIncludeLaundry] = useState(true);
  const selectedRoom = rooms.find(r => r.id === selectedRoomId) || rooms[0];
  const monthlyBase = selectedRoom ? selectedRoom.pricePerMonth : 0;
  const deposit = selectedRoom ? selectedRoom.deposit : 0;
  const laundryFee = includeLaundry ? 500 : 0;
  const totalRent = (monthlyBase + laundryFee) * durationMonths;
  const grandTotalAtJoin = totalRent + deposit;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 max-w-lg w-full rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "calculator",
    className: "w-6 h-6 text-brand-600"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-extrabold text-slate-900 dark:text-white"
  }, "Fee & Deposit Estimator")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Select Room Type"), /*#__PURE__*/React.createElement("select", {
    value: selectedRoomId,
    onChange: e => setSelectedRoomId(e.target.value),
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
  }, rooms.map(r => /*#__PURE__*/React.createElement("option", {
    key: r.id,
    value: r.id
  }, "Room ", r.roomNumber, " - ", r.type, " (₹", r.pricePerMonth.toLocaleString(), "/mo)")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, /*#__PURE__*/React.createElement("span", null, "Duration of Stay"), /*#__PURE__*/React.createElement("span", {
    className: "text-brand-600"
  }, durationMonths, " Months")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1",
    max: "12",
    value: durationMonths,
    onChange: e => setDurationMonths(Number(e.target.value)),
    className: "w-full accent-brand-600"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shirt",
    className: "w-4 h-4 text-brand-600"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-800 dark:text-slate-200"
  }, "Unlimited Laundry Add-on")), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 text-xs font-semibold cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: includeLaundry,
    onChange: e => setIncludeLaundry(e.target.checked),
    className: "rounded text-brand-600 focus:ring-brand-500"
  }), "+₹500/mo")), /*#__PURE__*/React.createElement("div", {
    className: "bg-brand-50 dark:bg-brand-950/50 p-4 rounded-2xl border border-brand-200 dark:border-brand-800 space-y-2 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-slate-600 dark:text-slate-300"
  }, /*#__PURE__*/React.createElement("span", null, "Monthly Rent (x", durationMonths, "):"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, "₹", (monthlyBase * durationMonths).toLocaleString())), includeLaundry && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-slate-600 dark:text-slate-300"
  }, /*#__PURE__*/React.createElement("span", null, "Laundry Charges (x", durationMonths, "):"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, "₹", (500 * durationMonths).toLocaleString())), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-slate-600 dark:text-slate-300"
  }, /*#__PURE__*/React.createElement("span", null, "Refundable Security Deposit:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, "₹", deposit.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-brand-200 dark:border-brand-800 flex justify-between font-extrabold text-sm text-brand-700 dark:text-brand-300"
  }, /*#__PURE__*/React.createElement("span", null, "Total Payment at Joining:"), /*#__PURE__*/React.createElement("span", null, "₹", grandTotalAtJoin.toLocaleString())))), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-sm transition"
  }, "Done / Close Calculator")));
}

// ----------------------------------------------------------------------
// 2. NEW JOINER PORTAL VIEW MODULE
// ----------------------------------------------------------------------
function NewJoinerPortalView({
  rooms,
  showToast,
  onBookingCreated
}) {
  const [step, setStep] = useState(1);
  const [tourCategory, setTourCategory] = useState('ALL');
  const [searchBookingId, setSearchBookingId] = useState('');
  const [bookingStatusResult, setBookingStatusResult] = useState(null);
  const [showRazorpayModal, setShowRazorpayModal] = useState(false);

  // Application Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    emergencyContact: '',
    selectedRoomId: rooms[0]?.id || '',
    duration: '6',
    idProofName: 'aadhaar_card_scan.pdf'
  });
  const tourImages = [{
    title: 'Deluxe Single Bedroom',
    category: 'Rooms',
    img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80'
  }, {
    title: 'Double Sharing AC Room',
    category: 'Rooms',
    img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80'
  }, {
    title: 'Main Dining Hall',
    category: 'Mess',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
  }, {
    title: 'Community Study Lounge',
    category: 'Lounge',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80'
  }, {
    title: 'Automated Laundry Station',
    category: 'Laundry',
    img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=600&q=80'
  }];
  const handleApplicationSubmit = e => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      showToast('Please fill in your name and phone number.', 'error');
      return;
    }
    setShowRazorpayModal(true);
  };
  const handlePaymentSuccess = () => {
    setShowRazorpayModal(false);
    const newId = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking = {
      id: newId,
      name: formData.fullName,
      room: formData.selectedRoomId,
      status: 'Document Verification',
      date: new Date().toISOString().split('T')[0]
    };
    onBookingCreated(newBooking);
    setBookingStatusResult(newBooking);
    setStep(3); // Go to Status Tracker
  };
  const handleTrackBooking = e => {
    e.preventDefault();
    if (!searchBookingId) return;
    setBookingStatusResult({
      id: searchBookingId.toUpperCase(),
      name: 'Applicant',
      room: 'Room 102',
      status: 'Bed Allotted & Confirmed',
      date: '2026-08-10'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-indigo-600 via-brand-600 to-indigo-800 text-white rounded-3xl p-8 shadow-xl space-y-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold border border-white/30 inline-block"
  }, "New Joiner & Admissions Portal"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-extrabold"
  }, "Join the StayEase Community"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-indigo-100"
  }, "Apply online, complete digital ID verification, pay advance security deposit, and track your booking status.")), /*#__PURE__*/React.createElement("div", {
    className: "flex border-b border-slate-200 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(1),
    className: `pb-3 px-4 font-bold text-xs sm:text-sm transition border-b-2 flex items-center gap-2 ${step === 1 ? 'border-brand-600 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    className: "w-4 h-4"
  }), " 1. Virtual Hostel Tour"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(2),
    className: `pb-3 px-4 font-bold text-xs sm:text-sm transition border-b-2 flex items-center gap-2 ${step === 2 ? 'border-brand-600 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "file-text",
    className: "w-4 h-4"
  }), " 2. Digital Application"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(3),
    className: `pb-3 px-4 font-bold text-xs sm:text-sm transition border-b-2 flex items-center gap-2 ${step === 3 ? 'border-brand-600 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "activity",
    className: "w-4 h-4"
  }), " 3. Booking Status Tracker")), step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-900 dark:text-white"
  }, "Virtual Hostel Tour & Photo Gallery"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, ['ALL', 'Rooms', 'Mess', 'Lounge', 'Laundry'].map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat,
    onClick: () => setTourCategory(cat),
    className: `px-3 py-1 rounded-xl text-xs font-bold transition ${tourCategory === cat ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`
  }, cat)))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
  }, tourImages.filter(item => tourCategory === 'ALL' || item.category === tourCategory).map((item, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-44 rounded-xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.img,
    alt: item.title,
    className: "w-full h-full object-cover hover:scale-105 transition duration-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center px-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-sm text-slate-800 dark:text-slate-200"
  }, item.title), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-extrabold px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-600"
  }, item.category))))), /*#__PURE__*/React.createElement("div", {
    className: "text-center pt-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(2),
    className: "px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-sm shadow-lg transition inline-flex items-center gap-2"
  }, "Proceed to Application Form ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    className: "w-4 h-4"
  })))), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-extrabold text-slate-900 dark:text-white"
  }, "Digital Admission & ID Verification"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 dark:text-slate-400"
  }, "Fill in details and lock your room allotment")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleApplicationSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Full Name (As per Govt ID)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "e.g. Rahul Verma",
    value: formData.fullName,
    onChange: e => setFormData({
      ...formData,
      fullName: e.target.value
    }),
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Email Address"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "rahul@example.com",
    value: formData.email,
    onChange: e => setFormData({
      ...formData,
      email: e.target.value
    }),
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Mobile Phone Number"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    placeholder: "+91 98765 43210",
    value: formData.phone,
    onChange: e => setFormData({
      ...formData,
      phone: e.target.value
    }),
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Parent / Guardian Phone"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    placeholder: "+91 98111 22334",
    value: formData.emergencyContact,
    onChange: e => setFormData({
      ...formData,
      emergencyContact: e.target.value
    }),
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Select Room Preference"), /*#__PURE__*/React.createElement("select", {
    value: formData.selectedRoomId,
    onChange: e => setFormData({
      ...formData,
      selectedRoomId: e.target.value
    }),
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
  }, rooms.map(r => /*#__PURE__*/React.createElement("option", {
    key: r.id,
    value: r.id
  }, "Room ", r.roomNumber, " (", r.type, ")"))))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "file-check",
    className: "w-6 h-6 text-brand-600"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold text-slate-800 dark:text-slate-200"
  }, "Govt ID Proof (Aadhaar / Passport)"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-400"
  }, formData.idProofName))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => showToast('ID Document attached successfully.', 'info'),
    className: "px-3 py-1.5 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-600"
  }, "Change File")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-sm shadow-lg transition flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "credit-card",
    className: "w-4 h-4"
  }), " Proceed to Advance Deposit Payment"))), showRazorpayModal && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 max-w-md w-full rounded-3xl shadow-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-lg bg-blue-600 text-white font-black flex items-center justify-center text-xs"
  }, "R"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-extrabold text-sm text-slate-900 dark:text-white"
  }, "Razorpay Secure Gateway"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-slate-400"
  }, "Order ID: ORD-992031"))), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-extrabold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-1 rounded"
  }, "256-bit Encrypted")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-slate-600 dark:text-slate-300"
  }, /*#__PURE__*/React.createElement("span", null, "Advance Rent (1 Month):"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, "₹8,500")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-slate-600 dark:text-slate-300"
  }, /*#__PURE__*/React.createElement("span", null, "Refundable Deposit:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, "₹10,000")), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-black text-sm text-slate-900 dark:text-white"
  }, /*#__PURE__*/React.createElement("span", null, "Total Payable Now:"), /*#__PURE__*/React.createElement("span", {
    className: "text-brand-600"
  }, "₹18,500"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handlePaymentSuccess,
    className: "w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-lg transition flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle",
    className: "w-4 h-4"
  }), " Pay ₹18,500 via UPI / Card / NetBanking"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowRazorpayModal(false),
    className: "w-full py-2 text-xs font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
  }, "Cancel Transaction")))), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-extrabold text-slate-900 dark:text-white"
  }, "Track Admission & Booking Status"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 dark:text-slate-400"
  }, "Enter your 6-digit Booking Reference ID")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleTrackBooking,
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "e.g. BK-8902",
    value: searchBookingId,
    onChange: e => setSearchBookingId(e.target.value),
    className: "flex-1 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs shadow-md"
  }, "Track Status")), bookingStatusResult && /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 dark:bg-slate-800/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-400 font-bold"
  }, "BOOKING ID"), /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-black text-brand-600"
  }, bookingStatusResult.id)), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 text-xs font-extrabold"
  }, bookingStatusResult.status)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[11px] font-bold text-slate-500"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-600"
  }, "✓ Form Submitted"), /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-600"
  }, "✓ Deposit Paid"), /*#__PURE__*/React.createElement("span", {
    className: "text-brand-600"
  }, "● Bed Allotted")), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-3/4 h-full bg-brand-600 rounded-full"
  }))))));
}

// ----------------------------------------------------------------------
// 3. TENANT PORTAL VIEW MODULE
// ----------------------------------------------------------------------
function TenantPortalView({
  rooms,
  tickets,
  notices,
  onAddTicket,
  showToast
}) {
  const [activeTab, setActiveTab] = useState('DASHBOARD');
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  // New Maintenance Ticket Form state
  const [newTicket, setNewTicket] = useState({
    category: 'Plumbing',
    priority: 'Medium',
    description: ''
  });
  const tenantInfo = {
    name: 'Rahul Verma',
    room: 'Room 102 (Bed A)',
    rentDue: '2026-09-05',
    dueAmount: 8500,
    status: 'Paid for August'
  };
  const handleTicketSubmit = e => {
    e.preventDefault();
    if (!newTicket.description) return;
    const ticketObj = {
      id: `T-${Math.floor(100 + Math.random() * 900)}`,
      tenant: tenantInfo.name,
      room: '102',
      category: newTicket.category,
      priority: newTicket.priority,
      description: newTicket.description,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
      photo: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80'
    };
    onAddTicket(ticketObj);
    setNewTicket({
      category: 'Plumbing',
      priority: 'Medium',
      description: ''
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-slate-900 via-indigo-950 to-brand-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-black text-2xl shadow-lg border-2 border-brand-400"
  }, "RV"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-extrabold"
  }, tenantInfo.name), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-400/30"
  }, "Active Tenant")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-300 mt-1"
  }, tenantInfo.room, " • Join Date: Jan 10, 2026"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/10 text-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-300 font-bold uppercase tracking-wider block"
  }, "Next Rent Due"), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-extrabold text-brand-300"
  }, "Sept 05, 2026 (₹8,500)")), /*#__PURE__*/React.createElement("button", {
    onClick: () => showToast('Rent payment portal opened. ₹8,500 paid successfully!', 'success'),
    className: "px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-extrabold shadow-lg transition"
  }, "Pay Rent Now"))), /*#__PURE__*/React.createElement("div", {
    className: "flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto"
  }, [{
    id: 'DASHBOARD',
    label: 'My Dashboard',
    icon: 'layout-dashboard'
  }, {
    id: 'MAINTENANCE',
    label: 'Maintenance Requests',
    icon: 'wrench'
  }, {
    id: 'NOTICES',
    label: 'Community Board',
    icon: 'bell'
  }, {
    id: 'DIGITAL_ID',
    label: 'Digital ID Card',
    icon: 'qr-code'
  }, {
    id: 'SPLIT_BILL',
    label: 'Split-Bill',
    icon: 'receipt'
  }].map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.id,
    onClick: () => setActiveTab(tab.id),
    className: `pb-3 px-4 font-bold text-xs sm:text-sm transition border-b-2 flex items-center gap-2 whitespace-nowrap ${activeTab === tab.id ? 'border-brand-600 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": tab.icon,
    className: "w-4 h-4"
  }), tab.label))), activeTab === 'DASHBOARD' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center text-xs font-bold text-slate-400"
  }, /*#__PURE__*/React.createElement("span", null, "QUICK ACTIONS"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "zap",
    className: "w-4 h-4 text-amber-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowSwapModal(true),
    className: "w-full py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-brand-50 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold text-left transition flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Request Roommate / Room Swap"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right-left",
    className: "w-3.5 h-3.5 text-brand-600"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowLeaveModal(true),
    className: "w-full py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-brand-50 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold text-left transition flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Outstation / Leave Notice"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plane-departure",
    className: "w-3.5 h-3.5 text-brand-600"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-2 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "megaphone",
    className: "w-4 h-4 text-brand-600"
  }), " Latest Hostel Announcement"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab('NOTICES'),
    className: "text-xs text-brand-600 font-bold hover:underline"
  }, "View All")), notices[0] && /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60 space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center text-xs font-bold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-900 dark:text-white"
  }, notices[0].title), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400"
  }, notices[0].date)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 dark:text-slate-300"
  }, notices[0].content))))), activeTab === 'MAINTENANCE' && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus-circle",
    className: "w-5 h-5 text-brand-600"
  }), " Submit Maintenance Ticket"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleTicketSubmit,
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Issue Category"), /*#__PURE__*/React.createElement("select", {
    value: newTicket.category,
    onChange: e => setNewTicket({
      ...newTicket,
      category: e.target.value
    }),
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Plumbing"
  }, "Plumbing / Water"), /*#__PURE__*/React.createElement("option", {
    value: "Electrical"
  }, "Electrical / Light"), /*#__PURE__*/React.createElement("option", {
    value: "WiFi"
  }, "WiFi & Internet"), /*#__PURE__*/React.createElement("option", {
    value: "Cleaning"
  }, "Housekeeping & Cleaning"), /*#__PURE__*/React.createElement("option", {
    value: "Furniture"
  }, "Bed / Furniture Repair"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Priority"), /*#__PURE__*/React.createElement("select", {
    value: newTicket.priority,
    onChange: e => setNewTicket({
      ...newTicket,
      priority: e.target.value
    }),
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Low"
  }, "Low Priority"), /*#__PURE__*/React.createElement("option", {
    value: "Medium"
  }, "Medium Priority"), /*#__PURE__*/React.createElement("option", {
    value: "High"
  }, "Urgent / High Priority"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Issue Description"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    placeholder: "Describe the issue in detail...",
    value: newTicket.description,
    onChange: e => setNewTicket({
      ...newTicket,
      description: e.target.value
    }),
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-2.5 rounded-xl border border-slate-200 dark:border-slate-700",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 font-medium"
  }, "Attach photo mock"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => showToast('Sample image attached to ticket.', 'info'),
    className: "px-2.5 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-bold border"
  }, "Upload Photo")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs transition shadow-md"
  }, "Submit Ticket"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 space-y-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-900 dark:text-white"
  }, "Your Maintenance History"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, tickets.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-extrabold text-sm text-slate-900 dark:text-white"
  }, t.id), /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
  }, t.category), /*#__PURE__*/React.createElement("span", {
    className: `px-2 py-0.5 rounded text-[10px] font-bold ${t.priority === 'High' ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-600'}`
  }, t.priority, " Priority")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 dark:text-slate-300"
  }, t.description), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-slate-400"
  }, "Date: ", t.date, " • Room ", t.room)), /*#__PURE__*/React.createElement("span", {
    className: `px-3 py-1 rounded-full text-xs font-extrabold ${t.status === 'Resolved' ? 'bg-emerald-100 text-emerald-600' : t.status === 'In Progress' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-600'}`
  }, t.status)))))), activeTab === 'NOTICES' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 max-w-3xl mx-auto"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-900 dark:text-white"
  }, "Community Notices & Events"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, notices.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    className: "p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 text-xs font-extrabold"
  }, n.category), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-400 font-semibold"
  }, n.date)), /*#__PURE__*/React.createElement("h4", {
    className: "text-lg font-bold text-slate-900 dark:text-white"
  }, n.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
  }, n.content), /*#__PURE__*/React.createElement("div", {
    className: "pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-400"
  }, /*#__PURE__*/React.createElement("span", null, "Posted by: ", n.author), /*#__PURE__*/React.createElement("button", {
    onClick: () => showToast('RSVP confirmed for event!', 'success'),
    className: "text-brand-600 font-bold hover:underline"
  }, "RSVP / Interested")))))), activeTab === 'DIGITAL_ID' && /*#__PURE__*/React.createElement("div", {
    className: "max-w-md mx-auto bg-gradient-to-b from-brand-900 to-indigo-950 text-white rounded-3xl p-8 shadow-2xl border border-brand-700 space-y-6 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center border-b border-white/10 pb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-extrabold tracking-widest uppercase text-brand-300"
  }, "DIGITAL TENANT ID"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30"
  }, "VERIFIED")), /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-24 rounded-full bg-white/10 border-4 border-brand-400 mx-auto flex items-center justify-center font-black text-3xl"
  }, "RV"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black"
  }, tenantInfo.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-brand-200 mt-1"
  }, tenantInfo.room), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-400 mt-0.5"
  }, "ID: ST-2026-88102")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-2xl inline-block mx-auto shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-36 h-36 bg-slate-900 rounded-xl flex flex-col items-center justify-center text-white p-2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "qr-code",
    className: "w-24 h-24"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-slate-400 font-mono"
  }, "Scan for Hostel Entry"))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-300 italic"
  }, "Show this QR code to the gate biometric scanner for automatic check-in/check-out.")), activeTab === 'SPLIT_BILL' && /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-extrabold text-slate-900 dark:text-white"
  }, "Roommate Split-Bill Calculator"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 dark:text-slate-400"
  }, "Easily split food orders, extra groceries, or internet add-ons")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Expense Title"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    defaultValue: "Midnight Pizza Party Order",
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Total Bill (₹)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    defaultValue: "1200",
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Split Among"), /*#__PURE__*/React.createElement("select", {
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
  }, /*#__PURE__*/React.createElement("option", {
    value: "2"
  }, "2 Roommates (₹600 each)"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "3 Roommates (₹400 each)")))), /*#__PURE__*/React.createElement("button", {
    onClick: () => showToast('Split-bill request sent to roommates via UPI link!', 'success'),
    className: "w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs shadow-md transition"
  }, "Send Split Request to Roommates"))), showSwapModal && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 max-w-md w-full rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-lg text-slate-900 dark:text-white"
  }, "Request Room Swap"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Specify reason for room swap...",
    rows: "3",
    className: "w-full p-3 bg-slate-50 dark:bg-slate-800 text-xs rounded-xl border"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowSwapModal(false);
      showToast('Swap request submitted to Manager.', 'info');
    },
    className: "flex-1 py-2.5 bg-brand-600 text-white font-bold text-xs rounded-xl"
  }, "Submit Request"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowSwapModal(false),
    className: "py-2.5 px-4 bg-slate-100 dark:bg-slate-800 text-xs font-bold rounded-xl"
  }, "Cancel")))), showLeaveModal && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 max-w-md w-full rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-lg text-slate-900 dark:text-white"
  }, "Outstation / Leave Notice"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block font-bold mb-1"
  }, "From Date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded-xl"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block font-bold mb-1"
  }, "To Date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded-xl"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowLeaveModal(false);
      showToast('Leave notice recorded! Mess meal count updated.', 'success');
    },
    className: "flex-1 py-2.5 bg-brand-600 text-white font-bold text-xs rounded-xl"
  }, "Confirm Leave Notice"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowLeaveModal(false),
    className: "py-2.5 px-4 bg-slate-100 dark:bg-slate-800 text-xs font-bold rounded-xl"
  }, "Cancel")))));
}

// ----------------------------------------------------------------------
// 4. MANAGER & ADMIN DASHBOARD VIEW MODULE
// ----------------------------------------------------------------------
function ManagerDashboardView({
  rooms,
  setRooms,
  tickets,
  setTickets,
  expenses,
  setExpenses,
  visitors,
  setVisitors,
  staff,
  showToast
}) {
  const [activeTab, setActiveTab] = useState('OCCUPANCY');

  // Stats calculation
  const totalBeds = useMemo(() => rooms.reduce((acc, r) => acc + r.totalBeds, 0), [rooms]);
  const occupiedBeds = useMemo(() => rooms.reduce((acc, r) => acc + (r.totalBeds - r.availableBeds), 0), [rooms]);
  const occupancyPercentage = totalBeds > 0 ? Math.round(occupiedBeds / totalBeds * 100) : 0;

  // New Expense form state
  const [newExpense, setNewExpense] = useState({
    title: '',
    category: 'Utilities',
    amount: ''
  });
  const handleAddExpense = e => {
    e.preventDefault();
    if (!newExpense.title || !newExpense.amount) return;
    const expObj = {
      id: Date.now(),
      title: newExpense.title,
      category: newExpense.category,
      amount: Number(newExpense.amount),
      date: new Date().toISOString().split('T')[0],
      status: 'Paid'
    };
    setExpenses([expObj, ...expenses]);
    setNewExpense({
      title: '',
      category: 'Utilities',
      amount: ''
    });
    showToast('New operational expense recorded.', 'success');
  };
  const handleSendBulkReminder = () => {
    showToast('Automated SMS & Push rent reminders sent to 4 overdue tenants!', 'success');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center text-xs font-bold text-slate-400"
  }, /*#__PURE__*/React.createElement("span", null, "REAL-TIME OCCUPANCY"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "pie-chart",
    className: "w-4 h-4 text-brand-600"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-black text-slate-900 dark:text-white"
  }, occupancyPercentage, "%"), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-brand-600 rounded-full",
    style: {
      width: `${occupancyPercentage}%`
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-500"
  }, occupiedBeds, " occupied / ", totalBeds, " total beds")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center text-xs font-bold text-slate-400"
  }, /*#__PURE__*/React.createElement("span", null, "MONTHLY RENTAL REVENUE"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "indian-rupee",
    className: "w-4 h-4 text-emerald-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-black text-emerald-600"
  }, "₹1,42,500"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-emerald-500 font-semibold"
  }, "↑ 12% vs last month")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center text-xs font-bold text-slate-400"
  }, /*#__PURE__*/React.createElement("span", null, "OPEN TICKETS"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wrench",
    className: "w-4 h-4 text-amber-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-black text-amber-500"
  }, tickets.filter(t => t.status !== 'Resolved').length), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-500"
  }, "Requires warden attention")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center text-xs font-bold text-slate-400"
  }, /*#__PURE__*/React.createElement("span", null, "OVERDUE DEFAULTERS"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "alert-circle",
    className: "w-4 h-4 text-rose-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-black text-rose-600"
  }, "2 Tenants"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSendBulkReminder,
    className: "text-[11px] font-bold text-brand-600 hover:underline"
  }, "Send Bulk Reminder SMS"))), /*#__PURE__*/React.createElement("div", {
    className: "flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto"
  }, [{
    id: 'OCCUPANCY',
    label: 'Occupancy Grid',
    icon: 'grid'
  }, {
    id: 'TENANTS',
    label: 'Tenant Directory',
    icon: 'users'
  }, {
    id: 'MAINTENANCE',
    label: 'Maintenance Hub',
    icon: 'wrench'
  }, {
    id: 'EXPENSES',
    label: 'Expense Tracker',
    icon: 'dollar-sign'
  }, {
    id: 'VISITORS',
    label: 'Visitor Log',
    icon: 'clipboard-list'
  }].map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.id,
    onClick: () => setActiveTab(tab.id),
    className: `pb-3 px-4 font-bold text-xs sm:text-sm transition border-b-2 flex items-center gap-2 whitespace-nowrap ${activeTab === tab.id ? 'border-brand-600 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": tab.icon,
    className: "w-4 h-4"
  }), tab.label))), activeTab === 'OCCUPANCY' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-900 dark:text-white"
  }, "Floor-by-Floor Bed Availability Matrix"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 text-xs font-semibold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-emerald-500"
  }), " Available"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-rose-500"
  }), " Occupied"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  }, rooms.map(room => /*#__PURE__*/React.createElement("div", {
    key: room.id,
    className: "bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-extrabold text-base text-slate-900 dark:text-white"
  }, "Room ", room.roomNumber), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-400 font-medium"
  }, "Floor ", room.floor, " • ", room.type)), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-brand-600"
  }, "₹", room.pricePerMonth, "/mo")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, room.beds.map(bed => /*#__PURE__*/React.createElement("div", {
    key: bed.id,
    className: `p-3 rounded-xl border text-xs flex flex-col justify-between space-y-2 ${bed.status === 'Occupied' ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200' : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "Bed ", bed.id), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] uppercase font-black"
  }, bed.status)), bed.status === 'Occupied' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-slate-800 dark:text-slate-100"
  }, bed.tenant), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500"
  }, bed.phone)) : /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-emerald-600 dark:text-emerald-400 font-bold"
  }, "Ready for Allotment")))))))), activeTab === 'TENANTS' && /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 border-b border-slate-200 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-900 dark:text-white"
  }, "Active Tenant Records & Lease Verification")), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left text-xs"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-slate-50 dark:bg-slate-800/80 text-slate-400 font-bold uppercase tracking-wider"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "p-4"
  }, "Tenant Name"), /*#__PURE__*/React.createElement("th", {
    className: "p-4"
  }, "Bed & Room"), /*#__PURE__*/React.createElement("th", {
    className: "p-4"
  }, "Phone Number"), /*#__PURE__*/React.createElement("th", {
    className: "p-4"
  }, "Joining Date"), /*#__PURE__*/React.createElement("th", {
    className: "p-4"
  }, "Rent Status"), /*#__PURE__*/React.createElement("th", {
    className: "p-4"
  }, "Actions"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-slate-100 dark:divide-slate-800"
  }, rooms.flatMap(r => r.beds.filter(b => b.status === 'Occupied').map(b => ({
    ...b,
    roomNumber: r.roomNumber
  }))).map((tenant, idx) => /*#__PURE__*/React.createElement("tr", {
    key: idx,
    className: "hover:bg-slate-50/50 dark:hover:bg-slate-800/50"
  }, /*#__PURE__*/React.createElement("td", {
    className: "p-4 font-bold text-slate-900 dark:text-white"
  }, tenant.tenant), /*#__PURE__*/React.createElement("td", {
    className: "p-4 font-medium text-slate-600 dark:text-slate-300"
  }, "Room ", tenant.roomNumber, " (", tenant.id, ")"), /*#__PURE__*/React.createElement("td", {
    className: "p-4 font-medium text-slate-600 dark:text-slate-300"
  }, tenant.phone), /*#__PURE__*/React.createElement("td", {
    className: "p-4 font-medium text-slate-600 dark:text-slate-300"
  }, tenant.joinDate), /*#__PURE__*/React.createElement("td", {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: `px-2.5 py-1 rounded-full text-[10px] font-extrabold ${tenant.paymentStatus === 'Paid' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`
  }, tenant.paymentStatus)), /*#__PURE__*/React.createElement("td", {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => showToast(`Lease document for ${tenant.tenant} downloaded.`, 'info'),
    className: "text-brand-600 font-bold hover:underline"
  }, "View Govt ID")))))))), activeTab === 'MAINTENANCE' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-900 dark:text-white"
  }, "Maintenance Operations & Ticket Resolution"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, tickets.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-extrabold text-sm text-slate-900 dark:text-white"
  }, t.id), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-500"
  }, "• ", t.tenant, " (Room ", t.room, ")")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-700 dark:text-slate-300 mt-1"
  }, t.description)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("select", {
    value: t.status,
    onChange: e => {
      const updated = tickets.map(item => item.id === t.id ? {
        ...item,
        status: e.target.value
      } : item);
      setTickets(updated);
      showToast(`Ticket ${t.id} status updated to ${e.target.value}`, 'success');
    },
    className: "bg-slate-100 dark:bg-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Pending"
  }, "Pending"), /*#__PURE__*/React.createElement("option", {
    value: "In Progress"
  }, "In Progress"), /*#__PURE__*/React.createElement("option", {
    value: "Resolved"
  }, "Resolved"))))))), activeTab === 'EXPENSES' && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-900 dark:text-white"
  }, "Record New Expense"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleAddExpense,
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Title"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "e.g. Water Tank Repair",
    value: newExpense.title,
    onChange: e => setNewExpense({
      ...newExpense,
      title: e.target.value
    }),
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-2.5 rounded-xl border",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Category"), /*#__PURE__*/React.createElement("select", {
    value: newExpense.category,
    onChange: e => setNewExpense({
      ...newExpense,
      category: e.target.value
    }),
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-2.5 rounded-xl border"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Utilities"
  }, "Utilities (Electricity/Water)"), /*#__PURE__*/React.createElement("option", {
    value: "Salaries"
  }, "Staff Salaries"), /*#__PURE__*/React.createElement("option", {
    value: "Repairs"
  }, "Repairs & Maintenance"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
  }, "Amount (₹)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: "5000",
    value: newExpense.amount,
    onChange: e => setNewExpense({
      ...newExpense,
      amount: e.target.value
    }),
    className: "w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-2.5 rounded-xl border",
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full py-2.5 bg-brand-600 text-white font-bold rounded-xl text-xs shadow-md"
  }, "Add Expense Record"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 space-y-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-900 dark:text-white"
  }, "Recent Operating Expenses"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, expenses.map(exp => /*#__PURE__*/React.createElement("div", {
    key: exp.id,
    className: "p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-slate-900 dark:text-white"
  }, exp.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-400"
  }, exp.category, " • ", exp.date)), /*#__PURE__*/React.createElement("span", {
    className: "font-black text-sm text-rose-600"
  }, "-₹", exp.amount.toLocaleString())))))), activeTab === 'VISITORS' && /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden space-y-4 p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-900 dark:text-white"
  }, "Visitor Entry Register"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const newV = {
        id: `V-${Date.now()}`,
        visitorName: 'Sunil Mehta',
        hostTenant: 'Rahul Verma',
        room: '102',
        relation: 'Friend',
        entryTime: 'Just Now',
        exitTime: 'Active inside',
        status: 'Checked In'
      };
      setVisitors([newV, ...visitors]);
      showToast('New visitor logged in register.', 'success');
    },
    className: "px-4 py-2 bg-brand-600 text-white text-xs font-bold rounded-xl"
  }, "+ Log Guest Entry")), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left text-xs"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-slate-50 dark:bg-slate-800/80 text-slate-400 font-bold uppercase"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "p-3"
  }, "Visitor Name"), /*#__PURE__*/React.createElement("th", {
    className: "p-3"
  }, "Host Tenant"), /*#__PURE__*/React.createElement("th", {
    className: "p-3"
  }, "Room"), /*#__PURE__*/React.createElement("th", {
    className: "p-3"
  }, "Entry Time"), /*#__PURE__*/React.createElement("th", {
    className: "p-3"
  }, "Exit Time"), /*#__PURE__*/React.createElement("th", {
    className: "p-3"
  }, "Status"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-slate-100 dark:divide-slate-800"
  }, visitors.map(v => /*#__PURE__*/React.createElement("tr", {
    key: v.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "p-3 font-bold text-slate-900 dark:text-white"
  }, v.visitorName, " (", v.relation, ")"), /*#__PURE__*/React.createElement("td", {
    className: "p-3 text-slate-600 dark:text-slate-300"
  }, v.hostTenant), /*#__PURE__*/React.createElement("td", {
    className: "p-3 text-slate-600 dark:text-slate-300"
  }, "Room ", v.room), /*#__PURE__*/React.createElement("td", {
    className: "p-3 text-slate-500"
  }, v.entryTime), /*#__PURE__*/React.createElement("td", {
    className: "p-3 text-slate-500"
  }, v.exitTime), /*#__PURE__*/React.createElement("td", {
    className: "p-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: `px-2 py-0.5 rounded text-[10px] font-extrabold ${v.status === 'Checked In' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-600'}`
  }, v.status)))))))));
}

// Render React App
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(/*#__PURE__*/React.createElement(App, null));
