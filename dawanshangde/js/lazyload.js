var createFragment = function(count) {
			var fragment = document.createDocumentFragment();
			var li;
			for (var i = 0; i < count; i++) {
				li = document.createElement('li');
				li.className = 'mui-table-view-cell mui-media';
				li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload="../img/' + (i % 4 + 1) + '.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body">主标题<p class="mui-ellipsis">列表二级标题</p></div></a>';
				fragment.appendChild(li);
			}
			return fragment;
		};
		(function($) {
			var list = document.getElementById("list");
			list.appendChild(createFragment(100));
			$(document).imageLazyload({
				placeholder: '../img/60x60.gif'
			});
		})(mui);