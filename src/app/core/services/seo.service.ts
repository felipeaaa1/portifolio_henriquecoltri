import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoPageConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  structuredData?: Record<string, unknown>;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private readonly domain =
    'https://henriquecoltri.com.br';

  private readonly defaultImage =
    'assets/images/projects/escola-livre-porto/15.webp';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  setPage(config: SeoPageConfig): void {

    const canonicalUrl =
      this.absoluteUrl(config.path);

    const imageUrl =
      this.absoluteUrl(
        config.image ?? this.defaultImage
      );

    this.titleService.setTitle(
      config.title
    );

    this.metaService.updateTag({
      name: 'description',
      content: config.description
    });

    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    this.metaService.updateTag({
      property: 'og:locale',
      content: 'pt_BR'
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.metaService.updateTag({
      property: 'og:site_name',
      content: 'Henrique Coltri'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: config.title
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: config.description
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: canonicalUrl
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: imageUrl
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content:
        config.imageAlt ??
        'Henrique Coltri | Branding e estratégia de marcas'
    });

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: config.title
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: config.description
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content: imageUrl
    });

    this.setCanonical(
      canonicalUrl
    );

    if (config.structuredData) {
      this.setStructuredData(
        config.structuredData
      );
    }
  }

  private setCanonical(url: string): void {

    let canonical =
      this.document.head
        .querySelector<HTMLLinkElement>(
          'link[rel="canonical"]'
        );

    if (!canonical) {

      canonical =
        this.document.createElement('link');

      canonical.setAttribute(
        'rel',
        'canonical'
      );

      this.document.head
        .appendChild(canonical);
    }

    canonical.setAttribute(
      'href',
      url
    );
  }

  private setStructuredData(
    data: Record<string, unknown>
  ): void {

    const id =
      'henrique-coltri-structured-data';

    let script =
      this.document.head
        .querySelector<HTMLScriptElement>(
          `script#${id}`
        );

    if (!script) {

      script =
        this.document.createElement('script');

      script.id = id;

      script.type =
        'application/ld+json';

      this.document.head
        .appendChild(script);
    }

    script.textContent =
      JSON.stringify(data);
  }

  private absoluteUrl(path: string): string {

    if (
      path.startsWith('http://') ||
      path.startsWith('https://')
    ) {
      return path;
    }

    const normalizedPath =
      path.startsWith('/')
        ? path
        : '/' + path;

    return this.domain + normalizedPath;
  }
}