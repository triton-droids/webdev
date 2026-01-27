export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio?: string;
  major?: string;
  year?: string;
  linkedin?: string;
  email?: string;
  category: 'executive' | 'team-lead' | 'robothon-chair';
}
