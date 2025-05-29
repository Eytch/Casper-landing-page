/* eslint-disable react/no-unescaped-entities */
function Privacy() {
  return (
    <div className="p-8 max-w-4xl mx-auto pt-10">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        This privacy policy applies to the Casper app (hereby referred to as
        "Application") for mobile devices that was created by Ahmed Hassan
        (hereby referred to as "Service Provider") as a Freemium service. This
        service is intended for use "AS IS".
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Information Collection and Use
      </h2>
      <p className="mb-4">
        The Application does not collect any personal data. The Service Provider
        does not gather any information about your device or usage of the
        Application.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Third Party Access</h2>
      <p className="mb-4">
        The Application uses RevenueCat for managing in-app purchases.
        RevenueCat has its own Privacy Policy which you can review here:{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          RevenueCat Privacy Policy
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-2">Opt-Out Rights</h2>
      <p className="mb-4">
        Since no personal data is collected by the Application, there is no need
        for an opt-out process. However, you can review and manage your data
        preferences directly through RevenueCat’s policies.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Data Retention Policy</h2>
      <p className="mb-4">
        The Service Provider does not retain any personal data as no data is
        collected. However, RevenueCat may retain data according to its own
        privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Children</h2>
      <p className="mb-4">
        The Service Provider does not use the Application to knowingly solicit
        data from or market to children under the age of 13. The Application
        does not address anyone under the age of 13.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Security</h2>
      <p className="mb-4">
        The Service Provider is committed to ensuring the security of the
        Application. Since no data is collected directly, there are no specific
        security measures applied beyond those of RevenueCat. Please refer to
        RevenueCat’s privacy policy for details on their security practices.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Changes</h2>
      <p className="mb-4">
        This Privacy Policy may be updated from time to time for any reason. The
        Service Provider will notify you of any changes by updating this page
        with the new Privacy Policy. You are advised to consult this Privacy
        Policy regularly for any changes, as continued use is deemed approval of
        all changes.
      </p>

      <p className="mb-4">This privacy policy is effective as of 05-28-2025</p>

      <h2 className="text-2xl font-semibold mb-2">Your Consent</h2>
      <p className="mb-4">
        By using the Application, you are consenting to the practices described
        in this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p>
        If you have any questions regarding privacy while using the Application,
        or have questions about the practices, please contact the Service
        Provider via email at{" "}
        <a href="mailto:eytch7@gmail.com" className="text-blue-500">
          eytch7@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

export default Privacy;
