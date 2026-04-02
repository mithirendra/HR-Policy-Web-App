// All policy data
const policies = [
// Recruitment policies
    {
        category: "recruitment",
        label: "Recruitment & Employer Branding",
        title: "Job Posting Policy",
        desc: "Guidelines for creating and publishing job advertisements internally and externally.",
         // link: "https://drive.google.com/your-document-link",
        points: [
            "All vacancies must be approved by the hiring manager and HR before posting",
            "Job descriptions must be reviewed for accuracy and inclusivity",
            "Roles must be posted internally for a minimum of 5 working days before external posting",
            "All postings must go through approved channels only"
        ]
    },
    {
        category: "recruitment",
        label: "Recruitment & Employer Branding",
        title: "Internal Hiring Policy",
        desc: "Policy governing the process for internal job transfers and promotions.",
         // link: "https://drive.google.com/your-document-link",
        points: [
            "Employees must have completed a minimum of 12 months in their current role",
            "Internal candidates must inform their current manager before applying",
            "Selection process is the same as external hiring — no preferential treatment",
            "Successful internal hires are subject to a 3 month transition period"
        ]
    },
    {
        category: "recruitment",
        label: "Recruitment & Employer Branding",
        title: "Employee Referral Programme",
        desc: "Policy for employees referring external candidates for open positions.",
        // link: "https://drive.google.com/your-document-link",
        points: [
            "All confirmed employees are eligible to refer candidates",
            "Referral bonus is paid after the referred employee completes 6 months",
            "Referrals for senior roles (Grade 7 and above) are not eligible for bonus",
            "HR must be notified of the referral relationship at time of application"
        ]
    },
    {
        category: "recruitment",
        label: "Recruitment & Employer Branding",
        title: "Background Check Policy",
        desc: "Policy for conducting pre-employment background verification.",
        points: [
            "Background checks are mandatory for all new hires before confirmation",
            "Checks include employment history, education, and criminal record",
            "Candidates must provide written consent before checks are conducted",
            "Offer may be withdrawn if results are inconsistent with information provided"
        ]
    },
    {
        category: "recruitment",
        label: "Recruitment & Employer Branding",
        title: "Probation Period Policy",
        desc: "Guidelines governing the probation period for new employees.",
        points: [
            "Standard probation period is 3 to 6 months depending on role level",
            "Performance is reviewed at the midpoint and end of probation",
            "Probation may be extended once by a maximum of 3 months",
            "Either party may terminate employment during probation with 1 week notice"
        ]
    },
    {
        category: "recruitment",
        label: "Recruitment & Employer Branding",
        title: "Employer Branding Guidelines",
        desc: "Standards for representing the company as an employer of choice.",
        points: [
            "All employer branding content must be approved by HR and Marketing",
            "Employee testimonials require written consent before publishing",
            "Brand tone and visuals must follow the company brand guidelines",
            "Employer branding metrics are reviewed quarterly by HR"
        ]
    },
    {
        category: "recruitment",
        label: "Recruitment & Employer Branding",
        title: "Social Media Policy",
        desc: "Guidelines for employees representing the company on social media.",
        points: [
            "Employees must not share confidential company information on social media",
            "Personal opinions must be clearly distinguished from company positions",
            "Employees are encouraged to share approved company content",
            "Violations may result in disciplinary action"
        ]
    },
    {
        category: "recruitment",
        label: "Recruitment & Employer Branding",
        title: "Diversity & Inclusion Policy",
        desc: "Policy ensuring equal opportunity and inclusive hiring practices.",
        points: [
            "All hiring decisions are based solely on merit, skills, and experience",
            "Job descriptions must use inclusive and gender neutral language",
            "Interview panels must include diverse representation where possible",
            "D&I metrics are tracked and reported to leadership quarterly"
        ]
    },

// Young Talent policies
    {
        category: "youngtalent",
        label: "Young Talent",
        title: "Internship Policy",
        desc: "Guidelines for managing internship programmes across all departments.",
        points: [
            "Internships are offered for a minimum of 3 months and maximum of 6 months",
            "All interns must be enrolled in an accredited institution",
            "Departments must submit internship requests to HR at least 6 weeks in advance",
            "Interns receive a monthly allowance as per the approved rate schedule",
            "A formal evaluation is conducted at the end of the internship period"
        ]
    },
    {
        category: "youngtalent",
        label: "Young Talent",
        title: "Scholarship Policy",
        desc: "Policy governing the company scholarship programme for outstanding students.",
        points: [
            "Scholarships are awarded based on academic merit and financial need",
            "Recipients must maintain a minimum CGPA as specified in the scholarship agreement",
            "Scholars are bonded to serve the company for a minimum of 3 years upon graduation",
            "Scholarship covers tuition fees and a monthly living allowance",
            "Failure to fulfil bond obligations results in full repayment of scholarship value"
        ]
    },
    {
        category: "youngtalent",
        label: "Young Talent",
        title: "Graduate Programme Policy",
        desc: "Policy for the structured graduate development programme for fresh graduates.",
        points: [
            "Programme duration is 12 to 18 months with rotations across key departments",
            "Graduates are assigned a mentor from senior management throughout the programme",
            "Performance is reviewed every 3 months against set development milestones",
            "Successful graduates are confirmed into a permanent role upon completion",
            "Graduates who resign within 12 months of confirmation must serve a notice of 2 months"
        ]
    },

// Onboarding Policies
{
        category: "onboarding",
        label: "Onboarding",
        title: "New Hire Onboarding Policy",
        desc: "Policy governing the structured onboarding process for all new employees.",
        points: [
            "Onboarding begins on the first day of employment and runs for 90 days",
            "HR is responsible for coordinating the onboarding schedule and documentation",
            "New hires must complete all mandatory compliance training within the first 30 days",
            "Line managers are responsible for conducting weekly check-ins during onboarding",
            "A formal 90 day review is conducted between the new hire and their manager"
        ]
    },
    {
        category: "onboarding",
        label: "Onboarding",
        title: "Buddy Programme Policy",
        desc: "Policy for assigning a buddy to support new hires during their first 90 days.",
        points: [
            "Every new hire is assigned a buddy from the same or related department",
            "Buddies must have a minimum of 1 year tenure with the company",
            "Buddy assignment is coordinated by HR at least 3 days before the new hire starts",
            "Buddies are expected to meet with the new hire at least once a week",
            "Participation as a buddy is recognised in the annual performance review"
        ]
    },
    {
        category: "onboarding",
        label: "Onboarding",
        title: "Probation Review Policy",
        desc: "Policy for conducting structured reviews during the probation period.",
        points: [
            "Probation reviews are conducted at the midpoint and end of the probation period",
            "Line managers must submit the review form to HR at least 5 days before the review date",
            "New hires are assessed on performance, conduct, and cultural fit",
            "HR must be notified immediately if there are concerns during probation",
            "Confirmation of employment is subject to a satisfactory probation review"
        ]
    },

// L&D Policies
{
        category: "ld",
        label: "Learning & Development",
        title: "Training & Development Policy",
        desc: "Policy governing access to learning and development opportunities for all employees.",
        points: [
            "All employees are entitled to a minimum of 3 training days per year",
            "Training needs are identified during the annual performance appraisal",
            "All training requests must be approved by the line manager and HR",
            "Employees must complete a training evaluation form within 5 days of completion",
            "Training records are maintained by HR and updated in the HR system"
        ]
    },
    {
        category: "ld",
        label: "Learning & Development",
        title: "Study Leave Policy",
        desc: "Policy for employees pursuing further education while in employment.",
        points: [
            "Employees are entitled to up to 10 days of paid study leave per year",
            "Study leave is subject to operational requirements and manager approval",
            "Employees must provide proof of enrolment and examination dates",
            "Study leave is not cumulative and cannot be carried forward to the next year",
            "Employees on study leave are not eligible for overtime claims during that period"
        ]
    },
    {
        category: "ld",
        label: "Learning & Development",
        title: "Training Sponsorship & Bond Policy",
        desc: "Policy governing company sponsorship for external certifications and programmes.",
        points: [
            "Sponsorship is available for programmes directly relevant to the employee's role",
            "Employees sponsored for programmes exceeding RM5,000 are subject to a bond",
            "Bond period is calculated at 1 year per RM5,000 of sponsorship value",
            "Employees who resign within the bond period must repay the pro-rated sponsorship amount",
            "All sponsorship requests must be approved by HR and the department head"
        ]
    },
    {
        category: "ld",
        label: "Learning & Development",
        title: "Mandatory Training Policy",
        desc: "Policy outlining compulsory training programmes for all employees.",
        points: [
            "All employees must complete mandatory training within the first 30 days of joining",
            "Mandatory training includes compliance, data protection, and workplace safety",
            "Refresher mandatory training is required annually for all employees",
            "Non-completion of mandatory training is flagged in the performance review",
            "HR tracks mandatory training completion and reports to leadership quarterly"
        ]
    },

// Performance & Succession
    {
        category: "performance",
        label: "Performance & Succession",
        title: "Performance Appraisal Policy",
        desc: "Policy governing the annual performance review process for all employees.",
        points: [
            "Performance appraisals are conducted annually in Q4",
            "All employees must complete a self-assessment before the manager review",
            "Final ratings are calibrated across departments by HR and senior leadership",
            "Performance ratings directly impact salary review and bonus eligibility",
            "Employees must be informed of their rating within 2 weeks of calibration"
        ]
    },
    {
        category: "performance",
        label: "Performance & Succession",
        title: "KPI Setting Policy",
        desc: "Policy for setting and tracking key performance indicators for all employees.",
        points: [
            "KPIs must be set within the first 30 days of each performance year",
            "All KPIs must follow the SMART framework",
            "KPIs are agreed upon mutually between the employee and line manager",
            "Mid-year KPI reviews are conducted in Q2 to assess progress",
            "Changes to KPIs must be approved by HR and documented in the HR system"
        ]
    },
    {
        category: "performance",
        label: "Performance & Succession",
        title: "Performance Improvement Plan (PIP)",
        desc: "Policy for managing employees who are not meeting performance expectations.",
        points: [
            "A PIP is initiated when an employee receives a below expectations rating",
            "PIP duration is between 30 to 90 days depending on the severity of the issue",
            "Clear and measurable improvement targets must be set at the start of the PIP",
            "HR must be involved in all stages of the PIP process",
            "Failure to meet PIP targets may result in termination of employment"
        ]
    },
    {
        category: "performance",
        label: "Performance & Succession",
        title: "Promotion Policy",
        desc: "Policy governing the criteria and process for employee promotions.",
        points: [
            "Promotions are based on performance rating, competency, and business need",
            "Employees must have a minimum of 2 consecutive years of meeting expectations",
            "All promotions must be approved by HR and the department head",
            "Promoted employees receive a salary adjustment in line with the new grade",
            "Promotions are announced internally before any external communication"
        ]
    },
    {
        category: "performance",
        label: "Performance & Succession",
        title: "Succession Planning Policy",
        desc: "Policy for identifying and developing future leaders within the organisation.",
        points: [
            "Succession planning is conducted annually as part of the talent review cycle",
            "All critical roles must have at least one identified successor",
            "Successors are categorised as ready now, ready in 1-2 years, or ready in 3+ years",
            "Development plans are created for all identified successors",
            "Succession planning data is reviewed by the CEO and CHRO annually"
        ]
    },
    {
        category: "performance",
        label: "Performance & Succession",
        title: "Talent Review Policy",
        desc: "Policy for conducting structured talent reviews across the organisation.",
        points: [
            "Talent reviews are conducted annually using a 9-box grid framework",
            "All managers Grade 5 and above participate in the talent review process",
            "Talent review outcomes inform succession planning and development priorities",
            "Results are confidential and shared only with HR and senior leadership",
            "Action plans arising from talent reviews are tracked quarterly by HR"
        ]
    },

    // Compensation & Leave
    {
        category: "compensation",
        label: "Compensation & Leave",
        title: "Salary Review Policy",
        desc: "Policy governing the annual salary review process for all employees.",
        points: [
            "Salary reviews are conducted annually following the performance appraisal cycle",
            "Salary increments are based on performance rating and market benchmarking",
            "All salary adjustments must be approved by HR and the department head",
            "Employees on a PIP are not eligible for a salary increment",
            "Revised salaries are effective from the first day of the new performance year"
        ]
    },
    {
        category: "compensation",
        label: "Compensation & Leave",
        title: "Overtime Policy",
        desc: "Policy governing overtime work and compensation for eligible employees.",
        points: [
            "Overtime is applicable to non-executive employees as defined by the Employment Act",
            "All overtime must be pre-approved by the line manager before it is worked",
            "Overtime is compensated at 1.5x the hourly rate on normal working days",
            "Overtime on public holidays is compensated at 3x the hourly rate",
            "Overtime claims must be submitted within 5 working days of the overtime worked"
        ]
    },
    {
        category: "compensation",
        label: "Compensation & Leave",
        title: "Claims & Reimbursement Policy",
        desc: "Policy for submitting and processing employee expense claims.",
        points: [
            "All claims must be submitted with original receipts within 30 days of the expense",
            "Claims exceeding the approved limit require additional approval from the department head",
            "Mileage claims are reimbursed at the approved rate per kilometre",
            "Claims submitted after 30 days will not be processed",
            "Fraudulent claims will result in disciplinary action"
        ]
    },
    {
        category: "compensation",
        label: "Compensation & Leave",
        title: "Annual Leave Policy",
        desc: "Policy governing the entitlement and management of annual leave.",
        points: [
            "Annual leave entitlement ranges from 8 to 20 days based on years of service",
            "Leave must be applied for and approved in advance via the HR system",
            "A maximum of 5 days of annual leave may be carried forward to the next year",
            "Unutilised leave beyond the carry forward limit is forfeited",
            "Employees who resign must utilise outstanding leave during the notice period"
        ]
    },
    {
        category: "compensation",
        label: "Compensation & Leave",
        title: "Medical Leave Policy",
        desc: "Policy governing paid medical leave entitlement for all employees.",
        points: [
            "Medical leave entitlement is 14 days per year for less than 2 years of service",
            "Entitlement increases to 18 days after 2 years and 22 days after 5 years of service",
            "A medical certificate from a registered practitioner is required for all medical leave",
            "Hospitalisation leave is separate from outpatient medical leave",
            "Abuse of medical leave is subject to disciplinary action"
        ]
    },
    {
        category: "compensation",
        label: "Compensation & Leave",
        title: "Maternity & Paternity Leave Policy",
        desc: "Policy governing paid leave entitlement for new parents.",
        points: [
            "Female employees are entitled to 98 days of paid maternity leave",
            "Maternity leave applies for up to 5 surviving children",
            "Male employees are entitled to 7 days of paid paternity leave",
            "Paternity leave must be taken within 30 days of the child's birth",
            "Employees must notify HR at least 30 days before the expected delivery date"
        ]
    },
    {
        category: "compensation",
        label: "Compensation & Leave",
        title: "Emergency Leave Policy",
        desc: "Policy for leave taken due to unforeseen personal or family emergencies.",
        points: [
            "Employees are entitled to up to 3 days of paid emergency leave per year",
            "Emergency leave covers immediate family members only",
            "Employees must notify their manager as soon as possible when taking emergency leave",
            "Supporting documentation may be required at the manager's discretion",
            "Emergency leave cannot be carried forward or converted to cash"
        ]
    },
    {
        category: "compensation",
        label: "Compensation & Leave",
        title: "Unpaid Leave Policy",
        desc: "Policy governing requests for unpaid leave of absence.",
        points: [
            "Unpaid leave may be granted at the discretion of the company",
            "Requests must be submitted at least 30 days in advance",
            "Maximum unpaid leave is 30 consecutive days per application",
            "EPF and SOCSO contributions are suspended during unpaid leave",
            "Employees on unpaid leave do not accumulate annual leave entitlement"
        ]
    },
    {
        category: "compensation",
        label: "Compensation & Leave",
        title: "Replacement Leave Policy",
        desc: "Policy for replacement leave when employees work on rest days or public holidays.",
        points: [
            "Replacement leave is granted when employees are required to work on public holidays",
            "Replacement leave must be taken within 30 days of the working holiday",
            "Replacement leave must be approved by the line manager",
            "Replacement leave cannot be carried forward beyond the 30 day period",
            "Replacement leave is not applicable to employees who volunteer to work on holidays"
        ]
    },

    // Health, Safety & Wellbeing
    {
        category: "health",
        label: "Health, Safety & Wellbeing",
        title: "Workplace Safety Policy",
        desc: "Policy ensuring a safe and healthy working environment for all employees.",
        points: [
            "All employees are responsible for maintaining a safe working environment",
            "Safety inspections are conducted quarterly by the safety committee",
            "All employees must complete mandatory workplace safety training annually",
            "Personal protective equipment must be worn in designated areas at all times",
            "Non-compliance with safety policies is subject to disciplinary action"
        ]
    },
    {
        category: "health",
        label: "Health, Safety & Wellbeing",
        title: "Incident Reporting Policy",
        desc: "Policy for reporting and managing workplace accidents and near misses.",
        points: [
            "All workplace incidents must be reported to HR and the safety officer immediately",
            "Incident reports must be submitted within 24 hours of the incident",
            "All incidents are investigated to identify root causes and preventive measures",
            "Serious incidents must be reported to DOSH within the statutory timeframe",
            "Employees who witness an incident are obligated to report it"
        ]
    },
    {
        category: "health",
        label: "Health, Safety & Wellbeing",
        title: "Mental Health & Wellbeing Policy",
        desc: "Policy supporting employee mental health and psychological wellbeing.",
        points: [
            "The company provides access to an Employee Assistance Programme (EAP)",
            "All mental health disclosures are treated with strict confidentiality",
            "Managers are trained to identify and respond to mental health concerns",
            "Employees may request reasonable workplace adjustments for mental health reasons",
            "Mental health awareness campaigns are conducted at least twice a year"
        ]
    },
    {
        category: "health",
        label: "Health, Safety & Wellbeing",
        title: "Remote Work Policy",
        desc: "Policy governing the eligibility and conditions for remote working arrangements.",
        points: [
            "Remote work arrangements are subject to manager and HR approval",
            "Employees must be reachable and available during core working hours",
            "Remote working does not change the terms and conditions of employment",
            "Employees are responsible for maintaining a safe and productive home workspace",
            "Remote work arrangements are reviewed every 6 months"
        ]
    },
    {
        category: "health",
        label: "Health, Safety & Wellbeing",
        title: "Flexi Hours Policy",
        desc: "Policy for flexible working hour arrangements for eligible employees.",
        points: [
            "Core working hours are between 10am and 4pm and must be observed by all",
            "Flexi hours arrangements must be agreed upon with the line manager in advance",
            "Total working hours must meet the minimum required hours per week",
            "Flexi hours are subject to operational requirements and may be withdrawn",
            "Abuse of flexi hours arrangements will result in the arrangement being revoked"
        ]
    },

    // Employee Relations
    {
        category: "relations",
        label: "Employee Relations",
        title: "Employee Engagement Policy",
        desc: "Policy for measuring and improving employee engagement across the organisation.",
        points: [
            "An employee engagement survey is conducted annually",
            "Survey results are shared with all employees within 30 days of completion",
            "Each department must develop an action plan based on survey results",
            "Action plan progress is reviewed quarterly by HR and department heads",
            "Employee engagement scores are included in the department head's KPIs"
        ]
    },
    {
        category: "relations",
        label: "Employee Relations",
        title: "Internal Communication Policy",
        desc: "Policy governing how information is communicated across the organisation.",
        points: [
            "All official company announcements are made through approved channels only",
            "Employees must not share unverified or confidential information internally",
            "Town halls are conducted at least twice a year by senior leadership",
            "HR is responsible for coordinating all HR-related communications",
            "Feedback channels are made available for employees to raise concerns anonymously"
        ]
    },
    {
        category: "relations",
        label: "Employee Relations",
        title: "Grievance Policy",
        desc: "Policy for employees to raise and resolve workplace grievances formally.",
        points: [
            "Employees are encouraged to resolve grievances informally with their manager first",
            "Formal grievances must be submitted in writing to HR",
            "HR must acknowledge receipt of a grievance within 3 working days",
            "Grievance investigations are completed within 21 working days",
            "Employees have the right to be accompanied during formal grievance meetings"
        ]
    },
    {
        category: "relations",
        label: "Employee Relations",
        title: "Anti-Harassment Policy",
        desc: "Policy prohibiting all forms of harassment and bullying in the workplace.",
        points: [
            "The company has zero tolerance for any form of harassment or bullying",
            "Harassment includes verbal, physical, visual, and digital forms",
            "All complaints are investigated promptly and treated with confidentiality",
            "Retaliation against employees who report harassment is strictly prohibited",
            "Substantiated harassment complaints will result in disciplinary action"
        ]
    },
    {
        category: "relations",
        label: "Employee Relations",
        title: "Whistleblower Policy",
        desc: "Policy protecting employees who report misconduct or unethical behaviour.",
        points: [
            "Employees are encouraged to report suspected misconduct through the whistleblower channel",
            "All reports are treated with strict confidentiality",
            "Whistleblowers are protected from retaliation under this policy",
            "Anonymous reports are accepted and investigated where sufficient detail is provided",
            "False reports made in bad faith are subject to disciplinary action"
        ]
    },

    // Offboarding & Alumni
    {
        category: "offboarding",
        label: "Offboarding & Alumni",
        title: "Resignation Policy",
        desc: "Policy governing the process for employee resignations.",
        points: [
            "Resignation must be submitted in writing to the line manager and HR",
            "Notice period is as per the employment contract — typically 1 to 3 months",
            "The company may at its discretion waive the notice period",
            "Employees must complete a handover checklist before their last day",
            "All company assets must be returned on or before the last day of employment"
        ]
    },
    {
        category: "offboarding",
        label: "Offboarding & Alumni",
        title: "Retirement Policy",
        desc: "Policy governing the retirement process for employees reaching retirement age.",
        points: [
            "The standard retirement age is 60 years as per the Minimum Retirement Age Act",
            "Employees may apply for contract extension beyond retirement age subject to approval",
            "HR must notify the employee of their retirement date at least 6 months in advance",
            "Retiring employees are entitled to a retirement benefit as per company policy",
            "A retirement celebration is organised by HR for employees with 10 or more years of service"
        ]
    },
    {
        category: "offboarding",
        label: "Offboarding & Alumni",
        title: "Retrenchment Policy",
        desc: "Policy governing the process for workforce reductions due to business reasons.",
        points: [
            "Retrenchment is a last resort after all alternatives have been exhausted",
            "Selection criteria for retrenchment must be objective, fair, and documented",
            "Affected employees are notified in accordance with the Employment Act",
            "Retrenchment benefits are paid as per statutory requirements or company policy",
            "HR provides outplacement support to all retrenched employees"
        ]
    },
    {
        category: "offboarding",
        label: "Offboarding & Alumni",
        title: "Exit Interview Policy",
        desc: "Policy for conducting structured exit interviews with departing employees.",
        points: [
            "Exit interviews are conducted by HR for all voluntary resignations",
            "Exit interview data is used to identify trends and improve retention",
            "Participation in exit interviews is encouraged but voluntary",
            "All exit interview responses are treated as confidential",
            "Exit interview insights are reported to leadership on a quarterly basis"
        ]
    },
    {
        category: "offboarding",
        label: "Offboarding & Alumni",
        title: "Alumni Network Policy",
        desc: "Policy for maintaining relationships with former employees through an alumni programme.",
        points: [
            "All employees who leave in good standing are eligible to join the alumni network",
            "Alumni are invited to company events and networking sessions",
            "Alumni may be considered for rehire subject to a standard recruitment process",
            "The alumni network is managed by HR and updated annually",
            "Alumni are expected to maintain confidentiality obligations post-employment"
        ]
    },

    // Disciplinary & Data
    {
        category: "disciplinary",
        label: "Disciplinary & Data",
        title: "Code of Conduct",
        desc: "Policy outlining the expected standards of behaviour for all employees.",
        points: [
            "All employees are expected to act with integrity, respect, and professionalism",
            "Conflicts of interest must be declared to HR immediately",
            "Acceptance of gifts exceeding RM100 in value must be declared to HR",
            "Employees must not engage in any activity that competes with the company",
            "Violations of the code of conduct are subject to disciplinary action"
        ]
    },
    {
        category: "disciplinary",
        label: "Disciplinary & Data",
        title: "Misconduct & Termination Policy",
        desc: "Policy governing the process for managing employee misconduct.",
        points: [
            "Misconduct is categorised as minor or major based on severity",
            "Minor misconduct is managed through a verbal or written warning process",
            "Major misconduct may result in immediate suspension pending investigation",
            "Termination for cause requires a domestic inquiry to be conducted",
            "All misconduct cases are documented and retained in the employee's file"
        ]
    },
    {
        category: "disciplinary",
        label: "Disciplinary & Data",
        title: "Domestic Inquiry Policy",
        desc: "Policy governing the conduct of formal domestic inquiries for serious misconduct.",
        points: [
            "A domestic inquiry is convened for all cases of major misconduct",
            "The inquiry panel must consist of at least 3 members not involved in the case",
            "The employee has the right to be heard and present their defence",
            "Proceedings and findings are documented and retained by HR",
            "The outcome of the inquiry is communicated to the employee in writing"
        ]
    },
    {
        category: "disciplinary",
        label: "Disciplinary & Data",
        title: "Confidentiality & NDA Policy",
        desc: "Policy protecting company confidential information and trade secrets.",
        points: [
            "All employees must sign a non-disclosure agreement upon joining",
            "Confidential information must not be shared with unauthorised parties",
            "Confidentiality obligations continue after the end of employment",
            "Breach of confidentiality is subject to disciplinary and legal action",
            "Employees are required to return all confidential materials upon separation"
        ]
    },
    {
        category: "disciplinary",
        label: "Disciplinary & Data",
        title: "Personal Data Protection Policy (PDPA)",
        desc: "Policy ensuring compliance with the Personal Data Protection Act 2010.",
        points: [
            "All employee personal data is collected, processed, and stored in compliance with PDPA",
            "Employees have the right to access and correct their personal data held by the company",
            "Personal data is not shared with third parties without the employee's consent",
            "Data breaches must be reported to the HR and IT immediately",
            "All employees handling personal data must complete PDPA training annually"
        ]
    },
    {
        category: "disciplinary",
        label: "Disciplinary & Data",
        title: "IT & Data Security Policy",
        desc: "Policy governing the use of company IT systems and data security practices.",
        points: [
            "Company IT systems are for business use only",
            "Employees must not install unauthorised software on company devices",
            "Passwords must be at least 12 characters and changed every 90 days",
            "Employees must lock their devices when away from their workstation",
            "Any suspected security breach must be reported to IT immediately"
        ]
    },
    {
        category: "disciplinary",
        label: "Disciplinary & Data",
        title: "Document Retention Policy",
        desc: "Policy governing the retention and disposal of company documents and records.",
        points: [
            "Employee records are retained for a minimum of 7 years after separation",
            "Financial records are retained for a minimum of 7 years as per statutory requirements",
            "Documents containing personal data must be disposed of securely",
            "Physical documents are shredded and digital records are permanently deleted",
            "Department heads are responsible for ensuring compliance with retention schedules"
        ]
    }

];

// Category list for filter buttons
const categories = [
    { g: "all", label: "All" },
    { g: "recruitment", label: "Recruitment & Employer Branding" },
    { g: "youngtalent", label: "Young Talent" },
    { g: "onboarding", label: "Onboarding" },
    { g: "ld", label: "Learning & Development" },
    { g: "performance", label: "Performance & Succession" },
    { g: "compensation", label: "Compensation & Leave" },
    { g: "health", label: "Health, Safety & Wellbeing" },
    { g: "relations", label: "Employee Relations" },
    { g: "offboarding", label: "Offboarding & Alumni" },
    { g: "disciplinary", label: "Disciplinary & Data" }
];

// Grab elements from HTML
const grid = document.getElementById("grid");
const filtersContainer = document.getElementById("filters");
const empty = document.getElementById("empty");

// Track active category
let activeCategory = "all";

// Build filter buttons
categories.forEach(function(cat) {
    const btn = document.createElement("button");
    btn.textContent = cat.label;
    btn.className = "filter-btn" + (cat.g === "all" ? " active" : "");
    btn.dataset.g = cat.g;

    btn.addEventListener("click", function() {
        document.querySelectorAll(".filter-btn").forEach(function(b) {
            b.classList.remove("active");
        });
        btn.classList.add("active");
        activeCategory = cat.g;
        applyFilters();
    });

    filtersContainer.appendChild(btn);
});

// Render cards
function renderCards(items) {
    grid.innerHTML = "";

    if (items.length === 0) {
        empty.style.display = "block";
        return;
    }

    empty.style.display = "none";

    items.forEach(function(p) {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="card-header">
                <span class="tag tag-${p.category}">${p.label}</span>
                <span class="card-title">${p.title}</span>
            </div>
            <p class="card-desc">${p.desc}</p>
            <p class="points-label">Key Points:</p>
            <ul class="card-points">
                ${p.points.map(point => `<li>${point}</li>`).join("")}
            </ul>
             <a href="${p.link || 'sample-policy.html'}" target="_blank">
                <button class="policy-btn">View Full Policy</button>
            </a>
        `;

        grid.appendChild(card);
    });
}

// Filter and search
function applyFilters() {
    const query = document.getElementById("search").value.toLowerCase();

    const filtered = policies.filter(function(p) {
        const matchCategory = activeCategory === "all" || p.category === activeCategory;
        const matchSearch = !query ||
            p.title.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query);
        return matchCategory && matchSearch;
    });

    renderCards(filtered);
}

// Search input listener
document.getElementById("search").addEventListener("input", function() {
    applyFilters();
});

// Run on page load
applyFilters();