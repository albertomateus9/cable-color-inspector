export type ProjectType = 'fresnel' | 'ocr' | 'colors' | 'gesture' | 'occupancy' | 'depth' | 'benchmark' | 'telemetry';

export type ProjectConfig = {
  slug: string;
  title: string;
  tagline: string;
  type: ProjectType;
  deploy: boolean;
  topics: string[];
  description: string;
  accent: string;
  secondary: string;
};

export const project: ProjectConfig = {
  "slug": "cable-color-inspector",
  "title": "Cable Color Inspector",
  "tagline": "Traditional computer vision utility for counting cable and fiber color groups in an uploaded image.",
  "type": "colors",
  "deploy": false,
  "topics": [
    "computer-vision",
    "fiber-optics",
    "network-inventory",
    "canvas",
    "color-analysis",
    "react",
    "typescript"
  ],
  "description": "Traditional computer vision utility for counting cable and fiber color groups in an uploaded image.",
  "accent": "#326d45",
  "secondary": "#9b4d7a"
};
