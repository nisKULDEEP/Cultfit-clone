import React from 'react'
import Faq from "react-faq-component";

const FrequntlyAskedQue = () => {

    const data = {
        title: "FAQ (How it works)",
        title: "6 Questions",
        rows: [
            {
                title: "How can I pick a particular doctor while booking my consultation appointment?",
                content: `All our doctors are equally skilled and are experts in family & internal medicine. They are capable of handling all medical conditions and will guide you to the right specialist, if need be. While we do not let you select a specific doctor at the time of booking, we will display information about the appointed doctor after you have booked your appointment.`,
            },
            {
                title: "How do I share additional information/reports with my doctor before the consultation?",
                content: `You can message your care provider to share any relevant info or ask any question/clarification. You can share any image, prescription or test report even before you begin your consultation. To do this Go to the Home tab and head to the day your appointment is scheduled Tap the 3 dots and hit message OR you can tap the appointment and hit the message button `,
            },
            {
                title: "How can I reschedule my doctor consultation appointment?",
                content:
                    "Easy! The appointment can be rescheduled anytime before your slot begins.    To reschedule, follow these simple steps:  - Head to the 'Consultation' tab under care.fit section on the app  - Go to the blue coloured card under 'Your Consultations'  - Click on manage and then reschedule.",
            },
            {
                title: "How can I cancel my doctor consultation appointment?",
                content: "Cancellation is allowed only 60 min prior to the appointment start time   To cancel, follow these simple steps:  - Head to the 'Consultation' tab under care.fit section on the app - Go to the blue coloured card under 'Your Consultations' - Click on manage and then cancel.",
            },
            {
                title: "How many free follow ups do I get?/ Unable to book a free follow up",
                content: "You get one free follow up with every consultation. You need to avail of your free follow -up within 8 days from your first consultation. To book, follow these simple steps:  - Head to the 'Consultation' tab under care.fit section on the app.  - Go to the blue coloured card under 'Your Consultations'  - Click on manage and then schedule.",
            },
            {
                title: "I may be late, will my appointment will be cancelled?",
                content: "The doctor will wait 7 mins once your consultation time starts. After which, the slot will be auto-cancelled. However, you can reschedule it either via the app or via the concierge at the center.",
            },
        ],
    };
    
    const styles = {
        titleTextColor: "grey",
        rowTitleColor: "rgb(97, 95, 95)",
        titleTextSize: "25px",
        rowTitleTextSize : "20px",
        rowContentPaddingBottom : "30px",
        rowContentPaddingRight : "100px",
        rowContentColor : "grey",
    };
    
    const config = {
    };
    

  return (

            <div className='faq'>
                <h1 className='faq__heading'>FAQS</h1>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        )
}

export default FrequntlyAskedQue