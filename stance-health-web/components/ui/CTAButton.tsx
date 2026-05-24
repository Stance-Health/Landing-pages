export function CTAButton({ label = 'Book Your Assessment' }) {
  return (
    <a
      href="https://dashboard.stance.health/onboarding-patient?utm_source=website&utm_medium=cta&utm_campaign=website_booking"
      className="inline-block bg-lime text-navy px-10 py-5 font-unbounded text-sm uppercase tracking-tighter hover:bg-white transition-colors duration-300"
    >
      {label}
    </a>
  )
}
