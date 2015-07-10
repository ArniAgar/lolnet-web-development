/* GLOBAL VALUES */
$extlinks = $('.mainnavbar_is_static #mainnavbarcenter').html();
$intlinks = $('.mainnavbar #mainnavbarcenter').html();
mbl_menu_html_inserted = false;
width_state_achieved = 'large';
loggedin = 'true';
$notifications_head = [
    'What is done',
    'Github'
];
$notifications_body = [
    'About Us, Donate, Servers',
    '<a href="https://github.com/ladybugman/lolnet-web-development">view on github</a>'
];
$notifications_count = 0;
notifications_count = 0;
pm_count = 0;
showcase_serverlist = [
    'AS2',
    'Infinity',
    'Survival'
];
showcase_serverlist_current = 0;
serverlist = [
    '1.7 BC',
    'AS2',
    'Building',
    'Creative Plot',
    'Direwolf20',
    'Factions',
    'Hunger Games',
    'Huxley',
    'Infinity',
    'Lobby2',
    'LolnetLobby',
    'MobArena',
    'Mumble',
    'Resurrection',
    'Skyblock',
    'skyfactory',
    'SkyWars',
    'Survival',
    'TolkienCraft',
    'TolkienCraftDev',
    'Tyla',
    'UAServer',
    'VotingMF',
    'VotingVanilla'
];
serverlist_IP = null; 
$notification_number = $notifications_body.length;
/* END GLOBAL VALUES */
function serverstatusfiller(ele) {//legacy
    ele.src = '../img/FullServers.png';
}
$(document).ready(function() {
    if ($('.jswarning')) {
        $('.jswarning').remove();
    }
});
$(document).ready(function() {
    var pageheaderhtml = $('#page-header').html();
    $('#page-header').html(pageheaderhtml + '<span class="alert"><div class="fullscreenoverlay hideme"></div><span class="heading"></span><span class="contents"></span><span class="foot"></span></span>'
                          + '<span class="notifications_buffer0" style="display:none;"></span>'
                          + '<span class="notifications_buffer1" style="display:none;"></span>'
                          + '<span class="bugsubmit"><a href="https://github.com/ladybugman/lolnet-web-development/issues" target="_blank">Submit a bug</a></span>'
                          );
    if ($('.serverlist_IP_buffer')) {$('.serverlist_IP_buffer').load('../servers/ip.txt');}
    var x = document.createElement('link');
    x.rel = 'icon';
    x.type = 'image/x-icon';
    x.href = 'https://www.lolnet.co.nz/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(x);
});
$(document).ready(function () {
    var $mainnavbar_is_static = $('.mainnavbar_is_static'), $mainnavbar_is_staticHTML = $('.mainnavbar_is_static').html();
    if (loggedin === 'true') {
        $('.mainnavbar_is_static').html($mainnavbar_is_staticHTML + '<div class="profilebuttons"><a href="https://www.lolnet.co.nz/ucp.php"><button class="profile">Profile</button></a><a><button onclick="menu_notification()" class="notifications_desktop">' + $notifications_count + '</button></a><a href="https://www.lolnet.co.nz/ucp.php?mode=logout"><button class="logout">Logout</button></a></div>');
    } else if (loggedin === 'false') {
        $('.mainnavbar_is_static').html($mainnavbar_is_staticHTML + '<div class="profilebuttons"><a href="https://www.lolnet.co.nz/ucp.php?mode=register"><button class="signup">Signup</button></a><a href="https://www.lolnet.co.nz/ucp.php?mode=login"><button class="login">Login</button></a></div>');
    } else {
        window.alert('error - unknown login state');
    }
});
$(document).ready(function () {
    $('.showcase .right').click(function(){
        if (showcase_serverlist_current === showcase_serverlist.length - 1) {
            showcase_serverlist_current = 0;
        } else {
            showcase_serverlist_current++;
        }
        for (i=0;i<showcase_serverlist.length;i++) {
            var selector = '#showcase_inner .showcase' + showcase_serverlist[i];
            $(selector).hide();
            $('#showcase_inner').css({ backgroundImage: 'none' });
        }
        var classselection = '#showcase_inner .showcase' + showcase_serverlist[showcase_serverlist_current];
        $(classselection).show();
        var imgname = showcase_serverlist[showcase_serverlist_current];
        $('#showcase_inner').css({ backgroundImage: 'url("../img/res/' + imgname + '.jpg")' });
    });
    $('.showcase .left').click(function(){
        if (showcase_serverlist_current === 0) {
            showcase_serverlist_current = showcase_serverlist.length - 1;
        } else {
            showcase_serverlist_current--;
        }
        for (i=0;i<showcase_serverlist.length;i++) {
            var selector = '#showcase_inner .showcase' + showcase_serverlist[i];
            $(selector).hide();
            $('#showcase_inner').css({ backgroundImage: 'none' });
        }
        var classselection = '#showcase_inner .showcase' + showcase_serverlist[showcase_serverlist_current];
        $(classselection).show();
        var imgname = showcase_serverlist[showcase_serverlist_current];
        $('#showcase_inner').css({ backgroundImage: 'url("../img/res/' + imgname + '.jpg")' });
    });
    for (i=0;i<document.getElementsByTagName('a').length;i++) {
        //removes ajax requests from jquery mobile
        document.getElementsByTagName('a')[i].setAttribute('data-ajax', 'false');
    }
    //Navbar fixing
    var menu = $('.mainnavbar'), origOffsetY = menu.offset().top;
    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.mainnavbar').addClass('sticky');
            $('.mainnavbar_is_static > div.profilebuttons').addClass('mainbar_static_button_is_sticky');
            $('.mainnavbarfiller').addClass('sticky-padding');
            if (document.getElementById('mbl_css')) {
            } else {
                $('.notifications_menu').addClass('notifications_is_sticky');
                $('.img_bubble').addClass('notifications_bubble_is_sticky');
            }
        } else {
            $('.mainnavbar').removeClass('sticky');
            $('.mainnavbar_is_static div.profilebuttons').removeClass('mainbar_static_button_is_sticky');
            $('.mainnavbarfiller').removeClass('sticky-padding');
            if (document.getElementById('mbl_css')) {
            } else {
                $('.notifications_menu').removeClass('notifications_is_sticky');
                $('.img_bubble').removeClass('notifications_bubble_is_sticky');
            }
        }
    }
    document.onscroll = scroll;
    // Magic Line
    window.setTimeout(function () {
        var $el, leftPos, newWidth, $mainNav = $(".mainnavbar");
        $mainNav.append("<div id='magic-line'></div>");
        var $magicLine = $("#magic-line");
        $magicLine
            .width($(".current_page_item").width() + 20)//the '20' comes from the padding of the element
            .css("left", $(".current_page_item").position().left)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());
        $(".mainnavbar div a div").hover(function () {
            var $window = $(window);
            var windowsize = $window.width();
            $el = $(this);
            leftPos = $el.position().left;
            leftPosPercent = (leftPos / windowsize) * 100;
            newWidth = $el.width() + 20;
            $magicLine.stop().animate({
                left: leftPosPercent + '%',
                width: newWidth
            });
        }, function () {
            $magicLine.stop().animate({
                left: $magicLine.data("origLeft"),
                width: $magicLine.data("origWidth")
            });
        });
    }, 100);
    //blockquotes
    if ($('blockquote')) {
        var bq = $('blockquote'), bqtxt = bq.text();
        bq.html('<span class="quote"></span><span class="text">' + bqtxt + '</span>');
    }
    //Header slider
    if ($('.slider')) {
        var pa = document.getElementsByClassName('slider')[0].children, i = 0, b = null, pal = pa.length;
        window.setInterval(function () {
            if (i === 0) {
                b = pal - 1;
                pa[b].style.width = '';
                pa[i].style.width = '100%';
                i = i + 1;
            } else if (i === pal) {
                b = pal - 1;
                i = 0;
            } else {
                b = i - 1;
                pa[b].style.width = '';
                pa[i].style.width = '100%';
                i = i + 1;
            }
        }, 4000);
    }
    //test for script tag inside of heading slider and format the parent element
    var $element = $('.slider div script').parent('div');
    window.setTimeout(function() {
        $element.addClass('child_is_script');
    }, 2000);
    //mobile detection
    //kinda brute but it should work fine
    var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 851) {
            width_state_achieved = 'small';
            if (document.getElementById('mbl_css')) {
            } else {
                var a = document.createElement('div');
                a.id = 'headerbutton_container';
                document.getElementById('page-header').appendChild(a);
                window.setTimeout(function() {
                    var b = document.createElement('div'),
                        c = document.createElement('div'),
                        d = document.createElement('a'),
                        x = document.createElement('link');
                    x.rel = 'stylesheet';
                    x.type = 'text/css';
                    x.href = 'css/mbl.css';
                    x.id = 'mbl_css';
                    x.setAttribute('onerror', 'pathup(this)');
                    b.className = 'mainmenu_button';
                    b.setAttribute('onclick', 'menu_is_focused()');
                    c.className = 'notifications_button';
                    c.setAttribute('onclick', 'menu_notification()');
                    c.innerHTML = '!';
                    d.href = '/';
                    d.className = 'mobile_logo';
                    document.getElementById('headerbutton_container').appendChild(b);
                    document.getElementById('headerbutton_container').appendChild(d);
                    document.getElementById('headerbutton_container').appendChild(c);
                    document.getElementsByTagName('head')[0].appendChild(x);
                    $('.mobile_logo').html('<div></div>');
                    $('.mainmenu_button').html('<span></span>');
                    var mainnav = $('#headerbutton_container').height();
                    $('.mainnavbar_is_static').hide();
                    $('.mainnavbarfiller').hide();
                    $('.slider_container .slider').width('100%');
                    $('.slider_container').css('padding', '0px');
                    $('.slider_container').css('padding-top', mainnav);
                    $('.notifications_button').html('!<span>' + $notification_number + '</span>');
                    //$('.slider_container .slider div').css('', $window.width());
                }, 1);
            }
        } else if (windowsize >= 851) {
            if (width_state_achieved === 'small') {
                $('.mainnavbar').removeAttr('onclick', '$(this).addClass("mainnavbar_focus")');
                $('#mbl_css').remove('#mbl_css');
                $('.mainmenu_button').remove('.mainmenu_button');
                $('.notifications_button').remove('.notifications_button');
                $('.announcements_button').remove('.announcements_button');
                $('.notifications_menu').hide();
                $('#headerbutton_container').remove('#headerbutton_container');
                $('.appmode_button').remove('.appmode_button');
                $('.mainnavbar_is_static #mainnavbarcenter').html($extlinks);
                $('.mainnavbar #mainnavbarcenter').html($intlinks);
                $('.mainnavbar_is_static').show();
                $('.mainnavbarfiller').show();
                $('.slider_container').css('padding', '');
                $('.slider_container .slider').width('');
                mbl_menu_html_inserted = false;
            }
        }
        var serversmall_css = null;
        if (windowsize < 1230) {
            if (windowsize > 851) {
                if (serversmall_css === 'true') {
                } else {
                    $('#server_container div').css({ width: 'calc(100% / 3 - 4px)' });
                    serversmall_css = 'true';
                }
            } else if (windowsize <= 851) {
                $('#server_container div').css({width:''});
            }
        } else if (windowsize >= 1230){
            if (serversmall_css === 'false') {
            } else {
                $('#server_container div').css({width:''});
                serversmall_css = 'false';
            }
        }
    }
    checkWidth();
    $(window).resize(checkWidth);
    $("body").on("swiperight", function () {
        if (document.getElementById('mbl_css')) {
            if ($('.mainmenu_button').hasClass('mainmenu_is_activated') === false) {
                menu_is_focused();
            }
        }
    });
    $("body").on("swipeleft", function () {
        if (document.getElementById('mbl_css')) {
            if ($('.mainmenu_button').hasClass('mainmenu_is_activated') === true) {
                menu_is_focused();
            }
        }
    });
    $(".mainmenu_button").click(function () {
        $('.mainmenu_button').animate({
            backgroundPosition: '-10px center',
            paddingLeft: 'calc(10% - 10px)',
            width: 'calc(40% + 10px)'
        });
    });
    $(".lserverlist button").click(function () {
        document.location.reload(true);
        console.info('reloading without cache');
    });
});
function pathup(identity) {
    //pathup goes till onerror === false
    identity.setAttribute('href', '../' + identity.getAttribute('href'));
    console.log('pathing fix applied to element with href attribute. \'' + identity.getAttribute('href') + '\' loaded');
    //written to console incase devs wonder why errors are in console
}
function pathup_src(identity) {
    //pathup goes till onerror === false
    identity.setAttribute('src', '../' + identity.getAttribute('src'));
    console.log('pathing fix applied to element with src attribute.\'' + identity.getAttribute('src') + '\' loaded');
    //written to console incase devs wonder why errors are in console
}
//AppSideMenu
function menu_is_focused() {
    if ($('.mainmenu_button').hasClass('mainmenu_is_activated') === true) {
        $(".mainnavbar_focus").removeClass("mainnavbar_focus");
        $('.mainmenu_button').removeClass('mainmenu_is_activated');
    } else if ($('.mainmenu_button').hasClass('mainmenu_is_activated') === false) {
        $(".mainnavbar").addClass("mainnavbar_focus");
        $('.mainmenu_button').addClass('mainmenu_is_activated');
        if (mbl_menu_html_inserted === false) {
            $extlinks = $('.mainnavbar_is_static #mainnavbarcenter').html();
            $intlinks = $('.mainnavbar.mainnavbar_focus #mainnavbarcenter').html();
            var $appmode = '<a><div class="appmode_button" onclick="toggleFullScreen()">App Mode: <button>OFF</button></div></a>';
            $('.mainnavbar.mainnavbar_focus #mainnavbarcenter').html($appmode + $intlinks + $extlinks);
            $('.mainnavbar_is_static #mainnavbarcenter').html('');
            mbl_menu_html_inserted = true;
        }
    }
}
$(document).ready(function() {
    //Notifications Loader
    window.setTimeout(function(){
        var doc_location = '';
        var pathname = window.location.pathname;
        var hostname = window.location.hostname; 
        if (pathname === hostname || '/Volumes/NO%20NAME/lolnet.co.nz/LOLNET/www.lolnet.co.nz/index-3.html' || 'G:/lolnet.co.nz/LOLNET/www.lolnet.co.nz/index-3.html') { doc_location = './'; }//the two strings are for testing
        else { doc_location = '../'; }
        console.log('doc_location: ' + doc_location + '\npathname: ' + pathname);
        $('.notifications_buffer0').load(doc_location + 'ucp.html .linklist.bulletin', function () {
            notifications_count = $('#notification_list_button strong').text() * 1 + $notification_number;
            pm_count = $('.icon-pm strong').text() * 1;
            $notifications_count = pm_count + notifications_count;
            $('.notifications_desktop').text($notifications_count);
            $('.notifications_buffer1').load(doc_location + 'ucp.html .dropdown-contents ul li', function() {
                $('.notifications_buffer1 img').remove();
                var notifications_count = $('#notification_list_button strong').text() * 1;
                for (i=0;i<notifications_count;i++) {
                    var etype = $('.notifications_buffer1 a:eq('+i+') .notification-title').text();
                    var etime = $('.notifications_buffer1 a:eq('+i+') .notification-time').text();
                    var ehead = etype.replace(' in bookmarked topic:', '');
                    var ehead = ehead.replace(' in topic:', '');
                    var ehead = ehead.replace(' and ', ' & ');
                    var ehref = $('.notifications_buffer1 a:eq('+i+')').attr('href');
                    var ebody = $('.notifications_buffer1 a:eq('+i+') .notification-reference').text().replace(/\"/g, '');
                    var ebody = '<span>' + etime + '</span>' + etype + ' <a href="' + ehref + '">' + ebody + '</a>.';
                    $notifications_head.push(ehead);
                    $notifications_body.push(ebody);
                }
            });
        });
    }, 5);
});
function menu_notification() {
    if ($('.notifications_menu').hasClass('notifications_menu_is_open') === false) {
        if (document.getElementById('mbl_css')) {
            for (i=0;i<notifications_count;i++) {
                var $html = $('.notifications_menu').html();
                $('.notifications_menu').html($html + '<span class="head">' + $notifications_head[i] + '</span>' + '<span class="body">' + $notifications_body[i] + '</span>');
            }
            if (document.getElementsByClassName('notification_forum')[0]) {
            } else {
                var EXHTML = $('.notifications_menu').html();
                $('.notifications_menu').html('<a href="https://www.lolnet.co.nz/ucp.php?i=ucp_notifications"><button class="notification_forum"> See notifications </button></a>' + EXHTML);
            }
            $('.notifications_menu').addClass('notifications_menu_is_open');
            $heightnotification = $('.notifications_button').height() + 15;
            $heightnotificationoffset = $('.notifications_button').height();
            $('.notifications_menu').css('height', 'calc(100% - ' + $heightnotification + 'px)');
            $('.notifications_menu').css('top', $heightnotificationoffset + 'px');
            $notification_number = 0;
            notifications_count = 0;
        } else {
            for (i=0;i<notifications_count;i++) {
                var $html = $('.notifications_menu').html();
                $('.notifications_menu').html($html + '<span class="head">' + $notifications_head[i] + '</span>' + '<span class="body">' + $notifications_body[i] + '</span>');
            }
            $('.notifications_menu').addClass('notifications_menu_is_open notifications_desktop_display');
            if (document.getElementsByClassName('notification_forum')[0]) {
            } else {
                var EXHTML = $('.notifications_menu').html();
                $('.notifications_menu').html('<a href="https://www.lolnet.co.nz/ucp.php?i=ucp_notifications"><button class="notification_forum"> See notifications </button></a>' + EXHTML);
            }
            if (document.getElementsByClassName('img_bubble')[0]) {
                $('.img_bubble').show();
                window.setTimeout(function () {$('.img_bubble').css('opacity', '0.38');},1);
            } else {
                var img_bubble = document.createElement('img');
                img_bubble.src = 'img/UI/bubble.png';
                img_bubble.className = 'img_bubble';
                img_bubble.setAttribute('onerror', 'pathup_src(this)');
                document.getElementsByTagName('body')[0].appendChild(img_bubble);
            }
            $notification_number = 0;
            notifications_count = 0;
            $('.notifications_desktop_display').show();
            window.setTimeout(function () {$('.notifications_desktop_display').css('opacity', '1');},1);
        }
    } else if ($('.notifications_menu').hasClass('notifications_menu_is_open') === true) {
        if (document.getElementById('mbl_css')) {
            $('.notifications_menu').removeClass('notifications_menu_is_open');
            $('.notifications_menu').css('height', '');
        } else {
            $('.notifications_menu').removeClass('notifications_menu_is_open');
            $('.notifications_desktop_display').css('opacity', '0');
            $('.img_bubble').css('opacity', '0');
            window.setTimeout(function () {$('.img_bubble').hide();$('.notifications_desktop_display').hide();}, 200);
        }
    }
}
//AppMode
function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||  (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
            $('.appmode_button button').addClass('switched');
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
            $('.appmode_button button').addClass('switched');
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            $('.appmode_button button').addClass('switched');
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
            $('.appmode_button button').removeClass('switched');
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            $('.appmode_button button').removeClass('switched');
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
            $('.appmode_button button').removeClass('switched');
        }
    }
}
$(document).ready(function () {
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName  = navigator.appName;
    var fullVersion  = ''+parseFloat(navigator.appVersion); 
    var majorVersion = parseInt(navigator.appVersion,10);
    var nameOffset,verOffset,ix;

    // In Opera, the true version is after "Opera" or after "Version"
    if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset+6);
        if ((verOffset=nAgt.indexOf("Version"))!=-1) 
            fullVersion = nAgt.substring(verOffset+8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset+5);
    }
    // In Chrome, the true version is after "Chrome" 
    else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset+7);
    }
    // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset+7);
        if ((verOffset=nAgt.indexOf("Version"))!=-1) 
            fullVersion = nAgt.substring(verOffset+8);
    }
    // In Firefox, the true version is after "Firefox" 
    else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset+8);
    }
    // In most other browsers, "name/version" is at the end of userAgent 
    else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) {
        browserName = nAgt.substring(nameOffset,verOffset);
        fullVersion = nAgt.substring(verOffset+1);
        if (browserName.toLowerCase()==browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix=fullVersion.indexOf(";"))!=-1)
        fullVersion=fullVersion.substring(0,ix);
    if ((ix=fullVersion.indexOf(" "))!=-1)
        fullVersion=fullVersion.substring(0,ix);

    majorVersion = parseInt(''+fullVersion,10);
    if (isNaN(majorVersion)) {
        fullVersion  = ''+parseFloat(navigator.appVersion); 
        majorVersion = parseInt(navigator.appVersion,10);
    }
/*
    document.write(''
     +'Browser name  = '+browserName+'<br>'
     +'Full version  = '+fullVersion+'<br>'
     +'Major version = '+majorVersion+'<br>'
     +'navigator.appName = '+navigator.appName+'<br>'
     +'navigator.userAgent = '+navigator.userAgent+'<br>'
    );
*/
    // This script sets OSName variable as follows:
    // "Windows"    for all versions of Windows
    // "MacOS"      for all versions of Macintosh OS
    // "Linux"      for all versions of Linux
    // "UNIX"       for all other UNIX flavors 
    // "Unknown OS" indicates failure to detect the OS
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    if (OSName !== 'MacOS' || browserName === 'Firefox') {
        x = document.createElement('link');
        x.rel = 'stylesheet';
        x.type = 'text/css';
        x.setAttribute('onerror', 'pathup(this)');
        x.href = 'css/win.linux.unix.css';
        x.id = 'win_linux_unix'; 
        document.getElementsByTagName('head')[0].appendChild(x);
    }
});
$(document).ready(function () {
    $.mobile.loading().hide();
    $.mobile.loadingMessage = false;//disable jquery mobile loading event
});
function server_online() {
    $('span.Serveronline:contains("online")').addClass('server_online');
    $('span.Serveronline:contains("offline")').addClass('server_offline');
    var imgname = showcase_serverlist[0];
    $('#showcase_inner').css({ backgroundImage: 'url("../img/res/' + imgname + '.jpg")' });
}
function serverloader() {
    functionone = 0;
    functiontwo = 0;
    for (i=0;i<showcase_serverlist.length;i++) {
        var showcase_server_list = showcase_serverlist[i].replace(/[\. ,:-]+/g, "");
        var showcase_URIserver_list = showcase_serverlist[i].replace(/ /g, "%20");
        var showcase_import_URI = '../servers/' + showcase_URIserver_list + '.txt';
        $('#showcase_inner > div:eq('+i+')').load(showcase_import_URI);
        functionone++;
        check_serverinfocleaner();
    }
    for (i=0;i<serverlist.length;i++) {
        var server_list = serverlist[i].replace(/[\. ,:-]+/g, "");
        var URIserver_list = serverlist[i].replace(/ /g, "%20");
        var import_URI = '../servers/' + URIserver_list + '.txt';
        $('div#server_container > div:eq('+i+')').load(import_URI);
        //console.log($('div#server_container > div:eq('+i+')').load(import_URI));
        functiontwo++;
        check_serverinfocleaner();
    }
}
function check_serverloader() {
    if (functionone === showcase_serverlist.length) {
        if (functiontwo === serverlist.length) {
            serverloader();
        }
    }
}
function check_serverinfocleaner() {
    if (functionone === showcase_serverlist.length) {
        if (functiontwo === serverlist.length) {
            all_serverinfocleaner();
        }
    }
}
$(document).ready(function () {
    var loc = window.location.pathname, loc_isserver = loc.indexOf("servers") > -1;
    if (loc_isserver === true) {
        functionone = 0;
        functiontwo = 0;
        for (i=0;i<showcase_serverlist.length;i++) {
            var showcase_server_list = showcase_serverlist[i].replace(/[\. ,:-]+/g, "");
            var showcase_URIserver_list = showcase_serverlist[i].replace(/ /g, "%20");
            var showcase_$html = $('#showcase_inner').html();
            var showcase_import_URI = '../servers/' + showcase_URIserver_list + '.txt';
            $('#showcase_inner').html(showcase_$html + '<div class="showcase' + showcase_server_list + '"></div>');
            functionone++;
            check_serverloader();
        }
        for (i=0;i<serverlist.length;i++) {
            var server_list = serverlist[i].replace(/[\. ,:-]+/g, "");
            var URIserver_list = serverlist[i].replace(/ /g, "%20");
            var $html = $('#server_container').html();
            var import_URI = '../servers/' + URIserver_list + '.txt';
            $('#server_container').html($html + '<div class="' + server_list + '"></div>');
            functiontwo++;
            check_serverloader();
        }
    }
});
function all_serverinfocleaner() {
    window.setTimeout(function(){
        //------------------------------------------------//
        //                  FEATURED SERVERS              //
        //------------------------------------------------//
        var divarray = document.getElementById('showcase_inner').childNodes;
        for (i=0;i<showcase_serverlist.length;i++) {
            var textnode = divarray[i].innerHTML;
            var textnode = textnode.replace(/\s/g, '');
            var textnode = textnode.replace('Serveronline', ' Serveronline');
            var textnode = textnode.replace('Players', ' Players');
            var textnode = textnode.replace('Total', ' Total');
            var textnode_tostring = textnode.split(/\s/g);
                //   [0] = ServerName
                //   [1] = Serveronline
                //   [2] = Players
                //   [3] = Total
            divarray[i].innerHTML = textnode;
            var textnode_tostring0 = textnode_tostring[0].replace('ServerName=', '');
            var textnode_tostring1 = textnode_tostring[1].replace('Serveronline=', '');
            var textnode_tostring1 = textnode_tostring1.replace('true', 'online');
            var textnode_tostring1 = textnode_tostring1.replace('false', 'offline');
            var textnode_tostring2 = textnode_tostring[2].replace('Players=', '');
            var textnode_tostring3 = textnode_tostring[3].replace('Total=', '');
            $('#showcase_inner > div:eq('+i+')').html(
                '<span class="Serveronline">' + textnode_tostring1 + '</span>' +
                '<h1><span>' + showcase_serverlist[i] + '</span></h1>' +
                '<span class="Total"><span>Players: ' + textnode_tostring3 + '</span></span>'
            );
        }
        //------------------------------------------------//
        //                  ALL SERVERS                   //
        //------------------------------------------------//
        var divarray = document.getElementById('server_container').childNodes;
        for (i=0;i<serverlist.length;i++) {
            var textnode = divarray[i].innerHTML;
            var textnode = textnode.replace(/\s/g, '');
            var textnode = textnode.replace('Serveronline', ' Serveronline');
            var textnode = textnode.replace('Players', ' Players');
            var textnode = textnode.replace('Total', ' Total');
            var textnode_tostring = textnode.split(/\s/g);
                //   [0] = ServerName
                //   [1] = Serveronline
                //   [2] = Players
                //   [3] = Total
            divarray[i].innerHTML = textnode;
            var textnode_tostring0 = textnode_tostring[0].replace('ServerName=', '');
            var textnode_tostring1 = textnode_tostring[1].replace('Serveronline=', '');
            var textnode_tostring1 = textnode_tostring1.replace('true', 'online');
            var textnode_tostring1 = textnode_tostring1.replace('false', 'offline');
            var textnode_tostring2 = textnode_tostring[2].replace('Players=', '');
            var textnode_tostring3 = textnode_tostring[3].replace('Total=', '');
            $('div#server_container > div:eq('+i+')').html(
                '<h1>' + serverlist[i] + '</h1>' +
                '<span>' + 
                '<span class="Total">Players: ' + textnode_tostring3 + '</span>' +
                '<span class="Serveronline">' + textnode_tostring1 + '</span>' +
                '</span>'
            );
        }
        server_online();
        $('#server_container div').click(function () {//Alerts user to the IP of a server when onclick()
            var el_top = $(this);
            var el_h1 = '.' + el_top.attr('class') + ' h1';
            var el_text = $(el_h1).text();
            var serverlist_raw = $('.serverlist_IP_buffer').html();
            serverlist_raw = serverlist_raw.substring(0, serverlist_raw.length - 1);
            var serverlist_ip_array = serverlist_raw.replace(/\[/g, '');
            var serverlist_ip_array = serverlist_ip_array.split(/\]/);
            var serverlist_name_array = serverlist_raw.replace(/\[/g, '');
            var serverlist_name_array = serverlist_name_array.replace(/\]\s/g, '\]');
            var serverlist_name_array = serverlist_name_array.split(/\]/);
            for (i=0;i<serverlist_name_array.length;i++) {
                serverlist_ip_array[i] = serverlist_ip_array[i].replace(/^[^=]*=/, '');//returns IP of element
                serverlist_name_array[i] = serverlist_name_array[i].substring(0, serverlist_name_array[i].lastIndexOf('='));//returns name of element
                if (el_text === serverlist_name_array[i]) {//event called
                    if (document.getElementById('mbl_css')) {
                        window.alert('Server: ' + serverlist_name_array[i] + '\nIP connect: ' + serverlist_ip_array[i] + '\nTrouble connecting? Check the servers online status. You may need to refresh this page to update the server status. You can also try to get help in the forum. https://lolnet.co.nz/forum/viewforum.php?f=133');
                    } else {
                        if (document.getElementsByClassName('alert')[0]) {
                            $('.alert .heading').html(serverlist_name_array[i]);
                            $('.alert .contents').html('IP connect: ' + serverlist_ip_array[i] + '<br><span class="smalltext">Trouble connecting? Download the official <a href="http://anderson.lolnet.co.nz:8081/job/LolnetLauncherBootstrap/lastSuccessfulBuild/artifact/target/LolnetLauncher.jar">Lolnet launcher</a>. Check the servers online status. You may need to refresh this page to update the server status. You can also try to get help in the <a href="/forum/viewforum.php?f=133">forum</a>.</span>');
                            $('.alert .foot').html('<button class="hideme">okay</button>');
                            var elementheighthalf = $('.alert').height() / 2;
                            var elementwidthhalf = $('.alert').width() / 2;
                            $('.alert').css({
                                top: 'calc(50% - ' + elementheighthalf + 'px)',
                                left: 'calc(50% - ' + elementwidthhalf + 'px)'
                            });
                            $('.alert').show();
                            $('.hideme').click(function () {$('.alert').hide();});
                        } else {
                            window.alert('Server: ' + serverlist_name_array[i] + '\nIP connect: ' + serverlist_ip_array[i] + '\nTrouble connecting? Download the official Lolnet launcher. Check the servers online status. You may need to refresh this page to update the server status. You can also try to get help in the forum. https://lolnet.co.nz/forum/viewforum.php?f=133');
                        }
                    }
                }
            }
        });
    }, 2000);
}
$(document).ready(function () {
    //load up index.txt
    //Staff bios program
    if ($('.bio_buffer')) {
        $('.bio_buffer').load('index.txt', function() {
            animation = 'complete';
            var $bu = $('.bio_buffer');
            $bu.text($bu.text().replace(/\[crew\]/g, '<div class="bio"><div>'));
            $bu.text($bu.text().replace(/\[\/crew\]/g, '</div><button>Read More</button></div>'));
            $bu.text($bu.text().replace(/\[name\]/g, '<h2><span>'));
            $bu.text($bu.text().replace(/\[\/name\]/g, '</span></h2>'));
            $bu.text($bu.text().replace(/\[position\]/g, '<h3><span>'));
            $bu.text($bu.text().replace(/\[\/position\]/g, '</span></h3>'));
            $bu.text($bu.text().replace(/\[details\]/g, '<span style="display:none;">'));
            $bu.text($bu.text().replace(/\[\/details\]/g, '</span>'));
            $('.bio_container > div').html($bu.text());
            var el = $('.bio_container > div').children().length * 280 + 'px';
            $('.bio_container > div').width(el);
            for (i=0;i<$('.bio_container > div h2 > span').length;i++) {
                var name = $('.bio_container > div h2 > span:eq('+i+')').text().replace(/\s/g, '');
                $('.bio_container > div > div:eq('+i+')').addClass(name);
                $('.bio_container > div > div:eq('+i+')').css({backgroundImage: 'url(../img/crew/'+name+'.jpg)'});
                var position = $('.bio_container > div h3 > span:eq('+i+')').text();
                $('.bio_container > div h3 > span:eq('+i+')').addClass(position);
            }
            $('.bio_scrollleft').click(function () {
                if (animation === 'complete') {
                    animation = 'incomplete';
                    var left = $('.bio_container > div').css('margin-left');
                    var leftinitial = left.replace('px', '');
                    var left = left.replace('px', '') * 1 + 280 + 'px';
                    if (leftinitial !== '0') {
                        $('.bio_container > div').animate({'margin-left': left});
                        window.setTimeout(function(){animation = 'complete';}, 400);
                    } else { animation = 'complete'; }
                }
            });
            $('.bio_scrollright').click(function () {
                if (animation === 'complete') {
                    animation = 'incomplete';
                    var left = $('.bio_container > div').css('margin-left');
                    var elecount = ($('.bio_container > div').children().length * 280 - 280) * -1 + '';
                    var leftinitial = left.replace('px', '');
                    console.info(elecount);
                    console.info(leftinitial);
                    var left = left.replace('px', '') * 1 - 280 + 'px';
                    if (leftinitial !== elecount) {
                        $('.bio_container > div').animate({'margin-left': left});
                        window.setTimeout(function(){animation = 'complete';}, 400);
                    } else { animation = 'complete'; }
                }
            });
            $('.bio > button').click(function () {
                if (document.getElementsByClassName('alert')[0]) {
                    var element =$(this);
                    var name = element.parent().find('div > h2').text();
                    var position = element.parent().find('div > h3').text();
                    var details = element.parent().find('div > span').html().replace(/\n/g, '<br>');
                    var image_url = element.parent().css('background-image');
                    $('.alert .heading').html(name);
                    $('.alert .contents').html('<div class="alert_bio"></div>' + position + '<br><span class="smalltext">' + details + '</span>');
                    $('.alert .contents > div').css({backgroundImage: image_url});
                    $('.alert .foot').html('<button class="hideme">okay</button>');
                    var elementheighthalf = $('.alert').height() / 2;
                    var elementwidthhalf = $('.alert').width() / 2;
                    $('.alert').css({
                        top: 'calc(50% - ' + elementheighthalf + 'px)',
                        left: 'calc(50% - ' + elementwidthhalf + 'px)'
                    });
                    $('.alert').show();
                    $('.hideme').click(function () {$('.alert').hide();});
                } else {
                    var element =$(this);
                    var name = element.parent().find('div > h2 > span').text();
                    var position = element.parent().find('div > h3').text();
                    var details = element.parent().find('div > span').text();
                    window.alert(name + '\n' + position + '\n' + details);
                }
            });
        });
    }
});
$(document).ready(function () {
    //load up announcements
    if ($('.announce_buffer')) {
        $('.announce_buffer').load('announce.txt', function() {
            var $bu = $('.announce_buffer');
            $bu.html($bu.html().replace(/\[item\]/g, '<div>'));
            $bu.html($bu.html().replace(/\[\/item\]/g, '</div>'));
            $bu.html($bu.html().replace(/\[item sticky\]/g, '<div class="announce_sticky">'));
            $bu.html($bu.html().replace(/\[heading\]/g, '<h2><span>'));
            $bu.html($bu.html().replace(/\[\/heading\]/g, '</span></h2>'));
            $bu.html($bu.html().replace(/\[announcement\]/g, '<div>'));
            $bu.html($bu.html().replace(/\[\/announcement\]/g, '</div>'));
            $bu.html($bu.html().replace(/\[date\]/g, '<div class="announce_date">'));
            $bu.html($bu.html().replace(/\[\/date\]/g, '</div>'));
            $bu.html($bu.html().replace(/\[url\]/g, '<a>'));
            $bu.html($bu.html().replace(/\[\/url\]/g, '</a>'));
            $bu.html($bu.html().replace(/\[b\]/g, '<b>'));
            $bu.html($bu.html().replace(/\[\/b\]/g, '</b>'));
            $bu.html($bu.html().replace(/\[u\]/g, '<u>'));
            $bu.html($bu.html().replace(/\[\/u\]/g, '</u>'));
            $bu.html($bu.html().replace(/\[i\]/g, '<i>'));
            $bu.html($bu.html().replace(/\[\/i\]/g, '</i>'));
            $bu.html($bu.html().replace(/\[s\]/g, '<strike>'));
            $bu.html($bu.html().replace(/\[\/s\]/g, '</strike>'));
            $bu.html($bu.html().replace(/\[image\]/g, '<a><img>'));
            $bu.html($bu.html().replace(/\[\/image\]/g, '</a>'));
            $bu.html($bu.html().replace(/\[break\]/g, '<br>'));
            $('.announce').html($bu.html());
            for (i=0;i<$('.announce > div a').length;i++) {
                $('.announce a:eq('+i+')').attr('href', $('.announce a:eq('+i+')').text());
            }
            for (i=0;i<$('.announce img').length;i++) {
                var text = $('.announce img:eq('+i+')').parent('a').text();
                $('.announce img:eq('+i+')').attr('src', text);
                $('.announce img:eq('+i+')').parent('a').css({fontSize:'0px'});
            }
            var sticky = '<div class="announce_sticky_istop">' + $('.announce .announce_sticky').html() + '</div>';
            var all = $('.announce').html();
            $('.announce').html(sticky + all);
            $('.announce .announce_sticky').remove();
        });
    }
});
$(document).ready(function () {
    //fix for anchor links
    var hash = window.location.hash;
    if (hash) {
        window.setTimeout(function () {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000);//scroll time
        }, 500);//scroll delay
    }
});