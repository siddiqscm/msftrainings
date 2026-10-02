import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const courseData: Record<string, any> = {
  'az-900': {
    code: 'AZ-900',
    platform: 'Azure',
    title: 'Microsoft Azure Fundamentals',
    description: 'Build a solid foundation in cloud concepts and core Azure services. Ideal starting point for anyone beginning their Azure journey, technical or non-technical.',
    fullDescription: `AZ-900 validates foundational knowledge of cloud concepts and Microsoft Azure. It is the recommended first step for anyone working with Azure, whether you are an administrator, developer, architect, or a business professional who needs to understand the cloud. This instructor-led course explains cloud computing models, the shared responsibility model and consumption-based pricing, then walks through the core Azure services for compute, networking, storage, identity and security. You will explore the Azure portal through guided demonstrations, estimate costs with the pricing and TCO calculators, and learn how governance tools such as Azure Policy, resource locks and Microsoft Purview keep environments compliant. The course closes with focused exam practice so you can sit the AZ-900 exam with confidence and move on to role-based Azure certifications.`,
    industryApplications: [
      { industry: 'Cloud Migration', value: 'Shared vocabulary for teams planning a move from on-premises to Azure' },
      { industry: 'Sales & Pre-sales', value: 'Confidently discuss Azure services, pricing and value with customers' },
      { industry: 'IT Operations', value: 'Foundation for Azure Administrator (AZ-104) and other role-based paths' },
      { industry: 'Finance & Procurement', value: 'Understand subscriptions, cost management and consumption billing' },
    ],
    outcomes: [
      'Explain cloud concepts, service models and deployment models',
      'Describe core Azure compute, networking and storage services',
      'Understand Azure identity, access and security fundamentals',
      'Use Azure cost management and pricing tools',
      'Describe Azure governance, compliance and monitoring tools',
    ],
    syllabus: [
      {
        module: 'Module 1: Cloud Concepts',
        topics: ['What is cloud computing', 'Shared responsibility model', 'Public, private and hybrid cloud', 'IaaS, PaaS and SaaS', 'Consumption-based model'],
      },
      {
        module: 'Module 2: Azure Architecture',
        topics: ['Regions and availability zones', 'Subscriptions and management groups', 'Resource groups', 'Azure Resource Manager'],
      },
      {
        module: 'Module 3: Compute and Networking',
        topics: ['Virtual machines and scale sets', 'Containers and Azure Functions', 'App Service', 'Virtual networks, VPN Gateway and ExpressRoute', 'Azure DNS'],
      },
      {
        module: 'Module 4: Storage',
        topics: ['Storage accounts and redundancy', 'Blob, file, queue and table storage', 'Access tiers', 'Data migration options'],
      },
      {
        module: 'Module 5: Identity, Access and Security',
        topics: ['Microsoft Entra ID', 'Authentication, SSO and MFA', 'Conditional Access', 'Role-based access control', 'Zero Trust and defense in depth', 'Microsoft Defender for Cloud'],
      },
      {
        module: 'Module 6: Management and Governance',
        topics: ['Cost management and pricing calculator', 'Tags', 'Azure Policy and resource locks', 'Microsoft Purview', 'Azure Monitor, Advisor and Service Health', 'Exam preparation'],
      },
    ],
    audience: 'IT professionals, business stakeholders, sales and pre-sales teams, students, and anyone new to Microsoft Azure.',
    format: 'Instructor-led • 1-2 Days • Guided Portal Demos • Exam Practice',
    prerequisites: 'None. General IT awareness helpful',
  },
  'ms-900': {
    code: 'MS-900',
    platform: 'Microsoft 365',
    title: 'Microsoft 365 Fundamentals',
    description: 'Understand the Microsoft 365 suite, from productivity and collaboration apps to security, compliance, licensing and support.',
    fullDescription: `MS-900 validates foundational knowledge of Microsoft 365 as a cloud productivity platform. This course gives decision makers, IT staff and business users a clear picture of what Microsoft 365 offers and how it is secured, governed and licensed. You will tour the core apps and services, including Microsoft Teams, Exchange Online, SharePoint, OneDrive and Microsoft 365 Copilot, and see how endpoint management with Microsoft Intune keeps devices secure. The course then covers identity with Microsoft Entra ID, the Zero Trust approach, Microsoft Defender XDR and Microsoft Purview for compliance and data protection. Finally, it explains Microsoft 365 plans, licensing options, billing and support so you can choose the right subscriptions for your organization. Focused exam practice prepares you to pass MS-900 and continue to role-based paths such as Microsoft 365 Administrator (MS-102).`,
    industryApplications: [
      { industry: 'Modern Workplace', value: 'Plan adoption of Teams, SharePoint and OneDrive for hybrid work' },
      { industry: 'Licensing & Procurement', value: 'Compare Microsoft 365 plans and choose the right subscriptions' },
      { industry: 'Compliance-led Sectors', value: 'Understand Purview data protection for regulated industries' },
      { industry: 'IT Support', value: 'Foundation for Microsoft 365 Administrator (MS-102) and Endpoint paths' },
    ],
    outcomes: [
      'Describe cloud concepts and Microsoft 365 benefits',
      'Explain Microsoft 365 apps, Teams, SharePoint and Copilot',
      'Understand Microsoft Entra ID and identity concepts',
      'Describe security, compliance and privacy capabilities',
      'Compare Microsoft 365 licensing, pricing and support options',
    ],
    syllabus: [
      {
        module: 'Module 1: Cloud Concepts',
        topics: ['Cloud service and deployment models', 'Benefits of SaaS', 'Microsoft 365 vs Office'],
      },
      {
        module: 'Module 2: Microsoft 365 Apps and Services',
        topics: ['Microsoft 365 Apps', 'Exchange Online, SharePoint and OneDrive', 'Microsoft Teams', 'Microsoft 365 Copilot', 'Microsoft Viva'],
      },
      {
        module: 'Module 3: Endpoint and Admin Capabilities',
        topics: ['Microsoft Intune', 'Windows 365 and Azure Virtual Desktop', 'Microsoft 365 admin center', 'Deployment and update channels'],
      },
      {
        module: 'Module 4: Identity and Access',
        topics: ['Microsoft Entra ID', 'Authentication and MFA', 'Conditional Access', 'Identity types and hybrid identity'],
      },
      {
        module: 'Module 5: Security, Compliance and Privacy',
        topics: ['Zero Trust', 'Microsoft Defender XDR', 'Microsoft Purview', 'Data loss prevention and sensitivity labels', 'Service Trust Portal'],
      },
      {
        module: 'Module 6: Pricing, Licensing and Support',
        topics: ['Microsoft 365 plans', 'Licensing and billing options', 'Support offerings and SLAs', 'Exam preparation'],
      },
    ],
    audience: 'IT professionals, decision makers, procurement and licensing teams, and end users moving to Microsoft 365.',
    format: 'Instructor-led • 1-2 Days • Live Tenant Walkthroughs • Exam Practice',
    prerequisites: 'None. Familiarity with office productivity tools helpful',
  },
  'pl-900': {
    code: 'PL-900',
    platform: 'Power Platform',
    title: 'Microsoft Power Platform Fundamentals',
    description: 'Learn how Power Apps, Power Automate, Power BI and Copilot Studio work together to analyze data, automate processes and build business solutions.',
    fullDescription: `PL-900 validates foundational knowledge of Microsoft Power Platform and its business value. In this hands-on course you will build real solutions rather than just read about them. You will start with the platform's architecture, Microsoft Dataverse, connectors and Power Fx, then create a canvas app and a model-driven app with Power Apps, automate approvals and notifications with Power Automate cloud flows, and turn data into interactive reports and dashboards with Power BI. You will also build a simple agent in Microsoft Copilot Studio and see how Copilot features speed up app and flow creation. Along the way the course covers environments, security and governance so that low-code adoption stays under control. Focused exam practice prepares you to pass PL-900 and continue to PL-200, PL-300 or PL-400.`,
    industryApplications: [
      { industry: 'Business Operations', value: 'Replace spreadsheets and emails with apps and automated workflows' },
      { industry: 'Finance & Reporting', value: 'Self-service dashboards and analytics with Power BI' },
      { industry: 'Customer Service', value: 'Agents and chat experiences with Copilot Studio' },
      { industry: 'Dynamics 365 Teams', value: 'Extend Dynamics 365 using Dataverse and model-driven apps' },
    ],
    outcomes: [
      'Describe the business value of Microsoft Power Platform',
      'Understand Dataverse, connectors and Power Fx basics',
      'Build a basic canvas and model-driven app with Power Apps',
      'Create automated flows with Power Automate',
      'Build reports and dashboards with Power BI and agents with Copilot Studio',
    ],
    syllabus: [
      {
        module: 'Module 1: Power Platform Business Value',
        topics: ['Platform components', 'Copilot in Power Platform', 'Environments and admin center', 'Security and governance basics'],
      },
      {
        module: 'Module 2: Data Foundations',
        topics: ['Microsoft Dataverse tables, columns and relationships', 'Connectors and custom connectors', 'Power Fx basics'],
      },
      {
        module: 'Module 3: Power Apps',
        topics: ['Canvas apps', 'Model-driven apps', 'Forms, views and controls', 'Sharing apps'],
      },
      {
        module: 'Module 4: Power Automate',
        topics: ['Cloud flows and triggers', 'Approvals', 'Desktop flows (RPA) overview', 'Process mining overview'],
      },
      {
        module: 'Module 5: Power BI',
        topics: ['Connecting to data', 'Building reports and visuals', 'Dashboards', 'Publishing and sharing'],
      },
      {
        module: 'Module 6: Copilot Studio',
        topics: ['Creating an agent', 'Topics and knowledge sources', 'Publishing to channels', 'Exam preparation'],
      },
    ],
    audience: 'Business users, analysts, citizen developers, functional consultants and IT professionals exploring low-code solutions.',
    format: 'Instructor-led • 1-2 Days • Hands-on Build Labs • Exam Practice',
    prerequisites: 'None. Basic Excel or data familiarity helpful',
  },
  'mb-910': {
    code: 'MB-910',
    platform: 'Dynamics 365 CE',
    title: 'Microsoft Dynamics 365 Fundamentals (CRM)',
    description: 'Get a clear overview of the Dynamics 365 customer engagement apps: Sales, Customer Service, Field Service, Customer Insights and the shared platform beneath them.',
    fullDescription: `MB-910 validates foundational knowledge of the Dynamics 365 customer engagement (CRM) apps. It is the natural first step for anyone joining a CE project, whether as a consultant, developer, business user or project manager. This course explains how Dynamics 365 Sales, Customer Service, Field Service and Customer Insights support the full customer lifecycle, and how they share a common foundation in Microsoft Dataverse and Power Platform. You will navigate live apps, follow a lead-to-opportunity sales process, resolve a case with knowledge articles, schedule a field work order, and see how customer data is unified to drive personalised journeys. The course also covers Copilot features, reporting, Microsoft 365 integration and security basics. Focused exam practice prepares you to pass MB-910 and continue to role-based certifications such as MB-280, MB-230 and MB-240.`,
    industryApplications: [
      { industry: 'CRM Programmes', value: 'Shared understanding across business and IT teams starting a CE rollout' },
      { industry: 'Sales Organisations', value: 'See how pipeline, forecasting and Copilot support sellers' },
      { industry: 'Service Centres', value: 'Understand case management, routing and self-service options' },
      { industry: 'Partners & Consultancies', value: 'Onboard new consultants onto the Dynamics 365 CE stack' },
    ],
    outcomes: [
      'Describe Dynamics 365 Sales, Customer Service, Field Service and Customer Insights',
      'Explain shared capabilities in Dataverse and Power Platform',
      'Follow core CRM processes from lead to service resolution',
      'Describe Copilot and AI features across CE apps',
      'Understand reporting, integration and security fundamentals',
    ],
    syllabus: [
      { module: 'Module 1: CRM and Dynamics 365 Overview', topics: ['Customer engagement concepts', 'Dynamics 365 app family', 'Licensing overview', 'Navigation'] },
      { module: 'Module 2: Shared Platform', topics: ['Microsoft Dataverse', 'Power Apps, Power Automate and Power BI', 'Microsoft 365 and Teams integration', 'Copilot'] },
      { module: 'Module 3: Dynamics 365 Sales', topics: ['Leads, opportunities and accounts', 'Sales process', 'Forecasting', 'Sales insights'] },
      { module: 'Module 4: Customer Insights', topics: ['Customer Insights - Data', 'Customer Insights - Journeys', 'Segments and personalisation'] },
      { module: 'Module 5: Customer Service', topics: ['Cases and queues', 'Knowledge management', 'Omnichannel and routing', 'Service analytics'] },
      { module: 'Module 6: Field Service', topics: ['Work orders', 'Scheduling', 'Mobile app', 'Exam preparation'] },
    ],
    audience: 'Business users, new CE consultants and developers, project managers, and IT professionals new to Dynamics 365 customer engagement.',
    format: 'Instructor-led • 1-2 Days • Live App Walkthroughs • Exam Practice',
    prerequisites: 'None. General business process awareness helpful',
  },
  'mb-280': {
    code: 'MB-280',
    platform: 'Dynamics 365 CE',
    title: 'Microsoft Dynamics 365 Customer Experience Analyst',
    description: 'Configure Dynamics 365 Sales and Customer Insights to manage the full customer journey, from lead capture and pipeline to personalised engagement.',
    fullDescription: `MB-280 is the role-based certification for functional consultants who implement Dynamics 365 Sales together with Customer Insights. It replaced the earlier Sales (MB-210) and Marketing (MB-220) exams, reflecting how organisations now design a single customer experience across marketing and sales. In this hands-on course you will configure Dynamics 365 Sales: sales processes and business process flows, products and price lists, quotes and orders, forecasting, sales accelerator and Copilot for sellers. You will then use Customer Insights - Journeys to build segments, emails, forms and real-time journeys, and connect them to sales activity. The course also covers Dataverse customisation, security roles, reporting with dashboards and Power BI, and collaboration through Microsoft Teams and Outlook. Every module ends in a lab built on a realistic business scenario, and the course closes with exam practice for MB-280.`,
    industryApplications: [
      { industry: 'B2B Sales', value: 'Pipeline management, forecasting and seller productivity with Copilot' },
      { industry: 'Marketing Teams', value: 'Real-time journeys, segmentation and lead nurturing' },
      { industry: 'Professional Services', value: 'Account management and opportunity tracking for complex deals' },
      { industry: 'Retail & Consumer', value: 'Personalised customer engagement across channels' },
    ],
    outcomes: [
      'Configure Dynamics 365 Sales processes, products and pricing',
      'Set up forecasting, sales accelerator and Copilot for sellers',
      'Build segments, journeys and lead scoring in Customer Insights - Journeys',
      'Customise Dataverse tables, forms, views and security',
      'Deliver reporting with dashboards and Power BI',
    ],
    syllabus: [
      { module: 'Module 1: Customer Experience Foundations', topics: ['Dynamics 365 Sales and Customer Insights overview', 'Environment setup', 'Dataverse basics'] },
      { module: 'Module 2: Configure Dynamics 365 Sales', topics: ['Leads, opportunities and business process flows', 'Products, price lists and discounts', 'Quotes, orders and invoices'] },
      { module: 'Module 3: Seller Productivity', topics: ['Sales accelerator and sequences', 'Forecasting', 'Copilot in Sales', 'Teams and Outlook integration'] },
      { module: 'Module 4: Customer Insights - Journeys', topics: ['Segments', 'Emails, forms and events', 'Real-time journeys', 'Lead scoring and handoff'] },
      { module: 'Module 5: Customisation and Security', topics: ['Tables, forms and views', 'Business rules', 'Security roles and teams'] },
      { module: 'Module 6: Reporting and Insights', topics: ['Dashboards and charts', 'Power BI', 'Sales insights', 'Exam preparation'] },
    ],
    audience: 'Functional consultants, CRM analysts, sales operations and marketing operations professionals implementing Dynamics 365 Sales and Customer Insights.',
    format: 'Instructor-led • 4-5 Days • Hands-on Labs • Real-world Scenarios',
    prerequisites: 'MB-910 or equivalent Dynamics 365 CE familiarity recommended',
  },
  'mb-230': {
    code: 'MB-230',
    platform: 'Dynamics 365 CE',
    title: 'Microsoft Dynamics 365 Customer Service Functional Consultant',
    description: 'Implement Dynamics 365 Customer Service and Contact Center: cases, knowledge, SLAs, unified routing, omnichannel engagement and Copilot for agents.',
    fullDescription: `MB-230 validates the skills to implement Dynamics 365 Customer Service for organisations of any size. This hands-on course follows the life of a customer request from first contact to resolution. You will configure case management, queues, business process flows and automatic record creation, then set up knowledge management, entitlements and service-level agreements. The course covers unified routing and omnichannel engagement for chat, voice, email and social channels, the Customer Service workspace, and Copilot features that summarise cases and draft responses for agents. You will also schedule services, configure customer surveys, and build dashboards and analytics that help managers improve service quality. Each module includes practical labs on a realistic service centre scenario, and the course finishes with targeted exam practice for MB-230.`,
    industryApplications: [
      { industry: 'Contact Centres', value: 'Unified routing, omnichannel engagement and agent productivity' },
      { industry: 'Telecoms & Utilities', value: 'High-volume case handling with SLAs and entitlements' },
      { industry: 'Public Sector', value: 'Citizen service requests and knowledge-driven self-service' },
      { industry: 'Financial Services', value: 'Secure, auditable customer support processes' },
    ],
    outcomes: [
      'Configure case management, queues and routing rules',
      'Implement knowledge management and self-service',
      'Set up entitlements and service-level agreements',
      'Configure omnichannel engagement and the Customer Service workspace',
      'Use Copilot, analytics and dashboards to improve service',
    ],
    syllabus: [
      { module: 'Module 1: Customer Service Fundamentals', topics: ['App overview', 'Customer Service Hub and workspace', 'Customer service admin center'] },
      { module: 'Module 2: Case Management', topics: ['Cases and business process flows', 'Queues', 'Automatic record creation', 'Parent and child cases'] },
      { module: 'Module 3: Knowledge, Entitlements and SLAs', topics: ['Knowledge articles and search', 'Entitlements', 'Service-level agreements', 'Customer surveys'] },
      { module: 'Module 4: Unified Routing and Omnichannel', topics: ['Workstreams and routing rules', 'Chat, voice and email channels', 'Agent experience', 'Supervisor tools'] },
      { module: 'Module 5: Copilot and Automation', topics: ['Copilot for agents', 'Copilot Studio bots', 'Power Automate for service'] },
      { module: 'Module 6: Scheduling and Analytics', topics: ['Service scheduling', 'Dashboards and reports', 'Customer Service analytics', 'Exam preparation'] },
    ],
    audience: 'Functional consultants, service operations leads, contact centre managers and CRM analysts implementing Dynamics 365 Customer Service.',
    format: 'Instructor-led • 4-5 Days • Hands-on Labs • Contact Centre Scenarios',
    prerequisites: 'MB-910 or equivalent Dynamics 365 CE familiarity recommended',
  },
  'mb-240': {
    code: 'MB-240',
    platform: 'Dynamics 365 CE',
    title: 'Microsoft Dynamics 365 Field Service Functional Consultant',
    description: 'Implement Dynamics 365 Field Service: work orders, resource scheduling, inventory, agreements, the mobile app and connected field service.',
    fullDescription: `MB-240 validates the skills to implement Dynamics 365 Field Service, the solution for organisations that send technicians to customer sites. This hands-on course covers the complete field service lifecycle. You will configure work order types, incident types and service tasks, set up bookable resources, skills and territories, and use the schedule board and Resource Scheduling Optimization to dispatch the right technician at the right time. You will manage inventory, purchasing and returns, create agreements for recurring maintenance, and configure the Field Service mobile app for technicians. The course also covers customer assets, connected field service with IoT, Copilot features for frontline workers, and integration with Customer Service and Finance and Operations. Labs follow a realistic service business scenario, and the course ends with exam practice for MB-240.`,
    industryApplications: [
      { industry: 'Equipment Manufacturers', value: 'Installation, maintenance and warranty service' },
      { industry: 'Utilities & Energy', value: 'Planned maintenance and emergency dispatch' },
      { industry: 'Facilities Management', value: 'Recurring agreements and preventive maintenance' },
      { industry: 'Healthcare Equipment', value: 'Asset tracking and compliance-driven inspections' },
    ],
    outcomes: [
      'Configure work orders, incident types and service tasks',
      'Set up resources, skills, territories and scheduling',
      'Manage inventory, purchasing and returns',
      'Create agreements for recurring and preventive service',
      'Configure the mobile app, customer assets and connected field service',
    ],
    syllabus: [
      { module: 'Module 1: Field Service Fundamentals', topics: ['App overview', 'Field Service settings', 'Integration with Customer Service'] },
      { module: 'Module 2: Work Orders', topics: ['Work order types and lifecycle', 'Incident types', 'Service tasks', 'Products and services'] },
      { module: 'Module 3: Scheduling', topics: ['Bookable resources', 'Skills and territories', 'Schedule board', 'Resource Scheduling Optimization'] },
      { module: 'Module 4: Inventory and Agreements', topics: ['Warehouses and inventory', 'Purchasing and returns', 'Agreements', 'Customer assets'] },
      { module: 'Module 5: Frontline Experience', topics: ['Field Service mobile app', 'Copilot for frontline workers', 'Remote assist'] },
      { module: 'Module 6: Connected Field Service and Analytics', topics: ['IoT alerts', 'Field Service analytics', 'Finance and Operations integration', 'Exam preparation'] },
    ],
    audience: 'Functional consultants, service delivery managers, dispatch leads and CRM analysts implementing Dynamics 365 Field Service.',
    format: 'Instructor-led • 4-5 Days • Hands-on Labs • Service Operations Scenarios',
    prerequisites: 'MB-910 or equivalent Dynamics 365 CE familiarity recommended',
  },
  'mb-260': {
    code: 'MB-260',
    platform: 'Dynamics 365 CE',
    title: 'Microsoft Customer Insights (Data) Specialist',
    description: 'Implement Dynamics 365 Customer Insights - Data to unify customer data, build profiles, measures and segments, and activate insights across the business.',
    fullDescription: `MB-260 validates the skills to implement Dynamics 365 Customer Insights - Data, Microsoft's customer data platform. This course shows how to turn scattered customer data into a single, trusted view of each customer. You will ingest data from Dataverse, Azure Data Lake, Microsoft Fabric and other sources, then map, match and merge it into unified customer profiles. You will build measures, segments and enrichments, use AI predictions such as churn and customer lifetime value, and apply consent and data governance. The course then covers activating insights by exporting segments to marketing and advertising destinations, surfacing profiles in Dynamics 365 Sales and Customer Service, and integrating with Customer Insights - Journeys. Labs use realistic multi-source customer data, and the course ends with exam practice for MB-260.`,
    industryApplications: [
      { industry: 'Retail & E-commerce', value: 'Single customer view for personalisation and loyalty' },
      { industry: 'Banking & Insurance', value: 'Churn prediction and next-best-action insights' },
      { industry: 'Hospitality & Travel', value: 'Guest profiles unified across booking and service systems' },
      { industry: 'Marketing Analytics', value: 'High-value segments activated across channels' },
    ],
    outcomes: [
      'Ingest and prepare data from multiple sources',
      'Unify data into customer profiles with match and merge rules',
      'Build measures, segments and enrichments',
      'Use AI predictions such as churn and lifetime value',
      'Activate insights in Dynamics 365 and external destinations',
    ],
    syllabus: [
      { module: 'Module 1: Customer Data Platform Concepts', topics: ['Customer Insights overview', 'Environments', 'Security and access'] },
      { module: 'Module 2: Data Ingestion', topics: ['Data sources and connectors', 'Dataverse and Data Lake', 'Microsoft Fabric', 'Data preparation'] },
      { module: 'Module 3: Data Unification', topics: ['Source fields mapping', 'Deduplication', 'Match and merge rules', 'Unified profiles'] },
      { module: 'Module 4: Measures, Segments and Enrichment', topics: ['Measures', 'Segments and quick segments', 'Enrichments', 'Activities'] },
      { module: 'Module 5: AI and Predictions', topics: ['Churn prediction', 'Customer lifetime value', 'Product recommendations', 'Copilot'] },
      { module: 'Module 6: Activation and Governance', topics: ['Exports and destinations', 'Customer card in Dynamics 365', 'Consent and privacy', 'Exam preparation'] },
    ],
    audience: 'Data analysts, marketing technologists, functional consultants and data engineers implementing a customer data platform.',
    format: 'Instructor-led • 3-4 Days • Hands-on Data Labs • Real-world Scenarios',
    prerequisites: 'Familiarity with Dynamics 365 CE and basic data concepts recommended',
  },
  'pl-200': {
    code: 'PL-200',
    platform: 'Dynamics 365 CE',
    title: 'Microsoft Power Platform Functional Consultant',
    description: 'Configure the Dataverse and Power Platform foundation of Dynamics 365 CE: data model, model-driven apps, security, automation, Copilot Studio and reporting.',
    fullDescription: `PL-200 is the core functional certification for Dynamics 365 customer engagement consultants, because every CE app is built on Microsoft Dataverse and Power Platform. This hands-on course teaches you to design and configure solutions the way CE projects do. You will build the Dataverse data model with tables, columns, relationships and business rules, design model-driven and canvas apps, and configure security with business units, security roles, teams and column-level security. You will automate processes with Power Automate cloud flows, business process flows and classic workflows, build agents with Copilot Studio, and deliver reporting with Power BI. The course also covers solutions and environment management, data import and integration with Microsoft 365. Labs use a realistic CE implementation scenario, and the course ends with exam practice for PL-200.`,
    industryApplications: [
      { industry: 'CE Implementations', value: 'Configure the Dataverse layer under Sales, Service and Field Service' },
      { industry: 'Business Process Automation', value: 'Replace manual approvals and handoffs with flows' },
      { industry: 'Line-of-Business Apps', value: 'Model-driven apps for case, asset and request tracking' },
      { industry: 'Customer Self-service', value: 'Copilot Studio agents connected to Dataverse data' },
    ],
    outcomes: [
      'Design and configure the Dataverse data model',
      'Build model-driven and canvas apps',
      'Configure security roles, business units and teams',
      'Automate processes with Power Automate and business process flows',
      'Build Copilot Studio agents and Power BI reports',
    ],
    syllabus: [
      { module: 'Module 1: Environments and Solutions', topics: ['Environment strategy', 'Solutions and publishers', 'Data import and export'] },
      { module: 'Module 2: Dataverse Data Model', topics: ['Tables and columns', 'Relationships', 'Business rules', 'Calculated and rollup columns'] },
      { module: 'Module 3: Apps', topics: ['Model-driven apps', 'Forms, views and dashboards', 'Canvas apps', 'Power Pages overview'] },
      { module: 'Module 4: Security', topics: ['Business units', 'Security roles and teams', 'Column-level security', 'Hierarchy security'] },
      { module: 'Module 5: Automation', topics: ['Power Automate cloud flows', 'Business process flows', 'Classic workflows', 'Copilot Studio agents'] },
      { module: 'Module 6: Reporting and Integration', topics: ['Power BI with Dataverse', 'Microsoft 365 integration', 'Exam preparation'] },
    ],
    audience: 'Dynamics 365 CE functional consultants, business analysts and power users who configure Dataverse-based solutions.',
    format: 'Instructor-led • 5 Days • Hands-on Labs • CE Implementation Scenarios',
    prerequisites: 'PL-900 or MB-910 recommended',
  },
  'pl-400': {
    code: 'PL-400',
    platform: 'Dynamics 365 CE',
    title: 'Microsoft Power Platform Developer',
    description: 'Extend Dynamics 365 CE and Power Platform with code: plug-ins, client scripting, PCF controls, custom connectors, Web API and Azure integration.',
    fullDescription: `PL-400 is the technical certification for Dynamics 365 customer engagement developers. It replaced the earlier MB-400 exam and covers everything needed to extend CE apps and Power Platform with code. In this hands-on course you will design technical solutions, write C# plug-ins and custom APIs that run in the Dataverse event pipeline, and add client-side logic with JavaScript and the Client API. You will build Power Apps component framework (PCF) controls with TypeScript, create custom connectors, and integrate with external systems through the Dataverse Web API, Azure Functions, Service Bus and webhooks. The course also covers Power Fx, performance and security considerations, and application lifecycle management with solutions, pipelines and source control. Coding labs follow a realistic CE extension scenario, and the course ends with exam practice for PL-400.`,
    industryApplications: [
      { industry: 'CE Development', value: 'Plug-ins, scripts and custom controls for Sales and Service apps' },
      { industry: 'Systems Integration', value: 'Connect Dataverse with ERP, web and legacy systems' },
      { industry: 'ISVs & AppSource', value: 'Packaged solutions built on Dataverse' },
      { industry: 'DevOps Teams', value: 'Automated ALM with pipelines and source control' },
    ],
    outcomes: [
      'Design technical architecture for Power Platform and CE solutions',
      'Develop plug-ins and custom APIs in C#',
      'Extend the user experience with JavaScript and PCF controls',
      'Integrate using Web API, custom connectors and Azure services',
      'Implement ALM with solutions, pipelines and source control',
    ],
    syllabus: [
      { module: 'Module 1: Technical Design', topics: ['Solution components', 'Extensibility options', 'Security and performance design'] },
      { module: 'Module 2: Dataverse Server-side', topics: ['Event pipeline', 'C# plug-ins', 'Custom APIs', 'Debugging and Plug-in Registration Tool'] },
      { module: 'Module 3: User Experience', topics: ['Client API and JavaScript', 'Command bar customisation', 'Power Fx', 'Canvas app components'] },
      { module: 'Module 4: PCF Controls', topics: ['Power Apps component framework', 'TypeScript and React controls', 'Packaging and deployment'] },
      { module: 'Module 5: Integration', topics: ['Dataverse Web API and SDK', 'Custom connectors', 'Azure Functions, Service Bus and webhooks'] },
      { module: 'Module 6: ALM', topics: ['Solutions and layering', 'Power Platform pipelines', 'Azure DevOps and GitHub', 'Exam preparation'] },
    ],
    audience: 'Developers and technical consultants building and extending Dynamics 365 CE and Power Platform solutions.',
    format: 'Instructor-led • 5 Days • Advanced Coding Labs • Real-world Development Scenarios',
    prerequisites: 'Programming experience in C# and JavaScript; PL-200 knowledge helpful',
  },
  'pl-600': {
    code: 'PL-600',
    platform: 'Dynamics 365 CE',
    title: 'Microsoft Power Platform Solution Architect',
    description: 'Architect enterprise Dynamics 365 CE and Power Platform solutions: requirements, solution design, data, integration, security, ALM and governance.',
    fullDescription: `PL-600 is the expert-level architect certification for Dynamics 365 customer engagement and Power Platform. It replaced the earlier MB-600 exam and targets senior consultants who lead solution design on enterprise projects. This course focuses on the decisions an architect makes rather than individual configuration steps. You will learn to run discovery and requirements workshops, perform fit-gap analysis, and choose between configuration, low-code and pro-code options. You will design the Dataverse data model, integration architecture, security model and environment strategy, plan data migration, and define application lifecycle management and governance with the Center of Excellence. The course also covers performance, scalability, testing and go-live readiness. Case studies and design workshops based on real enterprise scenarios prepare you to lead CE implementations and pass the PL-600 exam.`,
    industryApplications: [
      { industry: 'Enterprise CRM Programmes', value: 'End-to-end design for multi-app CE rollouts' },
      { industry: 'Consulting Leadership', value: 'Leading solution design and technical delivery' },
      { industry: 'Platform Governance', value: 'Environment strategy, CoE and data loss prevention' },
      { industry: 'Digital Transformation', value: 'Modernising legacy CRM onto Dynamics 365' },
    ],
    outcomes: [
      'Lead discovery, requirements and fit-gap analysis',
      'Design data model, integration and security architecture',
      'Define environment strategy, ALM and governance',
      'Plan data migration, testing and go-live',
      'Guide teams and stakeholders through implementation',
    ],
    syllabus: [
      { module: 'Module 1: Solution Envisioning', topics: ['Discovery workshops', 'Requirements and fit-gap', 'Choosing components', 'Estimation'] },
      { module: 'Module 2: Solution Architecture', topics: ['Dataverse data model', 'App and automation design', 'Configuration vs code decisions'] },
      { module: 'Module 3: Integration and Data', topics: ['Integration patterns', 'Data migration strategy', 'Reporting and analytics design'] },
      { module: 'Module 4: Security', topics: ['Security model design', 'Identity and access', 'Compliance and data loss prevention'] },
      { module: 'Module 5: ALM and Governance', topics: ['Environment strategy', 'ALM and pipelines', 'Center of Excellence', 'Performance and scalability'] },
      { module: 'Module 6: Delivery Leadership', topics: ['Testing strategy', 'Go-live readiness', 'Stakeholder management', 'Exam preparation'] },
    ],
    audience: 'Solution architects, senior functional and technical consultants, and technical leads on Dynamics 365 CE and Power Platform projects.',
    format: 'Instructor-led • 5 Days • Design Workshops • Enterprise Case Studies',
    prerequisites: 'Experience as a CE functional consultant or developer; PL-200 or PL-400 recommended',
  },
  'mb-800': {
    code: 'MB-800',
    title: 'Microsoft Dynamics 365 Business Central Functional Consultant',
    description: 'Develop expertise in implementing and configuring Microsoft Dynamics 365 Business Central. This hands-on course covers core functionality, module setup, and practical deployment scenarios.',
    fullDescription: `Microsoft Dynamics 365 Business Central is a comprehensive cloud-based enterprise resource planning (ERP) solution designed for small and mid-market organizations. The MB-800 certification validates your ability to implement, configure, and support Business Central deployments across financial management, supply chain, sales, and operations modules. This intensive 5-day hands-on training equips you with the skills to manage complete implementations, from system setup and data migration to ongoing optimization and user support. You'll work with live Business Central environments, configure real-world scenarios, and develop the expertise needed to pass the MB-800 certification exam on your first attempt. The training emphasizes practical implementation patterns, best practices learned from hundreds of successful deployments, and problem-solving techniques used by certified consultants in the field.`,
    industryApplications: [
      { industry: 'Manufacturing', value: 'Production planning, inventory optimization, and supply chain automation' },
      { industry: 'Retail & Distribution', value: 'Multi-location inventory management and vendor collaboration' },
      { industry: 'Financial Services', value: 'Regulatory compliance, multi-currency handling, and financial reporting' },
      { industry: 'Healthcare', value: 'Budget management, vendor tracking, and compliance requirements' },
    ],
    outcomes: [
      'Configure Business Central core components and modules',
      'Implement and manage financial management features',
      'Set up supply chain and operations functionality',
      'Configure customer relationship management and sales',
      'Perform system administration, maintenance, and reporting',
    ],
    syllabus: [
      {
        module: 'Module 1: Business Central Fundamentals',
        topics: ['System overview', 'Navigation', 'Basic configuration', 'Data entry and management'],
      },
      {
        module: 'Module 2: Financial Management',
        topics: ['Chart of accounts', 'General ledger setup', 'Banking and payments', 'Financial reporting'],
      },
      {
        module: 'Module 3: Sales and Receivables',
        topics: ['Customer setup', 'Sales orders', 'Invoicing', 'Customer management', 'Reporting'],
      },
      {
        module: 'Module 4: Purchasing and Payables',
        topics: ['Vendor setup', 'Purchase orders', 'Invoice processing', 'Payment management'],
      },
      {
        module: 'Module 5: Inventory Management',
        topics: ['Item setup', 'Stock transfers', 'Inventory valuation', 'Warehousing basics'],
      },
      {
        module: 'Module 6: Implementation and Administration',
        topics: ['System setup', 'User management', 'Security', 'Integration', 'Troubleshooting'],
      },
    ],
    audience: 'Business analysts, functional consultants, implementation specialists, and ERP professionals seeking Business Central expertise.',
    format: 'Instructor-led • 5 Days • Hands-on Labs • Real-world Scenarios',
    prerequisites: 'Basic ERP knowledge recommended; no prior Business Central experience required',
  },
  'mb-820': {
    code: 'MB-820',
    title: 'Microsoft Dynamics 365 Business Central Developer',
    description: 'Master advanced development in Business Central using AL language and extension framework. Learn to build custom solutions and extend platform capabilities.',
    fullDescription: `The MB-820 certification targets developers and technical specialists who need to extend Microsoft Dynamics 365 Business Central through custom code and integrations. AL (a modern, object-oriented programming language) is the foundation of Business Central extensibility, allowing you to create powerful applications that enhance system functionality without modifying core code. This advanced 5-day training covers AL language fundamentals, VS Code development environment setup, object model architecture, and enterprise integration patterns. You'll build real-world extensions, implement business logic, create automated workflows, and integrate with external systems through APIs and web services. The course emphasizes clean code architecture, testing practices, performance optimization, and deployment strategies. Graduates are prepared for the MB-820 exam and equipped to develop production-quality Business Central extensions used by thousands of organizations globally.`,
    industryApplications: [
      { industry: 'Technology Consulting', value: 'Building custom extensions and AppSource solutions' },
      { industry: 'Enterprise Integration', value: 'Connecting Business Central to ERP and specialized systems' },
      { industry: 'SaaS Providers', value: 'Creating vertical solutions on top of Business Central' },
      { industry: 'Digital Transformation', value: 'Automating legacy system migration and workflow optimization' },
    ],
    outcomes: [
      'Develop solutions using AL programming language',
      'Create and manage Business Central extensions',
      'Implement business logic and automated workflows',
      'Integrate Business Central with external systems',
      'Optimize application performance and debug solutions',
    ],
    syllabus: [
      {
        module: 'Module 1: AL Language Fundamentals',
        topics: ['AL syntax', 'Variables and data types', 'Control structures', 'Object hierarchy'],
      },
      {
        module: 'Module 2: AL Development Environment',
        topics: ['VS Code setup', 'Build tools', 'Debugging', 'Testing frameworks'],
      },
      {
        module: 'Module 3: Objects and Properties',
        topics: ['Tables', 'Pages', 'Codeunits', 'Queries', 'Object properties'],
      },
      {
        module: 'Module 4: Business Logic Implementation',
        topics: ['Triggers and events', 'Validations', 'Calculations', 'Business rules'],
      },
      {
        module: 'Module 5: Integration and APIs',
        topics: ['Web services', 'APIs', 'Data exchange', 'Third-party integrations'],
      },
      {
        module: 'Module 6: Performance and Deployment',
        topics: ['Performance optimization', 'Extension publishing', 'AppSource submission', 'Maintenance'],
      },
    ],
    audience: 'Developers, software engineers, and technical consultants with strong C# or object-oriented programming experience.',
    format: 'Instructor-led • 5 Days • Advanced Coding Labs • Real-world Development Scenarios',
    prerequisites: 'Strong programming background required; C# or similar language experience essential',
  },
  'mb-330': {
    code: 'MB-330',
    title: 'Microsoft Dynamics 365 Supply Chain Management Functional Consultant',
    description: 'Comprehensive training on implementing and configuring Supply Chain Management. Master demand planning, inventory management, procurement, and production control.',
    fullDescription: `Microsoft Dynamics 365 Supply Chain Management delivers end-to-end visibility and control over your organization's supply chain operations. The MB-330 certification validates expertise in implementing, configuring, and optimizing SCM functionality including inventory management, demand planning, procurement, production planning, and logistics. This intensive training covers practical implementation of multi-location inventory operations, vendor collaboration, forecasting techniques, and production scheduling in real-world scenarios. You'll configure demand-driven planning models, optimize inventory levels, implement procurement workflows, and set up production control processes. The course emphasizes integration with financial systems, data-driven decision-making, and supply chain best practices from industries including manufacturing, distribution, and retail. Upon completion, you'll possess the skills to lead SCM implementations, manage complex supply chain networks, and improve operational efficiency.`,
    industryApplications: [
      { industry: 'Manufacturing', value: 'Production planning, BOM management, and inventory optimization' },
      { industry: 'Global Distribution', value: 'Multi-warehouse inventory and demand forecasting' },
      { industry: 'Retail', value: 'Vendor management and procurement collaboration' },
      { industry: 'Automotive', value: 'Complex supply chain networks and compliance' },
    ],
    outcomes: [
      'Configure Supply Chain Management core components',
      'Implement demand planning and forecasting',
      'Manage inventory operations and optimization',
      'Set up procurement and vendor management',
      'Configure production planning and scheduling',
    ],
    syllabus: [
      {
        module: 'Module 1: SCM Fundamentals',
        topics: ['System overview', 'Core concepts', 'Navigation', 'Configuration basics'],
      },
      {
        module: 'Module 2: Inventory Management',
        topics: ['Item setup', 'Warehousing', 'Inventory valuation', 'Tracking'],
      },
      {
        module: 'Module 3: Demand Planning',
        topics: ['Forecasting', 'Planning', 'Master scheduling', 'Demand management'],
      },
      {
        module: 'Module 4: Procurement',
        topics: ['Vendor management', 'Purchase requisitions', 'Purchase orders', 'Supplier collaboration'],
      },
      {
        module: 'Module 5: Production',
        topics: ['Production planning', 'BOM management', 'Operations scheduling', 'Quality control'],
      },
      {
        module: 'Module 6: Advanced Topics',
        topics: ['Analytics', 'Optimization', 'Integration', 'Best practices'],
      },
    ],
    audience: 'Supply chain professionals, operations managers, business analysts, and implementation consultants.',
    format: 'Instructor-led • 5 Days • Hands-on Labs • Industry-specific Scenarios',
    prerequisites: 'Supply chain or operations background helpful; basic ERP concepts recommended',
  },
  'mb-335': {
    code: 'MB-335',
    title: 'Microsoft Dynamics 365 Supply Chain Management Functional Consultant Expert',
    description: 'Advanced implementation expertise in Supply Chain Management. Focus on complex scenarios, integration, and optimization of supply chain processes at enterprise scale.',
    fullDescription: `The MB-335 certification represents expert-level mastery of Dynamics 365 Supply Chain Management implementation and optimization. This advanced course targets experienced supply chain professionals and consultants who manage complex, multi-entity implementations for large organizations with sophisticated supply chain requirements. Topics include demand-driven planning models, advanced procurement strategies, supply chain network optimization, lean manufacturing principles, advanced analytics, and enterprise-wide deployment patterns. You'll work through case studies involving multi-national operations, complex BOM structures, advanced demand planning algorithms, and integrated supply chain networks. The training emphasizes architectural design decisions, change management in large implementations, and optimization strategies that drive measurable business value. Graduates are prepared to architect enterprise supply chain solutions, lead large-scale implementations, and serve as technical leaders in supply chain transformation initiatives.`,
    industryApplications: [
      { industry: 'Enterprise Manufacturing', value: 'Multi-plant optimization and advanced planning' },
      { industry: 'Global Logistics', value: 'Network optimization and international compliance' },
      { industry: 'Pharmaceuticals', value: 'Traceability, compliance, and specialized sourcing' },
      { industry: 'High-Tech', value: 'Complex BOMs and supply chain agility' },
    ],
    outcomes: [
      'Design advanced supply chain solutions for enterprise',
      'Implement complex demand planning and optimization strategies',
      'Manage enterprise-wide inventory optimization',
      'Configure advanced procurement workflows and strategies',
      'Design and optimize production and logistics networks',
    ],
    syllabus: [
      {
        module: 'Module 1: Advanced Planning',
        topics: ['Demand-driven planning', 'Constraint-based planning', 'Advanced forecasting', 'Plan optimization'],
      },
      {
        module: 'Module 2: Advanced Procurement',
        topics: ['Procurement analytics', 'Supplier collaboration', 'Contract management', 'Strategic sourcing'],
      },
      {
        module: 'Module 3: Advanced Production',
        topics: ['Lean manufacturing', 'Advanced scheduling', 'Quality management', 'Product compliance'],
      },
      {
        module: 'Module 4: Supply Chain Analytics',
        topics: ['Analytics and reporting', 'Performance metrics', 'Cost analysis', 'Optimization tools'],
      },
      {
        module: 'Module 5: Integration and Optimization',
        topics: ['Cross-system integration', 'Supply chain network optimization', 'Process automation'],
      },
      {
        module: 'Module 6: Enterprise Implementation',
        topics: ['Global deployment', 'Multi-entity scenarios', 'Best practices', 'Change management'],
      },
    ],
    audience: 'Senior supply chain consultants, enterprise implementation leads, technical architects, and supply chain directors.',
    format: 'Instructor-led • 5 Days • Advanced Labs • Enterprise Solution Design',
    prerequisites: 'Supply chain functional experience strongly recommended; MB-330 completion or equivalent background',
  },
  'mb-500': {
    code: 'MB-500',
    title: 'Microsoft Dynamics 365 Finance and Operations Apps Developer',
    description: 'Master X++ development and advanced customization in Finance and Operations. Build enterprise-grade solutions with hands-on development exercises.',
    fullDescription: `The MB-500 certification validates expert-level development skills in Microsoft Dynamics 365 Finance and Operations. X++ is a powerful, object-oriented programming language designed for enterprise application development, and this advanced course covers everything needed to build production-quality solutions. Topics include X++ language fundamentals, object-oriented design patterns, application development, reporting frameworks, integration architecture, and deployment strategies. You'll develop custom business logic, create complex reports, implement workflow processes, integrate with external systems, and optimize application performance. The training emphasizes enterprise development best practices, security frameworks, compliance requirements, and ALM (Application Lifecycle Management) practices used in large-scale implementations. Graduates are equipped to lead technical development efforts, architect complex solutions, and serve as subject matter experts in Finance and Operations customization and development.`,
    industryApplications: [
      { industry: 'Financial Services', value: 'Custom financial processes and compliance automation' },
      { industry: 'Global Enterprises', value: 'Complex integrations and multi-legal entity structures' },
      { industry: 'Manufacturing', value: 'Advanced production processes and scheduling' },
      { industry: 'Consulting', value: 'Delivering vertical solutions and industry-specific capabilities' },
    ],
    outcomes: [
      'Develop enterprise solutions using X++ programming',
      'Create and manage custom extensions and frameworks',
      'Implement complex business processes and workflows',
      'Integrate Finance and Operations with external APIs and systems',
      'Deploy, maintain, and optimize custom solutions',
    ],
    syllabus: [
      {
        module: 'Module 1: X++ Language Fundamentals',
        topics: ['X++ syntax', 'Data types', 'Classes and inheritance', 'Exception handling'],
      },
      {
        module: 'Module 2: X++ Advanced Concepts',
        topics: ['OOP principles', 'Design patterns', 'Static and instance members', 'Collections'],
      },
      {
        module: 'Module 3: Object Model',
        topics: ['Tables', 'Forms', 'Reports', 'Queries', 'Business logic'],
      },
      {
        module: 'Module 4: Integration and APIs',
        topics: ['Services', 'Web services', 'Data exchange', 'Third-party integration'],
      },
      {
        module: 'Module 5: Performance and Security',
        topics: ['Performance tuning', 'Security framework', 'Role-based access', 'Compliance'],
      },
      {
        module: 'Module 6: Deployment and Maintenance',
        topics: ['Build and deployment', 'ALM practices', 'Troubleshooting', 'Support models'],
      },
    ],
    audience: 'Software developers, solution developers, senior technical specialists, and technical architects.',
    format: 'Instructor-led • 5 Days • Advanced Coding Labs • Real-world Development Scenarios',
    prerequisites: 'Strong programming experience (C# or similar); OOP concepts essential',
  },
  'mb-700': {
    code: 'MB-700',
    title: 'Microsoft Dynamics 365 Finance and Operations Apps Solution Architect',
    description: 'Design and architect enterprise Dynamics 365 solutions. Learn to plan implementations, manage integration, and guide technical strategy.',
    fullDescription: `The MB-700 certification represents the highest level of expertise in Dynamics 365 Finance and Operations, targeting solution architects and technical leaders responsible for designing enterprise-scale implementations. This strategic course goes beyond implementation details to focus on architecture principles, design patterns, integration strategies, security frameworks, and governance models. You'll learn to design scalable solutions for complex business requirements, manage multi-phased implementations across multiple legal entities, implement security and compliance frameworks, and lead technical teams through challenging implementations. Topics include system design, infrastructure planning, data migration strategies, integration architecture, performance optimization, and change management. The training uses enterprise case studies, design workshops, and strategic planning exercises. Graduates are prepared to architect solutions for the world's largest organizations, lead transformation initiatives, and serve as trusted technical advisors to C-level executives.`,
    industryApplications: [
      { industry: 'Enterprise Transformation', value: 'Strategic system deployments across complex organizations' },
      { industry: 'Global Corporations', value: 'Multi-country, multi-currency, multi-legal entity implementations' },
      { industry: 'Consulting Leadership', value: 'Managing large-scale engagements and technical delivery' },
      { industry: 'Technical Executive', value: 'CTO-level strategic planning and technology governance' },
    ],
    outcomes: [
      'Design scalable enterprise Dynamics 365 solutions',
      'Plan technical architecture and infrastructure',
      'Manage system integration and data migration strategy',
      'Implement governance, security, and compliance frameworks',
      'Lead solution delivery and drive organizational optimization',
    ],
    syllabus: [
      {
        module: 'Module 1: Solution Architecture Fundamentals',
        topics: ['Architecture frameworks', 'Design principles', 'Stakeholder management', 'Technology selection'],
      },
      {
        module: 'Module 2: Technical Architecture Design',
        topics: ['System design', 'Integration architecture', 'Infrastructure', 'Scalability'],
      },
      {
        module: 'Module 3: Implementation Planning',
        topics: ['Project methodology', 'Planning and estimation', 'Risk management', 'Change management'],
      },
      {
        module: 'Module 4: Data Migration and Integration',
        topics: ['Data strategy', 'Migration planning', 'Integration patterns', 'Data validation'],
      },
      {
        module: 'Module 5: Governance and Compliance',
        topics: ['Governance framework', 'Security architecture', 'Compliance requirements', 'Best practices'],
      },
      {
        module: 'Module 6: Enterprise Leadership',
        topics: ['Stakeholder communication', 'Solution governance', 'Quality assurance', 'Optimization'],
      },
    ],
    audience: 'Solution architects, senior technical leads, enterprise architects, implementation directors, and CTO/technical leadership.',
    format: 'Instructor-led • 5 Days • Strategic Design Sessions • Enterprise Case Studies',
    prerequisites: 'Senior development or implementation experience strongly recommended; MB-500 or equivalent background',
  },
};

export async function generateMetadata({ params }: { params: { code: string } }): Promise<Metadata> {
  const course = courseData[params.code.toLowerCase()];

  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    };
  }

  return {
    title: `${course.code} - ${course.title} | ${course.platform || 'Dynamics 365'} Certification Training`,
    description: course.description,
    keywords: `${course.code}, ${course.title}, ${course.platform || 'Dynamics 365'} training, Microsoft certification, hands-on course`,
    openGraph: {
      title: `${course.code} - ${course.title}`,
      description: course.description,
      type: 'website',
      url: `https://msfttrainings.com/courses/${params.code.toLowerCase()}`,
    },
  };
}

interface CoursePageProps {
  params: {
    code: string;
  };
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  const course = courseData[params.code.toLowerCase()];

  if (!course) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-mono font-bold text-blue-200 mb-2">
            {course.code}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {course.title}
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            {course.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Course Overview */}
          <div className="mb-16 pb-16 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              Course Overview
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              {course.fullDescription}
            </p>
          </div>

          {/* Industry Applications */}
          {course.industryApplications && (
            <div className="mb-16 pb-16 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Industry Applications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.industryApplications.map((app: any, idx: number) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="font-semibold text-navy-900 mb-2">{app.industry}</h3>
                    <p className="text-slate-700 text-sm">{app.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-slate-200">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                Format & Duration
              </p>
              <p className="text-slate-900 font-medium text-sm leading-relaxed">
                {course.format}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                Prerequisites
              </p>
              <p className="text-slate-900 font-medium text-sm leading-relaxed">
                {course.prerequisites}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                Target Audience
              </p>
              <p className="text-slate-900 font-medium text-sm leading-relaxed">
                {course.audience}
              </p>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Learning Outcomes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.outcomes.map((outcome: string, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-slate-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus */}
          <div className="mb-16 pb-16 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">
              Course Syllabus
            </h2>
            <div className="space-y-4">
              {course.syllabus.map((item: any, idx: number) => (
                <details
                  key={idx}
                  className="group bg-blue-50 rounded-lg border border-blue-200 p-6 cursor-pointer hover:bg-blue-100 transition-colors"
                >
                  <summary className="flex items-center justify-between font-semibold text-blue-900">
                    <span>{item.module}</span>
                    <span className="text-lg group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <ul className="space-y-2">
                      {item.topics.map((topic: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <span className="text-blue-400 font-bold flex-shrink-0">
                            •
                          </span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/enquiry?course=${course.code}`}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              Get Training Quote
            </Link>
            <Link
              href="/courses"
              className="px-8 py-3 border-2 border-blue-200 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-center"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
