import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
      
      <div className="prose prose-indigo max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            Welcome to AirdropFarm. By accessing our website, you agree to these terms and conditions.
            These terms apply to all users of the site, including without limitation users who are
            browsers, customers, merchants, and contributors of content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to temporarily access the materials on AirdropFarm's website for
            personal, non-commercial transitory viewing only.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>The materials cannot be modified</li>
            <li>The materials cannot be used for commercial purposes</li>
            <li>Any use of the materials for unauthorized purposes is prohibited</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="text-gray-600 mb-4">
            The materials on AirdropFarm's website are provided on an 'as is' basis. AirdropFarm
            makes no warranties, expressed or implied, and hereby disclaims and negates all other
            warranties including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="text-gray-600 mb-4">
            In no event shall AirdropFarm or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on AirdropFarm's website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
          <p className="text-gray-600 mb-4">
            The materials appearing on AirdropFarm's website could include technical, typographical,
            or photographic errors. AirdropFarm does not warrant that any of the materials on its
            website are accurate, complete, or current.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Changes</h2>
          <p className="text-gray-600 mb-4">
            AirdropFarm may revise these terms of service at any time without notice. By using this
            website, you are agreeing to be bound by the current version of these terms of service.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;