// Everyone shown on the Crew page. Next year's team = edit this one file.
// Photos live in /public/images/crew/ (640x800, under 100 KB). No photo yet? Leave `photo` out.

export type CrewGroup = "faculty" | "senior" | "junior";

export type Member = {
  slug: string;
  name: string;
  role: string;
  group: CrewGroup;
  /** e.g. "/images/crew/sivaraman.jpg" */
  photo?: string;
};

export const CREW: Member[] = [
  // --- Faculty coordinators ---
  { slug: "p-jayanthi", name: "Dr. P. Jayanthi", role: "Faculty Coordinator", group: "faculty", photo: "/images/crew/p-jayanthi.jpg" },
  { slug: "s-jayalakshmi", name: "Dr. S. Jayalakshmi", role: "Faculty Coordinator", group: "faculty", photo: "/images/crew/s-jayalakshmi.jpg" },

  // --- Senior board of directors ---
  // TODO: add the senior board here (group: "senior"). The section appears automatically once it has people.

  // --- Junior board of directors ---
  { slug: "sivaraman", name: "Sivaraman", role: "Joint Technical Head", group: "junior", photo: "/images/crew/sivaraman.jpg" },
  { slug: "sharada", name: "Sharada", role: "Joint Treasurer", group: "junior", photo: "/images/crew/sharada.jpg" },
  { slug: "tritiksha", name: "Tritiksha", role: "Joint Head of Working Committee", group: "junior", photo: "/images/crew/tritiksha.jpg" },
  { slug: "priyan", name: "Priyan", role: "Joint Head of Design", group: "junior", photo: "/images/crew/priyan.jpg" },
  { slug: "shirin", name: "Shirin", role: "Joint Head of PR", group: "junior", photo: "/images/crew/shirin.jpg" },
  { slug: "sai-divya", name: "Sai Divya", role: "Joint Head of Content", group: "junior", photo: "/images/crew/sai-divya.jpg" },
  { slug: "saksham", name: "Saksham", role: "Joint Head of Logistics", group: "junior", photo: "/images/crew/saksham.jpg" },
  { slug: "tejan", name: "Tejan", role: "Joint Head of Resource Management", group: "junior", photo: "/images/crew/tejan.jpg" },
];
