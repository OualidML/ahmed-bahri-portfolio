export interface Profile {
  name: string;
  headline: string;
  titles: string[];
  bio: string;
  avatarUrl: string;
  cvUrl: string;
  location: string;
  availability: string;
  cirtecRole: {
    title: string;
    club: string;
    institution: string;
    description: string;
  };
  contacts: {
    email: string;
    github: string;
    linkedin: string;
  };
}

export interface Tier1Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  images: string[]; // exactly 3 .png paths, images[0] acts as the primary front-card cover image
  previewImage?: string; // alias to images[0]
  thumbnail?: string; // alias to images[0]
  screenshots?: string[]; // alias to images
  liveUrl?: string;
  repoUrl?: string;
  hasVideo: boolean; // false for SuperManager Pro as specified
  highlights: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  result: string;
  technicalArchitecture: string[];
  keyFeatures: string[];
}

export interface Tier2Project {
  id: string;
  title: string;
  description: string;
  category: "AI/ML" | "Full-Stack" | "Data Science";
  tags: string[];
  image: string;
  repoUrl: string;
  liveUrl?: string;
  stats?: string;
}

export interface EducationCertification {
  id: string;
  title: string;
  institution: string;
  category: "Education" | "Certification" | "Language";
  period: string;
  description: string;
  badge?: string;
  image: string;
  credentialUrl?: string;
}

export const PROFILE_DATA: Profile = {
  name: "Ahmed Oualid Bahri",
  headline: "AI Engineer & Vibe Coder",
  titles: [
    "AI Engineer",
    "Vibe Coder",
    "Full-Stack Developer",
    "Python Coach",
  ],
  bio: "Engineering student at ENP Constantine combining advanced machine learning, multimodal fusion, and calibrated neural models with high-velocity 'Vibe Coding' — shipping resilient, production-ready full-stack applications with modern tools and zero fluff.",
  avatarUrl: "/images/profile.jpg",
  cvUrl: "/cv/Ahmed_Oualid_Bahri_CV.pdf",
  location: "Constantine, Algeria",
  availability: "Available for high-impact AI Engineering & Full-Stack roles",
  cirtecRole: {
    title: "Python Coach & AI Mentor",
    club: "Cirtec Engineering Club",
    institution: "National Polytechnic School of Constantine (ENPC)",
    description:
      "Leading technical workshops and hands-on bootcamps at Cirtec, training aspiring engineering students in Python idioms, data structures, machine learning fundamentals, and project execution.",
  },
  contacts: {
    email: "bahriahmedwalid@gmail.com",
    github: "https://github.com/OualidML",
    linkedin: "https://www.linkedin.com/in/ahmed-oualid-bahri-15701a3b7",
  },
};

export const TIER1_PROJECTS: Tier1Project[] = [
  {
    id: "skin-lesion-classification",
    title: "Skin Lesion Multimodal Classification Pipeline",
    tagline:
      "Clinical-grade dermatological diagnosis with multimodal fusion & temperature scaling calibration.",
    category: "Medical AI & Computer Vision",
    tags: [
      "PyTorch",
      "Multimodal Fusion",
      "Temperature Scaling",
      "Streamlit",
      "Medical AI",
      "ISIC Benchmark",
    ],
    images: [
      "/images/skin-lesion-preview.png",
      "/images/skin-lesion-calibration.png",
      "/images/skin-lesion-confusion.png",
    ],
    previewImage: "/images/skin-lesion-preview.png",
    thumbnail: "/images/skin-lesion-preview.png",
    screenshots: [
      "/images/skin-lesion-preview.png",
      "/images/skin-lesion-calibration.png",
      "/images/skin-lesion-confusion.png",
    ],
    liveUrl: "https://skin-disease-classification-pipeline.streamlit.app/",
    repoUrl: "https://github.com/OualidML",
    hasVideo: false,
    highlights: [
      { label: "Optimal Temperature", value: "T = 1.5909" },
      { label: "Safety Triage Threshold", value: "15% High-Risk Cutoff" },
      { label: "Modality", value: "Image + Clinical Metadata" },
      { label: "Clinical Objective", value: "Zero False-Negative Target" },
    ],
    challenge:
      "Standard deep learning vision models produce overconfident uncalibrated softmax probabilities, presenting dangerous failure modes in clinical diagnostics where false-negative predictions on malignant melanoma can be fatal.",
    solution:
      "Constructed a multimodal deep learning pipeline fusing high-resolution dermoscopic image embeddings with tabular demographic patient covariates (age, sex, anatomical location). Post-processed logits using temperature scaling (T = 1.5909) on hold-out validation splits, aligning predicted probabilities directly with true empirical risk.",
    result:
      "Enforced a strict 15% safety triage rule that flags borderline cases for mandatory physician review, drastically curtailing dangerous false negatives while achieving reliable diagnostic confidence scores. Deployed live on Streamlit Cloud for interactive clinical trials.",
    technicalArchitecture: [
      "Convolutional / Transformer feature extractor for dermoscopic high-res patches",
      "Tabular embedding MLP for patient age, sex, and anatomical location",
      "Late fusion gating layer joining vision embeddings and clinical priors",
      "Post-hoc temperature scaling layer calibrated on hold-out validation splits (T = 1.5909)",
      "Interactive Streamlit web application with real-time inference and risk triage indicator",
    ],
    keyFeatures: [
      "Multimodal deep neural network fusing visual dermoscopy and tabular patient metadata",
      "Calibrated probability outputs preventing clinical overconfidence",
      "15% Safety Triage boundary prioritizing recall on malignant melanoma cases",
      "Real-time interactive deployment on Streamlit Cloud",
    ],
  },
  {
    id: "ordo-dz",
    title: "ORDO-DZ",
    tagline:
      "Offline-first PWA pharmaceutical catalog and rapid dispensary search index.",
    category: "Progressive Web App & Offline Systems",
    tags: [
      "PWA",
      "IndexedDB",
      "Dexie.js",
      "Next.js / React",
      "Tailwind CSS",
      "Offline First",
    ],
    images: [
      "/images/ordo-dz-preview.png",
      "/images/ordo-dz-2.png",
      "/images/ordo-dz-3.png",
    ],
    previewImage: "/images/ordo-dz-preview.png",
    thumbnail: "/images/ordo-dz-preview.png",
    screenshots: [
      "/images/ordo-dz-preview.png",
      "/images/ordo-dz-2.png",
      "/images/ordo-dz-3.png",
    ],
    liveUrl: "https://ordodz.vercel.app",
    repoUrl: "https://github.com/OualidML",
    hasVideo: false,
    highlights: [
      { label: "Pharmacies Indexed", value: "5,300+ Locations" },
      { label: "Storage Engine", value: "IndexedDB / Dexie" },
      { label: "Network State", value: "100% Offline Usable" },
      { label: "Search Latency", value: "< 15ms Local Index" },
    ],
    challenge:
      "Hospital staff, emergency workers, and patients across Algeria frequently face unreliable cellular coverage and network throttling when searching for essential medications and emergency night-duty pharmacies (pharmacies de garde).",
    solution:
      "Engineered an offline-first architecture utilizing Dexie.js on top of IndexedDB. The app pre-caches the complete dataset locally upon first connection, running a compressed client-side index with background Service Worker synchronization.",
    result:
      "Delivered instant < 15ms multi-criteria search and geographic filtering across 5,300+ pharmacies in all 58 wilayas with 100% offline uptime, zero network reliance, and native-grade PWA installability on mobile and desktop.",
    technicalArchitecture: [
      "Service Worker background sync and asset caching strategy",
      "Local schema storage in IndexedDB via Dexie.js for lightning-fast queries",
      "Compressed client-side search index across 5,300+ pharmaceutical records",
      "Responsive PWA installable on iOS, Android, and desktop environments",
    ],
    keyFeatures: [
      "Seamless instant search across 5,300+ pharmacies in all 58 wilayas",
      "Full functionality in zero-connectivity environments",
      "Installable PWA with app-like experience and minimal storage footprint",
      "Duty pharmacy (pharmacie de garde) locator and rapid contact dialing",
    ],
  },
  {
    id: "supermanager-pro",
    title: "SuperManager Pro",
    tagline:
      "High-throughput offline Point-of-Sale (POS) & digital inventory scanner.",
    category: "Desktop & Offline Retail Systems",
    tags: [
      "Desktop Application",
      "Offline First",
      "Barcode Scanning",
      "Inventory Management",
      "SQLite",
      "POS",
    ],
    images: [
      "/images/supermanager-1.png",
      "/images/supermanager-2.png",
      "/images/supermanager-3.png",
    ],
    previewImage: "/images/supermanager-1.png",
    thumbnail: "/images/supermanager-1.png",
    screenshots: [
      "/images/supermanager-1.png",
      "/images/supermanager-2.png",
      "/images/supermanager-3.png",
    ],
    repoUrl:
      "https://github.com/OualidML/Supermanager-pro-100-offline-",
    hasVideo: false, // strictly screenshots only as required
    highlights: [
      { label: "Architecture", value: "100% Offline" },
      { label: "Hardware Sync", value: "Laser & Camera Scanner" },
      { label: "Local Database", value: "Embedded ACID Storage" },
      { label: "Latency", value: "Instant Barcode Processing" },
    ],
    challenge:
      "Modern cloud-reliant POS applications freeze up and lock checkouts during internet disruptions, halting retail commerce, creating long cashier lines, and exposing store data to third-party cloud outages.",
    solution:
      "Developed a standalone offline POS workstation with an embedded transactional database, high-throughput digital laser/camera barcode scanner integration, and automated inventory reconciliation.",
    result:
      "Achieved sub-10ms scan-to-checkout processing with total data sovereignty, zero cloud vulnerabilities, automated thermal receipt generation, and daily accountant-ready CSV/PDF audit reports.",
    technicalArchitecture: [
      "Embedded local relational database engine with automated transaction rollbacks",
      "Hardware-level USB barcode scanner listener and video camera decoder integration",
      "Real-time stock deduction, reorder threshold alerts, and ledger reconciliation",
      "Local export pipelines for accountant-ready CSV/PDF daily audit reports",
    ],
    keyFeatures: [
      "Zero internet connection requirement: total resilience and data sovereignty",
      "Hardware laser and digital optical barcode scanner compatibility",
      "Real-time cash register tally, inventory reorder triggers, and receipts",
      "Clean dark workstation UI optimized for speed and all-day operator comfort",
    ],
  },
];

export const TIER2_PROJECTS: Tier2Project[] = [
  {
    id: "parfumworld",
    title: "ParfumWorld",
    description:
      "Luxury fragrance boutique landing page with sleek product showcasing, interactive catalogue, and modern visual branding.",
    category: "Full-Stack",
    tags: ["React", "Tailwind CSS", "UI/UX", "Modern Web"],
    image: "/images/project-parfumworld.png",
    repoUrl: "https://github.com/OualidML/parfumworld",
  },
  {
    id: "vibecoder-guide",
    title: "VibeCoder Guide",
    description:
      "High-converting landing page selling a digital curriculum on leveraging modern AI coding assistants to build and ship production software rapidly.",
    category: "Full-Stack",
    tags: ["Landing Page", "Next.js", "Tailwind CSS", "Digital Product"],
    image: "/images/project-vibecoder.png",
    repoUrl: "https://github.com/OualidML/vibecoder-landing-page",
    liveUrl: "https://vibecoder-dz.netlify.app/",
  },
  {
    id: "used-car-price-prediction",
    title: "Used Car Price Prediction Engine",
    description:
      "Scalable LightGBM regression model trained on 1M+ automotive transaction records across 25 engineered features with SHAP value interpretability.",
    category: "AI/ML",
    tags: ["LightGBM", "1M+ Dataset", "SHAP", "Feature Engineering", "Python"],
    image: "/images/project-usedcar.png",
    repoUrl: "https://github.com/OualidML/Vehicle-Price-prediction",
    stats: "1M+ Records | 25 Features",
  },
  {
    id: "adult-income-predictor",
    title: "Adult Income Predictor Capstone",
    description:
      "Exploratory machine learning capstone featuring unsupervised clustering, Principal Component Analysis (PCA), and classification on the UCI Adult benchmark.",
    category: "Data Science",
    tags: ["PCA", "Clustering", "UCI Benchmark", "Scikit-Learn", "Data Analytics"],
    image: "/images/project-adultincome.png",
    repoUrl: "https://github.com/OualidML/UCI-Adult-Income-ML-Capstone",
    stats: "Clustering & PCA Analysis",
  },
];

export const EDUCATION_CERTIFICATIONS: EducationCertification[] = [
  {
    id: "brainerx-ai",
    title: "AI Masterclass Certification",
    institution: "BrainerX",
    category: "Certification",
    period: "Completed",
    description:
      "Intensive specialization covering advanced machine learning workflows, deep neural network architectures, computer vision, and production deployment.",
    badge: "AI Specialist",
    image: "/images/cert-brainerx.jpg",
  },
  {
    id: "tcf-dap",
    title: "TCF DAP B2 Level Certification",
    institution: "France Éducation International",
    category: "Language",
    period: "Certified",
    description:
      "Official French language proficiency certification for academic and professional engineering communication.",
    badge: "Language B2",
    image: "/images/cert-tcf.jpg",
  },
  {
    id: "python-coach-enpc",
    title: "Python Coach — National Polytechnic School of Constantine",
    institution: "Cirtec Engineering Club & ENP Constantine",
    category: "Certification",
    period: "2023 – Present",
    description:
      "Led intensive bootcamps and hands-on workshops for 60+ polytechnic engineering students, mentoring them in algorithmic problem-solving, advanced Python data structures, software architecture, and production-grade machine learning pipelines.",
    badge: "Python Coach",
    image: "/images/cert-python-coach.png",
  },
];

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const TERMINAL_BOOT_LOGS = [
  "SYSTEM_INIT: Loading Ahmed Oualid Bahri profile...",
  "AI_KERNEL: Loading PyTorch & Scikit-Learn backends... [OK]",
  "NETWORK: Offline-first Dexie.js cache ready... [OK]",
  "CALIBRATION: Temperature Scaling T = 1.5909 applied... [OK]",
  "STATUS: All systems nominal. Ready for interactive input.",
];
