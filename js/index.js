$(function() {
    var searchSwitch = $(".search-switch"),
    	filterSwitch = $(".filter-switch"),
    	search = $("#search"),
    	filter = $("#filter"),		// 筛选整体容器
    	users = $("#users"),
    	userListItem = $(".userList-item");
    	
    var siderbarinfo = $("#siderbarinfo");
    	
    var filterTabItem = $(".filtertab-item"),		// 行业，职能，角色标签
    	filterItem = $(".filter-item"),				// 对应行业，职能，角色容器
    	filterCategoryTab = $(".filter-category-tab"),	// 行业下，细分分类标签
    	filterCategoryItem = $(".filter-category-item");	// 行业下，对应细分分类标签容器
    	
	searchSwitch.on("click", function() {
		search.show();
	});
	filterSwitch.on("click", function() {
		filter.show();
	});
	
	filterTabItem.on("click", function() {
//		var index = $(this).index();
//		$(this).addClass("active").siblings().removeClass("active");
//		filterItem.eq(index).addClass("active").siblings(".filter-item").removeClass("active");
		
		tabSwitch($(this), false, null, filterItem);
	});
	filterCategoryTab.on("click", function() {
//		var index = $(this).index();
//		$(this).addClass("active").siblings().removeClass("active");
//		filterCategoryItem.eq(index).addClass("active").siblings().removeClass("active");
		
		tabSwitch($(this), false, null, filterCategoryItem);
	});
	
	users.on("click").on("click", ".tab-item", function() {
//		var index = $(this).index(".tab-item");
//		$(this).addClass("active").siblings(".tab-item").removeClass("active");
//		userListItem.eq(index).addClass("active").siblings().removeClass("active");
		
		tabSwitch($(this), true, ".tab-item", userListItem);
	});
	
	/*
	 currTab: 当前点击的tab
	 isNeedFilter: 是否需要过滤
	 filterTab: 过滤的tab，方便查找当前点击的tab在过滤的集合中的位置    var index = ele.index(filterTab)
	 switchItem: 需要切换的所有切换栏目
	 * */
	function tabSwitch(currTab, isNeedFilter, filterTab, switchItem) {
		var index = 0;
		if(isNeedFilter) {
			index = currTab.index(filterTab);
			currTab.addClass("active").siblings(filterTab).removeClass("active");
			switchItem.eq(index).addClass("active").siblings().removeClass("active");
		} else {
			index = currTab.index();
			currTab.addClass("active").siblings().removeClass("active");
			switchItem.eq(index).addClass("active").siblings().removeClass("active");
		}
	}
	
	users.on("click", ".userList .arrow", function() {
		$(this).toggleClass("active");
	});
    	
	$(".wrapper").on("click", ".back-arrow", function() {
		var closeType = $(this).attr("data-close");
		switch (closeType) {
			case "search":
				search.removeAttr("style");
				break;
			case "siderbarinfo":
				siderbarinfo.empty();
				break;
		}
	});
	
	$(".wrapper").on("click", ".btn", function() {
		var btnType = $(this).attr("data-btn");
		switch (btnType) {
			case "star":
				starFun();
				console.log("收藏成功");
				break;
			case "unstar":
				unstarFun();
				console.log("取消收藏");
				break;
			case "msg":
				msgFun();
				console.log("发送消息");
				break;
			case "search":
				searchFun();
				console.log("搜索");
				break;
			case "filterreset":
				filterResetFun();
				console.log("清空所有筛选条件");
				break;
			case "filtersubmit":
				filterFun();
				console.log("确认筛选");
				break;
		}
	});
	
	// 收藏
	function starFun() {
		
	}
	// 取消收藏
	function unstarFun() {
		
	}
	// 发送消息
	function msgFun() {
		
	}
	// 搜索
	function searchFun() {
		
	}
	// 筛选清空
	function filterResetFun() {
		
	}
	// 确认筛选
	function filterFun() {
		
	}
		
});