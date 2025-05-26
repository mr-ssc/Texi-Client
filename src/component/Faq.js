import React, { useState } from "react";
import "./Faq.css"; // Custom CSS file
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
    {
        question: "How do you book a Taxi service?",
        answer:
            "Give us your pickup location, destination, and desired pickup time. Tell the operator if you need special assistance. The estimated fare, pickup time, and contact information should be confirmed. Booking confirmations can be sent via text or email. You can also book a Taxi online. As with phone bookings, internet bookings require the same information.",
    },
    {
        question: "Can you order a car seat for your child from the Taxi service?",
        answer: `Taxi service providers mayoffers child car seats. However, you must express this necessity when reserving, and a car seat may cost extra.
To ensure a safe and enjoyable ride, book yourTaxi in advance and note any particular needs, such as a car seat.`,
    },
    {
        question: "What are the types of Taxi Service vehicles are available?",
        answer:
            "Taxi Cab Service have a variety of vehicles in their fleet, including sedans, SUVs, vans, and possibly even luxury vehicles, depending on the location and services you need.",
    },
    {
        question: "How much is thetaxi service from the Gold Coast to the airport?",
        answer:
            "The price of a taxi ride from Gold Coast to the airport will rely on a few things, like how far it is, what time of day it is, and if there are any extra fees or charges. Contact us to find out how much your trip will cost and any other important information.",
    },
    {
        question:
            "What is the difference between aTaxi and ordering a normal taxi?",
        answer:
            "The price of a taxi ride from Gold Coast to the airport will rely on a few things, like how far it is, what time of day it is, and if there are any extra fees or charges. Contact us to find out how much your trip will cost and any other important information.",
    },
    {
        question: "How much more expensive is a Book Service Taxi?",
        answer:
            "Book Service Taxi isn’t as expensive as you might think. We believe that comfort and pricing go hand in hand, so we don’t charge you much. However, the price of your trip will depend on the quality and service you need.",
    },
    {
        question:
            "What types of cars can you expect when booking a Service Taxi in Australia?",
        answer:
            "Service Taxi provides a variety of opulent and high-end vehicles to suit the needs and preferences of their clients. For larger groups, luxury sedans, SUVs, and Maxi Cabs are ideal. They have no vehicles older than three years and only well-maintained vehicles in their fleet selection. Please provide information about the number of passengers in order to reserve the appropriate fleet.",
    },
    {
        question: "How do you organize a Service Taxi from Airport to the City?",
        answer:
            " Book your Service Taxi in advance by calling us, speaking with our executive, and providing details such as the date, time, pick-up and drop-off locations, and your arrival point at the airport. Obtain the fare information, and your Service Taxi reservation is complete.",
    },
    {
        question: "What are the Surge and Public Holiday rates for Service Taxi?",
        answer:
            "Getting to Sydney Airport without a Service transport can be costly. When you use Service Taxi to book a ride to Sydney Airport (or anywhere else), the fare is guaranteed. The price displayed during booking is the price you will pay at your destination. Here, surge pricing is not encouraged.",
    },
    {
        question: "Can you recommend a good way to travel around Australia?",
        answer:
            " Sydney is one of the most beautiful and large places that can be exported. To avoid getting tired of traveling, you need to have a good way to get around. Service Taxi is a good choice in this case because they have a wide range of cars and will pick you up and drop you off at your home. Large sums of money don’t always bring comfort. Our services aren’t too expensive, so just give us a call today to book your ride around Sydney.",
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-container">
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? "active" : ""}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <span>{item.question}</span>
                                <span className="faq-icon">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;