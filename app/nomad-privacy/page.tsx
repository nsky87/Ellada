
export default function NomadPrivacy() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "60px 24px",
        fontFamily: "'Segoe UI', sans-serif",
        lineHeight: 1.8,
        color: "#1a1a1a",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ marginBottom: 40 }}>
        <span style={{ fontSize: 40 }}>🧭</span>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            margin: "12px 0 4px",
          }}
        >
          Nomad
        </h1>
        <p style={{ color: "#666", margin: 0 }}>
          Privacy Policy
        </p>
      </div>

      <p style={{ color: "#444", fontSize: 14 }}>
        Last updated: October 26, 2026
      </p>

      <p>
        Nomad is a travel-themed puzzle game. This Privacy
        Policy explains how the Nomad mobile application
        handles information when you use the app.
      </p>

      <h2 style={headingStyle}>
        Information We Collect
      </h2>
      <p>
        Nomad does not require you to create an account and
        does not directly collect or transmit personal
        information to our servers.
      </p>
      <p>
        Game progress and related gameplay preferences may
        be stored locally on your device so you can continue
        playing. This locally stored information is not
        transmitted to us by the app.
      </p>
      <p>
        You can remove locally stored app data by clearing
        the app's storage in your device settings or by
        uninstalling the app. Uninstalling the app may
        permanently remove your local game progress.
      </p>

      <h2 style={headingStyle}>
        Third-Party Services
      </h2>
      <p>
        The current version of Nomad does not include
        third-party advertising SDKs, analytics services,
        or tracking services.
      </p>
      <p>
        The operating system, app store, or device platform
        may process technical information according to their
        own privacy policies and settings.
      </p>

      <h2 style={headingStyle}>
        Children's Privacy
      </h2>
      <p>
        Nomad does not knowingly collect personal information
        from children. The app does not provide an in-app
        account registration or a feature for submitting
        personal information to us.
      </p>

      <h2 style={headingStyle}>
        Data Security
      </h2>
      <p>
        Gameplay data stored locally is managed by the app
        on your device. Please keep your device secure to
        help protect information stored on it.
      </p>

      <h2 style={headingStyle}>
        Changes to This Policy
      </h2>
      <p>
        We may update this Privacy Policy when the app's
        features or data practices change. Any updates will
        be published on this page along with a revised
        "Last updated" date.
      </p>

      <h2 style={headingStyle}>
        Contact Us
      </h2>
      <p>
        If you have questions about this Privacy Policy,
        contact us at{" "}
        <a
          href="mailto:hello@ellada.studio"
          style={{ color: "#8B5CF6" }}
        >
          hello@ellada.studio
        </a>.
      </p>

      <p
        style={{
          marginTop: 60,
          color: "#aaa",
          fontSize: 13,
        }}
      >
        © 2026 Ellada Studio. All rights reserved.
      </p>
    </main>
  );
}

const headingStyle = {
  fontSize: 20,
  marginTop: 40,
  borderBottom: "1px solid #eee",
  paddingBottom: 8,
};
