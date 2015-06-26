/**
 * Created with PyCharm.
 * User: ge
 * Date: 15-5-20
 * Time: 上午2:28
 * To change this template use File | Settings | File Templates.
 */
define(function(){
    var pc_init = function(){
        var guests = [
            [
                {
                    name: '潘农菲',
                    represent: 'DJI大疆创新',
                    place: '副总裁',
                    id: 0,
                    src: 'images/guests/pannongfei.png'
                },
                {
                    name: '曾浩',
                    represent: '深圳零度',
                    place: '董事长',
                    id: 1,
                    src: 'images/guests/zenghao.png'
                },
//                {
//                    name: 'Antoine Balaresque',
//                    represent: 'Lily Camera',
//                    place: '创始人 & CEO',
//                    id: 2,
//                    src: 'images/guests/AntoineBalaresque.png'
//                },
                {
                    name: 'Nicolas Halftermeyer',
                    represent: 'Parrot',
                    place: 'CMO',
                    id: 3,
                    src: 'images/guests/NicolasHalftermeyer.png'
                },
                {
                    name: 'Troy Widgery',
                    represent: 'Jetpack International',
                    place: '创始人 & CEO',
                    id: 4,
                    src: 'images/guests/TroyWidgery.png'
                }
            ]
        ];

        var schedules = [
                {
                    src: 'images/schedules/schedule1.png',
                    date: '10:00 - 10:20',
                    name: '潘农菲：',
                    speech: '无人机带来的无限可能',
                    id: 0,
                    desc: '谁说无人机只是玩具和航拍？与无人机深度结合的行业应用其实更令人兴奋。别错过无人机业界领袖的未来视野！'
                },
                {
                    src: 'images/schedules/schedule2.png',
                    date: '10:20 - 10:40',
                    name: '曾浩：',
                    id: 1,
                    speech: '智能的空中节点将改变什么？',
                    desc: '来看看无人机与机器视觉和人工智能相结合将带来什么样令人赞叹的新体验？'
                },
//                {
//                    src: 'images/schedules/schedule3.png',
//                    date: '10:40 - 11:00',
//                    id: 2,
//                    name: 'Antoine Balaresque：',
//                    speech: '更小与更大，更简单与更科技',
//                    desc: '仅通过一个视频和一个炫酷的理念就风靡全球并赢得了1亿美元的估值。这家无人机创业公司到底做对了什么？'
//                },
                {
                    src: 'images/schedules/schedule4.png',
                    date: '10:40 - 11:00',
                    name: 'Nicolas Halftermeyer：',
                    id: 3,
                    speech: '来认识超乎想象的人类新伙伴',
                    desc: '如同你从未想象过的空中精灵，Parrot 无人机的阵列舞蹈表演将大开你的眼界和脑洞。'
                },
                {
                    src: 'images/schedules/schedule5.png',
                    date: '11:00 - 11:20',
                    name: 'Troy Widgery：',
                    id: 4,
                    speech: '像钢铁侠一样飞行',
                    desc: '中国首次实用性喷气背包飞行表演，和一场与其创造者的深度交流。科幻中的想象，已经变成现实。'
                }
        ];

        var logos = [
            {
                name: '主办方',
                logos: [
                    {
                        src: '0',
                        width: '184'
                    },
                    {
                        src: '2',
                        width: '231'
                    }
                ]
            },
            {
                name: '指导单位',
                logos: [
                    {
                        src: '3',
                        width: '327'
                    }
                ]
            },
            {
                name: '独家视频直播',
                logos:[
                    {
                        src: '20',
                        width: '282'
                    }
                ]
            },
            {
                name: '战略合作',
                logos:[
                    {
                        src: '21',
                        width: '234'
                    },
                    {
                        src: '22',
                        width: '221'
                    },
                    {
                        src: '23',
                        width: '123'
                    }
                ]
            },
            {
                name: '合作媒体',
                logos: [
                    {
                        src: '24',
                        width: '205'
                    },
                    {
                        src: '25',
                        width: '111'
                    },
                    {
                        src: '26',
                        width: '70'
                    },
                    {
                        src: '27',
                        width: '149'
                    }
                ]
            },
            {
                logos: [
                    {
                        src: '28',
                        width: '104'
                    },
                    {
                        src: '29',
                        width: '60'
                    },
                    {
                        src: '30',
                        width: '161'
                    },
                    {
                        src: '31',
                        width: '161'
                    },
                    {
                        src: '32',
                        width: '204'
                    },
                    {
                        src: '33',
                        width: '204'
                    }
                ]
            },
            {
                logos: [
                    {
                        src: '34',
                        width: '160'
                    },
                    {
                        src: '35',
                        width: '107'
                    },
                    {
                        src: '36',
                        width: '224'
                    },
                    {
                        src: '37',
                        width: '186'
                    },
                    {
                        src: '38',
                        width: '97'
                    }
                ]
            },
            {
                logos: [
                    {
                        src: '39',
                        width: '116'
                    },
                    {
                        src: '40',
                        width: '130.7'
                    },
                    {
                        src: '41',
                        width: '116.39'
                    },
                    {
                        src: '42',
                        width: '140.5'
                    },
                    {
                        src: '43',
                        width: '136.41'
                    }
                ]
            },
            {
                logos: [
                    {
                        src: '44',
                        width: '199.25'
                    },
                    {
                        src: '45',
                        width: '146.8'
                    }
                ]
            }
//            ,
//            {
//                logos: [
//                    {
//                        src: '10',
//                        width: '121'
//                    },
//                    {
//                        src: '11',
//                        width: '161'
//                    },
//                    {
//                        src: '12',
//                        width: '181'
//                    },
//                    {
//                        src: '13',
//                        width: '143'
//                    },
//                    {
//                        src: '14',
//                        width: '136'
//                    },
//                    {
//                        src: '15',
//                        width: '157'
//                    },
//                    {
//                        src: '16',
//                        width: '182'
//                    }
//                ]
//            },
//            {
//                logos: [
//                    {
//                        src: '17',
//                        width: '230'
//                    },
//                    {
//                        src: '18',
//                        width: '251'
//                    },
//                    {
//                        src: '19',
//                        width: '244'
//                    },
//                    {
//                        src: '20',
//                        width: '282'
//                    }
//                ]
//            },
//            {
//                logos: [
//                    {
//                        src: '21',
//                        width: '234'
//                    },
//                    {
//                        src: '22',
//                        width: '221'
//                    },
//                    {
//                        src: '23',
//                        width: '123'
//                    },
//                    {
//                        src: '24',
//                        width: '205'
//                    },
//                    {
//                        src: '25',
//                        width: '111'
//                    },
//                    {
//                        src: '26',
//                        width: '70'
//                    },
//                    {
//                        src: '27',
//                        width: '149'
//                    }
//                ]
//            },
//            {
//                logos: [
//                    {
//                        src: '28',
//                        width: '104'
//                    },
//                    {
//                        src: '29',
//                        width: '95'
//                    },
//                    {
//                        src: '30',
//                        width: '161'
//                    },
//                    {
//                        src: '31',
//                        width: '161'
//                    },
//                    {
//                        src: '32',
//                        width: '204'
//                    },
//                    {
//                        src: '33',
//                        width: '204'
//                    }
//                ]
//            }
        ];
        $('.main3 table tbody').html(_.template($("#guests").html(), {
             guests: guests
         }));
        $('.main4 table tbody').html(_.template($("#schedules").html(), {
             schedules: schedules
         }));
        $('.main6 .content').html(_.template($("#logos").html(), {
             logos: logos
         }));

        $('img.lazy').lazyload({
            effect : "fadeIn"
        });


        var selected_zone = undefined;
        function excahnge_zones(current){
            if(selected_zone)$(selected_zone).removeClass('active_zone');
            $(current).addClass('active_zone');
            selected_zone = current;
        }

        $("#meeting").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var video_position = $('.main2').offset().top;
		    $.scrollTo(video_position - 71, 500);
	    });
        $("#invites").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var video_position = $('.main3').offset().top;
		    $.scrollTo(video_position - 31, 500);
	    });

        $("#schedule").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var video_position = $('.main4').offset().top;
		    $.scrollTo(video_position - 31, 500);
	    });
        $("#location").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var video_position = $('.main5').offset().top;
		    $.scrollTo(video_position - 31, 500);
	    });
        $("#partners").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var video_position = $('.main6').offset().top;
		    $.scrollTo(video_position - 31, 500);
	    });
        var mains = [
            {
                id: $("#meeting"),
                obj: $('.main2').offset().top- 92
            },
            {
                id: $("#invites"),
                obj: $('.main3').offset().top- 52
            },
            {
                id: $("#schedule"),
                obj: $('.main4').offset().top- 52
            },
            {
                id: $("#location"),
                obj: $('.main5').offset().top- 52
            },
            {
                id: $("#partners"),
                obj: $('.main6').offset().top- 52
            }
        ];
        var guide = _(function() {
            var _scroll = $(window).scrollTop();
            for(var i=mains.length -1;i>=0;i--){
                if(_scroll>=mains[i].obj){
                    excahnge_zones(mains[i].id);
                    break;
                }
            };
            if(_scroll<mains[0].obj){
                if(selected_zone)$(selected_zone).removeClass('active_zone');
                selected_zone = null;
            }
        }).throttle(500);

        $(window).bind('scroll', guide);

        $(window).bind('hashchange', (function(){
            var target = $(location.hash);
            if(target.length==1){
                 var top = target.offset().top-62;
                 if(top > 0){
                     $('html,body').animate({scrollTop:top}, 10);
                 }
             }
        }));
//        /* 触发事件 */
//        $(window).hashchange();
    };
    return {
        pc_init: pc_init
    }
});
