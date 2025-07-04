import {CardInfo, ToolCardInfo, PlanCardInfo} from "@/app/utils/interfaces";

export const CARD_INFO: CardInfo[] = [
    {
        title: "Lead Management System",
        description: "Learn more about our comprehensive Lead Management System.",
        buttonData: {
            icon: "ArrowRight",
            text: "Explore LMS"
        }
    },
    {
        title: "Billing Information",
        description: "View your current subscriptions and billing history.",
        buttonData: {
            icon: "CreditCard",
            text: "Manage Billing"
        }
    },
    {
        title: "Tools Checkout",
        description: "Ready to purchase? Proceed to checkout with your selected tools.",
        buttonData: {
            icon: "ShoppingCart",
            text: "Checkout"
        }
    },
]


export const PLAN_CARD_INFO: PlanCardInfo[] = [
    {
        title: "Digital Growth Plan - Foundation",
        description:
            "A simple, hands-off starting point. Get the essentials without the complexity. For businesses with simple technological needs and an interest in basic digitization tools. Roamlii offers a set of tools that once implemented, do not require constant monitoring or updating.",
        buttonData: {
            icon: "ShoppingCart",
            text: "Add to Cart",
        },
        planInfo: {
            monthlyPlan: {
                price: 190,
                currency: "$",
                duration: "month",
            },
            yearlyPlan: {
                price: 1900,
                currency: "$",
                duration: "year",
            },
        },
        featureList: [
            "Conversational AI",
            "Website Chat Widget",
            "Reputation AI",
            "Missed Call Text Back",
            "2-way Text and Email Conversations",
            "Email Templates",
            "GMB Messaging",
            "Facebook Messenger",
            "Text to Pay",
            "Dynamic Tagging",
        ],
        similarToolList: [
            "Google Reviews Auto-Response (automated customer engagement)",
            "Facebook Messenger Auto-Reply (handling basic inquiries effortlessly)",
            "Google's Missed Call Notifications (keeping communication open without manual follow-ups)",
        ],
        extraDescription:
            "Set it and forget it – These tools work in the background, requiring little to no ongoing effort after setup.",
    },
    {
        title: "Digital Growth Plan - Basecamp",
        description:
            "Essential tools for businesses ready to climb higher and take control. For businesses with a moderate focus on digitization and are able to monitor and update their digital tools frequently (weekly).",
        buttonData: {
            icon: "ShoppingCart",
            text: "Add to Cart",
        },
        planInfo: {
            monthlyPlan: {
                price: 290,
                currency: "$",
                duration: "month",
            },
            yearlyPlan: {
                price: 2900,
                currency: "$",
                duration: "year",
            },
        },
        featureList: [
            "All Foundation tools",
            "CRM",
            "Email Campaigns",
            "Social Media Dashboard",
            "Web Forms",
            "Survey Builder",
            "Reporting",
            "Communities",
            "Certificates",
            "Memberships",
            "GoKollab",
        ],
        similarToolList: [
            "MailChimp or Constant Contact (for email campaigns and customer engagement)",
            "Google Forms or Typeform (for collecting customer information)",
            "HubSpot Free CRM or Pipedrive (for basic customer relationship management)",
        ],
        extraDescription:
            "Familiar and manageable – If you can navigate tools like MailChimp, these will feel intuitive. Requires light tech-savviness, with some upkeep to maximise effectiveness, but remains low-touch overall.",
    },
    {
        title: "Digital Growth Plan - Summit",
        description:
            "The most advanced tools, built for those who want to lead and excel. For businesses who are keen on innovating their marketing strategy using state-of-the-art digitization tools and have dedicated staff to manage digital tools on a daily basis.",
        buttonData: {
            icon: "ShoppingCart",
            text: "Add to Cart",
        },
        planInfo: {
            monthlyPlan: {
                price: 390,
                currency: "$",
                duration: "month",
            },
            yearlyPlan: {
                price: 3900,
                currency: "$",
                duration: "year",
            },
        },
        featureList: [
            "All Basecamp tools",
            "Calendar Scheduling",
            "Workflow Automations",
            "Opportunities and Pipelines",
            "Website Builder",
            "Funnels & Landing Pages",
            "Blogging System",
            "Trigger Links",
            "Proposals & Estimates",
            "Invoices",
        ],
        similarToolList: [
            "HubSpot Pipelines (for tracking leads and sales)",
            "ActiveCampaign Automations (for nurturing leads with automated emails)",
            "ClickFunnels or Shopify Website Builder (for maintaining a dynamic sales funnel or website)",
            "WordPress Blogging (for content marketing and SEO strategies)",
        ],
        extraDescription:
            "Strategic and powerful – Designed for businesses that want full control over their digital presence and customer journey. Requires ongoing management and a solid understanding of navigating tools that work in concert with one another.",
    },
    {
        title: "Lead Management System - Onboarding",
        description:
            "It can be extremely time consuming and down-right intimidating to integrate a new system into your business operations. And to be honest, most small businesses don't have the time or the digital bandwidth to get systems like this set up to be truly effective solutions for them. Instead, the new system is added to bottom of the list of problems the owner/manager has to solve. A system is only as good as it's initial integration, its adoption by the team, and its ongoing management. We'll help get you set up, so you can make the most out of this incredible system, and keep you on track to ensure it's solving problems for you every single day.",
        buttonData: {
            icon: "ShoppingCart",
            text: "Add to Cart",
        },
        planInfo: {
            oneOffPlan: {
                price: 490,
                currency: "$",
            },
        },
    },
    {
        title: "Website Rebuilder Package",
        description:
            "Introducing Roamlii's Website Rebuilder Package, the ultimate solution for businesses looking to refresh their digital presence and elevate their marketing strategy.",
        buttonData: {
            icon: "ShoppingCart",
            text: "Add to Cart",
        },
        planInfo: {
            oneOffPlan: {
                price: 6450,
                currency: "$",
            },
        },
        featureList: [
            "FREE 1 year subscription of the full Summit Digital Growth Plan",
            "Website rebuilt in Roamlii's Lead Management System",
            "6 standard website pages (Home, Product/Services, About Us, FAQs, Blog, Contact Us)",
            "3 blogs (750-1000 words each) of topic of choice",
            "2 rounds of minor content and design edits to website",
            "Keywords optimization",
            "Domain connection",
            "FREE tech and onboarding support for 1 week",
        ],
        extraDescription:
            "This package is designed to not only give your website a modern, professional makeover but also to enhance your lead management efforts with a fresh, results-driven approach.",
        addOnList: ["Additional website page - $450", "Package of 12 blogs - $850"],
        includesFreeSummitPlan: true,
    },
];


export const BLOG_ADD_ON_LIST = [
    "Topics of choice",
    "750 - 1000 words per blog",
    "1 round of revisions per blog",
    "Automatic scheduling"
]

export const TOOL_CARD_INFO: ToolCardInfo[] = [
    {
        title: "Social Links",
        description: "An important aspect of many business' digital presence are the social media platforms that they've curated a presence on over time.",
        icon: "Share2",
    },
    {
        title: "Media Highlights",
        description: "In the vast majority of scenarios, images speak louder than words. And in an extremely visual industry like tourism, travel and hospitality, providing images and videos for customers to peruse is an incredibly powerful promotional tool.",
        icon: "Image",
    },
    {
        title: "Newsletter Sign-up",
        description: "It's a basic feature, but as we all know, having the ability to engage directly with our customer base and keep them informed, is incredibly important.",
        icon: "Mail",
    },
    {
        title: "Search Filters",
        description: "Search Filters are one of those features that's incredibly important, intrinsically utilitarian and is often taken for granted.",
        icon: "Funnel",
    },
    {
        title: "Events & Festivals",
        description: "The Events & Festivals is an incredibly useful feature for our Business Community, and a super interesting space for our #TravelTribe. It'll also evolve over time as we enhance its features.",
        icon: "Calendar",
    },
    {
        title: "Experience Inquiries",
        description: "The Experience Inquiry system gives businesses the power to showcase all of their fantastic products. This ever-evolving tool showcases the wide range of Experiences that the #TravelTribe needs to know about.",
        icon: "Lightbulb",
    },
    {
        title: "Promotion on the Map",
        description: "The map is a fundamental aspect of Roamlii, a key differentiator from any other platform out there, and plays an integral role in making the platform a discovery engine for our Travellers.",
        icon: "MapPin",
    },
    {
        title: "Job Board",
        description: "The Tourism and Hospitality industry is comprised of an extremely diverse and dynamic employment sector, which is constantly cycling and requiring attention.",
        icon: "Briefcase",
    },
    {
        title: "Share-it",
        description: "This is another feature that's both a Traveller Tool and a Business Tool. It's kind of a light and fluffy feature, but again, it's also pretty darn fun and useful.",
        icon: "Share2",
    },
    {
        title: "Business Overview",
        description: "With a Roamlii profile, Businesses have the opportunity to include an overview of their organization, which gives Travellers a great snapshot of their Business.",
        icon: "Building",
    },
]
