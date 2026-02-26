import PageLayout from "../layouts/PageLayout";

export default function Security() {
  return (
    <PageLayout title="Security">
      <p>We use industry-standard encryption to protect your data.</p>
      <p>All authentication is handled securely using JWT tokens.</p>
      <p>Passwords are encrypted and never stored in plain text.</p>
    </PageLayout>
  );
}