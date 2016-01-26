/*coolie build*/
define("0",["1"],function(a,t,e){var d=a("1");alert("today is "+d.format())});
define("1",[],function(e,t,n){t.format=function(){var e=new Date;return[e.getFullYear(),e.getMonth()+1,e.getDate()].join("-")}});