import React from "react";
import { motion } from "framer-motion";
import { Shield, User, Mail, Globe, Database, FileText } from "lucide-react";
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">
          At <span className="font-semibold">Gokulam Sanctuary by Joginder Properties</span>, 
          we are committed to protecting your personal information and your right to privacy. 
          This Privacy Policy explains how we collect, use, and safeguard your data when you 
          interact with our website, properties, and services.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
            <p className="text-gray-600">
              We may collect personal details such as your name, phone number, email address, 
              and property preferences when you inquire about or book a unit. We also gather 
              non-identifiable information like website usage patterns for analytics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">2. How We Use Your Information</h2>
            <p className="text-gray-600">
              Your information is used to respond to inquiries, provide property-related updates, 
              send promotional offers, and ensure smooth communication during the booking or 
              purchase process. We may also use your data for legal and regulatory compliance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Information Sharing</h2>
            <p className="text-gray-600">
              We do not sell or rent your personal information. However, we may share data with 
              trusted partners such as banks (for home loans), legal advisors, or service providers 
              directly involved in the property transaction process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Data Security</h2>
            <p className="text-gray-600">
              We implement strict security measures to protect your data from unauthorized access, 
              disclosure, alteration, or destruction. However, no system is completely secure, 
              and we cannot guarantee absolute security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Your Rights</h2>
            <p className="text-gray-600">
              You have the right to access, update, or request deletion of your personal data. 
              For any requests, please contact us at{" "}
              <a
                href="mailto:joginderpropertiesncr@gmail.com"
                className="text-yellow-600 font-medium hover:underline"
              >
                joginderpropertiesncr@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time to reflect changes in our 
              practices or legal obligations. Updates will be posted on this page with the 
              revised date.
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-400 transition-colors"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;