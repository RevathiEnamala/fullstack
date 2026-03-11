const travelData = {
    "bangkok": {
        time: "Nov to Feb (Peak) / May to Oct (Cheapest)",
        budget: "₹2,000 - ₹3,500 / day",
        stay: ["Hostel Dorm: ₹500", "Budget Hotel: ₹1,500", "Boutique: ₹3,000"],
        food: ["Street Food: ₹150", "Market Meal: ₹300", "Restaurant: ₹700"],
        spots: ["Grand Palace (฿500)", "Wat Arun (฿100)", "Khao San Road"]
    },
    "rishikesh": {
        time: "March to May & Sept to Nov",
        budget: "₹800 - ₹1,500 / day",
        stay: ["Ashram: ₹400", "Hostel: ₹600", "Riverside Camp: ₹1,200"],
        food: ["Local Dhaba: ₹100", "Cafe Meal: ₹250", "Thali: ₹150"],
        spots: ["Laxman Jhula", "Beatles Ashram (₹150)", "Triveni Ghat Aarti"]
    },
    "goa": {
        time: "November to February",
        budget: "₹1,500 - ₹3,000 / day",
        stay: ["Beach Hut: ₹800", "Hostel: ₹500", "Resort: ₹2,500"],
        food: ["Shack Meal: ₹300", "Local Fish Thali: ₹200", "Drinks: ₹150"],
        spots: ["Baga Beach", "Old Goa Churches", "Dudhsagar Falls"]
    },
    "paris": {
        time: "April to June / Sept to Oct",
        budget: "$85 - $130 / day (approx. ₹7,000+)",
        stay: ["Hostel: $40", "Budget Hotel: $90", "Airbnb: $110"],
        food: ["Boulangerie: $12", "Bistro Lunch: $25", "Dinner: $45"],
        spots: ["Eiffel Tower (€35)", "Louvre (€22)", "Montmartre (Free)"]
    },
    "new york": {
        time: "April to June / Sept to Nov",
        budget: "$150 - $250 / day (approx. ₹12,000+)",
        stay: ["HI NYC Hostel: $65", "Queens Hotel: $120", "Midtown: $250"],
        food: ["Dollar Pizza: $1.50", "Food Cart: $10", "Diner: $25"],
        spots: ["Central Park (Free)", "Empire State ($45)", "Statue of Liberty ($25)"]
    }
};

// Handle Section Switching
function showSection(sectionId) {
    document.querySelectorAll('.section-view').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    document.getElementById(sectionId).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

function generatePlan() {
    const input = document.getElementById('destinationInput').value.toLowerCase().trim();
    const resultDiv = document.getElementById('planResult');
    
    if (travelData[input]) {
        resultDiv.classList.remove('hidden');
        document.getElementById('bestTime').innerText = travelData[input].time;
        document.getElementById('totalCost').innerText = travelData[input].budget;
        
        fillList('stayList', travelData[input].stay);
        fillList('foodList', travelData[input].food);
        fillList('spotList', travelData[input].spots);
        
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Try: Bangkok, Rishikesh, Goa, Paris, or New York");
    }
}

function fillList(elementId, items) {
    const list = document.getElementById(elementId);
    list.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        list.appendChild(li);
    });
}