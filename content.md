# DURKKAS: The Multi-Tenant Enterprise Ecosystem

## 🎯 Product Vision
**DURKKAS** is the world's first **All-in-One Multi-Tenant Operating System** designed to unify your entire business—Education (EMS), Sales (CRM), and Workforce (HRMS)—into a single, scalable platform.

Unlike traditional SaaS tools that fragment your operations across multiple systems, DURKKAS provides a unified "Master" view where everything connects seamlessly.

---

## 🏗️ The Architecture: "One OS, Multiple Apps"

Think of DURKKAS like your smartphone's operating system. Just as iOS runs multiple apps (WhatsApp, Instagram, etc.), DURKKAS is the OS that runs your business apps.

### The Common Layer (The "OS")
This is the foundation that powers everything:

*   **Single Sign-On (SSO)**: One login for everything. Your team logs in once and accesses CRM, EMS, or HRMS based on their role.
*   **Company Settings**: Set your Logo, Timezone, Currency, and Tax Rules once—they apply across all modules.
*   **User Management**: Add an employee once, then assign them access to Sales, Academics, or HR with simple checkboxes.
*   **Subscription & Billing**: Manage licenses for your entire suite from one dashboard.

---

## 🚀 The Three Engines

### 1️⃣ Growth Engine (CRM)
**Purpose**: Turn prospects into customers.

**Who uses it?**
*   Sales Teams
*   Telecallers
*   Marketing Managers

**Key Features**:
*   **Lead Management**: Capture enquiries from Facebook, Website, or Walk-ins.
*   **Pipeline Tracking**: Move leads through stages: "New" → "Contacted" → "Interested" → "Closed".
*   **Follow-up Automation**: Never miss a call. The system reminds you to follow up at the right time.
*   **Sales Analytics**: Track conversion rates and team performance.

**The Flow**:
A visitor fills out a form on your website → They become a "Lead" in CRM → Sales team calls them → They pay the fee → **Auto-converted to a Student in EMS**.

---

### 2️⃣ Academic Engine (EMS)
**Purpose**: Deliver education at scale.

**Who uses it?**
*   Principals
*   Academic Managers
*   Tutors
*   Students

**Key Features**:
*   **Centralized Course Repository**: Create a course once, deploy it to 50 branches instantly.
*   **Batch Scheduling**: Automated timetables with conflict detection.
*   **Unified Student Dashboard**: Students log in once to access:
    *   Live Classes
    *   Recorded Lectures
    *   Assignments & Quizzes
    *   Fee Status
*   **Assessment Engine**: Auto-graded MCQs, secure file submissions, and anti-cheat timers.
*   **Permanent Identity System**: Every student gets a unique, non-reusable ID that lasts forever.

**The Flow**:
A Lead from CRM is "Won" → System auto-creates a Student Record → ID is generated (e.g., `STU-2026-001`) → Student gets login access → They can enroll in courses.

---

### 3️⃣ Workforce Engine (HRMS)
**Purpose**: Manage your internal team.

**Who uses it?**
*   HR Managers
*   Accountants
*   Employees

**Key Features**:
*   **Employee Database**: Store contracts, documents, and personal info.
*   **Attendance & Leave**: Biometric integration, leave approvals, and timesheets.
*   **Payroll**: Automated salary processing, tax deductions, and payslip generation.
*   **Performance Tracking**: Track employee KPIs and appraisals.

**The Flow**:
A Sales Agent closes a deal in CRM → The system auto-calculates their commission → It's added to their next month's salary in HRMS.

---

## � Security & Privacy: The "Permanent Identity" System

DURKKAS is built on a **Single-Database, Multi-Tenant** architecture with stricter isolation than standard SaaS tools.

### Zero-Leakage Isolation
*   **Company Context**: Every record is tagged with a `company_id`.
*   **Middleware Enforcement**: Our backend automatically filters every query. A user from "Institute A" can **never** access data from "Institute B".

### The "Permanent Identity" Guarantee
*   **Zero ID Reuse**: IDs are globally unique. A Student ID (e.g., `1001`) is never recycled, even if the student is deleted.
*   **Audit-Proof History**: Data is never destroyed. Our "Soft Delete" architecture preserves historical records forever.
*   **Hard Subscription Limits**: Limits (e.g., "Max 50 Branches") are enforced at the database level with triple validation.

---

## 👥 Roles & Permissions

| Role | Scope | What They Can Do |
|------|-------|------------------|
| **Platform Admin** | **Global** | The Super User. Manages all tenants, subscription plans, and global analytics. |
| **Company Admin** | **Tenant Wide** | The CEO view. Full control over all branches, revenue, and master configurations. |
| **Academic Manager** | **Tenant Wide** | The Education Head. Controls global curriculum, course repositories, and faculty allocation. |
| **Branch Admin** | **Local** | The Campus Director. Manages students and operations for a specific location. |
| **Tutor** | **Assigned** | The Faculty. Access restricted to their assigned batches and students. |
| **Student** | **Personal** | The Learner. A personalized dashboard for their educational journey. |

---

## � Business Model & Pricing Tiers

DURKKAS is designed for flexible SaaS monetization:

*   **Starter Tier**: Perfect for single-branch pilot programs (1 Branch, Limited Students).
*   **Growth Tier**: For expanding institutions (Up to 5 Branches, Advanced Analytics).
*   **Enterprise Tier**: Infinite scale (Unlimited Branches, Dedicated Support, Custom API Access).

---

## 🛠️ Technical Foundation

*   **Frontend**: Next.js 14 with Tailwind CSS & Framer Motion for premium UX.
*   **Backend**: High-performance Node.js Microservices.
*   **Database**: PostgreSQL with Relational Schemas and Row-Level Security.
*   **Security**: JWT Authentication with Custom Claims (`x-company-id`, `x-branch-id`).
*   **Performance**: Optimized for fast loading and low latency (95+ PageSpeed score).

---

## 🌟 Why DURKKAS?

*   **Unified**: One platform for CRM, EMS, and HRMS. No more juggling 10 different tools.
*   **Scalable**: Grow from 10 to 10,000 students without changing software.
*   **Secure**: Bank-grade security with permanent audit trails.
*   **White-Label Ready**: Customize the platform with your own branding.
*   **Fast**: Built for speed with modern web technologies.