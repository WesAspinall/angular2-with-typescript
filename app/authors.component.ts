import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
	selector: 'authors'
	template: `<h2>Authors</h2>
							<authors>
							{{title}}
							<ul>
								<li *ngFor="#author of authors">
								{{author}}
								</li>
							</ul>
						</authors>`
	providers: [AuthorService]
})

export class AuthorsComponent{
	title = "The title of author page";
	authors;

	constructor(authorService: AuthorService){
		this.authors = authorService.getAuthors();
	}

}