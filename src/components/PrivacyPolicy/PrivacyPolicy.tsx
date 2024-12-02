import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className="relative">
            <img src='/landing/pagesbg.png' alt='bg' className="opacity-40 absolute inset-0 w-full h-full object-cover z-0 top-[-90px] left-0" />

            <div className='w-full flex justify-center items-center mt-[-10px] lg:mt-[40px] z-[99999]'>
                <div className='w-[90%] lg:w-[70%]'>
                    <p className='text-[24px] lg:text-[40px] text-center mb-4'>Privacy Policy</p>
                    {/* <p className="text-base md:text-lg mb-4">Last Updated: August 14, 2024.</p> */}

                    <p className="text-base md:text-lg mb-4">
                        programmX is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use our website and services.
                    </p>

                    {/* Add other sections following the same pattern */}
                    <h2 className="text-heading md:text-2xl font-semibold mb-2">1. Information We Collect</h2>
                    <p className="text-base md:text-lg mb-4">
                        We collect the following types of information:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Personal Information: Name, email address, phone number, and other contact information.</li>
                        <li>Technical Data: IP address, browser type, operating system, and browsing behavior.</li>
                        <li>Service Data: Information related to the services you request or use.</li>
                    </ul>
                    <br />

                    <h2 className="text-heading md:text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
                    <p className="text-base md:text-lg mb-4">
                        We may use your information for the following purposes:
                    </p>
                    <ul className="list-disc ml-6 text-base md:text-lg mb-4">
                        <li>To provide, operate, and maintain our website and services.</li>
                        <li>To improve, personalize, and expand our services.</li>
                        <li>To communicate with you, including customer service and support.</li>
                        <li>To process transactions and send you related information, including purchase confirmations and invoices.</li>
                        <li>To send you promotional communications, which you can opt out of at any time.</li>
                    </ul>

                    <h2 className="text-heading md:text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
                    <p className="text-base md:text-lg mb-4">
                        We do not share your personal information with third parties, except in the following cases:
                    </p>
                    <ul className="list-disc ml-6 text-base md:text-lg mb-4">
                        <li>With service providers who perform services on our behalf.</li>
                        <li>When required by law or to protect our rights.</li>
                        <li>In connection with a merger, sale, or acquisition of all or a portion of our business.</li>
                    </ul>

                    <h2 className="text-heading md:text-2xl font-semibold mb-2">4. Security of Your Information</h2>
                    <p className="text-base md:text-lg mb-4">
                        We implement security measures designed to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is ever fully secure, so we cannot guarantee absolute security.
                    </p>

                    <h2 className="text-heading md:text-2xl font-semibold mb-2">6. Your Rights</h2>
                    <p className="text-base md:text-lg mb-4">
                        You have the right to:
                    </p>
                    <ul className="list-disc ml-6 text-base md:text-lg mb-4">
                        <li>Access, update, or delete your personal information.</li>
                        <li>Object to the processing of your personal data.</li>
                        <li>Withdraw consent at any time if we are relying on consent to process your information.</li>
                    </ul>

                    <h2 className="text-heading md:text-2xl font-semibold mb-2">7. Third-Party Links</h2>
                    <p className="text-base md:text-lg mb-4">
                        Our website may contain links to other websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies.
                    </p>

                    <h2 className="text-heading md:text-2xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
                    <p className="text-base md:text-lg mb-4">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy