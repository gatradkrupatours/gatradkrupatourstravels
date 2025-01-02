<template>
  <Head>
    <Title>{{ SITE_NAME }} - Privacy Policy</Title>
  </Head>
  <Header />
  <section class="section-background">
    <div class="container">
      <div class="about-info">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date: 1 January, 2024</strong></p>
        <p>
          At {{ SITE_NAME }}, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, disclose, and safeguard
          your information when you use our services.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Personal Information</h3>
        <p>
          We may collect personal information that you voluntarily provide to us
          when you register on the website, make a reservation, or contact us.
          This information may include:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Address</li>
          <li>Payment information</li>
          <li>Identification documents</li>
        </ul>

        <h3>1.2 Usage Data</h3>
        <p>
          We may also collect information about your interactions with our
          website and services. This may include:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Pages visited</li>
          <li>Time and date of visit</li>
          <li>Referring URLs</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ul>
          <li>To provide, operate, and maintain our services</li>
          <li>To process and manage reservations</li>
          <li>
            To communicate with you, including sending booking confirmations and
            updates
          </li>
          <li>To personalize your experience on our website</li>
          <li>To improve our website and services</li>
          <li>To detect and prevent fraud</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>
          We may share your information with third parties in the following
          circumstances:
        </p>
        <ul>
          <li>
            With service providers who perform services on our behalf, such as
            payment processing and customer service
          </li>
          <li>
            With law enforcement or regulatory agencies if required by law
          </li>
          <li>
            In connection with a business transaction, such as a merger or
            acquisition
          </li>
        </ul>

        <h2>4. Security of Your Information</h2>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is 100% secure.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You have certain rights regarding your personal information, including
          the right to:
        </p>
        <ul>
          <li>Access and review your personal information</li>
          <li>Request corrections to your personal information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of receiving marketing communications</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information
          provided below.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these third-party
          sites.
        </p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on our website.
          Your continued use of our services after any modifications indicates
          your acceptance of the new terms.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p>
          <strong>Phone:</strong> {{ MO_NUMBER_STR }}<br />
          <strong>Address:</strong> {{ HQ_ADDRESS }}
        </p>

        <p>
          <strong>{{ SITE_NAME }}</strong><br />
        </p>
      </div>
    </div>
  </section>
  <Footer />
</template>
