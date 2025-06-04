import React from "react";
import Accordion from "react-bootstrap/Accordion";

import Container from "react-bootstrap/Container";
function Faq() {
  const accor = [
    {
      head: "WHY MUST I MAKE PAYMENT IMMEDIATELY AT CHECKOUT?",
      body: "Sample ordering is on ‘first-come-first-served’ basis. To ensure that you get your desired samples, it is recommended that you make your payment within 60 minutes of checking out.",
    },
    {
      head: "Is your website secure?",
      body: "Yep! On any page where we ask you to enter your address, phone number, or credit card information, we use secure socket layer (SSL) to encrypt the communication.",
    },

    {
      head: "When will my order ship?",
      body: "After your payment is verified, it takes up to 24 hours to process and ship your order. This does not include weekends or holidays. Purchases made after 11 am PST will not be shipped out until the next business day. If you order after 11 am PST on a Friday, your order will likely be shipped out on the following Monday.",
    },

    {
      head: "HOW DO I MAKE PAYMENTS USING PAYPAL? HOW DOES IT WORK?",
      body: "Paypal is the easiest way to make payments online. While checking out your order, you will be redirected to the Paypal website. Be sure to fill in correct details for fast & hassle-free payment processing. After a successful Paypal payment, a payment advice will be automatically generated to cartsy.redq.io system for your order.",
    },

    {
      head: "How much do deliveries cost? ",
      body: "There is a 5$ delivery fee if the order value is 50$ or more. If the order value is less than 50$, we charge BDT 10$ delivery fee. ",
    },

    {
      head: "How can I contact you?",
      body: "You can always call +95625055xx or mail us at support@example.com. ",
    },

    {
      head: "What are the benefits of registering?",
      body: "By registering with us you can view and track your orders any time by logging into your account. Registered members also enjoy exclusive previews and updates by subscribing to our newsletter.",
    },

    {
      head: "I forgot my password, how do I reset it?",
      body: "Click on the ‘Forgot Password’ option available on the Log In page. A link to set a new password will be sent to your registered email id.",
    },

    {
      head: "Can I edit my personal information?",
      body: "Yes. You can edit your personal information in the ‘My Account’ section by logging in.",
    },
  ];
  return (
    <>
      <Container className="w-50 my-5">
        <h1 className="text-center mb-3">FAQs</h1>
        <Accordion defaultActiveKey="0" flush>
          {accor.map((val, i) => {
            return (
              <Accordion.Item eventKey={i} className="border mb-2">
                <Accordion.Header>{val.head}</Accordion.Header>
                <Accordion.Body>{val.body}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>

        
      </Container>
    </>
  );
}

export default Faq;
