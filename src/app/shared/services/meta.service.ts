import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { Frontmatter } from '../frontmatter';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private _defaultImage =
    'https://avatars3.githubusercontent.com/u/16495198?s=400&amp;u=7809a51124f7265ce39ff9e733078c3ab6208c0f&amp;v=4';

  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    @Inject(DOCUMENT) private readonly dom: Document,
  ) {}

  update(front: Frontmatter) {
    this.title.setTitle(MetaService.getTitle(front.title));

    this.meta.updateTag({
      property: 'og:title',
      content: front.title,
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: front.title,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: front.description,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: front.description,
    });

    this.meta.updateTag({
      name: 'description',
      content: front.description,
    });

    this.meta.updateTag({
      property: 'og:url',
      content: front.url,
    });

    if (front.tags?.length) {
      this.meta.updateTag({ name: 'keywords', content: front.tags.join(', ') });
    }

    this.meta.updateTag({
      name: 'twitter:image',
      content: front.image || this._defaultImage,
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary',
    });

    this.meta.updateTag({
      name: 'twitter:creator',
      content: 'Nartc1410',
    });

    this.meta.updateTag({
      property: 'og:image',
      content: front.image || this._defaultImage,
    });

    this.updateCanonical(front.url);
  }

  updateTagTitle(tagName: string) {
    this.resetMeta();
    this.title.setTitle(MetaService.getTitle(tagName));
  }

  resetMeta() {
    this.meta.removeTag("property='og:title'");
    this.meta.removeTag("property='og:description'");
    this.meta.removeTag("property='og:url'");
    this.meta.removeTag("name='twitter:title'");
    this.meta.removeTag("name='twitter:description'");
    this.meta.removeTag("name='keywords'");

    this.meta.updateTag({ name: 'description', content: 'Personal blog by Thuoc Nguyen' });
    this.meta.updateTag({
      name: 'twitter:image',
      content: this._defaultImage,
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary',
    });

    this.meta.updateTag({
      name: 'twitter:creator',
      content: 'Nartc1410',
    });

    this.meta.updateTag({
      property: 'og:image',
      content: this._defaultImage,
    });
    this.title.setTitle('Thuoc Nguyen');
    this.updateCanonical();
  }

  private static getTitle(title: string) {
    return `${title} | Thuoc Nguyen`;
  }

  private updateCanonical(url: string = environment.baseUrl) {
    let head = this.dom.querySelector('head');
    if (head != null && Array.isArray(head)) {
      head = head[0];
    }
    let element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null;
    if (!element) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head?.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', url);
  }
}
