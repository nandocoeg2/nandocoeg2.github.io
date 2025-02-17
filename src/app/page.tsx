import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Fernando Julian</h1>
      <p className="mt-2 text-lg sm:text-xl">
        Software Engineer | Jakarta, Indonesia
      </p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          I&apos;m passionate about web development, and I love to learn new
          things. I&apos;m always looking for new challenges and opportunities
          to grow.
        </p>

        <br />

        <p>
          I have experience working with JavaScript, React, Next.js, Node.js,
          and other web technologies.
        </p>

        <br />

        <p>
          I&apos;m currently working at{' '}
          <a
            href="https://www.cimbiaga.co.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            PT CIMB Niaga Tbk
          </a>
          .
        </p>

        <br />

        <p>
          You can find me on{' '}
          <a
            href="https://www.facebook.com/codenando/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Facebook
          </a>
          ,{' '}
          <a
            href="https://id.linkedin.com/in/fernando-julian/d"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            href="https://github.com/nandocoeg2/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
          , and{' '}
          <a
            href="https://x.com/nandocoeg/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            X (formerly Twitter)
          </a>
          .
        </p>
      </div>

      <Links />
    </div>
  )
}
