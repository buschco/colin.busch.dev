# Please, consider this before you rant about JS

So often I here things like "Javascript: so cringe, to real types",
"Javascript: so slow", "Javascript: so many frameworks and tools, everyday
the reinvent themselves" or simply "[some programming language] is so much
better". I want to present you a few points that, to my knowledge, no other
language solves as comprehensively, equally, or better than Javascript.

## Fast "compiling"

At my work Kotlin is used for most backend systems. Rerunning a test in
IDEA or running the compile command (which I use for checking if the
code I wrote is correct) takes as long as bundling the 3k JS files for
production, while the Kotlin projects are not even have 1k files.
If you develop frontends, you might find yourself adding spacings between
two elements, improving the `onClock` handler of a button or fixing some
texts. In most Javascript based Frameworks these changes happen so instant
thanks to feature like hot reloading.
In SwiftUI for example you can get this real time experience, but only in
the Preview mode, similar to Storybook in Javascript land. Seeing these
changes in a real app, requires a recompile which takes ~10s 😣.

## Intuitive types

I never came across any language that made it so easy for union types like
Javascript types systems (Flow/Typescript). The use case is simple: A
`Message` can either be a `Greeting` or a `Reaction`.

```typescript
type MessageBase = { emoji: string };
type Greeting = MessageBase & { type: "greeting"; text: string };
type Reaction = MessageBase & { type: "reaction" };
type Message = Greeting | Reaction;
```

While the `displayEmoji` function does only care about the emoji, the
`displayText` method can only display a `Greeting`:

```typescript
function displayEmoji(message: Message) {
  alert(message.emoji);
}

function displayText(message: Message) {
  if (message.type !== "greeting") return;
  alert(message.text);
}
```

```typescript
function handleMessage(message: Message) {
  displayEmoji(message);
  displayText(message);
}
```

`handleMessage` can now call both function. If you ever want to add the
`text` property to a `Reaction` you only have to touch the code that is
relevant to this change (`displayText` - function) and and follow the
errors that Flow or Typescript gives you.

Other languages tend to make some inheritance or abstract stuff which results
in boilerplate code which is harder to understand.

```kotlin
sealed interface MessageBase {
    val emoji: String
}

data class Greeting(
    override val emoji: String,
    // every prop of MessageBase must be listed here, why?
    val type: String = "greeting",
    val text: String
) : MessageBase

data class Reaction(
    override val emoji: String,
    val type: String = "reaction"
) : MessageBase
```

I also think having a handful of primitive types is much easier to work with.
Most of the times I even don't care if it is an `Int` or a `float`. I never
cared if the number is an `int`, `int8`, `int16`, `int32` or `int64`. Take
this example: You have a `width` and and fixed list of entries and want to
calculate the space for each entry.

In Swift for example you have to convert `count` to a `Double` just to be
able to perform the division.

```swift
let width = 100.0
let bars = [1, 2, 3, 4, 5, 6]
let barSpace = width / Double(bars.count)
```

The worst part is, if you divide two `Int`s and Kotlin won't even warn you
about the hidden rounding it will perform:

```kotlin
val bars = listOf(1, 2, 3, 4, 5, 6)
val average = bars.sum() / bars.size // => 3
```

The average is not `3` it is `3.5` 😐

I agree that different types for numbers can help you to improve the
performance, but most of the time I just want code that works.

## Extensibility

Tools like ESlint, Prettier, Flow and Typescript are very very good. They
integrate with your editor well thanks to their open APIs. If you want you
can you can write your own LSP in less than an hour and have custom completion
for your special use case, write ESlint rule to enforce something or codemod
your entire codebase with jscodeshift.  
It seems like Javascript ecosystem is so thriving (some might say to much
thriving 😄) because there is no Company behind it trying to sell you some
IDE or Platform.
If you write Kotlin, you might find yourself in IDEA with their integrated
linter. You can't check the code with their linter on your CI thus you
won't be able to enforce these rules (neovim or VSCode user won't get the
linters warnings and errors anyway 🤷). I think languages like Swift or Go
do a much better job here. Maybe because they saw what a thriving ecosystem
can arise, if you welcome other developers instead of monetizing them.

## Browsers

Javascript might have some downsides, but for me it seems overkill to
compile your favorite language to Javascript just to run in the browser.
You are not solving a problem, you are creating so many sources for
problems. I don't see the benefit of starting a Browser based app with
Kotlin just so you don't have to write Javascript. Every API from the
browser or any package you add from npm is documented and written
in Javascript. You can't escape Javascript as long as it is the used
language in browsers.

---

Please show me a language that nails these points.
