export type AttendanceStatus = 'yes' | 'no';

export interface RsvpFormData {
  fullName: string;
  email: string;
  attendance: AttendanceStatus | '';
  noPlusOne: boolean;
  message: string;
}

export interface RsvpFormErrors {
  fullName?: string;
  email?: string;
  attendance?: string;
  noPlusOne?: string;
}

export interface BannerImage {
  id: string;
  /** Local path e.g. "/prenup/banner-1.jpg" */
  src: string;
  /** Unsplash fallback */
  fallbackSrc: string;
  alt: string;
}

export interface GalleryPhoto {
  id: string;
  /** Local path e.g. "/prenup/gallery-1.jpg" */
  src: string;
  /** High-quality Unsplash fallback when local file is missing */
  fallbackSrc: string;
  alt: string;
  caption?: string;
}

export interface TimelineItem {
  id: string;
  time: string;
  title: string;
  description: string;
  icon: 'assembly' | 'ceremony' | 'reception';
}

export interface EntourageGroup {
  id: string;
  title: string;
  subtitle?: string;
  members: string[];
}

export interface ColorSwatch {
  name: string;
  hex: string;
  description?: string;
}

export type EnvelopeState = 'closed' | 'opening' | 'open';
