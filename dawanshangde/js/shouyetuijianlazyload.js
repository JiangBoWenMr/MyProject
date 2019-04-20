var createFragment = function(count) {
			var fragment = document.createDocumentFragment();
			var li;
			for (var i = 0; i < count; i++) {
				li = document.createElement('li');
				li.className = 'mui-table-view-cell mui-media';
				li.innerHTML = '<li class="mui-table-view-cell mui-media"><img class="my_img01" src="../img/shouyetuijian_03.png"/><img class="my_img02" src="../img/nongzhuang_05.png"/> <p class="my_p01">意大利农庄</p><div class="weizhi"><img class="my_img03" src="../img/nongzhuang_023.png"/><span class="my_span01">顺义</span><img class="my_img04" src="../img/shouyetuijian001_03.png"/><span class="my_span02">五星推荐</span></div><p class="my_p02">我有美酒，你可有故事？趁时光未老，我等你！</p></li>';
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