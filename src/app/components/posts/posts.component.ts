import { PostsService } from './../../shared/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/shared/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Ipost[] = [];
  searchArray: Ipost[] = [];
  allData: Ipost[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(data => {
      this.posts =data;
      this.searchArray = this.posts.slice(0,4)
      this.allData = this.posts.slice(0,4)
    });
  }

  searchUser(search: HTMLInputElement) {
    this.applyFilter(search.value)
  }

  applyFilter(filterValue: string) {
    if(!filterValue) {
      this.searchArray = this.allData;
    }
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    const filteredArray = this.allData.filter(item => item.title.includes(filterValue));
    this.searchArray = filteredArray;
  }

}
