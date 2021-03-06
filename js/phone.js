/**
 * Created with PyCharm.
 * User: ge
 * Date: 15-5-15
 * Time: 下午8:44
 * To change this template use File | Settings | File Templates.
 */
define(function(){
    var phone_init = function(){
        var screen_height = $('.main0').height();
        var screen_width = $('.main0').width();
        $('.main1').height(screen_height);
        var guests = [
                {
                    name: '潘农菲',
                    represent: 'DJI大疆创新',
                    place: '副总裁',
                    id: 0,
                    src: 'images/guests/pannongfei.png'
                },
                {
                    name: '杨建军',
                    represent: '深圳零度',
                    place: 'CEO',
                    id: 1,
                    src: 'images/guests/yangjianjun.png'
                },
//                {
//                    name: '曾浩',
//                    represent: '深圳零度',
//                    place: '董事长',
//                    id: 1,
//                    src: 'images/guests/zenghao.png'
//                },
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
                    id: 2,
                    src: 'images/guests/NicolasHalftermeyer.png'
                },
//                {
//                    name: 'Troy Widgery',
//                    represent: 'Jetpack International',
//                    place: '创始人 & CEO',
//                    id: 4,
//                    src: 'images/guests/TroyWidgery.png'
//                }
                {
                    name: 'Ambar Pansari',
                    represent: 'Skycatch',
                    place: 'Director of Product',
                    id: 3,
                    src: 'images/guests/AmbarPansari.png'
                } ,
                {
                    name: 'Troy Widgery',
                    represent: 'Jetpack International',
                    place: '创始人 & CEO',
                    id: 4,
                    src: 'images/guests/TroyWidgery.png'
                }
            ]

        var schedules = [
                {
                    src: 'images/schedules/schedule1.png',
                    date: '10:00 - 10:20',
                    name: '潘农菲：',
                    speech: '无人机带来的无限可能',
                    desc: '谁说无人机只是玩具和航拍？与无人机深度结合的行业应用其实更令人兴奋。别错过无人机业界领袖的未来视野！'
                },
                {
                    src: 'images/schedules/schedule2.png',
                    date: '10:20 - 10:40',
                    name: '杨建军：',
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
                    speech: '来认识超乎想象的人类新伙伴',
                    desc: '如同你从未想象过的空中精灵，Parrot 无人机的阵列舞蹈表演将大开你的眼界和脑洞。'
                },
                {
                    src: 'images/schedules/schedule3.png',
                    date: '11:00 - 11:20',
                    name: 'Ambar Pansari：',
                    speech: '在尼泊尔参与重建的日子',
                    desc: '无人机已经成为了尼泊尔重建的得力助手，无人机、地图和数据这三者之间碰撞出了怎样的化学反应？'
                },
                {
                    src: 'images/schedules/schedule5.png',
                    date: '11:20 - 11:40',
                    name: 'Troy Widgery：',
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
                        width: '92'
                    },
                    {
                        src: '2',
                        width: '115.5'
                    }
                ]
            },
            {
                name: '指导单位',
                logos: [
                    {
                        src: '3',
                        width: '163.5'
                    }
                ]
            },
            {
                name: '独家视频直播',
                logos:[
                    {
                        src: '20',
                        width: '141'
                    }
                ]
            },
            {
                name: '战略合作',
                logos:[
                    {
                        src: '21',
                        width: '117'
                    },
                    {
                        src: '22',
                        width: '110.5'
                    },
                    {
                        src: '23',
                        width: '61.5'
                    }
                ]
            },
            {
                name: '合作媒体',
                logos: [
                    {
                        src: '24',
                        width: '102.5'
                    },
                    {
                        src: '25',
                        width: '55.5'
                    },
                    {
                        src: '26',
                        width: '35'
                    },
                    {
                        src: '27',
                        width: '74.5'
                    }
                ]
            },
            {
                logos: [
                    {
                        src: '28',
                        width: '52'
                    },
                    {
                        src: '29',
                        width: '30'
                    },
                    {
                        src: '30',
                        width: '80.5'
                    },
                    {
                        src: '31',
                        width: '80.5'
                    },
                    {
                        src: '32',
                        width: '102'
                    },
                    {
                        src: '33',
                        width: '102'
                    }
                ]
            },
            {
                logos: [
                    {
                        src: '34',
                        width: '80'
                    },
                    {
                        src: '35',
                        width: '53.5'
                    },
                    {
                        src: '36',
                        width: '112'
                    }
                ]
            },
           {
                logos : [
                    {
                        src: '37',
                        width: '93'
                    },
                    {
                        src: '38',
                        width: '48.5'
                    },
                    {
                        src: '39',
                        width: '58'
                    }
                ]
            },
            {
                logos: [
                    {
                        src: '40',
                        width: '65.35'
                    },
                    {
                        src: '41',
                        width: '58.195',
                        extra: 'margin-middle'
                    },
                    {
                        src: '42',
                        width: '70.25',
                        extra: 'margin-middle'
                    }
                ]
            },
            {
                logos: [
                    {
                        src: '43',
                        width: '68.205'
                    },
                    {
                        src: '44',
                        width: '99.625'
                    },
                    {
                        src: '45',
                        width: '73.4'
                    },
                    {
                        src: '46',
                        width: '107.5'
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

        $('.main3 table tbody').html(_.template($("#phone_guests").html(), {
             guests: guests
        }));

        $('.main4 table tbody').html(_.template($("#phone_schedules").html(), {
             schedules: schedules
         }));

        $('.main6 .content').html(_.template($("#logos").html(), {
             logos: logos
         }));

        $('img.lazy').lazyload({
            effect : "fadeIn"
        });

        var selected_zone = undefined;
        var panel_isopen = false;
        $('.phone-trigger').click(function(){
            if(panel_isopen){
                $('.panel-select').hide();
            }else{
                $('.panel-select').show();
            }
            panel_isopen = !panel_isopen;
        });

        function excahnge_zones(current){
            if(selected_zone)$(selected_zone).removeClass('active_zone');
            $(current).addClass('active_zone');
            selected_zone = current;
            $('.panel-select').hide();
            panel_isopen = !panel_isopen;
        }

        $("#phone_meeting").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var main2 = $('#main2').offset().top;
		    $.scrollTo(main2 - 50, 500);
	    });
        $("#phone_broadcast").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var main6 = $('#main7').offset().top;
		    $.scrollTo(main6 - 50, 500);
	    });
        $("#phone_invites").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var main3 = $('#main3').offset().top;
		    $.scrollTo(main3-10, 500);
	    });

        $("#phone_schedule").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var main4 = $('#main4').offset().top;
		    $.scrollTo(main4 - 10, 500);
	    });

        $("#phone_location").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var main5 = $('#main5').offset().top;
		    $.scrollTo(main5 -10, 500);
	    });

        $("#phone_partners").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var main6 = $('#main6').offset().top;
		    $.scrollTo(main6 - 10, 500);
	    });
        var video_width = parseInt(screen_width * 0.9);
        var video_height = parseInt(screen_width * 0.9 * 568/960);
        $('.main7 .content.phone .video').width(video_width).height(video_height);

        $('.main7 .content.phone .video').html('<iframe class="video_iframe" style=" z-index:1; " src="http://v.qq.com/iframe/player.html?vid=a0159c24fex&amp;width='+ video_width +'&amp;height=' + video_height +'&amp;auto=0" allowfullscreen="" frameborder="0" height="' + video_height +'" width="' + video_width + '"></iframe>');

    };
    return {
        phone_init: phone_init
    }
});