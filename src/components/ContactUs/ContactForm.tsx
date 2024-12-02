import React, { useState } from 'react'
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import axios from 'axios';

const ContactForm = () => {
    const { toast } = useToast();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    // const handleLead = () => {
    //     if (window.rdt) {
    //       console.log("Reddit Pixel found, tracking event.",window.rdt);
    //       window.rdt('track', 'Lead');
    //       } else {
    //       console.log("Reddit Pixel not found.");
    //       }
    //   };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/ContactForm', {
                firstName,
                lastName,
                email,
                phoneNumber,
                message,
            });

            if (response.status === 201) {
                toast({
                    title: "Form Submission",
                    description: "Form Submitted Successfully!",
                });


                // if (typeof window !== "undefined" && window.location.hostname === "dev.flexlab.io") {
                //     handleLead();
                // } else {
                //     console.log("Event not fired because the hostname is not 'dev.flexlab.io'.");
                // }

                // Clear form fields after submission
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setMessage('');
            }
        } catch (error) {
            console.error("Failed to submit the form:", error);
            toast({
                title: "Form Submission",
                description: "Failed to submit the form.",
            });
        }
    };

    return (
        <div
            style={{
                // background: 'rgba(0, 128, 128, 0.17)',
                background: 'rgb(23, 65 ,65 , 0.17)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                // backdropFilter: 'blur(1.9px)',
                WebkitBackdropFilter: 'blur(1.9px)',
                border: '1px solid rgba(0, 128, 128, 0.21)',
            }}
            className="w-full pt-6 flex justify-center items-center  mt-[30px] lg:mt-[70px]"
        >
            <div className='w-[90%] md:w-[70%]'>
                <div className='w-full flex justify-center '>

                    <div className='hidden lg:block w-[40%] h-[470px]  rounded-[10px] p-[30px] z-[99999]'>
                        <div className='flex flex-col h-full justify-between'>
                            <div>
                                <p className='font-poppins font-bold text-[28px]'>Contact Information</p>
                                <p className='font-poppins font-normal text-[18px]'>Say something to start a live chat!</p>
                            </div>

                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex gap-[20px]'>
                                    <img src='/Contact/phoneicon.svg' alt="icon" />
                                    <p className='font-poppins font-normal text-[16px]'>+923-3018331977</p>
                                </div>
                                <div className='flex gap-[20px]'>
                                    <img src='/Contact/emailicon.svg' alt="icon" />
                                    <p className='font-poppins font-normal text-[16px]'>ProgrammX@gmail.com</p>
                                </div>
                                <div className='flex gap-[20px] items-start'>
                                    <img src='/Contact/locationicon.svg' alt="icon" />
                                    <p className='font-poppins font-normal text-[16px]'>First Floor, Plaza 49, Umar Commercial, B, Safari Block Sector B Bahria Town, Lahore, Punjab 52730, Pakistan</p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div style={{
                        background: 'rgba(24, 24, 24, 0.53)',
                        borderRadius: '16px',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(1.9px)',
                        WebkitBackdropFilter: 'blur(1.9px)',
                        // border: '1px solid rgba(0, 128, 128, 0.21)',
                    }} className='hidden mb-5 lg:flex w-full lg:w-[60%] p-[40px] flex-col gap-[40px] z-[99999]'>
                        <div className='w-full flex flex-col gap-[50px]'>
                            <div className='flex w-full justify-between'>
                                <div className='flex w-[46%] flex-col gap-[10px]'>
                                    <p className='font-poppins font-medium text-[12px] text-[#E0E0E0]'>First Name</p>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="border-b-2 border-white w-full focus:outline-none focus:border-white bg-transparent font-poppins font-medium text-[14px]"
                                    />
                                </div>
                                <div className='flex w-[46%] flex-col gap-[10px]'>
                                    <p className='font-poppins font-medium text-[12px] text-[#E0E0E0]'>Last Name</p>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="border-b-2 border-white w-full focus:outline-none focus:border-white bg-transparent font-poppins font-medium text-[14px]"
                                    />
                                </div>
                            </div>

                            <div className='flex w-full justify-between'>
                                <div className='flex w-[46%] flex-col gap-[10px]'>
                                    <p className='font-poppins font-medium text-[12px] text-[#E0E0E0]'>Email</p>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="border-b-2 border-white w-full focus:outline-none focus:border-white bg-transparent font-poppins font-medium text-[14px]"
                                    />
                                </div>
                                <div className='flex w-[46%] flex-col gap-[10px]'>
                                    <p className='font-poppins font-medium text-[12px] text-[#E0E0E0]'>Phone Number</p>
                                    <input
                                        type="number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="border-b-2 border-white w-full focus:outline-none focus:border-white bg-transparent font-poppins font-medium text-[14px]"
                                    />
                                </div>
                            </div>

                            <div className='flex w-full justify-between'>
                                <div className='flex w-full flex-col gap-[10px]'>
                                    <p className='font-poppins font-medium text-[12px] text-[#E0E0E0]'>Message</p>
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder='Write your message..'
                                        className="border-b-2 border-white p-1 w-full focus:outline-none focus:border-white bg-transparent font-poppins font-medium text-[14px]"
                                    />
                                </div>

                            </div>
                        </div>

                        <div className='w-full flex justify-end'>
                            <Button
                                className={cn(
                                    "bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 z-[9999] w-[204px] md:w-[204px] h-[44px] md:h-[44px] rounded-[12px] z-[9999] text-lg md:text-xl font-semibold text-white font-raleway"
                                )}
                                onClick={handleSubmit}
                            >
                                Send Message
                            </Button>
                        </div>
                    </div>

                    <div className='lg:hidden w-full py-[20px] flex flex-col gap-[30px] z-[9999]'>
                        <div className='flex w-full flex-col gap-[5px]'>
                            <p className='font-poppins font-medium text-[12px] text-[#E0E0E0]'>First Name</p>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="border-b-2 border-white w-full focus:outline-none focus:border-white bg-transparent font-poppins font-medium text-[14px]"
                            />
                        </div>
                        <div className='flex w-full flex-col gap-[5px]'>
                            <p className='font-poppins font-medium text-[12px] text-[#E0E0E0]'>Last Name</p>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="border-b-2 border-white w-full focus:outline-none focus:border-white bg-transparent font-poppins font-medium text-[14px]"
                            />
                        </div>
                        <div className='flex w-full flex-col gap-[5px]'>
                            <p className='font-poppins font-medium text-[12px] text-[#E0E0E0]'>Email</p>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-b-2 border-white w-full focus:outline-none focus:border-white bg-transparent font-poppins font-medium text-[14px]"
                            />
                        </div>
                        <div className='flex w-full flex-col gap-[5px]'>
                            <p className='font-poppins font-medium text-[12px] text-[#E0E0E0]'>Phone Number</p>
                            <input
                                type="number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="border-b-2 border-white w-full focus:outline-none focus:border-white bg-transparent font-poppins font-medium text-[14px]"
                            />
                        </div>
                        <div className='flex w-full flex-col gap-[5px]'>
                            <p className='font-poppins font-medium text-[12px] text-[#E0E0E0]'>Message</p>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="border-b-2 border-white p-1 w-full focus:outline-none focus:border-white bg-transparent font-poppins font-medium text-[14px]"
                            />
                        </div>

                        <div className='w-full flex justify-center'>
                            <Button
                                className={cn(
                                    "  bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 z-[9999] w-[204px] md:w-[204px] h-[44px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway cursor-pointer"
                                )}
                                onClick={handleSubmit}
                            >
                                Send Message
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactForm