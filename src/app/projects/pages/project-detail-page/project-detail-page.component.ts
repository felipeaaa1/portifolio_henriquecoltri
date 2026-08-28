import { Component, DestroyRef, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProjectDetail } from '../../../core/models/project-detail.model';
import { ProjectDetailService } from '../../../core/services/project-detail.service';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.scss'
})
export class ProjectDetailPageComponent implements OnInit {
  project?: ProjectDetail;
  relatedProjects: ProjectDetail[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectDetailService,
    private titleService: Title,
    private metaService: Meta,
    private destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(params => {
        const slug = params.get('slug') ?? '';
        const project = this.projectService.getProjectBySlug(slug);

        if (!project) {
          this.router.navigate(['/cases']);
          return;
        }

        this.project = project;
        this.relatedProjects = this.projectService.getRelatedProjects(slug);
        this.titleService.setTitle(`${project.title} — Henrique Coltri`);
        this.metaService.updateTag({ name: 'description', content: project.summary });

        window.scrollTo({ top: 0, behavior: 'auto' });
      });
  }
}
