import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="relative">
      <img
        src="/landing/pagesbg.png"
        alt="bg"
        className="opacity-40 absolute inset-0 w-full h-full object-cover z-0 top-[-90px] left-0"
      />

      <div className="w-full flex justify-center items-center mt-[-10px] lg:mt-[40px] z-[99999]">
        <div className="w-[90%] lg:w-[70%]">
          <p className=" text-[24px] lg:text-[40px] text-center mb-4">
            Terms And Conditions
          </p>
          {/* <p className="text-base md:text-lg mb-4">
            Last Updated: August 14, 2024.
          </p> */}

          <p className="text-base md:text-lg mb-4">
            Welcome to programmX! These Terms and Conditions outline the rules
            and regulations for the use of programmX's website and services.
          </p>

          <h2 className="text-heading md:text-2xl font-semibold mb-2">
            1. Introduction
          </h2>
          <p className="text-base md:text-lg mb-4">
            programmX is an IT company and software house specializing in
            services related to Machine Learning (ML), Artificial Intelligence
            (AI), Blockchain, and modern web technologies like React and
            Next.js.
          </p>

          <h2 className="text-heading md:text-2xl font-semibold mb-2">
            2. Acceptance of Terms
          </h2>
          <p className="text-base md:text-lg mb-4">
            By accessing and using our website and services, you accept and
            agree to comply with these Terms and Conditions.
          </p>

          <h2 className="text-heading md:text-2xl font-semibold mb-2">
            3. Services Provided
          </h2>
          <p className="text-base md:text-lg mb-4">
            programmX provides a range of services, including but not limited
            to:
          </p>
          <ul className="list-disc ml-6 text-base md:text-lg mb-4">
            <li>
              Custom software development in areas such as ML, AI, Blockchain,
              and modern web technologies.
            </li>
            <li>Consultation and strategy development for IT projects.</li>
            <li>Support and maintenance services for deployed applications.</li>
          </ul>

          <h2 className="text-heading md:text-2xl font-semibold mb-2">
            4. User Responsibilities
          </h2>
          <p className="text-base md:text-lg mb-4">
            As a user of programmX's services, you agree to:
          </p>
          <ul className="list-disc ml-6 text-base md:text-lg mb-4">
            <li>
              Provide accurate and up-to-date information during registration or
              when using our services.
            </li>
            <li>
              Respect all applicable laws and regulations when using our
              services.
            </li>
            <li>
              Not engage in any activities that could harm programmX or its
              clients.
            </li>
          </ul>

          <h2 className="text-heading md:text-2xl font-semibold mb-2">
            5. Intellectual Property Rights
          </h2>
          <p className="text-base md:text-lg mb-4">
            All content on the programmX website, including text, graphics,
            logos, and software, is the property of programmX or its licensors.
            You may not reproduce, distribute, or use any content without
            explicit permission.
          </p>

          <h2 className="text-heading md:text-2xl font-semibold mb-2">
            6. Limitation of Liability
          </h2>
          <p className="text-base md:text-lg mb-4">
            programmX will not be held liable for any damages arising from the
            use or inability to use our services, including direct, indirect,
            incidental, or consequential damages.
          </p>

          <h2 className="text-heading md:text-2xl font-semibold mb-2">
            7. Termination
          </h2>
          <p className="text-base md:text-lg mb-4">
            We reserve the right to terminate or suspend access to our services
            immediately, without prior notice, for conduct that we deem to be in
            violation of these Terms and Conditions or harmful to others.
          </p>

          <h2 className="text-heading md:text-2xl font-semibold mb-2">
            8. Governing Law
          </h2>
          <p className="text-base md:text-lg mb-4">
            These Terms and Conditions are governed by and construed in
            accordance with the laws of [Your Jurisdiction], and you submit to
            the exclusive jurisdiction of the courts in that location.
          </p>

          <h2 className="text-heading md:text-2xl font-semibold mb-2">
            9. Changes to Terms and Conditions
          </h2>
          <p className="text-base md:text-lg mb-4">
            We reserve the right to modify or replace these Terms and Conditions
            at any time. We will notify you of any changes by posting the new
            Terms and Conditions on this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
