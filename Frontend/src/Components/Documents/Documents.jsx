import React, { useState } from "react";
import { FaFileAlt, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Documents = ({ onSubmit }) => {
  const [visitedDocs, setVisitedDocs] = useState(new Set());

  const handleDocumentClick = (docId) => {
    setVisitedDocs((prevDocs) => new Set(prevDocs).add(docId));
  };

  const handleStartApplication = () => {
    onSubmit();
  };

  return (
    <section id="documents" className="py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">
          Important documents to review
        </h2>
        <p className="text-center mb-8">
          Please open and read all of the following important documents - you
          won’t be able to apply until you’ve done so. Please also save or print
          copies of these documents for future reference. If you have any
          questions about the contents of these documents please contact us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {[
            "fscs-information",
            "terms-conditions",
            "key-features",
            "privacy-policy",
          ].map((doc) => (
            <a
              key={doc}
              href={`path/to/${doc}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="document-link flex items-center bg-gray-200 p-4 rounded-md relative"
              data-doc={doc}
              onClick={() => handleDocumentClick(doc)}
            >
              <div className="relative">
                {visitedDocs.has(doc) && (
                  <FaCheckCircle className="text-green-500 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2" />
                )}
                <FaFileAlt className="text-2xl text-gray-700 mr-4" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold">
                  {doc
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </h3>
                <p>Read and review</p>
              </div>
              <FaArrowRight className="text-2xl text-gray-700 ml-auto" />
            </a>
          ))}
        </div>
        <p className="text-center mt-8">
          If you click on ‘Start Application’ button below, you confirm your
          agreement to both the General Savings Conditions and Key Features &
          Summary Box document.
        </p>
        <div className="flex justify-center mt-4">
          <button
            id="start-application"
            onClick={handleStartApplication}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              visitedDocs.size === 4 ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={visitedDocs.size !== 4}
          >
            START APPLICATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default Documents;
