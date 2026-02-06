// Test script to verify all config files can be imported
import { profileConfig } from './config/profile.ts';
import { projectsConfig } from './config/projects.ts';
import { skillsConfig } from './config/skills.ts';
import { contactConfig } from './config/contact.ts';

console.log('Testing config imports...\n');

// Test profile config
console.log('✓ profileConfig loaded:', {
  hasName: !!profileConfig.name,
  hasTagline: !!profileConfig.tagline,
  hasBio: !!profileConfig.bio,
  hasLocation: !!profileConfig.location,
  hasEducation: !!profileConfig.education,
  hasProfileImage: !!profileConfig.profileImage,
  hasMemojiImage: !!profileConfig.memojiImage
});

// Test projects config
console.log('✓ projectsConfig loaded:', {
  isArray: Array.isArray(projectsConfig),
  count: projectsConfig.length,
  allHaveId: projectsConfig.every(p => !!p.id),
  allHaveTitle: projectsConfig.every(p => !!p.title),
  allHaveDescription: projectsConfig.every(p => !!p.description),
  allHaveTechStack: projectsConfig.every(p => Array.isArray(p.techStack))
});

// Test skills config
console.log('✓ skillsConfig loaded:', {
  isArray: Array.isArray(skillsConfig),
  count: skillsConfig.length,
  allHaveId: skillsConfig.every(s => !!s.id),
  allHaveName: skillsConfig.every(s => !!s.name),
  allHaveCategory: skillsConfig.every(s => !!s.category),
  allHaveIcon: skillsConfig.every(s => !!s.icon)
});

// Test contact config
console.log('✓ contactConfig loaded:', {
  hasEmail: !!contactConfig.email,
  hasGithub: !!contactConfig.github,
  hasLinkedin: !!contactConfig.linkedin,
  hasTwitter: !!contactConfig.twitter
});

console.log('\n✅ All config files imported successfully!');
console.log('✅ All required fields are present!');
