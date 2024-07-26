import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from 'react'
import { Header } from "./Header"

export function Services() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Elevate Your Business with Our Comprehensive Services
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Discover our suite of tailored solutions to help your business thrive in the digital landscape. From
                social media marketing to web development, we have got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-start gap-4 bg-background p-6 rounded-lg shadow-md">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <FacebookIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Social Media Marketing</h3>
            <p className="text-muted-foreground">
              Leverage our expertise in social media to drive revenue and reach new audiences. We will help you create
              engaging content, manage your online presence, and measure your success.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col items-start gap-4 bg-background p-6 rounded-lg shadow-md">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <VideoIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Video Editing</h3>
            <p className="text-muted-foreground">
              Captivate your audience with high-quality video content tailored to your brand. Our video editing experts
              will bring your vision to life and help you stand out in the digital landscape.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col items-start gap-4 bg-background p-6 rounded-lg shadow-md">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <WebhookIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="text-muted-foreground">
              Bring your digital vision to life with our expert web development services. We will create a custom,
              responsive website that reflects your brand and engages your customers.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col items-start gap-4 bg-background p-6 rounded-lg shadow-md">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <WebhookIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Web Design</h3>
            <p className="text-muted-foreground">
              Elevate your online presence with our custom web design solutions. Our team of designers will create a
              visually stunning and user-friendly website that reflects your brand identity.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <BracketsIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Branding</h3>
            <p className="text-muted-foreground">
              Establish a strong and memorable brand identity that resonates with your target audience. Our branding
              experts will help you craft a unique visual identity and messaging that sets you apart.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <CopyIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Content Creation</h3>
            <p className="text-muted-foreground">
              Engage your audience with compelling, high-quality content that showcases your expertise and drives
              results. Our content creation team will help you develop a strategic content marketing plan to achieve
              your business goals.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <SearchCodeIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Search Engine Optimization (SEO)</h3>
            <p className="text-muted-foreground">
              Improve your online visibility and attract more qualified leads with our comprehensive SEO services. We will
              optimize your website, content, and digital presence to rank higher in search engine results.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <CpuIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Pay-Per-Click (PPC) Advertising</h3>
            <p className="text-muted-foreground">
              Reach your target audience and drive immediate results with our PPC advertising services. We will create and
              manage targeted campaigns across platforms like Google Ads, Facebook, and LinkedIn to maximize your return
              on investment.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <InfoIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Analytics and Reporting</h3>
            <p className="text-muted-foreground">
              Gain valuable insights into your marketing performance and customer behavior with our comprehensive
              analytics and reporting services. We will help you make data-driven decisions to optimize your strategies
              and achieve your business goals.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <KeyIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Strategic Consulting</h3>
            <p className="text-muted-foreground">
              Unlock your business full potential with our strategic consulting services. Our experienced team will
              work closely with you to develop a comprehensive plan that aligns your marketing efforts with your overall
              business objectives.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <MailIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Email Marketing</h3>
            <p className="text-muted-foreground">
              Reach your customers directly with our email marketing services. We will help you create engaging email
              campaigns, manage your subscriber lists, and track your performance to drive conversions and build lasting
              relationships.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <FacebookIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Social Media Management</h3>
            <p className="text-muted-foreground">
              Leverage the power of social media to connect with your audience and grow your brand. Our social media
              management services include content creation, community engagement, and performance tracking to help you
              achieve your marketing goals.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Graphic Design</h3>
            <p className="text-muted-foreground">
              Elevate your brand`s visual identity with our professional graphic design services. From logos and
              branding to marketing materials and website design, our team of designers will create visually stunning
              assets that captivate your audience.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <CameraIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Photography</h3>
            <p className="text-muted-foreground">
              Elevate your visual storytelling with our professional photography services. Our team of skilled
              photographers will capture high-quality images that showcase your products, services, and brand in the
              best light.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function BracketsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 3h3v18h-3" />
      <path d="M8 21H5V3h3" />
    </svg>
  )
}


function CameraIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function CopyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}


function CpuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function ImageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function KeyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>
  )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function SearchCodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m13 13.5 2-2.5-2-2.5" />
      <path d="m21 21-4.3-4.3" />
      <path d="M9 8.5 7 11l2 2.5" />
      <circle cx="11" cy="11" r="8" />
    </svg>
  )
}


function VideoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}


function WebhookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
