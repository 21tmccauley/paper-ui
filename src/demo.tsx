import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  Container,
  Section,
  Stack,
  Divider,
  Heading,
  Text,
  Link,
  Blockquote,
  CodeBlock,
  InlineCode,
  Navbar,
  NavLink,
  Breadcrumbs,
  Pagination,
  PaginationItem,
  PaginationLink,
  Label,
  Input,
  Textarea,
  HelperText,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Switch,
  PostCard,
  PostHeader,
  PostMeta,
  Tag,
  TagList,
  AuthorBadge,
  Image,
  Figure,
  FigureCaption,
  Avatar,
  Alert,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Popover,
  PopoverTrigger,
  PopoverContent,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './index'
import './styles.css'

function App() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <Container>
      <Navbar>
        <Heading level={3}>Paper Lib</Heading>
        <div className="pl-nav-links">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">About</NavLink>
        </div>
      </Navbar>

      <Section>
        <Heading level={1}>Blog core components</Heading>
        <Text>
          These components combine Radix UI behavior with Paper CSS styling.
          Here is an example of inline code: <InlineCode>npm run dev</InlineCode>
        </Text>
        <Blockquote>
          Great design is achieved when aesthetics and usability align.
        </Blockquote>
        <CodeBlock>
{`// Example post metadata
<PostMeta>
  <span>Jan 15, 2026</span>
  <span>5 min read</span>
</PostMeta>`}
        </CodeBlock>
      </Section>

      <Section>
        <Heading level={2}>Post card</Heading>
        <PostCard>
          <PostHeader>
            <Heading level={3}>A Simple Blog Post</Heading>
            <PostMeta>
              <span>Jan 15, 2026</span>
              <span>5 min read</span>
              <span>By Tatem</span>
            </PostMeta>
          </PostHeader>
          <Text>
            Build your blog UI using composable primitives and Paper CSS styles.
          </Text>
          <TagList>
            <Tag>Design</Tag>
            <Tag>UI</Tag>
            <Tag>Radix</Tag>
          </TagList>
        </PostCard>
      </Section>

      <Section>
        <Heading level={2}>Media</Heading>
        <Stack direction="row" gap={16}>
          <Avatar
            src="https://placehold.co/80x80"
            alt="Author avatar"
          />
          <AuthorBadge>
            <div>
              <strong>Alex Writer</strong>
              <div className="pl-text-muted">Editor</div>
            </div>
          </AuthorBadge>
        </Stack>
        <Figure>
          <Image src="https://placehold.co/800x360" alt="Cover" />
          <FigureCaption>Cover image with Paper CSS styling.</FigureCaption>
        </Figure>
      </Section>

      <Section>
        <Heading level={2}>Navigation</Heading>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Post' },
          ]}
        />
        <Pagination>
          <PaginationItem>
            <PaginationLink href="#">Previous</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" active>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">Next</PaginationLink>
          </PaginationItem>
        </Pagination>
      </Section>

      <Section>
        <Heading level={2}>Forms</Heading>
        <Stack gap={12}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="name@example.com" />
            <HelperText>We never share emails.</HelperText>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={4} placeholder="Write a comment" />
          </div>
          <Stack direction="row" gap={12}>
            <Label>
              <Checkbox /> Subscribe
            </Label>
            <Label>
              <Switch /> Notifications
            </Label>
          </Stack>
          <RadioGroup defaultValue="weekly">
            <Stack direction="row" gap={12}>
              <Label>
                <RadioGroupItem value="weekly" /> Weekly
              </Label>
              <Label>
                <RadioGroupItem value="monthly" /> Monthly
              </Label>
            </Stack>
          </RadioGroup>
        </Stack>
      </Section>

      <Section>
        <Heading level={2}>Buttons</Heading>
        <Stack direction="row" gap={12}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
        </Stack>
      </Section>

      <Section>
        <Heading level={2}>Dialog</Heading>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="primary">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Example Dialog</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              This is a dialog component built with Radix UI and styled with Paper CSS.
            </DialogDescription>
            <DialogFooter>
              <Button variant="secondary" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setDialogOpen(false)}>
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Section>

      <Section>
        <Heading level={2}>Select</Heading>
        <Select>
          <SelectTrigger style={{ width: '200px' }}>
            <SelectValue placeholder="Choose an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </Section>

      <Section>
        <Heading level={2}>Overlays</Heading>
        <Stack direction="row" gap={16}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary">Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <Text>Popover content with Paper styling.</Text>
            </PopoverContent>
          </Popover>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">Tooltip</Button>
              </TooltipTrigger>
              <TooltipContent>Helpful tooltip text.</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Dropdown</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Bookmark</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Stack>
      </Section>

      <Section>
        <Heading level={2}>Tabs & Accordion</Heading>
        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <Text>Tab content for post details.</Text>
          </TabsContent>
          <TabsContent value="comments">
            <Text>Tab content for comments.</Text>
          </TabsContent>
        </Tabs>

        <Accordion type="single" collapsible style={{ marginTop: '1rem' }}>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Paper Lib?</AccordionTrigger>
            <AccordionContent>
              A blog-focused component library with Radix UI + Paper CSS.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I style components?</AccordionTrigger>
            <AccordionContent>
              Use Paper CSS classes and extend them in styles.css.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <Section>
        <Heading level={2}>Feedback</Heading>
        <Stack gap={8}>
          <Alert variant="info">Info alert</Alert>
          <Alert variant="success">Success alert</Alert>
          <Alert variant="warning">Warning alert</Alert>
          <Alert variant="danger">Danger alert</Alert>
        </Stack>
      </Section>

      <Divider />
      <Text>
        Built with <Link href="https://www.radix-ui.com">Radix UI</Link> and
        <Link href="https://www.getpapercss.com">Paper CSS</Link>.
      </Text>
    </Container>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
