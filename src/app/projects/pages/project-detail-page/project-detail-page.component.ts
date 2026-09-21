import {
  Component,
  DestroyRef,
  OnInit,
  PLATFORM_ID,
  inject
} from '@angular/core';

import {
  isPlatformBrowser,
  NgFor,
  NgIf
} from '@angular/common';

import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';

import {
  takeUntilDestroyed
} from '@angular/core/rxjs-interop';

import {
  ProjectDetail
} from '../../../core/models/project-detail.model';

import {
  ProjectDetailService
} from '../../../core/services/project-detail.service';

import {
  SeoService
} from '../../../core/services/seo.service';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink
  ],
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.scss'
})
export class ProjectDetailPageComponent implements OnInit {

  project?: ProjectDetail;
  relatedProjects: ProjectDetail[] = [];

  private readonly platformId =
    inject(PLATFORM_ID);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectDetailService,
    private seoService: SeoService,
    private destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {

    this.route.paramMap
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(params => {

        const slug =
          params.get('slug') ?? '';

        const project =
          this.projectService
            .getProjectBySlug(slug);

        if (!project) {
          this.router.navigate(['/cases']);
          return;
        }

        this.project = project;

        this.relatedProjects =
          this.projectService
            .getRelatedProjects(slug);

        const projectUrl =
          `https://www.henriquecoltri.com.br/projetos/${project.slug}`;

        const projectImage =
          `https://www.henriquecoltri.com.br/${project.coverImage}`;

        this.seoService.setPage({

          title:
            `${project.title} | Case de Branding | Henrique Coltri`,

          description:
            project.summary,

          path:
            `/projetos/${project.slug}`,

          image:
            project.coverImage,

          imageAlt:
            `Projeto de branding ${project.title} por Henrique Coltri`,

          structuredData: {

            '@context':
              'https://schema.org',

            '@graph': [

              {
                '@type':
                  'CreativeWork',

                '@id':
                  `${projectUrl}#project`,

                url:
                  projectUrl,

                name:
                  project.title,

                description:
                  project.summary,

                image:
                  projectImage,

                genre:
                  'Branding e identidade visual',

                inLanguage:
                  'pt-BR',

                about:
                  project.segment,

                creator: {
                  '@id':
                    'https://www.henriquecoltri.com.br/#person'
                },

                isPartOf: {
                  '@id':
                    'https://www.henriquecoltri.com.br/#website'
                }
              },

              {
                '@type':
                  'BreadcrumbList',

                '@id':
                  `${projectUrl}#breadcrumb`,

                itemListElement: [

                  {
                    '@type':
                      'ListItem',

                    position:
                      1,

                    name:
                      'Home',

                    item:
                      'https://www.henriquecoltri.com.br/'
                  },

                  {
                    '@type':
                      'ListItem',

                    position:
                      2,

                    name:
                      'Cases',

                    item:
                      'https://www.henriquecoltri.com.br/cases'
                  },

                  {
                    '@type':
                      'ListItem',

                    position:
                      3,

                    name:
                      project.title,

                    item:
                      projectUrl
                  }

                ]
              }

            ]
          }
        });

        if (isPlatformBrowser(this.platformId)) {

          window.scrollTo({
            top: 0,
            behavior: 'auto'
          });

        }

      });
  }
}