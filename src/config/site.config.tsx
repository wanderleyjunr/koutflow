import { Metadata } from 'next';
import logoImg from '@public/logo.svg';
import { LAYOUT_OPTIONS } from '@/config/enums';
import logoIconImg from '@public/logo-short.svg';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export const siteConfig = {
  title: 'KoutFlow - Crie, Venda e Creça',
  description: `A plataforma do empreendedor digital moderno. A melhor opção para dar o primeiro passo no empreendedorismo digital.`,
  logo: logoImg,
  icon: logoIconImg,
  mode: MODE.LIGHT,
  layout: LAYOUT_OPTIONS.BERYLLIUM,
  // TODO: favicon
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - Koutflow Plataforma` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Koutflow Plataforma` : title,
      description,
      url: 'https://koutflow.com',
      siteName: 'Koutflow Plataforma', // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: 'https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/itemdep/isobanner.png',//#modifica
        width: 1200,
        height: 630,
      },
      locale: 'pt-BR',
      type: 'website',
    },
  };
};
