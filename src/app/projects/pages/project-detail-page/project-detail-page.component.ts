import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectDetailService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.project = this.projectService.getProjectBySlug(slug);

    if (!this.project) {
      this.router.navigate(['/cases']);
      return;
    }

    this.titleService.setTitle(`${this.project.title} — Henrique Coltri`);
    this.metaService.updateTag({ name: 'description', content: this.project.summary });
  }
}
