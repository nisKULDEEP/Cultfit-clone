import React from 'react'
import Faq from "react-faq-component";

const MindFrequntlyAskedQue = () => {

    const data = {
        title: "FAQ (How it works)",
        title: "7 Questions",
        rows: [
            {
                title: "Is therapy for me?",
                content: `Whether you are experiencing symptoms that come in the way of daily living or want to explore issues experienced in the past or are keen on enhancing your wellbeing and growth in life - therapy is suitable for all.`,
            },
            {
                title: "What should I expect during my first therapy session?",
                content: `Your therapist will focus on getting to know you better through the first session. Together, the two of you will identify goals for follow up sessions. Your therapist may also share a few exercises for you to practice, if relevant. `,
            },
            {
                title: "What does a Therapy pack offer?",
                content:
                    "Therapists go deep into our problems with us. They help us understand ourselves better and plan for recovery without using medicines. Psychiatrists diagnose and treat chronic mental health conditions and may use medicines." 
            },
            {
                title: "What is the difference between a Therapist and a Psychiatrist?",
                content: "Therapists go deep into our problems with us. They help us understand ourselves better and plan for recovery without using medicines. Psychiatrists diagnose and treat chronic mental health conditions and may use medicines.",
            },
            {
                title: "How to book a 1 on 1 Therapy session?",
                content: "Here’s how you can book a therapy session from the cure.fit app: Log into the cure.fit app From the bottom of the To-Do page, pick mind.fit Pick 1 on 1 therapy Pick a preferred center and time slot Make a payment That’s all!",
            },
            {
                title: "Who all will have access to my medical data?",
                content: "Only your assigned Therapist and/or assigned Psychiatrist will have access to your medical data until you provide explicit access to any other professional",
            },
            {
                title: "The information I share with my therapist is sensitive information, is this information safe?",
                content: "Absolutely! We ensure none of your medical/psychiatric information is shared with anyone but your Therapist and Psychiatrist. All the information you share with us is completely safe and secure with us.",
            },
        ],
    };
    
    const styles = {
        titleTextColor: "#6a6a6a",
        rowTitleColor: "rgb(97, 95, 95)",
        titleTextSize: "20px",
        rowTitleTextSize : "20px",
        rowContentPaddingBottom : "20px",
        rowContentPaddingRight : "80px",
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

export default MindFrequntlyAskedQue