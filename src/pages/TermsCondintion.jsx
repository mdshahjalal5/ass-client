import React from "react";
import { boxes } from "../constant";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto bg-white">
      <Helmet>title="Terms & Conditions || Subscription Box"</Helmet>
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">
        Terms & Conditions
      </h1>

      <section className="mb-8">
        <p className="mb-4">
          By subscribing to our technology boxes, you agree to the following
          terms and conditions. These boxes are curated to enhance your
          learning, hobby, or professional interest in the latest tech domains.
          Subscriptions are billed according to the selected frequency and are
          non-refundable once shipped.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700">
          <li>
            All boxes are subject to availability and may be replaced with
            equivalent alternatives.
          </li>
          <li>
            Subscribers must ensure their shipping and billing information is
            accurate.
          </li>
          <li>
            Benefits like tutorials, early access, or downloads are for personal
            use only and cannot be redistributed.
          </li>
          <li>
            Subscription may be paused or canceled from your account dashboard
            at least 7 days before the renewal date.
          </li>
        </ul>
      </section>

      <hr className="my-10" />

      <h2 className="text-2xl font-semibold text-primary mb-4">
        Box-Specific Terms
      </h2>

      {boxes.map((box) => (
        <div key={box.id} className="mb-10 border rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-4 mb-2">
            <img
              src={box.thumbnail}
              alt={box.name}
              className="w-16 h-16 rounded object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">{box.name}</h3>
              <p className="text-sm text-gray-500">
                {box.tech_category} • {box.frequency} • ${box.price}
              </p>
            </div>
          </div>
          <p className="text-gray-700 mb-3">{box.description}</p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">
                What's Included:
              </h4>
              <ul className="list-disc ml-5 text-gray-600">
                {box.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">
                Subscription Benefits:
              </h4>
              <ul className="list-disc ml-5 text-gray-600">
                {box.subscription_benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TermsAndConditions;
