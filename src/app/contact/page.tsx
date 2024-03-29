import Image from "next/image"
import {
  Newspaper,
  Fingerprint,
  LifeBuoyIcon
} from "lucide-react"

const supportLinks = [
  {
    name: 'Sales',
    href: '#',
    description: 
    "Interested in our solar solutions? Our sales team is here to assist you in finding the perfect renewable energy solution for your needs. We're committed to helping you make the switch to sustainable power",
    icon: LifeBuoyIcon,
  },
  {
    name: 'Technical Support',
    href: '#',
    description:
    'Encountering technical issues with your solar setup? Our dedicated technical support team is available to resolve any concerns and ensure your solar infrastructure operates efficiently and smoothly.',
    icon: Fingerprint,
  },
  {
    name: 'Media Inquiries',
    href: '#',
    description:
    'For media inquiries and press-related matters, please reach out to our media relations team. We are happy to provide information and insights about our contributions to decarbonization and sustainable energy solutions.',
    icon: Newspaper,
  },
]

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt="image"
            layout="fill"
            quality={100}
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Contact</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
          For media inquiries and press-related matters, please reach out to our media relations team. We are happy to provide information and 
          insights about our contributions to decarbonization and sustainable energy solutions
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8" aria-labelledby="contact-heading">
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 z-10">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-green-600 p-5 shadow-lg">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              {/* <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href={link.href} className="text-base font-medium text-green-700 hover:text-green-400">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
