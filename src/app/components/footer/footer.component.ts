import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="footer">
      <p>Javier Freire &copy; 2022</p>
      <a href="https://www.linkedin.com/in/javier-antonio-freire-moreira-b226a71ba/" target="_blank"><i class="fa-brands fa-linkedin icon"></i></a>
      <a href="https://github.com/javierf39" target="_blank"><i class="fa-brands fa-github icon"></i></a>
  </div>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
