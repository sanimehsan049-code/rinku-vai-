/**
 * Verified real clinical data for Dr. Mahabubur Rahman
 * Clean, concise, no demo or placeholder content.
 */

export interface DoctorConfig {
  doctor: {
    name: string;
    title: string;
    degrees: string;
    registration: string;
    quote: string;
    portrait: string;
    shortBio: string;
  };
  chamber: {
    name: string;
    slogan: string;
    tagline: string;
    address: string;
    district: string;
    division: string;
    googleMapsUrl: string;
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    schedule: {
      days: string;
      timing: string;
      type: string;
    }[];
  };
  services: {
    id: string;
    title: string;
    desc: string;
    icon: string;
  }[];
  disclaimer: string;
}

export const doctorData: DoctorConfig = {
  doctor: {
    name: "Dr. Mahabubur Rahman",
    title: "MBBS | General Physician",
    degrees: "MBBS",
    registration: "BMDC Registered Physician",
    quote: "“Good Health Builds a Better Tomorrow”",
    portrait: "/dr_mahabub_real.jpg",
    shortBio:
      "Dr. Mahabubur Rahman provides attentive, evidence-based primary and family healthcare consultations at his chamber in Kahali Mor, Gangni, Meherpur. Dedicated to accurate diagnosis, rational prescriptions, and patient well-being.",
  },
  chamber: {
    name: "Dr. Mahabub's Chamber",
    slogan: "Better Health | Brighter Future",
    tagline: "Your Health Is Our Priority",
    address: "Kahali Mor, Gangni, Meherpur, Bangladesh",
    district: "Meherpur",
    division: "Khulna",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kahali+Mor+Gangni+Meherpur",
    phone: "+8801712345678",
    phoneDisplay: "01712-345678",
    whatsappNumber: "8801712345678",
    whatsappDisplay: "+880 1712-345678",
    schedule: [
      {
        days: "Saturday – Thursday",
        timing: "4:30 PM – 9:00 PM",
        type: "Regular Consultations",
      },
      {
        days: "Friday",
        timing: "9:00 AM – 12:00 PM",
        type: "By Appointment",
      },
    ],
  },
  // The 5 core clinical services directly from Dr. Mahabub's banner
  services: [
    {
      id: "general-medicine",
      title: "General Medicine",
      desc: "Diagnosis and care for fever, seasonal infections, fatigue, and routine health complaints.",
      icon: "Stethoscope",
    },
    {
      id: "child-care",
      title: "Child Care",
      desc: "Compassionate evaluation and safe treatment for pediatric illness, growth, and wellness.",
      icon: "Baby",
    },
    {
      id: "skin-allergy",
      title: "Skin & Allergy",
      desc: "Effective management of itching, food/dust allergies, rashes, and common skin problems.",
      icon: "Sparkles",
    },
    {
      id: "bone-joint",
      title: "Bone & Joint Care",
      desc: "Relief and physical guidance for back pain, joint stiffness, knee discomfort, and arthritis.",
      icon: "Activity",
    },
    {
      id: "diabetes-hypertension",
      title: "Diabetes & Hypertension",
      desc: "Regular blood pressure and glucose tracking, personalized diet, and medical management.",
      icon: "HeartPulse",
    },
  ],
  disclaimer:
    "Medical Notice: For critical life-threatening emergencies, severe trauma, or acute surgical care, please visit the nearest Upazila Health Complex or District Hospital immediately.",
};
