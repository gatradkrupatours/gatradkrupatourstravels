<template>
  <Head>
    <Title>{{ SITE_NAME }} - Terms & Conditions</Title>
  </Head>

  <Header />
  <section class="section-background">
    <div class="container">
      <div class="about-info">
        <h1>Terms & Conditions</h1>
        <p><strong>Effective Date: 18 May, 2024</strong></p>
        <p>
          Welcome to {{ SITE_NAME }}. By accessing or using our website and
          services, you agree to comply with and be bound by the following terms
          and conditions. Please review them carefully.
        </p>

        <h2>1. General Terms</h2>
        <h3>1.1 Acceptance of Terms</h3>
        <p>
          By using our services, you agree to these Terms & Conditions. If you
          do not agree, please do not use our services.
        </p>
        <h3>1.2 Modification of Terms</h3>
        <p>
          We reserve the right to modify these terms at any time. Changes will
          be effective immediately upon posting. Your continued use of the site
          and services after any modifications indicates your acceptance of the
          new terms.
        </p>

        <h2>2. Rental Agreement</h2>
        <h3>2.1 Eligibility</h3>
        <p>
          To rent a vehicle with a driver, you must be at least 18 years old and
          possess a valid ID.
        </p>
        <h3>2.2 Rental Period</h3>
        <p>
          The rental period begins when the vehicle and driver arrive at the
          designated pickup location and ends when the vehicle and driver are
          returned to the drop-off location. Additional charges may apply for
          overtime usage.
        </p>
        <h3>2.3 Vehicle Condition</h3>
        <p>
          Our drivers are responsible for maintaining the vehicle in good
          condition during the rental period. Customers are required to report
          any issues with the vehicle immediately to our customer service team.
        </p>
        <h3>2.4 Usage Restrictions</h3>
        <p>Our vehicles and drivers must not be used:</p>
        <ul>
          <li>For any illegal purpose.</li>
          <li>
            By any person who is not an authorized driver provided by
            {{ SITE_NAME }}.
          </li>
          <li>To push or tow another vehicle.</li>
          <li>In any race, test, or contest.</li>
          <li>Outside the permitted geographical area.</li>
        </ul>

        <h2>3. Payments and Fees</h2>
        <h3>3.1 Rental Rates</h3>
        <p>
          Rental rates are determined by the type of vehicle, the rental period,
          and the inclusion of a driver. All rates are subject to applicable
          taxes and fees.
        </p>
        <h3>3.2 Payment Methods</h3>
        <p>We accept the following payment methods:</p>
        <ul>
          <li>Cash</li>
          <li>Bank Transfer</li>
          <li>UPI (such as Google Pay, PhonePe, Paytm)</li>
        </ul>
        <p>
          Payment is due at the time of reservation or vehicle pickup, depending
          on the rental agreement.
        </p>
        <h3>3.3 Additional Fees</h3>
        <p>Additional fees may apply for:</p>
        <ul>
          <li>Overtime usage</li>
          <li>Additional services</li>
          <li>Tolls</li>
          <li>Parking fees</li>
          <li>Entrance fees</li>
          <li>Fines</li>
          <li>Damages</li>
        </ul>

        <h2>4. Cancellations and Refunds</h2>
        <h3>4.1 Cancellation Policy</h3>
        <p>
          Reservations can be canceled up to 5 days before the pickup time for a
          full refund. Cancellations made after this period may incur a fee.
        </p>
        <h3>4.2 Refunds</h3>
        <p>
          Refunds will be processed within 5 working days of the cancellation or
          completion of the rental period, subject to inspection and approval.
        </p>

        <h2>5. Insurance and Liability</h2>
        <h3>5.1 Insurance Coverage</h3>
        <p>
          Basic insurance coverage is included in the rental rate. Additional
          coverage options may be available for purchase.
        </p>
        <h3>5.2 Accidents and Damages</h3>
        <p>
          In the event of an accident, our driver will report it immediately to
          {{ SITE_NAME }} and the local authorities. Customers are responsible
          for any damages not covered by insurance.
        </p>
        <h3>5.3 Liability</h3>
        <p>
          {{ SITE_NAME }} is not liable for any indirect, incidental, or
          consequential damages arising from the rental or use of our vehicles
          and drivers.
        </p>

        <h2>6. Privacy</h2>
        <h3>6.1 Personal Information</h3>
        <p>
          We collect and use your personal information in accordance with our
          Privacy Policy, which is available on our website.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws
          of India. Any disputes arising out of or related to these terms shall
          be subject to the exclusive jurisdiction of the courts in Kachchh,
          Gujarat, India.
        </p>

        <h2>8. Contact Information</h2>
        <p>
          If you have any questions or concerns about these Terms & Conditions,
          please contact us at:
        </p>
        <p>
          <strong>Phone:</strong> {{ MO_NUMBER_STR }}<br />
          <strong>Address:</strong> {{ HQ_ADDRESS }}
        </p>

        <p>
          <strong>{{ SITE_NAME }}</strong
          ><br />
        </p>
      </div>
    </div>
  </section>
  <Footer />
</template>
