export const skillsConfig = [
  // Backend
  { id: "java", name: "Java", category: "backend" as const, icon: "Code2" },
  { id: "spring", name: "Spring Boot", category: "backend" as const, icon: "Server" },

  // Frontend
  { id: "react", name: "React", category: "frontend" as const, icon: "Layout" },
  { id: "typescript", name: "TypeScript", category: "frontend" as const, icon: "FileCode" },

  // Database
  { id: "mysql", name: "MySQL", category: "database" as const, icon: "Database" },
  { id: "postgresql", name: "PostgreSQL", category: "database" as const, icon: "Database" },

  // Other
  { id: "jwt", name: "JWT", category: "other" as const, icon: "Key" },
  { id: "stripe", name: "Stripe", category: "other" as const, icon: "CreditCard" },
  { id: "git", name: "Git", category: "other" as const, icon: "GitBranch" },
  { id: "docker", name: "Docker", category: "other" as const, icon: "Container" },
];
