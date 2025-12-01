export enum CourseType {
  CODING = 'Coding',
  MATH = 'Maths'
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Student, Age 10" or "Parent of Sarah"
  text: string;
  avatarUrl: string;
  course: CourseType;
  color: string; // Tailwind color class for background accent
}

export interface VideoReview {
  id: string;
  thumbnailUrl?: string;
  title: string;
  author: string;
  duration: string;
  youtubeId: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  studentName: string;
  rotation: number;
}

export interface Moment {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
  emoji: string;
  rotation: number;
}

export interface Certificate {
  id: string;
  studentName: string;
  course: string;
  type: 'image' | 'youtube';
  imageUrl?: string;
  youtubeId?: string;
}