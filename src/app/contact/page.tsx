"use client";

import Header from "@/components/Header";
import { useState } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: calc(88px + 4rem) 2rem 6rem;
  max-width: 720px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 0.75rem;
  text-align: center;
`;

const Subheading = styled.p`
  font-size: 1.15rem;
  text-align: center;
  color: #555;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
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
  padding: 1.25rem;
  border-radius: 1rem;
  font-size: 1.05rem;
  font-weight: 500;
  margin-top: 1rem;
`;

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const message = (form[2] as HTMLTextAreaElement).value;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setSent(true);
      form.reset();
    } else {
      alert("Viestin lähettäminen epäonnistui.");
    }
  }

  return (
    <PageWrapper>
      <Header />
      <Heading>Ota yhteyttä</Heading>
      <Subheading>
        Jos haluat jutella yhteistyöstä, mediasta tai futiksesta yleensä, jätä
        viesti alle. Luen kaikki viestit ja vastaan niin pian kuin voin.
      </Subheading>

      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Nimi" required />
        <Input type="email" placeholder="Sähköposti" required />
        <TextArea placeholder="Viesti" required />
        <SubmitButton type="submit">Lähetä</SubmitButton>
        {sent && (
          <SuccessMessage>
            🎉 Viesti lähetetty onnistuneesti! Palaan pian asiaan.
          </SuccessMessage>
        )}
      </Form>
    </PageWrapper>
  );
}
