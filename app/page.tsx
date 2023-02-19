import Link from "next/link";

const Row = ({
  title,
  href,
  children,
}: {
  href?: string;
  title: string;
  children: string;
}) => {
  const content = (
    <div className="flex flex-row">
      <pre className="flex flex-1">
        <span className="hidden sm:block">{"type  "}</span>:{title}
        <span className="hidden sm:block">{"<ENTER>"}</span>
      </pre>
      <div className="w-56">{children}</div>
    </div>
  );

  if (href == null) {
    return content;
  }
  return <Link href={href ?? `/${title}`}>{content}</Link>;
};

export default function Home2() {
  return (
    <main className="flex flex-1 flex-col justify-center gap-4 p-8">
      <div className="flex flex-col self-center items-center">
        <h1 className="text-center">Hey, I am Colin Busch</h1>

        <div className="flex flex-1 flex-col mb-4">
          <h2 className="text-center mx-4">
            a developer who loves to bring{" "}
            <span className="font-medium">UX</span> and{" "}
            <span className="font-medium">DX</span> together 🤝
          </h2>
        </div>
        <h2 className="text-center">here is what you can do:</h2>

        <div className="flex flex-col self-stretch mb-4">
          <Row href="help" title="help">
            if you are new!
          </Row>
          <Row href="about" title="about">
            to learn more about me
          </Row>
          <Row title="back">to go back</Row>
          <Row title="fours" href="https://www.connectfour.xyz/">
            to play fours
          </Row>
          <Row title="q" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            to exit
          </Row>
        </div>

        <span className="text-center">Where you can find me</span>

        <div className="flex flex-col self-stretch mb-12">
          <Row title="github" href="https://github.com/buschco">
            to my github profile
          </Row>
          <Row title="email" href="mailto:colin@busch.dev">
            to get my email
          </Row>
        </div>
      </div>
    </main>
  );
}
