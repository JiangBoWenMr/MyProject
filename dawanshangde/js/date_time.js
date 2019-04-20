mui.init({
				swipeBack: true //启用右滑关闭功能
			});
			var info = document.getElementById("info");
			
			document.getElementById("pickDateBtn").addEventListener('tap', function() {
				var dDate = new Date();
				dDate.setFullYear(2014, 7, 16);
				var minDate = new Date();
				minDate.setFullYear(2010, 0, 1);
				var maxDate = new Date();
				maxDate.setFullYear(2016, 11, 31);
				plus.nativeUI.pickDate(function(e) {
					var d = e.date;
					info.innerText = '您选择的日期是:' + d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
				}, function(e) {
					info.innerText = "您没有选择日期";
				}, {
					title: "请选择日期",
					date: dDate,
					minDate: minDate,
					maxDate: maxDate
				});
			})
			 document.getElementById("pickTimeBtn").addEventListener('tap', function() {
				var dTime = new Date();
				dTime.setHours(6, 0);
				plus.nativeUI.pickTime(function(e) {
					var d = e.date;
					info.innerText = "您选择的时间是：" + d.getHours() + ":" + d.getMinutes();
				}, function(e) {
					info.innerText = "您没有选择时间"
				}, {
					title: "请选择时间",
					is24Hour: true,
					time: dTime
				});
			});