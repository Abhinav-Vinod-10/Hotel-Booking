// Hotel Booking Website JavaScript

// Hotel data
const hotelData = {
  "hotels": [
    {
      "id": 1,
      "name": "Grand Palace Hotel",
      "location": "Mumbai, Maharashtra",
      "rating": 4.8,
      "price": 5500,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "images": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
      ],
      "amenities": ["WiFi", "Pool", "Spa", "Gym", "Restaurant", "Bar", "Parking"],
      "description": "Luxury hotel in the heart of Mumbai with world-class amenities and exceptional service.",
      "rooms": [
        {"type": "Deluxe Room", "price": 5500, "capacity": 2},
        {"type": "Suite", "price": 8500, "capacity": 4},
        {"type": "Premium Suite", "price": 12000, "capacity": 4}
      ]
    },
    {
      "id": 2,
      "name": "Coastal Resort & Spa",
      "location": "Goa",
      "rating": 4.6,
      "price": 4200,
      "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
      "images": [
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"
      ],
      "amenities": ["WiFi", "Beach Access", "Pool", "Spa", "Restaurant", "Water Sports"],
      "description": "Beautiful beachfront resort in Goa perfect for relaxation and water activities.",
      "rooms": [
        {"type": "Ocean View Room", "price": 4200, "capacity": 2},
        {"type": "Beach Villa", "price": 7800, "capacity": 4},
        {"type": "Luxury Villa", "price": 11500, "capacity": 6}
      ]
    },
    {
      "id": 3,
      "name": "Mountain Retreat Hotel",
      "location": "Manali, Himachal Pradesh",
      "rating": 4.7,
      "price": 3800,
      "image": "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800",
      "images": [
        "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800",
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
        "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=800"
      ],
      "amenities": ["WiFi", "Mountain View", "Fireplace", "Restaurant", "Parking", "Trekking"],
      "description": "Scenic mountain hotel offering breathtaking views and adventure activities.",
      "rooms": [
        {"type": "Mountain View Room", "price": 3800, "capacity": 2},
        {"type": "Deluxe Suite", "price": 6200, "capacity": 3},
        {"type": "Family Suite", "price": 8900, "capacity": 5}
      ]
    },
    {
      "id": 4,
      "name": "City Business Hotel",
      "location": "Delhi",
      "rating": 4.5,
      "price": 4800,
      "image": "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=800",
      "images": [
        "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=800",
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"
      ],
      "amenities": ["WiFi", "Business Center", "Gym", "Restaurant", "Conference Room", "Parking"],
      "description": "Modern business hotel in Delhi with excellent connectivity and professional services.",
      "rooms": [
        {"type": "Business Room", "price": 4800, "capacity": 2},
        {"type": "Executive Suite", "price": 7200, "capacity": 2},
        {"type": "Presidential Suite", "price": 10800, "capacity": 4}
      ]
    },
    {
      "id": 5,
      "name": "Heritage Palace",
      "location": "Jaipur, Rajasthan",
      "rating": 4.9,
      "price": 6800,
      "image": "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=800",
      "images": [
        "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=800",
        "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800"
      ],
      "amenities": ["WiFi", "Heritage Architecture", "Pool", "Spa", "Restaurant", "Cultural Shows"],
      "description": "Royal heritage hotel showcasing traditional Rajasthani architecture and culture.",
      "rooms": [
        {"type": "Heritage Room", "price": 6800, "capacity": 2},
        {"type": "Royal Suite", "price": 12000, "capacity": 3},
        {"type": "Maharaja Suite", "price": 18000, "capacity": 4}
      ]
    },
    {
      "id": 6,
      "name": "Lake View Resort",
      "location": "Udaipur, Rajasthan",
      "rating": 4.6,
      "price": 5200,
      "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
      "images": [
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800"
      ],
      "amenities": ["WiFi", "Lake View", "Pool", "Spa", "Restaurant", "Boat Rides"],
      "description": "Romantic lakeside resort with stunning views and luxury accommodations.",
      "rooms": [
        {"type": "Lake View Room", "price": 5200, "capacity": 2},
        {"type": "Premium Lake Suite", "price": 8800, "capacity": 3},
        {"type": "Royal Lake Villa", "price": 14500, "capacity": 4}
      ]
    }
  ],
  "testimonials": [
    {
      "name": "Priya Sharma",
      "rating": 5,
      "comment": "Amazing booking experience! The UPI payment was so convenient and quick. Highly recommended!",
      "hotel": "Grand Palace Hotel"
    },
    {
      "name": "Rahul Gupta",
      "rating": 5,
      "comment": "Beautiful interface and seamless booking process. The hotel exceeded our expectations.",
      "hotel": "Coastal Resort & Spa"
    },
    {
      "name": "Anjali Patel",
      "rating": 4,
      "comment": "Great website with easy navigation. UPI payment made everything so simple.",
      "hotel": "Heritage Palace"
    }
  ]
};

// Global state
let currentPage = 'home';
let currentHotel = null;
let currentBooking = null;
let searchResults = [];
let bookingHistory = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadFeaturedHotels();
    loadTestimonials();
    setDefaultDates();
    displayBookingHistory();
}

function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Price range slider
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', function() {
            priceValue.textContent = this.value;
            filterSearchResults();
        });
    }

    // Sort and filter changes
    const sortSelect = document.getElementById('sort-select');
    const ratingFilter = document.getElementById('rating-filter');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', filterSearchResults);
    }
    
    if (ratingFilter) {
        ratingFilter.addEventListener('change', filterSearchResults);
    }

    // Booking form submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            proceedToPayment();
        });
    }
}

function setDefaultDates() {
    const checkinDate = document.getElementById('checkin-date');
    const checkoutDate = document.getElementById('checkout-date');
    
    if (checkinDate && checkoutDate) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        checkinDate.value = today.toISOString().split('T')[0];
        checkoutDate.value = tomorrow.toISOString().split('T')[0];
        
        // Set minimum dates
        checkinDate.min = today.toISOString().split('T')[0];
        checkoutDate.min = tomorrow.toISOString().split('T')[0];
        
        checkinDate.addEventListener('change', function() {
            const selectedDate = new Date(this.value);
            const nextDay = new Date(selectedDate);
            nextDay.setDate(nextDay.getDate() + 1);
            checkoutDate.min = nextDay.toISOString().split('T')[0];
            if (checkoutDate.value <= this.value) {
                checkoutDate.value = nextDay.toISOString().split('T')[0];
            }
        });
    }
}

// Page navigation
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(pageName + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        
        // Close mobile menu if open
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        
        // Update booking history when showing profile page
        if (pageName === 'profile') {
            displayBookingHistory();
        }
    }
}

// Hotel search functionality
function searchHotels() {
    const location = document.getElementById('location-select').value;
    const checkin = document.getElementById('checkin-date').value;
    const checkout = document.getElementById('checkout-date').value;
    const guests = document.getElementById('guests-select').value;
    
    if (!location) {
        alert('Please select a destination');
        return;
    }
    
    if (!checkin || !checkout) {
        alert('Please select check-in and check-out dates');
        return;
    }
    
    // Filter hotels by location
    searchResults = hotelData.hotels.filter(hotel => 
        hotel.location.toLowerCase().includes(location.toLowerCase())
    );
    
    showPage('search');
    displaySearchResults();
}

function displaySearchResults() {
    const resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return;
    
    if (searchResults.length === 0) {
        resultsContainer.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h3>No hotels found</h3>
                <p>Try adjusting your search criteria</p>
            </div>
        `;
        return;
    }
    
    resultsContainer.innerHTML = searchResults.map(hotel => `
        <div class="hotel-card" onclick="viewHotelDetail(${hotel.id})">
            <div class="hotel-image">
                <img src="${hotel.image}" alt="${hotel.name}" loading="lazy" 
                     onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'">
                <div class="hotel-rating">
                    <i class="fas fa-star"></i> ${hotel.rating}
                </div>
            </div>
            <div class="hotel-info">
                <h3 class="hotel-name">${hotel.name}</h3>
                <p class="hotel-location">
                    <i class="fas fa-map-marker-alt"></i> ${hotel.location}
                </p>
                <div class="hotel-price">
                    ₹${hotel.price.toLocaleString()}
                    <span>/night</span>
                </div>
            </div>
        </div>
    `).join('');
}

function filterSearchResults() {
    const sortBy = document.getElementById('sort-select')?.value || 'price-low';
    const maxPrice = parseInt(document.getElementById('price-range')?.value || '20000');
    const minRating = parseFloat(document.getElementById('rating-filter')?.value || '0');
    
    let filteredResults = [...searchResults];
    
    // Apply filters
    filteredResults = filteredResults.filter(hotel => 
        hotel.price <= maxPrice && hotel.rating >= minRating
    );
    
    // Apply sorting
    switch (sortBy) {
        case 'price-low':
            filteredResults.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredResults.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredResults.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    // Update results
    const resultsContainer = document.getElementById('search-results');
    if (resultsContainer) {
        resultsContainer.innerHTML = filteredResults.map(hotel => `
            <div class="hotel-card" onclick="viewHotelDetail(${hotel.id})">
                <div class="hotel-image">
                    <img src="${hotel.image}" alt="${hotel.name}" loading="lazy"
                         onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'">
                    <div class="hotel-rating">
                        <i class="fas fa-star"></i> ${hotel.rating}
                    </div>
                </div>
                <div class="hotel-info">
                    <h3 class="hotel-name">${hotel.name}</h3>
                    <p class="hotel-location">
                        <i class="fas fa-map-marker-alt"></i> ${hotel.location}
                    </p>
                    <div class="hotel-price">
                        ₹${hotel.price.toLocaleString()}
                        <span>/night</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Hotel detail view
function viewHotelDetail(hotelId) {
    currentHotel = hotelData.hotels.find(hotel => hotel.id === hotelId);
    if (!currentHotel) return;
    
    showPage('detail');
    displayHotelDetail();
}

function displayHotelDetail() {
    if (!currentHotel) return;
    
    const detailContainer = document.getElementById('hotel-detail');
    if (!detailContainer) return;
    
    detailContainer.innerHTML = `
        <div class="hotel-detail">
            <div class="detail-gallery">
                <div class="main-image">
                    <img id="main-hotel-image" src="${currentHotel.images[0]}" alt="${currentHotel.name}"
                         onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'">
                </div>
                <div class="thumbnail-images">
                    ${currentHotel.images.map((img, index) => `
                        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', ${index})">
                            <img src="${img}" alt="Hotel view ${index + 1}"
                                 onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'">
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="hotel-info-detail">
                <h1>${currentHotel.name}</h1>
                <p class="hotel-location">
                    <i class="fas fa-map-marker-alt"></i> ${currentHotel.location}
                </p>
                <div class="hotel-rating">
                    <i class="fas fa-star"></i> ${currentHotel.rating} Rating
                </div>
                <p class="hotel-description">${currentHotel.description}</p>
                
                <h3>Amenities</h3>
                <div class="amenities-list">
                    ${currentHotel.amenities.map(amenity => `
                        <div class="amenity-item">
                            <i class="fas fa-check"></i>
                            ${amenity}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="rooms-section">
            <h2>Choose Your Room</h2>
            <div class="rooms-grid">
                ${currentHotel.rooms.map(room => `
                    <div class="room-card">
                        <h3>${room.type}</h3>
                        <p>Capacity: ${room.capacity} guests</p>
                        <div class="room-price">₹${room.price.toLocaleString()}</div>
                        <button class="btn btn--primary" onclick="bookRoom('${room.type}', ${room.price})">
                            Book Now
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function changeMainImage(imageSrc, index) {
    const mainImage = document.getElementById('main-hotel-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage) {
        mainImage.src = imageSrc;
        mainImage.onerror = function() {
            this.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800';
        };
    }
    
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Booking functionality
function bookRoom(roomType, price) {
    const checkin = document.getElementById('checkin-date')?.value || new Date().toISOString().split('T')[0];
    const checkout = document.getElementById('checkout-date')?.value || new Date(Date.now() + 86400000).toISOString().split('T')[0];
    
    currentBooking = {
        hotel: currentHotel,
        roomType: roomType,
        price: price,
        checkin: checkin,
        checkout: checkout,
        nights: Math.ceil((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24)),
        totalPrice: price * Math.ceil((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24))
    };
    
    showPage('booking');
    displayBookingSummary();
}

function displayBookingSummary() {
    if (!currentBooking) return;
    
    const summaryContainer = document.getElementById('booking-summary');
    if (!summaryContainer) return;
    
    summaryContainer.innerHTML = `
        <h3>Booking Summary</h3>
        <div style="margin-bottom: 16px;">
            <img src="${currentBooking.hotel.image}" alt="${currentBooking.hotel.name}" 
                 style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px;"
                 onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'">
        </div>
        <h4>${currentBooking.hotel.name}</h4>
        <p><i class="fas fa-map-marker-alt"></i> ${currentBooking.hotel.location}</p>
        <div style="margin: 16px 0; padding: 16px; background: var(--color-bg-1); border-radius: 8px;">
            <p><strong>Room:</strong> ${currentBooking.roomType}</p>
            <p><strong>Check-in:</strong> ${formatDate(currentBooking.checkin)}</p>
            <p><strong>Check-out:</strong> ${formatDate(currentBooking.checkout)}</p>
            <p><strong>Nights:</strong> ${currentBooking.nights}</p>
        </div>
        <div style="margin: 16px 0; padding: 16px; background: var(--color-bg-2); border-radius: 8px;">
            <p>Room Rate: ₹${currentBooking.price.toLocaleString()} x ${currentBooking.nights} nights</p>
            <p>Taxes & Fees: ₹${Math.round(currentBooking.totalPrice * 0.18).toLocaleString()}</p>
            <hr>
            <h4>Total: ₹${(currentBooking.totalPrice + Math.round(currentBooking.totalPrice * 0.18)).toLocaleString()}</h4>
        </div>
    `;
}

function proceedToPayment() {
    const form = document.getElementById('booking-form');
    const formData = new FormData(form);
    
    // Validate form
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = 'var(--color-error)';
        } else {
            field.style.borderColor = 'var(--color-border)';
        }
    });
    
    if (!isValid) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Store guest information
    if (currentBooking) {
        currentBooking.guestInfo = {
            name: form.querySelector('input[type="text"]').value,
            email: form.querySelector('input[type="email"]').value,
            phone: form.querySelector('input[type="tel"]').value,
            requests: form.querySelector('textarea').value
        };
    }
    
    showPage('payment');
    displayPaymentSummary();
}

function displayPaymentSummary() {
    if (!currentBooking) return;
    
    const paymentSummary = document.getElementById('payment-summary');
    if (!paymentSummary) return;
    
    const totalAmount = currentBooking.totalPrice + Math.round(currentBooking.totalPrice * 0.18);
    
    paymentSummary.innerHTML = `
        <h3>Payment Summary</h3>
        <div style="margin-bottom: 16px;">
            <img src="${currentBooking.hotel.image}" alt="${currentBooking.hotel.name}" 
                 style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px;"
                 onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'">
        </div>
        <h4>${currentBooking.hotel.name}</h4>
        <p><i class="fas fa-user"></i> ${currentBooking.guestInfo.name}</p>
        <p><i class="fas fa-calendar"></i> ${formatDate(currentBooking.checkin)} - ${formatDate(currentBooking.checkout)}</p>
        <div style="margin: 16px 0; padding: 16px; background: var(--color-bg-3); border-radius: 8px;">
            <p>Room: ${currentBooking.roomType}</p>
            <p>Subtotal: ₹${currentBooking.totalPrice.toLocaleString()}</p>
            <p>Taxes: ₹${Math.round(currentBooking.totalPrice * 0.18).toLocaleString()}</p>
            <hr>
            <h4>Total Amount: ₹${totalAmount.toLocaleString()}</h4>
        </div>
    `;
}

// Payment functionality
function selectPayment(method) {
    const options = document.querySelectorAll('.payment-option');
    const forms = document.querySelectorAll('.payment-form');
    
    options.forEach(option => option.classList.remove('active'));
    forms.forEach(form => form.classList.remove('active'));
    
    document.querySelector(`[onclick="selectPayment('${method}')"]`).classList.add('active');
    document.getElementById(`${method}-form`)?.classList.add('active');
}

function selectUpiApp(app) {
    const apps = document.querySelectorAll('.upi-app');
    apps.forEach(appEl => appEl.classList.remove('active'));
    
    event.target.classList.add('active');
    
    // Auto-fill UPI ID based on selected app
    const upiIdInput = document.getElementById('upi-id');
    if (upiIdInput) {
        const suffix = app === 'gpay' ? '@okaxis' : app === 'phonepe' ? '@ybl' : '@paytm';
        if (!upiIdInput.value.includes('@')) {
            upiIdInput.placeholder = `yourname${suffix}`;
        }
    }
}

function generateQR() {
    const upiId = document.getElementById('upi-id').value;
    
    if (!upiId || !upiId.includes('@')) {
        alert('Please enter a valid UPI ID');
        return;
    }
    
    if (!currentBooking) {
        alert('Booking information not found');
        return;
    }
    
    const qrSection = document.getElementById('qr-section');
    const qrCode = document.getElementById('qr-code');
    const paymentAmount = document.getElementById('payment-amount');
    
    if (qrSection && qrCode && paymentAmount) {
        const totalAmount = currentBooking.totalPrice + Math.round(currentBooking.totalPrice * 0.18);
        
        qrSection.classList.remove('hidden');
        paymentAmount.textContent = `₹${totalAmount.toLocaleString()}`;
        
        // Simulate QR code generation with better visual
        qrCode.innerHTML = `
            <div style="width: 180px; height: 180px; background: white; border: 2px solid var(--color-primary); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 12px; text-align: center; color: var(--color-primary); position: relative;">
                <div>
                    <div style="font-size: 36px; margin-bottom: 8px;">📱💳</div>
                    <div style="font-weight: bold;">QR Code Ready</div>
                    <div style="margin: 8px 0; font-size: 14px; font-weight: bold;">₹${totalAmount.toLocaleString()}</div>
                    <div style="font-size: 10px; color: var(--color-text-secondary);">Scan with UPI app</div>
                    <div style="margin-top: 4px; font-size: 10px; word-break: break-all;">${upiId}</div>
                </div>
            </div>
        `;
        
        // Scroll to QR section
        qrSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function simulatePayment() {
    if (!currentBooking) return;
    
    // Show loading state
    const button = event.target;
    const originalText = button.textContent;
    button.classList.add('loading');
    button.disabled = true;
    button.textContent = 'Processing...';
    
    // Simulate payment processing
    setTimeout(() => {
        button.classList.remove('loading');
        button.disabled = false;
        button.textContent = originalText;
        
        // Add booking to history
        const bookingId = 'BK' + Date.now().toString().slice(-6);
        const completedBooking = {
            ...currentBooking,
            id: bookingId,
            status: 'confirmed',
            paymentMethod: 'UPI',
            bookingDate: new Date().toISOString()
        };
        
        bookingHistory.push(completedBooking);
        
        showPage('confirmation');
        displayConfirmation(completedBooking);
    }, 2000);
}

function displayConfirmation(booking) {
    const detailsContainer = document.getElementById('booking-details');
    if (!detailsContainer) return;
    
    detailsContainer.innerHTML = `
        <div class="card">
            <div class="card__body">
                <h3>Booking Details</h3>
                <p><strong>Booking ID:</strong> ${booking.id}</p>
                <p><strong>Hotel:</strong> ${booking.hotel.name}</p>
                <p><strong>Location:</strong> ${booking.hotel.location}</p>
                <p><strong>Guest:</strong> ${booking.guestInfo.name}</p>
                <p><strong>Room:</strong> ${booking.roomType}</p>
                <p><strong>Check-in:</strong> ${formatDate(booking.checkin)}</p>
                <p><strong>Check-out:</strong> ${formatDate(booking.checkout)}</p>
                <p><strong>Total Amount:</strong> ₹${(booking.totalPrice + Math.round(booking.totalPrice * 0.18)).toLocaleString()}</p>
                <p><strong>Payment Method:</strong> ${booking.paymentMethod}</p>
            </div>
        </div>
    `;
}

// Utility functions
function loadFeaturedHotels() {
    const container = document.getElementById('featured-hotels');
    if (!container) return;
    
    // Show first 3 hotels as featured
    const featuredHotels = hotelData.hotels.slice(0, 3);
    
    container.innerHTML = featuredHotels.map(hotel => `
        <div class="hotel-card" onclick="viewHotelDetail(${hotel.id})">
            <div class="hotel-image">
                <img src="${hotel.image}" alt="${hotel.name}" loading="lazy"
                     onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'">
                <div class="hotel-rating">
                    <i class="fas fa-star"></i> ${hotel.rating}
                </div>
            </div>
            <div class="hotel-info">
                <h3 class="hotel-name">${hotel.name}</h3>
                <p class="hotel-location">
                    <i class="fas fa-map-marker-alt"></i> ${hotel.location}
                </p>
                <div class="hotel-price">
                    ₹${hotel.price.toLocaleString()}
                    <span>/night</span>
                </div>
            </div>
        </div>
    `).join('');
}

function loadTestimonials() {
    const container = document.getElementById('testimonials');
    if (!container) return;
    
    container.innerHTML = hotelData.testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-rating">
                ${Array(testimonial.rating).fill().map(() => '<span class="star">★</span>').join('')}
            </div>
            <p class="testimonial-comment">"${testimonial.comment}"</p>
            <div class="testimonial-author">
                <strong>${testimonial.name}</strong>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">
                    ${testimonial.hotel}
                </div>
            </div>
        </div>
    `).join('');
}

function displayBookingHistory() {
    const container = document.getElementById('booking-history');
    if (!container) return;
    
    if (bookingHistory.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h3>No bookings yet</h3>
                <p>Start exploring and book your first hotel!</p>
                <button class="btn btn--primary" onclick="showPage('home')">Browse Hotels</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = bookingHistory.map(booking => `
        <div class="booking-item">
            <img src="${booking.hotel.image}" alt="${booking.hotel.name}" 
                 style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;"
                 onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'">
            <div>
                <h4>${booking.hotel.name}</h4>
                <p>${booking.hotel.location}</p>
                <p><strong>Booking ID:</strong> ${booking.id}</p>
                <p>${formatDate(booking.checkin)} - ${formatDate(booking.checkout)}</p>
                <p><strong>Guest:</strong> ${booking.guestInfo.name}</p>
            </div>
            <div style="text-align: right;">
                <div class="booking-status status-confirmed">Confirmed</div>
                <p style="margin: 8px 0 0 0;"><strong>₹${(booking.totalPrice + Math.round(booking.totalPrice * 0.18)).toLocaleString()}</strong></p>
            </div>
        </div>
    `).join('');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

function toggleAuth() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.classList.toggle('hidden');
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('auth-modal');
    if (modal && event.target === modal) {
        modal.classList.add('hidden');
    }
});

// Handle escape key for modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('auth-modal');
        if (modal && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});