var createFragment = function(count) {
			var fragment = document.createDocumentFragment();
			var li;
			for (var i = 0; i < count; i++) {
				li = document.createElement('li');
				li.className = 'mui-table-view-cell mui-media';
				li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload="../img/' + (i % 4 + 1) + '.png?version=' + Math.random() * 1000 + '"><div class="mui-media-body"><p class="my_p1"><span class="sp1">意大利社员汇庄园</span><span class="sp3">&nbsp;&nbsp;顺义&nbsp;35千米</span></p><p class="my_p2">我已经变的很美好，你会来看我吗？</p><p class="my_p4">请来看看吧</p> <p class="my_p3"><span class="sp4">骑马</span><span class="sp5">探索</span><span class="sp6">表演</span></p></div></a>';
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