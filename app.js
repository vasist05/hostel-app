const { useState, useEffect, useMemo } = React;

// --- INITIAL MOCK DATA ---
const INITIAL_ROOMS = [
  {
    id: 'R101',
    roomNumber: '101',
    floor: 1,
    type: 'three sharing',
    category: 'triple',
    ac: true,
    pricePerMonth: 12000,
    deposit: 15000,
    totalBeds: 3,
    availableBeds: 1,
    amenities: ['Private Balcony', 'Attached Bath', 'Study Desk', 'Ergonomic Chair', '1Gbps WiFi', 'Geyser'],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    beds: [
      { id: '101-A', status: 'Available', tenant: null }
    ]
  },
  {
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
    beds: [
      { id: '102-A', status: 'Occupied', tenant: 'Rahul Verma', phone: '+91 98765 43210', joinDate: '2026-01-10', paymentStatus: 'Paid' },
      { id: '102-B', status: 'Available', tenant: null }
    ]
  },
  {
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
    beds: [
      { id: '103-A', status: 'Occupied', tenant: 'Vikram Singh', phone: '+91 98111 22334', joinDate: '2025-11-15', paymentStatus: 'Overdue' },
      { id: '103-B', status: 'Occupied', tenant: 'Amit Sharma', phone: '+91 98222 33445', joinDate: '2026-02-01', paymentStatus: 'Paid' },
      { id: '103-C', status: 'Occupied', tenant: 'Karthik Raja', phone: '+91 98333 44556', joinDate: '2026-01-05', paymentStatus: 'Paid' }
    ]
  },
  {
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
    beds: [
      { id: '201-A', status: 'Occupied', tenant: 'Aarav Patel', phone: '+91 98444 55667', joinDate: '2026-03-01', paymentStatus: 'Paid' }
    ]
  },
  {
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
    beds: [
      { id: '202-A', status: 'Available', tenant: null },
      { id: '202-B', status: 'Available', tenant: null }
    ]
  },
  {
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
    beds: [
      { id: '301-A', status: 'Occupied', tenant: 'Siddharth Roy', phone: '+91 98555 66778', joinDate: '2026-01-20', paymentStatus: 'Paid' },
      { id: '301-B', status: 'Occupied', tenant: 'Deepak Kumar', phone: '+91 98666 77889', joinDate: '2026-02-12', paymentStatus: 'Overdue' },
      { id: '301-C', status: 'Available', tenant: null }
    ]
  },
  {
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
    beds: [
      { id: '401-A', status: 'Available', tenant: null }
    ]
  }
];

const WEEKLY_MENU = [
  { day: 'Monday', breakfast: 'Puri Bhaji / Idli Sambar + Tea/Coffee', lunch: 'Paneer Butter Masala, Dal Tadka, Roti, Rice, Salad', snack: 'Samosa / Biscuits + Tea', dinner: 'Aloo Gobi, Chana Dal, Rice, Chapati, Kheer' },
  { day: 'Tuesday', breakfast: 'Aloo Paratha with Curd / Toast', lunch: 'Rajma Masala, Jeera Rice, Chapati, Boondi Raita', snack: 'Veg Cutlet + Coffee', dinner: 'Egg Curry / Kadai Paneer, Yellow Dal, Chapati, Rice' },
  { day: 'Wednesday', breakfast: 'Masala Dosa / Vada + Chutney', lunch: 'Chicken Curry / Butter Paneer, Veg Biryani, Mirchi Salan', snack: 'Onion Pakoda + Tea', dinner: 'Mixed Veg, Dal Fry, Roti, Rice, Gulab Jamun' },
  { day: 'Thursday', breakfast: 'Poha / Uttapam + Coffee', lunch: 'Kadi Pakoda, Steamed Rice, Bhindi Fry, Chapati', snack: 'Bread Pakoda + Tea', dinner: 'Soyabean Masala, Dal Makhani, Roti, Rice, Ice Cream' },
  { day: 'Friday', breakfast: 'Chole Bhature / Upma', lunch: 'Dal Tadka, Sev Tamatar, Rice, Phulka, Butter Milk', snack: 'Maggi / French Fries + Coffee', dinner: 'Chicken Biryani / Veg Hyderabadi Biryani, Raita, Rasgulla' },
  { day: 'Saturday', breakfast: 'Pav Bhaji / Stuffed Paratha', lunch: 'Baingan Bharta, Chana Dal, Rice, Chapati, Salad', snack: 'Pav Vada + Tea', dinner: 'Paneer Do Pyaza, Dal Kolhapuri, Naan/Roti, Jeera Rice' },
  { day: 'Sunday', breakfast: 'Masala Omelette / Paneer Sandwich + Juice', lunch: 'Special Sunday Feast: Paneer Tikka Masala, Veg Pulao, Puri, Shrikhand', snack: 'Pastry / Cookies + Tea', dinner: 'Light Khichdi / Egg Bhurji, Chapti, Curd, Fruit Salad' }
];

const LANDMARKS = [
  { name: 'City Engineering College', distance: '1.2 km', time: '5 mins drive', category: 'Education', icon: 'graduation-cap' },
  { name: 'Global Tech Park (IT Hub)', distance: '2.5 km', time: '10 mins bus', category: 'Offices', icon: 'building' },
  { name: 'Central Metro Station', distance: '800 m', time: '8 mins walk', category: 'Transport', icon: 'train' },
  { name: 'Apollo Speciality Hospital', distance: '1.8 km', time: '7 mins drive', category: 'Healthcare', icon: 'activity' },
  { name: 'Phoenix Mega Mall', distance: '3.0 km', time: '12 mins drive', category: 'Shopping', icon: 'shopping-bag' }
];

const INITIAL_REVIEWS = [
  { id: 1, name: 'Ananya Deshmukh', room: 'Room 201 (Single AC)', rating: 5, date: 'Feb 2026', comment: 'Extremely clean hostel! High-speed WiFi made my remote work super smooth. High security and delicious Sunday meals.' },
  { id: 2, name: 'Rohan Mehta', room: 'Room 102 (Double Sharing)', rating: 4.8, date: 'Jan 2026', comment: 'The manager responds quickly to maintenance tickets. Washing area with 8 machines is super convenient.' },
  { id: 3, name: 'Praveen Kumar', room: 'Room 301 (Triple AC)', rating: 4.5, date: 'Dec 2025', comment: 'Great community vibe! landmark distances are exact; metro station is just a 8 min walk.' }
];

const INITIAL_NOTICES = [
  { id: 101, title: 'Annual Cultural Night & Dinner', date: '2026-08-20', category: 'Event', author: 'Hostel Committee', content: 'Join us in the Main Dining Hall for music, games, and a special buffet dinner starting at 7:00 PM.' },
  { id: 102, title: 'Scheduled Water Tank Cleaning', date: '2026-08-16', category: 'Maintenance', author: 'Manager Operations', content: 'Water supply will be temporarily paused from 10 AM to 1 PM this Saturday for deep tank sanitization.' },
  { id: 103, title: 'Mess Timings Update', date: '2026-08-10', category: 'Notice', author: 'Mess Warden', content: 'Breakfast now starts 15 minutes earlier at 7:30 AM to accommodate early college commuters.' }
];

const INITIAL_TICKETS = [
  { id: 'T-108', tenant: 'Rahul Verma', room: '102', category: 'Plumbing', priority: 'High', description: 'Bathroom geyser temperature knob broken.', status: 'In Progress', date: '2026-08-12', photo: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80' },
  { id: 'T-105', tenant: 'Vikram Singh', room: '103', category: 'WiFi', priority: 'Medium', description: 'Signal dropping in corner desk of Room 103.', status: 'Pending', date: '2026-08-13', photo: null },
  { id: 'T-099', tenant: 'Aarav Patel', room: '201', category: 'Electrical', priority: 'Low', description: 'Study lamp plug replacement needed.', status: 'Resolved', date: '2026-08-08', photo: null }
];

const INITIAL_EXPENSES = [
  { id: 1, title: 'Electricity Bill (July)', category: 'Utilities', amount: 42500, date: '2026-08-02', status: 'Paid' },
  { id: 2, title: 'Commercial Water Supply', category: 'Utilities', amount: 18200, date: '2026-08-05', status: 'Paid' },
  { id: 3, title: 'Staff Salaries (4 Wardens/Cleaners)', category: 'Salaries', amount: 85000, date: '2026-08-01', status: 'Paid' },
  { id: 4, title: 'Washing Machine Repair (Unit 3)', category: 'Repairs', amount: 3400, date: '2026-08-09', status: 'Paid' }
];

const STAFF_ROSTER = [
  { name: 'Ramesh Sharma', role: 'Chief Warden', shift: 'Day (8 AM - 6 PM)', phone: '+91 98999 11111', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
  { name: 'Sunita Devi', role: 'Head Mess Manager', shift: 'Morning & Evening', phone: '+91 98999 22222', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
  { name: 'Manoj Kumar', role: 'Security Supervisor', shift: 'Night (8 PM - 8 AM)', phone: '+91 98999 33333', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' }
];

const INITIAL_VISITORS = [
  { id: 'V-501', visitorName: 'Sanjay Verma', hostTenant: 'Rahul Verma', room: '102', relation: 'Father', entryTime: '2026-08-13 10:30 AM', exitTime: '2026-08-13 02:15 PM', status: 'Checked Out' },
  { id: 'V-502', visitorName: 'Anil Singh', hostTenant: 'Vikram Singh', room: '103', relation: 'Brother', entryTime: '2026-08-13 04:00 PM', exitTime: 'Active inside', status: 'Checked In' }
];

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
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-500 selection:text-white">
      {/* Top Notification Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 text-white transition-all transform animate-bounce ${toast.type === 'success' ? 'bg-emerald-600' : toast.type === 'error' ? 'bg-rose-600' : 'bg-brand-600'
          }`}>
          <i data-lucide={toast.type === 'success' ? 'check-circle' : toast.type === 'error' ? 'alert-triangle' : 'info'} className="w-5 h-5"></i>
          <span className="font-semibold text-sm">{toast.message}</span>
        </div>
      )}

      {/* SOS Emergency Modal */}
      {showSosModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 max-w-md w-full rounded-2xl shadow-2xl p-6 border border-rose-200 dark:border-rose-900">
            <div className="w-14 h-14 rounded-full bg-rose-100 dark:bg-rose-950 flex items-center justify-center mx-auto mb-4 text-rose-600">
              <i data-lucide="siren" className="w-8 h-8 animate-pulse"></i>
            </div>
            <h3 className="text-xl font-bold text-center text-rose-600 dark:text-rose-400 mb-2">Emergency SOS Triggered</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 text-center mb-6">
              Your location & room alert has been broadcasted immediately to Chief Warden Ramesh Sharma and the Security Desk.
            </p>
            <div className="bg-rose-50 dark:bg-rose-950/40 p-4 rounded-xl mb-6 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex justify-between font-semibold">
                <span>Security Desk Hotline:</span>
                <span className="text-rose-600">+91 98999 33333</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Hostel Warden:</span>
                <span className="text-rose-600">+91 98999 11111</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Medical Emergency:</span>
                <span className="text-rose-600">108</span>
              </div>
            </div>
            <button
              onClick={() => {
                setShowSosModal(false);
                showToast('Warden & Security team notified of SOS alert.', 'error');
              }}
              className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-lg transition"
            >
              Acknowledge & Dismiss Alert
            </button>
          </div>
        </div>
      )}

      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">

          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-brand-500/30">
              <i data-lucide="building-2" className="w-6 h-6"></i>
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                StayEase <span className="text-xs px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold border border-brand-200 dark:border-brand-800">Hostels</span>
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">Complete Management Suite</p>
            </div>
          </div>

          {/* DYNAMIC ROLE SWITCHER PILLS */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-x-auto max-w-full">
            <button
              onClick={() => setRole('PUBLIC_CUSTOMER')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${role === 'PUBLIC_CUSTOMER'
                ? 'bg-white dark:bg-brand-600 text-brand-600 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <i data-lucide="globe" className="w-3.5 h-3.5"></i>
              {t.roleCustomer}
            </button>
            <button
              onClick={() => setRole('NEW_JOINER')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${role === 'NEW_JOINER'
                ? 'bg-white dark:bg-brand-600 text-brand-600 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <i data-lucide="user-plus" className="w-3.5 h-3.5"></i>
              {t.roleNewJoiner}
            </button>
            <button
              onClick={() => setRole('TENANT')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${role === 'TENANT'
                ? 'bg-white dark:bg-brand-600 text-brand-600 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <i data-lucide="key" className="w-3.5 h-3.5"></i>
              {t.roleTenant}
            </button>
            <button
              onClick={() => setRole('MANAGER')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${role === 'MANAGER'
                ? 'bg-white dark:bg-brand-600 text-brand-600 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <i data-lucide="shield-check" className="w-3.5 h-3.5"></i>
              {t.roleManager}
            </button>
          </div>

          {/* Right Actions: SOS + Language + Dark Mode */}
          <div className="flex items-center gap-2">
            {role === 'TENANT' && (
              <button
                onClick={() => setShowSosModal(true)}
                className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-md shadow-rose-600/30 transition animate-pulse"
              >
                <i data-lucide="siren" className="w-3.5 h-3.5"></i>
                {t.sosButton}
              </button>
            )}

            {/* Language Selector */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
            >
              <option value="en">English (EN)</option>
              <option value="hi">हिंदी (HI)</option>
              <option value="ta">தமிழ் (TA)</option>
            </select>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title="Toggle Theme"
            >
              <i data-lucide={darkMode ? 'sun' : 'moon'} className="w-4 h-4"></i>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN VIEW CONTENT CONTAINER BASED ON ACTIVE ROLE */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {role === 'PUBLIC_CUSTOMER' && (
          <PublicCustomerView
            rooms={rooms}
            weeklyMenu={WEEKLY_MENU}
            landmarks={LANDMARKS}
            reviews={reviews}
            onAddReview={(newRev) => {
              setReviews([newRev, ...reviews]);
              showToast('Thank you! Your review has been published.', 'success');
            }}
            showToast={showToast}
            t={t}
          />
        )}

        {role === 'NEW_JOINER' && (
          <NewJoinerPortalView
            rooms={rooms}
            showToast={showToast}
            onBookingCreated={(booking) => {
              showToast(`Booking submitted! Your Booking ID is ${booking.id}`, 'success');
            }}
          />
        )}

        {role === 'TENANT' && (
          <TenantPortalView
            rooms={rooms}
            tickets={tickets}
            notices={notices}
            onAddTicket={(ticket) => {
              setTickets([ticket, ...tickets]);
              showToast('Maintenance ticket submitted to management!', 'success');
            }}
            showToast={showToast}
          />
        )}

        {role === 'MANAGER' && (
          <ManagerDashboardView
            rooms={rooms}
            setRooms={setRooms}
            tickets={tickets}
            setTickets={setTickets}
            expenses={expenses}
            setExpenses={setExpenses}
            visitors={visitors}
            setVisitors={setVisitors}
            staff={STAFF_ROSTER}
            showToast={showToast}
          />
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12 py-8 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold">S</div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">StayEase Hostel Management System</span>
            <span>&copy; 2026</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-600">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600">Terms of Service</a>
            <a href="#" className="hover:text-brand-600">Contact Warden</a>
            <a href="#" className="hover:text-brand-600">Hostel Rules</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ----------------------------------------------------------------------
// 1. PUBLIC / CUSTOMER VIEW MODULE
// ----------------------------------------------------------------------
function PublicCustomerView({ rooms, weeklyMenu, landmarks, reviews, onAddReview, showToast, t }) {
  const [selectedFloor, setSelectedFloor] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [acOnly, setAcOnly] = useState(false);
  const [compareRooms, setCompareRooms] = useState([]);
  const [showCalculator, setShowCalculator] = useState(false);
  const [activeMenuDay, setActiveMenuDay] = useState('Monday');

  // Filtered rooms calculation
  const filteredRooms = useMemo(() => {
    return rooms.filter((r) => {
      if (selectedFloor !== 'ALL' && r.floor !== Number(selectedFloor)) return false;
      if (selectedCategory !== 'ALL' && r.category !== selectedCategory) return false;
      if (acOnly && !r.ac) return false;
      return true;
    });
  }, [rooms, selectedFloor, selectedCategory, acOnly]);

  const toggleCompare = (room) => {
    if (compareRooms.some((r) => r.id === room.id)) {
      setCompareRooms(compareRooms.filter((r) => r.id !== room.id));
    } else {
      if (compareRooms.length >= 3) {
        showToast('You can compare a maximum of 3 rooms side-by-side.', 'error');
        return;
      }
      setCompareRooms([...compareRooms, room]);
    }
  };

  return (
    <div className="space-y-10">
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-12 shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold border border-brand-400/30">
            <i data-lucide="sparkles" className="w-3.5 h-3.5"></i>
            Premium Student & Professional Residence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#rooms-section"
              className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-brand-500/40 transition flex items-center gap-2"
            >
              <i data-lucide="search" className="w-4 h-4"></i>
              {t.exploreRooms}
            </a>
            <button
              onClick={() => setShowCalculator(true)}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-sm backdrop-blur-md border border-white/20 transition flex items-center gap-2"
            >
              <i data-lucide="calculator" className="w-4 h-4"></i>
              {t.calculateFee}
            </button>
          </div>
        </div>

        {/* Stats Grid overlay */}
        <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-2xl font-black text-brand-300">4</div>
            <div className="text-xs text-slate-400 font-medium">{t.totalFloors}</div>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-2xl font-black text-emerald-400">120+</div>
            <div className="text-xs text-slate-400 font-medium">{t.totalBeds}</div>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-2xl font-black text-amber-300">8 Units</div>
            <div className="text-xs text-slate-400 font-medium">{t.washingMachines}</div>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-2xl font-black text-indigo-300">1 Gbps</div>
            <div className="text-xs text-slate-400 font-medium">Fiber WiFi</div>
          </div>
        </div>
      </div>

      {/* ROOM LISTINGS SECTION */}
      <section id="rooms-section" className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <i data-lucide="bed-double" className="w-6 h-6 text-brand-600"></i>
              Available Rooms & Vacancies
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Filter by floor, room type, or AC amenities</p>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <select
              value={selectedFloor}
              onChange={(e) => setSelectedFloor(e.target.value)}
              className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <option value="ALL">All Floors (1 to 4)</option>
              <option value="1">Floor 1</option>
              <option value="2">Floor 2</option>
              <option value="3">Floor 3</option>
              <option value="4">Floor 4</option>
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <option value="ALL">All Room Types</option>
              <option value="Single">Single Sharing</option>
              <option value="Double">Double Sharing</option>
              <option value="Triple">Triple Sharing</option>
            </select>

            <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 px-2 cursor-pointer">
              <input
                type="checkbox"
                checked={acOnly}
                onChange={(e) => setAcOnly(e.target.checked)}
                className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4"
              />
              AC Only
            </label>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => {
            const isCompared = compareRooms.some((r) => r.id === room.id);
            return (
              <div
                key={room.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.type}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-900/80 text-white backdrop-blur-md">
                        Floor {room.floor}
                      </span>
                      {room.ac && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-sky-500/90 text-white backdrop-blur-md flex items-center gap-1">
                          <i data-lucide="wind" className="w-3 h-3"></i> AC
                        </span>
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-extrabold backdrop-blur-md ${room.availableBeds > 0
                        ? 'bg-emerald-500/90 text-white'
                        : 'bg-rose-500/90 text-white'
                        }`}>
                        {room.availableBeds > 0 ? `${room.availableBeds} Vacant Bed(s)` : 'Fully Occupied'}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">Room {room.roomNumber}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{room.type}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-black text-brand-600 dark:text-brand-400">₹{room.pricePerMonth.toLocaleString()}</span>
                        <span className="text-xs text-slate-400 font-medium"> / mo</span>
                      </div>
                    </div>

                    {/* Amenities Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {room.amenities.map((am, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300">
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 mt-4">
                  <button
                    onClick={() => toggleCompare(room)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 border ${isCompared
                      ? 'bg-brand-50 border-brand-300 text-brand-700 dark:bg-brand-950 dark:border-brand-800 dark:text-brand-300'
                      : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                  >
                    <i data-lucide={isCompared ? 'check-square' : 'columns'} className="w-3.5 h-3.5"></i>
                    {isCompared ? 'Comparing' : 'Compare'}
                  </button>
                  <a
                    href="#calculator-section"
                    onClick={() => setShowCalculator(true)}
                    className="flex-1 py-2 px-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold text-center transition"
                  >
                    Calculate Cost
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SIDE-BY-SIDE ROOM COMPARISON DRAWER */}
      {compareRooms.length > 0 && (
        <div className="bg-brand-900 text-white rounded-3xl p-6 shadow-2xl border border-brand-700 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <i data-lucide="columns" className="w-5 h-5 text-brand-300"></i>
              <h3 className="text-lg font-bold">Side-by-Side Room Comparison ({compareRooms.length}/3)</h3>
            </div>
            <button
              onClick={() => setCompareRooms([])}
              className="text-xs text-brand-300 hover:text-white underline font-semibold"
            >
              Clear Comparison
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {compareRooms.map((r) => (
              <div key={r.id} className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="font-extrabold text-base">Room {r.roomNumber} ({r.type})</h4>
                  <button onClick={() => toggleCompare(r)} className="text-slate-400 hover:text-white">
                    <i data-lucide="x" className="w-4 h-4"></i>
                  </button>
                </div>
                <div className="text-2xl font-black text-brand-300">₹{r.pricePerMonth.toLocaleString()} <span className="text-xs font-normal text-slate-300">/ mo</span></div>
                <div className="text-xs space-y-1 text-slate-200">
                  <div><strong>Floor:</strong> Floor {r.floor}</div>
                  <div><strong>Security Deposit:</strong> ₹{r.deposit.toLocaleString()}</div>
                  <div><strong>Beds Available:</strong> {r.availableBeds} of {r.totalBeds}</div>
                  <div><strong>AC:</strong> {r.ac ? 'Yes (Split AC)' : 'No (Ceiling Fan)'}</div>
                </div>
                <div className="pt-2">
                  <div className="text-xs font-semibold mb-1 text-slate-300">Amenities:</div>
                  <ul className="text-[11px] list-disc list-inside space-y-0.5 text-slate-200">
                    {r.amenities.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AMENITIES & MESS MENU SHOWCASE */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hostel Amenities */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-2xl">
              <i data-lucide="coffee" className="w-6 h-6"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Hostel Amenities & Hygiene</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Everything designed for comfortable living</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <div className="text-brand-600 dark:text-brand-400 flex items-center gap-2 font-bold text-sm">
                <i data-lucide="utensils" className="w-4 h-4"></i> Dining Hall
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">Spacious 150-seater mess with daily sanitized tables & fresh meals.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <div className="text-brand-600 dark:text-brand-400 flex items-center gap-2 font-bold text-sm">
                <i data-lucide="shirt" className="w-4 h-4"></i> Washing & Drying
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">8 Heavy-duty Front Load Machines + Rooftop Solar Drying Deck.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <div className="text-brand-600 dark:text-brand-400 flex items-center gap-2 font-bold text-sm">
                <i data-lucide="wifi" className="w-4 h-4"></i> High-Speed WiFi
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">Dedicated mesh routers on every floor with 1 Gbps fiber backup.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <div className="text-brand-600 dark:text-brand-400 flex items-center gap-2 font-bold text-sm">
                <i data-lucide="shield" className="w-4 h-4"></i> 24/7 Security
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">CCTV cameras, biometric entry & resident night security wardens.</p>
            </div>
          </div>
        </div>

        {/* Weekly Mess Menu Schedule */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-100 dark:bg-amber-950 text-amber-600 rounded-2xl">
                  <i data-lucide="calendar" className="w-6 h-6"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Weekly Food Menu</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Nutritious, hygienic & rotated weekly</p>
                </div>
              </div>
            </div>

            {/* Day Selector Tabs */}
            <div className="flex gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
              {weeklyMenu.map((m) => (
                <button
                  key={m.day}
                  onClick={() => setActiveMenuDay(m.day)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${activeMenuDay === m.day
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                >
                  {m.day.substring(0, 3)}
                </button>
              ))}
            </div>

            {/* Selected Day Meals */}
            {(() => {
              const currentMeal = weeklyMenu.find((m) => m.day === activeMenuDay);
              return (
                <div className="mt-4 space-y-3">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
                    <span className="text-[11px] font-bold text-brand-600 uppercase tracking-wider">Breakfast (7:30 AM - 9:30 AM)</span>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">{currentMeal.breakfast}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Lunch (12:30 PM - 2:30 PM)</span>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">{currentMeal.lunch}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
                    <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">Evening Snacks (5:00 PM - 6:00 PM)</span>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">{currentMeal.snack}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Dinner (8:00 PM - 10:00 PM)</span>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">{currentMeal.dinner}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* NEARBY LANDMARKS & MAP SECTION */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <i data-lucide="map-pin" className="w-6 h-6 text-rose-500"></i>
            Nearby Landmarks & Transport Accessibility
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Conveniently located near top universities, IT hubs, and transit centers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {landmarks.map((lm, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-3">
                <div className="p-3 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 font-bold">
                  <i data-lucide={lm.icon} className="w-5 h-5"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{lm.name}</h4>
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold">{lm.category}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2">
                    <span className="flex items-center gap-1"><i data-lucide="navigation" className="w-3 h-3"></i> {lm.distance}</span>
                    <span className="flex items-center gap-1"><i data-lucide="clock" className="w-3 h-3"></i> {lm.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Map Visual Mock */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg animate-bounce mb-3">
              <i data-lucide="map-pin" className="w-8 h-8"></i>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">StayEase Hostel Main Gate</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Plot 42, University Road, Sector 5</p>
            <button
              onClick={() => showToast('Redirecting to Google Maps live navigation...', 'info')}
              className="mt-4 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-bold hover:opacity-90 transition"
            >
              Open in Google Maps
            </button>
          </div>
        </div>
      </section>

      {/* FEE CALCULATOR MODAL / SECTION */}
      {showCalculator && (
        <FeeCalculatorModal
          rooms={rooms}
          onClose={() => setShowCalculator(false)}
        />
      )}

      {/* REVIEWS & TENANT TESTIMONIALS */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <i data-lucide="star" className="w-6 h-6 text-amber-400 fill-amber-400"></i>
              Reviews from Past & Current Tenants
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Transparent feedback before you book your bed</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} data-lucide="star" className={`w-4 h-4 ${i < Math.floor(rev.rating) ? 'fill-amber-400' : 'text-slate-300'}`}></i>
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-400">{rev.date}</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">"{rev.comment}"</p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <p className="font-bold text-sm text-slate-900 dark:text-white">{rev.name}</p>
                <p className="text-[11px] text-brand-600 dark:text-brand-400 font-semibold">{rev.room}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ----------------------------------------------------------------------
// FEE CALCULATOR MODAL COMPONENT
// ----------------------------------------------------------------------
function FeeCalculatorModal({ rooms, onClose }) {
  const [selectedRoomId, setSelectedRoomId] = useState(rooms[0]?.id || '');
  const [durationMonths, setDurationMonths] = useState(6);
  const [includeLaundry, setIncludeLaundry] = useState(true);

  const selectedRoom = rooms.find((r) => r.id === selectedRoomId) || rooms[0];

  const monthlyBase = selectedRoom ? selectedRoom.pricePerMonth : 0;
  const deposit = selectedRoom ? selectedRoom.deposit : 0;
  const laundryFee = includeLaundry ? 500 : 0;

  const totalRent = (monthlyBase + laundryFee) * durationMonths;
  const grandTotalAtJoin = totalRent + deposit;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 max-w-lg w-full rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i data-lucide="calculator" className="w-6 h-6 text-brand-600"></i>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Fee & Deposit Estimator</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white">
            <i data-lucide="x" className="w-5 h-5"></i>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Select Room Type</label>
            <select
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
            >
              {rooms.map((r) => (
                <option key={r.id} value={r.id}>
                  Room {r.roomNumber} - {r.type} (₹{r.pricePerMonth.toLocaleString()}/mo)
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              <span>Duration of Stay</span>
              <span className="text-brand-600">{durationMonths} Months</span>
            </div>
            <input
              type="range"
              min="1"
              max="12"
              value={durationMonths}
              onChange={(e) => setDurationMonths(Number(e.target.value))}
              className="w-full accent-brand-600"
            />
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i data-lucide="shirt" className="w-4 h-4 text-brand-600"></i>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Unlimited Laundry Add-on</span>
            </div>
            <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
              <input
                type="checkbox"
                checked={includeLaundry}
                onChange={(e) => setIncludeLaundry(e.target.checked)}
                className="rounded text-brand-600 focus:ring-brand-500"
              />
              +₹500/mo
            </label>
          </div>

          {/* Breakdown Box */}
          <div className="bg-brand-50 dark:bg-brand-950/50 p-4 rounded-2xl border border-brand-200 dark:border-brand-800 space-y-2 text-xs">
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Monthly Rent (x{durationMonths}):</span>
              <span className="font-bold">₹{(monthlyBase * durationMonths).toLocaleString()}</span>
            </div>
            {includeLaundry && (
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Laundry Charges (x{durationMonths}):</span>
                <span className="font-bold">₹{(500 * durationMonths).toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Refundable Security Deposit:</span>
              <span className="font-bold">₹{deposit.toLocaleString()}</span>
            </div>
            <div className="pt-2 border-t border-brand-200 dark:border-brand-800 flex justify-between font-extrabold text-sm text-brand-700 dark:text-brand-300">
              <span>Total Payment at Joining:</span>
              <span>₹{grandTotalAtJoin.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-sm transition"
        >
          Done / Close Calculator
        </button>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2. NEW JOINER PORTAL VIEW MODULE
// ----------------------------------------------------------------------
function NewJoinerPortalView({ rooms, showToast, onBookingCreated }) {
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

  const tourImages = [
    { title: 'Deluxe Single Bedroom', category: 'Rooms', img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80' },
    { title: 'Double Sharing AC Room', category: 'Rooms', img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80' },
    { title: 'Main Dining Hall', category: 'Mess', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80' },
    { title: 'Community Study Lounge', category: 'Lounge', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80' },
    { title: 'Automated Laundry Station', category: 'Laundry', img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=600&q=80' }
  ];

  const handleApplicationSubmit = (e) => {
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

  const handleTrackBooking = (e) => {
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

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-brand-600 to-indigo-800 text-white rounded-3xl p-8 shadow-xl space-y-3">
        <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold border border-white/30 inline-block">
          New Joiner & Admissions Portal
        </span>
        <h2 className="text-3xl font-extrabold">Join the StayEase Community</h2>
        <p className="text-xs sm:text-sm text-indigo-100">
          Apply online, complete digital ID verification, pay advance security deposit, and track your booking status.
        </p>
      </div>

      {/* STEP TABS */}
      <div className="flex border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setStep(1)}
          className={`pb-3 px-4 font-bold text-xs sm:text-sm transition border-b-2 flex items-center gap-2 ${step === 1
            ? 'border-brand-600 text-brand-600 dark:text-brand-400'
            : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
        >
          <i data-lucide="image" className="w-4 h-4"></i> 1. Virtual Hostel Tour
        </button>
        <button
          onClick={() => setStep(2)}
          className={`pb-3 px-4 font-bold text-xs sm:text-sm transition border-b-2 flex items-center gap-2 ${step === 2
            ? 'border-brand-600 text-brand-600 dark:text-brand-400'
            : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
        >
          <i data-lucide="file-text" className="w-4 h-4"></i> 2. Digital Application
        </button>
        <button
          onClick={() => setStep(3)}
          className={`pb-3 px-4 font-bold text-xs sm:text-sm transition border-b-2 flex items-center gap-2 ${step === 3
            ? 'border-brand-600 text-brand-600 dark:text-brand-400'
            : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
        >
          <i data-lucide="activity" className="w-4 h-4"></i> 3. Booking Status Tracker
        </button>
      </div>

      {/* STEP 1: VIRTUAL TOUR */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Virtual Hostel Tour & Photo Gallery</h3>
            <div className="flex gap-2">
              {['ALL', 'Rooms', 'Mess', 'Lounge', 'Laundry'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setTourCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition ${tourCategory === cat
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tourImages
              .filter((item) => tourCategory === 'ALL' || item.category === tourCategory)
              .map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 p-3">
                  <div className="h-44 rounded-xl overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-200">{item.title}</span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-600">{item.category}</span>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setStep(2)}
              className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-sm shadow-lg transition inline-flex items-center gap-2"
            >
              Proceed to Application Form <i data-lucide="arrow-right" className="w-4 h-4"></i>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: DIGITAL APPLICATION FORM */}
      {step === 2 && (
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Digital Admission & ID Verification</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Fill in details and lock your room allotment</p>
          </div>

          <form onSubmit={handleApplicationSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name (As per Govt ID)</label>
              <input
                type="text"
                placeholder="e.g. Rahul Verma"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Mobile Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Parent / Guardian Phone</label>
                <input
                  type="tel"
                  placeholder="+91 98111 22334"
                  value={formData.emergencyContact}
                  onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Select Room Preference</label>
                <select
                  value={formData.selectedRoomId}
                  onChange={(e) => setFormData({ ...formData, selectedRoomId: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  {rooms.map((r) => (
                    <option key={r.id} value={r.id}>
                      Room {r.roomNumber} ({r.type})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Document Upload Simulation */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <i data-lucide="file-check" className="w-6 h-6 text-brand-600"></i>
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Govt ID Proof (Aadhaar / Passport)</div>
                  <div className="text-[11px] text-slate-400">{formData.idProofName}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => showToast('ID Document attached successfully.', 'info')}
                className="px-3 py-1.5 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-600"
              >
                Change File
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-sm shadow-lg transition flex items-center justify-center gap-2"
            >
              <i data-lucide="credit-card" className="w-4 h-4"></i> Proceed to Advance Deposit Payment
            </button>
          </form>
        </div>
      )}

      {/* RAZORPAY PAYMENT SIMULATION MODAL */}
      {showRazorpayModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 max-w-md w-full rounded-3xl shadow-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black flex items-center justify-center text-xs">R</div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">Razorpay Secure Gateway</h4>
                  <p className="text-[10px] text-slate-400">Order ID: ORD-992031</p>
                </div>
              </div>
              <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-1 rounded">256-bit Encrypted</span>
            </div>

            <div className="space-y-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl text-xs">
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Advance Rent (1 Month):</span>
                <span className="font-bold">₹8,500</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Refundable Deposit:</span>
                <span className="font-bold">₹10,000</span>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-black text-sm text-slate-900 dark:text-white">
                <span>Total Payable Now:</span>
                <span className="text-brand-600">₹18,500</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handlePaymentSuccess}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-lg transition flex items-center justify-center gap-2"
              >
                <i data-lucide="check-circle" className="w-4 h-4"></i> Pay ₹18,500 via UPI / Card / NetBanking
              </button>
              <button
                onClick={() => setShowRazorpayModal(false)}
                className="w-full py-2 text-xs font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              >
                Cancel Transaction
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: BOOKING STATUS TRACKER */}
      {step === 3 && (
        <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Track Admission & Booking Status</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Enter your 6-digit Booking Reference ID</p>
          </div>

          <form onSubmit={handleTrackBooking} className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. BK-8902"
              value={searchBookingId}
              onChange={(e) => setSearchBookingId(e.target.value)}
              className="flex-1 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold p-3 rounded-xl border border-slate-200 dark:border-slate-700"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs shadow-md"
            >
              Track Status
            </button>
          </form>

          {bookingStatusResult && (
            <div className="bg-slate-50 dark:bg-slate-800/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-400 font-bold">BOOKING ID</span>
                  <div className="text-lg font-black text-brand-600">{bookingStatusResult.id}</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 text-xs font-extrabold">
                  {bookingStatusResult.status}
                </span>
              </div>

              {/* Progress Pipeline */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-[11px] font-bold text-slate-500">
                  <span className="text-emerald-600">✓ Form Submitted</span>
                  <span className="text-emerald-600">✓ Deposit Paid</span>
                  <span className="text-brand-600">● Bed Allotted</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-brand-600 rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------
// 3. TENANT PORTAL VIEW MODULE
// ----------------------------------------------------------------------
function TenantPortalView({ rooms, tickets, notices, onAddTicket, showToast }) {
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

  const handleTicketSubmit = (e) => {
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
    setNewTicket({ category: 'Plumbing', priority: 'Medium', description: '' });
  };

  return (
    <div className="space-y-8">
      {/* TENANT HEADER CARD */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-brand-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-black text-2xl shadow-lg border-2 border-brand-400">
            RV
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-extrabold">{tenantInfo.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-400/30">
                Active Tenant
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1">{tenantInfo.room} • Join Date: Jan 10, 2026</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/10 text-right">
            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider block">Next Rent Due</span>
            <span className="text-base font-extrabold text-brand-300">Sept 05, 2026 (₹8,500)</span>
          </div>

          <button
            onClick={() => showToast('Rent payment portal opened. ₹8,500 paid successfully!', 'success')}
            className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-extrabold shadow-lg transition"
          >
            Pay Rent Now
          </button>
        </div>
      </div>

      {/* TENANT NAVIGATION TABS */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
        {[
          { id: 'DASHBOARD', label: 'My Dashboard', icon: 'layout-dashboard' },
          { id: 'MAINTENANCE', label: 'Maintenance Requests', icon: 'wrench' },
          { id: 'NOTICES', label: 'Community Board', icon: 'bell' },
          { id: 'DIGITAL_ID', label: 'Digital ID Card', icon: 'qr-code' },
          { id: 'SPLIT_BILL', label: 'Split-Bill', icon: 'receipt' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 px-4 font-bold text-xs sm:text-sm transition border-b-2 flex items-center gap-2 whitespace-nowrap ${activeTab === tab.id
              ? 'border-brand-600 text-brand-600 dark:text-brand-400'
              : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
          >
            <i data-lucide={tab.icon} className="w-4 h-4"></i>
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. TENANT DASHBOARD TAB */}
      {activeTab === 'DASHBOARD' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                <span>QUICK ACTIONS</span>
                <i data-lucide="zap" className="w-4 h-4 text-amber-500"></i>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => setShowSwapModal(true)}
                  className="w-full py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-brand-50 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold text-left transition flex items-center justify-between"
                >
                  <span>Request Roommate / Room Swap</span>
                  <i data-lucide="arrow-right-left" className="w-3.5 h-3.5 text-brand-600"></i>
                </button>

                <button
                  onClick={() => setShowLeaveModal(true)}
                  className="w-full py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-brand-50 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold text-left transition flex items-center justify-between"
                >
                  <span>Outstation / Leave Notice</span>
                  <i data-lucide="plane-departure" className="w-3.5 h-3.5 text-brand-600"></i>
                </button>
              </div>
            </div>

            {/* Recent Notices Preview */}
            <div className="md:col-span-2 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <i data-lucide="megaphone" className="w-4 h-4 text-brand-600"></i> Latest Hostel Announcement
                </h3>
                <button onClick={() => setActiveTab('NOTICES')} className="text-xs text-brand-600 font-bold hover:underline">
                  View All
                </button>
              </div>
              {notices[0] && (
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-900 dark:text-white">{notices[0].title}</span>
                    <span className="text-slate-400">{notices[0].date}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{notices[0].content}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. MAINTENANCE REQUESTS TAB */}
      {activeTab === 'MAINTENANCE' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Submit New Ticket */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <i data-lucide="plus-circle" className="w-5 h-5 text-brand-600"></i> Submit Maintenance Ticket
            </h3>

            <form onSubmit={handleTicketSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Issue Category</label>
                <select
                  value={newTicket.category}
                  onChange={(e) => setNewTicket({ ...newTicket, category: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <option value="Plumbing">Plumbing / Water</option>
                  <option value="Electrical">Electrical / Light</option>
                  <option value="WiFi">WiFi & Internet</option>
                  <option value="Cleaning">Housekeeping & Cleaning</option>
                  <option value="Furniture">Bed / Furniture Repair</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Priority</label>
                <select
                  value={newTicket.priority}
                  onChange={(e) => setNewTicket({ ...newTicket, priority: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <option value="Low">Low Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="High">Urgent / High Priority</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Issue Description</label>
                <textarea
                  rows="3"
                  placeholder="Describe the issue in detail..."
                  value={newTicket.description}
                  onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
                  required
                ></textarea>
              </div>

              {/* Photo Upload Simulation */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Attach photo mock</span>
                <button
                  type="button"
                  onClick={() => showToast('Sample image attached to ticket.', 'info')}
                  className="px-2.5 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-bold border"
                >
                  Upload Photo
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs transition shadow-md"
              >
                Submit Ticket
              </button>
            </form>
          </div>

          {/* Ticket Pipeline Status List */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Your Maintenance History</h3>

            <div className="space-y-3">
              {tickets.map((t) => (
                <div key={t.id} className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-slate-900 dark:text-white">{t.id}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {t.category}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${t.priority === 'High' ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-600'
                        }`}>
                        {t.priority} Priority
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{t.description}</p>
                    <p className="text-[10px] text-slate-400">Date: {t.date} • Room {t.room}</p>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${t.status === 'Resolved' ? 'bg-emerald-100 text-emerald-600' : t.status === 'In Progress' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. COMMUNITY BOARD TAB */}
      {activeTab === 'NOTICES' && (
        <div className="space-y-4 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Community Notices & Events</h3>
          <div className="space-y-4">
            {notices.map((n) => (
              <div key={n.id} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 text-xs font-extrabold">
                    {n.category}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{n.date}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{n.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{n.content}</p>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-400">
                  <span>Posted by: {n.author}</span>
                  <button onClick={() => showToast('RSVP confirmed for event!', 'success')} className="text-brand-600 font-bold hover:underline">
                    RSVP / Interested
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. DIGITAL ID CARD TAB */}
      {activeTab === 'DIGITAL_ID' && (
        <div className="max-w-md mx-auto bg-gradient-to-b from-brand-900 to-indigo-950 text-white rounded-3xl p-8 shadow-2xl border border-brand-700 space-y-6 text-center">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <span className="text-xs font-extrabold tracking-widest uppercase text-brand-300">DIGITAL TENANT ID</span>
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">VERIFIED</span>
          </div>

          <div className="w-24 h-24 rounded-full bg-white/10 border-4 border-brand-400 mx-auto flex items-center justify-center font-black text-3xl">
            RV
          </div>

          <div>
            <h3 className="text-2xl font-black">{tenantInfo.name}</h3>
            <p className="text-xs text-brand-200 mt-1">{tenantInfo.room}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">ID: ST-2026-88102</p>
          </div>

          {/* QR Code Graphic Mock */}
          <div className="bg-white p-4 rounded-2xl inline-block mx-auto shadow-inner">
            <div className="w-36 h-36 bg-slate-900 rounded-xl flex flex-col items-center justify-center text-white p-2">
              <i data-lucide="qr-code" className="w-24 h-24"></i>
              <span className="text-[9px] text-slate-400 font-mono">Scan for Hostel Entry</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-300 italic">Show this QR code to the gate biometric scanner for automatic check-in/check-out.</p>
        </div>
      )}

      {/* 5. SPLIT-BILL TAB */}
      {activeTab === 'SPLIT_BILL' && (
        <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Roommate Split-Bill Calculator</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Easily split food orders, extra groceries, or internet add-ons</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Expense Title</label>
              <input type="text" defaultValue="Midnight Pizza Party Order" className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Total Bill (₹)</label>
                <input type="number" defaultValue="1200" className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Split Among</label>
                <select className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                  <option value="2">2 Roommates (₹600 each)</option>
                  <option value="3">3 Roommates (₹400 each)</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => showToast('Split-bill request sent to roommates via UPI link!', 'success')}
              className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs shadow-md transition"
            >
              Send Split Request to Roommates
            </button>
          </div>
        </div>
      )}

      {/* SWAP MODAL */}
      {showSwapModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 max-w-md w-full rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white">Request Room Swap</h4>
            <textarea placeholder="Specify reason for room swap..." rows="3" className="w-full p-3 bg-slate-50 dark:bg-slate-800 text-xs rounded-xl border"></textarea>
            <div className="flex gap-2">
              <button onClick={() => { setShowSwapModal(false); showToast('Swap request submitted to Manager.', 'info'); }} className="flex-1 py-2.5 bg-brand-600 text-white font-bold text-xs rounded-xl">Submit Request</button>
              <button onClick={() => setShowSwapModal(false)} className="py-2.5 px-4 bg-slate-100 dark:bg-slate-800 text-xs font-bold rounded-xl">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* LEAVE NOTICE MODAL */}
      {showLeaveModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 max-w-md w-full rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white">Outstation / Leave Notice</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="block font-bold mb-1">From Date</label>
                <input type="date" className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded-xl" />
              </div>
              <div>
                <label className="block font-bold mb-1">To Date</label>
                <input type="date" className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded-xl" />
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => { setShowLeaveModal(false); showToast('Leave notice recorded! Mess meal count updated.', 'success'); }} className="flex-1 py-2.5 bg-brand-600 text-white font-bold text-xs rounded-xl">Confirm Leave Notice</button>
              <button onClick={() => setShowLeaveModal(false)} className="py-2.5 px-4 bg-slate-100 dark:bg-slate-800 text-xs font-bold rounded-xl">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------
// 4. MANAGER & ADMIN DASHBOARD VIEW MODULE
// ----------------------------------------------------------------------
function ManagerDashboardView({ rooms, setRooms, tickets, setTickets, expenses, setExpenses, visitors, setVisitors, staff, showToast }) {
  const [activeTab, setActiveTab] = useState('OCCUPANCY');

  // Stats calculation
  const totalBeds = useMemo(() => rooms.reduce((acc, r) => acc + r.totalBeds, 0), [rooms]);
  const occupiedBeds = useMemo(() => rooms.reduce((acc, r) => acc + (r.totalBeds - r.availableBeds), 0), [rooms]);
  const occupancyPercentage = Math.round((occupiedBeds / totalBeds) * 100);

  // New Expense form state
  const [newExpense, setNewExpense] = useState({ title: '', category: 'Utilities', amount: '' });

  const handleAddExpense = (e) => {
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
    setNewExpense({ title: '', category: 'Utilities', amount: '' });
    showToast('New operational expense recorded.', 'success');
  };

  const handleSendBulkReminder = () => {
    showToast('Automated SMS & Push rent reminders sent to 4 overdue tenants!', 'success');
  };

  return (
    <div className="space-y-8">
      {/* MANAGER TOP STATS BANNER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>REAL-TIME OCCUPANCY</span>
            <i data-lucide="pie-chart" className="w-4 h-4 text-brand-600"></i>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">{occupancyPercentage}%</div>
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-brand-600 rounded-full" style={{ width: `${occupancyPercentage}%` }}></div>
          </div>
          <p className="text-[11px] text-slate-500">{occupiedBeds} occupied / {totalBeds} total beds</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>MONTHLY RENTAL REVENUE</span>
            <i data-lucide="indian-rupee" className="w-4 h-4 text-emerald-500"></i>
          </div>
          <div className="text-3xl font-black text-emerald-600">₹1,42,500</div>
          <p className="text-[11px] text-emerald-500 font-semibold">↑ 12% vs last month</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>OPEN TICKETS</span>
            <i data-lucide="wrench" className="w-4 h-4 text-amber-500"></i>
          </div>
          <div className="text-3xl font-black text-amber-500">{tickets.filter(t => t.status !== 'Resolved').length}</div>
          <p className="text-[11px] text-slate-500">Requires warden attention</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>OVERDUE DEFAULTERS</span>
            <i data-lucide="alert-circle" className="w-4 h-4 text-rose-500"></i>
          </div>
          <div className="text-3xl font-black text-rose-600">2 Tenants</div>
          <button onClick={handleSendBulkReminder} className="text-[11px] font-bold text-brand-600 hover:underline">
            Send Bulk Reminder SMS
          </button>
        </div>
      </div>

      {/* MANAGER NAVIGATION TABS */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
        {[
          { id: 'OCCUPANCY', label: 'Occupancy Grid', icon: 'grid' },
          { id: 'TENANTS', label: 'Tenant Directory', icon: 'users' },
          { id: 'MAINTENANCE', label: 'Maintenance Hub', icon: 'wrench' },
          { id: 'EXPENSES', label: 'Expense Tracker', icon: 'dollar-sign' },
          { id: 'VISITORS', label: 'Visitor Log', icon: 'clipboard-list' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 px-4 font-bold text-xs sm:text-sm transition border-b-2 flex items-center gap-2 whitespace-nowrap ${activeTab === tab.id
              ? 'border-brand-600 text-brand-600 dark:text-brand-400'
              : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
          >
            <i data-lucide={tab.icon} className="w-4 h-4"></i>
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. OCCUPANCY GRID TAB */}
      {activeTab === 'OCCUPANCY' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Floor-by-Floor Bed Availability Matrix</h3>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-500"></span> Available</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-rose-500"></span> Occupied</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div key={room.id} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white">Room {room.roomNumber}</h4>
                    <p className="text-xs text-slate-400 font-medium">Floor {room.floor} • {room.type}</p>
                  </div>
                  <span className="text-xs font-bold text-brand-600">₹{room.pricePerMonth}/mo</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {room.beds.map((bed) => (
                    <div
                      key={bed.id}
                      className={`p-3 rounded-xl border text-xs flex flex-col justify-between space-y-2 ${bed.status === 'Occupied'
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200'
                        : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200'
                        }`}
                    >
                      <div className="flex justify-between font-bold">
                        <span>Bed {bed.id}</span>
                        <span className="text-[10px] uppercase font-black">{bed.status}</span>
                      </div>
                      {bed.status === 'Occupied' ? (
                        <div>
                          <div className="font-semibold text-slate-800 dark:text-slate-100">{bed.tenant}</div>
                          <div className="text-[10px] text-slate-500">{bed.phone}</div>
                        </div>
                      ) : (
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Ready for Allotment</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. TENANT DIRECTORY TAB */}
      {activeTab === 'TENANTS' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Active Tenant Records & Lease Verification</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-400 font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-4">Tenant Name</th>
                  <th className="p-4">Bed & Room</th>
                  <th className="p-4">Phone Number</th>
                  <th className="p-4">Joining Date</th>
                  <th className="p-4">Rent Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {rooms.flatMap(r => r.beds.filter(b => b.status === 'Occupied').map(b => ({ ...b, roomNumber: r.roomNumber }))).map((tenant, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{tenant.tenant}</td>
                    <td className="p-4 font-medium text-slate-600 dark:text-slate-300">Room {tenant.roomNumber} ({tenant.id})</td>
                    <td className="p-4 font-medium text-slate-600 dark:text-slate-300">{tenant.phone}</td>
                    <td className="p-4 font-medium text-slate-600 dark:text-slate-300">{tenant.joinDate}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${tenant.paymentStatus === 'Paid' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                        }`}>
                        {tenant.paymentStatus}
                      </span>
                    </td>
                    <td className="p-4">
                      <button onClick={() => showToast(`Lease document for ${tenant.tenant} downloaded.`, 'info')} className="text-brand-600 font-bold hover:underline">
                        View Govt ID
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. MAINTENANCE HUB TAB */}
      {activeTab === 'MAINTENANCE' && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Maintenance Operations & Ticket Resolution</h3>
          <div className="space-y-3">
            {tickets.map((t) => (
              <div key={t.id} className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-slate-900 dark:text-white">{t.id}</span>
                    <span className="text-xs font-bold text-slate-500">• {t.tenant} (Room {t.room})</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">{t.description}</p>
                </div>

                <div className="flex items-center gap-3">
                  <select
                    value={t.status}
                    onChange={(e) => {
                      const updated = tickets.map(item => item.id === t.id ? { ...item, status: e.target.value } : item);
                      setTickets(updated);
                      showToast(`Ticket ${t.id} status updated to ${e.target.value}`, 'success');
                    }}
                    className="bg-slate-100 dark:bg-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. EXPENSE TRACKER TAB */}
      {activeTab === 'EXPENSES' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Record New Expense</h3>
            <form onSubmit={handleAddExpense} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Title</label>
                <input
                  type="text"
                  placeholder="e.g. Water Tank Repair"
                  value={newExpense.title}
                  onChange={(e) => setNewExpense({ ...newExpense, title: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-2.5 rounded-xl border"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
                <select
                  value={newExpense.category}
                  onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-2.5 rounded-xl border"
                >
                  <option value="Utilities">Utilities (Electricity/Water)</option>
                  <option value="Salaries">Staff Salaries</option>
                  <option value="Repairs">Repairs & Maintenance</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Amount (₹)</label>
                <input
                  type="number"
                  placeholder="5000"
                  value={newExpense.amount}
                  onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold p-2.5 rounded-xl border"
                  required
                />
              </div>
              <button type="submit" className="w-full py-2.5 bg-brand-600 text-white font-bold rounded-xl text-xs shadow-md">
                Add Expense Record
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Operating Expenses</h3>
            <div className="space-y-3">
              {expenses.map((exp) => (
                <div key={exp.id} className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{exp.title}</h4>
                    <p className="text-xs text-slate-400">{exp.category} • {exp.date}</p>
                  </div>
                  <span className="font-black text-sm text-rose-600">-₹{exp.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. VISITOR LOG TAB */}
      {activeTab === 'VISITORS' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden space-y-4 p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Visitor Entry Register</h3>
            <button
              onClick={() => {
                const newV = { id: `V-${Date.now()}`, visitorName: 'Sunil Mehta', hostTenant: 'Rahul Verma', room: '102', relation: 'Friend', entryTime: 'Just Now', exitTime: 'Active inside', status: 'Checked In' };
                setVisitors([newV, ...visitors]);
                showToast('New visitor logged in register.', 'success');
              }}
              className="px-4 py-2 bg-brand-600 text-white text-xs font-bold rounded-xl"
            >
              + Log Guest Entry
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-400 font-bold uppercase">
                <tr>
                  <th className="p-3">Visitor Name</th>
                  <th className="p-3">Host Tenant</th>
                  <th className="p-3">Room</th>
                  <th className="p-3">Entry Time</th>
                  <th className="p-3">Exit Time</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {visitors.map((v) => (
                  <tr key={v.id}>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">{v.visitorName} ({v.relation})</td>
                    <td className="p-3 text-slate-600 dark:text-slate-300">{v.hostTenant}</td>
                    <td className="p-3 text-slate-600 dark:text-slate-300">Room {v.room}</td>
                    <td className="p-3 text-slate-500">{v.entryTime}</td>
                    <td className="p-3 text-slate-500">{v.exitTime}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${v.status === 'Checked In' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-600'
                        }`}>
                        {v.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// Render React App
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
