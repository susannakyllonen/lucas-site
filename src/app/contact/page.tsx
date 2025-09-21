"use client";

import Header from "@/components/Header";
import { useState } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #ddd;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 2rem;
  background: black;
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.3s;

  &:hover {
    background: #333;
  }
`;

const SuccessMessage = styled.div`
  background: #e6ffed;
  border: 2px solid #b6f5c2;
  color: #22543d;
  padding: 1.5rem;
  border-radius: 1.5rem;
  font-size: 1.15rem;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 1rem;
`;

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const category = (form[2] as HTMLSelectElement).value;
    const message = (form[3] as HTMLTextAreaElement).value;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, category, message }),
    });

    if (res.ok) {
      setSent(true);
      form.reset();
    } else {
      alert("Message failed to send.");
    }
  }

  return (
    <PageWrapper>
      <Header />
      <Heading>Laita viestiä</Heading>
      <Subheading>It all begins with a message.</Subheading>

      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <TextArea placeholder="How can I help?" required />
        <SubmitButton type="submit">Submit</SubmitButton>
        {sent && (
          <SuccessMessage>
            🎉 Message sent successfully! I’ll get back to you soon.
          </SuccessMessage>
        )}
      </Form>
    </PageWrapper>
  );
}
