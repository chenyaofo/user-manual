(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{392:function(a,t,r){"use strict";r.r(t);var l=r(25),e=Object(l.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"a2d2处理后数据集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a2d2处理后数据集"}},[a._v("#")]),a._v(" A2D2处理后数据集")]),a._v(" "),r("dataset-info"),a._v(" "),r("p",[r("a",{attrs:{href:"https://www.a2d2.audi/a2d2/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("原始数据集"),r("OutboundLink")],1),a._v(" "),r("a",{attrs:{href:"https://github.com/valeoai/xmuda",target:"_blank",rel:"noopener noreferrer"}},[a._v("处理数据参考代码"),r("OutboundLink")],1)]),a._v(" "),r("h2",{attrs:{id:"处理后数据集概况"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#处理后数据集概况"}},[a._v("#")]),a._v(" 处理后数据集概况")]),a._v(" "),r("p",[a._v("该数据目的是用于点云+RGB的语义分割，包含的数据有如下4种。")]),a._v(" "),r("ol",[r("li",[a._v("点云数据")]),a._v(" "),r("li",[a._v("点云对应label")]),a._v(" "),r("li",[a._v("点云投影后的uv坐标")]),a._v(" "),r("li",[a._v("点云对应RGB图片")])]),a._v(" "),r("h2",{attrs:{id:"数据集目录结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据集目录结构"}},[a._v("#")]),a._v(" 数据集目录结构")]),a._v(" "),r("ul",[r("li",[a._v("preprocess\n"),r("ul",[r("li",[a._v("train.pkl (27695 samples)")]),a._v(" "),r("li",[a._v("test.pkl  (942 samples)")])])]),a._v(" "),r("li",[a._v("2018xxxx\n"),r("ul",[r("li",[a._v("RGB images (.png)")])])]),a._v(" "),r("li",[a._v("2018xxxx (...)")])]),a._v(" "),r("h2",{attrs:{id:"pkl文件内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pkl文件内容"}},[a._v("#")]),a._v(" pkl文件内容")]),a._v(" "),r("p",[a._v("使用python pickle 读取pkl文件后得到样本的list, list的元素是单个样本的dict结构。key, value 如下")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("points:")]),a._v("      ndarray (N, 3)  点云数据")]),a._v(" "),r("li",[r("strong",[a._v("seg_labels:")]),a._v("      ndarray (N, )  点云对应label")]),a._v(" "),r("li",[r("strong",[a._v("points_img:")]),a._v("  ndarray(N, 2) 点云投影到image的像素坐标值，row与column")]),a._v(" "),r("li",[r("strong",[a._v("lidar_path:")]),a._v(" lidar文件的路径 （lidar在原A2D2数据集中，不在pkl文件. 用处不大，因为点云已经包含在pkl内）")]),a._v(" "),r("li",[r("strong",[a._v("camera_path:")]),a._v(" image文件的路径 （image包含在2018开头的目录内，不在pkl文件）")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);