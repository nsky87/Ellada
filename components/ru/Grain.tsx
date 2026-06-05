export default function Grain() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[999]
        opacity-[0.035]
        mix-blend-soft-light
      "
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Ccircle cx='12' cy='18' r='1'/%3E%3Ccircle cx='48' cy='90' r='1'/%3E%3Ccircle cx='82' cy='44' r='1'/%3E%3Ccircle cx='120' cy='60' r='1'/%3E%3Ccircle cx='32' cy='122' r='1'/%3E%3C/g%3E%3C/svg%3E")
        `,
      }}
    />
  );
}