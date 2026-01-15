# Paper Lib

A simple component library that combines [Radix UI](https://www.radix-ui.com/) headless components with [Paper CSS](https://www.getpapercss.com/) styling.

## Features

-  Styled with Paper CSS for a hand-drawn aesthetic
-  Accessible components built on Radix UI primitives
-  TypeScript support
-  Simple and lightweight

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Components

This library is organized into blog-friendly groups:

- Layout: `Container`, `Section`, `Stack`, `Card`, `Divider`
- Typography: `Heading`, `Text`, `Link`, `Blockquote`, `CodeBlock`, `InlineCode`
- Navigation: `Navbar`, `NavLink`, `Breadcrumbs`, `Pagination`
- Forms: `Label`, `Input`, `Textarea`, `HelperText`, `Checkbox`, `RadioGroup`, `Switch`, `Select`
- Content: `PostCard`, `PostHeader`, `PostMeta`, `Tag`, `TagList`, `AuthorBadge`
- Media: `Image`, `Figure`, `FigureCaption`, `Avatar`
- Feedback: `Alert`
- Overlays: `Dialog`, `DropdownMenu`, `Popover`, `Tooltip`
- Disclosure: `Tabs`, `Accordion`

### Button

A button component with Paper CSS styling and multiple variants.

```tsx
import { Button } from 'paper-lib'

function App() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
    </>
  )
}
```

### Dialog

A modal dialog component built on Radix UI Dialog.

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from 'paper-lib'

function App() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          This is a dialog description.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
```

### Select

A select dropdown component built on Radix UI Select.

```tsx
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from 'paper-lib'

function App() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

### Post card

```tsx
import { PostCard, PostHeader, PostMeta, TagList, Tag, Heading, Text } from 'paper-lib'

function App() {
  return (
    <PostCard>
      <PostHeader>
        <Heading level={3}>A simple blog post</Heading>
        <PostMeta>
          <span>Jan 15, 2026</span>
          <span>5 min read</span>
        </PostMeta>
      </PostHeader>
      <Text>Compose your blog UI with Paper CSS classes and Radix behavior.</Text>
      <TagList>
        <Tag>Design</Tag>
        <Tag>UI</Tag>
      </TagList>
    </PostCard>
  )
}
```

## Styling

Import the styles in your application:

```tsx
import 'paper-lib/styles'
```

Or if using the built package:

```tsx
import 'paper-lib/dist/styles.css'
```

## License

MIT

