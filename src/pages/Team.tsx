export default function Team() {
  return (
    <>
      <h1 className="text-8xl font-bold">MEET THE TEAM</h1>
      <p className="text-xl mt-4">
        Meet our talented team! Each member brings unique skills and
        experiences, contributing to our collective success. Learn more about
        their backgrounds and expertise below.
      </p>
      <img alt="Team photo" />

      <hr className="border-muted-text/20 my-8" />

      <section className="executives">
        <h2 className="text-5xl font-bold">Executive Board</h2>
      </section>

      <hr className="border-muted-text/20 my-8" />

      <section className="team-leads">
        <h2 className="text-5xl font-bold">Team Leads</h2>
      </section>

      <hr className="border-muted-text/20 my-8" />

      <section className="robothon-chairs">
        <h2 className="text-5xl font-bold">Robothon Chairs</h2>
      </section>
    </>
  );
}
