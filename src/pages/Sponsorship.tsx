export default function Sponsorship() {
  return (
    <>
      <h1 className="text-8xl font-bold">Fund a droid. Make a difference!</h1>

      <article className="sponsor-info">
        <h2 className="text-5xl font-bold">No contribution is too small.</h2>
        <p className="text-xl leading-relaxed">
          Be a part of transforming the future of robotics at UCSD! Triton
          Droids is embarking on a mission to create a state-of-the-art humanoid
          robot that will redefine technology and innovation. Your support will
          enable students to acquire practical experience and engage in
          pioneering research. Together, we can cultivate the next wave of
          robotics and inspire the leaders of tomorrow!
        </p>
      </article>

      <section className="donate-info flex flex-col gap-4 mt-8">
        <button className="btn-primary">DONATE NOW</button>
        <a href="#" className="text-accent">
          View our Sponsorship Package
        </a>
        <p className="text-muted-text">
          Contact for pitch presentation: tritondroids@ucsd.edu
        </p>
      </section>
    </>
  );
}
