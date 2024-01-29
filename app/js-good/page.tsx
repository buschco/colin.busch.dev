import { Fragment, HTMLProps, ReactElement, ReactNode } from "react";

export type HProps<HTMLElementType, CustomProps> = Pick<
  HTMLProps<HTMLElementType>,
  Exclude<keyof HTMLProps<HTMLElementType>, keyof CustomProps>
> &
  CustomProps;

const colored = (tw: string) => {
  const Comp = ({
    className = "",
    ...p
  }: HProps<HTMLSpanElement, {}>): ReactElement => (
    <span {...p} className={tw.concat(className)} />
  );
  Comp.displayName = tw;
  return Comp;
};

const I = colored("text-accent");
const F = colored("text-func");
const C = colored("text-cons");
const S = colored("text-str");
const P = colored("text-special");
const M = colored("text-muted");

export default function About() {
  return (
    <main className="container lg:w-1/2 mx-auto p-8">
      <div className="flex flex-col gap-8">
        <h1 className="mb-4 font-bold text-special">
          # Please, give me a real alternative for Javascript
        </h1>

        <div>
          So often I hear things like "Javascript bad: so slow", "Javascript
          bad: no real types", or "Javascript bad: everyday the reinvent
          themselves". And yes, Javascript and the ecosystem around it has some
          downsides, but it also solves some things really well. No other
          language to my knowledge, solves these points as comprehensively,
          equally, or better than Javascript.
        </div>

        <h2 className="text-func font-bold">## Fast "compiling"</h2>

        <div>
          If you develop frontends, you might find yourself adding spacings
          between two elements, improving the <I>onClick</I> handler of a button
          or fixing some texts. In most Javascript based Frameworks these
          changes happen instant, thanks to features like hot reloading. In
          SwiftUI for example you can get this real time experience, but only in
          the Preview mode, similar to Storybook in Javascript land. Seeing
          these changes in a real app, requires a recompile which takes around
          10 seconds 😣. For backend systems written in Kotlin, waiting minutes
          just to compile and run the project is completely normal.
        </div>

        <h2 className="text-func font-bold">## Intuitive types</h2>

        <div>
          <div>
            I never came across any language that made it so easy for union
            types like Javascript types systems (Flow/Typescript). The use case
            is simple: A <S>Message</S> can either be a <S>Greeting</S> or a{" "}
            <S>Reaction</S>.
            <pre className="py-4 flex flex-col">
              <M>{"//"} typescript</M>
              {[
                {
                  name: "MessageBase",
                  props: [{ name: "emoji", value: "string" }],
                },
                {
                  name: "Greeting",
                  and: "MessageBase",
                  props: [
                    { name: "type", value: '"greeting"' },
                    { name: "text", value: "string" },
                  ],
                },
                {
                  name: "Reaction",
                  and: "MessageBase",
                  props: [{ name: "type", value: '"reaction"' }],
                },
              ].map((e) => (
                <div key={e.name}>
                  <P>type</P> <S>{e.name}</S>
                  {e.and && <F> & </F>}
                  {e.and && <S>{e.and}</S>} = {e.props.length && "{ "}
                  {e.props.map((p, i, a) => (
                    <Fragment key={p.name}>
                      <I>{p.name}</I>: <S>{p.value}</S>
                      {i !== a.length - 1 && "; "}
                    </Fragment>
                  ))}
                  {e.props.length && " } "}
                </div>
              ))}

              <div>
                <P>type</P> <S>Message</S> = <S>Greeting</S> <F>|</F>{" "}
                <S>Reaction</S>;
              </div>
              <div> </div>

              <div>
                <div>
                  <P>function</P> <F>displayEmoji</F>(<I>message</I>:{" "}
                  <S>Message</S>) {"{"}
                </div>
                <div>
                  {"  "}
                  <F>alert</F>(<I>message</I>.<I>emoji</I>);
                </div>
              </div>
              <div>{"}"}</div>

              <div> </div>

              <div>
                <div>
                  <P>function</P> <F>displayText</F>(<I>message</I>:{" "}
                  <S>Message</S>) {"{"}
                </div>

                <div>
                  {"  "}
                  <P>if</P> (<I>message</I>.<I>type</I> <F>!==</F>{" "}
                  <S>"greeting"</S>) <P>return</P>;
                </div>
                <div>
                  {"  "}
                  <F>alert</F>(<I>message</I>.<I>emoji</I>);
                </div>
              </div>
              <div>{"}"}</div>
              <div> </div>

              <div>
                <div>
                  <P>function</P> <F>handleMessage</F>(<I>message</I>:{" "}
                  <S>Message</S>) {"{"}
                </div>
                <div>
                  {"  "}
                  <F>displayEmoji</F>(<I>message</I>);
                </div>
                <div>
                  {"  "}
                  <F>displayText</F>(<I>message</I>);
                </div>
              </div>
              <div>{"}"}</div>
            </pre>
            If you ever want to add the <I>text</I> property to a{" "}
            <S>Reaction</S> you only have to touch the code that is relevant to
            this change (<F>displayText</F>) and and follow the errors that Flow
            or Typescript gives you. Other languages tend to make some
            inheritance or abstract stuff which results in boilerplate code
            which is harder to understand.
            <pre className="py-4 flex flex-col">
              <M>{"//"} kotlin</M>
              <div>
                <S>sealed</S> <P>interface</P> <S>MessageBase</S> {"{"}
              </div>

              <div>
                {"  "}
                <P>val</P> <I>emoji</I>: <S>String</S>
              </div>
              {"}"}

              <div> </div>

              <div>
                <S>data</S> <P>class</P> <S>Greeting</S>(
              </div>
              <M>
                {"  // every prop of MessageBase must be listed here, why?"}
              </M>
              <div>
                {"  "}
                <S>override</S> <P>val</P> <I>emoji</I>: <S>String</S>,
              </div>
              <div>
                {"  "}
                <P>val</P> <I>type</I>: <S>String</S> <F>=</F> <S>"greeting"</S>
                ,
              </div>
              <div>
                {"  "}
                <P>val</P> <I>type</I>: <S>String</S>
              </div>
              <div>
                ) : <S>MessageBase</S>
              </div>

              <div> </div>

              <div>
                <S>data</S> <P>class</P> <S>Reaction</S>(
              </div>
              <div>
                {"  "}
                <S>override</S> <P>val</P> <I>emoji</I>: <S>String</S>,
              </div>
              <div>
                {"  "}
                <P>val</P> <I>type</I>: <S>String</S> <F>=</F> <S>"reaction"</S>
                ,
              </div>
              <div>
                ) : <S>MessageBase</S>
              </div>
            </pre>
            I also think having a handful of primitive types is much easier to
            work with. Most of the times I even don't care if it is an{" "}
            <C>Int</C> or a <C>float</C>. I never cared if the number is an{" "}
            <C>int</C>, <C>int8</C>, <C>int16</C>, <C>int32</C> or <C>int64</C>.
            Take this example: You have a <I>width</I> and and fixed list of
            entries and want to calculate the space for each entry. In Swift for
            example you have to convert <I>count</I> to a <C>Double</C> just to
            be able to perform the division.
            <pre className="py-4 flex flex-col">
              <M>{"//"} swift</M>
              <div>
                <P>let</P> <I>width</I> = <C>100.0</C>
              </div>
              <div>
                <P>let</P> <I>bars</I> ={" [ "}
                {[1, 2, 3, 4, 5, 6].map((n, i, { length }) => (
                  <Fragment key={n}>
                    <C>{n}</C>
                    {i !== length - 1 && ", "}
                  </Fragment>
                ))}
                {" ]"}
              </div>
              <div>
                <P>let</P> <I>barSpace</I> = <I>width</I> / <S>Double</S>(
                <S>bars</S>.<I>count</I>)
              </div>
            </pre>
            The worst part is, if you divide two <C>Int</C>s and Kotlin won't
            even warn you about the hidden rounding it will perform:
            <pre className="py-4 flex flex-col">
              <M>{"//"} kotlin</M>
              <div>
                <P>val</P> <I>bars</I> ={" listOf("}
                {[1, 2, 3, 4, 5, 6].map((n, i, { length }) => (
                  <Fragment key={n}>
                    <C>{n}</C>
                    {i !== length - 1 && ", "}
                  </Fragment>
                ))}
                {")"}
              </div>
              <div>
                <P>val</P> <I>average</I> = <I>bars</I>.<F>sum()</F> /{" "}
                <I>bars</I>.<I>size</I>
              </div>
            </pre>
            The average here is not <C>3</C> it is <C>3.5</C> 😐
          </div>
          <div>
            I agree that different types for numbers can help you to improve the
            performance, but most of the time I just want code that works.
          </div>
        </div>

        <h2 className="text-func font-bold">## Extensibility</h2>

        <div>
          Tools like ESlint, Prettier, Flow and Typescript are very very good.
          They integrate with your editor well thanks to their open APIs. If you
          want you can you can write your own LSP in less than an hour and have
          custom completion for your special use case, write ESlint rule to
          enforce something or codemod your entire codebase with jscodeshift. It
          seems like Javascript ecosystem is so thriving (some might say to much
          thriving 😄) because there is no Company behind it trying to sell you
          some IDE or Platform. If you write Kotlin, you might find yourself in
          IDEA with their integrated linter. You can't check the code with their
          linter on your CI thus you won't be able to enforce these rules
          (neovim or VSCode user won't get the linters warnings and errors
          anyway 🤷). I think languages like Swift or Go do a much better job
          here. Maybe because they saw what a thriving ecosystem can arise, if
          you welcome other developers instead of monetizing them.
        </div>

        <h2 className="text-func font-bold">## Browsers</h2>

        <div>
          Javascript might have some downsides, but for me it seems overkill to
          compile your favorite language to Javascript just to run in the
          browser. You are not solving a problem, you are creating so many
          sources for problems. I don't see the benefit of starting a Browser
          based app with Kotlin just so you don't have to write Javascript.
          Every API from the browser or any package you add from npm is
          documented and written in Javascript. You can't escape Javascript as
          long as it is the used language in browsers.
        </div>

        <div>Please show me a language that nails these points.</div>
      </div>
    </main>
  );
}
