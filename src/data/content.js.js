import icvLogo from '../assets/partners/icv.png'
import isoLogo from '../assets/partners/iso.jpeg'
import adnocLogo from '../assets/partners/adnoc.png'
import moiatLogo from '../assets/partners/moiat.jpeg'
import nafisLogo from '../assets/partners/nafis.jpeg'

export const company = {
  name: 'JVALU',
  tagline: 'Certification & Evaluation',
  email: 'support@jvalu.ae',
  phoneDisplay: '+971 50 772 9382',
  phoneRaw: '971507729382',
  whatsappLink: 'https://wa.me/971507729382',
  telLink: 'tel:+971507729382',
  mailLink: 'mailto:support@jvalu.ae',
  address: {
    line1: 'Al Wahda Commercial Tower, 1st Floor, Office 101',
    line2: 'Abu Dhabi, United Arab Emirates',
  },
}

export const services = [
  {
    slug: 'icv-certification',
    logo: icvLogo,
    name: 'ICV Certification',
    shortName: 'ICV',
    summary:
      'In Country Value certification assessment and submission support to help your business qualify for ADNOC and other UAE entity tenders.',
    description:
      "In Country Value (ICV) certification measures how much a company contributes to the UAE's economy through local spend, Emiratisation, and local manufacturing. A valid ICV certificate is a prerequisite for bidding on contracts with ADNOC, ADNOC Group companies, and many UAE government and semi-government entities.",
    whoFor:
      'Companies registered in the UAE that supply goods or services to ADNOC, government entities, or large UAE corporates requiring ICV-certified vendors.',
    process: [
      {
        title: 'Initial Assessment',
        detail:
          'We review your financial statements, payroll, and procurement records to estimate your likely ICV score before formal certification.',
      },
      {
        title: 'Data Preparation',
        detail:
          'Our team compiles and organizes the financial and operational data required by ICV-certified auditors, in the format they expect.',
      },
      {
        title: 'Auditor Coordination',
        detail:
          'We liaise with an accredited ICV certification body on your behalf, scheduling the audit and addressing queries as they arise.',
      },
      {
        title: 'Certificate Issuance',
        detail:
          'Once the audit is complete, we support you through to certificate issuance and registration on the ICV platform.',
      },
      {
        title: 'Annual Renewal',
        detail:
          'ICV certificates are valid for one year. We track your renewal date and manage the re-certification process.',
      },
    ],
    faqs: [
      {
        q: 'How long does ICV certification take?',
        a: 'Typically 2 to 4 weeks from submission of complete financial data, depending on the certification body\u2019s schedule and the complexity of your accounts.',
      },
      {
        q: 'Is ICV certification mandatory?',
        a: 'It is mandatory for companies that wish to bid on ADNOC and many other UAE government and semi-government tenders. Some clients require it as a pre-qualification condition.',
      },
      {
        q: 'How is the ICV score calculated?',
        a: 'The score weighs factors including UAE national spend, Emiratisation levels, local manufacturing, and asset investment within the UAE, based on the methodology set by the ICV certifying body.',
      },
    ],
  },
  {
    slug: 'iso-certification',
    logo: isoLogo,
    name: 'ISO Certification',
    shortName: 'ISO',
    summary:
      'End-to-end support for ISO 9001, 14001, 45001 and other management system certifications, from gap analysis to audit readiness.',
    description:
      'ISO certification demonstrates that your management systems meet recognized international standards for quality, environmental responsibility, occupational health and safety, food safety, or information security. We guide organizations through every stage of building, documenting, and certifying these systems.',
    whoFor:
      'Organizations seeking to formalize internal processes, win larger contracts that require ISO compliance, or improve consistency and risk management across operations.',
    process: [
      {
        title: 'Gap Analysis',
        detail:
          'We assess your current processes against the requirements of your target ISO standard and identify what needs to change.',
      },
      {
        title: 'Documentation',
        detail:
          'We help build the required policies, procedures, and records, tailored to your actual operations rather than generic templates.',
      },
      {
        title: 'Implementation Support',
        detail:
          'We guide your team through rolling out the new processes and provide training so the system is followed in practice, not just on paper.',
      },
      {
        title: 'Internal Audit',
        detail:
          'A mock or internal audit is conducted to catch and correct non-conformities before the certification body arrives.',
      },
      {
        title: 'Certification Audit',
        detail:
          'We coordinate with an accredited certification body for the formal Stage 1 and Stage 2 audits through to certificate issuance.',
      },
    ],
    faqs: [
      {
        q: 'Which ISO standards do you support?',
        a: 'Commonly ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health & Safety), and ISO 22000 (Food Safety), among others depending on your sector.',
      },
      {
        q: 'How long does the process take?',
        a: 'Most organizations move from gap analysis to certification in 2 to 4 months, depending on the size of the business and the standard involved.',
      },
      {
        q: 'Do we need ISO certification for tenders?',
        a: 'Many government and large private-sector tenders in the UAE list ISO certification as a pre-qualification requirement, particularly ISO 9001.',
      },
    ],
  },
  {
    slug: 'asset-evaluation',
    logo: null,
    name: 'Asset Evaluation',
    shortName: 'Asset Evaluation',
    summary:
      'Independent valuation of fixed assets, equipment, and business holdings for financial reporting, sale, insurance, or investment purposes.',
    description:
      'Asset evaluation provides an independent, defensible valuation of your fixed assets, machinery, equipment, real estate holdings, or entire business. Accurate valuation supports financial reporting, supports ICV submissions, informs mergers and acquisitions, and satisfies insurance or financing requirements.',
    whoFor:
      'Companies needing asset valuations for financial statements, bank financing, insurance coverage, mergers and acquisitions, or as supporting documentation for ICV certification.',
    process: [
      {
        title: 'Scope Definition',
        detail:
          'We confirm which assets are in scope and the purpose of the valuation, since methodology differs for financial reporting versus sale or insurance.',
      },
      {
        title: 'Site Inspection',
        detail:
          'Our evaluators physically inspect and catalogue assets where applicable, recording condition, age, and specification.',
      },
      {
        title: 'Valuation Analysis',
        detail:
          'We apply the appropriate valuation approach, cost, market, or income based, to arrive at a supportable asset value.',
      },
      {
        title: 'Report Delivery',
        detail:
          'You receive a formal valuation report suitable for submission to auditors, banks, insurers, or certification bodies.',
      },
    ],
    faqs: [
      {
        q: 'What types of assets can you evaluate?',
        a: 'Machinery and equipment, vehicles, real estate, IT infrastructure, and full business enterprise value, depending on the engagement.',
      },
      {
        q: 'Is the valuation report recognized for ICV purposes?',
        a: 'Yes, asset valuation reports are commonly used as supporting documentation in ICV submissions to evidence local asset investment.',
      },
      {
        q: 'How long does an evaluation take?',
        a: 'Straightforward equipment valuations can be completed within a week; larger or multi-site engagements take longer depending on scope.',
      },
    ],
  },
  {
    slug: 'adnoc-vendor-registration',
    logo: adnocLogo,
    name: 'ADNOC Vendor Registration',
    shortName: 'ADNOC Registration',
    summary:
      'Guidance through the ADNOC supplier registration process, documentation, and prequalification so you can participate in tenders.',
    description:
      'Registering as an approved ADNOC vendor is a multi-step process involving documentation, categorization, and prequalification. We help businesses navigate the registration portal, prepare the required documents, and respond to ADNOC queries so the application moves smoothly.',
    whoFor:
      'Suppliers and contractors seeking to register on the ADNOC vendor database to bid on tenders issued by ADNOC and its group companies.',
    process: [
      {
        title: 'Eligibility Review',
        detail:
          'We review your trade license, certifications, and company profile against the vendor categories you intend to register under.',
      },
      {
        title: 'Documentation Assembly',
        detail:
          'We prepare and organize the required corporate, financial, and compliance documents, including ICV certification where applicable.',
      },
      {
        title: 'Portal Submission',
        detail:
          'We complete and submit your application through the ADNOC vendor registration portal, ensuring all fields and attachments are correct.',
      },
      {
        title: 'Query Resolution',
        detail:
          'We respond to any clarification requests from ADNOC on your behalf to keep the application progressing.',
      },
      {
        title: 'Approval & Activation',
        detail:
          'Once approved, we confirm your vendor categories are correctly activated so you can view and respond to relevant tenders.',
      },
    ],
    faqs: [
      {
        q: 'Do I need ICV certification to register with ADNOC?',
        a: 'ICV certification is generally required or heavily weighted for vendor registration and tender evaluation with ADNOC and its group companies.',
      },
      {
        q: 'How long does vendor registration take?',
        a: 'Timelines vary by category and completeness of submission, typically several weeks from submission to approval.',
      },
      {
        q: 'Can you register us under multiple categories?',
        a: 'Yes, we can support registration across multiple vendor categories relevant to your scope of supply.',
      },
    ],
  },
]

export const partners = [
  { name: 'MOIAT', fullName: 'Ministry of Industry & Advanced Technology', logo: moiatLogo },
  { name: 'ADNOC', fullName: 'Abu Dhabi National Oil Company', logo: adnocLogo },
  { name: 'NAFIS', fullName: 'NAFIS — Nafis.gov.ae', logo: nafisLogo },
  { name: 'ICV', fullName: 'In-Country Value Certificate', logo: icvLogo },
  { name: 'ISO', fullName: 'International Organization for Standardization', logo: isoLogo },
]

export const stats = [
  { value: 250, suffix: '+', label: 'Trusted clients' },
  { value: 100, suffix: '%', label: 'UAE-based, on-the-ground support' },
  { value: 9, suffix: '+', label: 'Services offered' },
  { value: 24, suffix: 'hr', label: 'Typical response time on enquiries' },
]

export const whyChooseUs = [
  {
    title: 'UAE Regulatory Knowledge',
    detail:
      'Our team works within UAE certification frameworks daily and stays current as requirements from ICV, ADNOC, and ISO bodies evolve.',
  },
  {
    title: 'End-to-End Support',
    detail:
      'From first assessment to certificate issuance and renewal, we manage the process so your team can stay focused on operations.',
  },
  {
    title: 'Direct Communication',
    detail:
      'You will always know where your application stands. We provide clear updates rather than leaving you to chase status.',
  },
  {
    title: 'Multi-Service Expertise',
    detail:
      'ICV, ISO, asset evaluation, and ADNOC registration often overlap. Working with one consultancy keeps your documentation consistent across all four.',
  },
]
