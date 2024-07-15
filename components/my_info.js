class MyInfo extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
		<div class="row">
			<img src="assets/img/Profile.jpg" alt="Long Hoang Dang" style="border-radius: 50%; width: 70%; height: auto; float: left;">
		</div>

		<div class="row" style="padding-top: 0.6rem">
			<ul style="list-style-type: none; padding-left: 1rem">
				<li>
					Lecturer<br>
					Faculty of Information Technology, PTIT<br>
				</li>
				<li>
					<i class="bi bi-envelope-fill" style="font-size: 0.85rem"></i>
					<a href="mailto:longdh(at)ptit(dot)edu(dot)vn"> Email</a>
				</li>
				<li>
					<i class="ai ai-google-scholar-square"></i>
					<a href="https://scholar.google.co.jp/citations?user=unEG5bgAAAAJ&hl=en"> Google Scholar</a>
				</li>
				<li>
					<i class="bi bi-linkedin" style="font-size: 0.85rem"></i>
					<a href="https://www.linkedin.com/in/long-hoang-dang-45b58b132/"> LinkedIn</a>
				</li>
				<li>
					<i class="bi bi-twitter" style="font-size: 0.85rem"></i>
					<a href="https://x.com/hldang96"> Twitter</a>
				</li>
				<li>
					<i class="bi bi-github" style="font-size: 0.85rem"></i>
					<a href="https://github.com/longhoangdang"> Github</a>
				</li>
			</ul>
		</div>
    `;
  }
}

customElements.define('myinfo-component', MyInfo);
