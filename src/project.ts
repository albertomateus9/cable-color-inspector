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
  "title": "Inspetor De Cores De Cabos E Fibras",
  "description": "Ferramenta de visao tradicional para contar grupos de cores de patch cords e fibras em amostras locais.",
  "topics": [
    "computer-vision",
    "fiber-optics",
    "network-inventory",
    "canvas",
    "color-analysis",
    "react",
    "typescript",
    "fibra-optica",
    "visao-computacional",
    "analise-de-cores",
    "github-pages",
    "portugues-brasil",
    "educacao-tecnologica",
    "telecomunicacoes"
  ],
  "deploy": true,
  "tagline": "Contagem visual de grupos de cores para apoio a inventario optico e organizacao de rack.",
  "type": "colors",
  "accent": "#326d45",
  "secondary": "#9b4d7a"
};
